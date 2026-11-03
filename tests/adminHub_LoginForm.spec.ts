import { test, expect, Page } from '@playwright/test';

import { SSO3_LoginPage } from '../pages/AdminHub/SSO3_LoginPage';
import { SSO3_DashboardPage } from '../pages/AdminHub/SSO3_DashboardPage';
import { ECAdmin_DashboardPage } from '../pages/AdminHub/ECAdmin_DashboardPage';

import * as XLutil from '../utils/excelUtil';
import * as util from '../utils/common';
import env from '../config/envi.constants.json';

const testBed = env.AdminHubTestData;

const url = env.AdminHub;
//Passed the worksheet related to the test to get the data set
const testData: any[] = XLutil.getExcelData(testBed, 'LoginForm');

test.describe.serial('AdminHub - LoginForm Module Test Suite', { tag: ['@AdminHub', '@Regression', '@LoginForm'] }, () => {

    // ==========================================
    // TEST CASES
    // ==========================================

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
    });

    test(`TS-EB-PORTAL-1536_1-Validate Username and Password as required fields. ${testData[1].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[1].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[1].IN_Username, testData[1].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg: any = await SSO3LoginPage.getPasswordErrorText();
        await util.assertTextEquals(page, errorMsg, testData[1].IN_PasswordPrompt, testData[1].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test(`TS-EB-PORTAL-1536_2-Validate Username and Password as required fields. ${testData[2].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[2].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[2].IN_Username, testData[2].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg: any = await SSO3LoginPage.getUsernameErrorText();
        await util.assertTextEquals(page, errorMsg, testData[2].IN_UsernamePrompt, testData[2].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test(`TS-EB-PORTAL-1536_3-Validate Username and Password as required fields. ${testData[3].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[3].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[3].IN_Username, testData[3].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg1: any = await SSO3LoginPage.getUsernameErrorText();
        await util.assertTextEquals(page, errorMsg1, testData[3].IN_UsernamePrompt, testData[3].ExpectedResult);
        const errorMsg2: any = await SSO3LoginPage.getPasswordErrorText();
        await util.assertTextEquals(page, errorMsg2, testData[3].IN_PasswordPrompt, testData[3].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test(`TS-EB-PORTAL-1536_4-Validate Username and Password as required fields. ${testData[4].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[4].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[4].IN_Username, testData[4].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg: any = await SSO3LoginPage.getCommonErrorText();
        await util.assertTextEquals(page, errorMsg, testData[4].IN_UsernamePrompt, testData[4].ExpectedResult);
        await util.assertTextEquals(page, errorMsg, testData[4].IN_PasswordPrompt, testData[4].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test(`TS-EB-PORTAL-1536_5-Validate Username and Password as required fields. ${testData[5].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[5].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[5].IN_Username, testData[5].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg: any = await SSO3LoginPage.getCommonErrorText();
        await util.assertTextEquals(page, errorMsg, testData[5].IN_UsernamePrompt, testData[5].ExpectedResult);
        await util.assertTextEquals(page, errorMsg, testData[5].IN_PasswordPrompt, testData[5].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test(`TS-EB-PORTAL-1536_6-Validate Username and Password as required fields. ${testData[6].ExpectedResult}`, async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[6].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[6].IN_Username, testData[6].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const errorMsg: any = await SSO3LoginPage.getCommonErrorText();
        await util.assertTextEquals(page, errorMsg, testData[6].IN_UsernamePrompt, testData[6].ExpectedResult);
        await util.assertTextEquals(page, errorMsg, testData[6].IN_PasswordPrompt, testData[6].ExpectedResult);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, false, "SSO3 Portal/ Dashboard should not be displayed.", testInfo);
    });

    test('TS-EB-PORTAL-1537-Validate EasyConnect Portal in SSO3 using EWB User with Admin Hub Access.', async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[7].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[7].IN_Username, testData[7].IN_Password);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, true, "SSO3 Portal/ Dashboard should be displayed.", testInfo);
        await util.assertVisibility(page, SSO3DashPage.lnkEasyConnectPortal, true, "EasyConnect Portal link should be visible.", testInfo);
        // const [ecPage] = await Promise.all([
        //     page.context().waitForEvent('page'),
        //     await SSO3DashPage.clickEasyConnectPortalLink;
        // ]);
        const [ecPage] = await Promise.all([
            page.context().waitForEvent('page'),
            SSO3DashPage.clickEasyConnectPortalLink()
        ]);
        ``
        await ecPage.waitForLoadState();
        const ECDashPage = new ECAdmin_DashboardPage(ecPage);
        await util.assertVisibility(ecPage, ECDashPage.pgAdminDash, true, "Easyconnect Admin Page should be loaded.", testInfo);
        await ecPage.close();
    });

    test('TS-EB-PORTAL-1538 Validate EasyConnect Portal in SSO3 using EWB User without Admin Hub Access', async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[8].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        await SSO3LoginPage.login(testData[8].IN_Username, testData[8].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, true, "SSO3 Portal/ Dashboard should be displayed.", testInfo);
        await util.assertVisibility(page, SSO3DashPage.lnkEasyConnectPortal, false, "EasyConnect Portal link should not be visible/available.", testInfo);
        await SSO3DashPage.logOut;
    });

    test('TS-EB-PORTAL-1539 Validate Page Reponse in Desktop and its Log In page behavior. Should be less than 1 sec.', async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[0].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        const SSO3DashPage = new SSO3_DashboardPage(page);
        await SSO3LoginPage.navigate(url);
        const startTime = Date.now();
        await SSO3LoginPage.login(testData[9].IN_Username, testData[9].IN_Password);
        await SSO3LoginPage.waitForPageLoad();
        const loadTime = Date.now() - startTime;
        expect(loadTime).toBeLessThan(1000);
        await util.assertVisibility(page, SSO3DashPage.lblSingleSignOn, true, `SSO3 Portal/Dashboard loaded in ${loadTime} ms`, testInfo);
    });

    test('TS-EB-PORTAL-0696 Validate Interrupted EWB User Admin Log In', async ({ page }, testInfo) => {
        //Check for skip test - Execution Flag
        util.skipIfNotExecutable(testData[0].ExecutionFlag);
        const SSO3LoginPage = new SSO3_LoginPage(page);
        await SSO3LoginPage.navigate(url);
        console.log(`Input: ${testData[10].IN_Username}`);
        console.log(`Input: ${testData[10].IN_Password}`);
        await SSO3LoginPage.txtUsername.fill(String(testData[10].IN_Username));
        await SSO3LoginPage.txtPassword.fill(String(testData[10].IN_Password));
        console.log(`Refresh the page.`);
        await page.reload();
        const valUname: any = await SSO3LoginPage.txtUsername.inputValue();
        await util.assertTextNotEquals(page, valUname, testData[10].IN_Username, "Username field should be blank.");
        const valPname: any = await SSO3LoginPage.txtPassword.inputValue();
        await util.assertTextNotEquals(page, valPname, testData[10].IN_Password, "Password field should be blank.");
    });
});
