import { APIRequestContext, APIResponse, expect } from '@playwright/test';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


/**
 * Dynamic API request function
 */
export async function apiRequest(
  request: APIRequestContext,
  method: HttpMethod,
  locale: string,
  stockTicker: string
): Promise<APIResponse> {
  const endpoint = `/universe/${locale}/${stockTicker}`;

  let response: APIResponse;

  switch (method) {
    case 'GET':
      response = await request.get(endpoint);
      break;
    case 'POST':
      response = await request.post(endpoint);
      break;
    case 'PUT':
      response = await request.put(endpoint);
      break;
    case 'DELETE':
      response = await request.delete(endpoint);
      break;
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }

  expect(response.status(), `Failed ${method} ${endpoint}`).toBe(200);

  return response;
}