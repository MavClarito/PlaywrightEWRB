import { test, APIRequestContext, expect, Locator, Page, TestInfo } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Used to check if the data table iteration is for execution.
 * @param executionFlag - will skip test if passed value is not set to "Y"
 */
export function skipIfNotExecutable(executionFlag: string): void {
  test.skip(
    String(executionFlag).trim().toUpperCase() !== 'Y',
    `ExecutionFlag is '${executionFlag}'. Test skipped.`
  );
}

/**
 * Generates random data based on type and length.
 *
 * @param dataType - "String" | "Number"
 * @param length - Number of characters/digits
 * @returns Generated value
 */
export function rndValue(dataType: "String" | "Number", length: number):
  string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  switch (dataType) {
    case "String":
      return Array.from({ length }, () =>
        chars.charAt(Math.floor(Math.random() * chars.length))
      ).join("");

    case "Number":
      return Array.from({ length }, () =>
        Math.floor(Math.random() * 10)
      ).join("");

    default:
      throw new Error(`Unsupported data type: ${dataType}`);
  }
}

export function rndIndepotency(charLength: number): string {
  return rndValue("Number", charLength);
}

export async function getBearerToken(
  request: APIRequestContext,
  vEnvi: string,
  vEndPt: string,
  vAccept: string,
  vClientID: string,
  vAPIKey: string,
  vClientSecret: string,
  vPartnerID: string,
  vContentType: string,
  vAcctNum: string,
  vScope: string
): Promise<string> {
  const reqHeaders = {
    accept: vAccept.trim(),
    'client-id': vClientID.trim(),
    'api-key': vAPIKey.trim(),
    'client-secret': vClientSecret.trim(),
    'partner-id': vPartnerID.trim(),
    'Content-Type': vContentType.trim(),
  };

  const requestBody = {
    accountNumber: vAcctNum.trim(),
    scope: vScope.trim(),
  };

  console.log('================ GENERATE BEARER TOKEN ================');
  console.log('Endpoint:', `${vEnvi}${vEndPt}`);
  console.log('Headers:', JSON.stringify(reqHeaders, null, 2));
  console.log('Body:', JSON.stringify(requestBody, null, 2));

  const response = await request.post(`${vEnvi}${vEndPt}`, {
    headers: reqHeaders,
    data: JSON.stringify({
      accountNumber: vAcctNum.trim(),
      scope: vScope.trim(),
    }),
  });

  const responseHeaders = response.headers();

  let responseBody: any;

  try {
    responseBody = await response.json();
  } catch {
    responseBody = await response.text();
  }

  if (!response.ok()) {
    throw new Error(
      `Token request failed. Status: ${response.status()} Response: ${JSON.stringify(responseBody)}`
    );
  }

  const accessToken = responseBody?.accessToken;

  if (!accessToken) {
    throw new Error(
      `access_token not found in response: ${JSON.stringify(responseBody)}`
    );
  }

  console.log('Access Token:', accessToken);

  return accessToken;
}

export function logRequest(apiBaseUrl: any, endpoint: any, headers: any, params: any, body: any) {
  console.log('================ REQUEST ================');
  console.log('Endpoint:', `${apiBaseUrl}${endpoint}`);
  console.log('Headers:', JSON.stringify(headers, null, 2));
  if (params !== null) {
    console.log('params:', JSON.stringify(params, null, 2));
  }
  if (body !== null) {
    console.log('params:', JSON.stringify(body, null, 2));
  }
}

export function logResponse(expectedStatus: any, response: any, responseHeaders: any, responseBody: any) {
  console.log('================ RESPONSE ================');
  console.log('Headers:', JSON.stringify(responseHeaders, null, 2));
  console.log('Body:', JSON.stringify(responseBody, null, 2));
  console.log('Expected Status:', expectedStatus);
  console.log('Received Status:', response);
}

export function logTransaction(txnID: any, txnRef: any) {
  console.log('================ TRANSACTION ================');
  console.log('Stored TxnID:', txnID);
  console.log('Stored TxnRef:', txnRef);
}

/**
 * Used for cleaning up test artifacts generated from previous run
 *
 */
export function clearTestResults(): void {
  const dirsToClean = [
    'test-results',
    'allure-results',
    //'allure-report',
  ];

  for (const dir of dirsToClean) {
    const targetDir = path.join(process.cwd(), dir);

    if (fs.existsSync(targetDir)) {
      for (const item of fs.readdirSync(targetDir)) {
        fs.rmSync(path.join(targetDir, item), {
          recursive: true,
          force: true,
        });
      }
    }

    console.log(`Cleared contents of: ${targetDir}`);
  }
}

/**
 * Used for asserting visibility of WebElements in the loaded page(s).
 * @param page - retain page unless passing an new tab/window
 * @param locator - WebElement
 * @param shouldBeVisible - The parameter accepts a boolean value (`true` or `false`). Use `true` to validate that an element exists, and `false` to validate that it does not exist
 * @param expectedResult - "Provide message on the validation"
 * @param testInfo - retain, no change needed
 */
export async function assertVisibility(page: Page, locator: Locator, shouldBeVisible: boolean, expectedResult: string, testInfo: TestInfo) {
  const timestamp = new Date()
    .toISOString()
    .replace(/[:.]/g, '-');

  const safeName = expectedResult.replace(/[^a-zA-Z0-9]/g, '_');

  try {
    console.log(`VERIFY: ${expectedResult}`);

    if (shouldBeVisible) {
      await expect.soft(locator).toBeVisible();
    } else {
      await expect.soft(locator).not.toBeVisible();
    }

    const screenshotPath = `screenshots/PASS_${safeName}_${timestamp}.png`;

    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    await testInfo.attach(`PASS - ${expectedResult}`, {
      path: screenshotPath,
      contentType: 'image/png'
    });

    console.log(`PASS: ${expectedResult}`);

  } catch (error) {

    const screenshotPath = `screenshots/FAIL_${safeName}_${timestamp}.png`;

    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    await testInfo.attach(`FAIL - ${expectedResult}`, {
      path: screenshotPath,
      contentType: 'image/png'
    });

    console.log(`FAIL: ${expectedResult}`);

    throw error;
  }
}

/**
 * Used to assert equality of 2 strings
 * @param page - retain page unless passing an new tab/window
 * @param actualValue - actual value got from runtime(test execution)
 * @param expectedValue - expected value got from runtime(test execution)
 * @param expectedResult - "Provide message on the validation"
 * @param testInfo - retain, no change needed
 */
export async function assertTextEquals(page: Page, actualValue: any, expectedValue: any, expectedResult: any) {
  try {
    console.log(`VERIFY: ${expectedResult}`);
    await expect.soft(actualValue).toBe(expectedValue);

    await page.screenshot({
      path: `screenshots/PASS_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`PASS: ${expectedResult}`);

  } catch (error) {

    await page.screenshot({
      path: `screenshots/FAIL_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`FAIL: ${expectedResult}`);
    console.log(`Expected: ${expectedValue}`);
    console.log(`Actual: ${actualValue}`);

    throw error;
  }
}

/**
 * Used to assert non0equality of 2 strings
 * @param page - retain page unless passing an new tab/window
 * @param actualValue - actual value got from runtime(test execution)
 * @param expectedValue - expected value got from runtime(test execution)
 * @param expectedResult - "Provide message on the validation"
 * @param testInfo - retain, no change needed
 */
export async function assertTextNotEquals(page: Page, actualValue: any, expectedValue: any, expectedResult: any) {
  try {
    console.log(`VERIFY: ${expectedResult}`);
    await expect.soft(actualValue).not.toBe(expectedValue);

    await page.screenshot({
      path: `screenshots/PASS_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`PASS: ${expectedResult}`);

  } catch (error) {

    await page.screenshot({
      path: `screenshots/FAIL_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`FAIL: ${expectedResult}`);
    console.log(`Expected: ${expectedValue}`);
    console.log(`Actual: ${actualValue}`);

    throw error;
  }
}

/**
 * Used for asserting visibility of WebElements in the loaded page(s).
 * @param page - retain page unless passing an new tab/window
 * @param locator - WebElement
 * @param shouldBeEnabled - The parameter accepts a boolean value (`true` or `false`). Use `true` to validate that an element is enabled, and `false` to validate that it is disabled
 * @param expectedResult - "Provide message on the validation"
 * @param testInfo - retain, no change needed
 */
export async function assertEnabled(page: Page, locator: Locator, shouldBeEnabled: boolean, expectedResult: string) {
  try {
    console.log(`VERIFY: ${expectedResult}`);

    if (shouldBeEnabled) {
      await expect.soft(locator).toBeEnabled();
    } else {
      await expect.soft(locator).toBeDisabled();
    }

    await page.screenshot({
      path: `screenshots/PASS_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`PASS: ${expectedResult}`);

  } catch (error) {

    await page.screenshot({
      path: `screenshots/FAIL_${expectedResult}.png`,
      fullPage: true
    });

    console.log(`FAIL: ${expectedResult}`);

    throw error;
  }
}