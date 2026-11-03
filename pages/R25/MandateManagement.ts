import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_MandateManagment extends BasePage {

readonly page: Page;

// Mandate Management
readonly ddlMandateManagement: Locator;
readonly btnMandateManagement: Locator;



constructor(page: Page) {
    super(page);
    this.page = page;

    // Mandate Management
this.ddlMandateManagement = page.locator('//span[text()=" Mandate Management "]');
this.btnMandateManagement = page.locator('//a[text()=" Mandate Management "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
 
async clickMandateManagement() {
    await this.ddlMandateManagement.click();
}

async clickMandateManagementMenu() {
    await this.btnMandateManagement.click();
}
};