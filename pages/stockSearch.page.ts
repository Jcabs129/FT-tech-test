import { Page } from '@playwright/test';
import universeScreen from '../screens/locators';
import { STOCK_DATA } from '../testData/stockData';

export class StockSearchPage {
  constructor(private page: Page) {  }

  getElementById(id: string) {
    return this.page.getByTestId(id);
  }

  async searchForStock(): Promise<void> {
    this.getElementById('search-trigger-keyboard-shortcut').click();
    const searchInput = this.page.locator(universeScreen.searchField);

    // Type into the input
    await searchInput.fill(STOCK_DATA.PALANTIR.name);
    await this.page.getByText(STOCK_DATA.PALANTIR.name).click();
  }

}