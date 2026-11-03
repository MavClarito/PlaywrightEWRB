import { test, expect, Page } from '@playwright/test';

import { R25_LoginPage } from '../pages/R25/R25_LoginPage'

import * as XLutil from '../utils/excelUtil';
import * as util from '../utils/common';
import env from '../config/envi.constants.json';


const testBed = env.UniCoreTestData;
const url = env.R25_Dev2;
const testData: any[] = XLutil.getExcelData(testBed, 'ADAUNI');



test.describe.serial('Accounts and Deposit UNI Core', { tag: ['@UniCore', '@Regression', '@ADAUNI'] }, () => {

    // ==========================================
    // TEST CASES
    // ==========================================

    test('Verify Change Product with product in the Allowed list', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(1000);
        await LoginPage.clickUserMenu();
        await LoginPage.logOut();
       
    });

    test('Verify change of other parties through Update Customer', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that the user can earmarked an account using the EFMO set locked funds', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that user can manually locked funds via EFMO', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that locked amount is included in the ledger balance', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that locked amount is excluded from  available/withdrawable balance', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that the User can change the Company ID of an existing Account (Maker)', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that the User can authorise the change of Company ID (Checker)', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that User can access the "ACCOUNTS-UPDATE-ACCOUNT" in New Activity', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that the system prevent to deduct the charges if Garnishment/ Blocked Funds is applied', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that PBA provides an account-level restrictions menu for EFMO posting restriction setup.', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that PBA EFMO posting restriction removal options.', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify change of customer through "Change Customer" Activity', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that reactivation of Dormant Account will be manually performed by the user', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify add customer through "Change Customer" Activity', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify remove customer through "Change Customer" Activity', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify error when closing accounts linked to Loan with outstanding balance in ATM Savings - Teacher (6200)', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    test('Verify that when an Unclaimed Account have still debit balance, the money will be credited to internal account PHP1500300015943', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

    //Mav (11/3/2026)
    test('Verify that account that have 0 balance can be manually Closed (152609)', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[6].IN_Username, testData[6].IN_Password);
        await page.waitForTimeout(5000);
        //await LoginPage.clickUserMenu();
        await LoginPage.fillerCMD();
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });
    
    test('Verify that account that have balance cant be manually Closed (152610)', async ({ page }, testInfo) => {

        const LoginPage = new R25_LoginPage(page);
        await LoginPage.navigate(url);
        await LoginPage.login(testData[7].IN_Username, testData[7].IN_Password);
        await LoginPage.clickUserMenu();
        await LoginPage.fillerCMD();
        await LoginPage.waitForPageLoad();
        await page.waitForTimeout(3000);
        await LoginPage.logOut();

    });

});

