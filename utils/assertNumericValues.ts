import { expect, Locator } from '@playwright/test';

/**
 * Assert that the locator contains a valid numeric value.
 * 
 * @param locator - The Playwright Locator pointing to the element
 * @param options - Optional checks (like min/max value)
 * @returns The parsed number value
 */
export async function assertNumericValue(
  locator: Locator,
): Promise<number> {
  const text = await locator.textContent();
  expect(text).not.toBeNull();

  const value = Number(text!.trim());

  // Assert it's a valid number
  expect(!isNaN(value)).toBeTruthy();

  return value
}
