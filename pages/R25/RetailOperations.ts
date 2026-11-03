import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_RetailOperations extends BasePage {

readonly page: Page;

// Retail Operations
readonly ddlRetailOperationsDropdown: Locator;
readonly btnProductCatalogButton: Locator;
readonly btnExternalProductCatalogButton: Locator;
readonly btnFindCustomerButton: Locator;
readonly btnUnauthorizedAAARecordsButton: Locator;

// Accounts
readonly ddlAccountsDropdown: Locator;
readonly btnFindAccountButton: Locator;

// Account Transactions
readonly ddlAccountTransactionsDropdown: Locator;

// Teller
readonly ddlTellerDropdown: Locator;

// Head Teller Operations
readonly ddlHeadTellerOperationsDropdown: Locator;

// Till Administration
readonly ddlHeadTellerTillAdministrationDropdown: Locator;
readonly btnCreateNewTillButton: Locator;
readonly btnChangeTillUserButton: Locator;
readonly btnReopenTellerButton: Locator;
readonly btnAuthoriseDeleteTillClosureButton: Locator;

// Till Transfer
readonly ddlHeadTellerTillTransferDropdown: Locator;
readonly btnAuthoriseDeleteTillTransferButton: Locator;

// Travellers Cheque
readonly ddlHeadTellerTravellersChequeDropdown: Locator;

// Teller Internal Account Menu
readonly ddlTellerInternalAccountMenuDropdown: Locator;
readonly btnCreateAmendInternalAccountButton: Locator;
readonly btnAuthoriseDeleteInternalAccountsButton: Locator;
readonly btnAuthoriseDeleteTCStockTransactionsButton: Locator;
readonly btnTCStockBalanceButton: Locator;
readonly btnAuthoriseDeleteNostroFundingButton: Locator;

// Head Teller Enquiries
readonly ddlHeadTellerEnquiriesDropdown: Locator;
readonly btnCashPositionByTillButton: Locator;
readonly btnCashPositionByCurrencyButton: Locator;
readonly btnCashPositionByDenominationButton: Locator;
readonly btnListOfCashOverragesButton: Locator;
readonly btnListOfCashShortagesButton: Locator;
readonly btnTCStockPositionByCurrencyButton: Locator;
readonly btnTillCashEntriesTodayButton: Locator;
readonly btnTillTCIssueEntriesTodayButton: Locator;
readonly btnTillTCBuyEntriesTodayButton: Locator;
readonly btnAccountBalancesButton: Locator;
readonly btnReversedTellerTransactionsButton: Locator;

// Teller Operations
readonly ddlTellerOperationsDropdown: Locator;

// Teller Cash
readonly ddlTellerCashDropdown: Locator;
readonly btnCashDepositLocalButton: Locator;
readonly btnCashWithdrawalLocalButton: Locator;
readonly btnCashWithdrawalLocalWithoutChequeButton: Locator;
readonly btnCashDepositLocalForeignButton: Locator;
readonly btnCashWithdrawalLocalForeignButton: Locator;
readonly btnChangeDenominationButton: Locator;
readonly btnCashDepositForeignButton: Locator;
readonly btnCashWithdrawalForeignButton: Locator;
readonly btnAuthoriseDeleteTellerCashTransactionsButton: Locator;

// Currency Exchange
readonly ddlCurrencyExchangeDropdown: Locator;
readonly btnSellFgnCcyAgainstLocalCcyButton: Locator;
readonly btnBuyFgnCcyAgainstLocalCcyButton: Locator;
readonly btnForeignCurrencyExchangeButton: Locator;
readonly btnAuthoriseDeleteCurrencyExchangeButton: Locator;
readonly btnExchangeRatesButton: Locator;

// Travellers Cheque Admin
readonly ddlTravellersChequeAdminDropdown: Locator;
readonly btnReceiptOfTCStockButton: Locator;
readonly btnReceiptOfLocalCurrencyTCStockButton: Locator;
readonly btnTransferOfStockOtherBranchesButton: Locator;
readonly btnTransferLocalCurrencyStockOtherBranchesButton: Locator;
readonly btnTCTfrFromVaultToTillSameBranchButton: Locator;
readonly btnTCStockBalanceAdminButton: Locator;

// Travellers Cheque Transactions
readonly ddlTravellersChequeTransactionsDropdown: Locator;
readonly btnSellTCAgainstCashButton: Locator;
readonly btnSellTCAgainstAccountButton: Locator;
readonly btnBuyTCAgainstCashButton: Locator;
readonly btnBuyTCAgainstAccountButton: Locator;
readonly btnSellLocalCurrencyTCAgainstCashButton: Locator;
readonly btnSellLocalCurrencyTCAgainstAccountButton: Locator;
readonly btnBuyLocalCurrencyTCAgainstCashButton: Locator;
readonly btnBuyLocalCurrencyTCAgainstAccountButton: Locator;
readonly btnAuthoriseDeleteTCTransactionsButton: Locator;

// Drafts
readonly ddlDraftsDropdown: Locator;
readonly btnIssueLCYDraftsAgainstCashButton: Locator;
readonly btnIssueLCYDraftsAgainstAccountButton: Locator;
readonly btnPaymentOfLCYDraftsByCashButton: Locator;
readonly btnPaymentOfLCYDraftsToAccountButton: Locator;
readonly btnAuthoriseDeleteDraftTransactionsButton: Locator;

// Account Transfer
readonly ddlAccountTransferDropdown: Locator;
readonly btnAccountToAccountTransferButton: Locator;
readonly btnAuthoriseDeleteAccountTransferButton: Locator;

// Passbook Printing
readonly ddlPassbookPrintingDropdown: Locator;
readonly btnUpdateAccountStatementButton: Locator;
readonly btnPrintPassbookButton: Locator;

// Teller Till Transfer
readonly ddlTellerTillTransferDropdown: Locator;
readonly btnLCYTillTransferButton: Locator;
readonly btnFCYTillTransferButton: Locator;
readonly btnTillToVaultButton: Locator;
readonly btnVaultToTillButton: Locator;

// Teller Till Administration
readonly ddlTellerTillAdministrationDropdown: Locator;
readonly btnInitiateTillClosureButton: Locator;

// Teller Enquiries
readonly ddlTellerEnquiriesDropdown: Locator;
readonly btnCashPositionbyTillButton: Locator;
readonly btnCashPositionbyCurrencyButton: Locator;
readonly btnCashPositionbyDenominationButton: Locator;
readonly btnTCStockPositionbyCurrencyButton: Locator;
readonly btnLocalDraftEnquiriesButton: Locator;
readonly btnTillCashEntriesTodayEnquiryButton: Locator;
readonly btnTillTCIssueEntriesTodayEnquiryButton: Locator;
readonly btnTillTCBuyEntriesTodayEnquiryButton: Locator;
readonly btnAccountBalancesEnquiryButton: Locator;
readonly btnReversedTellerTransactionsEnquiryButton: Locator;

// Financial Services
readonly ddlFinancialServicesDropdown: Locator;
readonly btnFindAccountFinancialServicesButton: Locator;
readonly btnCashAndChequeButton: Locator;
readonly btnMultiTillOperationsButton: Locator;
readonly btnMultiTillOperationsLcyButton: Locator;
readonly btnBillPaymentButton: Locator;
readonly btnReverseTFSTransactionButton: Locator;
readonly btnReverseTFSTransactionHistoryButton: Locator;
readonly btnAuthoriseDeleteTFSTransactionsButton: Locator;

// Draft Issue / Account Transfer (PO)
readonly ddlDraftIssueAccountTransferPODropdown: Locator;
readonly btnDraftIssueInLocalCurrencyButton: Locator;
readonly btnDraftIssueInForeignCurrencyButton: Locator;
readonly btnTransferBetweenAccountsButton: Locator;
readonly btnAuthoriseDeleteDraftAcctTrfrButton: Locator;
readonly btnTransactMirrorTRAccountButton: Locator;
readonly btnPayRetLCYDraftsInHoldRecdThroClearingButton: Locator;
readonly btnStopPaymentForDraftsButton: Locator;
readonly btnAuthoriseDeleteStopPaymentOfDraftsButton: Locator;
readonly btnRevokeStopPaymentOfDraftButton: Locator;
readonly btnAuthoriseDeleteRevokeStopPaymentOfDraftButton: Locator;
readonly btnCancellationOfLCYDraftsButton: Locator;
readonly btnAuthoriseDeleteCancellationOfLCYDraftsButton: Locator;
readonly btnViewDebitCreditAdvicesButton: Locator;

// Draft Issue Enquiries
readonly ddlDraftIssueAccountTransferEnquiriesDropdown: Locator;
readonly btnLocalDraftEnquiriesDraftIssueButton: Locator;

// Cheques
readonly ddlChequesDropdown: Locator;
readonly btnReceiptOfStockButton: Locator;
readonly btnAuthoriseDeleteReceiptOfStockButton: Locator;
readonly btnIssueChequesButton: Locator;
readonly btnUnauthorisedChequeIssueButton: Locator;
readonly btnAuthoriseDeleteIssueOfChequesButton: Locator;
readonly btnStopPaymentOfChequesButton: Locator;
readonly btnAuthoriseDeleteStopPaymentOfChequeButton: Locator;
readonly btnRevokeStopPaymentOfChequeButton: Locator;
readonly btnAuthoriseDeleteRevokePaymentStopButton: Locator;
readonly btnSendStopPaymentStatusMsgMT112Button: Locator;
readonly btnAuthoriseDeleteStatusUpdateMT112Button: Locator;
readonly btnViewMT112MsgButton: Locator;
readonly btnInputChequeReturnButton: Locator;
readonly btnChequeReturnAmendDeleteButton: Locator;
readonly btnAuthoriseChequeReturnButton: Locator;
readonly btnListOfChequeReturnButton: Locator;

// Cheques Enquiries
readonly ddlChequesEnquiriesDropdown: Locator;
readonly btnStockRegisterButton: Locator;
readonly btnChequesIssuedButton: Locator;
readonly btnChequesPresentedClearedButton: Locator;
readonly btnReturnedChequesButton: Locator;
readonly btnStoppedChequesButton: Locator;
readonly btnRevokedChequesButton: Locator;
readonly btnReversedEntriesButton: Locator;
readonly btnChequeRegisterButton: Locator;

// Debit Card
readonly ddlDebitCardDropdown: Locator;
readonly btnNewCardIssueButton: Locator;
readonly btnManageCardButton: Locator;
readonly btnAuthoriseDeleteCardIssueButton: Locator;
readonly btnDebitCardsIssuedButton: Locator;

// Cheques For Collection
readonly ddlChequesForCollectionDropdown: Locator;

// Local Cheques
readonly ddlLocalChequesDropdown: Locator;
readonly btnDepositLocalChequesDirectClearingButton: Locator;
readonly btnDepositLocalChequesIndirectClearingButton: Locator;
readonly btnAuthoriseDeleteOutwardClearingButton: Locator;
readonly btnChequeCollectionButton: Locator;
readonly btnAuthoriseDeleteChequeCollectionButton: Locator;
readonly btnChangeOutwardClearingDetailsButton: Locator;
readonly btnSettleOutwardClearingButton: Locator;
readonly btnSettleOutwardClearingReturnButton: Locator;
readonly btnChequesGermanChequeProcessingButton: Locator;
readonly btnChequesSystacChequeProcessingButton: Locator;
readonly btnChequesSrilankaChequeProcessingButton: Locator;

// Outstation Cheques
readonly ddlOutstationChequesDropdown: Locator;
readonly btnDepositOutstationChequesButton: Locator;
readonly btnAuthoriseDeleteOutstationChequesButton: Locator;
readonly btnPayReturnOutstationChequesButton: Locator;
readonly btnAuthoriseDeletePayReturnOutstationChqsButton: Locator;
readonly btnSettleOutstationChequeButton: Locator;
readonly btnSettleOutstationChequeReturnedButton: Locator;

// Foreign Cheques
readonly ddlForeignChequesDropdown: Locator;
readonly btnDepositForeignChequesButton: Locator;
readonly btnAuthoriseDeleteForeignChequesButton: Locator;
readonly btnPayReturnForeignChequesButton: Locator;
readonly btnAuthoriseDeletePayReturnForeignChqsButton: Locator;
readonly btnSettleForeignChequeCollectionButton: Locator;
readonly btnSettleForeignChequeReturnedButton: Locator;

// Cheque Deposit
readonly ddlChequeDepositDropdown: Locator;
readonly btnChequeDepositButton: Locator;

// Unauthorised Cheque Collection
readonly ddlUnauthorisedChequeCollectionDropdown: Locator;
readonly btnUnauthorisedChequeCollectionButton: Locator;

// Authorised/Delete Settlements
readonly ddlAuthorisedDeleteSettlementsDropdown: Locator;
readonly btnAuthorisedDeleteSettlementsButton: Locator;

// Cheque Collection Enquiries
readonly ddlChequeCollectionEnquiriesDropdown: Locator;
readonly btnChequeCollectionForChequeChangeButton: Locator;
readonly btnUnrealisedOutstationChequesButton: Locator;
readonly btnUnrealisedForeignChequesButton: Locator;
readonly btnChequeCollectionDetailsButton: Locator;

// Multi Currency Accounts
readonly ddlMultiCurrencyAccountsDropdown: Locator;
readonly btnFindMultiCurrencyButton: Locator;

// Deposits
readonly ddlDepositsDropdown: Locator;
readonly btnFindDepositButton: Locator;
readonly ddlDepositTransactionsDropdown: Locator;
readonly ddlDepositArrangementActivitiesPODropdown: Locator;
readonly btnAADepositFundButton: Locator;
readonly btnAAPayOutDomesticButton: Locator;
readonly btnAAPayOutInternationalButton: Locator;
readonly btnAAPartialWithdrawalButton: Locator;
readonly btnAuthoriseDeleteDepositArrangementsPOButton: Locator;
readonly ddlDepositArrangementActivitiesTTDropdown: Locator;
readonly btnAADepositFundLCYButton: Locator;
readonly btnAADepositFundFCYButton: Locator;
readonly btnAAPayOutButton: Locator;
readonly btnAAPartialWithdrawalTTButton: Locator;
readonly btnAuthoriseDeleteDepositArrangementsTTButton: Locator;
readonly btnDepositReportButton: Locator;

// Lending
readonly ddlLendingDropdown: Locator;
readonly btnFindLoanButton: Locator;
readonly ddlLoanTransactionsDropdown: Locator;
readonly ddlLendingArrangementActivitiesPODropdown: Locator;
readonly btnAADisbursementDomesticButton: Locator;
readonly btnAADisbursementInternationalButton: Locator;
readonly btnAARepaymentPOButton: Locator;
readonly btnAAAdvanceRepaymentPOButton: Locator;
readonly btnAAPayOffPOButton: Locator;
readonly btnAAPrincipalDecreaseButton: Locator;
readonly btnAACreditArrangementPOButton: Locator;
readonly btnAuthoriseDeleteLendingArrangementsPOButton: Locator;
readonly ddlLendingArrangementActivitiesTTDropdown: Locator;
readonly btnAADisbursementButton: Locator;
readonly btnAARepaymentTTButton: Locator;
readonly btnAAAdvanceRepaymentTTButton: Locator;
readonly btnAAPayOffTTButton: Locator;
readonly btnAACreditArrangementTTButton: Locator;
readonly btnUnauthorisedTellerTransactionsButton: Locator;
readonly btnAuthoriseDeleteArrangementsTTSButton: Locator;
readonly ddlAACashPoolDropdown: Locator;
readonly btnSetUpCashPoolButton: Locator;
readonly btnUnauthorisedCashPoolButton: Locator;
readonly btnAuthoriseDeleteCashPoolButton: Locator;
readonly btnReversalOfAACashPoolButton: Locator;
readonly btnViewSettlementInstructionCashPoolButton: Locator;
readonly ddlDirectDebitDropdown: Locator;
readonly btnInputDDMandateButton: Locator;
readonly btnUnauthorisedDDMandateButton: Locator;
readonly btnAuthoriseDeleteDDMandateButton: Locator;
readonly btnListDDItemsButton: Locator;
readonly btnClaimViewButton: Locator;
readonly btnLoanReportButton: Locator;
readonly btnPDOverdueItemsButton: Locator;

// Bundles
readonly ddlBundlesDropdown: Locator;
readonly btnFindBundleAccountsButton: Locator;

// Relationship Pricing
readonly ddlRelationshipPricingDropdown: Locator;
readonly btnPricingArrangementsButton: Locator;

// Agent
readonly ddlAgentDropdown: Locator;
readonly btnFindAgentsButton: Locator;
readonly ddlAgentTransactionsDropdown: Locator;
readonly ddlAgentFundingPayoutPODropdown: Locator;
readonly btnAgentCommissionPayoutButton: Locator;
readonly btnAgentCommissionPayinButton: Locator;

// Rewards
readonly ddlRewardsDropdown: Locator;
readonly btnFindRewardSchemesButton: Locator;

// Safe Deposit Box
readonly ddlSafeDepositBoxDropdown: Locator;
readonly btnFindSafeDepositBoxButton: Locator;
readonly ddlSafeDepositBoxTransactionsDropdown: Locator;
readonly ddlSafeDepositBoxArrangementActivitiesPODropdown: Locator;
readonly btnAASafeDepositBoxFundButton: Locator;
readonly btnAuthoriseDeleteSafeDepositBoxArrangementsPOButton: Locator;
readonly ddlSafeDepositBoxArrangementActivitiesTTDropdown: Locator;
readonly btnAASafeDepositBoxFundLCYButton: Locator;
readonly btnAASafeDepositBoxFundFCYButton: Locator;
readonly btnAuthoriseDeleteSafeDepositBoxArrangementsTTButton: Locator;
readonly btnSafeDepositBoxReportButton: Locator;

// Consent
readonly btnConsentButton: Locator;

// External Products
readonly ddlExternalProductsDropdown: Locator;
readonly btnFindExternalProductsButton: Locator;

// Arrangement Enquiries
readonly ddlArrangementEnquiriesDropdown: Locator;
readonly btnAccountStatementButton: Locator;
readonly btnMaturedClosedAccountsButton: Locator;
readonly btnMaturedClosedMCYAccountsButton: Locator;
readonly btnMaturedClosedDepositsButton: Locator;
readonly btnMaturedClosedLoansButton: Locator;
readonly btnMaturedClosedBundleAccountsButton: Locator;
readonly btnMaturedClosedPricingButton: Locator;
readonly btnMaturedClosedAgentsButton: Locator;
readonly btnMaturedClosedRewardSchemesButton: Locator;
readonly btnMaturedClosedSafeDepositBoxButton: Locator;
readonly btnMaturedClosedExternalProductsButton: Locator;
readonly btnAutoClosedDormantArrangementsButton: Locator;

// Loan Collections
readonly ddlLoanCollectionsDropdown: Locator;
readonly btnListOfCollectionItemsButton: Locator;
readonly ddlCollectionEnquiriesDropdown: Locator;
readonly btnDebtCollectionHistoryButton: Locator;
readonly btnCollectionItemsPerDaysInODButton: Locator;
readonly ddlLoanCollectionsReportsDropdown: Locator;
readonly btnPerformanceViewButton: Locator;
readonly btnRollForwardDelinquencyReportButton: Locator;
readonly btnRollBackwardDelinquencyReportButton: Locator;

// Facility
readonly ddlFacilityDropdown: Locator;
readonly btnFindFacilityButton: Locator;
readonly ddlFacilityTransactionsDropdown: Locator;
readonly ddlFacilityArrangementActivitiesPODropdown: Locator;
readonly btnAARepaymentFacilityButton: Locator;
readonly btnAAPayOffFacilityButton: Locator;
readonly btnAAPrincipalDecreaseFacilityButton: Locator;
readonly btnAABillsRepaymentButton: Locator;
readonly btnAuthoriseDeleteFacilityArrangementsPOButton: Locator;
readonly btnFindDealButton: Locator;
readonly btnFindDrawingsButton: Locator;

// Loan Securitisation
readonly ddlLoanSecuritisationDropdown: Locator;
readonly btnPerformAssetSaleButton: Locator;
readonly btnPerformBuyBackButton: Locator;
readonly btnPerformBulkUploadButton: Locator;
readonly btnPerformSimulationAssetSaleButton: Locator;
readonly btnPerformSimulationBuyBackButton: Locator;
readonly btnCreateAmendSecuritizationPoolButton: Locator;
readonly btnAuthoriseDeleteSecuritizationPoolButton: Locator;
readonly btnCreateBulkUploadButton: Locator;
readonly ddlAmendSubparticipantConditionsDropdown: Locator;
readonly btnAmendSkimSubparticipantButton: Locator;
readonly btnAmendChargeSubparticipantButton: Locator;
readonly ddlEnquiriesAndReportsDropdown: Locator;
readonly btnViewUnauthorisedRecordsButton: Locator;
readonly btnViewSimulatedRecordsButton: Locator;
readonly btnParticipantsOfThePoolButton: Locator;
readonly btnSecuritizedLoansByInvestorButton: Locator;
readonly btnSecuritizedLoansByPoolButton: Locator;
readonly btnSecuritizedLoansSummaryButton: Locator;
readonly btnBulkUploadExceptionsButton: Locator;
readonly btnViewSecuritisationPoolRecordsButton: Locator;


constructor(page: Page) {
    super(page);
    this.page = page;

// Retail Operations
this.ddlRetailOperationsDropdown = page.locator('//span[text()=" Retail Operations "]');
this.btnProductCatalogButton = page.locator('//a[text()=" Product Catalog "]');
this.btnExternalProductCatalogButton = page.locator('//a[text()=" External Product Catalog "]');
this.btnFindCustomerButton = page.locator('//a[text()=" Find Customer "]');
this.btnUnauthorizedAAARecordsButton = page.locator('//a[text()=" Unauthorized AAA records "]');

// Accounts
this.ddlAccountsDropdown = page.locator('//span[text()=" Accounts "]');
this.btnFindAccountButton = page.locator('//a[text()=" Find Account "]');

// Account Transactions
this.ddlAccountTransactionsDropdown = page.locator('//span[text()=" Account Transactions "]');

// Teller
this.ddlTellerDropdown = page.locator('//span[text()=" Teller "]');

// Head Teller Operations
this.ddlHeadTellerOperationsDropdown = page.locator('//span[text()=" Head Teller Operations "]');

// Till Administration
this.ddlHeadTellerTillAdministrationDropdown = page.locator('//span[text()=" Till Administration "]');
this.btnCreateNewTillButton = page.locator('//a[text()=" Create New Till "]');
this.btnChangeTillUserButton = page.locator('//a[text()=" Change Till User "]');
this.btnReopenTellerButton = page.locator('//a[text()=" Reopen Teller "]');
this.btnAuthoriseDeleteTillClosureButton = page.locator('//a[text()=" Authorise/Delete Till Closure "]');

// Till Transfer
this.ddlHeadTellerTillTransferDropdown = page.locator('//span[text()=" Till Transfer "]');
this.btnAuthoriseDeleteTillTransferButton = page.locator('//a[text()=" Authorise/Delete Till Transfer "]');

// Travellers Cheque
this.ddlHeadTellerTravellersChequeDropdown = page.locator('//span[text()=" Travellers Cheque "]');

// Teller Internal Account Menu
this.ddlTellerInternalAccountMenuDropdown = page.locator('//span[text()=" Teller Internal Account Menu "]');
this.btnCreateAmendInternalAccountButton = page.locator('//a[text()=" Create/Amend Internal Account "]');
this.btnAuthoriseDeleteInternalAccountsButton = page.locator('//a[text()=" Authorise/Delete Internal Accounts "]');
this.btnAuthoriseDeleteTCStockTransactionsButton = page.locator('//a[text()=" Authorise/Delete TC Stock Transactions "]');
this.btnTCStockBalanceButton = page.locator('//a[text()=" TC Stock Balance "]');
this.btnAuthoriseDeleteNostroFundingButton = page.locator('//a[text()=" Authorise/Delete Nostro Funding "]');

// Head Teller Enquiries
this.ddlHeadTellerEnquiriesDropdown = page.locator('//span[text()=" Enquiries "]');
this.btnCashPositionByTillButton = page.locator('//a[text()=" Cash Position by Till "]');
this.btnCashPositionByCurrencyButton = page.locator('//a[text()=" Cash Position by Currency "]');
this.btnCashPositionByDenominationButton = page.locator('//a[text()=" Cash Position by Denomination "]');
this.btnListOfCashOverragesButton = page.locator('//a[text()=" List of Cash Overrages "]');
this.btnListOfCashShortagesButton = page.locator('//a[text()=" List of Cash Shortages "]');
this.btnTCStockPositionByCurrencyButton = page.locator('//a[text()=" TC Stock Position by Currency "]');
this.btnTillCashEntriesTodayButton = page.locator('//a[text()=" Till Cash Entries Today "]');
this.btnTillTCIssueEntriesTodayButton = page.locator('//a[text()=" Till TC Issue Entries Today "]');
this.btnTillTCBuyEntriesTodayButton = page.locator('//a[text()=" Till TC Buy Entries Today "]');
this.btnAccountBalancesButton = page.locator('//a[text()=" Account Balances "]');
this.btnReversedTellerTransactionsButton = page.locator('//a[text()=" Reversed Teller Transactions "]');

// Teller Operations
this.ddlTellerOperationsDropdown = page.locator('//span[text()=" Teller Operations "]');

// Teller Cash
this.ddlTellerCashDropdown = page.locator('//span[text()=" Teller Cash "]');
this.btnCashDepositLocalButton = page.locator('//a[text()=" Cash deposit Local "]');
this.btnCashWithdrawalLocalButton = page.locator('//a[text()=" Cash withdrawal Local "]');
this.btnCashWithdrawalLocalWithoutChequeButton = page.locator('//a[text()=" Cash withdrawal Local (Without Cheque) "]');
this.btnCashDepositLocalForeignButton = page.locator('//a[text()=" Cash Deposit Local - Foreign "]');
this.btnCashWithdrawalLocalForeignButton = page.locator('//a[text()=" Cash withdrawal Local- Foreign "]');
this.btnChangeDenominationButton = page.locator('//a[text()=" Change Denomination "]');
this.btnCashDepositForeignButton = page.locator('//a[text()=" Cash deposit Foreign "]');
this.btnCashWithdrawalForeignButton = page.locator('//a[text()=" Cash withdrawal Foreign "]');
this.btnAuthoriseDeleteTellerCashTransactionsButton = page.locator('//a[text()=" Authorise/Delete Teller Cash Transactions "]');

// Currency Exchange
this.ddlCurrencyExchangeDropdown = page.locator('//span[text()=" Currency Exchange "]');
this.btnSellFgnCcyAgainstLocalCcyButton = page.locator('//a[text()=" Sell Fgn Ccy against Local Ccy "]');
this.btnBuyFgnCcyAgainstLocalCcyButton = page.locator('//a[text()=" Buy Fgn Ccy against Local Ccy "]');
this.btnForeignCurrencyExchangeButton = page.locator('//a[text()=" Foreign Currency Exchange "]');
this.btnAuthoriseDeleteCurrencyExchangeButton = page.locator('//a[text()=" Authorise/Delete Currency Exchange "]');
this.btnExchangeRatesButton = page.locator('//a[text()=" Exchange Rates "]');

// Travellers Cheque Admin
this.ddlTravellersChequeAdminDropdown = page.locator('//span[text()=" Travellers Cheque Admin "]');
this.btnReceiptOfTCStockButton = page.locator('//a[text()=" Receipt of TC Stock "]');
this.btnReceiptOfLocalCurrencyTCStockButton = page.locator('//a[text()=" Receipt of Local currency TC Stock "]');
this.btnTransferOfStockOtherBranchesButton = page.locator('//a[text()=" Transfer of Stock - Other Branches "]');
this.btnTransferLocalCurrencyStockOtherBranchesButton = page.locator('//a[text()=" Transfer Local currency Stock -Other Branches "]');
this.btnTCTfrFromVaultToTillSameBranchButton = page.locator('//a[text()=" TC Tfr from Vault to Till - Same Branch "]');
this.btnTCStockBalanceAdminButton = page.locator('//a[text()=" TC Stock Balance "]');

// Travellers Cheque Transactions
this.ddlTravellersChequeTransactionsDropdown = page.locator('//span[text()=" Travellers Cheque "]');
this.btnSellTCAgainstCashButton = page.locator('//a[text()=" Sell TC\'s against Cash "]');
this.btnSellTCAgainstAccountButton = page.locator('//a[text()=" Sell TC\'s against Account "]');
this.btnBuyTCAgainstCashButton = page.locator('//a[text()=" Buy TC\'s against Cash "]');
this.btnBuyTCAgainstAccountButton = page.locator('//a[text()=" Buy TC\'s against Account "]');
this.btnSellLocalCurrencyTCAgainstCashButton = page.locator('//a[text()=" Sell Local Currency TCs against Cash "]');
this.btnSellLocalCurrencyTCAgainstAccountButton = page.locator('//a[text()=" Sell Local Currency TCs against Account "]');
this.btnBuyLocalCurrencyTCAgainstCashButton = page.locator('//a[text()=" Buy Local Currency TCs against Cash "]');
this.btnBuyLocalCurrencyTCAgainstAccountButton = page.locator('//a[text()=" Buy Local Currency TCs Against Account "]');
this.btnAuthoriseDeleteTCTransactionsButton = page.locator('//a[text()=" Authorise/Delete TC Transactions "]');

// Drafts
this.ddlDraftsDropdown = page.locator('//span[text()=" Drafts "]');
this.btnIssueLCYDraftsAgainstCashButton = page.locator('//a[text()=" Issue LCY Drafts against Cash "]');
this.btnIssueLCYDraftsAgainstAccountButton = page.locator('//a[text()=" Issue LCY Drafts against Account "]');
this.btnPaymentOfLCYDraftsByCashButton = page.locator('//a[text()=" Payment of LCY Drafts by Cash "]');
this.btnPaymentOfLCYDraftsToAccountButton = page.locator('//a[text()=" Payment of LCY Drafts to Account "]');
this.btnAuthoriseDeleteDraftTransactionsButton = page.locator('//a[text()=" Authorise/Delete Draft Transactions "]');

// Account Transfer
this.ddlAccountTransferDropdown = page.locator('//span[text()=" Account Transfer "]');
this.btnAccountToAccountTransferButton = page.locator('//a[text()=" Account to Account Transfer "]');
this.btnAuthoriseDeleteAccountTransferButton = page.locator('//a[text()=" Authorise/Delete Account Transfer "]');

// Passbook Printing
this.ddlPassbookPrintingDropdown = page.locator('//span[text()=" Passbook Printing "]');
this.btnUpdateAccountStatementButton = page.locator('//a[text()=" Update Account Statement "]');
this.btnPrintPassbookButton = page.locator('//a[text()=" Print Passbook "]');

// Teller Till Transfer
this.ddlTellerTillTransferDropdown = page.locator('//span[text()=" Till Transfer "]');
this.btnLCYTillTransferButton = page.locator('//a[text()=" LCY Till Transfer "]');
this.btnFCYTillTransferButton = page.locator('//a[text()=" FCY Till Transfer "]');
this.btnTillToVaultButton = page.locator('//a[text()=" Till to Vault "]');
this.btnVaultToTillButton = page.locator('//a[text()=" Vault to Till "]');

// Teller Till Administration
this.ddlTellerTillAdministrationDropdown = page.locator('//span[text()=" Till Administration "]');
this.btnInitiateTillClosureButton = page.locator('//a[text()=" Initiate Till Closure "]');

// Teller Enquiries
this.ddlTellerEnquiriesDropdown = page.locator('//span[text()=" Enquiries "]');
this.btnCashPositionbyTillButton = page.locator('//a[text()=" Cash Position by Till"]');
this.btnCashPositionbyCurrencyButton = page.locator('//a[text()=" Cash Position by Currency"]');
this.btnCashPositionbyDenominationButton = page.locator('//a[text()=" Cash Position by Denomination"]');
this.btnTCStockPositionbyCurrencyButton = page.locator('//a[text()=" TC Stock Position by Currency "]');
this.btnLocalDraftEnquiriesButton = page.locator('//a[text()=" Local Draft Enquiries"]');
this.btnTillCashEntriesTodayEnquiryButton = page.locator('//a[text()="Till Cash Entries Today"]');
this.btnTillTCIssueEntriesTodayEnquiryButton = page.locator('//a[text()="Till TC Issue Entries  Today"]');
this.btnTillTCBuyEntriesTodayEnquiryButton = page.locator('//a[text()="Till TC Buy Entries Today"]');
this.btnAccountBalancesEnquiryButton = page.locator('//a[text()="Account Balances"]');
this.btnReversedTellerTransactionsEnquiryButton = page.locator('//a[text()="Reversed Teller Transactions"]');

// Financial Services
this.ddlFinancialServicesDropdown = page.locator('//span[text()="Financial Services "]');
this.btnFindAccountFinancialServicesButton = page.locator('//a[text()="Find Account "]');
this.btnCashAndChequeButton = page.locator('//a[text()="Cash and Cheque "]');
this.btnMultiTillOperationsButton = page.locator('//a[text()="Multi Till Operations "]');
this.btnMultiTillOperationsLcyButton = page.locator('//a[text()="Multi Till Operations - Lcy "]');
this.btnBillPaymentButton = page.locator('//a[text()="Bill Payment "]');
this.btnReverseTFSTransactionButton = page.locator('//a[text()="Reverse TFS Transaction "]');
this.btnReverseTFSTransactionHistoryButton = page.locator('//a[text()="Reverse TFS Transaction - History "]');
this.btnAuthoriseDeleteTFSTransactionsButton = page.locator('//a[text()="Authorise/Delete TFS Transactions "]');

// Draft Issue / Account Transfer (PO)
this.ddlDraftIssueAccountTransferPODropdown = page.locator('//span[text()="Draft Issue/Account Transfer (PO)"]');
this.btnDraftIssueInLocalCurrencyButton = page.locator('//a[text()=" Draft Issue in Local Currency "]');
this.btnDraftIssueInForeignCurrencyButton = page.locator('//a[text()=" Draft Issue in Foreign Currency "]');
this.btnTransferBetweenAccountsButton = page.locator('//a[text()=" Transfer between  Accounts "]');
this.btnAuthoriseDeleteDraftAcctTrfrButton = page.locator('//a[text()=" Authorise/Delete Draft/Acct Trft "]');
this.btnTransactMirrorTRAccountButton = page.locator('//a[text()=" Transact – Mirror TR Account "]');
this.btnPayRetLCYDraftsInHoldRecdThroClearingButton = page.locator('//a[text()=" Pay/Ret LCY Drafts in Hold recd thro Clearing "]');
this.btnStopPaymentForDraftsButton = page.locator('//a[text()=" Stop Payment for Drafts "]');
this.btnAuthoriseDeleteStopPaymentOfDraftsButton = page.locator('//a[text()=" Authorise/Delete Stop payment of drafts"]');
this.btnRevokeStopPaymentOfDraftButton = page.locator('//a[text()="Revoke Stop Payment of Draft"]');
this.btnAuthoriseDeleteRevokeStopPaymentOfDraftButton = page.locator('//a[text()=" Authorise/Delete Revoke Stop Payment of Draft"]');
this.btnCancellationOfLCYDraftsButton = page.locator('//a[text()=" Cancellation of LCY Drafts"]');
this.btnAuthoriseDeleteCancellationOfLCYDraftsButton = page.locator('//a[text()=" Authorise/Delete Cancellation of LCY Drafts"]');
this.btnViewDebitCreditAdvicesButton = page.locator('//a[text()="View Debit/Credit Advices"]');

// Draft Issue Enquiries
this.ddlDraftIssueAccountTransferEnquiriesDropdown = page.locator('//span[text()="Enquiries"]');
this.btnLocalDraftEnquiriesDraftIssueButton = page.locator('//a[text()=" Local Draft Enquiries"]');

// Cheques
this.ddlChequesDropdown = page.locator('//span[text()="Cheques"]');
this.btnReceiptOfStockButton = page.locator('//a[text()="Receipt of Stock"]');
this.btnAuthoriseDeleteReceiptOfStockButton = page.locator('//a[text()="Authorise / Delete Receipt of Stock "]');
this.btnIssueChequesButton = page.locator('//a[text()="Issue Cheques"]');
this.btnUnauthorisedChequeIssueButton = page.locator('//a[text()="Unauthorised Cheque Issue"]');
this.btnAuthoriseDeleteIssueOfChequesButton = page.locator('//a[text()="Authorise /Delete Issue of Cheques"]');
this.btnStopPaymentOfChequesButton = page.locator('//a[text()="Stop Payment of Cheques"]');
this.btnAuthoriseDeleteStopPaymentOfChequeButton = page.locator('//a[text()="Authorise/Delete Stop Payment of Cheque"]');
this.btnRevokeStopPaymentOfChequeButton = page.locator('//a[text()="Revoke Stop Payment of Cheque"]');
this.btnAuthoriseDeleteRevokePaymentStopButton = page.locator('//a[text()="Authorise/Delete Revoke Payment Stop"]');
this.btnSendStopPaymentStatusMsgMT112Button = page.locator('//a[text()="Send Stop Payment Status Msg-MT112"]');
this.btnAuthoriseDeleteStatusUpdateMT112Button = page.locator('//a[text()="Authorise/Delete Status Update-MT112"]');
this.btnViewMT112MsgButton = page.locator('//a[text()="View MT112 Msg"]');
this.btnInputChequeReturnButton = page.locator('//a[text()="Input Cheque Return"]');
this.btnChequeReturnAmendDeleteButton = page.locator('//a[text()="Cheque Return Amend/Delete"]');
this.btnAuthoriseChequeReturnButton = page.locator('//a[text()="Authorise Cheque Return"]');
this.btnListOfChequeReturnButton = page.locator('//a[text()="List of Cheque Return"]');

// Cheques Enquiries
this.ddlChequesEnquiriesDropdown = page.locator('//span[text()="Enquiries"]');
this.btnStockRegisterButton = page.locator('//a[text()="Stock Register"]');
this.btnChequesIssuedButton = page.locator('//a[text()="Cheques Issued"]');
this.btnChequesPresentedClearedButton = page.locator('//a[text()="Cheques Presented/Cleared"]');
this.btnReturnedChequesButton = page.locator('//a[text()="Returned Cheques"]');
this.btnStoppedChequesButton = page.locator('//a[text()="Stopped Cheques"]');
this.btnRevokedChequesButton = page.locator('//a[text()="Revoke Cheques"]');
this.btnReversedEntriesButton = page.locator('//a[text()="Reversed Entries"]');
this.btnChequeRegisterButton = page.locator('//a[text()="Cheque Register"]');

// Debit Card
this.ddlDebitCardDropdown = page.locator('//span[text()="Debit Card"]');
this.btnNewCardIssueButton = page.locator('//a[text()="New Card Issue"]');
this.btnManageCardButton = page.locator('//a[text()="Manage Card"]');
this.btnAuthoriseDeleteCardIssueButton = page.locator('//a[text()="Authorise/Delete Card Issue"]');
this.btnDebitCardsIssuedButton = page.locator('//a[text()="Debit Cards Issued"]');

// Cheques For Collection
this.ddlChequesForCollectionDropdown = page.locator('//span[text()="Cheques for collection"]');

// Local Cheques
this.ddlLocalChequesDropdown = page.locator('//span[text()="Local Cheques"]');
this.btnDepositLocalChequesDirectClearingButton = page.locator('//a[text()=" Deposit Local Cheques – Direct Clearing "]');
this.btnDepositLocalChequesIndirectClearingButton = page.locator('//a[text()=" Deposit Local Cheques – Indirect Clearing "]');
this.btnAuthoriseDeleteOutwardClearingButton = page.locator('//a[text()=" Authorise/Delete Outward Clearing "]');
this.btnChequeCollectionButton = page.locator('//a[text()=" Cheque Collection "]');
this.btnAuthoriseDeleteChequeCollectionButton = page.locator('//a[text()=" Authorise/Delete Cheque Collection"]');
this.btnChangeOutwardClearingDetailsButton = page.locator('//a[text()=" Change Outward Clearing Details "]');
this.btnSettleOutwardClearingButton = page.locator('//a[text()=" Settle Outward Clearing "]');
this.btnSettleOutwardClearingReturnButton = page.locator('//a[text()=" Settle Outward Clearing Return "]');
this.btnChequesGermanChequeProcessingButton = page.locator('//a[text()=" Cheques – German Cheque Processing"]');
this.btnChequesSystacChequeProcessingButton = page.locator('//a[text()=" Cheques – Systac Cheque Processing"]');
this.btnChequesSrilankaChequeProcessingButton = page.locator('//a[text()=" Cheques - Srilanka Cheque Processing"]');

// Outstation Cheques
this.ddlOutstationChequesDropdown = page.locator('//span[text()="Outstation Cheques"]');
this.btnDepositOutstationChequesButton = page.locator('//a[text()="Deposit Outstation Cheques"]');
this.btnAuthoriseDeleteOutstationChequesButton = page.locator('//a[text()="Authorise/Delete Outstation Cheques"]');
this.btnPayReturnOutstationChequesButton = page.locator('//a[text()=" Pay / Return Outstation Cheques "]');
this.btnAuthoriseDeletePayReturnOutstationChqsButton = page.locator('//a[text()="Authorise/Delete Pay/Return Outstation Chqs"]');
this.btnSettleOutstationChequeButton = page.locator('//a[text()="Settle Outstation Cheque "]');
this.btnSettleOutstationChequeReturnedButton = page.locator('//a[text()=" Settle Outstation Cheque Returned "]');

// Foreign Cheques
this.ddlForeignChequesDropdown = page.locator('//span[text()="Outstation Cheques"]');
this.btnDepositForeignChequesButton = page.locator('//a[text()="Deposit Foreign Cheques"]');
this.btnAuthoriseDeleteForeignChequesButton = page.locator('//a[text()="Authorise/Delete Foreign Cheques"]');
this.btnPayReturnForeignChequesButton = page.locator('//a[text()=" Pay / Return Foreign Cheques "]');
this.btnAuthoriseDeletePayReturnForeignChqsButton = page.locator('//a[text()="Authorise/Delete Pay/Return Foreign Chqs"]');
this.btnSettleForeignChequeCollectionButton = page.locator('//a[text()="Settle Foreign Cheque Collection"]');
this.btnSettleForeignChequeReturnedButton = page.locator('//a[text()=" Settle Foreign Cheque Returned "]');

// Cheque Deposit
this.ddlChequeDepositDropdown = page.locator('//span[text()=" Cheque Deposit "]');
this.btnChequeDepositButton = page.locator('//a[text()=" Cheque Deposit "]');

// Unauthorised Cheque Collection
this.ddlUnauthorisedChequeCollectionDropdown = page.locator('//span[text()=" Unauthorised Cheque Collection "]');
this.btnUnauthorisedChequeCollectionButton = page.locator('//a[text()=" Unauthorised Cheque Collection "]');

// Authorised/Delete Settlements
this.ddlAuthorisedDeleteSettlementsDropdown = page.locator('//span[text()=" Authorised/Delete Settlements "]');
this.btnAuthorisedDeleteSettlementsButton = page.locator('//a[text()=" Authorised/Delete Settlements "]');

// Cheque Collection Enquiries
this.ddlChequeCollectionEnquiriesDropdown = page.locator('//span[text()=" Enquiries "]');
this.btnChequeCollectionForChequeChangeButton = page.locator('//a[text()=" Cheque Collection for Cheque Change "]');
this.btnUnrealisedOutstationChequesButton = page.locator('//a[text()=" Unrealised Outstation Cheques "]');
this.btnUnrealisedForeignChequesButton = page.locator('//a[text()=" Unrealised Foreign Cheques "]');
this.btnChequeCollectionDetailsButton = page.locator('//a[text()=" Cheque Collection Details "]');

// Multi Currency Accounts
this.ddlMultiCurrencyAccountsDropdown = page.locator('//span[text()=" Multi Currency Accounts "]');
this.btnFindMultiCurrencyButton = page.locator('//a[text()=" Find Multi Currency "]');

// Deposits
this.ddlDepositsDropdown = page.locator('//span[text()=" Deposits "]');
this.btnFindDepositButton = page.locator('//a[text()=" Find Deposit "]');

// Deposit Transactions
this.ddlDepositTransactionsDropdown = page.locator('//span[text()=" Deposit Transactions "]');

// Deposit Arrangement Activities (PO)
this.ddlDepositArrangementActivitiesPODropdown = page.locator('//span[text()=" Arrangement Activities (PO) "]');
this.btnAADepositFundButton = page.locator('//a[text()=" AA Deposit - Fund "]');
this.btnAAPayOutDomesticButton = page.locator('//a[text()=" AA Pay-out-Domestic "]');
this.btnAAPayOutInternationalButton = page.locator('//a[text()=" AA Pay-out-International "]');
this.btnAAPartialWithdrawalButton = page.locator('//a[text()=" AA Partial Withdrawal "]');
this.btnAuthoriseDeleteDepositArrangementsPOButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Deposit Arrangement Activities (TT)
this.ddlDepositArrangementActivitiesTTDropdown = page.locator('//span[text()=" Arrangement Activities (TT) "]');
this.btnAADepositFundLCYButton = page.locator('//a[text()=" AA Deposit - Fund(LCY) "]');
this.btnAADepositFundFCYButton = page.locator('//a[text()=" AA Deposit - Fund(FCY) "]');
this.btnAAPayOutButton = page.locator('//a[text()=" AA Pay-out "]');
this.btnAAPartialWithdrawalTTButton = page.locator('//a[text()=" AA Partial Withdrawal "]');
this.btnAuthoriseDeleteDepositArrangementsTTButton = page.locator('//a[text()=" Authorise/Delete Arrangements (TT) "]');

this.btnDepositReportButton = page.locator('//a[text()=" Deposit Report "]');

// Lending
this.ddlLendingDropdown = page.locator('//span[text()=" Lending "]');
this.btnFindLoanButton = page.locator('//a[text()=" Find Loan "]');

// Loan Transactions
this.ddlLoanTransactionsDropdown = page.locator('//span[text()=" Loan Transactions "]');

// Lending Arrangement Activities (PO)
this.ddlLendingArrangementActivitiesPODropdown = page.locator('//span[text()=" Arrangement Activities (PO) "]');
this.btnAADisbursementDomesticButton = page.locator('//a[text()=" AA Disbursement Domestic "]');
this.btnAADisbursementInternationalButton = page.locator('//a[text()=" AA Disbursement International "]');
this.btnAARepaymentPOButton = page.locator('//a[text()=" AA Repayment "]');
this.btnAAAdvanceRepaymentPOButton = page.locator('//a[text()=" AA Advance Repayment "]');
this.btnAAPayOffPOButton = page.locator('//a[text()=" AA Pay-off "]');
this.btnAAPrincipalDecreaseButton = page.locator('//a[text()=" AA Principal Decrease "]');
this.btnAACreditArrangementPOButton = page.locator('//a[text()=" AA Credit Arrangement "]');
this.btnAuthoriseDeleteLendingArrangementsPOButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Lending Arrangement Activities (TT)
this.ddlLendingArrangementActivitiesTTDropdown = page.locator('//span[text()=" Arrangement Activities (TT) "]');
this.btnAADisbursementButton = page.locator('//a[text()=" AA Disbursement "]');
this.btnAARepaymentTTButton = page.locator('//a[text()=" AA Repayment "]');
this.btnAAAdvanceRepaymentTTButton = page.locator('//a[text()=" AA Advance Repayment "]');
this.btnAAPayOffTTButton = page.locator('//a[text()=" AA Pay-off "]');
this.btnAACreditArrangementTTButton = page.locator('//a[text()=" AA Credit Arrangement "]');
this.btnUnauthorisedTellerTransactionsButton = page.locator('//a[text()=" Unauthorised Teller Transactions "]');
this.btnAuthoriseDeleteArrangementsTTSButton = page.locator('//a[text()=" Authorise/Delete Arrangements (TT)S "]');

// AA Cash Pool
this.ddlAACashPoolDropdown = page.locator('//span[text()=" AA Cash Pool "]');
this.btnSetUpCashPoolButton = page.locator('//a[text()=" Set up Cash Pool "]');
this.btnUnauthorisedCashPoolButton = page.locator('//a[text()=" Unauthorised Cash Pool "]');
this.btnAuthoriseDeleteCashPoolButton = page.locator('//a[text()=" Authorise/Delete Cash Pool "]');
this.btnReversalOfAACashPoolButton = page.locator('//a[text()=" Reversal of AA Cash Pool "]');
this.btnViewSettlementInstructionCashPoolButton = page.locator('//a[text()=" View Settlement Instruction(Cash Pool) "]');

// Direct Debit
this.ddlDirectDebitDropdown = page.locator('//span[text()=" Direct Debit "]');
this.btnInputDDMandateButton = page.locator('//a[text()=" Input DD Mandate "]');
this.btnUnauthorisedDDMandateButton = page.locator('//a[text()=" Unauthorised DD Mandate "]');
this.btnAuthoriseDeleteDDMandateButton = page.locator('//a[text()=" Authorise/Delete DD Mandate "]');
this.btnListDDItemsButton = page.locator('//a[text()=" List DD Items "]');
this.btnClaimViewButton = page.locator('//a[text()=" Claim View "]');

this.btnLoanReportButton = page.locator('//a[text()=" Loan Report "]');
this.btnPDOverdueItemsButton = page.locator('//a[text()=" PD Overdue Items "]');

// Bundles
this.ddlBundlesDropdown = page.locator('//span[text()=" Bundles "]');
this.btnFindBundleAccountsButton = page.locator('//a[text()=" Find Bundle Accounts "]');

// Relationship Pricing
this.ddlRelationshipPricingDropdown = page.locator('//span[text()=" Relationship Pricing "]');
this.btnPricingArrangementsButton = page.locator('//a[text()=" Pricing Arrangements "]');

// Agent
this.ddlAgentDropdown = page.locator('//span[text()=" Agent "]');
this.btnFindAgentsButton = page.locator('//a[text()=" Find Agents "]');

// Agent Transactions
this.ddlAgentTransactionsDropdown = page.locator('//span[text()=" Agent Transactions "]');

// Agent Funding/Payout (PO)
this.ddlAgentFundingPayoutPODropdown = page.locator('//span[text()=" Agent Funding/Payout (PO) "]');
this.btnAgentCommissionPayoutButton = page.locator('//a[text()=" Agent Commission Payout "]');
this.btnAgentCommissionPayinButton = page.locator('//a[text()=" Agent Commission Payin "]');

// Rewards
this.ddlRewardsDropdown = page.locator('//span[text()=" Rewards "]');
this.btnFindRewardSchemesButton = page.locator('//a[text()=" Find Reward Schemes "]');

// Safe Deposit Box
this.ddlSafeDepositBoxDropdown = page.locator('//span[text()=" Safe Deposit Box "]');
this.btnFindSafeDepositBoxButton = page.locator('//a[text()=" Find Safe Deposit Box "]');

// Safe Deposit Box Transactions
this.ddlSafeDepositBoxTransactionsDropdown = page.locator('//span[text()=" Safe Deposit Box Transactions "]');

// Safe Deposit Box Arrangement Activities (PO)
this.ddlSafeDepositBoxArrangementActivitiesPODropdown = page.locator('//span[text()=" Arrangement Activities (PO) "]');
this.btnAASafeDepositBoxFundButton = page.locator('//a[text()=" AA Safe Deposit Box - Fund "]');
this.btnAuthoriseDeleteSafeDepositBoxArrangementsPOButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

// Safe Deposit Box Arrangement Activities (TT)
this.ddlSafeDepositBoxArrangementActivitiesTTDropdown = page.locator('//span[text()=" Arrangement Activities (TT) "]');
this.btnAASafeDepositBoxFundLCYButton = page.locator('//a[text()=" AA Safe Deposit Box - Fund(LCY) "]');
this.btnAASafeDepositBoxFundFCYButton = page.locator('//a[text()=" AA Safe Deposit Box - Fund(FCY) "]');
this.btnAuthoriseDeleteSafeDepositBoxArrangementsTTButton = page.locator('//a[text()=" Authorise/Delete Arrangements (TT) "]');

this.btnSafeDepositBoxReportButton = page.locator('//a[text()=" Safe Deposit Box Report "]');

// Consent
this.btnConsentButton = page.locator('//a[text()=" Consent "]');

// External Products
this.ddlExternalProductsDropdown = page.locator('//span[text()=" Externals Products "]');
this.btnFindExternalProductsButton = page.locator('//a[text()=" Find External Products "]');

// Arrangement Enquiries
this.ddlArrangementEnquiriesDropdown = page.locator('//span[text()=" Arrangement Enquires "]');
this.btnAccountStatementButton = page.locator('//a[text()=" Account Statement "]');
this.btnMaturedClosedAccountsButton = page.locator('//a[text()=" Matured/Closed Accounts "]');
this.btnMaturedClosedMCYAccountsButton = page.locator('//a[text()=" Matured/Closed MCY Accounts "]');
this.btnMaturedClosedDepositsButton = page.locator('//a[text()=" Matured/Closed Deposits "]');
this.btnMaturedClosedLoansButton = page.locator('//a[text()=" Matured/Closed Loans "]');
this.btnMaturedClosedBundleAccountsButton = page.locator('//a[text()=" Matured/Closed Bundle Accounts "]');
this.btnMaturedClosedPricingButton = page.locator('//a[text()=" Matured/Closed Pricing "]');
this.btnMaturedClosedAgentsButton = page.locator('//a[text()=" Matured/Closed Agents "]');
this.btnMaturedClosedRewardSchemesButton = page.locator('//a[text()=" Matured/Closed Reward Schemes "]');
this.btnMaturedClosedSafeDepositBoxButton = page.locator('//a[text()=" Matured/Closed Safe Deposit Box "]');
this.btnMaturedClosedExternalProductsButton = page.locator('//a[text()=" Matured/Closed External Products "]');
this.btnAutoClosedDormantArrangementsButton = page.locator('//a[text()=" Auto Closed Dormant Arrangements "]');

// Loan Collections
this.ddlLoanCollectionsDropdown = page.locator('//span[text()=" Loan Collections "]');
this.btnListOfCollectionItemsButton = page.locator('//a[text()=" List of Collection Items "]');

// Collection Enquiries
this.ddlCollectionEnquiriesDropdown = page.locator('//span[text()=" Collection Enquiries "]');
this.btnDebtCollectionHistoryButton = page.locator('//a[text()=" Debt Collection History "]');
this.btnCollectionItemsPerDaysInODButton = page.locator('//a[text()=" Collection Items per Days in OD "]');

// Reports
this.ddlLoanCollectionsReportsDropdown = page.locator('//span[text()=" Reports "]');
this.btnPerformanceViewButton = page.locator('//a[text()=" Performance View "]');
this.btnRollForwardDelinquencyReportButton = page.locator('//a[text()=" Roll Forward Delinquency Report "]');
this.btnRollBackwardDelinquencyReportButton = page.locator('//a[text()=" Roll backward Delinquency Report "]');

// Facility
this.ddlFacilityDropdown = page.locator('//span[text()=" Facility "]');
this.btnFindFacilityButton = page.locator('//a[text()=" Find Facility "]');

// Facility Transactions
this.ddlFacilityTransactionsDropdown = page.locator('//span[text()=" Facility Transactions "]');

// Facility Arrangement Activities (PO)
this.ddlFacilityArrangementActivitiesPODropdown = page.locator('//span[text()=" Arrangement Activities (PO) "]');
this.btnAARepaymentFacilityButton = page.locator('//a[text()=" AA Repayment "]');
this.btnAAPayOffFacilityButton = page.locator('//a[text()=" AA Pay-off "]');
this.btnAAPrincipalDecreaseFacilityButton = page.locator('//a[text()=" AA Principal Decrease "]');
this.btnAABillsRepaymentButton = page.locator('//a[text()=" AA Bills Repayment "]');
this.btnAuthoriseDeleteFacilityArrangementsPOButton = page.locator('//a[text()=" Authorise/Delete Arrangements (PO) "]');

this.btnFindDealButton = page.locator('//a[text()=" Find Deal "]');
this.btnFindDrawingsButton = page.locator('//a[text()=" Find Drawings "]');

// Loan Securitisation
this.ddlLoanSecuritisationDropdown = page.locator('//span[text()=" Loan Securitisation "]');
this.btnPerformAssetSaleButton = page.locator('//a[text()=" Perform Asset Sale "]');
this.btnPerformBuyBackButton = page.locator('//a[text()=" Perform Buy Back "]');
this.btnPerformBulkUploadButton = page.locator('//a[text()=" Perform Bulk Upload "]');
this.btnPerformSimulationAssetSaleButton = page.locator('//a[text()=" Perform Simulation Asset Sale "]');
this.btnPerformSimulationBuyBackButton = page.locator('//a[text()=" Perform Simulation Buy Back "]');
this.btnCreateAmendSecuritizationPoolButton = page.locator('//a[text()=" Create/Amend Securitization Pool "]');
this.btnAuthoriseDeleteSecuritizationPoolButton = page.locator('//a[text()=" Authorise/Delete Securitization Pool "]');
this.btnCreateBulkUploadButton = page.locator('//a[text()=" Create Bulk Upload "]');

// Amend Subparticipant Conditions
this.ddlAmendSubparticipantConditionsDropdown = page.locator('//span[text()=" Amend Subparticipant Conditions "]');
this.btnAmendSkimSubparticipantButton = page.locator('//a[text()=" Amend Skim Subparticipant "]');
this.btnAmendChargeSubparticipantButton = page.locator('//a[text()=" Amend Charge Subparticipant "]');

// Enquiries And Reports
this.ddlEnquiriesAndReportsDropdown = page.locator('//span[text()=" Enquiries and Reports "]');
this.btnViewUnauthorisedRecordsButton = page.locator('//a[text()=" View Unauthorised Records "]');
this.btnViewSimulatedRecordsButton = page.locator('//a[text()=" View Simulated Records "]');
this.btnParticipantsOfThePoolButton = page.locator('//a[text()=" Participants of the Pool "]');
this.btnSecuritizedLoansByInvestorButton = page.locator('//a[text()=" Securitized Loans by Investor "]');
this.btnSecuritizedLoansByPoolButton = page.locator('//a[text()=" Securitized Loans by Pool "]');
this.btnSecuritizedLoansSummaryButton = page.locator('//a[text()=" Securitized Loans Summary "]');
this.btnBulkUploadExceptionsButton = page.locator('//a[text()=" Bulk Upload Exceptions "]');
this.btnViewSecuritisationPoolRecordsButton = page.locator('//a[text()=" View Securitisation Pool Records "]');


}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
 
 // Retail Operations
async clickRetailOperationsDropdown() {
    await this.ddlRetailOperationsDropdown.click();
}

async clickProductCatalogButton() {
    await this.btnProductCatalogButton.click();
}

async clickExternalProductCatalogButton() {
    await this.btnExternalProductCatalogButton.click();
}

async clickFindCustomerButton() {
    await this.btnFindCustomerButton.click();
}

async clickUnauthorizedAAARecordsButton() {
    await this.btnUnauthorizedAAARecordsButton.click();
}

// Accounts
async clickAccountsDropdown() {
    await this.ddlAccountsDropdown.click();
}

async clickFindAccountButton() {
    await this.btnFindAccountButton.click();
}

// Account Transactions
async clickAccountTransactionsDropdown() {
    await this.ddlAccountTransactionsDropdown.click();
}

// Teller
async clickTellerDropdown() {
    await this.ddlTellerDropdown.click();
}

// Head Teller Operations
async clickHeadTellerOperationsDropdown() {
    await this.ddlHeadTellerOperationsDropdown.click();
}

// Till Administration
async clickHeadTellerTillAdministrationDropdown() {
    await this.ddlHeadTellerTillAdministrationDropdown.click();
}

async clickCreateNewTillButton() {
    await this.btnCreateNewTillButton.click();
}

async clickChangeTillUserButton() {
    await this.btnChangeTillUserButton.click();
}

async clickReopenTellerButton() {
    await this.btnReopenTellerButton.click();
}

async clickAuthoriseDeleteTillClosureButton() {
    await this.btnAuthoriseDeleteTillClosureButton.click();
}

// Till Transfer
async clickHeadTellerTillTransferDropdown() {
    await this.ddlHeadTellerTillTransferDropdown.click();
}

async clickAuthoriseDeleteTillTransferButton() {
    await this.btnAuthoriseDeleteTillTransferButton.click();
}

// Travellers Cheque
async clickHeadTellerTravellersChequeDropdown() {
    await this.ddlHeadTellerTravellersChequeDropdown.click();
}

// Teller Internal Account Menu
async clickTellerInternalAccountMenuDropdown() {
    await this.ddlTellerInternalAccountMenuDropdown.click();
}

async clickCreateAmendInternalAccountButton() {
    await this.btnCreateAmendInternalAccountButton.click();
}

async clickAuthoriseDeleteInternalAccountsButton() {
    await this.btnAuthoriseDeleteInternalAccountsButton.click();
}

async clickAuthoriseDeleteTCStockTransactionsButton() {
    await this.btnAuthoriseDeleteTCStockTransactionsButton.click();
}

async clickTCStockBalanceButton() {
    await this.btnTCStockBalanceButton.click();
}

async clickAuthoriseDeleteNostroFundingButton() {
    await this.btnAuthoriseDeleteNostroFundingButton.click();
}

// Head Teller Enquiries
async clickHeadTellerEnquiriesDropdown() {
    await this.ddlHeadTellerEnquiriesDropdown.click();
}

async clickCashPositionByTillButton() {
    await this.btnCashPositionByTillButton.click();
}

async clickCashPositionByCurrencyButton() {
    await this.btnCashPositionByCurrencyButton.click();
}

async clickCashPositionByDenominationButton() {
    await this.btnCashPositionByDenominationButton.click();
}

async clickListOfCashOverragesButton() {
    await this.btnListOfCashOverragesButton.click();
}

async clickListOfCashShortagesButton() {
    await this.btnListOfCashShortagesButton.click();
}

async clickTCStockPositionByCurrencyButton() {
    await this.btnTCStockPositionByCurrencyButton.click();
}

async clickTillCashEntriesTodayButton() {
    await this.btnTillCashEntriesTodayButton.click();
}

async clickTillTCIssueEntriesTodayButton() {
    await this.btnTillTCIssueEntriesTodayButton.click();
}

async clickTillTCBuyEntriesTodayButton() {
    await this.btnTillTCBuyEntriesTodayButton.click();
}

async clickAccountBalancesButton() {
    await this.btnAccountBalancesButton.click();
}

async clickReversedTellerTransactionsButton() {
    await this.btnReversedTellerTransactionsButton.click();
}

// Teller Operations
async clickTellerOperationsDropdown() {
    await this.ddlTellerOperationsDropdown.click();
}

// Teller Cash
async clickTellerCashDropdown() {
    await this.ddlTellerCashDropdown.click();
}

async clickCashDepositLocalButton() {
    await this.btnCashDepositLocalButton.click();
}

async clickCashWithdrawalLocalButton() {
    await this.btnCashWithdrawalLocalButton.click();
}

async clickCashWithdrawalLocalWithoutChequeButton() {
    await this.btnCashWithdrawalLocalWithoutChequeButton.click();
}

async clickCashDepositLocalForeignButton() {
    await this.btnCashDepositLocalForeignButton.click();
}

async clickCashWithdrawalLocalForeignButton() {
    await this.btnCashWithdrawalLocalForeignButton.click();
}

async clickChangeDenominationButton() {
    await this.btnChangeDenominationButton.click();
}

async clickCashDepositForeignButton() {
    await this.btnCashDepositForeignButton.click();
}

async clickCashWithdrawalForeignButton() {
    await this.btnCashWithdrawalForeignButton.click();
}

async clickAuthoriseDeleteTellerCashTransactionsButton() {
    await this.btnAuthoriseDeleteTellerCashTransactionsButton.click();
}

// Currency Exchange
async clickCurrencyExchangeDropdown() {
    await this.ddlCurrencyExchangeDropdown.click();
}

async clickSellFgnCcyAgainstLocalCcyButton() {
    await this.btnSellFgnCcyAgainstLocalCcyButton.click();
}

async clickBuyFgnCcyAgainstLocalCcyButton() {
    await this.btnBuyFgnCcyAgainstLocalCcyButton.click();
}

async clickForeignCurrencyExchangeButton() {
    await this.btnForeignCurrencyExchangeButton.click();
}

async clickAuthoriseDeleteCurrencyExchangeButton() {
    await this.btnAuthoriseDeleteCurrencyExchangeButton.click();
}

async clickExchangeRatesButton() {
    await this.btnExchangeRatesButton.click();
}

// Travellers Cheque Admin
async clickTravellersChequeAdminDropdown() {
    await this.ddlTravellersChequeAdminDropdown.click();
}

async clickReceiptOfTCStockButton() {
    await this.btnReceiptOfTCStockButton.click();
}

async clickReceiptOfLocalCurrencyTCStockButton() {
    await this.btnReceiptOfLocalCurrencyTCStockButton.click();
}

async clickTransferOfStockOtherBranchesButton() {
    await this.btnTransferOfStockOtherBranchesButton.click();
}

async clickTransferLocalCurrencyStockOtherBranchesButton() {
    await this.btnTransferLocalCurrencyStockOtherBranchesButton.click();
}

async clickTCTfrFromVaultToTillSameBranchButton() {
    await this.btnTCTfrFromVaultToTillSameBranchButton.click();
}

async clickTCStockBalanceAdminButton() {
    await this.btnTCStockBalanceAdminButton.click();
}

// Travellers Cheque Transactions
async clickTravellersChequeTransactionsDropdown() {
    await this.ddlTravellersChequeTransactionsDropdown.click();
}

async clickSellTCAgainstCashButton() {
    await this.btnSellTCAgainstCashButton.click();
}

async clickSellTCAgainstAccountButton() {
    await this.btnSellTCAgainstAccountButton.click();
}

async clickBuyTCAgainstCashButton() {
    await this.btnBuyTCAgainstCashButton.click();
}

async clickBuyTCAgainstAccountButton() {
    await this.btnBuyTCAgainstAccountButton.click();
}

async clickSellLocalCurrencyTCAgainstCashButton() {
    await this.btnSellLocalCurrencyTCAgainstCashButton.click();
}

async clickSellLocalCurrencyTCAgainstAccountButton() {
    await this.btnSellLocalCurrencyTCAgainstAccountButton.click();
}

async clickBuyLocalCurrencyTCAgainstCashButton() {
    await this.btnBuyLocalCurrencyTCAgainstCashButton.click();
}

async clickBuyLocalCurrencyTCAgainstAccountButton() {
    await this.btnBuyLocalCurrencyTCAgainstAccountButton.click();
}

async clickAuthoriseDeleteTCTransactionsButton() {
    await this.btnAuthoriseDeleteTCTransactionsButton.click();
}

// Drafts
async clickDraftsDropdown() {
    await this.ddlDraftsDropdown.click();
}

async clickIssueLCYDraftsAgainstCashButton() {
    await this.btnIssueLCYDraftsAgainstCashButton.click();
}

async clickIssueLCYDraftsAgainstAccountButton() {
    await this.btnIssueLCYDraftsAgainstAccountButton.click();
}

async clickPaymentOfLCYDraftsByCashButton() {
    await this.btnPaymentOfLCYDraftsByCashButton.click();
}

async clickPaymentOfLCYDraftsToAccountButton() {
    await this.btnPaymentOfLCYDraftsToAccountButton.click();
}

async clickAuthoriseDeleteDraftTransactionsButton() {
    await this.btnAuthoriseDeleteDraftTransactionsButton.click();
}

// Account Transfer
async clickAccountTransferDropdown() {
    await this.ddlAccountTransferDropdown.click();
}

async clickAccountToAccountTransferButton() {
    await this.btnAccountToAccountTransferButton.click();
}

async clickAuthoriseDeleteAccountTransferButton() {
    await this.btnAuthoriseDeleteAccountTransferButton.click();
}

// Passbook Printing
async clickPassbookPrintingDropdown() {
    await this.ddlPassbookPrintingDropdown.click();
}

async clickUpdateAccountStatementButton() {
    await this.btnUpdateAccountStatementButton.click();
}

async clickPrintPassbookButton() {
    await this.btnPrintPassbookButton.click();
}

// Teller Till Transfer
async clickTellerTillTransferDropdown() {
    await this.ddlTellerTillTransferDropdown.click();
}

async clickLCYTillTransferButton() {
    await this.btnLCYTillTransferButton.click();
}

async clickFCYTillTransferButton() {
    await this.btnFCYTillTransferButton.click();
}

async clickTillToVaultButton() {
    await this.btnTillToVaultButton.click();
}

async clickVaultToTillButton() {
    await this.btnVaultToTillButton.click();
}

// Teller Till Administration
async clickTellerTillAdministrationDropdown() {
    await this.ddlTellerTillAdministrationDropdown.click();
}

async clickInitiateTillClosureButton() {
    await this.btnInitiateTillClosureButton.click();
}

// Teller Enquiries
async clickTellerEnquiriesDropdown() {
    await this.ddlTellerEnquiriesDropdown.click();
}

async clickCashPositionbyTillButton() {
    await this.btnCashPositionbyTillButton.click();
}

async clickCashPositionbyCurrencyButton() {
    await this.btnCashPositionbyCurrencyButton.click();
}

async clickCashPositionbyDenominationButton() {
    await this.btnCashPositionbyDenominationButton.click();
}

async clickTCStockPositionbyCurrencyButton() {
    await this.btnTCStockPositionbyCurrencyButton.click();
}

async clickLocalDraftEnquiriesButton() {
    await this.btnLocalDraftEnquiriesButton.click();
}

async clickTillCashEntriesTodayEnquiryButton() {
    await this.btnTillCashEntriesTodayEnquiryButton.click();
}

async clickTillTCIssueEntriesTodayEnquiryButton() {
    await this.btnTillTCIssueEntriesTodayEnquiryButton.click();
}

async clickTillTCBuyEntriesTodayEnquiryButton() {
    await this.btnTillTCBuyEntriesTodayEnquiryButton.click();
}

async clickAccountBalancesEnquiryButton() {
    await this.btnAccountBalancesEnquiryButton.click();
}

async clickReversedTellerTransactionsEnquiryButton() {
    await this.btnReversedTellerTransactionsEnquiryButton.click();
}

// Financial Services
async clickFinancialServicesDropdown() {
    await this.ddlFinancialServicesDropdown.click();
}

async clickFindAccountFinancialServicesButton() {
    await this.btnFindAccountFinancialServicesButton.click();
}

async clickCashAndChequeButton() {
    await this.btnCashAndChequeButton.click();
}

async clickMultiTillOperationsButton() {
    await this.btnMultiTillOperationsButton.click();
}

async clickMultiTillOperationsLcyButton() {
    await this.btnMultiTillOperationsLcyButton.click();
}

async clickBillPaymentButton() {
    await this.btnBillPaymentButton.click();
}

async clickReverseTFSTransactionButton() {
    await this.btnReverseTFSTransactionButton.click();
}

async clickReverseTFSTransactionHistoryButton() {
    await this.btnReverseTFSTransactionHistoryButton.click();
}

async clickAuthoriseDeleteTFSTransactionsButton() {
    await this.btnAuthoriseDeleteTFSTransactionsButton.click();
}

// Draft Issue / Account Transfer (PO)
async clickDraftIssueAccountTransferPODropdown() {
    await this.ddlDraftIssueAccountTransferPODropdown.click();
}

async clickDraftIssueInLocalCurrencyButton() {
    await this.btnDraftIssueInLocalCurrencyButton.click();
}

async clickDraftIssueInForeignCurrencyButton() {
    await this.btnDraftIssueInForeignCurrencyButton.click();
}

async clickTransferBetweenAccountsButton() {
    await this.btnTransferBetweenAccountsButton.click();
}

async clickAuthoriseDeleteDraftAcctTrfrButton() {
    await this.btnAuthoriseDeleteDraftAcctTrfrButton.click();
}

async clickTransactMirrorTRAccountButton() {
    await this.btnTransactMirrorTRAccountButton.click();
}

async clickPayRetLCYDraftsInHoldRecdThroClearingButton() {
    await this.btnPayRetLCYDraftsInHoldRecdThroClearingButton.click();
}

async clickStopPaymentForDraftsButton() {
    await this.btnStopPaymentForDraftsButton.click();
}

async clickAuthoriseDeleteStopPaymentOfDraftsButton() {
    await this.btnAuthoriseDeleteStopPaymentOfDraftsButton.click();
}

async clickRevokeStopPaymentOfDraftButton() {
    await this.btnRevokeStopPaymentOfDraftButton.click();
}

async clickAuthoriseDeleteRevokeStopPaymentOfDraftButton() {
    await this.btnAuthoriseDeleteRevokeStopPaymentOfDraftButton.click();
}

async clickCancellationOfLCYDraftsButton() {
    await this.btnCancellationOfLCYDraftsButton.click();
}

async clickAuthoriseDeleteCancellationOfLCYDraftsButton() {
    await this.btnAuthoriseDeleteCancellationOfLCYDraftsButton.click();
}

async clickViewDebitCreditAdvicesButton() {
    await this.btnViewDebitCreditAdvicesButton.click();
}

// Draft Issue Enquiries
async clickDraftIssueAccountTransferEnquiriesDropdown() {
    await this.ddlDraftIssueAccountTransferEnquiriesDropdown.click();
}

async clickLocalDraftEnquiriesDraftIssueButton() {
    await this.btnLocalDraftEnquiriesDraftIssueButton.click();
}

// Cheques
async clickChequesDropdown() {
    await this.ddlChequesDropdown.click();
}

async clickReceiptOfStockButton() {
    await this.btnReceiptOfStockButton.click();
}

async clickAuthoriseDeleteReceiptOfStockButton() {
    await this.btnAuthoriseDeleteReceiptOfStockButton.click();
}

async clickIssueChequesButton() {
    await this.btnIssueChequesButton.click();
}

async clickUnauthorisedChequeIssueButton() {
    await this.btnUnauthorisedChequeIssueButton.click();
}

async clickAuthoriseDeleteIssueOfChequesButton() {
    await this.btnAuthoriseDeleteIssueOfChequesButton.click();
}

async clickStopPaymentOfChequesButton() {
    await this.btnStopPaymentOfChequesButton.click();
}

async clickAuthoriseDeleteStopPaymentOfChequeButton() {
    await this.btnAuthoriseDeleteStopPaymentOfChequeButton.click();
}

async clickRevokeStopPaymentOfChequeButton() {
    await this.btnRevokeStopPaymentOfChequeButton.click();
}

async clickAuthoriseDeleteRevokePaymentStopButton() {
    await this.btnAuthoriseDeleteRevokePaymentStopButton.click();
}

async clickSendStopPaymentStatusMsgMT112Button() {
    await this.btnSendStopPaymentStatusMsgMT112Button.click();
}

async clickAuthoriseDeleteStatusUpdateMT112Button() {
    await this.btnAuthoriseDeleteStatusUpdateMT112Button.click();
}

async clickViewMT112MsgButton() {
    await this.btnViewMT112MsgButton.click();
}

async clickInputChequeReturnButton() {
    await this.btnInputChequeReturnButton.click();
}

async clickChequeReturnAmendDeleteButton() {
    await this.btnChequeReturnAmendDeleteButton.click();
}

async clickAuthoriseChequeReturnButton() {
    await this.btnAuthoriseChequeReturnButton.click();
}

async clickListOfChequeReturnButton() {
    await this.btnListOfChequeReturnButton.click();
}

// Cheques Enquiries
async clickChequesEnquiriesDropdown() {
    await this.ddlChequesEnquiriesDropdown.click();
}

async clickStockRegisterButton() {
    await this.btnStockRegisterButton.click();
}

async clickChequesIssuedButton() {
    await this.btnChequesIssuedButton.click();
}

async clickChequesPresentedClearedButton() {
    await this.btnChequesPresentedClearedButton.click();
}

async clickReturnedChequesButton() {
    await this.btnReturnedChequesButton.click();
}

async clickStoppedChequesButton() {
    await this.btnStoppedChequesButton.click();
}

async clickRevokedChequesButton() {
    await this.btnRevokedChequesButton.click();
}

async clickReversedEntriesButton() {
    await this.btnReversedEntriesButton.click();
}

async clickChequeRegisterButton() {
    await this.btnChequeRegisterButton.click();
}

// Debit Card
async clickDebitCardDropdown() {
    await this.ddlDebitCardDropdown.click();
}

async clickNewCardIssueButton() {
    await this.btnNewCardIssueButton.click();
}

async clickManageCardButton() {
    await this.btnManageCardButton.click();
}

async clickAuthoriseDeleteCardIssueButton() {
    await this.btnAuthoriseDeleteCardIssueButton.click();
}

async clickDebitCardsIssuedButton() {
    await this.btnDebitCardsIssuedButton.click();
}

// Cheques For Collection
async clickChequesForCollectionDropdown() {
    await this.ddlChequesForCollectionDropdown.click();
}

// Local Cheques
async clickLocalChequesDropdown() {
    await this.ddlLocalChequesDropdown.click();
}

async clickDepositLocalChequesDirectClearingButton() {
    await this.btnDepositLocalChequesDirectClearingButton.click();
}

async clickDepositLocalChequesIndirectClearingButton() {
    await this.btnDepositLocalChequesIndirectClearingButton.click();
}

async clickAuthoriseDeleteOutwardClearingButton() {
    await this.btnAuthoriseDeleteOutwardClearingButton.click();
}

async clickChequeCollectionButton() {
    await this.btnChequeCollectionButton.click();
}

async clickAuthoriseDeleteChequeCollectionButton() {
    await this.btnAuthoriseDeleteChequeCollectionButton.click();
}

async clickChangeOutwardClearingDetailsButton() {
    await this.btnChangeOutwardClearingDetailsButton.click();
}

async clickSettleOutwardClearingButton() {
    await this.btnSettleOutwardClearingButton.click();
}

async clickSettleOutwardClearingReturnButton() {
    await this.btnSettleOutwardClearingReturnButton.click();
}

async clickChequesGermanChequeProcessingButton() {
    await this.btnChequesGermanChequeProcessingButton.click();
}

async clickChequesSystacChequeProcessingButton() {
    await this.btnChequesSystacChequeProcessingButton.click();
}

async clickChequesSrilankaChequeProcessingButton() {
    await this.btnChequesSrilankaChequeProcessingButton.click();
}

// Outstation Cheques
async clickOutstationChequesDropdown() {
    await this.ddlOutstationChequesDropdown.click();
}

async clickDepositOutstationChequesButton() {
    await this.btnDepositOutstationChequesButton.click();
}

async clickAuthoriseDeleteOutstationChequesButton() {
    await this.btnAuthoriseDeleteOutstationChequesButton.click();
}

async clickPayReturnOutstationChequesButton() {
    await this.btnPayReturnOutstationChequesButton.click();
}

async clickAuthoriseDeletePayReturnOutstationChqsButton() {
    await this.btnAuthoriseDeletePayReturnOutstationChqsButton.click();
}

async clickSettleOutstationChequeButton() {
    await this.btnSettleOutstationChequeButton.click();
}

async clickSettleOutstationChequeReturnedButton() {
    await this.btnSettleOutstationChequeReturnedButton.click();
}

// Foreign Cheques
async clickForeignChequesDropdown() {
    await this.ddlForeignChequesDropdown.click();
}

async clickDepositForeignChequesButton() {
    await this.btnDepositForeignChequesButton.click();
}

async clickAuthoriseDeleteForeignChequesButton() {
    await this.btnAuthoriseDeleteForeignChequesButton.click();
}

async clickPayReturnForeignChequesButton() {
    await this.btnPayReturnForeignChequesButton.click();
}

async clickAuthoriseDeletePayReturnForeignChqsButton() {
    await this.btnAuthoriseDeletePayReturnForeignChqsButton.click();
}

async clickSettleForeignChequeCollectionButton() {
    await this.btnSettleForeignChequeCollectionButton.click();
}

async clickSettleForeignChequeReturnedButton() {
    await this.btnSettleForeignChequeReturnedButton.click();
}

// Cheque Deposit
async clickChequeDepositDropdown() {
    await this.ddlChequeDepositDropdown.click();
}

async clickChequeDepositButton() {
    await this.btnChequeDepositButton.click();
}

// Unauthorised Cheque Collection
async clickUnauthorisedChequeCollectionDropdown() {
    await this.ddlUnauthorisedChequeCollectionDropdown.click();
}

async clickUnauthorisedChequeCollectionButton() {
    await this.btnUnauthorisedChequeCollectionButton.click();
}

// Authorised/Delete Settlements
async clickAuthorisedDeleteSettlementsDropdown() {
    await this.ddlAuthorisedDeleteSettlementsDropdown.click();
}

async clickAuthorisedDeleteSettlementsButton() {
    await this.btnAuthorisedDeleteSettlementsButton.click();
}

// Cheque Collection Enquiries
async clickChequeCollectionEnquiriesDropdown() {
    await this.ddlChequeCollectionEnquiriesDropdown.click();
}

async clickChequeCollectionForChequeChangeButton() {
    await this.btnChequeCollectionForChequeChangeButton.click();
}

async clickUnrealisedOutstationChequesButton() {
    await this.btnUnrealisedOutstationChequesButton.click();
}

async clickUnrealisedForeignChequesButton() {
    await this.btnUnrealisedForeignChequesButton.click();
}

async clickChequeCollectionDetailsButton() {
    await this.btnChequeCollectionDetailsButton.click();
}

// Multi Currency Accounts
async clickMultiCurrencyAccountsDropdown() {
    await this.ddlMultiCurrencyAccountsDropdown.click();
}

async clickFindMultiCurrencyButton() {
    await this.btnFindMultiCurrencyButton.click();
}

// Deposits
async clickDepositsDropdown() {
    await this.ddlDepositsDropdown.click();
}

async clickFindDepositButton() {
    await this.btnFindDepositButton.click();
}

async clickDepositTransactionsDropdown() {
    await this.ddlDepositTransactionsDropdown.click();
}

async clickDepositArrangementActivitiesPODropdown() {
    await this.ddlDepositArrangementActivitiesPODropdown.click();
}

async clickAADepositFundButton() {
    await this.btnAADepositFundButton.click();
}

async clickAAPayOutDomesticButton() {
    await this.btnAAPayOutDomesticButton.click();
}

async clickAAPayOutInternationalButton() {
    await this.btnAAPayOutInternationalButton.click();
}

async clickAAPartialWithdrawalButton() {
    await this.btnAAPartialWithdrawalButton.click();
}

async clickAuthoriseDeleteDepositArrangementsPOButton() {
    await this.btnAuthoriseDeleteDepositArrangementsPOButton.click();
}

async clickDepositArrangementActivitiesTTDropdown() {
    await this.ddlDepositArrangementActivitiesTTDropdown.click();
}

async clickAADepositFundLCYButton() {
    await this.btnAADepositFundLCYButton.click();
}

async clickAADepositFundFCYButton() {
    await this.btnAADepositFundFCYButton.click();
}

async clickAAPayOutButton() {
    await this.btnAAPayOutButton.click();
}

async clickAAPartialWithdrawalTTButton() {
    await this.btnAAPartialWithdrawalTTButton.click();
}

async clickAuthoriseDeleteDepositArrangementsTTButton() {
    await this.btnAuthoriseDeleteDepositArrangementsTTButton.click();
}

async clickDepositReportButton() {
    await this.btnDepositReportButton.click();
}

// Lending
async clickLendingDropdown() {
    await this.ddlLendingDropdown.click();
}

async clickFindLoanButton() {
    await this.btnFindLoanButton.click();
}

async clickLoanTransactionsDropdown() {
    await this.ddlLoanTransactionsDropdown.click();
}

// Lending Arrangement Activities (PO)
async clickLendingArrangementActivitiesPODropdown() {
    await this.ddlLendingArrangementActivitiesPODropdown.click();
}

async clickAADisbursementDomesticButton() {
    await this.btnAADisbursementDomesticButton.click();
}

async clickAADisbursementInternationalButton() {
    await this.btnAADisbursementInternationalButton.click();
}

async clickAARepaymentPOButton() {
    await this.btnAARepaymentPOButton.click();
}

async clickAAAdvanceRepaymentPOButton() {
    await this.btnAAAdvanceRepaymentPOButton.click();
}

async clickAAPayOffPOButton() {
    await this.btnAAPayOffPOButton.click();
}

async clickAAPrincipalDecreaseButton() {
    await this.btnAAPrincipalDecreaseButton.click();
}

async clickAACreditArrangementPOButton() {
    await this.btnAACreditArrangementPOButton.click();
}

async clickAuthoriseDeleteLendingArrangementsPOButton() {
    await this.btnAuthoriseDeleteLendingArrangementsPOButton.click();
}

// Lending Arrangement Activities (TT)
async clickLendingArrangementActivitiesTTDropdown() {
    await this.ddlLendingArrangementActivitiesTTDropdown.click();
}

async clickAADisbursementButton() {
    await this.btnAADisbursementButton.click();
}

async clickAARepaymentTTButton() {
    await this.btnAARepaymentTTButton.click();
}

async clickAAAdvanceRepaymentTTButton() {
    await this.btnAAAdvanceRepaymentTTButton.click();
}

async clickAAPayOffTTButton() {
    await this.btnAAPayOffTTButton.click();
}

async clickAACreditArrangementTTButton() {
    await this.btnAACreditArrangementTTButton.click();
}

async clickUnauthorisedTellerTransactionsButton() {
    await this.btnUnauthorisedTellerTransactionsButton.click();
}

async clickAuthoriseDeleteArrangementsTTSButton() {
    await this.btnAuthoriseDeleteArrangementsTTSButton.click();
}

// AA Cash Pool
async clickAACashPoolDropdown() {
    await this.ddlAACashPoolDropdown.click();
}

async clickSetUpCashPoolButton() {
    await this.btnSetUpCashPoolButton.click();
}

async clickUnauthorisedCashPoolButton() {
    await this.btnUnauthorisedCashPoolButton.click();
}

async clickAuthoriseDeleteCashPoolButton() {
    await this.btnAuthoriseDeleteCashPoolButton.click();
}

async clickReversalOfAACashPoolButton() {
    await this.btnReversalOfAACashPoolButton.click();
}

async clickViewSettlementInstructionCashPoolButton() {
    await this.btnViewSettlementInstructionCashPoolButton.click();
}

// Direct Debit
async clickDirectDebitDropdown() {
    await this.ddlDirectDebitDropdown.click();
}

async clickInputDDMandateButton() {
    await this.btnInputDDMandateButton.click();
}

async clickUnauthorisedDDMandateButton() {
    await this.btnUnauthorisedDDMandateButton.click();
}

async clickAuthoriseDeleteDDMandateButton() {
    await this.btnAuthoriseDeleteDDMandateButton.click();
}

async clickListDDItemsButton() {
    await this.btnListDDItemsButton.click();
}

async clickClaimViewButton() {
    await this.btnClaimViewButton.click();
}

async clickLoanReportButton() {
    await this.btnLoanReportButton.click();
}

async clickPDOverdueItemsButton() {
    await this.btnPDOverdueItemsButton.click();
}

// Bundles
async clickBundlesDropdown() {
    await this.ddlBundlesDropdown.click();
}

async clickFindBundleAccountsButton() {
    await this.btnFindBundleAccountsButton.click();
}

// Relationship Pricing
async clickRelationshipPricingDropdown() {
    await this.ddlRelationshipPricingDropdown.click();
}

async clickPricingArrangementsButton() {
    await this.btnPricingArrangementsButton.click();
}

// Agent
async clickAgentDropdown() {
    await this.ddlAgentDropdown.click();
}

async clickFindAgentsButton() {
    await this.btnFindAgentsButton.click();
}

// Agent Transactions
async clickAgentTransactionsDropdown() {
    await this.ddlAgentTransactionsDropdown.click();
}

// Agent Funding/Payout (PO)
async clickAgentFundingPayoutPODropdown() {
    await this.ddlAgentFundingPayoutPODropdown.click();
}

async clickAgentCommissionPayoutButton() {
    await this.btnAgentCommissionPayoutButton.click();
}

async clickAgentCommissionPayinButton() {
    await this.btnAgentCommissionPayinButton.click();
}

// Rewards
async clickRewardsDropdown() {
    await this.ddlRewardsDropdown.click();
}

async clickFindRewardSchemesButton() {
    await this.btnFindRewardSchemesButton.click();
}

// Safe Deposit Box
async clickSafeDepositBoxDropdown() {
    await this.ddlSafeDepositBoxDropdown.click();
}

async clickFindSafeDepositBoxButton() {
    await this.btnFindSafeDepositBoxButton.click();
}

// Safe Deposit Box Transactions
async clickSafeDepositBoxTransactionsDropdown() {
    await this.ddlSafeDepositBoxTransactionsDropdown.click();
}

// Safe Deposit Box Arrangement Activities (PO)
async clickSafeDepositBoxArrangementActivitiesPODropdown() {
    await this.ddlSafeDepositBoxArrangementActivitiesPODropdown.click();
}

async clickAASafeDepositBoxFundButton() {
    await this.btnAASafeDepositBoxFundButton.click();
}

async clickAuthoriseDeleteSafeDepositBoxArrangementsPOButton() {
    await this.btnAuthoriseDeleteSafeDepositBoxArrangementsPOButton.click();
}

// Safe Deposit Box Arrangement Activities (TT)
async clickSafeDepositBoxArrangementActivitiesTTDropdown() {
    await this.ddlSafeDepositBoxArrangementActivitiesTTDropdown.click();
}

async clickAASafeDepositBoxFundLCYButton() {
    await this.btnAASafeDepositBoxFundLCYButton.click();
}

async clickAASafeDepositBoxFundFCYButton() {
    await this.btnAASafeDepositBoxFundFCYButton.click();
}

async clickAuthoriseDeleteSafeDepositBoxArrangementsTTButton() {
    await this.btnAuthoriseDeleteSafeDepositBoxArrangementsTTButton.click();
}

async clickSafeDepositBoxReportButton() {
    await this.btnSafeDepositBoxReportButton.click();
}

// Consent
async clickConsentButton() {
    await this.btnConsentButton.click();
}

// External Products
async clickExternalProductsDropdown() {
    await this.ddlExternalProductsDropdown.click();
}

async clickFindExternalProductsButton() {
    await this.btnFindExternalProductsButton.click();
}

// Arrangement Enquiries
async clickArrangementEnquiriesDropdown() {
    await this.ddlArrangementEnquiriesDropdown.click();
}

async clickAccountStatementButton() {
    await this.btnAccountStatementButton.click();
}

async clickMaturedClosedAccountsButton() {
    await this.btnMaturedClosedAccountsButton.click();
}

async clickMaturedClosedMCYAccountsButton() {
    await this.btnMaturedClosedMCYAccountsButton.click();
}

async clickMaturedClosedDepositsButton() {
    await this.btnMaturedClosedDepositsButton.click();
}

async clickMaturedClosedLoansButton() {
    await this.btnMaturedClosedLoansButton.click();
}

async clickMaturedClosedBundleAccountsButton() {
    await this.btnMaturedClosedBundleAccountsButton.click();
}

async clickMaturedClosedPricingButton() {
    await this.btnMaturedClosedPricingButton.click();
}

async clickMaturedClosedAgentsButton() {
    await this.btnMaturedClosedAgentsButton.click();
}

async clickMaturedClosedRewardSchemesButton() {
    await this.btnMaturedClosedRewardSchemesButton.click();
}

async clickMaturedClosedSafeDepositBoxButton() {
    await this.btnMaturedClosedSafeDepositBoxButton.click();
}

async clickMaturedClosedExternalProductsButton() {
    await this.btnMaturedClosedExternalProductsButton.click();
}

async clickAutoClosedDormantArrangementsButton() {
    await this.btnAutoClosedDormantArrangementsButton.click();
}

// Loan Collections
async clickLoanCollectionsDropdown() {
    await this.ddlLoanCollectionsDropdown.click();
}

async clickListOfCollectionItemsButton() {
    await this.btnListOfCollectionItemsButton.click();
}

// Collection Enquiries
async clickCollectionEnquiriesDropdown() {
    await this.ddlCollectionEnquiriesDropdown.click();
}

async clickDebtCollectionHistoryButton() {
    await this.btnDebtCollectionHistoryButton.click();
}

async clickCollectionItemsPerDaysInODButton() {
    await this.btnCollectionItemsPerDaysInODButton.click();
}

// Loan Collections Reports
async clickLoanCollectionsReportsDropdown() {
    await this.ddlLoanCollectionsReportsDropdown.click();
}

async clickPerformanceViewButton() {
    await this.btnPerformanceViewButton.click();
}

async clickRollForwardDelinquencyReportButton() {
    await this.btnRollForwardDelinquencyReportButton.click();
}

async clickRollBackwardDelinquencyReportButton() {
    await this.btnRollBackwardDelinquencyReportButton.click();
}

// Facility
async clickFacilityDropdown() {
    await this.ddlFacilityDropdown.click();
}

async clickFindFacilityButton() {
    await this.btnFindFacilityButton.click();
}

// Facility Transactions
async clickFacilityTransactionsDropdown() {
    await this.ddlFacilityTransactionsDropdown.click();
}

// Facility Arrangement Activities (PO)
async clickFacilityArrangementActivitiesPODropdown() {
    await this.ddlFacilityArrangementActivitiesPODropdown.click();
}

async clickAARepaymentFacilityButton() {
    await this.btnAARepaymentFacilityButton.click();
}

async clickAAPayOffFacilityButton() {
    await this.btnAAPayOffFacilityButton.click();
}

async clickAAPrincipalDecreaseFacilityButton() {
    await this.btnAAPrincipalDecreaseFacilityButton.click();
}

async clickAABillsRepaymentButton() {
    await this.btnAABillsRepaymentButton.click();
}

async clickAuthoriseDeleteFacilityArrangementsPOButton() {
    await this.btnAuthoriseDeleteFacilityArrangementsPOButton.click();
}

async clickFindDealButton() {
    await this.btnFindDealButton.click();
}

async clickFindDrawingsButton() {
    await this.btnFindDrawingsButton.click();
}

// Loan Securitisation
async clickLoanSecuritisationDropdown() {
    await this.ddlLoanSecuritisationDropdown.click();
}

async clickPerformAssetSaleButton() {
    await this.btnPerformAssetSaleButton.click();
}

async clickPerformBuyBackButton() {
    await this.btnPerformBuyBackButton.click();
}

async clickPerformBulkUploadButton() {
    await this.btnPerformBulkUploadButton.click();
}

async clickPerformSimulationAssetSaleButton() {
    await this.btnPerformSimulationAssetSaleButton.click();
}

async clickPerformSimulationBuyBackButton() {
    await this.btnPerformSimulationBuyBackButton.click();
}

async clickCreateAmendSecuritizationPoolButton() {
    await this.btnCreateAmendSecuritizationPoolButton.click();
}

async clickAuthoriseDeleteSecuritizationPoolButton() {
    await this.btnAuthoriseDeleteSecuritizationPoolButton.click();
}

async clickCreateBulkUploadButton() {
    await this.btnCreateBulkUploadButton.click();
}

// Amend Subparticipant Conditions
async clickAmendSubparticipantConditionsDropdown() {
    await this.ddlAmendSubparticipantConditionsDropdown.click();
}

async clickAmendSkimSubparticipantButton() {
    await this.btnAmendSkimSubparticipantButton.click();
}

async clickAmendChargeSubparticipantButton() {
    await this.btnAmendChargeSubparticipantButton.click();
}

// Enquiries And Reports
async clickEnquiriesAndReportsDropdown() {
    await this.ddlEnquiriesAndReportsDropdown.click();
}

async clickViewUnauthorisedRecordsButton() {
    await this.btnViewUnauthorisedRecordsButton.click();
}

async clickViewSimulatedRecordsButton() {
    await this.btnViewSimulatedRecordsButton.click();
}

async clickParticipantsOfThePoolButton() {
    await this.btnParticipantsOfThePoolButton.click();
}

async clickSecuritizedLoansByInvestorButton() {
    await this.btnSecuritizedLoansByInvestorButton.click();
}

async clickSecuritizedLoansByPoolButton() {
    await this.btnSecuritizedLoansByPoolButton.click();
}

async clickSecuritizedLoansSummaryButton() {
    await this.btnSecuritizedLoansSummaryButton.click();
}

async clickBulkUploadExceptionsButton() {
    await this.btnBulkUploadExceptionsButton.click();
}

async clickViewSecuritisationPoolRecordsButton() {
    await this.btnViewSecuritisationPoolRecordsButton.click();
}

};