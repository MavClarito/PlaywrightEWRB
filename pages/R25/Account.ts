import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_Accounnt extends BasePage {

readonly page: Page;

// Account
readonly ddlAccount: Locator;
readonly btnOpenCurrentAccount: Locator;
readonly btnOpenSavingsAccount: Locator;
readonly btnAmendAccount: Locator;
readonly btnAuthoriseDeleteAccount: Locator;

// Account Balance - Mav
//readonly btnAccBalance: Locator;

// Account Maintenance
readonly ddlAccountMaintenance: Locator;
readonly btnAccountMaintenance: Locator;
readonly btnAuthoriseDeleteAccountMaintenance: Locator;
readonly btnAuthoriseDeleteCharge: Locator;
readonly btnAuthoriseDeleteInterestCorrection: Locator;
readonly btnCalculateCreditInterestAccrual: Locator;
readonly btnCalculateDebitInterestAccrual: Locator;

// Account Closure
readonly ddlAccountClosure: Locator;
readonly btnAccountClosure: Locator;
readonly btnCashPayout: Locator;
readonly btnUnauthorisedAccountClosure: Locator;
readonly btnAuthoriseDeleteAccountClosure: Locator;
readonly btnListOfClosedAccounts: Locator;
readonly btnAccountClosedWithLimitToday: Locator;
readonly btnAccountClosureExceptionLog: Locator;

// Signature Capture
readonly ddlSignatureCapture: Locator;
readonly btnCaptureAnImage: Locator;
readonly btnImageReversal: Locator;
readonly btnImageEnquiry: Locator;
readonly btnDocumentEnquiry: Locator;

// Account Statement
readonly ddlAccountStatement: Locator;
readonly ddlAcctStmtForCurrentPeriod: Locator;
readonly btnGenerateAccountStatementCurrent: Locator;
readonly btnViewPrintAccountStatements: Locator;
readonly ddlAcctStmtForPastPeriod: Locator;
readonly btnGenerateAccountStatementPast: Locator;
readonly btnViewPrintAccountStatement: Locator;
readonly ddlAcctStmtDuringCOB: Locator;
readonly btnViewPrintAccountStatementCOB: Locator;

// Adhoc XML Account Report
readonly ddlAdhocXMLAccountReport: Locator;
readonly btnRequestAdhocXMLAccountReport: Locator;
readonly btnViewAdhocXMLAccountReport: Locator;

// Intraday XML Account Report
readonly ddlIntradayXMLAccountReport: Locator;
readonly btnRequestIntradayXMLAccountReport: Locator;
readonly btnViewIntradayXMLAccountReportRequests: Locator;
readonly btnXMLStatementInException: Locator;

// MT942
readonly ddlGenerateMT942Message: Locator;
readonly btnGenerateMT942Statement: Locator;
readonly btnViewMT942Messages: Locator;

// Statement Enquiries
readonly btnViewRecentAccountEntries: Locator;
readonly btnViewAccountTransactions: Locator;
readonly btnViewAccountBalanceMovements: Locator;

// Inward Statement Request
readonly ddlInwardStatementRequest: Locator;
readonly btnViewInwardStatementRequest: Locator;
readonly btnUnauthorisedInwardStatementRequest: Locator;

// Account Process Workflows
readonly ddlAccountProcessWorkflows: Locator;
readonly btnGenerateAccountStatementWorkflow: Locator;
readonly btnAccountClosureWorkflow: Locator;

// Account Overdrawn
readonly ddlAccountOverdrawn: Locator;

// Account Overdrawn Enquiries
readonly ddlAccountOverdrawnEnquiries: Locator;
readonly btnOverdrawnAccounts: Locator;
readonly btnCurrentMonthOverdrawn: Locator;
readonly btnAccountOverdrawnHistory: Locator;
readonly btnOverdrawnOverview: Locator;

// Account Enquiries
readonly ddlAccountEnquiries: Locator;
readonly btnAccountSearch: Locator;
readonly btnLockedAmounts: Locator;
readonly btnInactiveAccounts: Locator;
readonly btnChargesAmortisationDetails: Locator;
readonly btnTaxSplitDetails: Locator;
readonly btnGenerateWelcomePackLetter: Locator;

// Account Entries
readonly ddlAccountEntries: Locator;
readonly btnTodaysAccountBalance: Locator;
readonly btnEntriesForToday: Locator;
readonly btnEntriesForGivenDates: Locator;
readonly btnEntriesFromLastStatement: Locator;
readonly btnBalanceOnStatementDate: Locator;
readonly btnAverageAccountBalance: Locator;
readonly btnUnauthorisedEntries: Locator;

// Interest Enquiries
readonly ddlInterestEnquiries: Locator;
readonly btnGlobalViewInterestCharges: Locator;
readonly btnInterestRateChangesForAnAccount: Locator;
readonly btnCreditInterestAccrued: Locator;
readonly btnDebitInterestAccrued: Locator;
readonly btnInterestBasedOnValueExposureDate: Locator;

// Transaction Cycler
readonly ddlTransactionCycler: Locator;
readonly btnTransactionCyclerDetails: Locator;
readonly btnTransactionCyclerHistoryDetails: Locator;
readonly btnViewPendingRCTransactions: Locator;
readonly btnTerminateManualApprovalRCTransaction: Locator;
readonly btnAuthoriseRCTerminationManualApproval: Locator;

// Interface Transactions
readonly ddlInterfaceTransactions: Locator;
readonly btnInitiateBookingRequest: Locator;
readonly btnAuthoriseDeleteBookingRequests: Locator;
readonly btnClearingBatchMessages: Locator;
readonly btnInterfaceTransactionList: Locator;

// Transaction Restrictions
readonly ddlTransactionRestrictionsMenu: Locator;
readonly btnCaptureTransactionStopInstructions: Locator;
readonly btnAuthoriseTransactionStopInstructions: Locator;
readonly btnSearchTransactionStopInstructions: Locator;
readonly btnTransactionStopInvestigationItems: Locator;
readonly btnAuthoriseDeleteStopInvestigationItems: Locator;
readonly btnPaymentRegulatoryReports: Locator;

// Alias Management
readonly ddlAliasManagement: Locator;
readonly btnRegisterProxyDirectory: Locator;
readonly btnUpdateProxyDirectory: Locator;
readonly btnAuthoriseProxyDirectory: Locator;

// External Transact Accounting Enquiries
readonly ddlExternalTransactAccountingEnquiries: Locator;
readonly btnExternalContractDetails: Locator;
readonly btnExternalTransactionDetails: Locator;

constructor(page: Page) {
    super(page);

    this.page = page;

// Account
this.ddlAccount = page.locator('//span[text()=" Account "]');
this.btnOpenCurrentAccount = page.locator('//a[text()=" Open Current Account "]');
this.btnOpenSavingsAccount = page.locator('//a[text()=" Open Savings Account "]');
this.btnAmendAccount = page.locator('//a[text()=" Amend Account "]');
this.btnAuthoriseDeleteAccount = page.locator('//a[text()=" Authorise/Delete Account "]');

//Account Balance - Mav
//this.btnCheckBalance = page.locator(''); 

// Account Maintenance
this.ddlAccountMaintenance = page.locator('//span[text()=" Account Maintenance "]');
this.btnAccountMaintenance = page.locator('//a[text()=" Account Maintenance "]');
this.btnAuthoriseDeleteAccountMaintenance = page.locator('//a[text()=" Authorise/Delete Account Maintenance "]');
this.btnAuthoriseDeleteCharge = page.locator('//a[text()=" Authorise/Delete Charge "]');
this.btnAuthoriseDeleteInterestCorrection = page.locator('//a[text()=" Authorise/Delete Interest Correction "]');
this.btnCalculateCreditInterestAccrual = page.locator('//a[text()=" Calculate Credit Interest Accrual "]');
this.btnCalculateDebitInterestAccrual = page.locator('//a[text()=" Calculate Debit Interest Accrual "]');

// Account Closure
this.ddlAccountClosure = page.locator('//span[text()=" Account Closure "]');
this.btnAccountClosure = page.locator('//a[text()=" Account Closure "]');
this.btnCashPayout = page.locator('//a[text()=" Cash Payout "]');
this.btnUnauthorisedAccountClosure = page.locator('//a[text()=" Unauthorised Account Closure "]');
this.btnAuthoriseDeleteAccountClosure = page.locator('//a[text()=" Authorise/Delete Account Closure "]');
this.btnListOfClosedAccounts = page.locator('//a[text()=" List of Closed Accounts "]');
this.btnAccountClosedWithLimitToday = page.locator('//a[text()=" Account Closed with Limit Today "]');
this.btnAccountClosureExceptionLog = page.locator('//a[text()=" Account Closure Exception Log "]');

// Signature Capture
this.ddlSignatureCapture = page.locator('//span[text()=" Signature Capture "]');
this.btnCaptureAnImage = page.locator('//a[text()=" Capture An Image "]');
this.btnImageReversal = page.locator('//a[text()=" Image Reversal "]');
this.btnImageEnquiry = page.locator('//a[text()=" Image Enquiry "]');
this.btnDocumentEnquiry = page.locator('//a[text()=" Document Enquiry "]');

// Account Statement
this.ddlAccountStatement = page.locator('//span[text()=" Account Statement "]');

// Acct. Stmt for Current Period
this.ddlAcctStmtForCurrentPeriod = page.locator('//span[text()=" Acct. Stmt for Current Period "]');
this.btnGenerateAccountStatementCurrent = page.locator('//a[text()=" Generate Account Statement "]');
this.btnViewPrintAccountStatements = page.locator('//a[text()=" View/Print Account Statements "]');

// Acct. Stmt for Past Period
this.ddlAcctStmtForPastPeriod = page.locator('//span[text()=" Acct. Stmt for Past Period "]');
this.btnGenerateAccountStatementPast = page.locator('//a[text()=" Generate Account Statement "]');
this.btnViewPrintAccountStatement = page.locator('//a[text()=" View/Print Account Statement "]');

// Acct. Stmt during COB
this.ddlAcctStmtDuringCOB = page.locator('//span[contains(text(),"Acct.Stmt during COB")]');
this.btnViewPrintAccountStatementCOB = page.locator('//a[text()=" View/Print Account Statement "]');

// Adhoc XML Account Report
this.ddlAdhocXMLAccountReport = page.locator('//span[text()=" Adhoc XML Account Report "]');
this.btnRequestAdhocXMLAccountReport = page.locator('//a[text()=" Request Adhoc XML Account Report "]');
this.btnViewAdhocXMLAccountReport = page.locator('//a[text()=" View Adhoc XML Account Report "]');

// Intraday XML Account Report
this.ddlIntradayXMLAccountReport = page.locator('//span[text()=" Intraday XML Account Report "]');
this.btnRequestIntradayXMLAccountReport = page.locator('//a[text()=" Request Intraday XML Account Report "]');
this.btnViewIntradayXMLAccountReportRequests = page.locator('//a[text()=" View Intraday XML Account Report requests "]');
this.btnXMLStatementInException = page.locator('//a[contains(text(),"XML.Statement in Exception")]');

// Generate MT942 Message
this.ddlGenerateMT942Message = page.locator('//span[text()=" Generate MT942 Message "]');
this.btnGenerateMT942Statement = page.locator('//a[text()=" Generate MT942 Statement "]');
this.btnViewMT942Messages = page.locator('//a[text()=" View MT942 Messages "]');

// Statement Enquiries
this.btnViewRecentAccountEntries = page.locator('//a[text()=" View Recent Account Entries "]');
this.btnViewAccountTransactions = page.locator('//a[text()=" View Account Transactions "]');
this.btnViewAccountBalanceMovements = page.locator('//a[text()=" View Account Balance Movements "]');

// Inward Statement Request
this.ddlInwardStatementRequest = page.locator('//span[text()=" Inward Statement Request "]');
this.btnViewInwardStatementRequest = page.locator('//a[text()=" View Inward Statement Request "]');
this.btnUnauthorisedInwardStatementRequest = page.locator('//a[text()=" Unauthorised Inward Statement Request "]');

// Account Process Workflows
this.ddlAccountProcessWorkflows = page.locator('//span[text()=" Account Process Workflows "]');
this.btnGenerateAccountStatementWorkflow = page.locator('//a[text()=" Generate Account Statement "]');
this.btnAccountClosureWorkflow = page.locator('//a[text()=" Account Closure "]');

// Account Overdrawn
this.ddlAccountOverdrawn = page.locator('//span[text()=" Account Overdrawn "]');

// Account Overdrawn Enquiries
this.ddlAccountOverdrawnEnquiries = page.locator('//span[text()=" Account Overdrawn Enquiries "]');
this.btnOverdrawnAccounts = page.locator('//a[text()=" Overdrawn Accounts "]');
this.btnCurrentMonthOverdrawn = page.locator('//a[text()=" Current Month Overdrawn "]');
this.btnAccountOverdrawnHistory = page.locator('//a[text()=" Account Overdrawn History "]');
this.btnOverdrawnOverview = page.locator('//a[text()=" Overdrawn Overview "]');

// Account Enquiries
this.ddlAccountEnquiries = page.locator('//span[text()=" Account Enquiries "]');
this.btnAccountSearch = page.locator('//a[text()=" Account Search "]');
this.btnLockedAmounts = page.locator('//a[text()=" Locked Amounts "]');
this.btnInactiveAccounts = page.locator('//a[text()=" Inactive Accounts "]');
this.btnChargesAmortisationDetails = page.locator('//a[text()=" Charges Amortisation Details "]');
this.btnTaxSplitDetails = page.locator('//a[text()=" Tax Split Details "]');
this.btnGenerateWelcomePackLetter = page.locator('//a[text()=" Generate Welcome Pack Letter "]');

// Account Entries
this.ddlAccountEntries = page.locator('//span[text()=" Account Entries "]');
this.btnTodaysAccountBalance = page.locator('//a[text()=" Today\'s Account Balance "]');
this.btnEntriesForToday = page.locator('//a[text()=" Entries for Today "]');
this.btnEntriesForGivenDates = page.locator('//a[text()=" Entries for Given Dates "]');
this.btnEntriesFromLastStatement = page.locator('//a[text()=" Entries from Last Statement "]');
this.btnBalanceOnStatementDate = page.locator('//a[text()=" Balance on Statement Date "]');
this.btnAverageAccountBalance = page.locator('//a[text()=" Average Account Balance "]');
this.btnUnauthorisedEntries = page.locator('//a[text()=" Unauthorised Entries "]');

// Interest Enquiries
this.ddlInterestEnquiries = page.locator('//span[text()=" Interest Enquiries "]');
this.btnGlobalViewInterestCharges = page.locator('//a[contains(text(),"Global View")]');
this.btnInterestRateChangesForAnAccount = page.locator('//a[text()=" Interest Rate Changes for an Account "]');
this.btnCreditInterestAccrued = page.locator('//a[text()=" Credit Interest Accrued "]');
this.btnDebitInterestAccrued = page.locator('//a[text()=" Debit Interest Accrued "]');
this.btnInterestBasedOnValueExposureDate = page.locator('//a[text()=" Interest Based on Value/Exposure Date "]');

// Transaction Cycler
this.ddlTransactionCycler = page.locator('//span[text()=" Transaction Cycler "]');
this.btnTransactionCyclerDetails = page.locator('//a[text()=" Transaction Cycler Details "]');
this.btnTransactionCyclerHistoryDetails = page.locator('//a[text()=" Transaction Cycler History Details "]');
this.btnViewPendingRCTransactions = page.locator('//a[text()=" View Pending RC Transactions "]');
this.btnTerminateManualApprovalRCTransaction = page.locator('//a[text()=" Terminate/Manual Approval RC Transaction "]');
this.btnAuthoriseRCTerminationManualApproval = page.locator('//a[text()=" Authorise RC Termination/Manual Approval "]');

// Interface Transactions
this.ddlInterfaceTransactions = page.locator('//span[text()=" Interface Transactions "]');
this.btnInitiateBookingRequest = page.locator('//a[text()=" Initiate Booking Request "]');
this.btnAuthoriseDeleteBookingRequests = page.locator('//a[text()=" Authorise/Delete Booking Requests "]');
this.btnClearingBatchMessages = page.locator('//a[text()=" Clearing Batch Messages "]');
this.btnInterfaceTransactionList = page.locator('//a[text()=" Interface Transaction List "]');

// Transaction Restrictions Menu
this.ddlTransactionRestrictionsMenu = page.locator('//span[text()=" Transaction Restrictions Menu "]');
this.btnCaptureTransactionStopInstructions = page.locator('//a[text()=" Capture Transaction Stop Instructions "]');
this.btnAuthoriseTransactionStopInstructions = page.locator('//a[text()=" Authorise Transaction Stop Instructions "]');
this.btnSearchTransactionStopInstructions = page.locator('//a[text()=" Search Transaction Stop Instructions "]');
this.btnTransactionStopInvestigationItems = page.locator('//a[text()=" Transaction Stop Investigation Items "]');
this.btnAuthoriseDeleteStopInvestigationItems = page.locator('//a[text()=" Authorise/Delete Stop Investigation Items "]');
this.btnPaymentRegulatoryReports = page.locator('//a[text()=" Payment Regulatory Reports "]');

// Alias Management
this.ddlAliasManagement = page.locator('//span[text()=" Alias Management "]');
this.btnRegisterProxyDirectory = page.locator('//a[text()=" Register Proxy Directory "]');
this.btnUpdateProxyDirectory = page.locator('//a[text()=" Update Proxy Directory "]');
this.btnAuthoriseProxyDirectory = page.locator('//a[text()=" Authorise Proxy Directory "]');

// External Transact Accounting Enquiries
this.ddlExternalTransactAccountingEnquiries = page.locator('//span[text()=" External Transact Accounting Enquiries "]');
this.btnExternalContractDetails = page.locator('//a[text()=" External Contract Details "]');
this.btnExternalTransactionDetails = page.locator('//a[text()=" External Transaction Details "]');
}



 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
//Menu Click
/*async menuBtnClick(){
    await this.menuButton.click();
}

//Acct.Click
async clickCheckBalance(){
    await this.btnCheckBalance.click();
}
*/

 async clickAccount() {
    await this.ddlAccount.click();
}

async clickOpenCurrentAccount() {
    await this.btnOpenCurrentAccount.click();
}

async clickOpenSavingsAccount() {
    await this.btnOpenSavingsAccount.click();
}

async clickAmendAccount() {
    await this.btnAmendAccount.click();
}

async clickAuthoriseDeleteAccount() {
    await this.btnAuthoriseDeleteAccount.click();
}

async clickAccountMaintenance() {
    await this.ddlAccountMaintenance.click();
}

async clickMaintenance() {
    await this.btnAccountMaintenance.click();
}

async clickAuthoriseDeleteAccountMaintenance() {
    await this.btnAuthoriseDeleteAccountMaintenance.click();
}

async clickAuthoriseDeleteCharge() {
    await this.btnAuthoriseDeleteCharge.click();
}

async clickAuthoriseDeleteInterestCorrection() {
    await this.btnAuthoriseDeleteInterestCorrection.click();
}

async clickCalculateCreditInterestAccrual() {
    await this.btnCalculateCreditInterestAccrual.click();
}

async clickCalculateDebitInterestAccrual() {
    await this.btnCalculateDebitInterestAccrual.click();
}

async clickAccountClosure() {
    await this.ddlAccountClosure.click();
}

async clickClosure() {
    await this.btnAccountClosure.click();
}

async clickCashPayout() {
    await this.btnCashPayout.click();
}

async clickUnauthorisedAccountClosure() {
    await this.btnUnauthorisedAccountClosure.click();
}

async clickAuthoriseDeleteAccountClosure() {
    await this.btnAuthoriseDeleteAccountClosure.click();
}

async clickListOfClosedAccounts() {
    await this.btnListOfClosedAccounts.click();
}

async clickAccountClosedWithLimitToday() {
    await this.btnAccountClosedWithLimitToday.click();
}

async clickAccountClosureExceptionLog() {
    await this.btnAccountClosureExceptionLog.click();
}

async clickSignatureCapture() {
    await this.ddlSignatureCapture.click();
}

async clickCaptureAnImage() {
    await this.btnCaptureAnImage.click();
}

async clickImageReversal() {
    await this.btnImageReversal.click();
}

async clickImageEnquiry() {
    await this.btnImageEnquiry.click();
}

async clickDocumentEnquiry() {
    await this.btnDocumentEnquiry.click();
}

async clickAccountStatement() {
    await this.ddlAccountStatement.click();
}

async clickAcctStmtForCurrentPeriod() {
    await this.ddlAcctStmtForCurrentPeriod.click();
}

async clickGenerateAccountStatementCurrent() {
    await this.btnGenerateAccountStatementCurrent.click();
}

async clickViewPrintAccountStatements() {
    await this.btnViewPrintAccountStatements.click();
}

async clickAcctStmtForPastPeriod() {
    await this.ddlAcctStmtForPastPeriod.click();
}

async clickGenerateAccountStatementPast() {
    await this.btnGenerateAccountStatementPast.click();
}

async clickViewPrintAccountStatement() {
    await this.btnViewPrintAccountStatement.click();
}

async clickAcctStmtDuringCOB() {
    await this.ddlAcctStmtDuringCOB.click();
}

async clickViewPrintAccountStatementCOB() {
    await this.btnViewPrintAccountStatementCOB.click();
}

async clickAdhocXMLAccountReport() {
    await this.ddlAdhocXMLAccountReport.click();
}

async clickRequestAdhocXMLAccountReport() {
    await this.btnRequestAdhocXMLAccountReport.click();
}

async clickViewAdhocXMLAccountReport() {
    await this.btnViewAdhocXMLAccountReport.click();
}

async clickIntradayXMLAccountReport() {
    await this.ddlIntradayXMLAccountReport.click();
}

async clickRequestIntradayXMLAccountReport() {
    await this.btnRequestIntradayXMLAccountReport.click();
}

async clickViewIntradayXMLAccountReportRequests() {
    await this.btnViewIntradayXMLAccountReportRequests.click();
}

async clickXMLStatementInException() {
    await this.btnXMLStatementInException.click();
}

async clickGenerateMT942Message() {
    await this.ddlGenerateMT942Message.click();
}

async clickGenerateMT942Statement() {
    await this.btnGenerateMT942Statement.click();
}

async clickViewMT942Messages() {
    await this.btnViewMT942Messages.click();
}

async clickViewRecentAccountEntries() {
    await this.btnViewRecentAccountEntries.click();
}

async clickViewAccountTransactions() {
    await this.btnViewAccountTransactions.click();
}

async clickViewAccountBalanceMovements() {
    await this.btnViewAccountBalanceMovements.click();
}

async clickInwardStatementRequest() {
    await this.ddlInwardStatementRequest.click();
}

async clickViewInwardStatementRequest() {
    await this.btnViewInwardStatementRequest.click();
}

async clickUnauthorisedInwardStatementRequest() {
    await this.btnUnauthorisedInwardStatementRequest.click();
}

async clickAccountProcessWorkflows() {
    await this.ddlAccountProcessWorkflows.click();
}

async clickGenerateAccountStatementWorkflow() {
    await this.btnGenerateAccountStatementWorkflow.click();
}

async clickAccountClosureWorkflow() {
    await this.btnAccountClosureWorkflow.click();
}

async clickAccountOverdrawn() {
    await this.ddlAccountOverdrawn.click();
}

async clickAccountOverdrawnEnquiries() {
    await this.ddlAccountOverdrawnEnquiries.click();
}

async clickOverdrawnAccounts() {
    await this.btnOverdrawnAccounts.click();
}

async clickCurrentMonthOverdrawn() {
    await this.btnCurrentMonthOverdrawn.click();
}

async clickAccountOverdrawnHistory() {
    await this.btnAccountOverdrawnHistory.click();
}

async clickOverdrawnOverview() {
    await this.btnOverdrawnOverview.click();
}

async clickAccountEnquiries() {
    await this.ddlAccountEnquiries.click();
}

async clickAccountSearch() {
    await this.btnAccountSearch.click();
}

async clickLockedAmounts() {
    await this.btnLockedAmounts.click();
}

async clickInactiveAccounts() {
    await this.btnInactiveAccounts.click();
}

async clickChargesAmortisationDetails() {
    await this.btnChargesAmortisationDetails.click();
}

async clickTaxSplitDetails() {
    await this.btnTaxSplitDetails.click();
}

async clickGenerateWelcomePackLetter() {
    await this.btnGenerateWelcomePackLetter.click();
}

async clickAccountEntries() {
    await this.ddlAccountEntries.click();
}

async clickTodaysAccountBalance() {
    await this.btnTodaysAccountBalance.click();
}

async clickEntriesForToday() {
    await this.btnEntriesForToday.click();
}

async clickEntriesForGivenDates() {
    await this.btnEntriesForGivenDates.click();
}

async clickEntriesFromLastStatement() {
    await this.btnEntriesFromLastStatement.click();
}

async clickBalanceOnStatementDate() {
    await this.btnBalanceOnStatementDate.click();
}

async clickAverageAccountBalance() {
    await this.btnAverageAccountBalance.click();
}

async clickUnauthorisedEntries() {
    await this.btnUnauthorisedEntries.click();
}

async clickInterestEnquiries() {
    await this.ddlInterestEnquiries.click();
}

async clickGlobalViewInterestCharges() {
    await this.btnGlobalViewInterestCharges.click();
}

async clickInterestRateChangesForAnAccount() {
    await this.btnInterestRateChangesForAnAccount.click();
}

async clickCreditInterestAccrued() {
    await this.btnCreditInterestAccrued.click();
}

async clickDebitInterestAccrued() {
    await this.btnDebitInterestAccrued.click();
}

async clickInterestBasedOnValueExposureDate() {
    await this.btnInterestBasedOnValueExposureDate.click();
}

async clickTransactionCycler() {
    await this.ddlTransactionCycler.click();
}

async clickTransactionCyclerDetails() {
    await this.btnTransactionCyclerDetails.click();
}

async clickTransactionCyclerHistoryDetails() {
    await this.btnTransactionCyclerHistoryDetails.click();
}

async clickViewPendingRCTransactions() {
    await this.btnViewPendingRCTransactions.click();
}

async clickTerminateManualApprovalRCTransaction() {
    await this.btnTerminateManualApprovalRCTransaction.click();
}

async clickAuthoriseRCTerminationManualApproval() {
    await this.btnAuthoriseRCTerminationManualApproval.click();
}

async clickInterfaceTransactions() {
    await this.ddlInterfaceTransactions.click();
}

async clickInitiateBookingRequest() {
    await this.btnInitiateBookingRequest.click();
}

async clickAuthoriseDeleteBookingRequests() {
    await this.btnAuthoriseDeleteBookingRequests.click();
}

async clickClearingBatchMessages() {
    await this.btnClearingBatchMessages.click();
}

async clickInterfaceTransactionList() {
    await this.btnInterfaceTransactionList.click();
}

async clickTransactionRestrictionsMenu() {
    await this.ddlTransactionRestrictionsMenu.click();
}

async clickCaptureTransactionStopInstructions() {
    await this.btnCaptureTransactionStopInstructions.click();
}

async clickAuthoriseTransactionStopInstructions() {
    await this.btnAuthoriseTransactionStopInstructions.click();
}

async clickSearchTransactionStopInstructions() {
    await this.btnSearchTransactionStopInstructions.click();
}

async clickTransactionStopInvestigationItems() {
    await this.btnTransactionStopInvestigationItems.click();
}

async clickAuthoriseDeleteStopInvestigationItems() {
    await this.btnAuthoriseDeleteStopInvestigationItems.click();
}

async clickPaymentRegulatoryReports() {
    await this.btnPaymentRegulatoryReports.click();
}

async clickAliasManagement() {
    await this.ddlAliasManagement.click();
}

async clickRegisterProxyDirectory() {
    await this.btnRegisterProxyDirectory.click();
}

async clickUpdateProxyDirectory() {
    await this.btnUpdateProxyDirectory.click();
}

async clickAuthoriseProxyDirectory() {
    await this.btnAuthoriseProxyDirectory.click();
}

async clickExternalTransactAccountingEnquiries() {
    await this.ddlExternalTransactAccountingEnquiries.click();
}

async clickExternalContractDetails() {
    await this.btnExternalContractDetails.click();
}

async clickExternalTransactionDetails() {
    await this.btnExternalTransactionDetails.click();
}


};