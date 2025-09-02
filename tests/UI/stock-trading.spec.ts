import { test, } from '../../fixtures/page-object-feature';
import { handleCookiePopUp } from "../../utils/helpers";
import { STOCK_DATA } from '../../testData/stockData';

test.describe('ui tests', () => {
  test.beforeEach(async ({ stockNavigationPage, page  }) => {
    await stockNavigationPage.navigateToUniversePage(STOCK_DATA.TESLA.name);
    await handleCookiePopUp( page, 'Reject all');
    await stockNavigationPage.assertPricePerShare();
  });

  test('Ensure users are able to search for a stock', async ({ stockSearchPage }) => {
    await stockSearchPage.searchForStock();
  });

  test('Input price and verify', async ({ stockTradePage }) => {
    await stockTradePage.inputAmountAssertShare();
  });

  test('Ensure selecting different time span on the chart works as expected', async ({ stockTradePage }) => {
    await stockTradePage.selectChartTimeRange('1W', ' in the last 7 days');
    await stockTradePage.selectChartTimeRange('5Y', ' in the last 5 years');
  });

})
