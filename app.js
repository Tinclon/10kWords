// --- State ---
var langDataMap = {};
var langSearchIndex = {};
var langSearchState = {};
var searchTimers = {};

// --- Utilities ---
function renderPageHeader(langId, data, activePage) {
  var conjActive = activePage === 'conjugation' ? ' active' : '';
  var chartActive = activePage === 'chart' ? ' active' : '';
  var label = activePage === 'conjugation' ? 'Conjugations' : 'Chart';
  var html = '<div class="d-flex align-items-center mb-3 flex-wrap gap-2">';
  html += '<h1 class="mb-0 me-3" style="color:' + data.theme.primary + ';">' + esc(data.title) + '</h1>';
  html += '<div class="btn-group btn-group-sm" role="group">';
  html += '<button type="button" class="btn btn-outline-secondary' + conjActive + '" onclick="switchPage(\'' + langId + '\', \'conjugation\', this)"><i class="bi bi-table"></i></button>';
  html += '<button type="button" class="btn btn-outline-secondary' + chartActive + '" onclick="switchPage(\'' + langId + '\', \'chart\', this)"><i class="bi bi-grid-3x3"></i></button>';
  html += '</div>';
  html += '<span class="mb-0" style="color:' + data.theme.primary + '; font-size:1.2rem; font-weight:500;" id="' + langId + '-page-label">' + label + '</span>';
  html += '</div>';
  return html;
}

function esc(s) {
  var div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}

// --- Rendering ---
function renderPattern(p) {
  var dimClass = p.dimmed ? ' dimmed' : '';
  var html = '<div class="mb-4' + dimClass + '">';
  html += '<h2>' + esc(p.name) + ' &mdash; ' + esc(p.description) + '</h2>';
  html += '<p class="text-muted small">' + esc(p.verbs) + '</p>';
  html += '<table class="table table-bordered table-striped table-sm" style="max-width:50%;">';
  html += '<thead class="table-dark text-center"><tr><th colspan="2">' + esc(p.example) + '</th></tr></thead>';
  if (p.note) {
    html += '<tr><td colspan="2" class="text-center fst-italic text-muted">' + esc(p.note) + '</td></tr>';
  } else if (p.conjugations) {
    for (var i = 0; i < p.conjugations.length; i++) {
      html += '<tr><td>' + esc(p.conjugations[i][0]) + '</td><td>' + esc(p.conjugations[i][1]) + '</td></tr>';
    }
  }
  html += '</table></div>';
  return html;
}

function applyTheme(containerId, theme) {
  var sel = '#' + containerId;
  var style = document.createElement('style');
  style.textContent =
    sel + ' .nav-tabs .nav-link.active { color: ' + theme.primary + '; border-bottom-color: #fff; }\n' +
    sel + ' .nav-tabs .nav-link { color: ' + theme.primary + '; }\n' +
    sel + ' h1 { color: ' + theme.primary + '; border-bottom-color: ' + theme.primary + '; }\n' +
    sel + ' h2 { color: ' + theme.secondary + '; }\n' +
    sel + ' .table-dark { --bs-table-bg: ' + theme.tableHeader + '; --bs-table-color: #fff; }\n' +
    sel + ' .table-striped > tbody > tr:nth-of-type(odd) > * { --bs-table-striped-bg: ' + theme.stripedRow + '; }\n' +
    sel + ' .table-bordered { --bs-border-color: ' + theme.border + '; }\n' +
    sel + ' .info-box { border-color: ' + theme.border + ' !important; }\n' +
    sel + ' .info-box h6:first-child { color: ' + theme.primary + '; }\n';
  document.head.appendChild(style);
}

function renderTenseContent(containerId, tenseKey, tense) {
  var html = '';
  html += '<div class="btn-group col-selector mb-3" role="group">';
  for (var c = 0; c < tense.columns.length; c++) {
    var colLabel = tense.columns[c].label || ('Column ' + (c+1));
    var colActive = (c === 0) ? ' active' : '';
    html += '<button type="button" class="btn btn-outline-secondary btn-sm' + colActive + '" onclick="switchCol(this)">' + esc(colLabel) + '</button>';
  }
  html += '</div>';
  html += '<div class="row">';
  for (var c = 0; c < tense.columns.length; c++) {
    var colActiveClass = (c === 0) ? ' col-active' : '';
    html += '<div class="col-md-4 verb-col' + colActiveClass + '">';
    var col = tense.columns[c];
    html += '<h5 class="text-center text-muted border-bottom pb-1 mb-2 col-header" style="font-size:0.95rem;">' + esc(col.label) + '</h5>';
    if (col.regular) {
      html += '<div class="regular-example">';
      html += '<table class="table table-bordered table-striped table-sm mb-0" style="max-width:80%;">';
      html += '<thead class="table-dark text-center"><tr><th colspan="2">' + esc(col.regular.example) + '</th></tr></thead>';
      for (var r = 0; r < col.regular.conjugations.length; r++) {
        var row = col.regular.conjugations[r];
        if (row[0] || row[1]) {
          html += '<tr><td>' + esc(row[0]) + '</td><td>' + esc(row[1]) + '</td></tr>';
        }
      }
      html += '</table></div>';
    }
    var patterns = col.patterns;
    for (var p = 0; p < patterns.length; p++) {
      html += renderPattern(patterns[p]);
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}

function renderMoodContent(containerId, data, moodKey) {
  var groups = data.groups[moodKey];
  var html = '';

  html += '<ul class="nav nav-tabs mb-0" role="tablist">';
  for (var g = 0; g < groups.length; g++) {
    var group = groups[g];
    var groupId = containerId + '-' + moodKey + '-group-' + g;
    var active = (g === 0) ? ' active' : '';
    var icon = group.icon ? '<i class="bi ' + group.icon + ' me-1"></i>' : '';
    html += '<li class="nav-item"><a class="nav-link' + active + '" data-bs-toggle="tab" href="#' + groupId + '">' + icon + esc(group.label) + '</a></li>';
  }
  html += '</ul>';

  html += '<div class="tab-content">';
  for (var g = 0; g < groups.length; g++) {
    var group = groups[g];
    var groupId = containerId + '-' + moodKey + '-group-' + g;
    var active = (g === 0) ? ' active' : '';
    html += '<div class="tab-pane' + active + '" id="' + groupId + '">';

    var tenseKeys = group.tenses;
    html += '<ul class="nav nav-tabs nav-tabs-sub mt-2" role="tablist">';
    for (var t = 0; t < tenseKeys.length; t++) {
      var key = tenseKeys[t];
      var tense = data.tenses[key];
      var tabId = containerId + '-' + key;
      var subActive = (t === 0) ? ' active' : '';
      var tenseIcon = tense.icon ? '<i class="bi ' + tense.icon + ' me-1"></i>' : '';
      html += '<li class="nav-item"><a class="nav-link' + subActive + '" data-bs-toggle="tab" href="#' + tabId + '">' + tenseIcon + esc(tense.label) + '</a></li>';
    }
    html += '</ul>';

    html += '<div class="tab-content">';
    for (var t = 0; t < tenseKeys.length; t++) {
      var key = tenseKeys[t];
      var tense = data.tenses[key];
      var tabId = containerId + '-' + key;
      var subActive = (t === 0) ? ' active' : '';
      html += '<div class="tab-pane' + subActive + '" id="' + tabId + '">';
      html += renderTenseContent(containerId, key, tense);
      html += '</div>';
    }
    html += '</div>';

    html += '</div>';
  }
  html += '</div>';

  return html;
}

function renderLanguage(containerId, data) {
  var container = document.getElementById(containerId);
  var moods = data.moods;

  applyTheme(containerId, data.theme);

  var html = renderPageHeader(containerId, data, 'conjugation');

  // Hidden search bar (for future use)
  html += '<div class="input-group d-none" style="max-width:280px;">';
  html += '<input type="text" class="form-control form-control-sm" id="' + containerId + '-search" placeholder="Search verb..." autocomplete="off">';
  html += '<button class="btn btn-outline-secondary btn-sm d-none" type="button" id="' + containerId + '-search-clear" onclick="clearVerbSearch(\'' + containerId + '\')"><i class="bi bi-x-lg"></i></button>';
  html += '</div>';

  // Mood toggle
  html += '<div class="btn-group mood-toggle" role="group">';
  for (var m = 0; m < moods.length; m++) {
    var mood = moods[m];
    var active = (m === 0) ? ' active' : '';
    var icon = mood.icon ? '<i class="bi ' + mood.icon + ' me-1"></i>' : '';
    html += '<button type="button" class="btn btn-outline-secondary' + active + '" onclick="switchMood(\'' + containerId + '\', \'' + mood.key + '\', this)">' + icon + esc(mood.label) + '</button>';
  }
  html += '</div>';

  // Info box
  html += '<div class="info-box card" id="' + containerId + '-infobox">';
  html += '<div class="card-body">';
  html += '<h6 class="text-muted" id="' + containerId + '-infobox-mood"></h6>';
  html += '<p class="text-muted" id="' + containerId + '-infobox-mood-desc"></p>';
  html += '<h6 id="' + containerId + '-infobox-tense"></h6>';
  html += '<p id="' + containerId + '-infobox-tense-desc"></p>';
  html += '<div id="' + containerId + '-infobox-extra" class="d-none">';
  html += '<a class="small" data-bs-toggle="collapse" href="#' + containerId + '-infobox-extra-body" role="button">Additional info</a>';
  html += '<div class="collapse mt-1" id="' + containerId + '-infobox-extra-body"></div>';
  html += '</div>';
  html += '</div></div>';

  // Mood content panels
  for (var m = 0; m < moods.length; m++) {
    var mood = moods[m];
    var moodId = containerId + '-mood-' + mood.key;
    var display = (m === 0) ? '' : ' d-none';
    html += '<div class="mood-panel' + display + '" id="' + moodId + '">';
    html += renderMoodContent(containerId, data, mood.key);
    html += '</div>';
  }

  container.innerHTML = html;

  langDataMap[containerId] = data;
  langSearchIndex[containerId] = buildVerbIndex(data);

  updateInfoBox(containerId, data, moods[0].key, data.groups[moods[0].key][0].tenses[0]);

  // Search input listener
  document.getElementById(containerId + '-search').addEventListener('input', function() {
    onSearchInput(containerId);
  });

  // Tab change listener
  container.addEventListener('shown.bs.tab', function(e) {
    var href = e.target.getAttribute('href');
    if (!href) return;
    var id = href.substring(1);
    var activeMoodKey = getActiveMoodKey(containerId);
    var activeTenseKey = null;

    for (var mk in data.groups) {
      var grps = data.groups[mk];
      for (var g = 0; g < grps.length; g++) {
        if (id === containerId + '-' + mk + '-group-' + g) {
          activeTenseKey = getActiveTenseKey(containerId, data, mk);
          updateInfoBox(containerId, data, mk, activeTenseKey);
          if (langSearchState[containerId]) {
            var matches = langSearchIndex[containerId][langSearchState[containerId]] || [];
            renderSearchResults(containerId, data, mk, activeTenseKey, matches);
          }
          return;
        }
      }
    }

    for (var tk in data.tenses) {
      if (id === containerId + '-' + tk) {
        for (var mk in data.groups) {
          var groups = data.groups[mk];
          for (var g = 0; g < groups.length; g++) {
            if (groups[g].tenses.indexOf(tk) !== -1) {
              updateInfoBox(containerId, data, mk, tk);
              if (langSearchState[containerId]) {
                var matches = langSearchIndex[containerId][langSearchState[containerId]] || [];
                renderSearchResults(containerId, data, mk, tk, matches);
              }
              return;
            }
          }
        }
      }
    }
  });
}

// --- Info Box ---
function updateInfoBox(containerId, data, moodKey, tenseKey) {
  var mood = null;
  for (var i = 0; i < data.moods.length; i++) {
    if (data.moods[i].key === moodKey) { mood = data.moods[i]; break; }
  }
  var tense = data.tenses[tenseKey];
  var el = function(id) { return document.getElementById(id); };
  var moodEl = el(containerId + '-infobox-mood');
  var moodDescEl = el(containerId + '-infobox-mood-desc');
  var tenseEl = el(containerId + '-infobox-tense');
  var tenseDescEl = el(containerId + '-infobox-tense-desc');
  if (moodEl) moodEl.textContent = mood ? mood.label : '';
  if (moodDescEl) moodDescEl.textContent = mood && mood.description ? mood.description : '';
  if (tenseEl) tenseEl.textContent = tense ? tense.label : '';
  if (tenseDescEl) tenseDescEl.textContent = tense && tense.description ? tense.description : '';
  var extraWrap = el(containerId + '-infobox-extra');
  var extraBody = el(containerId + '-infobox-extra-body');
  if (extraWrap && extraBody) {
    if (tense && tense.extra) {
      extraWrap.classList.remove('d-none');
      extraBody.innerHTML = tense.extra;
      extraBody.classList.remove('show');
    } else {
      extraWrap.classList.add('d-none');
      extraBody.innerHTML = '';
    }
  }
}

// --- Navigation Helpers ---
function getActiveMoodKey(containerId) {
  var container = document.getElementById(containerId);
  var activeBtn = container.querySelector('.mood-toggle .btn.active');
  if (!activeBtn) return null;
  var match = activeBtn.getAttribute('onclick').match(/switchMood\('[^']+',\s*'([^']+)'/);
  return match ? match[1] : null;
}

function getActiveTenseKey(containerId, data, moodKey) {
  var moodPanel = document.getElementById(containerId + '-mood-' + moodKey);
  var activeTenseKey = data.groups[moodKey][0].tenses[0];
  if (moodPanel) {
    var activeGroupTab = moodPanel.querySelector('.nav-tabs > .nav-item > .nav-link.active');
    if (activeGroupTab) {
      var groupHref = activeGroupTab.getAttribute('href');
      if (groupHref) {
        var groupPane = document.getElementById(groupHref.substring(1));
        if (groupPane) {
          var activeSubTab = groupPane.querySelector('.nav-tabs-sub .nav-link.active');
          if (activeSubTab) {
            var subHref = activeSubTab.getAttribute('href');
            if (subHref) {
              var subId = subHref.substring(1);
              var prefix = containerId + '-';
              if (subId.startsWith(prefix)) {
                var tk = subId.substring(prefix.length);
                if (data.tenses[tk]) activeTenseKey = tk;
              }
            }
          }
        }
      }
    }
  }
  return activeTenseKey;
}

// --- Navigation ---
function switchMood(containerId, moodKey, btn) {
  var container = document.getElementById(containerId);
  container.querySelectorAll('.mood-toggle .btn').forEach(function(b) { b.classList.remove('active'); });
  container.querySelectorAll('.mood-panel').forEach(function(p) { p.classList.add('d-none'); });
  btn.classList.add('active');
  document.getElementById(containerId + '-mood-' + moodKey).classList.remove('d-none');
  var data = langDataMap[containerId];
  if (data && data.groups[moodKey]) {
    var activeTenseKey = getActiveTenseKey(containerId, data, moodKey);
    updateInfoBox(containerId, data, moodKey, activeTenseKey);
    if (langSearchState[containerId]) {
      var matches = langSearchIndex[containerId][langSearchState[containerId]] || [];
      renderSearchResults(containerId, data, moodKey, activeTenseKey, matches);
    }
  }
}

function switchCol(btn) {
  var group = btn.parentElement;
  var pane = group.parentElement;
  var buttons = group.querySelectorAll('.btn');
  var cols = pane.querySelectorAll('.verb-col');
  var idx = Array.prototype.indexOf.call(buttons, btn);
  buttons.forEach(function(b) { b.classList.remove('active'); });
  cols.forEach(function(c) { c.classList.remove('col-active'); });
  btn.classList.add('active');
  if (cols[idx]) cols[idx].classList.add('col-active');
}

function switchLang(id, el) {
  document.querySelectorAll('.lang-page').forEach(function(p) { p.classList.add('d-none'); });
  document.querySelectorAll('.nav-pills .nav-link').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById(id).classList.remove('d-none');
  el.classList.add('active');
  // Reset toggle to conjugation view
  document.querySelectorAll('[id="' + id + '-page-label"]').forEach(function(l) {
    l.textContent = 'Conjugations';
    var btnGroup = l.previousElementSibling;
    if (btnGroup) {
      btnGroup.querySelectorAll('.btn').forEach(function(b, i) {
        b.classList.toggle('active', i === 0);
      });
    }
  });
}

function switchPage(langId, page, el) {
  document.querySelectorAll('.lang-page').forEach(function(p) { p.classList.add('d-none'); });
  var targetId = page === 'conjugation' ? langId : langId + '-' + page;
  document.getElementById(targetId).classList.remove('d-none');
  var idx = page === 'conjugation' ? 0 : 1;
  document.querySelectorAll('[id="' + langId + '-page-label"]').forEach(function(l) {
    l.textContent = page === 'conjugation' ? 'Conjugations' : 'Chart';
    var btnGroup = l.previousElementSibling;
    if (btnGroup) {
      btnGroup.querySelectorAll('.btn').forEach(function(b, i) {
        b.classList.toggle('active', i === idx);
      });
    }
  });
}

// --- Search ---
function buildVerbIndex(data) {
  var index = {};
  for (var tenseKey in data.tenses) {
    var tense = data.tenses[tenseKey];
    for (var c = 0; c < tense.columns.length; c++) {
      var patterns = tense.columns[c].patterns;
      for (var p = 0; p < patterns.length; p++) {
        var verbList = patterns[p].verbs.split(',');
        for (var v = 0; v < verbList.length; v++) {
          var verb = verbList[v].trim().toLowerCase();
          if (!verb) continue;
          if (!index[verb]) index[verb] = [];
          index[verb].push({ tenseKey: tenseKey, colIndex: c, patternIndex: p });
        }
      }
    }
  }
  return index;
}

function onSearchInput(containerId) {
  clearTimeout(searchTimers[containerId]);
  searchTimers[containerId] = setTimeout(function() {
    var input = document.getElementById(containerId + '-search');
    searchVerb(containerId, input.value);
  }, 500);
}

function searchVerb(containerId, query) {
  var data = langDataMap[containerId];
  var index = langSearchIndex[containerId];
  var normalized = query.trim().toLowerCase();

  if (!normalized) {
    clearVerbSearch(containerId);
    return;
  }

  document.getElementById(containerId + '-search-clear').classList.remove('d-none');
  langSearchState[containerId] = normalized;

  var matches = index[normalized] || [];
  var activeMoodKey = getActiveMoodKey(containerId);
  var activeTenseKey = getActiveTenseKey(containerId, data, activeMoodKey);
  renderSearchResults(containerId, data, activeMoodKey, activeTenseKey, matches);
}

function renderSearchResults(containerId, data, moodKey, tenseKey, allMatches) {
  var tensePane = document.getElementById(containerId + '-' + tenseKey);
  if (!tensePane) return;

  var tense = data.tenses[tenseKey];
  var tenseMatches = allMatches.filter(function(m) { return m.tenseKey === tenseKey; });

  if (tenseMatches.length === 0) {
    var html = '<div class="alert alert-light border mt-3">';
    if (allMatches.length > 0) {
      html += '<i class="bi bi-info-circle me-2"></i>';
      html += 'No conjugation found for <strong>' + esc(langSearchState[containerId]) + '</strong> in ' + esc(tense.label) + '.';
      var foundTenses = [];
      var seen = {};
      for (var i = 0; i < allMatches.length; i++) {
        var tk = allMatches[i].tenseKey;
        if (!seen[tk]) {
          seen[tk] = true;
          foundTenses.push(data.tenses[tk].label);
        }
      }
      html += '<br><small class="text-muted">Found in: ' + foundTenses.map(esc).join(', ') + '</small>';
    } else {
      html += '<i class="bi bi-search me-2"></i>';
      html += 'Verb <strong>' + esc(langSearchState[containerId]) + '</strong> not found.';
    }
    html += '</div>';
    tensePane.innerHTML = html;
    return;
  }

  var html = '';
  for (var i = 0; i < tenseMatches.length; i++) {
    var m = tenseMatches[i];
    var pattern = tense.columns[m.colIndex].patterns[m.patternIndex];
    html += renderPattern(pattern);
  }
  tensePane.innerHTML = html;
}

function clearVerbSearch(containerId) {
  var input = document.getElementById(containerId + '-search');
  input.value = '';
  document.getElementById(containerId + '-search-clear').classList.add('d-none');
  langSearchState[containerId] = null;
  resetVerbSearch(containerId);
}

function resetVerbSearch(containerId) {
  var data = langDataMap[containerId];
  langSearchState[containerId] = null;
  for (var tenseKey in data.tenses) {
    var tensePane = document.getElementById(containerId + '-' + tenseKey);
    if (tensePane) {
      tensePane.innerHTML = renderTenseContent(containerId, tenseKey, data.tenses[tenseKey]);
    }
  }
}

// --- Chart ---
function renderChart(containerId, data, columns, rows, cells) {
  var container = document.getElementById(containerId);

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered table-sm" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var i = 0; i < columns.length; i++) {
    html += '<th class="text-center" style="font-size:1rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[i]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.85rem;">not used</span>';
      } else {
        html += '<td style="font-size:0.9rem; vertical-align:middle; text-align:center;">';
        html += '<strong>' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.8rem;">' + esc(cell.rule) + '</span>';
        if (cell.examples) {
          for (var e = 0; e < cell.examples.length; e++) {
            html += '<br><span style="font-size:0.75rem;">' + esc(cell.examples[e]) + '</span>';
          }
        }
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- English Charts ---
function renderEnglishCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past', 'Present', 'Future', 'Conditional'];
  var rows = ['Simple', 'Perfect', 'Continuous', 'Perfect Continuous'];

  var cells = [
    // Simple
    [
      { form: 'Past Simple', rule: 'verb-ed / irregular',
        er: [['I walked', 'we walked'], ['you walked', 'you walked'], ['he walked', 'they walked']],
        ir: [['I went', 'we went'], ['you went', 'you went'], ['he went', 'they went']],
        re: [['I could', 'we could'], ['you could', 'you could'], ['he could', 'they could']] },
      { form: 'Present Simple', rule: 'verb / verb-s',
        er: [['I walk', 'we walk'], ['you walk', 'you walk'], ['he walks', 'they walk']],
        ir: [['I go', 'we go'], ['you go', 'you go'], ['he goes', 'they go']],
        re: [['I can', 'we can'], ['you can', 'you can'], ['he can', 'they can']] },
      { form: 'Future Simple', rule: 'will + verb',
        er: [['I will walk', 'we will walk'], ['you will walk', 'you will walk'], ['he will walk', 'they will walk']],
        ir: [['I will go', 'we will go'], ['you will go', 'you will go'], ['he will go', 'they will go']],
        re: [['I will be able', 'we will be able'], ['you will be able', 'you will be able'], ['he will be able', 'they will be able']] },
      { form: 'Conditional', rule: 'would + verb',
        er: [['I would walk', 'we would walk'], ['you would walk', 'you would walk'], ['he would walk', 'they would walk']],
        ir: [['I would go', 'we would go'], ['you would go', 'you would go'], ['he would go', 'they would go']],
        re: [['I could', 'we could'], ['you could', 'you could'], ['he could', 'they could']] }
    ],
    // Perfect
    [
      { form: 'Past Perfect', rule: 'had + past participle',
        er: [['I had walked', 'we had walked'], ['you had walked', 'you had walked'], ['he had walked', 'they had walked']],
        ir: [['I had gone', 'we had gone'], ['you had gone', 'you had gone'], ['he had gone', 'they had gone']],
        re: [['I had been able', 'we had been able'], ['you had been able', 'you had been able'], ['he had been able', 'they had been able']] },
      { form: 'Present Perfect', rule: 'have/has + past participle',
        er: [['I have walked', 'we have walked'], ['you have walked', 'you have walked'], ['he has walked', 'they have walked']],
        ir: [['I have gone', 'we have gone'], ['you have gone', 'you have gone'], ['he has gone', 'they have gone']],
        re: [['I have been able', 'we have been able'], ['you have been able', 'you have been able'], ['he has been able', 'they have been able']] },
      { form: 'Future Perfect', rule: 'will have + past participle',
        er: [['I will have walked', 'we will have walked'], ['you will have walked', 'you will have walked'], ['he will have walked', 'they will have walked']],
        ir: [['I will have gone', 'we will have gone'], ['you will have gone', 'you will have gone'], ['he will have gone', 'they will have gone']],
        re: [['I will have been able', 'we will have been able'], ['you will have been able', 'you will have been able'], ['he will have been able', 'they will have been able']] },
      { form: 'Cond. Perfect', rule: 'would have + past participle',
        er: [['I would have walked', 'we would have walked'], ['you would have walked', 'you would have walked'], ['he would have walked', 'they would have walked']],
        ir: [['I would have gone', 'we would have gone'], ['you would have gone', 'you would have gone'], ['he would have gone', 'they would have gone']],
        re: [['I would have been able', 'we would have been able'], ['you would have been able', 'you would have been able'], ['he would have been able', 'they would have been able']] }
    ],
    // Continuous
    [
      { form: 'Past Continuous', rule: 'was/were + verb-ing',
        er: [['I was walking', 'we were walking'], ['you were walking', 'you were walking'], ['he was walking', 'they were walking']],
        ir: [['I was going', 'we were going'], ['you were going', 'you were going'], ['he was going', 'they were going']],
        re: null },
      { form: 'Present Continuous', rule: 'am/is/are + verb-ing',
        er: [['I am walking', 'we are walking'], ['you are walking', 'you are walking'], ['he is walking', 'they are walking']],
        ir: [['I am going', 'we are going'], ['you are going', 'you are going'], ['he is going', 'they are going']],
        re: null },
      { form: 'Future Continuous', rule: 'will be + verb-ing',
        er: [['I will be walking', 'we will be walking'], ['you will be walking', 'you will be walking'], ['he will be walking', 'they will be walking']],
        ir: [['I will be going', 'we will be going'], ['you will be going', 'you will be going'], ['he will be going', 'they will be going']],
        re: null },
      { form: 'Cond. Continuous', rule: 'would be + verb-ing',
        er: [['I would be walking', 'we would be walking'], ['you would be walking', 'you would be walking'], ['he would be walking', 'they would be walking']],
        ir: [['I would be going', 'we would be going'], ['you would be going', 'you would be going'], ['he would be going', 'they would be going']],
        re: null }
    ],
    // Perfect Continuous
    [
      { form: 'Past Perf. Cont.', rule: 'had been + verb-ing',
        er: [['I had been walking', 'we had been walking'], ['you had been walking', 'you had been walking'], ['he had been walking', 'they had been walking']],
        ir: [['I had been going', 'we had been going'], ['you had been going', 'you had been going'], ['he had been going', 'they had been going']],
        re: null },
      { form: 'Pres. Perf. Cont.', rule: 'have/has been + verb-ing',
        er: [['I have been walking', 'we have been walking'], ['you have been walking', 'you have been walking'], ['he has been walking', 'they have been walking']],
        ir: [['I have been going', 'we have been going'], ['you have been going', 'you have been going'], ['he has been going', 'they have been going']],
        re: null },
      { form: 'Fut. Perf. Cont.', rule: 'will have been + verb-ing',
        er: [['I will have been walking', 'we will have been walking'], ['you will have been walking', 'you will have been walking'], ['he will have been walking', 'they will have been walking']],
        ir: [['I will have been going', 'we will have been going'], ['you will have been going', 'you will have been going'], ['he will have been going', 'they will have been going']],
        re: null },
      { form: 'Cond. Perf. Cont.', rule: 'would have been + verb-ing',
        er: [['I would have been walking', 'we would have been walking'], ['you would have been walking', 'you would have been walking'], ['he would have been walking', 'they would have been walking']],
        ir: [['I would have been going', 'we would have been going'], ['you would have been going', 'you would have been going'], ['he would have been going', 'they would have been going']],
        re: null }
    ]
  ];

  var groups = ['Regular: walk', 'Irregular: go', 'Modal: can'];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          if (!verbConjs[g]) {
            html += '<div style="flex:1; min-width:0;">';
            html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
            html += '<div class="text-muted fst-italic" style="font-size:0.55rem; text-align:center;">n/a</div>';
            html += '</div>';
          } else {
            html += '<div style="flex:1; min-width:0;">';
            html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
            html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
            for (var p = 0; p < verbConjs[g].length; p++) {
              html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
            }
            html += '</table></div>';
          }
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- French Charts ---
function renderFrenchCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past (Passé)', 'Present (Présent)', 'Future (Futur)', 'Conditional (Conditionnel)'];
  var rows = ['Simple (Simple)', 'Compound (Composé)', 'Imperfect (Imparfait)', 'Pluperfect (Plus-que-parfait)'];

  // Each cell has 3 verb groups: -er (marcher), -ir (finir), -re (vendre)
  var cells = [
    // Simple
    [
      { form: 'Passé simple', rule: 'Stem + endings',
        er: [['je marchai', 'n. marchâmes'], ['tu marchas', 'v. marchâtes'], ['il marcha', 'ils marchèrent']],
        ir: [['je finis', 'n. finîmes'], ['tu finis', 'v. finîtes'], ['il finit', 'ils finirent']],
        re: [['je vendis', 'n. vendîmes'], ['tu vendis', 'v. vendîtes'], ['il vendit', 'ils vendirent']] },
      { form: 'Présent', rule: 'Stem + endings',
        er: [['je marche', 'n. marchons'], ['tu marches', 'v. marchez'], ['il marche', 'ils marchent']],
        ir: [['je finis', 'n. finissons'], ['tu finis', 'v. finissez'], ['il finit', 'ils finissent']],
        re: [['je vends', 'n. vendons'], ['tu vends', 'v. vendez'], ['il vend', 'ils vendent']] },
      { form: 'Futur simple', rule: 'Inf. + endings',
        er: [['je marcherai', 'n. marcherons'], ['tu marcheras', 'v. marcherez'], ['il marchera', 'ils marcheront']],
        ir: [['je finirai', 'n. finirons'], ['tu finiras', 'v. finirez'], ['il finira', 'ils finiront']],
        re: [['je vendrai', 'n. vendrons'], ['tu vendras', 'v. vendrez'], ['il vendra', 'ils vendront']] },
      { form: 'Cond. présent', rule: 'Inf. + imp. endings',
        er: [['je marcherais', 'n. marcherions'], ['tu marcherais', 'v. marcheriez'], ['il marcherait', 'ils marcheraient']],
        ir: [['je finirais', 'n. finirions'], ['tu finirais', 'v. finiriez'], ['il finirait', 'ils finiraient']],
        re: [['je vendrais', 'n. vendrions'], ['tu vendrais', 'v. vendriez'], ['il vendrait', 'ils vendraient']] }
    ],
    // Compound
    [
      { form: 'Passé composé', rule: 'Pres. avoir + p.p.',
        er: [["j'ai marché", 'n. avons marché'], ['tu as marché', 'v. avez marché'], ['il a marché', 'ils ont marché']],
        ir: [["j'ai fini", 'n. avons fini'], ['tu as fini', 'v. avez fini'], ['il a fini', 'ils ont fini']],
        re: [["j'ai vendu", 'n. avons vendu'], ['tu as vendu', 'v. avez vendu'], ['il a vendu', 'ils ont vendu']] },
      null,
      { form: 'Futur antérieur', rule: 'Fut. avoir + p.p.',
        er: [["j'aurai marché", 'n. aurons marché'], ['tu auras marché', 'v. aurez marché'], ['il aura marché', 'ils auront marché']],
        ir: [["j'aurai fini", 'n. aurons fini'], ['tu auras fini', 'v. aurez fini'], ['il aura fini', 'ils auront fini']],
        re: [["j'aurai vendu", 'n. aurons vendu'], ['tu auras vendu', 'v. aurez vendu'], ['il aura vendu', 'ils auront vendu']] },
      { form: 'Cond. passé', rule: 'Cond. avoir + p.p.',
        er: [["j'aurais marché", 'n. aurions marché'], ['tu aurais marché', 'v. auriez marché'], ['il aurait marché', 'ils auraient marché']],
        ir: [["j'aurais fini", 'n. aurions fini'], ['tu aurais fini', 'v. auriez fini'], ['il aurait fini', 'ils auraient fini']],
        re: [["j'aurais vendu", 'n. aurions vendu'], ['tu aurais vendu', 'v. auriez vendu'], ['il aurait vendu', 'ils auraient vendu']] }
    ],
    // Imperfect
    [
      { form: 'Imparfait', rule: 'Nous-stem + endings',
        er: [['je marchais', 'n. marchions'], ['tu marchais', 'v. marchiez'], ['il marchait', 'ils marchaient']],
        ir: [['je finissais', 'n. finissions'], ['tu finissais', 'v. finissiez'], ['il finissait', 'ils finissaient']],
        re: [['je vendais', 'n. vendions'], ['tu vendais', 'v. vendiez'], ['il vendait', 'ils vendaient']] },
      null, null, null
    ],
    // Pluperfect
    [
      { form: 'Plus-que-parfait', rule: 'Imp. avoir + p.p.',
        er: [["j'avais marché", 'n. avions marché'], ['tu avais marché', 'v. aviez marché'], ['il avait marché', 'ils avaient marché']],
        ir: [["j'avais fini", 'n. avions fini'], ['tu avais fini', 'v. aviez fini'], ['il avait fini', 'ils avaient fini']],
        re: [["j'avais vendu", 'n. avions vendu'], ['tu avais vendu', 'v. aviez vendu'], ['il avait vendu', 'ils avaient vendu']] },
      null, null, null
    ]
  ];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  var groups = ['-er: marcher', '-ir: finir', '-re: vendre'];
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          html += '<div style="flex:1; min-width:0;">';
          html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
          html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
          for (var p = 0; p < verbConjs[g].length; p++) {
            html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
          }
          html += '</table></div>';
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- Spanish Charts ---
function renderSpanishCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past (Pasado)', 'Present (Presente)', 'Future (Futuro)', 'Conditional (Condicional)'];
  var rows = ['Simple (Simple)', 'Compound (Compuesto)', 'Imperfect (Imperfecto)', 'Pluperfect (Pluscuamperfecto)'];

  var cells = [
    // Simple
    [
      { form: 'Pretérito perfecto', rule: 'Stem + endings',
        er: [['yo hablé', 'n. hablamos'], ['tú hablaste', 'v. hablasteis'], ['él habló', 'ellos hablaron']],
        ir: [['yo comí', 'n. comimos'], ['tú comiste', 'v. comisteis'], ['él comió', 'ellos comieron']],
        re: [['yo viví', 'n. vivimos'], ['tú viviste', 'v. vivisteis'], ['él vivió', 'ellos vivieron']] },
      { form: 'Presente', rule: 'Stem + endings',
        er: [['yo hablo', 'n. hablamos'], ['tú hablas', 'v. habláis'], ['él habla', 'ellos hablan']],
        ir: [['yo como', 'n. comemos'], ['tú comes', 'v. coméis'], ['él come', 'ellos comen']],
        re: [['yo vivo', 'n. vivimos'], ['tú vives', 'v. vivís'], ['él vive', 'ellos viven']] },
      { form: 'Futuro simple', rule: 'Inf. + endings',
        er: [['yo hablaré', 'n. hablaremos'], ['tú hablarás', 'v. hablaréis'], ['él hablará', 'ellos hablarán']],
        ir: [['yo comeré', 'n. comeremos'], ['tú comerás', 'v. comeréis'], ['él comerá', 'ellos comerán']],
        re: [['yo viviré', 'n. viviremos'], ['tú vivirás', 'v. viviréis'], ['él vivirá', 'ellos vivirán']] },
      { form: 'Cond. simple', rule: 'Inf. + endings',
        er: [['yo hablaría', 'n. hablaríamos'], ['tú hablarías', 'v. hablaríais'], ['él hablaría', 'ellos hablarían']],
        ir: [['yo comería', 'n. comeríamos'], ['tú comerías', 'v. comeríais'], ['él comería', 'ellos comerían']],
        re: [['yo viviría', 'n. viviríamos'], ['tú vivirías', 'v. viviríais'], ['él viviría', 'ellos vivirían']] }
    ],
    // Compound
    [
      { form: 'Pret. perf. compuesto', rule: 'Pres. haber + p.p.',
        er: [['yo he hablado', 'n. hemos hablado'], ['tú has hablado', 'v. habéis hablado'], ['él ha hablado', 'ellos han hablado']],
        ir: [['yo he comido', 'n. hemos comido'], ['tú has comido', 'v. habéis comido'], ['él ha comido', 'ellos han comido']],
        re: [['yo he vivido', 'n. hemos vivido'], ['tú has vivido', 'v. habéis vivido'], ['él ha vivido', 'ellos han vivido']] },
      null,
      { form: 'Futuro perfecto', rule: 'Fut. haber + p.p.',
        er: [['yo habré hablado', 'n. habremos hablado'], ['tú habrás hablado', 'v. habréis hablado'], ['él habrá hablado', 'ellos habrán hablado']],
        ir: [['yo habré comido', 'n. habremos comido'], ['tú habrás comido', 'v. habréis comido'], ['él habrá comido', 'ellos habrán comido']],
        re: [['yo habré vivido', 'n. habremos vivido'], ['tú habrás vivido', 'v. habréis vivido'], ['él habrá vivido', 'ellos habrán vivido']] },
      { form: 'Cond. perfecto', rule: 'Cond. haber + p.p.',
        er: [['yo habría hablado', 'n. habríamos hablado'], ['tú habrías hablado', 'v. habríais hablado'], ['él habría hablado', 'ellos habrían hablado']],
        ir: [['yo habría comido', 'n. habríamos comido'], ['tú habrías comido', 'v. habríais comido'], ['él habría comido', 'ellos habrían comido']],
        re: [['yo habría vivido', 'n. habríamos vivido'], ['tú habrías vivido', 'v. habríais vivido'], ['él habría vivido', 'ellos habrían vivido']] }
    ],
    // Imperfect
    [
      { form: 'Imperfecto', rule: 'Stem + endings',
        er: [['yo hablaba', 'n. hablábamos'], ['tú hablabas', 'v. hablabais'], ['él hablaba', 'ellos hablaban']],
        ir: [['yo comía', 'n. comíamos'], ['tú comías', 'v. comíais'], ['él comía', 'ellos comían']],
        re: [['yo vivía', 'n. vivíamos'], ['tú vivías', 'v. vivíais'], ['él vivía', 'ellos vivían']] },
      null, null, null
    ],
    // Pluperfect
    [
      { form: 'Pluscuamperfecto', rule: 'Imp. haber + p.p.',
        er: [['yo había hablado', 'n. habíamos hablado'], ['tú habías hablado', 'v. habíais hablado'], ['él había hablado', 'ellos habían hablado']],
        ir: [['yo había comido', 'n. habíamos comido'], ['tú habías comido', 'v. habíais comido'], ['él había comido', 'ellos habían comido']],
        re: [['yo había vivido', 'n. habíamos vivido'], ['tú habías vivido', 'v. habíais vivido'], ['él había vivido', 'ellos habían vivido']] },
      null, null, null
    ]
  ];

  var groups = ['-ar: hablar', '-er: comer', '-ir: vivir'];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          html += '<div style="flex:1; min-width:0;">';
          html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
          html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
          for (var p = 0; p < verbConjs[g].length; p++) {
            html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
          }
          html += '</table></div>';
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- Portuguese Charts ---
function renderPortugueseCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past (Passado)', 'Present (Presente)', 'Future (Futuro)', 'Conditional (Condicional)'];
  var rows = ['Simple (Simples)', 'Compound (Composto)', 'Imperfect (Imperfeito)', 'Pluperfect (Mais-que-perfeito)'];

  var cells = [
    // Simple
    [
      { form: 'Pret. perfeito simples', rule: 'Stem + endings',
        er: [['eu falei', 'nós falámos'], ['tu falaste', 'vós falastes'], ['ele falou', 'eles falaram']],
        ir: [['eu comi', 'nós comemos'], ['tu comeste', 'vós comestes'], ['ele comeu', 'eles comeram']],
        re: [['eu parti', 'nós partimos'], ['tu partiste', 'vós partistes'], ['ele partiu', 'eles partiram']] },
      { form: 'Presente', rule: 'Stem + endings',
        er: [['eu falo', 'nós falamos'], ['tu falas', 'vós falais'], ['ele fala', 'eles falam']],
        ir: [['eu como', 'nós comemos'], ['tu comes', 'vós comeis'], ['ele come', 'eles comem']],
        re: [['eu parto', 'nós partimos'], ['tu partes', 'vós partis'], ['ele parte', 'eles partem']] },
      { form: 'Futuro do presente', rule: 'Inf. + endings',
        er: [['eu falarei', 'nós falaremos'], ['tu falarás', 'vós falareis'], ['ele falará', 'eles falarão']],
        ir: [['eu comerei', 'nós comeremos'], ['tu comerás', 'vós comereis'], ['ele comerá', 'eles comerão']],
        re: [['eu partirei', 'nós partiremos'], ['tu partirás', 'vós partireis'], ['ele partirá', 'eles partirão']] },
      { form: 'Futuro do pretérito', rule: 'Inf. + endings',
        er: [['eu falaria', 'nós falaríamos'], ['tu falarias', 'vós falaríeis'], ['ele falaria', 'eles falariam']],
        ir: [['eu comeria', 'nós comeríamos'], ['tu comerias', 'vós comeríeis'], ['ele comeria', 'eles comeriam']],
        re: [['eu partiria', 'nós partiríamos'], ['tu partirias', 'vós partiríeis'], ['ele partiria', 'eles partiriam']] }
    ],
    // Compound
    [
      { form: 'Pret. perf. composto', rule: 'Pres. ter + p.p.',
        er: [['eu tenho falado', 'nós temos falado'], ['tu tens falado', 'vós tendes falado'], ['ele tem falado', 'eles têm falado']],
        ir: [['eu tenho comido', 'nós temos comido'], ['tu tens comido', 'vós tendes comido'], ['ele tem comido', 'eles têm comido']],
        re: [['eu tenho partido', 'nós temos partido'], ['tu tens partido', 'vós tendes partido'], ['ele tem partido', 'eles têm partido']] },
      null,
      { form: 'Futuro perf. composto', rule: 'Fut. ter + p.p.',
        er: [['eu terei falado', 'nós teremos falado'], ['tu terás falado', 'vós tereis falado'], ['ele terá falado', 'eles terão falado']],
        ir: [['eu terei comido', 'nós teremos comido'], ['tu terás comido', 'vós tereis comido'], ['ele terá comido', 'eles terão comido']],
        re: [['eu terei partido', 'nós teremos partido'], ['tu terás partido', 'vós tereis partido'], ['ele terá partido', 'eles terão partido']] },
      { form: 'Fut. pret. composto', rule: 'Cond. ter + p.p.',
        er: [['eu teria falado', 'nós teríamos falado'], ['tu terias falado', 'vós teríeis falado'], ['ele teria falado', 'eles teriam falado']],
        ir: [['eu teria comido', 'nós teríamos comido'], ['tu terias comido', 'vós teríeis comido'], ['ele teria comido', 'eles teriam comido']],
        re: [['eu teria partido', 'nós teríamos partido'], ['tu terias partido', 'vós teríeis partido'], ['ele teria partido', 'eles teriam partido']] }
    ],
    // Imperfect
    [
      { form: 'Pret. imperfeito', rule: 'Stem + endings',
        er: [['eu falava', 'nós falávamos'], ['tu falavas', 'vós faláveis'], ['ele falava', 'eles falavam']],
        ir: [['eu comia', 'nós comíamos'], ['tu comias', 'vós comíeis'], ['ele comia', 'eles comiam']],
        re: [['eu partia', 'nós partíamos'], ['tu partias', 'vós partíeis'], ['ele partia', 'eles partiam']] },
      null, null, null
    ],
    // Pluperfect
    [
      { form: 'Mais-que-perf. composto', rule: 'Imp. ter + p.p.',
        er: [['eu tinha falado', 'nós tínhamos falado'], ['tu tinhas falado', 'vós tínheis falado'], ['ele tinha falado', 'eles tinham falado']],
        ir: [['eu tinha comido', 'nós tínhamos comido'], ['tu tinhas comido', 'vós tínheis comido'], ['ele tinha comido', 'eles tinham comido']],
        re: [['eu tinha partido', 'nós tínhamos partido'], ['tu tinhas partido', 'vós tínheis partido'], ['ele tinha partido', 'eles tinham partido']] },
      null, null, null
    ]
  ];

  var groups = ['-ar: falar', '-er: comer', '-ir: partir'];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          html += '<div style="flex:1; min-width:0;">';
          html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
          html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
          for (var p = 0; p < verbConjs[g].length; p++) {
            html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
          }
          html += '</table></div>';
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- Dutch Charts ---
function renderDutchCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past (Verleden)', 'Present (Tegenwoordig)', 'Future (Toekomend)', 'Conditional (Voorwaardelijk)'];
  var rows = ['Simple (Onvoltooid)', 'Perfect (Voltooid)'];

  var cells = [
    // Simple
    [
      { form: 'Onvoltooid verleden', rule: 'Weak: stem+-te/-de; Strong: vowel change',
        er: [['ik werkte', 'wij werkten'], ['jij werkte', 'jullie werkten'], ['hij werkte', 'zij werkten']],
        ir: [['ik schreef', 'wij schreven'], ['jij schreef', 'jullie schreven'], ['hij schreef', 'zij schreven']],
        re: [['ik was', 'wij waren'], ['jij was', 'jullie waren'], ['hij was', 'zij waren']] },
      { form: 'Onvoltooid tegenwoordig', rule: 'Stem + personal endings',
        er: [['ik werk', 'wij werken'], ['jij werkt', 'jullie werken'], ['hij werkt', 'zij werken']],
        ir: [['ik schrijf', 'wij schrijven'], ['jij schrijft', 'jullie schrijven'], ['hij schrijft', 'zij schrijven']],
        re: [['ik ben', 'wij zijn'], ['jij bent', 'jullie zijn'], ['hij is', 'zij zijn']] },
      { form: 'Onvoltooid toekomend', rule: 'zullen + infinitive',
        er: [['ik zal werken', 'wij zullen werken'], ['jij zult werken', 'jullie zullen werken'], ['hij zal werken', 'zij zullen werken']],
        ir: [['ik zal schrijven', 'wij zullen schrijven'], ['jij zult schrijven', 'jullie zullen schrijven'], ['hij zal schrijven', 'zij zullen schrijven']],
        re: [['ik zal zijn', 'wij zullen zijn'], ['jij zult zijn', 'jullie zullen zijn'], ['hij zal zijn', 'zij zullen zijn']] },
      { form: 'Voorwaardelijk', rule: 'zou/zouden + infinitive',
        er: [['ik zou werken', 'wij zouden werken'], ['jij zou werken', 'jullie zouden werken'], ['hij zou werken', 'zij zouden werken']],
        ir: [['ik zou schrijven', 'wij zouden schrijven'], ['jij zou schrijven', 'jullie zouden schrijven'], ['hij zou schrijven', 'zij zouden schrijven']],
        re: [['ik zou zijn', 'wij zouden zijn'], ['jij zou zijn', 'jullie zouden zijn'], ['hij zou zijn', 'zij zouden zijn']] }
    ],
    // Perfect
    [
      { form: 'Voltooid verleden', rule: 'had/was + past participle',
        er: [['ik had gewerkt', 'wij hadden gewerkt'], ['jij had gewerkt', 'jullie hadden gewerkt'], ['hij had gewerkt', 'zij hadden gewerkt']],
        ir: [['ik had geschreven', 'wij hadden geschreven'], ['jij had geschreven', 'jullie hadden geschreven'], ['hij had geschreven', 'zij hadden geschreven']],
        re: [['ik was geweest', 'wij waren geweest'], ['jij was geweest', 'jullie waren geweest'], ['hij was geweest', 'zij waren geweest']] },
      { form: 'Voltooid tegenwoordig', rule: 'heb/ben + past participle',
        er: [['ik heb gewerkt', 'wij hebben gewerkt'], ['jij hebt gewerkt', 'jullie hebben gewerkt'], ['hij heeft gewerkt', 'zij hebben gewerkt']],
        ir: [['ik heb geschreven', 'wij hebben geschreven'], ['jij hebt geschreven', 'jullie hebben geschreven'], ['hij heeft geschreven', 'zij hebben geschreven']],
        re: [['ik ben geweest', 'wij zijn geweest'], ['jij bent geweest', 'jullie zijn geweest'], ['hij is geweest', 'zij zijn geweest']] },
      { form: 'Voltooid toekomend', rule: 'zullen + p.p. + hebben/zijn',
        er: [['ik zal gewerkt hebben', 'wij zullen gewerkt hebben'], ['jij zult gewerkt hebben', 'jullie zullen gewerkt hebben'], ['hij zal gewerkt hebben', 'zij zullen gewerkt hebben']],
        ir: [['ik zal geschreven hebben', 'wij zullen geschreven hebben'], ['jij zult geschreven hebben', 'jullie zullen geschreven hebben'], ['hij zal geschreven hebben', 'zij zullen geschreven hebben']],
        re: [['ik zal geweest zijn', 'wij zullen geweest zijn'], ['jij zult geweest zijn', 'jullie zullen geweest zijn'], ['hij zal geweest zijn', 'zij zullen geweest zijn']] },
      { form: 'Voorw. voltooid', rule: 'zou + p.p. + hebben/zijn',
        er: [['ik zou gewerkt hebben', 'wij zouden gewerkt hebben'], ['jij zou gewerkt hebben', 'jullie zouden gewerkt hebben'], ['hij zou gewerkt hebben', 'zij zouden gewerkt hebben']],
        ir: [['ik zou geschreven hebben', 'wij zouden geschreven hebben'], ['jij zou geschreven hebben', 'jullie zouden geschreven hebben'], ['hij zou geschreven hebben', 'zij zouden geschreven hebben']],
        re: [['ik zou geweest zijn', 'wij zouden geweest zijn'], ['jij zou geweest zijn', 'jullie zouden geweest zijn'], ['hij zou geweest zijn', 'zij zouden geweest zijn']] }
    ]
  ];

  var groups = ['Weak: werken', 'Strong: schrijven', 'Irreg: zijn'];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          html += '<div style="flex:1; min-width:0;">';
          html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
          html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
          for (var p = 0; p < verbConjs[g].length; p++) {
            html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
          }
          html += '</table></div>';
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- Czech Charts ---
function renderCzechCharts(containerId, data) {
  var container = document.getElementById(containerId);
  var columns = ['Past (Minulý)', 'Present (Přítomný)', 'Future (Budoucí)', 'Conditional (Podmiňovací)'];
  var rows = ['Indicative', 'Past Conditional'];

  var cells = [
    // Indicative
    [
      { form: 'Minulý čas', rule: 'Past participle + být aux.',
        er: [['nesl jsem', 'nesli jsme'], ['nesl jsi', 'nesli jste'], ['nesl', 'nesli']],
        ir: [['kupoval jsem', 'kupovali jsme'], ['kupoval jsi', 'kupovali jste'], ['kupoval', 'kupovali']],
        re: [['prosil jsem', 'prosili jsme'], ['prosil jsi', 'prosili jste'], ['prosil', 'prosili']] },
      { form: 'Přítomný čas', rule: 'Stem + personal endings',
        er: [['nesu', 'neseme'], ['neseš', 'nesete'], ['nese', 'nesou']],
        ir: [['kupuju', 'kupujeme'], ['kupuješ', 'kupujete'], ['kupuje', 'kupují']],
        re: [['prosím', 'prosíme'], ['prosíš', 'prosíte'], ['prosí', 'prosí']] },
      { form: 'Budoucí čas', rule: 'budu + infinitive (imperf.)',
        er: [['budu nést', 'budeme nést'], ['budeš nést', 'budete nést'], ['bude nést', 'budou nést']],
        ir: [['budu kupovat', 'budeme kupovat'], ['budeš kupovat', 'budete kupovat'], ['bude kupovat', 'budou kupovat']],
        re: [['budu prosit', 'budeme prosit'], ['budeš prosit', 'budete prosit'], ['bude prosit', 'budou prosit']] },
      { form: 'Podm. přítomný', rule: 'Past participle + bych/bys/by...',
        er: [['nesl bych', 'nesli bychom'], ['nesl bys', 'nesli byste'], ['nesl by', 'nesli by']],
        ir: [['kupoval bych', 'kupovali bychom'], ['kupoval bys', 'kupovali byste'], ['kupoval by', 'kupovali by']],
        re: [['prosil bych', 'prosili bychom'], ['prosil bys', 'prosili byste'], ['prosil by', 'prosili by']] }
    ],
    // Past Conditional
    [
      null, null, null,
      { form: 'Podm. minulý', rule: 'Past part. + byl + bych/bys/by...',
        er: [['byl bych nesl', 'byli bychom nesli'], ['byl bys nesl', 'byli byste nesli'], ['byl by nesl', 'byli by nesli']],
        ir: [['byl bych kupoval', 'byli bychom kupovali'], ['byl bys kupoval', 'byli byste kupovali'], ['byl by kupoval', 'byli by kupovali']],
        re: [['byl bych prosil', 'byli bychom prosili'], ['byl bys prosil', 'byli byste prosili'], ['byl by prosil', 'byli by prosili']] }
    ]
  ];

  var groups = ['-e: nést', '-je: kupovat', '-í: prosit'];

  var langId = containerId.replace('-chart', '');
  var html = renderPageHeader(langId, data, 'chart');
  html += '<div class="table-responsive" style="height:calc(100vh - 8rem); display:flex; flex-direction:column;">';
  html += '<table class="table table-bordered" style="width:100%; table-layout:fixed; flex:1;">';
  html += '<thead><tr><th style="background:' + data.theme.tableHeader + '; color:#fff; width:9rem;"></th>';
  for (var c = 0; c < columns.length; c++) {
    html += '<th class="text-center" style="font-size:0.9rem; white-space:nowrap; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(columns[c]) + '</th>';
  }
  html += '</tr></thead><tbody>';
  for (var r = 0; r < rows.length; r++) {
    html += '<tr>';
    html += '<th style="font-size:0.8rem; vertical-align:middle; text-align:center; background:' + data.theme.tableHeader + '; color:#fff;">' + esc(rows[r]) + '</th>';
    for (var c = 0; c < columns.length; c++) {
      var cell = cells[r][c];
      if (!cell) {
        html += '<td style="vertical-align:middle; text-align:center; background:#f8f8f8;">';
        html += '<span class="text-muted fst-italic" style="font-size:0.75rem;">not used</span>';
      } else {
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < 3; g++) {
          html += '<div style="flex:1; min-width:0;">';
          html += '<div style="font-size:0.55rem; font-weight:bold; text-align:center; color:' + data.theme.secondary + ';">' + esc(groups[g]) + '</div>';
          html += '<table class="table table-sm table-bordered mb-0" style="font-size:0.6rem;">';
          for (var p = 0; p < verbConjs[g].length; p++) {
            html += '<tr><td style="padding:0 2px;">' + esc(verbConjs[g][p][0]) + '</td><td style="padding:0 2px;">' + esc(verbConjs[g][p][1]) + '</td></tr>';
          }
          html += '</table></div>';
        }
        html += '</div>';
      }
      html += '</td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table></div>';

  container.innerHTML = html;
}

// --- Init ---
renderLanguage('french', frenchData);
renderLanguage('spanish', spanishData);
renderLanguage('english', englishData);
renderLanguage('dutch', dutchData);
renderLanguage('portuguese', portugueseData);
renderLanguage('czech', czechData);
renderFrenchCharts('french-chart', frenchData);
renderSpanishCharts('spanish-chart', spanishData);
renderPortugueseCharts('portuguese-chart', portugueseData);
renderDutchCharts('dutch-chart', dutchData);
renderCzechCharts('czech-chart', czechData);
renderEnglishCharts('english-chart', englishData);

if (window.navigator.standalone) document.documentElement.classList.add('standalone');

(function() {
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!isIOS) return;
  function detectNotchSide() {
    var type = (screen.orientation || {}).type || '';
    document.body.classList.toggle('notch-left', type === 'landscape-primary');
  }
  if (screen.orientation) screen.orientation.addEventListener('change', detectNotchSide);
  window.addEventListener('orientationchange', detectNotchSide);
  detectNotchSide();
})();
