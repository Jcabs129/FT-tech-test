## FT Tech Test

Small Playwright test suite covering UI and API flows for Freetrade web.

### Table of Contents
- [Stack](#stack)
- [Project Structure](#project-structure)
- [CLI Usage](#cli-usage)
- [Configuration](#configuration)
- [Conventions](#conventions)
- [Simple GitHub Workflow](#simple-github-workflow)
- [Notes](#notes)

### Stack
- **Runtime**: Node.js
- **Tests**: Playwright Test (`@playwright/test`)
- **language**: typescript

### Project Structure
```
FT-tech-test/
  fixtures/                 # Test fixtures (e.g., page object wiring)
  pages/                    # Page Object Model (POM) classes
  screens/                  # Centralised locators/selectors
  tests/
    API/                    # API test specs
    UI/                     # UI test specs
  testData/                 # Static test data
  utils/                    # Helpers (HTTP client, assertions, utils)
  playwright.config.ts      # Playwright configuration
  package.json              # Scripts and dev deps
```

Key POM files:
- `pages/stockNavigation.page.ts`
- `pages/stockSearch.page.ts`
- `pages/stockTradeSection.page.ts`

Utilities:
- `utils/apiRequest.ts` (HTTP requests)
- `utils/assertNumericValues.ts` (numeric comparisons)
- `utils/helpers.ts` (misc helpers)

### CLI Usage
- **Run all tests (Chromium, list reporter):**
```bash
npm run test
```

- **Run API tests only (tagged via grep):**
```bash
npx playwright test --project=api
```

- **Run UI tests only:**
```bash
npx playwright test --project=ui
```

### Configuration Highlights
- Base URL: `https://web.freetrade.io`
- Tracing on first retry, screenshots/videos retained on failure
- TestID attribute: `ft-id`
- Projects: `api` (tests/API), `ui` (tests/UI), and `chromium`

### Conventions
- **Page Objects** in `pages/` encapsulate navigation and actions.
- **Locators** centralised in `screens/locators.ts` to simplify maintenance.
- **Test data** lives in `testData/` for readability and reuse.
- **Tags/grep**: API suite is runnable via the dedicated script; UI uses the UI project filter.

### Simple GitHub Workflow
1. Create a feature branch from `main`.
2. Commit with clear messages (e.g., chore/test/feat/fix prefixes).
3. Open a Pull Request; ensure Playwright tests pass locally first.
4. CI suggestion (optional):
   - Run `npm ci`.
   - Cache Playwright browsers.
   - Execute `npm test` and upload the Playwright HTML report as an artifact.

Example GitHub Actions (outlined steps):
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
      - uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report
```

### Notes
- UI and API suites can be evolved independently via the `projects` in `playwright.config.ts`.


