import { Page, Locator, expect} from '@playwright/test';
import { assertNumericValue } from '../utils/assertNumericValues';

export class StockNavigationPage {
  constructor(private page: Page) {  }

    getElementById(id: string) {
      return this.page.getByTestId(id);
    }

  async navigateToUniversePage(name: string): Promise<void> {
    await this.page.goto('/universe/US/TSLA');
    await expect(this.page).toHaveURL('/universe/US/TSLA');
    const instrumentName = this.page.getByTestId('instrument-name-text');
    const text = await instrumentName.innerText();
    expect(text).toBe('Tesla');

  }

  async assertPricePerShare(): Promise<void>  {
    const elementPrice = 'span.text-title-xxl';
    const numberLocator = this.page.locator(elementPrice);

    await assertNumericValue(numberLocator);
  }

}