// --- State ---
var langDataMap = {};
var langSearchIndex = {};
var langSearchState = {};
var searchTimers = {};

// --- Utilities ---
var defaultPages = [
  { key: 'conjugation', icon: 'bi-table', label: 'Conjugations' },
  { key: 'chart', icon: 'bi-grid-3x3', label: 'Chart' }
];

function renderPageHeader(langId, data, activePage) {
  var pages = data.pages || defaultPages;
  var activeLabel = '';
  var html = '<div class="d-flex align-items-center mb-3 flex-wrap gap-2">';
  html += '<h1 class="mb-0 me-3" style="color:' + data.theme.primary + ';">' + esc(data.title) + '</h1>';
  html += '<div class="btn-group btn-group-sm" role="group">';
  for (var i = 0; i < pages.length; i++) {
    var pg = pages[i];
    var active = pg.key === activePage ? ' active' : '';
    if (pg.key === activePage) activeLabel = pg.label;
    html += '<button type="button" class="btn btn-outline-secondary' + active + '" onclick="switchPage(\'' + langId + '\', \'' + pg.key + '\', this)"><i class="bi ' + pg.icon + '"></i></button>';
  }
  html += '</div>';
  html += '<span class="mb-0" style="color:' + data.theme.primary + '; font-size:1.2rem; font-weight:500;" id="' + langId + '-page-label">' + activeLabel + '</span>';
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
    sel + ' .info-box h6:first-child { color: ' + theme.primary + '; }\n' +
    (theme.infoBoxTop ? sel + ' .info-box { top: ' + theme.infoBoxTop + '; }\n' : '');
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
  var data = langDataMap[langId];
  var pages = (data && data.pages) || defaultPages;
  var idx = 0;
  var label = page;
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].key === page) { idx = i; label = pages[i].label; break; }
  }
  document.querySelectorAll('[id="' + langId + '-page-label"]').forEach(function(l) {
    l.textContent = label;
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

// --- Chart Page ---
var chartViewMode = {};

function renderChartPage(containerId, data) {
  var container = document.getElementById(containerId);
  var chart = data.chart;
  var columns = chart.columns;
  var rows = chart.rows;
  var groups = chart.groups;
  var cells = chart.cells;
  var langId = containerId.replace('-chart', '');
  var mode = chartViewMode[containerId] || 'combined';
  var keys = ['er', 'ir', 're'];

  var html = renderPageHeader(langId, data, 'chart');

  // Chart info bar
  if (chart.info) {
    html += '<div class="card" style="font-size:0.82rem; border-width:2px; border-color:' + data.theme.border + '; position:absolute; top:-1rem; right:0; width:620px; max-width:calc(100vw - 180px - 6rem); z-index:1;">';
    html += '<div class="card-body" style="padding:0.8rem;">' + chart.info + '</div></div>';
  }

  // View toggle (only if multiple groups)
  if (groups.length > 1) {
    html += '<div class="mb-2">';
    html += '<div class="btn-group btn-group-sm" role="group">';
    html += '<button type="button" class="btn btn-outline-secondary' + (mode === 'combined' ? ' active' : '') + '" onclick="switchChartView(\'' + containerId + '\', \'combined\')">All</button>';
    for (var g = 0; g < groups.length; g++) {
      html += '<button type="button" class="btn btn-outline-secondary' + (mode === groups[g] ? ' active' : '') + '" onclick="switchChartView(\'' + containerId + '\', \'' + esc(groups[g]).replace(/'/g, "\\'") + '\')">' + esc(groups[g]) + '</button>';
    }
    html += '</div></div>';
  }

  var showGroupIdx = -1;
  if (mode !== 'combined') {
    for (var g = 0; g < groups.length; g++) {
      if (groups[g] === mode) { showGroupIdx = g; break; }
    }
  }

  html += '<div class="table-responsive" style="height:calc(100vh - ' + (groups.length > 1 ? '11' : '8') + 'rem); display:flex; flex-direction:column;">';
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
      } else if (showGroupIdx >= 0) {
        // Single group view
        var conj = cell[keys[showGroupIdx]];
        html += '<td style="vertical-align:middle; text-align:center; padding:0.3rem;">';
        html += '<strong style="font-size:0.85rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.75rem;">' + esc(cell.rule) + '</span>';
        if (!conj) {
          html += '<div class="text-muted fst-italic" style="font-size:0.8rem; margin-top:4px;">n/a</div>';
        } else {
          html += '<table class="table table-sm table-bordered mb-0 mt-1 mx-auto" style="font-size:0.85rem; max-width:90%;">';
          for (var p = 0; p < conj.length; p++) {
            html += '<tr><td style="padding:1px 4px;">' + esc(conj[p][0]) + '</td><td style="padding:1px 4px;">' + esc(conj[p][1]) + '</td></tr>';
          }
          html += '</table>';
        }
      } else {
        // Combined view
        html += '<td style="vertical-align:middle; text-align:center; padding:0.2rem;">';
        html += '<strong style="font-size:0.7rem;">' + esc(cell.form) + '</strong>';
        html += '<br><span class="text-muted" style="font-size:0.6rem;">' + esc(cell.rule) + '</span>';
        html += '<div style="display:flex; gap:2px; margin-top:2px;">';
        var verbConjs = [cell.er, cell.ir, cell.re];
        for (var g = 0; g < groups.length; g++) {
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

function switchChartView(containerId, mode) {
  chartViewMode[containerId] = mode;
  var langId = containerId.replace('-chart', '');
  var data = langDataMap[langId];
  renderChartPage(containerId, data);
}
// --- Pluralization Page ---
function renderPluralization(containerId, data) {
  var container = document.getElementById(containerId);
  var langId = containerId.replace('-pluralization', '');
  var html = renderPageHeader(langId, data, 'pluralization');

  html += '<div class="table-responsive">';
  html += '<table class="table table-bordered" style="width:100%;">';
  html += '<thead><tr>';
  html += '<th style="background:' + data.theme.tableHeader + '; color:#fff;">Rule</th>';
  html += '<th style="background:' + data.theme.tableHeader + '; color:#fff;">Singular</th>';
  html += '<th style="background:' + data.theme.tableHeader + '; color:#fff;">Plural</th>';
  html += '<th style="background:' + data.theme.tableHeader + '; color:#fff;">Examples</th>';
  html += '</tr></thead><tbody>';

  var rules = data.pluralization || [];

  for (var i = 0; i < rules.length; i++) {
    var r = rules[i];
    html += '<tr>';
    html += '<td><strong>' + esc(r.rule) + '</strong></td>';
    html += '<td>' + esc(r.singular) + '</td>';
    html += '<td>' + esc(r.plural) + '</td>';
    html += '<td class="text-muted" style="font-size:0.85rem;">' + esc(r.examples) + '</td>';
    html += '</tr>';
  }

  html += '</tbody></table></div>';
  container.innerHTML = html;
}

// --- Init ---
renderLanguage('french', frenchData);
renderLanguage('italian', italianData);
renderLanguage('spanish', spanishData);
renderLanguage('english', englishData);
renderLanguage('german', germanData);
renderLanguage('dutch', dutchData);
renderLanguage('danish', danishData);
renderLanguage('norwegian', norwegianData);
renderLanguage('icelandic', icelandicData);
renderLanguage('portuguese', portugueseData);
renderLanguage('czech', czechData);
renderLanguage('greek', greekData);
renderLanguage('finnish', finnishData);
renderChartPage('french-chart', frenchData);
renderChartPage('italian-chart', italianData);
renderChartPage('spanish-chart', spanishData);
renderChartPage('portuguese-chart', portugueseData);
renderChartPage('german-chart', germanData);
renderChartPage('dutch-chart', dutchData);
renderChartPage('danish-chart', danishData);
renderChartPage('norwegian-chart', norwegianData);
renderChartPage('icelandic-chart', icelandicData);
renderChartPage('czech-chart', czechData);
renderChartPage('greek-chart', greekData);
renderChartPage('finnish-chart', finnishData);
renderChartPage('english-chart', englishData);
renderPluralization('english-pluralization', englishData);
renderPluralization('french-pluralization', frenchData);
renderPluralization('italian-pluralization', italianData);
renderPluralization('spanish-pluralization', spanishData);
renderPluralization('portuguese-pluralization', portugueseData);
renderPluralization('german-pluralization', germanData);
renderPluralization('dutch-pluralization', dutchData);
renderPluralization('danish-pluralization', danishData);
renderPluralization('norwegian-pluralization', norwegianData);
renderPluralization('icelandic-pluralization', icelandicData);
renderPluralization('czech-pluralization', czechData);
renderPluralization('greek-pluralization', greekData);
renderPluralization('finnish-pluralization', finnishData);

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
