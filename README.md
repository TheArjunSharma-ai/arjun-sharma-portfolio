# Arjun Sharma - Angular Portfolio

A responsive Angular portfolio for Arjun Sharma, Full Stack Developer / .NET Engineer. Includes public projects, professional experience, education, categorized skills, services, and contact links.

## Run locally

```bash
npm install
npm start
```

Open the local URL printed by Angular CLI. To create a production build, run:

```bash
npm run build
```

## Content and maintenance

- Structured profile, public projects, experience, skill groups, and services live in `src/app/app.ts`; section copy lives in `src/app/app.html`.
- Content is based on `Arjun_Sharma_Portfolio_Details.md` and `public/Arjun_Sharma.pdf`. The supplied resume resolves the employer, employment-date, and education details. The GitHub profile and public demo URLs come from the portfolio brief.
- The user's approved email, phone, and LinkedIn are visible. Email and phone links open the visitor's own apps; there is no contact form, message storage, or backend.
- `public/Arjun_Sharma.pdf` is the downloadable resume. Replace that file when updating the resume; review its contact information before publishing.
- Projects link only to the supplied public demos and NuGet package. Illustrations are conceptual, not screenshots or a scannable QR code. Unapproved internal project screenshots, source code, and project details are intentionally excluded.
- Angular and Blazor are labeled as awareness, React.js as working knowledge, and Azure/CI/CD as prior exposure. RabbitMQ hands-on experience and unsupported metrics are not claimed.
- Page metadata lives in `src/index.html`; branding assets live in `public/`.
- The header stays visible while scrolling. Header height and section-anchor offsets share `--header-height` in `src/styles.css`; the mobile menu scrolls on short screens.
- Before hosting, configure the final public URL and replace the relative SVG social-preview metadata with an absolute hosted PNG/JPEG URL for broad social-platform support.

## Verification

```bash
npm test -- --watch=false
npm run build
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` tests, builds, and deploys the
Angular site using GitHub's official Pages actions.

1. Push the project, including `package-lock.json`, to your GitHub repository.
2. In **Settings > Pages > Build and deployment**, select **GitHub Actions** as the source.
3. Push the updated workflow and project to `main` or `master`. Both branches trigger deployment; they do not need to match the repository's default branch.
4. Under **Settings > Environments > github-pages**, if deployment branch restrictions are enabled, allow the branch you intend to deploy.
5. After deployment, open the URL shown in the `github-pages` environment.

The workflow uses Node.js 24, runs the Angular tests, and uploads only
`dist/portfolio/browser`, including the public resume and branding assets.
It reads the Pages base path automatically, so assets and resume downloads work
on both repository sites (`/<repository>/`) and user sites (`/`), including
configured custom domains. No personal access token or deployment secret is needed.
The earlier default-branch-only condition has been removed because it silently
skipped builds pushed to `master` when the default branch was `main`. Either
allowed branch now deploys, so use one branch consistently for releases.
If your deployment branch has another name, update `push.branches`.
Manual dispatch is also supported once the workflow exists on the default branch.

For this repository, the expected URL is
<https://thearjunsharma-ai.github.io/arjun-sharma-portfolio/>.
Push a new commit containing the corrected workflow; re-running an older skipped
run still uses the old workflow and will not apply this fix.

The site currently uses in-page section links, not routed pages, so no SPA
404 fallback is needed. Review the resume and public contact details before
enabling deployment.

### Troubleshooting: Get Pages site failed / Not Found

This error from `actions/configure-pages` means the Pages site is not configured
or is inaccessible to the workflow. With repository administrator access:

1. Open <https://github.com/TheArjunSharma-ai/arjun-sharma-portfolio/settings/pages>.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Return to the failed Actions run and choose **Re-run failed jobs**.

This settings-only fix does not require a new commit. If Pages settings are
unavailable, ask a repository administrator to enable Pages and check applicable
organization policies.

Do not add `enablement: true` alone: the configure-pages action requires a token
other than the default `GITHUB_TOKEN` for automatic enablement. Manual setup
avoids creating or storing an additional privileged deployment secret.

The app remains Angular as originally requested; the older Razor Pages preference in the content brief does not change the implementation stack.
