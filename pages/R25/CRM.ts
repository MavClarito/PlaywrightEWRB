import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_CRM extends BasePage {

readonly page: Page;

// CRM
readonly ddlCRM: Locator;

readonly btnContactManagement: Locator;
readonly btnAlertsManagement: Locator;
readonly btnCustomersOtherProducts: Locator;
readonly btnOpportunitiesForCustomer: Locator;
readonly btnNewOpportunities: Locator;
readonly btnCustomerOpportunitiesHistory: Locator;
readonly btnOpportunityListByProduct: Locator;
readonly btnCustomerCheckIn: Locator;

constructor(page: Page) {
    super(page);

    this.page = page;

// CRM
this.ddlCRM = page.locator('//span[text()=" CRM "]');

this.btnContactManagement = page.locator('//a[text()=" Contact Management "]');
this.btnAlertsManagement = page.locator('//a[text()=" Alerts Management "]');
this.btnCustomersOtherProducts = page.locator('//a[text()=" Customers Other Products "]');
this.btnOpportunitiesForCustomer = page.locator('//a[text()=" Opportunities for Customer "]');
this.btnNewOpportunities = page.locator('//a[text()=" New Opportunities "]');
this.btnCustomerOpportunitiesHistory = page.locator('//a[text()=" Customer Opportunities History "]');
this.btnOpportunityListByProduct = page.locator('//a[text()=" Opportunity list by Product "]');
this.btnCustomerCheckIn = page.locator('//a[text()=" Customer Check In "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

async clickCRM() {
    await this.ddlCRM.click();
}

async clickContactManagement() {
    await this.btnContactManagement.click();
}

async clickAlertsManagement() {
    await this.btnAlertsManagement.click();
}

async clickCustomersOtherProducts() {
    await this.btnCustomersOtherProducts.click();
}

async clickOpportunitiesForCustomer() {
    await this.btnOpportunitiesForCustomer.click();
}

async clickNewOpportunities() {
    await this.btnNewOpportunities.click();
}

async clickCustomerOpportunitiesHistory() {
    await this.btnCustomerOpportunitiesHistory.click();
}

async clickOpportunityListByProduct() {
    await this.btnOpportunityListByProduct.click();
}

async clickCustomerCheckIn() {
    await this.btnCustomerCheckIn.click();
}


};