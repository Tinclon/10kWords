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

Single-page static app with no framework. All rendering is vanilla JS.

- `verbs/<language>.js` — each file exports a single global variable (e.g., `frenchData`, `czechData`) containing all data for that language: theme colors, mood definitions, tense group hierarchy, tense definitions with columns, regular examples, and irregular verb patterns.
- `10kWords.js` — all application logic: rendering functions, navigation handlers, verb search, and iOS safe area detection.
- `10kWords.html` — loads Bootstrap CSS/JS, language data files, and `10kWords.js`. Contains the static HTML shell (sidebar nav, language page containers) and all CSS styles.
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
- `buildVerbIndex()` — builds a lookup map from verb names to their pattern locations across all tenses
- `searchVerb()` / `renderSearchResults()` / `clearVerbSearch()` / `resetVerbSearch()` — verb search functionality
- `getActiveMoodKey()` / `getActiveTenseKey()` — helpers to read current UI state

## Adding a New Language

1. Create `verbs/<language>.js` following the existing data structure (use any existing file as template)
2. In `10kWords.html`: add a `<script src="verbs/<language>.js">` tag, a sidebar nav link with flag emoji, and a `<div id="<language>" class="lang-page d-none">` container
3. In `10kWords.js`: add a `renderLanguage('<language>', <language>Data)` call in the init section
