import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_TreasuryOperations extends BasePage {

readonly page: Page;

// Treasury Operations
readonly ddlTreasuryOperationsDropdown: Locator;

// Forex & Money Market Trader
readonly ddlForexMoneyMarketTraderDropdown: Locator;

// Nostro Management
readonly ddlNostroManagementDropdown: Locator;
readonly btnNostroSummaryButton: Locator;
readonly btnNostroPositionButton: Locator;
readonly btnNostroForwardBalancesButton: Locator;

// Front Office - Forex
readonly ddlFrontOfficeForexDropdown: Locator;
readonly btnForexTraderButton: Locator;
readonly btnForexEnquiriesButton: Locator;

// General Enquiries
readonly ddlGeneralEnquiriesDropdown: Locator;
readonly btnCustomerListButton: Locator;
readonly btnAgencyListButton: Locator;

// Back Office - Forex
readonly ddlBackOfficeForexDropdown: Locator;

// Forex
readonly ddlForexDropdown: Locator;

// Forex Netting
readonly ddlForexNettingDropdown: Locator;

// Bilateral Netting
readonly ddlBilateralNettingDropdown: Locator;
readonly btnCreateNettingPaymentsButton: Locator;

// Multilateral Netting
readonly ddlMultilateralNettingDropdown: Locator;
readonly btnCreateClsNettingPaymentsButton: Locator;

// Money Market
readonly ddlMoneyMarketDropdown: Locator;
readonly btnMmSettlementInstructionsButton: Locator;

// Accounting Enquiries
readonly ddlAccountingEnquiriesDropdown: Locator;
readonly btnViewUnauthorisedEntriesButton: Locator;
readonly btnViewTransactionEntriesButton: Locator;
readonly btnViewAccountEntriesButton: Locator;
readonly btnSeePlCategoryEntriesButton: Locator;
readonly btnSeeForwardEntriesButton: Locator;

// Swaps & FRA Trader
readonly ddlSwapsFraTraderDropdown: Locator;

// Front Office - Swaps
readonly ddlFrontOfficeSwapsDropdown: Locator;
readonly btnSwapsTraderButton: Locator;
readonly btnSwapsEnquiriesButton: Locator;

// Swaps Trader
readonly ddlSwapsTraderDropdown: Locator;
readonly btnMaintainSwapButton: Locator;
readonly btnSwapsTraderEnquiriesButton: Locator;

// Back Office - Swaps
readonly ddlBackOfficeSwapsDropdown: Locator;

// Accounting Entries
readonly ddlAccountingEntriesDropdown: Locator;
readonly btnViewUnauthorisedEntriesAccountingButton: Locator;
readonly btnViewTransactionEntriesAccountingButton: Locator;
readonly btnViewAccountEntriesAccountingButton: Locator;
readonly btnSeePlCategoryEntriesAccountingButton: Locator;
readonly btnSeeForwardEntriesAccountingButton: Locator;

// Repos
readonly ddlReposDropdown: Locator;
readonly btnFrontOfficeButton: Locator;

// Repos Back Office
readonly ddlBackOfficeReposDropdown: Locator;
readonly btnRepoSettlementInstructionsButton: Locator;

// Bonds
readonly ddlBondsDropdown: Locator;

// Bond Issue Program
readonly ddlBondIssueProgramDropdown: Locator;
readonly btnAuthoriseDeleteBondIssueProgramButton: Locator;

// Issue Bonds
readonly ddlIssueBondsDropdown: Locator;
readonly btnAuthoriseDeleteBondIssueButton: Locator;

// Free Format SWIFT Message
readonly ddlFreeFormatSwiftMessageDropdown: Locator;
readonly btnSendFreeFormatSwiftMessagesButton: Locator;
readonly btnAuthoriseFreeFormatSwiftMessagesButton: Locator;

// SWIFT Cancellation Messages
readonly ddlSwiftCancellationMessagesDropdown: Locator;
readonly btnSendSwiftCancellationMessagesButton: Locator;
readonly btnAuthoriseSwiftCancellationMessagesButton: Locator;



constructor(page: Page) {
    super(page);
    this.page = page;

    // Treasury Operations
this.ddlTreasuryOperationsDropdown = page.locator('//span[contains(text(),"Treasury Operations")]');

// Forex & Money Market Trader
this.ddlForexMoneyMarketTraderDropdown = page.locator('//span[contains(text(),"Forex & Money Market Trader")]');

// Nostro Management
this.ddlNostroManagementDropdown = page.locator('//span[contains(text(),"Nostro Management")]');
this.btnNostroSummaryButton = page.locator('//a[text()=" Nostro Summary "]');
this.btnNostroPositionButton = page.locator('//a[text()=" Nostro Position "]');
this.btnNostroForwardBalancesButton = page.locator('//a[text()=" Nostro Forward Balances "]');

// Front Office - Forex
this.ddlFrontOfficeForexDropdown = page.locator('//span[contains(text(),"Front Office")]');
this.btnForexTraderButton = page.locator('//a[text()=" Forex Trader "]');
this.btnForexEnquiriesButton = page.locator('//a[text()=" Forex Enquiries "]');

// General Enquiries
this.ddlGeneralEnquiriesDropdown = page.locator('//span[contains(text(),"General Enquiries")]');
this.btnCustomerListButton = page.locator('//a[text()=" Customer List "]');
this.btnAgencyListButton = page.locator('//a[text()=" Agency List "]');

// Back Office - Forex
this.ddlBackOfficeForexDropdown = page.locator('//span[contains(text(),"Back Office")]');

// Forex
this.ddlForexDropdown = page.locator('//span[contains(text(),"Forex")]');

// Forex Netting
this.ddlForexNettingDropdown = page.locator('//span[contains(text(),"Forex Netting")]');

// Bilateral Netting
this.ddlBilateralNettingDropdown = page.locator('//span[contains(text(),"Bilateral Netting")]');
this.btnCreateNettingPaymentsButton = page.locator('//a[text()=" Create Netting Payments "]');

// Multilateral Netting
this.ddlMultilateralNettingDropdown = page.locator('//span[contains(text(),"Multilateral Netting")]');
this.btnCreateClsNettingPaymentsButton = page.locator('//a[text()=" Create CLS Netting Payments "]');

// Money Market
this.ddlMoneyMarketDropdown = page.locator('//span[contains(text(),"Money Market")]');
this.btnMmSettlementInstructionsButton = page.locator('//a[text()=" MM Settlement Instructions "]');

// Accounting Enquiries
this.ddlAccountingEnquiriesDropdown = page.locator('//span[contains(text(),"Accounting Enquiries")]');
this.btnViewUnauthorisedEntriesButton = page.locator('//a[text()=" View Unauthorised Entries "]');
this.btnViewTransactionEntriesButton = page.locator('//a[text()=" View Transaction Entries "]');
this.btnViewAccountEntriesButton = page.locator('//a[text()=" View Account Entries "]');
this.btnSeePlCategoryEntriesButton = page.locator('//a[text()=" See PL Category Entries "]');
this.btnSeeForwardEntriesButton = page.locator('//a[text()=" See Forward Entries "]');

// Swaps & FRA Trader
this.ddlSwapsFraTraderDropdown = page.locator('//span[contains(text(),"Swaps & FRA Trader")]');

// Front Office - Swaps
this.ddlFrontOfficeSwapsDropdown = page.locator('//span[contains(text(),"Front Office")]');
this.btnSwapsTraderButton = page.locator('//a[text()=" Swaps Trader "]');
this.btnSwapsEnquiriesButton = page.locator('//a[text()=" Swaps Enquiries "]');

// Swaps Trader
this.ddlSwapsTraderDropdown = page.locator('//span[contains(text(),"Swaps Trader")]');
this.btnMaintainSwapButton = page.locator('//a[text()=" Maintain Swap "]');
this.btnSwapsTraderEnquiriesButton = page.locator('//a[text()=" Swaps Enquiries "]');

// Back Office - Swaps
this.ddlBackOfficeSwapsDropdown = page.locator('//span[contains(text(),"Back Office")]');

// Accounting Entries
this.ddlAccountingEntriesDropdown = page.locator('//span[contains(text(),"Accounting Entries")]');
this.btnViewUnauthorisedEntriesAccountingButton = page.locator('//a[text()=" View Unauthorised Entries "]');
this.btnViewTransactionEntriesAccountingButton = page.locator('//a[text()=" View Transaction Entries "]');
this.btnViewAccountEntriesAccountingButton = page.locator('//a[text()=" View Account Entries "]');
this.btnSeePlCategoryEntriesAccountingButton = page.locator('//a[text()=" See PL Category Entries "]');
this.btnSeeForwardEntriesAccountingButton = page.locator('//a[text()=" See Forward Entries "]');

// Repos
this.ddlReposDropdown = page.locator('//span[contains(text(),"Repos")]');
this.btnFrontOfficeButton = page.locator('//a[text()=" Front Office "]');

// Repos Back Office
this.ddlBackOfficeReposDropdown = page.locator('//span[contains(text(),"Back Office")]');
this.btnRepoSettlementInstructionsButton = page.locator('//a[text()=" Repo Settlement Instructions "]');

// Bonds
this.ddlBondsDropdown = page.locator('//span[contains(text(),"Bonds")]');

// Bond Issue Program
this.ddlBondIssueProgramDropdown = page.locator('//span[contains(text(),"Bond Issue Program")]');
this.btnAuthoriseDeleteBondIssueProgramButton = page.locator('//a[text()=" Authorise/Delete Bond Issue Program "]');

// Issue Bonds
this.ddlIssueBondsDropdown = page.locator('//span[contains(text(),"Issue Bonds")]');
this.btnAuthoriseDeleteBondIssueButton = page.locator('//a[text()=" Authorise/Delete Bond Issue "]');

// Free Format SWIFT Message
this.ddlFreeFormatSwiftMessageDropdown = page.locator('//span[contains(text(),"Free Format SWIFT Message")]');
this.btnSendFreeFormatSwiftMessagesButton = page.locator('//a[text()=" Send Free Format SWIFT Messages "]');
this.btnAuthoriseFreeFormatSwiftMessagesButton = page.locator('//a[text()=" Authorise Free Format SWIFT Messages "]');

// SWIFT Cancellation Messages
this.ddlSwiftCancellationMessagesDropdown = page.locator('//span[contains(text(),"SWIFT Cancellation Messages")]');
this.btnSendSwiftCancellationMessagesButton = page.locator('//a[text()=" Send SWIFT Cancellation Messages "]');
this.btnAuthoriseSwiftCancellationMessagesButton = page.locator('//a[text()=" Authorise SWIFT Cancellation Messages "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

 async clickTreasuryOperationsDropdown() {
    await this.ddlTreasuryOperationsDropdown.click();
}

async clickForexMoneyMarketTraderDropdown() {
    await this.ddlForexMoneyMarketTraderDropdown.click();
}

async clickNostroManagementDropdown() {
    await this.ddlNostroManagementDropdown.click();
}

async clickNostroSummary() {
    await this.btnNostroSummaryButton.click();
}

async clickNostroPosition() {
    await this.btnNostroPositionButton.click();
}

async clickNostroForwardBalances() {
    await this.btnNostroForwardBalancesButton.click();
}

async clickFrontOfficeForexDropdown() {
    await this.ddlFrontOfficeForexDropdown.click();
}

async clickForexTrader() {
    await this.btnForexTraderButton.click();
}

async clickForexEnquiries() {
    await this.btnForexEnquiriesButton.click();
}

async clickGeneralEnquiriesDropdown() {
    await this.ddlGeneralEnquiriesDropdown.click();
}

async clickCustomerList() {
    await this.btnCustomerListButton.click();
}

async clickAgencyList() {
    await this.btnAgencyListButton.click();
}

async clickBackOfficeForexDropdown() {
    await this.ddlBackOfficeForexDropdown.click();
}

async clickForexDropdown() {
    await this.ddlForexDropdown.click();
}

async clickForexNettingDropdown() {
    await this.ddlForexNettingDropdown.click();
}

async clickBilateralNettingDropdown() {
    await this.ddlBilateralNettingDropdown.click();
}

async clickCreateNettingPayments() {
    await this.btnCreateNettingPaymentsButton.click();
}

async clickMultilateralNettingDropdown() {
    await this.ddlMultilateralNettingDropdown.click();
}

async clickCreateClsNettingPayments() {
    await this.btnCreateClsNettingPaymentsButton.click();
}

async clickMoneyMarketDropdown() {
    await this.ddlMoneyMarketDropdown.click();
}

async clickMmSettlementInstructions() {
    await this.btnMmSettlementInstructionsButton.click();
}

async clickAccountingEnquiriesDropdown() {
    await this.ddlAccountingEnquiriesDropdown.click();
}

async clickViewUnauthorisedEntries() {
    await this.btnViewUnauthorisedEntriesButton.click();
}

async clickViewTransactionEntries() {
    await this.btnViewTransactionEntriesButton.click();
}

async clickViewAccountEntries() {
    await this.btnViewAccountEntriesButton.click();
}

async clickSeePlCategoryEntries() {
    await this.btnSeePlCategoryEntriesButton.click();
}

async clickSeeForwardEntries() {
    await this.btnSeeForwardEntriesButton.click();
}

async clickSwapsFraTraderDropdown() {
    await this.ddlSwapsFraTraderDropdown.click();
}

async clickFrontOfficeSwapsDropdown() {
    await this.ddlFrontOfficeSwapsDropdown.click();
}

async clickSwapsTrader() {
    await this.btnSwapsTraderButton.click();
}

async clickSwapsEnquiries() {
    await this.btnSwapsEnquiriesButton.click();
}

async clickSwapsTraderDropdown() {
    await this.ddlSwapsTraderDropdown.click();
}

async clickMaintainSwap() {
    await this.btnMaintainSwapButton.click();
}

async clickSwapsTraderEnquiries() {
    await this.btnSwapsTraderEnquiriesButton.click();
}

async clickBackOfficeSwapsDropdown() {
    await this.ddlBackOfficeSwapsDropdown.click();
}

async clickAccountingEntriesDropdown() {
    await this.ddlAccountingEntriesDropdown.click();
}

async clickViewUnauthorisedEntriesAccounting() {
    await this.btnViewUnauthorisedEntriesAccountingButton.click();
}

async clickViewTransactionEntriesAccounting() {
    await this.btnViewTransactionEntriesAccountingButton.click();
}

async clickViewAccountEntriesAccounting() {
    await this.btnViewAccountEntriesAccountingButton.click();
}

async clickSeePlCategoryEntriesAccounting() {
    await this.btnSeePlCategoryEntriesAccountingButton.click();
}

async clickSeeForwardEntriesAccounting() {
    await this.btnSeeForwardEntriesAccountingButton.click();
}

async clickReposDropdown() {
    await this.ddlReposDropdown.click();
}

async clickFrontOffice() {
    await this.btnFrontOfficeButton.click();
}

async clickBackOfficeReposDropdown() {
    await this.ddlBackOfficeReposDropdown.click();
}

async clickRepoSettlementInstructions() {
    await this.btnRepoSettlementInstructionsButton.click();
}

async clickBondsDropdown() {
    await this.ddlBondsDropdown.click();
}

async clickBondIssueProgramDropdown() {
    await this.ddlBondIssueProgramDropdown.click();
}

async clickAuthoriseDeleteBondIssueProgram() {
    await this.btnAuthoriseDeleteBondIssueProgramButton.click();
}

async clickIssueBondsDropdown() {
    await this.ddlIssueBondsDropdown.click();
}

async clickAuthoriseDeleteBondIssue() {
    await this.btnAuthoriseDeleteBondIssueButton.click();
}

async clickFreeFormatSwiftMessageDropdown() {
    await this.ddlFreeFormatSwiftMessageDropdown.click();
}

async clickSendFreeFormatSwiftMessages() {
    await this.btnSendFreeFormatSwiftMessagesButton.click();
}

async clickAuthoriseFreeFormatSwiftMessages() {
    await this.btnAuthoriseFreeFormatSwiftMessagesButton.click();
}

async clickSwiftCancellationMessagesDropdown() {
    await this.ddlSwiftCancellationMessagesDropdown.click();
}

async clickSendSwiftCancellationMessages() {
    await this.btnSendSwiftCancellationMessagesButton.click();
}

async clickAuthoriseSwiftCancellationMessages() {
    await this.btnAuthoriseSwiftCancellationMessagesButton.click();
}
};