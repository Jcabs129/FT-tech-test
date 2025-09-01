import { Page, Locator, expect} from '@playwright/test';
import universeScreen from '../screens/locators';


export class StockSearchPage {
  constructor(private page: Page) {  }


  getElementById(id: string) {
    return this.page.getByTestId(id);
  }

  async searchForStock(): Promise<void> {
    this.getElementById('search-trigger-keyboard-shortcut').click();
    const searchInput = this.page.locator(universeScreen.searchField);

    // Type into the input
    await searchInput.fill('Palantir');
    await this.page.getByText('Palantir').click();
  }

}