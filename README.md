# BudgetApp

Personal budgeting app, published as a static site with GitHub Pages.

## Privacy and backups

- `index.html` and the PWA support files are the public application code.
- Excel workbooks, reports, and personal notes are excluded by `.gitignore`.
- Google Drive stores each user's own workbook; the public repository must never contain workbook data or an OAuth Client Secret.
- The OAuth Client ID and restricted Picker API key are visible to the browser. Restrict the key to the app's website and the Google Picker API.
- Keep a separate offline copy of this repository. GitHub is a publishing and version-control location, not the only backup.

## Local preview

Open `index.html` in a browser to use the existing local Excel import/export flow. Google Drive OAuth and the installable PWA require the published HTTPS origin.

## GitHub Pages

In the repository, enable Pages from the `main` branch and the root folder. The application URL is `https://miguelsagomes.github.io/BudgetApp/`.

The Google OAuth client must authorize that HTTPS origin. The Google Picker API key must be restricted to the published origin and to the Picker API.

## Google Drive setup

To use the shared app, end users do not need their own GitHub account or repository. In **Settings → Google Drive**, enter the OAuth Client ID and Google Picker API key, save them, then choose **Link to Google Drive** and authorize the Google account that owns the workbook. The two values are saved in that browser on that device; configure them once on each additional device. Each Google account uses its own Drive file.

The **How to?** guide in the app explains the Google Cloud setup: enable Google Drive API and Google Picker API in one project, create a Web OAuth client with the published JavaScript origin, and create a Picker API key restricted to the app's website and the Picker API. Never enter or publish the OAuth Client Secret. Google Drive sync currently requires an Excel `.xlsx`/`.xls` file; native Google Sheets are not supported.

If an OAuth consent screen is left in Testing, add the relevant Google accounts as test users; test authorizations may expire after seven days. Sharing an OAuth app more broadly may require publishing it and completing Google's verification.