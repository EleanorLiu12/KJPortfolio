# KJPortfolio

Personal portfolio website for Kejun Liu, designed for GitHub Pages.

## What is included

- `index.html`: static one-page portfolio.
- `styles.css`: responsive visual design.
- `script.js`: public GitHub profile and repo refresh.
- `docs/design.md`: design doc and implementation rationale.
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow.

## Local preview

Open `index.html` in a browser. No package install or build step is required.

## Customize

Update the page content in `index.html`, especially:

- Hero copy and focus areas.
- Featured project cards.
- Contact links.
- Resume or LinkedIn links when available.

Update `GITHUB_USERNAME` in `script.js` only if the GitHub username changes.

## Deploy

Push changes to `main`. The GitHub Actions workflow deploys the repository root to GitHub Pages.

For the first deployment, open the repository settings in GitHub, go to **Pages**, and set the source to **GitHub Actions**. After the workflow completes, the site should be available at:

https://eleanorliu12.github.io/KJPortfolio/
