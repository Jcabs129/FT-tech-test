import { Page, expect} from '@playwright/test';
import { assertNumericValue } from '../utils/assertNumericValues';
import { STOCK_DATA } from '../testData/stockData';

export class StockNavigationPage {
  constructor(private page: Page) {  }

    getElementById(id: string) {
      return this.page.getByTestId(id);
    }

  async navigateToUniversePage(name: string): Promise<void> {
    await this.page.goto(STOCK_DATA.TESLA.url);
    await expect(this.page).toHaveURL(STOCK_DATA.TESLA.url);
    const instrumentName = this.page.getByTestId('instrument-name-text');
    const text = await instrumentName.innerText();
    expect(text).toBe(STOCK_DATA.TESLA.name);

  }

  async assertPricePerShare(): Promise<void>  {
    const elementPrice = 'span.text-title-xxl';
    const numberLocator = this.page.locator(elementPrice);
    await assertNumericValue(numberLocator);
  }

}