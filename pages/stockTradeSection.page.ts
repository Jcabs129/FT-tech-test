import { Page, Locator, expect} from '@playwright/test';
import { addAmountAndAssertNoShares } from '../utils/helpers';

export class StockTradePage {
  constructor(private page: Page) {}

  getElementById(id: string) {
    return this.page.getByTestId(id);
  }

  async selectChartTimeRange(dateRange: string, text: string): Promise<void> {
    await expect(this.page.getByRole('button', {name: dateRange})).toHaveText(dateRange)
    await this.page.getByRole('button', {name: dateRange}).click()
    await expect(this.page.getByText(text)).toBeVisible()
  }

  async inputAmountAssertShare() {
    await addAmountAndAssertNoShares(this.page)
  }

}