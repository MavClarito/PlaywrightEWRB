import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_DDManagment extends BasePage {

readonly page: Page;

// DD Management
readonly ddlDdManagementDropdown: Locator;
readonly btnDdManagementButton: Locator;

// DD Mandates Service Management
readonly ddlDdMandatesServiceManagementDropdown: Locator;
readonly btnMandateReceivedFileBulkTxnsButton: Locator;
readonly btnMandateSentFileBulkTxnsButton: Locator;
readonly btnAuthorizeSentBulkButton: Locator;
readonly btnAuthoriseSentTxnsButton: Locator;



constructor(page: Page) {
    super(page);
    this.page = page;

// DD Management
this.ddlDdManagementDropdown = page.locator('//span[contains(text(),"DD Management")]');
this.btnDdManagementButton = page.locator('//a[text()=" DD Management "]');

// DD Mandates Service Management
this.ddlDdMandatesServiceManagementDropdown = page.locator('//span[contains(text(),"DD Mandates Service Management")]');
this.btnMandateReceivedFileBulkTxnsButton = page.locator('//a[text()=" Mandate Received File/Bulk/Txns "]');
this.btnMandateSentFileBulkTxnsButton = page.locator('//a[text()=" Mandate Sent File/Bulk/Txns "]');
this.btnAuthorizeSentBulkButton = page.locator('//a[text()=" Authorize Sent Bulk "]');
this.btnAuthoriseSentTxnsButton = page.locator('//a[text()=" Authorise Sent Txns "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

 async clickDdManagementDropdown() {
    await this.ddlDdManagementDropdown.click();
}

async clickDdManagementButton() {
    await this.btnDdManagementButton.click();
}

async clickDdMandatesServiceManagementDropdown() {
    await this.ddlDdMandatesServiceManagementDropdown.click();
}

async clickMandateReceivedFileBulkTxns() {
    await this.btnMandateReceivedFileBulkTxnsButton.click();
}

async clickMandateSentFileBulkTxns() {
    await this.btnMandateSentFileBulkTxnsButton.click();
}

async clickAuthorizeSentBulk() {
    await this.btnAuthorizeSentBulkButton.click();
}

async clickAuthoriseSentTxns() {
    await this.btnAuthoriseSentTxnsButton.click();
}

};