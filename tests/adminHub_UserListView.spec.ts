import { test, expect, Page } from '@playwright/test';
import { SSO3_LoginPage } from '../pages/AdminHub/SSO3_LoginPage';
import { SSO3_DashboardPage } from '../pages/AdminHub/SSO3_DashboardPage';
import { ECAdmin_DashboardPage } from '../pages/AdminHub/ECAdmin_DashboardPage';
import * as XLutil from '../utils/excelUtil';
import * as util from '../utils/common';
import env from '../config/envi.constants.json';

const testBed = env.AdminHubTestData;
const url = env.AdminHub;

// Passed the worksheet related to the test to get the data set
const testData: any[] = XLutil.getExcelData(testBed, 'LoginForm');

// Shared pages across all tests
let page: Page;
let ecPage: Page;

// Shared page objects
let SSO3LoginPage: SSO3_LoginPage;
let SSO3DashPage: SSO3_DashboardPage;
let ECDashPage: ECAdmin_DashboardPage;

test.describe('AdminHub - User List View Module Test Suite', {tag: ['@AdminHub', '@Regression', '@UserListView']}, () => {

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        SSO3LoginPage = new SSO3_LoginPage(page);
        SSO3DashPage = new SSO3_DashboardPage(page);
        // Login
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(
            testData[0].IN_Username,
            testData[0].IN_Password
        );

        await SSO3LoginPage.waitForPageLoad();
        // Navigate to EasyConnect Portal
        [ecPage] = await Promise.all([
            page.context().waitForEvent('page'),
            SSO3DashPage.lnkEasyConnectPortal.click()
        ]);

        await ecPage.waitForLoadState();
        ECDashPage = new ECAdmin_DashboardPage(ecPage);
        console.log('Successfully logged in and navigated to EasyConnect Dashboard.');
    });

    test.afterAll(async () => {
        if (ecPage) {
            await ecPage.close();
        }
        if (page) {
            await page.close();
        }
    });

    // ==========================================
    // TEST CASES
    // ==========================================

    test('TS-EB-PORTAL-1367 Verify that the EasyConnect logo and EWB emblem are displayed correctly with required styling',async ({}, testInfo) => {
            await util.assertVisibility(ecPage,ECDashPage.pgAdminDash,true,'EasyConnect Admin Page should be loaded.',testInfo);
            await ECDashPage.btnClientMgmt.click();
            await ECDashPage.lnkClientHubUsers.click();
            await util.assertVisibility(ecPage,ECDashPage.imgEWLogo,true,'EasyConnect logo and EWB emblem with correct styling are visible.',testInfo);
        }
    );

});


// TS-EB-PORTAL-1368 Verify that the page header displays “Client Management”
// TS-EB-PORTAL-1369 Verify that the page subheader displays correct description
// TS-EB-PORTAL-1370 Verify navigation to Organization List
// TS-EB-PORTAL-1371 Verify Users tab is selected
// TS-EB-PORTAL-1372 Verify User Count is displayed
// TS-EB-PORTAL-1373 Verify Users per Country graph is shown
// TS-EB-PORTAL-1374 Verify default comparison is daily
// TS-EB-PORTAL-1375 Verify User ID column is displayed
// TS-EB-PORTAL-1376 Verify invalid search does not return incorrect data
// TS-EB-PORTAL-1377 Verify system handles API error properly
