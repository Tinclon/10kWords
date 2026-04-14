# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

No build step, test suite, or linter. Static site served directly from `10kWords.html`. Open the file in a browser or use any local HTTP server. Deployed via GitHub Pages at `https://tinclon.github.io/10kWords/10kWords.html`.

## Git

- Never commit automatically. Always wait for explicit user approval before committing.
- Never push automatically. Always wait for explicit user approval before pushing.
- Never amend commits without explicit instruction.
- Never commit directly to the main branch. Always use a feature branch.

## Architecture

Single-page static app with no framework. All rendering is vanilla JS in `10kWords.html`.

- `verbs/<language>.js` — each file exports a single global variable (e.g., `frenchData`, `czechData`) containing all data for that language: theme colors, mood definitions, tense group hierarchy, tense definitions with columns, regular examples, and irregular verb patterns.
- `10kWords.html` — loads all language data files via `<script>` tags, then calls `renderLanguage(containerId, data)` for each. The renderer builds the entire UI from the data: mood toggle buttons, group tabs (Past/Present/Future), tense sub-tabs, column selectors for mobile, conjugation tables, and an info box.
- UI uses Bootstrap 5.3 for layout/tabs and Bootstrap Icons. No other dependencies.

### Data structure per language file

```
{language, title, theme, moods[], groups{moodKey: [{label, tenses[]}]}, tenses{key: {label, description, extra?, columns[{label, regular?, patterns[]}]}}}
```

Each pattern: `{name, description, verbs, example, conjugations[][], dimmed?}`. The `dimmed` flag marks verbs that are regular in that tense.

### Key rendering functions

- `renderLanguage()` — entry point, builds mood toggles + all mood panels
- `renderMoodContent()` — builds group tabs and tense sub-tabs for a mood
- `renderTenseContent()` — builds column selector and conjugation tables for a tense
- `renderPattern()` — builds a single verb pattern table
- `switchLang()` / `switchMood()` / `switchCol()` — UI navigation handlers

## Adding a New Language

1. Create `verbs/<language>.js` following the existing data structure (use any existing file as template)
2. In `10kWords.html`: add a `<script src="verbs/<language>.js">` tag, a sidebar nav link with flag emoji, a `<div id="<language>" class="lang-page d-none">` container, and a `renderLanguage('<language>', <language>Data)` call
