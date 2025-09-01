import { Page, Locator, expect} from '@playwright/test';
import { addAmountAndAssertNoShares } from '../utils/helpers';

export class StockTradePage {
  constructor(private page: Page) {  }


  getElementById(id: string) {
    return this.page.getByTestId(id);
  }


  // async assertPricePerShare(locator: string): Promise<void>  {
  //   const numberLocator = this.page.locator(locator);
  //   await assertNumericValue(numberLocator);
  // }

  // async inputTradingAmount(): Promise<void> {
  //   await this.page.getByTestId('trading-input-amount-input').fill('390');
  //   await this.assertPricePerShare(universeScreen.numberOfShares);
  // }

  async selectChartTimeRange(dateRange: string, text: string): Promise<void> {
    await expect(this.page.getByRole('button', {name: dateRange})).toHaveText(dateRange)
    await this.page.getByRole('button', {name: dateRange}).click()
    await expect(this.page.getByText(text)).toBeVisible()
  }

  async inputAmountAssertShare() {
    // const elementPrice = 'span.text-title-xxl'
    await addAmountAndAssertNoShares(this.page)
  }

}