// --- State ---
var langDataMap = {};
var langSearchIndex = {};
var langSearchState = {};
var searchTimers = {};

// --- Utilities ---
var defaultPages = [
  { key: 'conjugation', icon: 'bi-table', label: 'Conjugations' },
  { key: 'chart', icon: 'bi-grid-3x3', label: 'Chart' },
  { key: 'pluralization', icon: 'bi-files', label: 'Pluralization' },
  { key: 'pronouns', icon: 'bi-person', label: 'Pronouns' }
];

var pageTitles = {
  'conjugation': 'Verb Conjugations',
  'chart': 'Verb Conjugation Chart',
  'pluralization': 'Pluralization',
  'pronouns': 'Pronouns',
  'practice': 'Conjugation Practice'
};

function renderPageHeader(langId, data, activePage) {
  var pages = data.pages || defaultPages;
  var title = data.language + ' ' + (pageTitles[activePage] || activePage);
  var html = '<div class="d-flex align-items-center mb-3 flex-wrap gap-2">';
  html += '<h1 class="mb-0 me-3" style="color:' + data.theme.primary + ';" id="' + langId + '-page-label">' + esc(title) + '</h1>';
  var mainPages = [];
  var extraPages = [];
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].key === 'conjugation' || pages[i].key === 'chart' || pages[i].key === 'practice') mainPages.push(pages[i]);
    else extraPages.push(pages[i]);
  }
  html += '<div class="btn-group btn-group-sm" role="group">';
  for (var i = 0; i < mainPages.length; i++) {
    var pg = mainPages[i];
    var active = pg.key === activePage ? ' active' : '';
    html += '<button type="button" class="btn btn-outline-secondary' + active + '" onclick="switchPage(\'' + langId + '\', \'' + pg.key + '\', this)"><i class="bi ' + pg.icon + '"></i></button>';
  }
  html += '</div>';
  for (var i = 0; i < extraPages.length; i++) {
    var pg = extraPages[i];
    var active = pg.key === activePage ? ' active' : '';
    html += '<button type="button" class="btn btn-outline-secondary btn-sm ms-2' + active + '" onclick="switchPage(\'' + langId + '\', \'' + pg.key + '\', this)"><i class="bi ' + pg.icon + '"></i></button>';
  }
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
    (theme.infoBoxTop ? sel + ' .info-box { top: ' + theme.infoBoxTop + '; }\n' : '') +
    (theme.infoBoxWidth ? sel + ' .info-box { width: ' + theme.infoBoxWidth + '; }\n' : '');
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
  var data = langDataMap[id];
  var title = data ? data.language + ' ' + pageTitles['conjugation'] : 'Conjugations';
  document.querySelectorAll('[id="' + id + '-page-label"]').forEach(function(l) {
    l.textContent = title;
    var row = l.parentElement;
    if (row) {
      row.querySelectorAll('.btn').forEach(function(b) {
        var key = b.getAttribute('onclick').match(/switchPage\('[^']+',\s*'([^']+)'/);
        b.classList.toggle('active', key && key[1] === 'conjugation');
      });
    }
  });
}

function switchPage(langId, page, el) {
  document.querySelectorAll('.lang-page').forEach(function(p) { p.classList.add('d-none'); });
  var targetId = page === 'conjugation' ? langId : langId + '-' + page;
  document.getElementById(targetId).classList.remove('d-none');
  var data = langDataMap[langId];
  var title = data.language + ' ' + (pageTitles[page] || page);
  document.querySelectorAll('[id="' + langId + '-page-label"]').forEach(function(l) {
    l.textContent = title;
    var row = l.parentElement;
    if (row) {
      row.querySelectorAll('.btn').forEach(function(b) {
        var key = b.getAttribute('onclick').match(/switchPage\('[^']+',\s*'([^']+)'/);
        b.classList.toggle('active', key && key[1] === page);
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
    html += '<div class="card" style="font-size:0.82rem; border-width:2px; border-color:' + data.theme.border + '; position:absolute; top:-2.5rem; right:0; width:620px; max-width:calc(100vw - 180px - 6rem); z-index:1;">';
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

// --- Pronouns Page ---
function renderPronouns(containerId, data) {
  var container = document.getElementById(containerId);
  var langId = containerId.replace('-pronouns', '');
  var html = renderPageHeader(langId, data, 'pronouns');
  var cats = data.pronouns.categories;
  for (var c = 0; c < cats.length; c++) {
    var cat = cats[c];
    html += '<h5 style="color:' + data.theme.primary + ';">' + esc(cat.name) + '</h5>';
    html += '<table class="table table-bordered table-striped table-sm mb-4">';
    html += '<thead><tr>';
    for (var h = 0; h < cat.headers.length; h++) {
      html += '<th style="background:' + data.theme.tableHeader + '; color:#fff; font-size:0.8rem;">' + esc(cat.headers[h]) + '</th>';
    }
    html += '</tr></thead><tbody>';
    for (var r = 0; r < cat.rows.length; r++) {
      html += '<tr>';
      for (var d = 0; d < cat.rows[r].length; d++) {
        html += d === 0 ? '<td><strong>' + esc(cat.rows[r][d]) + '</strong></td>' : '<td>' + esc(cat.rows[r][d]) + '</td>';
      }
      html += '</tr>';
    }
    html += '</tbody></table>';
  }
  container.innerHTML = html;
}

// --- Practice Page ---
var practiceVerbs = {
  'english': [
    { verb: 'walk', tense: 'Present Simple', conj: [['I walk', 'we walk'], ['you walk', 'you walk'], ['he walks', 'they walk']] },
    { verb: 'teach', tense: 'Present Simple', conj: [['I teach', 'we teach'], ['you teach', 'you teach'], ['he teaches', 'they teach']] },
    { verb: 'fly', tense: 'Present Simple', conj: [['I fly', 'we fly'], ['you fly', 'you fly'], ['he flies', 'they fly']] },
    { verb: 'have', tense: 'Present Simple', conj: [['I have', 'we have'], ['you have', 'you have'], ['he has', 'they have']] },
    { verb: 'go', tense: 'Past Simple', conj: [['I went', 'we went'], ['you went', 'you went'], ['he went', 'they went']] },
    { verb: 'buy', tense: 'Past Simple', conj: [['I bought', 'we bought'], ['you bought', 'you bought'], ['he bought', 'they bought']] },
    { verb: 'swim', tense: 'Past Simple', conj: [['I swam', 'we swam'], ['you swam', 'you swam'], ['he swam', 'they swam']] },
    { verb: 'think', tense: 'Past Simple', conj: [['I thought', 'we thought'], ['you thought', 'you thought'], ['he thought', 'they thought']] },
    { verb: 'bring', tense: 'Past Simple', conj: [['I brought', 'we brought'], ['you brought', 'you brought'], ['he brought', 'they brought']] },
    { verb: 'eat', tense: 'Present Perfect', conj: [['I have eaten', 'we have eaten'], ['you have eaten', 'you have eaten'], ['he has eaten', 'they have eaten']] },
    { verb: 'drink', tense: 'Present Perfect', conj: [['I have drunk', 'we have drunk'], ['you have drunk', 'you have drunk'], ['he has drunk', 'they have drunk']] },
    { verb: 'break', tense: 'Present Perfect', conj: [['I have broken', 'we have broken'], ['you have broken', 'you have broken'], ['he has broken', 'they have broken']] },
    { verb: 'choose', tense: 'Present Perfect', conj: [['I have chosen', 'we have chosen'], ['you have chosen', 'you have chosen'], ['he has chosen', 'they have chosen']] },
    { verb: 'run', tense: 'Future Simple', conj: [['I will run', 'we will run'], ['you will run', 'you will run'], ['he will run', 'they will run']] },
    { verb: 'sing', tense: 'Future Simple', conj: [['I will sing', 'we will sing'], ['you will sing', 'you will sing'], ['he will sing', 'they will sing']] },
    { verb: 'drive', tense: 'Future Simple', conj: [['I will drive', 'we will drive'], ['you will drive', 'you will drive'], ['he will drive', 'they will drive']] },
    { verb: 'write', tense: 'Past Continuous', conj: [['I was writing', 'we were writing'], ['you were writing', 'you were writing'], ['he was writing', 'they were writing']] },
    { verb: 'sleep', tense: 'Past Continuous', conj: [['I was sleeping', 'we were sleeping'], ['you were sleeping', 'you were sleeping'], ['he was sleeping', 'they were sleeping']] },
    { verb: 'read', tense: 'Past Continuous', conj: [['I was reading', 'we were reading'], ['you were reading', 'you were reading'], ['he was reading', 'they were reading']] },
    { verb: 'speak', tense: 'Present Continuous', conj: [['I am speaking', 'we are speaking'], ['you are speaking', 'you are speaking'], ['he is speaking', 'they are speaking']] },
    { verb: 'sit', tense: 'Present Continuous', conj: [['I am sitting', 'we are sitting'], ['you are sitting', 'you are sitting'], ['he is sitting', 'they are sitting']] },
    { verb: 'grow', tense: 'Present Continuous', conj: [['I am growing', 'we are growing'], ['you are growing', 'you are growing'], ['he is growing', 'they are growing']] },
    { verb: 'see', tense: 'Past Perfect', conj: [['I had seen', 'we had seen'], ['you had seen', 'you had seen'], ['he had seen', 'they had seen']] },
    { verb: 'give', tense: 'Past Perfect', conj: [['I had given', 'we had given'], ['you had given', 'you had given'], ['he had given', 'they had given']] },
    { verb: 'know', tense: 'Past Perfect', conj: [['I had known', 'we had known'], ['you had known', 'you had known'], ['he had known', 'they had known']] },
    { verb: 'take', tense: 'Conditional', conj: [['I would take', 'we would take'], ['you would take', 'you would take'], ['he would take', 'they would take']] },
    { verb: 'make', tense: 'Conditional', conj: [['I would make', 'we would make'], ['you would make', 'you would make'], ['he would make', 'they would make']] },
    { verb: 'find', tense: 'Conditional', conj: [['I would find', 'we would find'], ['you would find', 'you would find'], ['he would find', 'they would find']] },
    { verb: 'begin', tense: 'Future Perfect', conj: [['I will have begun', 'we will have begun'], ['you will have begun', 'you will have begun'], ['he will have begun', 'they will have begun']] },
    { verb: 'forget', tense: 'Future Perfect', conj: [['I will have forgotten', 'we will have forgotten'], ['you will have forgotten', 'you will have forgotten'], ['he will have forgotten', 'they will have forgotten']] },
    { verb: 'leave', tense: 'Conditional Perfect', conj: [['I would have left', 'we would have left'], ['you would have left', 'you would have left'], ['he would have left', 'they would have left']] },
    { verb: 'fall', tense: 'Conditional Perfect', conj: [['I would have fallen', 'we would have fallen'], ['you would have fallen', 'you would have fallen'], ['he would have fallen', 'they would have fallen']] }
  ],
  'french': [
    { verb: 'parler', tense: 'Present', conj: [['je parle', 'nous parlons'], ['tu parles', 'vous parlez'], ['il parle', 'ils parlent']] },
    { verb: 'aller', tense: 'Present', conj: [['je vais', 'nous allons'], ['tu vas', 'vous allez'], ['il va', 'ils vont']] },
    { verb: 'avoir', tense: 'Present', conj: [["j'ai", 'nous avons'], ['tu as', 'vous avez'], ['il a', 'ils ont']] },
    { verb: 'être', tense: 'Present', conj: [['je suis', 'nous sommes'], ['tu es', 'vous êtes'], ['il est', 'ils sont']] },
    { verb: 'faire', tense: 'Present', conj: [['je fais', 'nous faisons'], ['tu fais', 'vous faites'], ['il fait', 'ils font']] },
    { verb: 'venir', tense: 'Present', conj: [['je viens', 'nous venons'], ['tu viens', 'vous venez'], ['il vient', 'ils viennent']] },
    { verb: 'pouvoir', tense: 'Present', conj: [['je peux', 'nous pouvons'], ['tu peux', 'vous pouvez'], ['il peut', 'ils peuvent']] },
    { verb: 'savoir', tense: 'Present', conj: [['je sais', 'nous savons'], ['tu sais', 'vous savez'], ['il sait', 'ils savent']] },
    { verb: 'prendre', tense: 'Present', conj: [['je prends', 'nous prenons'], ['tu prends', 'vous prenez'], ['il prend', 'ils prennent']] },
    { verb: 'voir', tense: 'Present', conj: [['je vois', 'nous voyons'], ['tu vois', 'vous voyez'], ['il voit', 'ils voient']] },
    { verb: 'mettre', tense: 'Present', conj: [['je mets', 'nous mettons'], ['tu mets', 'vous mettez'], ['il met', 'ils mettent']] },
    { verb: 'dire', tense: 'Present', conj: [['je dis', 'nous disons'], ['tu dis', 'vous dites'], ['il dit', 'ils disent']] },
    { verb: 'parler', tense: 'Passé composé', conj: [["j'ai parlé", 'nous avons parlé'], ['tu as parlé', 'vous avez parlé'], ['il a parlé', 'ils ont parlé']] },
    { verb: 'aller', tense: 'Passé composé', conj: [['je suis allé', 'nous sommes allés'], ['tu es allé', 'vous êtes allés'], ['il est allé', 'ils sont allés']] },
    { verb: 'avoir', tense: 'Passé composé', conj: [["j'ai eu", 'nous avons eu'], ['tu as eu', 'vous avez eu'], ['il a eu', 'ils ont eu']] },
    { verb: 'être', tense: 'Passé composé', conj: [["j'ai été", 'nous avons été'], ['tu as été', 'vous avez été'], ['il a été', 'ils ont été']] },
    { verb: 'faire', tense: 'Passé composé', conj: [["j'ai fait", 'nous avons fait'], ['tu as fait', 'vous avez fait'], ['il a fait', 'ils ont fait']] },
    { verb: 'venir', tense: 'Passé composé', conj: [['je suis venu', 'nous sommes venus'], ['tu es venu', 'vous êtes venus'], ['il est venu', 'ils sont venus']] },
    { verb: 'prendre', tense: 'Passé composé', conj: [["j'ai pris", 'nous avons pris'], ['tu as pris', 'vous avez pris'], ['il a pris', 'ils ont pris']] },
    { verb: 'voir', tense: 'Passé composé', conj: [["j'ai vu", 'nous avons vu'], ['tu as vu', 'vous avez vu'], ['il a vu', 'ils ont vu']] },
    { verb: 'parler', tense: 'Imparfait', conj: [['je parlais', 'nous parlions'], ['tu parlais', 'vous parliez'], ['il parlait', 'ils parlaient']] },
    { verb: 'avoir', tense: 'Imparfait', conj: [["j'avais", 'nous avions'], ['tu avais', 'vous aviez'], ['il avait', 'ils avaient']] },
    { verb: 'être', tense: 'Imparfait', conj: [["j'étais", 'nous étions'], ['tu étais', 'vous étiez'], ['il était', 'ils étaient']] },
    { verb: 'faire', tense: 'Imparfait', conj: [['je faisais', 'nous faisions'], ['tu faisais', 'vous faisiez'], ['il faisait', 'ils faisaient']] },
    { verb: 'aller', tense: 'Imparfait', conj: [["j'allais", 'nous allions'], ['tu allais', 'vous alliez'], ['il allait', 'ils allaient']] },
    { verb: 'parler', tense: 'Futur simple', conj: [['je parlerai', 'nous parlerons'], ['tu parleras', 'vous parlerez'], ['il parlera', 'ils parleront']] },
    { verb: 'aller', tense: 'Futur simple', conj: [["j'irai", 'nous irons'], ['tu iras', 'vous irez'], ['il ira', 'ils iront']] },
    { verb: 'avoir', tense: 'Futur simple', conj: [["j'aurai", 'nous aurons'], ['tu auras', 'vous aurez'], ['il aura', 'ils auront']] },
    { verb: 'être', tense: 'Futur simple', conj: [['je serai', 'nous serons'], ['tu seras', 'vous serez'], ['il sera', 'ils seront']] },
    { verb: 'faire', tense: 'Futur simple', conj: [['je ferai', 'nous ferons'], ['tu feras', 'vous ferez'], ['il fera', 'ils feront']] },
    { verb: 'venir', tense: 'Futur simple', conj: [['je viendrai', 'nous viendrons'], ['tu viendras', 'vous viendrez'], ['il viendra', 'ils viendront']] },
    { verb: 'parler', tense: 'Conditionnel', conj: [['je parlerais', 'nous parlerions'], ['tu parlerais', 'vous parleriez'], ['il parlerait', 'ils parleraient']] },
    { verb: 'avoir', tense: 'Conditionnel', conj: [["j'aurais", 'nous aurions'], ['tu aurais', 'vous auriez'], ['il aurait', 'ils auraient']] },
    { verb: 'être', tense: 'Conditionnel', conj: [['je serais', 'nous serions'], ['tu serais', 'vous seriez'], ['il serait', 'ils seraient']] },
    { verb: 'faire', tense: 'Conditionnel', conj: [['je ferais', 'nous ferions'], ['tu ferais', 'vous feriez'], ['il ferait', 'ils feraient']] },
    { verb: 'pouvoir', tense: 'Conditionnel', conj: [['je pourrais', 'nous pourrions'], ['tu pourrais', 'vous pourriez'], ['il pourrait', 'ils pourraient']] }
  ],
  'italian': [
    { verb: 'parlare', tense: 'Presente', conj: [['io parlo', 'noi parliamo'], ['tu parli', 'voi parlate'], ['lui parla', 'loro parlano']] },
    { verb: 'andare', tense: 'Presente', conj: [['io vado', 'noi andiamo'], ['tu vai', 'voi andate'], ['lui va', 'loro vanno']] },
    { verb: 'avere', tense: 'Presente', conj: [['io ho', 'noi abbiamo'], ['tu hai', 'voi avete'], ['lui ha', 'loro hanno']] },
    { verb: 'essere', tense: 'Presente', conj: [['io sono', 'noi siamo'], ['tu sei', 'voi siete'], ['lui è', 'loro sono']] },
    { verb: 'fare', tense: 'Presente', conj: [['io faccio', 'noi facciamo'], ['tu fai', 'voi fate'], ['lui fa', 'loro fanno']] },
    { verb: 'venire', tense: 'Presente', conj: [['io vengo', 'noi veniamo'], ['tu vieni', 'voi venite'], ['lui viene', 'loro vengono']] },
    { verb: 'potere', tense: 'Presente', conj: [['io posso', 'noi possiamo'], ['tu puoi', 'voi potete'], ['lui può', 'loro possono']] },
    { verb: 'sapere', tense: 'Presente', conj: [['io so', 'noi sappiamo'], ['tu sai', 'voi sapete'], ['lui sa', 'loro sanno']] },
    { verb: 'dire', tense: 'Presente', conj: [['io dico', 'noi diciamo'], ['tu dici', 'voi dite'], ['lui dice', 'loro dicono']] },
    { verb: 'vedere', tense: 'Presente', conj: [['io vedo', 'noi vediamo'], ['tu vedi', 'voi vedete'], ['lui vede', 'loro vedono']] },
    { verb: 'mettere', tense: 'Presente', conj: [['io metto', 'noi mettiamo'], ['tu metti', 'voi mettete'], ['lui mette', 'loro mettono']] },
    { verb: 'prendere', tense: 'Presente', conj: [['io prendo', 'noi prendiamo'], ['tu prendi', 'voi prendete'], ['lui prende', 'loro prendono']] },
    { verb: 'parlare', tense: 'Passato prossimo', conj: [['io ho parlato', 'noi abbiamo parlato'], ['tu hai parlato', 'voi avete parlato'], ['lui ha parlato', 'loro hanno parlato']] },
    { verb: 'andare', tense: 'Passato prossimo', conj: [['io sono andato', 'noi siamo andati'], ['tu sei andato', 'voi siete andati'], ['lui è andato', 'loro sono andati']] },
    { verb: 'avere', tense: 'Passato prossimo', conj: [['io ho avuto', 'noi abbiamo avuto'], ['tu hai avuto', 'voi avete avuto'], ['lui ha avuto', 'loro hanno avuto']] },
    { verb: 'essere', tense: 'Passato prossimo', conj: [['io sono stato', 'noi siamo stati'], ['tu sei stato', 'voi siete stati'], ['lui è stato', 'loro sono stati']] },
    { verb: 'fare', tense: 'Passato prossimo', conj: [['io ho fatto', 'noi abbiamo fatto'], ['tu hai fatto', 'voi avete fatto'], ['lui ha fatto', 'loro hanno fatto']] },
    { verb: 'venire', tense: 'Passato prossimo', conj: [['io sono venuto', 'noi siamo venuti'], ['tu sei venuto', 'voi siete venuti'], ['lui è venuto', 'loro sono venuti']] },
    { verb: 'vedere', tense: 'Passato prossimo', conj: [['io ho visto', 'noi abbiamo visto'], ['tu hai visto', 'voi avete visto'], ['lui ha visto', 'loro hanno visto']] },
    { verb: 'dire', tense: 'Passato prossimo', conj: [['io ho detto', 'noi abbiamo detto'], ['tu hai detto', 'voi avete detto'], ['lui ha detto', 'loro hanno detto']] },
    { verb: 'parlare', tense: 'Imperfetto', conj: [['io parlavo', 'noi parlavamo'], ['tu parlavi', 'voi parlavate'], ['lui parlava', 'loro parlavano']] },
    { verb: 'avere', tense: 'Imperfetto', conj: [['io avevo', 'noi avevamo'], ['tu avevi', 'voi avevate'], ['lui aveva', 'loro avevano']] },
    { verb: 'essere', tense: 'Imperfetto', conj: [['io ero', 'noi eravamo'], ['tu eri', 'voi eravate'], ['lui era', 'loro erano']] },
    { verb: 'fare', tense: 'Imperfetto', conj: [['io facevo', 'noi facevamo'], ['tu facevi', 'voi facevate'], ['lui faceva', 'loro facevano']] },
    { verb: 'andare', tense: 'Imperfetto', conj: [['io andavo', 'noi andavamo'], ['tu andavi', 'voi andavate'], ['lui andava', 'loro andavano']] },
    { verb: 'parlare', tense: 'Futuro', conj: [['io parlerò', 'noi parleremo'], ['tu parlerai', 'voi parlerete'], ['lui parlerà', 'loro parleranno']] },
    { verb: 'andare', tense: 'Futuro', conj: [['io andrò', 'noi andremo'], ['tu andrai', 'voi andrete'], ['lui andrà', 'loro andranno']] },
    { verb: 'avere', tense: 'Futuro', conj: [['io avrò', 'noi avremo'], ['tu avrai', 'voi avrete'], ['lui avrà', 'loro avranno']] },
    { verb: 'essere', tense: 'Futuro', conj: [['io sarò', 'noi saremo'], ['tu sarai', 'voi sarete'], ['lui sarà', 'loro saranno']] },
    { verb: 'fare', tense: 'Futuro', conj: [['io farò', 'noi faremo'], ['tu farai', 'voi farete'], ['lui farà', 'loro faranno']] },
    { verb: 'venire', tense: 'Futuro', conj: [['io verrò', 'noi verremo'], ['tu verrai', 'voi verrete'], ['lui verrà', 'loro verranno']] },
    { verb: 'parlare', tense: 'Condizionale', conj: [['io parlerei', 'noi parleremmo'], ['tu parleresti', 'voi parlereste'], ['lui parlerebbe', 'loro parlerebbero']] },
    { verb: 'avere', tense: 'Condizionale', conj: [['io avrei', 'noi avremmo'], ['tu avresti', 'voi avreste'], ['lui avrebbe', 'loro avrebbero']] },
    { verb: 'essere', tense: 'Condizionale', conj: [['io sarei', 'noi saremmo'], ['tu saresti', 'voi sareste'], ['lui sarebbe', 'loro sarebbero']] },
    { verb: 'fare', tense: 'Condizionale', conj: [['io farei', 'noi faremmo'], ['tu faresti', 'voi fareste'], ['lui farebbe', 'loro farebbero']] },
    { verb: 'potere', tense: 'Condizionale', conj: [['io potrei', 'noi potremmo'], ['tu potresti', 'voi potreste'], ['lui potrebbe', 'loro potrebbero']] }
  ],
  'spanish': [
    { verb: 'hablar', tense: 'Presente', conj: [['yo hablo', 'nosotros hablamos'], ['tú hablas', 'vosotros habláis'], ['él habla', 'ellos hablan']] },
    { verb: 'ir', tense: 'Presente', conj: [['yo voy', 'nosotros vamos'], ['tú vas', 'vosotros vais'], ['él va', 'ellos van']] },
    { verb: 'tener', tense: 'Presente', conj: [['yo tengo', 'nosotros tenemos'], ['tú tienes', 'vosotros tenéis'], ['él tiene', 'ellos tienen']] },
    { verb: 'ser', tense: 'Presente', conj: [['yo soy', 'nosotros somos'], ['tú eres', 'vosotros sois'], ['él es', 'ellos son']] },
    { verb: 'estar', tense: 'Presente', conj: [['yo estoy', 'nosotros estamos'], ['tú estás', 'vosotros estáis'], ['él está', 'ellos están']] },
    { verb: 'hacer', tense: 'Presente', conj: [['yo hago', 'nosotros hacemos'], ['tú haces', 'vosotros hacéis'], ['él hace', 'ellos hacen']] },
    { verb: 'poder', tense: 'Presente', conj: [['yo puedo', 'nosotros podemos'], ['tú puedes', 'vosotros podéis'], ['él puede', 'ellos pueden']] },
    { verb: 'saber', tense: 'Presente', conj: [['yo sé', 'nosotros sabemos'], ['tú sabes', 'vosotros sabéis'], ['él sabe', 'ellos saben']] },
    { verb: 'decir', tense: 'Presente', conj: [['yo digo', 'nosotros decimos'], ['tú dices', 'vosotros decís'], ['él dice', 'ellos dicen']] },
    { verb: 'querer', tense: 'Presente', conj: [['yo quiero', 'nosotros queremos'], ['tú quieres', 'vosotros queréis'], ['él quiere', 'ellos quieren']] },
    { verb: 'venir', tense: 'Presente', conj: [['yo vengo', 'nosotros venimos'], ['tú vienes', 'vosotros venís'], ['él viene', 'ellos vienen']] },
    { verb: 'poner', tense: 'Presente', conj: [['yo pongo', 'nosotros ponemos'], ['tú pones', 'vosotros ponéis'], ['él pone', 'ellos ponen']] },
    { verb: 'hablar', tense: 'Pretérito', conj: [['yo hablé', 'nosotros hablamos'], ['tú hablaste', 'vosotros hablasteis'], ['él habló', 'ellos hablaron']] },
    { verb: 'ir', tense: 'Pretérito', conj: [['yo fui', 'nosotros fuimos'], ['tú fuiste', 'vosotros fuisteis'], ['él fue', 'ellos fueron']] },
    { verb: 'tener', tense: 'Pretérito', conj: [['yo tuve', 'nosotros tuvimos'], ['tú tuviste', 'vosotros tuvisteis'], ['él tuvo', 'ellos tuvieron']] },
    { verb: 'ser', tense: 'Pretérito', conj: [['yo fui', 'nosotros fuimos'], ['tú fuiste', 'vosotros fuisteis'], ['él fue', 'ellos fueron']] },
    { verb: 'hacer', tense: 'Pretérito', conj: [['yo hice', 'nosotros hicimos'], ['tú hiciste', 'vosotros hicisteis'], ['él hizo', 'ellos hicieron']] },
    { verb: 'poder', tense: 'Pretérito', conj: [['yo pude', 'nosotros pudimos'], ['tú pudiste', 'vosotros pudisteis'], ['él pudo', 'ellos pudieron']] },
    { verb: 'decir', tense: 'Pretérito', conj: [['yo dije', 'nosotros dijimos'], ['tú dijiste', 'vosotros dijisteis'], ['él dijo', 'ellos dijeron']] },
    { verb: 'querer', tense: 'Pretérito', conj: [['yo quise', 'nosotros quisimos'], ['tú quisiste', 'vosotros quisisteis'], ['él quiso', 'ellos quisieron']] },
    { verb: 'hablar', tense: 'Imperfecto', conj: [['yo hablaba', 'nosotros hablábamos'], ['tú hablabas', 'vosotros hablabais'], ['él hablaba', 'ellos hablaban']] },
    { verb: 'ir', tense: 'Imperfecto', conj: [['yo iba', 'nosotros íbamos'], ['tú ibas', 'vosotros ibais'], ['él iba', 'ellos iban']] },
    { verb: 'ser', tense: 'Imperfecto', conj: [['yo era', 'nosotros éramos'], ['tú eras', 'vosotros erais'], ['él era', 'ellos eran']] },
    { verb: 'tener', tense: 'Imperfecto', conj: [['yo tenía', 'nosotros teníamos'], ['tú tenías', 'vosotros teníais'], ['él tenía', 'ellos tenían']] },
    { verb: 'hacer', tense: 'Imperfecto', conj: [['yo hacía', 'nosotros hacíamos'], ['tú hacías', 'vosotros hacíais'], ['él hacía', 'ellos hacían']] },
    { verb: 'hablar', tense: 'Futuro', conj: [['yo hablaré', 'nosotros hablaremos'], ['tú hablarás', 'vosotros hablaréis'], ['él hablará', 'ellos hablarán']] },
    { verb: 'ir', tense: 'Futuro', conj: [['yo iré', 'nosotros iremos'], ['tú irás', 'vosotros iréis'], ['él irá', 'ellos irán']] },
    { verb: 'tener', tense: 'Futuro', conj: [['yo tendré', 'nosotros tendremos'], ['tú tendrás', 'vosotros tendréis'], ['él tendrá', 'ellos tendrán']] },
    { verb: 'ser', tense: 'Futuro', conj: [['yo seré', 'nosotros seremos'], ['tú serás', 'vosotros seréis'], ['él será', 'ellos serán']] },
    { verb: 'hacer', tense: 'Futuro', conj: [['yo haré', 'nosotros haremos'], ['tú harás', 'vosotros haréis'], ['él hará', 'ellos harán']] },
    { verb: 'poder', tense: 'Futuro', conj: [['yo podré', 'nosotros podremos'], ['tú podrás', 'vosotros podréis'], ['él podrá', 'ellos podrán']] },
    { verb: 'hablar', tense: 'Condicional', conj: [['yo hablaría', 'nosotros hablaríamos'], ['tú hablarías', 'vosotros hablaríais'], ['él hablaría', 'ellos hablarían']] },
    { verb: 'tener', tense: 'Condicional', conj: [['yo tendría', 'nosotros tendríamos'], ['tú tendrías', 'vosotros tendríais'], ['él tendría', 'ellos tendrían']] },
    { verb: 'ser', tense: 'Condicional', conj: [['yo sería', 'nosotros seríamos'], ['tú serías', 'vosotros seríais'], ['él sería', 'ellos serían']] },
    { verb: 'hacer', tense: 'Condicional', conj: [['yo haría', 'nosotros haríamos'], ['tú harías', 'vosotros haríais'], ['él haría', 'ellos harían']] },
    { verb: 'poder', tense: 'Condicional', conj: [['yo podría', 'nosotros podríamos'], ['tú podrías', 'vosotros podríais'], ['él podría', 'ellos podrían']] }
  ],
  'portuguese': [
    { verb: 'falar', tense: 'Presente', conj: [['eu falo', 'nós falamos'], ['tu falas', 'vós falais'], ['ele fala', 'eles falam']] },
    { verb: 'ir', tense: 'Presente', conj: [['eu vou', 'nós vamos'], ['tu vais', 'vós ides'], ['ele vai', 'eles vão']] },
    { verb: 'ter', tense: 'Presente', conj: [['eu tenho', 'nós temos'], ['tu tens', 'vós tendes'], ['ele tem', 'eles têm']] },
    { verb: 'ser', tense: 'Presente', conj: [['eu sou', 'nós somos'], ['tu és', 'vós sois'], ['ele é', 'eles são']] },
    { verb: 'estar', tense: 'Presente', conj: [['eu estou', 'nós estamos'], ['tu estás', 'vós estais'], ['ele está', 'eles estão']] },
    { verb: 'fazer', tense: 'Presente', conj: [['eu faço', 'nós fazemos'], ['tu fazes', 'vós fazeis'], ['ele faz', 'eles fazem']] },
    { verb: 'poder', tense: 'Presente', conj: [['eu posso', 'nós podemos'], ['tu podes', 'vós podeis'], ['ele pode', 'eles podem']] },
    { verb: 'saber', tense: 'Presente', conj: [['eu sei', 'nós sabemos'], ['tu sabes', 'vós sabeis'], ['ele sabe', 'eles sabem']] },
    { verb: 'dizer', tense: 'Presente', conj: [['eu digo', 'nós dizemos'], ['tu dizes', 'vós dizeis'], ['ele diz', 'eles dizem']] },
    { verb: 'querer', tense: 'Presente', conj: [['eu quero', 'nós queremos'], ['tu queres', 'vós quereis'], ['ele quer', 'eles querem']] },
    { verb: 'vir', tense: 'Presente', conj: [['eu venho', 'nós vimos'], ['tu vens', 'vós vindes'], ['ele vem', 'eles vêm']] },
    { verb: 'pôr', tense: 'Presente', conj: [['eu ponho', 'nós pomos'], ['tu pões', 'vós pondes'], ['ele põe', 'eles põem']] },
    { verb: 'falar', tense: 'Pretérito perfeito', conj: [['eu falei', 'nós falámos'], ['tu falaste', 'vós falastes'], ['ele falou', 'eles falaram']] },
    { verb: 'ir', tense: 'Pretérito perfeito', conj: [['eu fui', 'nós fomos'], ['tu foste', 'vós fostes'], ['ele foi', 'eles foram']] },
    { verb: 'ter', tense: 'Pretérito perfeito', conj: [['eu tive', 'nós tivemos'], ['tu tiveste', 'vós tivestes'], ['ele teve', 'eles tiveram']] },
    { verb: 'ser', tense: 'Pretérito perfeito', conj: [['eu fui', 'nós fomos'], ['tu foste', 'vós fostes'], ['ele foi', 'eles foram']] },
    { verb: 'fazer', tense: 'Pretérito perfeito', conj: [['eu fiz', 'nós fizemos'], ['tu fizeste', 'vós fizestes'], ['ele fez', 'eles fizeram']] },
    { verb: 'poder', tense: 'Pretérito perfeito', conj: [['eu pude', 'nós pudemos'], ['tu pudeste', 'vós pudestes'], ['ele pôde', 'eles puderam']] },
    { verb: 'dizer', tense: 'Pretérito perfeito', conj: [['eu disse', 'nós dissemos'], ['tu disseste', 'vós dissestes'], ['ele disse', 'eles disseram']] },
    { verb: 'falar', tense: 'Imperfeito', conj: [['eu falava', 'nós falávamos'], ['tu falavas', 'vós faláveis'], ['ele falava', 'eles falavam']] },
    { verb: 'ter', tense: 'Imperfeito', conj: [['eu tinha', 'nós tínhamos'], ['tu tinhas', 'vós tínheis'], ['ele tinha', 'eles tinham']] },
    { verb: 'ser', tense: 'Imperfeito', conj: [['eu era', 'nós éramos'], ['tu eras', 'vós éreis'], ['ele era', 'eles eram']] },
    { verb: 'ir', tense: 'Imperfeito', conj: [['eu ia', 'nós íamos'], ['tu ias', 'vós íeis'], ['ele ia', 'eles iam']] },
    { verb: 'fazer', tense: 'Imperfeito', conj: [['eu fazia', 'nós fazíamos'], ['tu fazias', 'vós fazíeis'], ['ele fazia', 'eles faziam']] },
    { verb: 'falar', tense: 'Futuro', conj: [['eu falarei', 'nós falaremos'], ['tu falarás', 'vós falareis'], ['ele falará', 'eles falarão']] },
    { verb: 'ir', tense: 'Futuro', conj: [['eu irei', 'nós iremos'], ['tu irás', 'vós ireis'], ['ele irá', 'eles irão']] },
    { verb: 'ter', tense: 'Futuro', conj: [['eu terei', 'nós teremos'], ['tu terás', 'vós tereis'], ['ele terá', 'eles terão']] },
    { verb: 'ser', tense: 'Futuro', conj: [['eu serei', 'nós seremos'], ['tu serás', 'vós sereis'], ['ele será', 'eles serão']] },
    { verb: 'fazer', tense: 'Futuro', conj: [['eu farei', 'nós faremos'], ['tu farás', 'vós fareis'], ['ele fará', 'eles farão']] },
    { verb: 'falar', tense: 'Condicional', conj: [['eu falaria', 'nós falaríamos'], ['tu falarias', 'vós falaríeis'], ['ele falaria', 'eles falariam']] },
    { verb: 'ter', tense: 'Condicional', conj: [['eu teria', 'nós teríamos'], ['tu terias', 'vós teríeis'], ['ele teria', 'eles teriam']] },
    { verb: 'ser', tense: 'Condicional', conj: [['eu seria', 'nós seríamos'], ['tu serias', 'vós seríeis'], ['ele seria', 'eles seriam']] },
    { verb: 'fazer', tense: 'Condicional', conj: [['eu faria', 'nós faríamos'], ['tu farias', 'vós faríeis'], ['ele faria', 'eles fariam']] },
    { verb: 'poder', tense: 'Condicional', conj: [['eu poderia', 'nós poderíamos'], ['tu poderias', 'vós poderíeis'], ['ele poderia', 'eles poderiam']] }
  ],
  'german': [
    { verb: 'machen', tense: 'Präsens', conj: [['ich mache', 'wir machen'], ['du machst', 'ihr macht'], ['er macht', 'sie machen']] },
    { verb: 'gehen', tense: 'Präsens', conj: [['ich gehe', 'wir gehen'], ['du gehst', 'ihr geht'], ['er geht', 'sie gehen']] },
    { verb: 'haben', tense: 'Präsens', conj: [['ich habe', 'wir haben'], ['du hast', 'ihr habt'], ['er hat', 'sie haben']] },
    { verb: 'sein', tense: 'Präsens', conj: [['ich bin', 'wir sind'], ['du bist', 'ihr seid'], ['er ist', 'sie sind']] },
    { verb: 'werden', tense: 'Präsens', conj: [['ich werde', 'wir werden'], ['du wirst', 'ihr werdet'], ['er wird', 'sie werden']] },
    { verb: 'kommen', tense: 'Präsens', conj: [['ich komme', 'wir kommen'], ['du kommst', 'ihr kommt'], ['er kommt', 'sie kommen']] },
    { verb: 'nehmen', tense: 'Präsens', conj: [['ich nehme', 'wir nehmen'], ['du nimmst', 'ihr nehmt'], ['er nimmt', 'sie nehmen']] },
    { verb: 'geben', tense: 'Präsens', conj: [['ich gebe', 'wir geben'], ['du gibst', 'ihr gebt'], ['er gibt', 'sie geben']] },
    { verb: 'sehen', tense: 'Präsens', conj: [['ich sehe', 'wir sehen'], ['du siehst', 'ihr seht'], ['er sieht', 'sie sehen']] },
    { verb: 'wissen', tense: 'Präsens', conj: [['ich weiß', 'wir wissen'], ['du weißt', 'ihr wisst'], ['er weiß', 'sie wissen']] },
    { verb: 'sprechen', tense: 'Präsens', conj: [['ich spreche', 'wir sprechen'], ['du sprichst', 'ihr sprecht'], ['er spricht', 'sie sprechen']] },
    { verb: 'fahren', tense: 'Präsens', conj: [['ich fahre', 'wir fahren'], ['du fährst', 'ihr fahrt'], ['er fährt', 'sie fahren']] },
    { verb: 'machen', tense: 'Präteritum', conj: [['ich machte', 'wir machten'], ['du machtest', 'ihr machtet'], ['er machte', 'sie machten']] },
    { verb: 'gehen', tense: 'Präteritum', conj: [['ich ging', 'wir gingen'], ['du gingst', 'ihr gingt'], ['er ging', 'sie gingen']] },
    { verb: 'haben', tense: 'Präteritum', conj: [['ich hatte', 'wir hatten'], ['du hattest', 'ihr hattet'], ['er hatte', 'sie hatten']] },
    { verb: 'sein', tense: 'Präteritum', conj: [['ich war', 'wir waren'], ['du warst', 'ihr wart'], ['er war', 'sie waren']] },
    { verb: 'werden', tense: 'Präteritum', conj: [['ich wurde', 'wir wurden'], ['du wurdest', 'ihr wurdet'], ['er wurde', 'sie wurden']] },
    { verb: 'kommen', tense: 'Präteritum', conj: [['ich kam', 'wir kamen'], ['du kamst', 'ihr kamt'], ['er kam', 'sie kamen']] },
    { verb: 'nehmen', tense: 'Präteritum', conj: [['ich nahm', 'wir nahmen'], ['du nahmst', 'ihr nahmt'], ['er nahm', 'sie nahmen']] },
    { verb: 'geben', tense: 'Präteritum', conj: [['ich gab', 'wir gaben'], ['du gabst', 'ihr gabt'], ['er gab', 'sie gaben']] },
    { verb: 'sehen', tense: 'Präteritum', conj: [['ich sah', 'wir sahen'], ['du sahst', 'ihr saht'], ['er sah', 'sie sahen']] },
    { verb: 'sprechen', tense: 'Präteritum', conj: [['ich sprach', 'wir sprachen'], ['du sprachst', 'ihr spracht'], ['er sprach', 'sie sprachen']] },
    { verb: 'fahren', tense: 'Präteritum', conj: [['ich fuhr', 'wir fuhren'], ['du fuhrst', 'ihr fuhrt'], ['er fuhr', 'sie fuhren']] },
    { verb: 'wissen', tense: 'Präteritum', conj: [['ich wusste', 'wir wussten'], ['du wusstest', 'ihr wusstet'], ['er wusste', 'sie wussten']] },
    { verb: 'machen', tense: 'Perfekt', conj: [['ich habe gemacht', 'wir haben gemacht'], ['du hast gemacht', 'ihr habt gemacht'], ['er hat gemacht', 'sie haben gemacht']] },
    { verb: 'gehen', tense: 'Perfekt', conj: [['ich bin gegangen', 'wir sind gegangen'], ['du bist gegangen', 'ihr seid gegangen'], ['er ist gegangen', 'sie sind gegangen']] },
    { verb: 'haben', tense: 'Perfekt', conj: [['ich habe gehabt', 'wir haben gehabt'], ['du hast gehabt', 'ihr habt gehabt'], ['er hat gehabt', 'sie haben gehabt']] },
    { verb: 'sein', tense: 'Perfekt', conj: [['ich bin gewesen', 'wir sind gewesen'], ['du bist gewesen', 'ihr seid gewesen'], ['er ist gewesen', 'sie sind gewesen']] },
    { verb: 'nehmen', tense: 'Perfekt', conj: [['ich habe genommen', 'wir haben genommen'], ['du hast genommen', 'ihr habt genommen'], ['er hat genommen', 'sie haben genommen']] },
    { verb: 'sehen', tense: 'Perfekt', conj: [['ich habe gesehen', 'wir haben gesehen'], ['du hast gesehen', 'ihr habt gesehen'], ['er hat gesehen', 'sie haben gesehen']] },
    { verb: 'sprechen', tense: 'Perfekt', conj: [['ich habe gesprochen', 'wir haben gesprochen'], ['du hast gesprochen', 'ihr habt gesprochen'], ['er hat gesprochen', 'sie haben gesprochen']] },
    { verb: 'fahren', tense: 'Perfekt', conj: [['ich bin gefahren', 'wir sind gefahren'], ['du bist gefahren', 'ihr seid gefahren'], ['er ist gefahren', 'sie sind gefahren']] },
    { verb: 'machen', tense: 'Futur I', conj: [['ich werde machen', 'wir werden machen'], ['du wirst machen', 'ihr werdet machen'], ['er wird machen', 'sie werden machen']] },
    { verb: 'gehen', tense: 'Futur I', conj: [['ich werde gehen', 'wir werden gehen'], ['du wirst gehen', 'ihr werdet gehen'], ['er wird gehen', 'sie werden gehen']] },
    { verb: 'haben', tense: 'Futur I', conj: [['ich werde haben', 'wir werden haben'], ['du wirst haben', 'ihr werdet haben'], ['er wird haben', 'sie werden haben']] },
    { verb: 'sein', tense: 'Futur I', conj: [['ich werde sein', 'wir werden sein'], ['du wirst sein', 'ihr werdet sein'], ['er wird sein', 'sie werden sein']] },
    { verb: 'kommen', tense: 'Futur I', conj: [['ich werde kommen', 'wir werden kommen'], ['du wirst kommen', 'ihr werdet kommen'], ['er wird kommen', 'sie werden kommen']] }
  ],
  'dutch': [
    { verb: 'werken', tense: 'Present', conj: [['ik werk', 'wij werken'], ['jij werkt', 'jullie werken'], ['hij werkt', 'zij werken']] },
    { verb: 'gaan', tense: 'Present', conj: [['ik ga', 'wij gaan'], ['jij gaat', 'jullie gaan'], ['hij gaat', 'zij gaan']] },
    { verb: 'hebben', tense: 'Present', conj: [['ik heb', 'wij hebben'], ['jij hebt', 'jullie hebben'], ['hij heeft', 'zij hebben']] },
    { verb: 'zijn', tense: 'Present', conj: [['ik ben', 'wij zijn'], ['jij bent', 'jullie zijn'], ['hij is', 'zij zijn']] },
    { verb: 'worden', tense: 'Present', conj: [['ik word', 'wij worden'], ['jij wordt', 'jullie worden'], ['hij wordt', 'zij worden']] },
    { verb: 'komen', tense: 'Present', conj: [['ik kom', 'wij komen'], ['jij komt', 'jullie komen'], ['hij komt', 'zij komen']] },
    { verb: 'geven', tense: 'Present', conj: [['ik geef', 'wij geven'], ['jij geeft', 'jullie geven'], ['hij geeft', 'zij geven']] },
    { verb: 'zien', tense: 'Present', conj: [['ik zie', 'wij zien'], ['jij ziet', 'jullie zien'], ['hij ziet', 'zij zien']] },
    { verb: 'schrijven', tense: 'Present', conj: [['ik schrijf', 'wij schrijven'], ['jij schrijft', 'jullie schrijven'], ['hij schrijft', 'zij schrijven']] },
    { verb: 'lopen', tense: 'Present', conj: [['ik loop', 'wij lopen'], ['jij loopt', 'jullie lopen'], ['hij loopt', 'zij lopen']] },
    { verb: 'werken', tense: 'Past Simple', conj: [['ik werkte', 'wij werkten'], ['jij werkte', 'jullie werkten'], ['hij werkte', 'zij werkten']] },
    { verb: 'gaan', tense: 'Past Simple', conj: [['ik ging', 'wij gingen'], ['jij ging', 'jullie gingen'], ['hij ging', 'zij gingen']] },
    { verb: 'hebben', tense: 'Past Simple', conj: [['ik had', 'wij hadden'], ['jij had', 'jullie hadden'], ['hij had', 'zij hadden']] },
    { verb: 'zijn', tense: 'Past Simple', conj: [['ik was', 'wij waren'], ['jij was', 'jullie waren'], ['hij was', 'zij waren']] },
    { verb: 'worden', tense: 'Past Simple', conj: [['ik werd', 'wij werden'], ['jij werd', 'jullie werden'], ['hij werd', 'zij werden']] },
    { verb: 'komen', tense: 'Past Simple', conj: [['ik kwam', 'wij kwamen'], ['jij kwam', 'jullie kwamen'], ['hij kwam', 'zij kwamen']] },
    { verb: 'geven', tense: 'Past Simple', conj: [['ik gaf', 'wij gaven'], ['jij gaf', 'jullie gaven'], ['hij gaf', 'zij gaven']] },
    { verb: 'zien', tense: 'Past Simple', conj: [['ik zag', 'wij zagen'], ['jij zag', 'jullie zagen'], ['hij zag', 'zij zagen']] },
    { verb: 'schrijven', tense: 'Past Simple', conj: [['ik schreef', 'wij schreven'], ['jij schreef', 'jullie schreven'], ['hij schreef', 'zij schreven']] },
    { verb: 'lopen', tense: 'Past Simple', conj: [['ik liep', 'wij liepen'], ['jij liep', 'jullie liepen'], ['hij liep', 'zij liepen']] },
    { verb: 'werken', tense: 'Present Perfect', conj: [['ik heb gewerkt', 'wij hebben gewerkt'], ['jij hebt gewerkt', 'jullie hebben gewerkt'], ['hij heeft gewerkt', 'zij hebben gewerkt']] },
    { verb: 'gaan', tense: 'Present Perfect', conj: [['ik ben gegaan', 'wij zijn gegaan'], ['jij bent gegaan', 'jullie zijn gegaan'], ['hij is gegaan', 'zij zijn gegaan']] },
    { verb: 'hebben', tense: 'Present Perfect', conj: [['ik heb gehad', 'wij hebben gehad'], ['jij hebt gehad', 'jullie hebben gehad'], ['hij heeft gehad', 'zij hebben gehad']] },
    { verb: 'zijn', tense: 'Present Perfect', conj: [['ik ben geweest', 'wij zijn geweest'], ['jij bent geweest', 'jullie zijn geweest'], ['hij is geweest', 'zij zijn geweest']] },
    { verb: 'komen', tense: 'Present Perfect', conj: [['ik ben gekomen', 'wij zijn gekomen'], ['jij bent gekomen', 'jullie zijn gekomen'], ['hij is gekomen', 'zij zijn gekomen']] },
    { verb: 'geven', tense: 'Present Perfect', conj: [['ik heb gegeven', 'wij hebben gegeven'], ['jij hebt gegeven', 'jullie hebben gegeven'], ['hij heeft gegeven', 'zij hebben gegeven']] },
    { verb: 'zien', tense: 'Present Perfect', conj: [['ik heb gezien', 'wij hebben gezien'], ['jij hebt gezien', 'jullie hebben gezien'], ['hij heeft gezien', 'zij hebben gezien']] },
    { verb: 'schrijven', tense: 'Present Perfect', conj: [['ik heb geschreven', 'wij hebben geschreven'], ['jij hebt geschreven', 'jullie hebben geschreven'], ['hij heeft geschreven', 'zij hebben geschreven']] },
    { verb: 'lopen', tense: 'Present Perfect', conj: [['ik heb gelopen', 'wij hebben gelopen'], ['jij hebt gelopen', 'jullie hebben gelopen'], ['hij heeft gelopen', 'zij hebben gelopen']] }
  ],
  'danish': [
    { verb: 'arbejde', tense: 'Præsens', conj: [['jeg arbejder', 'vi arbejder'], ['du arbejder', 'I arbejder'], ['han arbejder', 'de arbejder']] },
    { verb: 'gå', tense: 'Præsens', conj: [['jeg går', 'vi går'], ['du går', 'I går'], ['han går', 'de går']] },
    { verb: 'have', tense: 'Præsens', conj: [['jeg har', 'vi har'], ['du har', 'I har'], ['han har', 'de har']] },
    { verb: 'være', tense: 'Præsens', conj: [['jeg er', 'vi er'], ['du er', 'I er'], ['han er', 'de er']] },
    { verb: 'komme', tense: 'Præsens', conj: [['jeg kommer', 'vi kommer'], ['du kommer', 'I kommer'], ['han kommer', 'de kommer']] },
    { verb: 'se', tense: 'Præsens', conj: [['jeg ser', 'vi ser'], ['du ser', 'I ser'], ['han ser', 'de ser']] },
    { verb: 'sige', tense: 'Præsens', conj: [['jeg siger', 'vi siger'], ['du siger', 'I siger'], ['han siger', 'de siger']] },
    { verb: 'gøre', tense: 'Præsens', conj: [['jeg gør', 'vi gør'], ['du gør', 'I gør'], ['han gør', 'de gør']] },
    { verb: 'købe', tense: 'Præsens', conj: [['jeg køber', 'vi køber'], ['du køber', 'I køber'], ['han køber', 'de køber']] },
    { verb: 'tage', tense: 'Præsens', conj: [['jeg tager', 'vi tager'], ['du tager', 'I tager'], ['han tager', 'de tager']] },
    { verb: 'arbejde', tense: 'Præteritum', conj: [['jeg arbejdede', 'vi arbejdede'], ['du arbejdede', 'I arbejdede'], ['han arbejdede', 'de arbejdede']] },
    { verb: 'gå', tense: 'Præteritum', conj: [['jeg gik', 'vi gik'], ['du gik', 'I gik'], ['han gik', 'de gik']] },
    { verb: 'have', tense: 'Præteritum', conj: [['jeg havde', 'vi havde'], ['du havde', 'I havde'], ['han havde', 'de havde']] },
    { verb: 'være', tense: 'Præteritum', conj: [['jeg var', 'vi var'], ['du var', 'I var'], ['han var', 'de var']] },
    { verb: 'komme', tense: 'Præteritum', conj: [['jeg kom', 'vi kom'], ['du kom', 'I kom'], ['han kom', 'de kom']] },
    { verb: 'se', tense: 'Præteritum', conj: [['jeg så', 'vi så'], ['du så', 'I så'], ['han så', 'de så']] },
    { verb: 'sige', tense: 'Præteritum', conj: [['jeg sagde', 'vi sagde'], ['du sagde', 'I sagde'], ['han sagde', 'de sagde']] },
    { verb: 'gøre', tense: 'Præteritum', conj: [['jeg gjorde', 'vi gjorde'], ['du gjorde', 'I gjorde'], ['han gjorde', 'de gjorde']] },
    { verb: 'købe', tense: 'Præteritum', conj: [['jeg købte', 'vi købte'], ['du købte', 'I købte'], ['han købte', 'de købte']] },
    { verb: 'tage', tense: 'Præteritum', conj: [['jeg tog', 'vi tog'], ['du tog', 'I tog'], ['han tog', 'de tog']] },
    { verb: 'arbejde', tense: 'Perfektum', conj: [['jeg har arbejdet', 'vi har arbejdet'], ['du har arbejdet', 'I har arbejdet'], ['han har arbejdet', 'de har arbejdet']] },
    { verb: 'gå', tense: 'Perfektum', conj: [['jeg er gået', 'vi er gået'], ['du er gået', 'I er gået'], ['han er gået', 'de er gået']] },
    { verb: 'have', tense: 'Perfektum', conj: [['jeg har haft', 'vi har haft'], ['du har haft', 'I har haft'], ['han har haft', 'de har haft']] },
    { verb: 'være', tense: 'Perfektum', conj: [['jeg har været', 'vi har været'], ['du har været', 'I har været'], ['han har været', 'de har været']] },
    { verb: 'komme', tense: 'Perfektum', conj: [['jeg er kommet', 'vi er kommet'], ['du er kommet', 'I er kommet'], ['han er kommet', 'de er kommet']] },
    { verb: 'se', tense: 'Perfektum', conj: [['jeg har set', 'vi har set'], ['du har set', 'I har set'], ['han har set', 'de har set']] },
    { verb: 'sige', tense: 'Perfektum', conj: [['jeg har sagt', 'vi har sagt'], ['du har sagt', 'I har sagt'], ['han har sagt', 'de har sagt']] },
    { verb: 'gøre', tense: 'Perfektum', conj: [['jeg har gjort', 'vi har gjort'], ['du har gjort', 'I har gjort'], ['han har gjort', 'de har gjort']] },
    { verb: 'købe', tense: 'Perfektum', conj: [['jeg har købt', 'vi har købt'], ['du har købt', 'I har købt'], ['han har købt', 'de har købt']] },
    { verb: 'tage', tense: 'Perfektum', conj: [['jeg har taget', 'vi har taget'], ['du har taget', 'I har taget'], ['han har taget', 'de har taget']] }
  ],
  'norwegian': [
    { verb: 'kaste', tense: 'Presens', conj: [['jeg kaster', 'vi kaster'], ['du kaster', 'dere kaster'], ['han kaster', 'de kaster']] },
    { verb: 'gå', tense: 'Presens', conj: [['jeg går', 'vi går'], ['du går', 'dere går'], ['han går', 'de går']] },
    { verb: 'ha', tense: 'Presens', conj: [['jeg har', 'vi har'], ['du har', 'dere har'], ['han har', 'de har']] },
    { verb: 'være', tense: 'Presens', conj: [['jeg er', 'vi er'], ['du er', 'dere er'], ['han er', 'de er']] },
    { verb: 'komme', tense: 'Presens', conj: [['jeg kommer', 'vi kommer'], ['du kommer', 'dere kommer'], ['han kommer', 'de kommer']] },
    { verb: 'se', tense: 'Presens', conj: [['jeg ser', 'vi ser'], ['du ser', 'dere ser'], ['han ser', 'de ser']] },
    { verb: 'si', tense: 'Presens', conj: [['jeg sier', 'vi sier'], ['du sier', 'dere sier'], ['han sier', 'de sier']] },
    { verb: 'gjøre', tense: 'Presens', conj: [['jeg gjør', 'vi gjør'], ['du gjør', 'dere gjør'], ['han gjør', 'de gjør']] },
    { verb: 'kjøpe', tense: 'Presens', conj: [['jeg kjøper', 'vi kjøper'], ['du kjøper', 'dere kjøper'], ['han kjøper', 'de kjøper']] },
    { verb: 'ta', tense: 'Presens', conj: [['jeg tar', 'vi tar'], ['du tar', 'dere tar'], ['han tar', 'de tar']] },
    { verb: 'kaste', tense: 'Preteritum', conj: [['jeg kastet', 'vi kastet'], ['du kastet', 'dere kastet'], ['han kastet', 'de kastet']] },
    { verb: 'gå', tense: 'Preteritum', conj: [['jeg gikk', 'vi gikk'], ['du gikk', 'dere gikk'], ['han gikk', 'de gikk']] },
    { verb: 'ha', tense: 'Preteritum', conj: [['jeg hadde', 'vi hadde'], ['du hadde', 'dere hadde'], ['han hadde', 'de hadde']] },
    { verb: 'være', tense: 'Preteritum', conj: [['jeg var', 'vi var'], ['du var', 'dere var'], ['han var', 'de var']] },
    { verb: 'komme', tense: 'Preteritum', conj: [['jeg kom', 'vi kom'], ['du kom', 'dere kom'], ['han kom', 'de kom']] },
    { verb: 'se', tense: 'Preteritum', conj: [['jeg så', 'vi så'], ['du så', 'dere så'], ['han så', 'de så']] },
    { verb: 'si', tense: 'Preteritum', conj: [['jeg sa', 'vi sa'], ['du sa', 'dere sa'], ['han sa', 'de sa']] },
    { verb: 'gjøre', tense: 'Preteritum', conj: [['jeg gjorde', 'vi gjorde'], ['du gjorde', 'dere gjorde'], ['han gjorde', 'de gjorde']] },
    { verb: 'kjøpe', tense: 'Preteritum', conj: [['jeg kjøpte', 'vi kjøpte'], ['du kjøpte', 'dere kjøpte'], ['han kjøpte', 'de kjøpte']] },
    { verb: 'ta', tense: 'Preteritum', conj: [['jeg tok', 'vi tok'], ['du tok', 'dere tok'], ['han tok', 'de tok']] },
    { verb: 'kaste', tense: 'Presens perfektum', conj: [['jeg har kastet', 'vi har kastet'], ['du har kastet', 'dere har kastet'], ['han har kastet', 'de har kastet']] },
    { verb: 'gå', tense: 'Presens perfektum', conj: [['jeg har gått', 'vi har gått'], ['du har gått', 'dere har gått'], ['han har gått', 'de har gått']] },
    { verb: 'ha', tense: 'Presens perfektum', conj: [['jeg har hatt', 'vi har hatt'], ['du har hatt', 'dere har hatt'], ['han har hatt', 'de har hatt']] },
    { verb: 'være', tense: 'Presens perfektum', conj: [['jeg har vært', 'vi har vært'], ['du har vært', 'dere har vært'], ['han har vært', 'de har vært']] },
    { verb: 'komme', tense: 'Presens perfektum', conj: [['jeg har kommet', 'vi har kommet'], ['du har kommet', 'dere har kommet'], ['han har kommet', 'de har kommet']] },
    { verb: 'se', tense: 'Presens perfektum', conj: [['jeg har sett', 'vi har sett'], ['du har sett', 'dere har sett'], ['han har sett', 'de har sett']] },
    { verb: 'si', tense: 'Presens perfektum', conj: [['jeg har sagt', 'vi har sagt'], ['du har sagt', 'dere har sagt'], ['han har sagt', 'de har sagt']] },
    { verb: 'gjøre', tense: 'Presens perfektum', conj: [['jeg har gjort', 'vi har gjort'], ['du har gjort', 'dere har gjort'], ['han har gjort', 'de har gjort']] },
    { verb: 'kjøpe', tense: 'Presens perfektum', conj: [['jeg har kjøpt', 'vi har kjøpt'], ['du har kjøpt', 'dere har kjøpt'], ['han har kjøpt', 'de har kjøpt']] },
    { verb: 'ta', tense: 'Presens perfektum', conj: [['jeg har tatt', 'vi har tatt'], ['du har tatt', 'dere har tatt'], ['han har tatt', 'de har tatt']] }
  ],
  'icelandic': [
    { verb: 'tala', tense: 'Nútíð', conj: [['ég tala', 'við tölum'], ['þú talar', 'þið talið'], ['hann talar', 'þeir tala']] },
    { verb: 'gefa', tense: 'Nútíð', conj: [['ég gef', 'við gefum'], ['þú gefur', 'þið gefið'], ['hann gefur', 'þeir gefa']] },
    { verb: 'vera', tense: 'Nútíð', conj: [['ég er', 'við erum'], ['þú ert', 'þið eruð'], ['hann er', 'þeir eru']] },
    { verb: 'hafa', tense: 'Nútíð', conj: [['ég hef', 'við höfum'], ['þú hefur', 'þið hafið'], ['hann hefur', 'þeir hafa']] },
    { verb: 'fara', tense: 'Nútíð', conj: [['ég fer', 'við förum'], ['þú ferð', 'þið farið'], ['hann fer', 'þeir fara']] },
    { verb: 'koma', tense: 'Nútíð', conj: [['ég kem', 'við komum'], ['þú kemur', 'þið komið'], ['hann kemur', 'þeir koma']] },
    { verb: 'sjá', tense: 'Nútíð', conj: [['ég sé', 'við sjáum'], ['þú sérð', 'þið sjáið'], ['hann sér', 'þeir sjá']] },
    { verb: 'segja', tense: 'Nútíð', conj: [['ég segi', 'við segjum'], ['þú segir', 'þið segið'], ['hann segir', 'þeir segja']] },
    { verb: 'tala', tense: 'Þátíð', conj: [['ég talaði', 'við töluðum'], ['þú talaðir', 'þið töluðuð'], ['hann talaði', 'þeir töluðu']] },
    { verb: 'gefa', tense: 'Þátíð', conj: [['ég gaf', 'við gáfum'], ['þú gafst', 'þið gáfuð'], ['hann gaf', 'þeir gáfu']] },
    { verb: 'vera', tense: 'Þátíð', conj: [['ég var', 'við vorum'], ['þú varst', 'þið voruð'], ['hann var', 'þeir voru']] },
    { verb: 'hafa', tense: 'Þátíð', conj: [['ég hafði', 'við höfðum'], ['þú hafðir', 'þið höfðuð'], ['hann hafði', 'þeir höfðu']] },
    { verb: 'fara', tense: 'Þátíð', conj: [['ég fór', 'við fórum'], ['þú fórst', 'þið fóruð'], ['hann fór', 'þeir fóru']] },
    { verb: 'koma', tense: 'Þátíð', conj: [['ég kom', 'við komum'], ['þú komst', 'þið komuð'], ['hann kom', 'þeir komu']] },
    { verb: 'sjá', tense: 'Þátíð', conj: [['ég sá', 'við sáum'], ['þú sást', 'þið sáuð'], ['hann sá', 'þeir sáu']] },
    { verb: 'segja', tense: 'Þátíð', conj: [['ég sagði', 'við sögðum'], ['þú sagðir', 'þið sögðuð'], ['hann sagði', 'þeir sögðu']] }
  ],
  'czech': [
    { verb: 'dělat', tense: 'Present', conj: [['já dělám', 'my děláme'], ['ty děláš', 'vy děláte'], ['on dělá', 'oni dělají']] },
    { verb: 'být', tense: 'Present', conj: [['já jsem', 'my jsme'], ['ty jsi', 'vy jste'], ['on je', 'oni jsou']] },
    { verb: 'mít', tense: 'Present', conj: [['já mám', 'my máme'], ['ty máš', 'vy máte'], ['on má', 'oni mají']] },
    { verb: 'jít', tense: 'Present', conj: [['já jdu', 'my jdeme'], ['ty jdeš', 'vy jdete'], ['on jde', 'oni jdou']] },
    { verb: 'vidět', tense: 'Present', conj: [['já vidím', 'my vidíme'], ['ty vidíš', 'vy vidíte'], ['on vidí', 'oni vidí']] },
    { verb: 'psát', tense: 'Present', conj: [['já píšu', 'my píšeme'], ['ty píšeš', 'vy píšete'], ['on píše', 'oni píšou']] },
    { verb: 'kupovat', tense: 'Present', conj: [['já kupuji', 'my kupujeme'], ['ty kupuješ', 'vy kupujete'], ['on kupuje', 'oni kupují']] },
    { verb: 'mluvit', tense: 'Present', conj: [['já mluvím', 'my mluvíme'], ['ty mluvíš', 'vy mluvíte'], ['on mluví', 'oni mluví']] },
    { verb: 'nést', tense: 'Present', conj: [['já nesu', 'my neseme'], ['ty neseš', 'vy nesete'], ['on nese', 'oni nesou']] },
    { verb: 'prosit', tense: 'Present', conj: [['já prosím', 'my prosíme'], ['ty prosíš', 'vy prosíte'], ['on prosí', 'oni prosí']] },
    { verb: 'dělat', tense: 'Past', conj: [['já jsem dělal', 'my jsme dělali'], ['ty jsi dělal', 'vy jste dělali'], ['on dělal', 'oni dělali']] },
    { verb: 'být', tense: 'Past', conj: [['já jsem byl', 'my jsme byli'], ['ty jsi byl', 'vy jste byli'], ['on byl', 'oni byli']] },
    { verb: 'mít', tense: 'Past', conj: [['já jsem měl', 'my jsme měli'], ['ty jsi měl', 'vy jste měli'], ['on měl', 'oni měli']] },
    { verb: 'jít', tense: 'Past', conj: [['já jsem šel', 'my jsme šli'], ['ty jsi šel', 'vy jste šli'], ['on šel', 'oni šli']] },
    { verb: 'vidět', tense: 'Past', conj: [['já jsem viděl', 'my jsme viděli'], ['ty jsi viděl', 'vy jste viděli'], ['on viděl', 'oni viděli']] },
    { verb: 'psát', tense: 'Past', conj: [['já jsem psal', 'my jsme psali'], ['ty jsi psal', 'vy jste psali'], ['on psal', 'oni psali']] },
    { verb: 'kupovat', tense: 'Past', conj: [['já jsem kupoval', 'my jsme kupovali'], ['ty jsi kupoval', 'vy jste kupovali'], ['on kupoval', 'oni kupovali']] },
    { verb: 'mluvit', tense: 'Past', conj: [['já jsem mluvil', 'my jsme mluvili'], ['ty jsi mluvil', 'vy jste mluvili'], ['on mluvil', 'oni mluvili']] },
    { verb: 'nést', tense: 'Past', conj: [['já jsem nesl', 'my jsme nesli'], ['ty jsi nesl', 'vy jste nesli'], ['on nesl', 'oni nesli']] },
    { verb: 'prosit', tense: 'Past', conj: [['já jsem prosil', 'my jsme prosili'], ['ty jsi prosil', 'vy jste prosili'], ['on prosil', 'oni prosili']] }
  ],
  'greek': [
    { verb: 'γράφω', tense: 'Ενεστώτας', conj: [['εγώ γράφω', 'εμείς γράφουμε'], ['εσύ γράφεις', 'εσείς γράφετε'], ['αυτός γράφει', 'αυτοί γράφουν']] },
    { verb: 'μιλώ', tense: 'Ενεστώτας', conj: [['εγώ μιλώ', 'εμείς μιλάμε'], ['εσύ μιλάς', 'εσείς μιλάτε'], ['αυτός μιλάει', 'αυτοί μιλάνε']] },
    { verb: 'είμαι', tense: 'Ενεστώτας', conj: [['εγώ είμαι', 'εμείς είμαστε'], ['εσύ είσαι', 'εσείς είστε'], ['αυτός είναι', 'αυτοί είναι']] },
    { verb: 'έχω', tense: 'Ενεστώτας', conj: [['εγώ έχω', 'εμείς έχουμε'], ['εσύ έχεις', 'εσείς έχετε'], ['αυτός έχει', 'αυτοί έχουν']] },
    { verb: 'πηγαίνω', tense: 'Ενεστώτας', conj: [['εγώ πηγαίνω', 'εμείς πηγαίνουμε'], ['εσύ πηγαίνεις', 'εσείς πηγαίνετε'], ['αυτός πηγαίνει', 'αυτοί πηγαίνουν']] },
    { verb: 'βλέπω', tense: 'Ενεστώτας', conj: [['εγώ βλέπω', 'εμείς βλέπουμε'], ['εσύ βλέπεις', 'εσείς βλέπετε'], ['αυτός βλέπει', 'αυτοί βλέπουν']] },
    { verb: 'τρώω', tense: 'Ενεστώτας', conj: [['εγώ τρώω', 'εμείς τρώμε'], ['εσύ τρως', 'εσείς τρώτε'], ['αυτός τρώει', 'αυτοί τρώνε']] },
    { verb: 'πίνω', tense: 'Ενεστώτας', conj: [['εγώ πίνω', 'εμείς πίνουμε'], ['εσύ πίνεις', 'εσείς πίνετε'], ['αυτός πίνει', 'αυτοί πίνουν']] },
    { verb: 'γράφω', tense: 'Αόριστος', conj: [['εγώ έγραψα', 'εμείς γράψαμε'], ['εσύ έγραψες', 'εσείς γράψατε'], ['αυτός έγραψε', 'αυτοί έγραψαν']] },
    { verb: 'μιλώ', tense: 'Αόριστος', conj: [['εγώ μίλησα', 'εμείς μιλήσαμε'], ['εσύ μίλησες', 'εσείς μιλήσατε'], ['αυτός μίλησε', 'αυτοί μίλησαν']] },
    { verb: 'έχω', tense: 'Αόριστος', conj: [['εγώ είχα', 'εμείς είχαμε'], ['εσύ είχες', 'εσείς είχατε'], ['αυτός είχε', 'αυτοί είχαν']] },
    { verb: 'πηγαίνω', tense: 'Αόριστος', conj: [['εγώ πήγα', 'εμείς πήγαμε'], ['εσύ πήγες', 'εσείς πήγατε'], ['αυτός πήγε', 'αυτοί πήγαν']] },
    { verb: 'βλέπω', tense: 'Αόριστος', conj: [['εγώ είδα', 'εμείς είδαμε'], ['εσύ είδες', 'εσείς είδατε'], ['αυτός είδε', 'αυτοί είδαν']] },
    { verb: 'τρώω', tense: 'Αόριστος', conj: [['εγώ έφαγα', 'εμείς φάγαμε'], ['εσύ έφαγες', 'εσείς φάγατε'], ['αυτός έφαγε', 'αυτοί έφαγαν']] },
    { verb: 'πίνω', tense: 'Αόριστος', conj: [['εγώ ήπια', 'εμείς ήπιαμε'], ['εσύ ήπιες', 'εσείς ήπιατε'], ['αυτός ήπιε', 'αυτοί ήπιαν']] },
    { verb: 'γράφω', tense: 'Παρατατικός', conj: [['εγώ έγραφα', 'εμείς γράφαμε'], ['εσύ έγραφες', 'εσείς γράφατε'], ['αυτός έγραφε', 'αυτοί έγραφαν']] },
    { verb: 'μιλώ', tense: 'Παρατατικός', conj: [['εγώ μιλούσα', 'εμείς μιλούσαμε'], ['εσύ μιλούσες', 'εσείς μιλούσατε'], ['αυτός μιλούσε', 'αυτοί μιλούσαν']] },
    { verb: 'είμαι', tense: 'Παρατατικός', conj: [['εγώ ήμουν', 'εμείς ήμασταν'], ['εσύ ήσουν', 'εσείς ήσασταν'], ['αυτός ήταν', 'αυτοί ήταν']] },
    { verb: 'έχω', tense: 'Παρατατικός', conj: [['εγώ είχα', 'εμείς είχαμε'], ['εσύ είχες', 'εσείς είχατε'], ['αυτός είχε', 'αυτοί είχαν']] },
    { verb: 'βλέπω', tense: 'Παρατατικός', conj: [['εγώ έβλεπα', 'εμείς βλέπαμε'], ['εσύ έβλεπες', 'εσείς βλέπατε'], ['αυτός έβλεπε', 'αυτοί έβλεπαν']] }
  ],
  'finnish': [
    { verb: 'puhua', tense: 'Preesens', conj: [['minä puhun', 'me puhumme'], ['sinä puhut', 'te puhutte'], ['hän puhuu', 'he puhuvat']] },
    { verb: 'tulla', tense: 'Preesens', conj: [['minä tulen', 'me tulemme'], ['sinä tulet', 'te tulette'], ['hän tulee', 'he tulevat']] },
    { verb: 'olla', tense: 'Preesens', conj: [['minä olen', 'me olemme'], ['sinä olet', 'te olette'], ['hän on', 'he ovat']] },
    { verb: 'syödä', tense: 'Preesens', conj: [['minä syön', 'me syömme'], ['sinä syöt', 'te syötte'], ['hän syö', 'he syövät']] },
    { verb: 'tehdä', tense: 'Preesens', conj: [['minä teen', 'me teemme'], ['sinä teet', 'te teette'], ['hän tekee', 'he tekevät']] },
    { verb: 'mennä', tense: 'Preesens', conj: [['minä menen', 'me menemme'], ['sinä menet', 'te menette'], ['hän menee', 'he menevät']] },
    { verb: 'lukea', tense: 'Preesens', conj: [['minä luen', 'me luemme'], ['sinä luet', 'te luette'], ['hän lukee', 'he lukevat']] },
    { verb: 'antaa', tense: 'Preesens', conj: [['minä annan', 'me annamme'], ['sinä annat', 'te annatte'], ['hän antaa', 'he antavat']] },
    { verb: 'puhua', tense: 'Imperfekti', conj: [['minä puhuin', 'me puhuimme'], ['sinä puhuit', 'te puhuitte'], ['hän puhui', 'he puhuivat']] },
    { verb: 'tulla', tense: 'Imperfekti', conj: [['minä tulin', 'me tulimme'], ['sinä tulit', 'te tulitte'], ['hän tuli', 'he tulivat']] },
    { verb: 'olla', tense: 'Imperfekti', conj: [['minä olin', 'me olimme'], ['sinä olit', 'te olitte'], ['hän oli', 'he olivat']] },
    { verb: 'syödä', tense: 'Imperfekti', conj: [['minä söin', 'me söimme'], ['sinä söit', 'te söitte'], ['hän söi', 'he söivät']] },
    { verb: 'tehdä', tense: 'Imperfekti', conj: [['minä tein', 'me teimme'], ['sinä teit', 'te teitte'], ['hän teki', 'he tekivät']] },
    { verb: 'mennä', tense: 'Imperfekti', conj: [['minä menin', 'me menimme'], ['sinä menit', 'te menitte'], ['hän meni', 'he menivät']] },
    { verb: 'lukea', tense: 'Imperfekti', conj: [['minä luin', 'me luimme'], ['sinä luit', 'te luitte'], ['hän luki', 'he lukivat']] },
    { verb: 'antaa', tense: 'Imperfekti', conj: [['minä annoin', 'me annoimme'], ['sinä annoit', 'te annoitte'], ['hän antoi', 'he antoivat']] },
    { verb: 'puhua', tense: 'Perfekti', conj: [['minä olen puhunut', 'me olemme puhuneet'], ['sinä olet puhunut', 'te olette puhuneet'], ['hän on puhunut', 'he ovat puhuneet']] },
    { verb: 'tulla', tense: 'Perfekti', conj: [['minä olen tullut', 'me olemme tulleet'], ['sinä olet tullut', 'te olette tulleet'], ['hän on tullut', 'he ovat tulleet']] },
    { verb: 'olla', tense: 'Perfekti', conj: [['minä olen ollut', 'me olemme olleet'], ['sinä olet ollut', 'te olette olleet'], ['hän on ollut', 'he ovat olleet']] },
    { verb: 'syödä', tense: 'Perfekti', conj: [['minä olen syönyt', 'me olemme syöneet'], ['sinä olet syönyt', 'te olette syöneet'], ['hän on syönyt', 'he ovat syöneet']] },
    { verb: 'tehdä', tense: 'Perfekti', conj: [['minä olen tehnyt', 'me olemme tehneet'], ['sinä olet tehnyt', 'te olette tehneet'], ['hän on tehnyt', 'he ovat tehneet']] },
    { verb: 'mennä', tense: 'Perfekti', conj: [['minä olen mennyt', 'me olemme menneet'], ['sinä olet mennyt', 'te olette menneet'], ['hän on mennyt', 'he ovat menneet']] },
    { verb: 'lukea', tense: 'Perfekti', conj: [['minä olen lukenut', 'me olemme lukeneet'], ['sinä olet lukenut', 'te olette lukeneet'], ['hän on lukenut', 'he ovat lukeneet']] },
    { verb: 'antaa', tense: 'Perfekti', conj: [['minä olen antanut', 'me olemme antaneet'], ['sinä olet antanut', 'te olette antaneet'], ['hän on antanut', 'he ovat antaneet']] }
  ]
};
var practiceState = {}; // { containerId: { tense: 'X', verbIdx: 0 } }

function getPracticeTenses(verbs) {
  var tenses = [];
  var seen = {};
  for (var i = 0; i < verbs.length; i++) {
    if (!seen[verbs[i].tense]) {
      seen[verbs[i].tense] = true;
      tenses.push(verbs[i].tense);
    }
  }
  return tenses;
}

function getPracticeVerbsForTense(verbs, tense) {
  var result = [];
  for (var i = 0; i < verbs.length; i++) {
    if (verbs[i].tense === tense) result.push(verbs[i]);
  }
  return result;
}

function renderPractice(containerId, data) {
  var container = document.getElementById(containerId);
  var langId = containerId.replace('-practice', '');
  applyTheme(containerId, data.theme);
  var verbs = practiceVerbs[langId] || [];
  var tenses = getPracticeTenses(verbs);
  var state = practiceState[containerId] || { tense: tenses[0] || '', verbIdx: 0 };
  var tenseVerbs = getPracticeVerbsForTense(verbs, state.tense);
  if (state.verbIdx >= tenseVerbs.length) state.verbIdx = 0;
  var item = tenseVerbs[state.verbIdx];

  var html = renderPageHeader(langId, data, 'practice');

  // Tense toggle buttons
  html += '<div class="btn-group btn-group-sm mb-3 flex-wrap" role="group">';
  for (var t = 0; t < tenses.length; t++) {
    var active = tenses[t] === state.tense ? ' active' : '';
    html += '<button type="button" class="btn btn-outline-secondary' + active + '" onclick="switchPracticeTense(\'' + containerId + '\', \'' + esc(tenses[t]).replace(/'/g, "\\'") + '\')">' + esc(tenses[t]) + '</button>';
  }
  html += '</div>';

  if (tenseVerbs.length > 0) {
    html += '<p class="text-muted">Conjugate each verb in the <strong>' + esc(state.tense) + '</strong>.</p>';

    for (var v = 0; v < tenseVerbs.length; v++) {
      var verb = tenseVerbs[v];
      // Blank practice table
      html += '<div class="mb-4">';
      html += '<table class="table table-bordered table-striped table-sm" style="max-width:50%;">';
      html += '<thead class="table-dark text-center"><tr><th colspan="2">' + esc(verb.verb) + '</th></tr></thead>';
      for (var r = 0; r < verb.conj.length; r++) {
        html += '<tr><td style="height:2rem;"></td><td style="height:2rem;"></td></tr>';
      }
      html += '</table></div>';
    }

    // Show answers button
    html += '<button class="btn btn-sm btn-outline-secondary mt-2" onclick="revealPractice(\'' + containerId + '\')">Show answers</button>';
    html += '<div id="' + containerId + '-answers" class="d-none mt-3">';
    for (var v = 0; v < tenseVerbs.length; v++) {
      var verb = tenseVerbs[v];
      html += '<div class="mb-4">';
      html += '<table class="table table-bordered table-striped table-sm" style="max-width:50%;">';
      html += '<thead class="table-dark text-center"><tr><th colspan="2">' + esc(verb.verb) + ' — Answers</th></tr></thead>';
      for (var r = 0; r < verb.conj.length; r++) {
        html += '<tr><td>' + esc(verb.conj[r][0]) + '</td><td>' + esc(verb.conj[r][1]) + '</td></tr>';
      }
      html += '</table></div>';
    }
    html += '</div>';
  }

  container.innerHTML = html;
}

function switchPracticeTense(containerId, tense) {
  practiceState[containerId] = { tense: tense, verbIdx: 0 };
  var langId = containerId.replace('-practice', '');
  renderPractice(containerId, langDataMap[langId]);
}


function revealPractice(containerId) {
  var el = document.getElementById(containerId + '-answers');
  if (el) el.classList.toggle('d-none');
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
renderPractice('english-practice', englishData);
renderPractice('french-practice', frenchData);
renderPractice('italian-practice', italianData);
renderPractice('spanish-practice', spanishData);
renderPractice('portuguese-practice', portugueseData);
renderPractice('german-practice', germanData);
renderPractice('dutch-practice', dutchData);
renderPractice('danish-practice', danishData);
renderPractice('norwegian-practice', norwegianData);
renderPractice('icelandic-practice', icelandicData);
renderPractice('czech-practice', czechData);
renderPractice('greek-practice', greekData);
renderPractice('finnish-practice', finnishData);
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
renderPronouns('english-pronouns', englishData);
renderPronouns('french-pronouns', frenchData);
renderPronouns('italian-pronouns', italianData);
renderPronouns('spanish-pronouns', spanishData);
renderPronouns('portuguese-pronouns', portugueseData);
renderPronouns('german-pronouns', germanData);
renderPronouns('dutch-pronouns', dutchData);
renderPronouns('danish-pronouns', danishData);
renderPronouns('norwegian-pronouns', norwegianData);
renderPronouns('icelandic-pronouns', icelandicData);
renderPronouns('czech-pronouns', czechData);
renderPronouns('greek-pronouns', greekData);
renderPronouns('finnish-pronouns', finnishData);

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
