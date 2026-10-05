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

To use the shared app, end users do not need their own GitHub account or repository. In **Settings → Excel in Google Drive**, enter the OAuth Client ID and the full URL of the Excel workbook in Drive, then choose **Link to Google Drive** and authorize the Google account that can edit that file. The Client ID and file URL are saved in the browser; the file association is kept separately for each Google account on that device. Configure the connection once on each additional device.

The 💾 button continues to save/export an Excel workbook on the computer. The ☁ button loads or links the configured Drive workbook; the ☁💾 button explicitly saves to that Excel file. Loading an existing file does not replace local data without asking when both contain data. The app checks for changes on both sides and asks which version to keep if both changed.

The **How to?** guide in the app explains the Google Cloud setup: enable Google Drive API, configure an External OAuth consent screen, and create a Web OAuth client with the published JavaScript origin. Add the `https://www.googleapis.com/auth/drive` scope under OAuth data access. This scope grants broad Drive access, so the app should only be shared with trusted users and Google verification may be required. The app only reads or updates the explicitly linked workbook. Link an Excel `.xlsx`/`.xls` file, not a native Google Sheet. The Google Sheets API, Picker API, and API key are not used. Never publish an OAuth Client Secret.

If an OAuth consent screen is left in Testing, add the relevant Google accounts as test users; test authorizations may expire after seven days.