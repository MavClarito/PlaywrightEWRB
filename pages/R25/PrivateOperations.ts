import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_PrivateOperations extends BasePage {

readonly page: Page;

// Private Operations
readonly ddlPrivateOperationsDropdown: Locator;

// Securities
readonly ddlSecuritiesDropdown: Locator;
readonly btnMiddleOfficeButton: Locator;
readonly btnWealthManagementButton: Locator;
readonly btnFiduciariesButton: Locator;
readonly btnStructuredProductsButton: Locator;
readonly btnMutualFundsRetailButton: Locator;

// Mutual Funds-FMC
readonly ddlMutualFundsFmcDropdown: Locator;
readonly btnFrontOfficeLeadCompanyButton: Locator;

// Middle Office (Books)
readonly ddlMiddleOfficeBooksDropdown: Locator;
readonly btnPerformanceEnquiriesButton: Locator;




constructor(page: Page) {
    super(page);
    this.page = page;

    // Private Operations
this.ddlPrivateOperationsDropdown = page.locator('//span[contains(text(),"Private Operations")]');

// Securities
this.ddlSecuritiesDropdown = page.locator('//span[contains(text(),"Securities")]');
this.btnMiddleOfficeButton = page.locator('//a[text()=" Middle Office "]');
this.btnWealthManagementButton = page.locator('//a[text()=" Wealth Management "]');
this.btnFiduciariesButton = page.locator('//a[text()=" Fiduciaries "]');
this.btnStructuredProductsButton = page.locator('//a[text()=" Structured Products "]');
this.btnMutualFundsRetailButton = page.locator('//a[text()=" Mutual Funds-Retail "]');

// Mutual Funds-FMC
this.ddlMutualFundsFmcDropdown = page.locator('//span[contains(text(),"Mutual Funds-FMC")]');
this.btnFrontOfficeLeadCompanyButton = page.locator('//a[text()=" Front Office (Lead Company) "]');

// Middle Office (Books)
this.ddlMiddleOfficeBooksDropdown = page.locator('//span[contains(text(),"Middle Office (Books)")]');
this.btnPerformanceEnquiriesButton = page.locator('//a[text()=" Performance Enquiries "]');
}



 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
 
async clickPrivateOperationsDropdown() {
    await this.ddlPrivateOperationsDropdown.click();
}

async clickSecuritiesDropdown() {
    await this.ddlSecuritiesDropdown.click();
}

async clickMiddleOffice() {
    await this.btnMiddleOfficeButton.click();
}

async clickWealthManagement() {
    await this.btnWealthManagementButton.click();
}

async clickFiduciaries() {
    await this.btnFiduciariesButton.click();
}

async clickStructuredProducts() {
    await this.btnStructuredProductsButton.click();
}

async clickMutualFundsRetail() {
    await this.btnMutualFundsRetailButton.click();
}

async clickMutualFundsFmcDropdown() {
    await this.ddlMutualFundsFmcDropdown.click();
}

async clickFrontOfficeLeadCompany() {
    await this.btnFrontOfficeLeadCompanyButton.click();
}

async clickMiddleOfficeBooksDropdown() {
    await this.ddlMiddleOfficeBooksDropdown.click();
}

async clickPerformanceEnquiries() {
    await this.btnPerformanceEnquiriesButton.click();
}
};