import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_MandateManagment extends BasePage {

readonly page: Page;

// Business Banking Operations
readonly ddlBusinessBankingOperationsDropdown: Locator;
readonly btnProductCatalogButton: Locator;
readonly btnFindCustomerButton: Locator;

// Account Transactions
readonly ddlAccountTransactionsDropdown: Locator;
readonly btnFindAccountsButton: Locator;

// Account Transfer
readonly ddlAccountTransferDropdown: Locator;
readonly btnDraftIssueInLocalCurrencyButton: Locator;
readonly btnDraftIssueInForeignCurrencyButton: Locator;
readonly btnTransferBetweenAccountsButton: Locator;
readonly btnAuthoriseDeleteDraftAcctTrfrButton: Locator;

// Debit Card
readonly ddlDebitCardDropdown: Locator;
readonly btnNewCardIssueButton: Locator;
readonly btnManageCardButton: Locator;
readonly btnAuthoriseDeleteCardIssueButton: Locator;
readonly btnDebitCardsIssuedButton: Locator;

// Deposit Transactions
readonly ddlDepositTransactionsDropdown: Locator;
readonly btnFindDepositsButton: Locator;

// Arrangement Activities - Deposit
readonly ddlArrangementActivitiesDepositDropdown: Locator;
readonly btnAaDepositFundButton: Locator;
readonly btnAaPayoutDomesticButton: Locator;
readonly btnAaPayoutInternationalButton: Locator;
readonly btnAaPartialWithdrawalButton: Locator;
readonly btnAuthoriseDeleteArrangementsPoDepositButton: Locator;

// Deposit Report
readonly btnDepositReportButton: Locator;

// Facility Transactions
readonly ddlFacilityTransactionsDropdown: Locator;
readonly btnFindFacilityButton: Locator;
readonly btnFindDrawingsButton: Locator;

// Arrangement Activities (PO)
readonly ddlArrangementActivitiesPoDropdown: Locator;
readonly btnAaRepaymentPoButton: Locator;
readonly btnAaPayoffPoButton: Locator;
readonly btnAaPrincipalDecreasePoButton: Locator;
readonly btnAaBillsRepaymentButton: Locator;
readonly btnAuthoriseDeleteArrangementsPoFacilityButton: Locator;

// Loan Transactions
readonly ddlLoanTransactionsDropdown: Locator;
readonly btnFindLoanButton: Locator;

// Arrangement Activities - Loan
readonly ddlArrangementActivitiesLoanDropdown: Locator;
readonly btnAaDisbursementDomesticButton: Locator;
readonly btnAaDisbursementInternationalButton: Locator;
readonly btnAaRepaymentLoanButton: Locator;
readonly btnAaAdvanceRepaymentButton: Locator;
readonly btnAaPayoffLoanButton: Locator;
readonly btnAaPrincipalDecreaseLoanButton: Locator;
readonly btnAaCreditArrangementButton: Locator;
readonly btnAuthoriseDeleteArrangementsPoLoanButton: Locator;

// Loan Report
readonly btnLoanReportButton: Locator;
readonly btnOverdueItemsButton: Locator;



constructor(page: Page) {
    super(page);
    this.page = page;

   // Business Banking Operations
this.ddlBusinessBankingOperationsDropdown = page.locator('//span[contains(text(),"Business Banking Operations")]');
this.btnProductCatalogButton = page.locator('//a[text()=" Product Catalog "]');
this.btnFindCustomerButton = page.locator('//a[text()=" Find Customer "]');

// Account Transactions
this.ddlAccountTransactionsDropdown = page.locator('//span[contains(text(),"Account Transactions")]');
this.btnFindAccountsButton = page.locator('//a[text()=" Find Accounts "]');

// Account Transfer
this.ddlAccountTransferDropdown = page.locator('//span[contains(text(),"Account Transfer")]');
this.btnDraftIssueInLocalCurrencyButton = page.locator('//a[text()=" Draft Issue In Local Currency "]');
this.btnDraftIssueInForeignCurrencyButton = page.locator('//a[text()=" Draft Issue In Foreign Currency "]');
this.btnTransferBetweenAccountsButton = page.locator('//a[text()=" Transfer between Accounts "]');
this.btnAuthoriseDeleteDraftAcctTrfrButton = page.locator('//a[text()=" Authorise/Delete Draft/Acct Trfr "]');

// Debit Card
this.ddlDebitCardDropdown = page.locator('//span[contains(text(),"Debit Card")]');
this.btnNewCardIssueButton = page.locator('//a[text()=" New Card Issue "]');
this.btnManageCardButton = page.locator('//a[text()=" Manage card "]');
this.btnAuthoriseDeleteCardIssueButton = page.locator('//a[text()=" Authorise/Delete Card Issue "]');
this.btnDebitCardsIssuedButton = page.locator('//a[text()=" Debit Cards Issued "]');

// Deposit Transactions
this.ddlDepositTransactionsDropdown = page.locator('//span[contains(text(),"Deposit Transactions")]');
this.btnFindDepositsButton = page.locator('//a[contains(text()," Find Deposits ")]');

// Arrangement Activities - Deposit
this.ddlArrangementActivitiesDepositDropdown = page.locator('//span[contains(text(),"Arrangement Activities")]');
this.btnAaDepositFundButton = page.locator('//a[text()=" AA Deposit - Fund "]');
this.btnAaPayoutDomesticButton = page.locator('//a[text()=" AA Pay-out-Domestic "]');
this.btnAaPayoutInternationalButton = page.locator('//a[text()=" AA Pay-out-International "]');
this.btnAaPartialWithdrawalButton = page.locator('//a[text()=" AA Partial Withdrawal "]');
this.btnAuthoriseDeleteArrangementsPoDepositButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Deposit Report
this.btnDepositReportButton = page.locator('//a[text()=" Deposit Report "]');

// Facility Transactions
this.ddlFacilityTransactionsDropdown = page.locator('//span[contains(text(),"Facility Transactions")]');
this.btnFindFacilityButton = page.locator('//a[text()=" Find Facility "]');
this.btnFindDrawingsButton = page.locator('//a[text()=" Find Drawings "]');

// Arrangement Activities (PO)
this.ddlArrangementActivitiesPoDropdown = page.locator('//span[contains(text(),"Arrangement Activities (PO)")]');
this.btnAaRepaymentPoButton = page.locator('//a[text()=" AA Repayment "]');
this.btnAaPayoffPoButton = page.locator('//a[text()=" AA Pay-off "]');
this.btnAaPrincipalDecreasePoButton = page.locator('//a[text()=" AA Principal Decrease "]');
this.btnAaBillsRepaymentButton = page.locator('//a[text()=" AA Bills Repayment "]');
this.btnAuthoriseDeleteArrangementsPoFacilityButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Loan Transactions
this.ddlLoanTransactionsDropdown = page.locator('//span[contains(text(),"Loan Transactions")]');
this.btnFindLoanButton = page.locator('//a[text()=" Find Loan "]');

// Arrangement Activities - Loan
this.ddlArrangementActivitiesLoanDropdown = page.locator('//span[contains(text(),"Arrangement Activities")]');
this.btnAaDisbursementDomesticButton = page.locator('//a[text()=" AA Disbursement Domestic "]');
this.btnAaDisbursementInternationalButton = page.locator('//a[text()=" AA Disbursement International "]');
this.btnAaRepaymentLoanButton = page.locator('//a[text()=" AA Repayment "]');
this.btnAaAdvanceRepaymentButton = page.locator('//a[text()=" AA Advance Repayment "]');
this.btnAaPayoffLoanButton = page.locator('//a[text()=" AA Pay-off "]');
this.btnAaPrincipalDecreaseLoanButton = page.locator('//a[text()=" AA Principal Decrease "]');
this.btnAaCreditArrangementButton = page.locator('//a[text()=" AA Credit Arrangement "]');
this.btnAuthoriseDeleteArrangementsPoLoanButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Loan Report
this.btnLoanReportButton = page.locator('//a[text()=" Loan Report "]');
this.btnOverdueItemsButton = page.locator('//a[text()=" Overdue Items "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

async clickBusinessBankingOperationsDropdown() {
    await this.ddlBusinessBankingOperationsDropdown.click();
}

async clickProductCatalog() {
    await this.btnProductCatalogButton.click();
}

async clickFindCustomer() {
    await this.btnFindCustomerButton.click();
}

async clickAccountTransactionsDropdown() {
    await this.ddlAccountTransactionsDropdown.click();
}

async clickFindAccounts() {
    await this.btnFindAccountsButton.click();
}

async clickAccountTransferDropdown() {
    await this.ddlAccountTransferDropdown.click();
}

async clickDraftIssueInLocalCurrency() {
    await this.btnDraftIssueInLocalCurrencyButton.click();
}

async clickDraftIssueInForeignCurrency() {
    await this.btnDraftIssueInForeignCurrencyButton.click();
}

async clickTransferBetweenAccounts() {
    await this.btnTransferBetweenAccountsButton.click();
}

async clickAuthoriseDeleteDraftAcctTrfr() {
    await this.btnAuthoriseDeleteDraftAcctTrfrButton.click();
}

async clickDebitCardDropdown() {
    await this.ddlDebitCardDropdown.click();
}

async clickNewCardIssue() {
    await this.btnNewCardIssueButton.click();
}

async clickManageCard() {
    await this.btnManageCardButton.click();
}

async clickAuthoriseDeleteCardIssue() {
    await this.btnAuthoriseDeleteCardIssueButton.click();
}

async clickDebitCardsIssued() {
    await this.btnDebitCardsIssuedButton.click();
}

async clickDepositTransactionsDropdown() {
    await this.ddlDepositTransactionsDropdown.click();
}

async clickFindDeposits() {
    await this.btnFindDepositsButton.click();
}

async clickArrangementActivitiesDepositDropdown() {
    await this.ddlArrangementActivitiesDepositDropdown.click();
}

async clickAaDepositFund() {
    await this.btnAaDepositFundButton.click();
}

async clickAaPayoutDomestic() {
    await this.btnAaPayoutDomesticButton.click();
}

async clickAaPayoutInternational() {
    await this.btnAaPayoutInternationalButton.click();
}

async clickAaPartialWithdrawal() {
    await this.btnAaPartialWithdrawalButton.click();
}

async clickAuthoriseDeleteArrangementsPoDeposit() {
    await this.btnAuthoriseDeleteArrangementsPoDepositButton.click();
}

async clickDepositReport() {
    await this.btnDepositReportButton.click();
}

async clickFacilityTransactionsDropdown() {
    await this.ddlFacilityTransactionsDropdown.click();
}

async clickFindFacility() {
    await this.btnFindFacilityButton.click();
}

async clickFindDrawings() {
    await this.btnFindDrawingsButton.click();
}

async clickArrangementActivitiesPoDropdown() {
    await this.ddlArrangementActivitiesPoDropdown.click();
}

async clickAaRepaymentPo() {
    await this.btnAaRepaymentPoButton.click();
}

async clickAaPayoffPo() {
    await this.btnAaPayoffPoButton.click();
}

async clickAaPrincipalDecreasePo() {
    await this.btnAaPrincipalDecreasePoButton.click();
}

async clickAaBillsRepayment() {
    await this.btnAaBillsRepaymentButton.click();
}

async clickAuthoriseDeleteArrangementsPoFacility() {
    await this.btnAuthoriseDeleteArrangementsPoFacilityButton.click();
}

async clickLoanTransactionsDropdown() {
    await this.ddlLoanTransactionsDropdown.click();
}

async clickFindLoan() {
    await this.btnFindLoanButton.click();
}

async clickArrangementActivitiesLoanDropdown() {
    await this.ddlArrangementActivitiesLoanDropdown.click();
}

async clickAaDisbursementDomestic() {
    await this.btnAaDisbursementDomesticButton.click();
}

async clickAaDisbursementInternational() {
    await this.btnAaDisbursementInternationalButton.click();
}

async clickAaRepaymentLoan() {
    await this.btnAaRepaymentLoanButton.click();
}

async clickAaAdvanceRepayment() {
    await this.btnAaAdvanceRepaymentButton.click();
}

async clickAaPayoffLoan() {
    await this.btnAaPayoffLoanButton.click();
}

async clickAaPrincipalDecreaseLoan() {
    await this.btnAaPrincipalDecreaseLoanButton.click();
}

async clickAaCreditArrangement() {
    await this.btnAaCreditArrangementButton.click();
}

async clickAuthoriseDeleteArrangementsPoLoan() {
    await this.btnAuthoriseDeleteArrangementsPoLoanButton.click();
}

async clickLoanReport() {
    await this.btnLoanReportButton.click();
}

async clickOverdueItems() {
    await this.btnOverdueItemsButton.click();
}
};