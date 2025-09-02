import { test,  expect } from "@playwright/test";
import { apiRequest } from '../../utils/apiUtils.ts'


test.describe('API Testing - CRUD', () => {

  test('verify 200 success for palantir', { tag: '@api' },
     async ({ request }) => {
      const response = await apiRequest(request, 'POST', 'US', 'PLTR');
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);
  })

 
    test('verify 200 success for multiple stocks', { tag: '@api' }, 
      async ({ request }) => {
      const stocks = ['GOOGL', 'PLTR', 'META', 'TSLA'];

      for(const stock of stocks) {
      const response = await apiRequest(request, 'POST', 'US', stock);
      expect(response.status()).toBe(200);
    }
  });

});

