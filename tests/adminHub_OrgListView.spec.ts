import { test, expect } from '@playwright/test';
import { SSO3_LoginPage } from '../pages/AdminHub/SSO3_LoginPage';
import { SSO3_DashboardPage } from '../pages/AdminHub/SSO3_DashboardPage';
import { ECAdmin_DashboardPage } from '../pages/AdminHub/ECAdmin_DashboardPage';
import * as XLutil from '../utils/excelUtil';
import * as util from '../utils/common';
import env from '../config/envi.constants.json';

const testBed = env.AdminHubTestData;
const url = env.AdminHub;
//Passed the worksheet related to the test to get the data set
const testData: any[] = XLutil.getExcelData(testBed, 'OrgListView');

test.describe.parallel('AdminHub - Organization List View Module Test Suite', { tag: ['@AdminHub', '@Regression', '@OrgListView'] }, () => {

    test('TS-EB-PORTAL-1535-Validate Admin Log In via SSO3 Portal.', async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[0].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[0].IN_Username, testData[0].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, true, "SSO3 Portal/ Dashboard should be displayed.", testInfo);
        await SSO3DashPage.logOut;
        await page.close();
    });


});