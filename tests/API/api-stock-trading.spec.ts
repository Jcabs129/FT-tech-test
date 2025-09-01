import test, { expect } from "@playwright/test";
import { apiRequest } from '../../utils/apiUtils.ts'

test.describe('API Testing - CRUD', () => {

  test('To get all the booking details', { tag: '@api' },
     async ({ request }) => {
      const response = await apiRequest(request, 'POST', 'US', 'PLTR');
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
  })

});