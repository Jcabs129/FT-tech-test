import { Page, expect} from '@playwright/test';
import { assertNumericValue } from '../utils/assertNumericValues';

export async function handleCookiePopUp(
  page: Page,
  btnName: string
): Promise<void> {
  const cookieBanner = page.locator("#onetrust-reject-all-handler");

  while (await cookieBanner.isVisible()) {
    try {
      await expect(cookieBanner).toHaveText(btnName);
      await page.getByRole("button", { name: btnName }).click();
      await expect(cookieBanner).toBeHidden();
    } catch (err) {
      console.warn("Failed to handle cookie popup:", err);
      break; // avoid infinite loop if it keeps failing
    }
  }
}

export async function addAmountAndAssertNoShares(
  page: Page,
): Promise<void> {
    const noOfSharesLocator = 'div.text-text-primary.text-body-md.font-mono'
    const numberLocator = page.locator(noOfSharesLocator);

    await page.getByTestId('trading-input-amount-input').fill('390');
    await assertNumericValue(numberLocator);
}