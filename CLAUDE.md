# Claude Instructions

## Git

- Never commit automatically. Always wait for explicit user approval before committing.
- Never push automatically. Always wait for explicit user approval before pushing.
- Never amend commits without explicit instruction.
- Never commit directly to the main branch. Always use a feature branch.

## Project Structure

- `10kWords.html` — main page (static HTML + JS renderer)
- `verbs/` — language data files (one `.js` file per language)
- Each language file is a self-contained JS variable with verb conjugation data, theme colors, mood/tense structure, and group definitions.

## Adding a New Language

1. Create `verbs/<language>.js` following the existing data structure
2. Add a `<script src>` tag, sidebar link, container div, and `renderLanguage()` call in `10kWords.html`
