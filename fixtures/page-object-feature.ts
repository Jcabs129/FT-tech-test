import { test as base } from '@playwright/test';
import { StockNavigationPage } from '../pages/stockNavigation.page';
import { StockSearchPage } from '../pages/stockSearch.page';
import { StockTradePage } from '../pages/stockTradeSection.page';

export type FrameworkFixtures = {
  stockNavigationPage: StockNavigationPage;
  stockSearchPage: StockSearchPage;
  stockTradePage: StockTradePage;
}

export const test = base.extend<{
  stockNavigationPage: StockNavigationPage;
  stockSearchPage: StockSearchPage;
  stockTradePage: StockTradePage;
}>({

  stockNavigationPage: async ({ page }, use) => {
    await use(new StockNavigationPage(page));
  },
  stockSearchPage: async ({ page }, use) => {
    await use(new StockSearchPage(page));
  },
  stockTradePage: async ({ page }, use) => {
    await use(new StockTradePage(page));
  },
});

export { expect } from '@playwright/test';