# KJPortfolio Design Doc

Last updated: 2026-07-19

## Summary

KJPortfolio is a lightweight personal portfolio for Kejun Liu, hosted from GitHub Pages at `https://eleanorliu12.github.io/KJPortfolio/`.

The site is a static HTML/CSS/JavaScript implementation with no build step. It is designed to be easy to publish, easy to edit, and polished enough to use as a recruiting profile.

## Research

I reviewed public portfolio inspiration from:

- Awwwards portfolio gallery: strong typography, visual hierarchy, and project-first browsing.
- One Page Love portfolio and personal categories: concise one-page flows, clear section anchors, and maintainable static layouts.
- Brittany Chiang: engineer-focused structure with sticky identity, readable sections, accessible navigation, and project cards.
- Adham Dannaway: memorable personal identity through a strong first-viewport visual.

## Chosen Prototype Direction

The selected direction is an editorial engineer profile: compact identity panel, clear proof points, strong project cards, and a public GitHub activity section.

Why this direction fits:

- The GitHub profile already exposes useful public facts: `Eleanor`, `26' CS & DS @ UW-Madison`, public repos, and hireable status.
- A static site keeps hosting simple and avoids dependency drift.
- A clean, restrained design works better for an early-career software/data profile than a heavy animation or agency-style portfolio.
- The design can mature as resume details, internships, projects, and writing are added.

## Goals

- Present Kejun as a Computer Science and Data Science student at UW-Madison.
- Highlight public GitHub work without overclaiming ownership of forks.
- Provide a fast, accessible, mobile-friendly one-page portfolio.
- Deploy automatically through GitHub Pages.
- Keep content updates simple for non-framework editing.

## Non-Goals

- No private employment details or internal project information.
- No JavaScript framework, package manager, or build tool.
- No external analytics.
- No template copy-paste from an inspiration site.

## Information Architecture

The page has five primary sections:

1. Hero: name, role, short positioning statement, GitHub CTA, and avatar.
2. About: brief personal introduction and public profile facts.
3. Focus: skill areas spanning software engineering, data, automation, and product thinking.
4. Featured Work: curated cards that can be edited manually.
5. GitHub Activity: public repositories fetched client-side from the GitHub API with static fallback content.

## Visual System

- Tone: calm, editorial, and technical.
- Layout: max-width content shell, sticky top navigation, two-column desktop hero, single-column mobile flow.
- Color: neutral base with multiple accents: teal, coral, blue, and gold. This avoids a one-note palette.
- Typography: system font stack for performance and native rendering.
- Cards: 8px radius, subtle borders, no nested cards.
- Imagery: GitHub avatar is the primary visual asset. If it cannot load, the layout remains usable.

## Technical Design

Files:

- `index.html`: semantic page markup and static content.
- `styles.css`: responsive layout, visual system, and accessibility states.
- `script.js`: year rendering, GitHub API fetch, repository card rendering, and graceful fallback.
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow.
- `.nojekyll`: disables Jekyll processing for predictable static hosting.
- `README.md`: local preview, customization, and deployment instructions.

Runtime behavior:

- The page works by opening `index.html` directly.
- On a normal hosted page, `script.js` fetches public repositories from `https://api.github.com/users/EleanorLiu12/repos`.
- If the API is unavailable or rate-limited, fallback repository cards remain visible.

## Accessibility

- Semantic landmarks and sections.
- Skip link for keyboard users.
- Visible focus styles.
- Descriptive link labels.
- Avatar alt text.
- `prefers-reduced-motion` support.
- Color contrast selected for readable text on light surfaces.

## Performance

- No framework or build output.
- No blocking external CSS or font downloads.
- Avatar and GitHub API are the only external runtime requests.
- Static fallback keeps the page useful without network calls.

## Deployment

GitHub Pages deploys through Actions:

1. Push to `main`.
2. The workflow uploads the repository root as the Pages artifact.
3. GitHub Pages publishes the site.

For the first deployment, the repository may need GitHub Pages configured to use "GitHub Actions" as the source in repository settings.

## Future Improvements

- Add a resume PDF and link it from the hero.
- Add verified project screenshots when available.
- Add internship or work experience after content is confirmed.
- Add a custom domain if desired.
- Add richer project case studies as separate pages.
