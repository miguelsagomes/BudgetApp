# BudgetApp

Personal budgeting app, published as a static site with GitHub Pages.

## Privacy and backups

- `index.html` and the PWA support files are the public application code.
- Excel workbooks, reports, and personal notes are excluded by `.gitignore`.
- Google Drive stores each user's own workbook; the public repository must never contain workbook data or Google credentials.
- Keep a separate offline copy of this repository. GitHub is a publishing and version-control location, not the only backup.

## Local preview

Open `index.html` in a browser to use the existing local Excel import/export flow. Google Drive OAuth and the installable PWA require the published HTTPS origin.

## GitHub Pages

In the repository, enable Pages from the `main` branch and the root folder. The application URL is `https://miguelsagomes.github.io/BudgetApp/`.

The Google OAuth client must authorize that HTTPS origin. The Google Picker API key must be restricted to the published origin and to the Picker API.