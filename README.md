# BudgetApp

Personal budgeting app, published as a static site with GitHub Pages.

## Privacy and backups

- `index.html` and the PWA support files are the public application code.
- Excel workbooks, reports, and personal notes are excluded by `.gitignore`.
- Google Drive stores each user's own workbook; the public repository must never contain workbook data or an OAuth Client Secret.
- The OAuth Client ID is visible to the browser; do not add an OAuth Client Secret to this static app.
- Keep a separate offline copy of this repository. GitHub is a publishing and version-control location, not the only backup.

## Local preview

Open `index.html` in a browser to use the existing local Excel import/export flow. Google Drive OAuth and the installable PWA require the published HTTPS origin.

## GitHub Pages

In the repository, enable Pages from the `main` branch and the root folder. The application URL is `https://miguelsagomes.github.io/BudgetApp/`.

The Google OAuth client must authorize that HTTPS origin.

## Google Drive setup

To use the shared app, end users do not need their own GitHub account or repository. In **Settings → Google Sheets**, enter the OAuth Client ID and the full URL of the Google Sheet, then choose **Link to Google Drive** and authorize the Google account that can edit that sheet. The Client ID and sheet URL are saved in the browser; the sheet association is kept separately for each Google account on that device. Configure the connection once on each additional device.

The 💾 button continues to save/export an Excel workbook on the computer. The ☁ button loads or links the configured Google Sheet; the ☁💾 button explicitly saves to that sheet. Loading an existing sheet does not replace local data without asking when both contain data. The app checks for changes on both sides and asks which version to keep if both changed. Unrelated sheets in the same spreadsheet are left untouched.

The **How to?** guide in the app explains the Google Cloud setup: enable Google Sheets API, configure an External OAuth consent screen, and create a Web OAuth client with the published JavaScript origin. Add the `https://www.googleapis.com/auth/spreadsheets` scope under OAuth data access. A Picker API key, Google Picker API, and OAuth Client Secret are not used. Never publish an OAuth Client Secret.

If an OAuth consent screen is left in Testing, add the relevant Google accounts as test users; test authorizations may expire after seven days. The Sheets scope grants access to Google Sheets in the authorized account and can require Google's verification before the app is shared more broadly.