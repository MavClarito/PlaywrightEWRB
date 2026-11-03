import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_CorporateOperations extends BasePage {

readonly page: Page;

// Corporate Operations
readonly ddlCorporateOperationsDropdown: Locator;

// Trade Finance
readonly ddlTradeFinanceDropdown: Locator;

// Import LCs
readonly ddlImportLcsDropdown: Locator;
readonly ddlIssuanceOfImportLcsDropdown: Locator;
readonly btnPreAdviceOfImportLcsButton: Locator;
readonly btnPreAdviceToIssueListOfPreadvisedLcsButton: Locator;
readonly btnIssueOfSightPaymentLcsButton: Locator;
readonly btnIssueOfUsanceLcsButton: Locator;
readonly btnIssueOfNegotiationLcsButton: Locator;
readonly btnIssueOfMixedPaymentLcsButton: Locator;
readonly btnImportLcsInternetRequestsButton: Locator;

// Maintenance of Import LCs
readonly ddlMaintenanceOfImportLcsDropdown: Locator;
readonly btnMaintenanceOfImportLcsTakeReduceMarginButton: Locator;
readonly btnMaintenanceOfImportLcsReleaseMarginButton: Locator;
readonly btnMaintenanceOfImportLcsInternalAmendmentButton: Locator;
readonly btnMaintenanceOfImportLcsExternalAmendmentButton: Locator;
readonly btnMaintenanceOfImportLcsAmendmentSeekingBenefConsentButton: Locator;
readonly btnMaintenanceOfImportLcsInternetRequestsLcAmendmentsButton: Locator;
readonly btnApproveRejectAmendmentOfImportLcButton: Locator;
readonly btnReversalCancellationOfImportLcButton: Locator;

// Drawings under Import LCs
readonly ddlDrawingsUnderImportLcsDropdown: Locator;
readonly btnRegisterUploadDocumentsButton: Locator;
readonly btnDrawingsUnderImportLcsCaptureCheckDocumentsButton: Locator;
readonly btnDrawingsUnderImportLcsInternetPendingDrawingsButton: Locator;

// Non-Discrepant Documents under Import LC
readonly ddlNonDiscrepantDocumentsUnderImportLcDropdown: Locator;
readonly btnDrawingsUnderShippingGuaranteeButton: Locator;
readonly btnSightPaymentUnderImportLcButton: Locator;
readonly btnAcceptanceOfDocumentsButton: Locator;
readonly btnDrawingsUnderMixedPaymentImportLcButton: Locator;
readonly btnPaymentAcceptanceUnderStandbyLcImportButton: Locator;
readonly btnOnlineMaturityOfAcceptancesImportsButton: Locator;
readonly btnAmendmentOnlineSettlementOfMixedPaymentsImportButton: Locator;
readonly btnAmendmentToPaidDrawingsButton: Locator;

// Sight Payment with Financing
readonly ddlSightPaymentWithFinancingDropdown: Locator;
readonly btnSightPaymentUnderImportLcFinancingButton: Locator;

// Discounting under Import LC
readonly ddlDiscountingUnderImportLcDropdown: Locator;
readonly btnDiscountingOfUsanceBillsImportsButton: Locator;
readonly btnDiscountingUnderImportLcAmendmentToUsanceDiscountingButton: Locator;
readonly btnDiscountingForMixedPaymentsImportsButton: Locator;
readonly btnAmendmentForMixedPaymentDiscountingImportButton: Locator;

// Discrepant Documents under Import LC
readonly ddlDiscrepantDocumentsUnderImportLcDropdown: Locator;
readonly btnDocumentsPendingForApplicantApprovalButton: Locator;
readonly btnRejectDocumentsUnderImportLcButton: Locator;
readonly btnHandlingOfRejectedDocumentsImportsButton: Locator;

// Documents Under Trust (Import LC)
readonly ddlDocumentsUnderTrustImportLcDropdown: Locator;
readonly btnReleaseDocumentUnderTrustButton: Locator;
readonly btnPayRejectAcceptDocReleasedUnderTrustButton: Locator;
readonly btnOnlineMaturityOfAcceptedDocumentsButton: Locator;
readonly btnFinalRejectionOfDocumentsButton: Locator;

// Import Inward Swift Messages
readonly ddlImportInwardSwiftMessagesDropdown: Locator;
readonly btnImportInwardSwiftMessagesButton: Locator;
readonly btnAcknowledgementMessagesButton: Locator;

// Export LCs
readonly ddlExportLcsDropdown: Locator;

// Register/Advise Export LCs
readonly ddlRegisterAdviseExportLcsDropdown: Locator;
readonly btnExportLcsPreAdviceButton: Locator;
readonly btnPreAdviceToAdviseListOfPreadvisedLcsButton: Locator;
readonly btnAdviseRegisterSightPaymentLcsButton: Locator;
readonly btnAdviseRegisterUsanceLcsButton: Locator;
readonly btnAdviseRegisterNegotiationLcsButton: Locator;
readonly btnAdviseRegisterMixedPaymentLcsButton: Locator;

// Transfer of Export LCs
readonly ddlTransferOfExportLcsDropdown: Locator;
readonly btnListOfTransferableExportLcsButton: Locator;
readonly btnTransferOfExportLcButton: Locator;

// Maintenance of Export LCs
readonly ddlMaintenanceOfExportLcsDropdown: Locator;
readonly btnMaintenanceOfExportLcsInternalAmendmentButton: Locator;
readonly btnMaintenanceOfExportLcsExternalAmendmentButton: Locator;
readonly btnMaintenanceOfExportLcsAmendmentSeekingBenefConsentButton: Locator;
readonly btnMaintenanceOfExportLcsInternetRequestsLcAmendmentsButton: Locator;
readonly btnApproveRejectAmendmentOfExportLcButton: Locator;
readonly btnReversalCancellationOfExportLcButton: Locator;

// Drawings under Export LCs
readonly ddlDrawingsUnderExportLcsDropdown: Locator;
readonly btnRegisterDocumentsButton: Locator;
readonly btnDrawingsUnderExportLcsCaptureCheckDocumentsButton: Locator;
readonly btnRegisterCaptureCheckDocTransferredLcButton: Locator;
readonly btnDrawingsUnderExportLcsInternetPendingDrawingsButton: Locator;

// Non-Discrepant Documents under Export LC
readonly ddlNonDiscrepantDocumentsUnderExportLcDropdown: Locator;
readonly btnSightPaymentUnderExportLcButton: Locator;
readonly btnAcceptanceUnderExportLcButton: Locator;
readonly btnDrawingsUnderMixedPaymentExportLcButton: Locator;
readonly btnPaymentAcceptanceUnderStandbyLcExportButton: Locator;
readonly btnOnlineMaturityOfAcceptancesButton: Locator;
readonly btnAmendmentOnlineSettlementOfMixedPaymentsExportButton: Locator;

// Negotiation/Discounting under Export LC
readonly ddlNegotiationDiscountingUnderExportLcDropdown: Locator;
readonly btnSightBillNegotiationDiscountingButton: Locator;
readonly btnAmendmentToSightDiscountingButton: Locator;
readonly btnUsanceBillNegotiationDiscountingButton: Locator;
readonly btnNegotiationDiscountingUnderExportLcAmendmentToUsanceDiscountingButton: Locator;
readonly btnMixedBillsNegotiationDiscountingButton: Locator;
readonly btnAmendmentForMixedPaymentDiscountingExportButton: Locator;

// Discrepant Documents under Export LC
readonly ddlDiscrepantDocumentsUnderExportLcDropdown: Locator;
readonly btnRejectDiscrepantDocumentsExportsButton: Locator;
readonly btnHandlingOfRejectedDocumentsExportsButton: Locator;

// Payment Under Reserve
readonly ddlPaymentUnderReserveDropdown: Locator;
readonly btnPaymentUnderReserveExportsButton: Locator;
readonly btnPaymentOfSightBillPaidUnderReserveButton: Locator;
readonly btnBillPaidUnderReserveReturnedUnpaidButton: Locator;
readonly btnFinalRejectionOfReturnedBillButton: Locator;

// Export Loan and Adjustment from Bill Proceeds
readonly ddlExportLoanAndAdjustmentFromBillProceedsDropdown: Locator;
readonly btnCreateExportPackingCreditLimitButton: Locator;
readonly btnCreateExportPackingCreditAccountButton: Locator;
readonly btnSightNegotiationAdjustmentOfEpcButton: Locator;
readonly btnSightNegotiationAdjustmentOfLoanButton: Locator;

// Inward SWIFT Messages (LC)
readonly ddlInwardSwiftMessagesLcDropdown: Locator;
readonly btnInwardLcsButton: Locator;
readonly btnBeneConsentAmendmentsButton: Locator;
readonly btnRejectionThroughMt734Button: Locator;
readonly btnNonConformingReimbursementsButton: Locator;
readonly btnOtherInwardMessagesButton: Locator;

// Back to Back LCs
readonly ddlBackToBackLcsDropdown: Locator;
readonly btnExportLcForBackToBackLcButton: Locator;
readonly btnBackToBackImportLcButton: Locator;

// Inward Collections
readonly ddlInwardCollectionsDropdown: Locator;
readonly btnInwardCollectionsLodgeSightDocyCollectionButton: Locator;
readonly btnInwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton: Locator;
readonly btnLodgeCleanCollectionButton: Locator;
readonly btnAmendmentOfInwardAvalisedCollectionButton: Locator;
readonly btnInternetPendingInwardCollectionsButton: Locator;
readonly btnAcceptanceAvalisationOfInwardCollectionButton: Locator;
readonly btnPaymentOfInwardCollectionButton: Locator;
readonly btnInitiatePaymentOfAcceptedAvalisedCollnButton: Locator;
readonly btnSettleAcceptedAvalisedCollectionButton: Locator;
readonly btnInwardCollectionsTakeReduceMarginButton: Locator;
readonly btnClosureOfInwardCollectionButton: Locator;

// Inward Collections - Inward Swift Messages
readonly ddlInwardCollectionsInwardSwiftMessagesDropdown: Locator;
readonly btnInwardCollectionsMessagesProcessedButton: Locator;

// Outward Collections
readonly ddlOutwardCollectionsDropdown: Locator;
readonly btnDefineDirectCollectionRangeForCustomersButton: Locator;
readonly btnOutwardCollectionsLodgeSightDocyCollectionButton: Locator;
readonly btnOutwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton: Locator;
readonly btnLodgeCleanCollectionsButton: Locator;
readonly btnInternetPendingOutwardCollectionsButton: Locator;
readonly btnAmendUploadDocsOutwardCollectionButton: Locator;
readonly btnTraceTheCollectionButton: Locator;
readonly btnAcceptanceOfOutwardCollectionButton: Locator;
readonly btnPaymentOfOutwardCollectionButton: Locator;
readonly btnOnlineMaturityOfAcceptedCollectionsButton: Locator;

// Purchase/Discounting of Collection
readonly ddlPurchaseDiscountingOfCollectionDropdown: Locator;
readonly btnPurchaseOfCollectionButton: Locator;
readonly btnAmendmentToCollectionPurchasedButton: Locator;
readonly btnPurchaseOfAvalisedCollectionButton: Locator;
readonly btnAmendmentToAvalisedCollectionPurchasedButton: Locator;

// Return/Closure of Outward Collection
readonly ddlReturnClosureOfOutwardCollectionDropdown: Locator;
readonly btnReturnOfOutwardCollectionsButton: Locator;
readonly btnClosureOfOutwardCollectionsButton: Locator;

// Outward Collections - Inward SWIFT Messages
readonly ddlOutwardCollectionsInwardSwiftMessagesDropdown: Locator;
readonly btnOutwardCollectionsMessagesProcessedButton: Locator;

// Open Account Trading
readonly ddlOpenAccountTradingDropdown: Locator;

// Import Open Account Trading
readonly ddlImportOpenAccountTradingDropdown: Locator;
readonly btnLodgeImportDocumentsButton: Locator;
readonly btnAmendImportDocumentsButton: Locator;
readonly btnSightPaymentOfImportDocsButton: Locator;
readonly btnUsancePaymentImportButton: Locator;

// Export Open Account Trading
readonly ddlExportOpenAccountTradingDropdown: Locator;
readonly btnLodgeExportDocumentsButton: Locator;
readonly btnAmendExportDocumentsButton: Locator;
readonly btnSightPaymentOfExportDocsButton: Locator;
readonly btnUsancePaymentExportButton: Locator;

// Advance Payment Trading
readonly ddlAdvancePaymentTradingDropdown: Locator;

// Import - Trade Evidence against Advance Payment
readonly ddlImportTradeEvidenceAgainstAdvancePaymentDropdown: Locator;
readonly btnLodgeImportAdvancePaymentButton: Locator;
readonly btnAmendImportAdvancePaymentButton: Locator;

// Export - Trade Evidence against Advance Payment
readonly ddlExportTradeEvidenceAgainstAdvancePaymentDropdown: Locator;
readonly btnLodgeExportAdvancePaymentButton: Locator;
readonly btnAmendExportAdvancePaymentButton: Locator;

// Charge Processing
readonly ddlChargeProcessingDropdown: Locator;
readonly btnDirectChargeCollectionButton: Locator;
readonly btnLcRefundOfChargesButton: Locator;
readonly btnSettleWriteOffClaimedChargesButton: Locator;
readonly btnWaiveUnpaidChargesButton: Locator;

// LC Reimbursement Processing
readonly ddlLcReimbursementProcessingDropdown: Locator;
readonly btnLcReimbursementTransactionsButton: Locator;
readonly btnReimbursementAuthorisationButton: Locator;

// Unauthorised Transactions
readonly ddlUnauthorisedTransactionsDropdown: Locator;
readonly btnUnauthorisedLcCollnTransactionsButton: Locator;
readonly btnUnauthorisedDrawingsButton: Locator;
readonly btnUnauthorisedChargesButton: Locator;

// Authorise TF Transactions
readonly ddlAuthoriseTfTransactionsDropdown: Locator;
readonly btnAuthoriseDeleteImportLcsAmendmentsButton: Locator;
readonly btnAuthoriseDeleteExportLcsAmendmentsButton: Locator;
readonly btnAuthoriseDeleteInwardCollnAmendmentsButton: Locator;
readonly btnAuthoriseDeleteOutwardCollnAmendmentsButton: Locator;
readonly btnAuthoriseDeleteBeneConsentAmendmentsButton: Locator;
readonly btnAuthoriseDeleteDrawingsButton: Locator;
readonly btnAuthoriseDeleteDiscountAmendmentsButton: Locator;
readonly btnAuthoriseDeleteDirectCollnAllotmentButton: Locator;
readonly btnAuthoriseDeleteChargeRecoveryButton: Locator;
readonly btnAuthoriseDeleteRefundOfChargesButton: Locator;
readonly btnAuthoriseDeleteChargeSettlementWriteOffButton: Locator;
readonly btnAuthoriseDeleteInwardLcsButton: Locator;
readonly btnAuthoriseDeleteInwardLcAmendmentsButton: Locator;
readonly btnAuthoriseDeleteInwardDrawingsButton: Locator;
readonly btnAuthoriseDeleteInwardMsgsForInwardCollnButton: Locator;

// Trade Finance Enquiries
readonly ddlTradeFinanceEnquiriesDropdown: Locator;
readonly btnImportLcsOutstandingButton: Locator;
readonly btnImportLcsExpiredButOutstandingButton: Locator;
readonly btnImportLcsLinkedToShippingGuaranteeButton: Locator;
readonly btnImportLcsCoveredThroughFxContractButton: Locator;
readonly btnImportLcsBillReceivedUnderCollectionButton: Locator;
readonly btnSgDrawingsBookedUnderLcButton: Locator;
readonly btnPresentationsPendingCheckingImportLcButton: Locator;
readonly btnUsanceBillsDueForSettlementImportLcButton: Locator;
readonly btnOsUsanceBillsDiscountedUnderImportLcButton: Locator;
readonly btnDocumentsImportLcReleasedUnderTrustButton: Locator;
readonly btnLcSummaryImportExportLcsButton: Locator;
readonly btnPaymentOnInstallmentsImportExportLcsButton: Locator;

readonly btnExportLcsOutstandingButton: Locator;
readonly btnExportLcsExpiredButOutstandingButton: Locator;
readonly btnAmendmentsApprovedExportLcsInternetButton: Locator;
readonly btnAmendmentsRejectedExportLcsInternetButton: Locator;
readonly btnExportLcsCoveredThroughFxContractButton: Locator;
readonly btnExportLcsBillSentForCollectionButton: Locator;
readonly btnPresentationsPendingCheckingExportLcButton: Locator;
readonly btnUsanceBillsDueForSettlementExportLcButton: Locator;
readonly btnOsBillsNegotiatedDiscountedExportLcButton: Locator;
readonly btnExportBillsPaidUnderReserveButton: Locator;

readonly btnInwardDocumentaryCollectionsOutstandingButton: Locator;
readonly btnInwardDocCollectionsReleasedUnderTrustButton: Locator;
readonly btnInwardCleanCollectionsOutstandingButton: Locator;
readonly btnAvalisedInwardCollectionsButton: Locator;
readonly btnInwardDocCollectionsOverdueButton: Locator;
readonly btnInwardDocCollectionsPendingResponseButton: Locator;

readonly btnOutwardDocumentaryCollectionsOutstandingButton: Locator;
readonly btnOutwardCleanCollectionsOutstandingButton: Locator;
readonly btnOutwardCollectionDocumentsButton: Locator;
readonly btnOverdueOutwardAvalisedDiscountedCollectionButton: Locator;
readonly btnRejectedOutwardCollectionInternetRequestsButton: Locator;

readonly btnLcCommissionCalculationDetailsButton: Locator;
readonly btnDocumentsReceivedUnderImportLcButton: Locator;
readonly btnListOfPaidImportDrawingsPendingDocumentButton: Locator;
readonly btnImportDrawingsPendingBeyondAllowedDaysButton: Locator;
readonly btnDocumentsReceivedUnderExportLcButton: Locator;
readonly btnViewChargeDetailsButton: Locator;
readonly btnImportDrawingPaymentOrdersButton: Locator;
readonly btnExportDrawingPaymentOrdersButton: Locator;

// TF TBML Enquiries
readonly ddlTfTbmlEnquiriesDropdown: Locator;
readonly btnLcTbmlTransactionsButton: Locator;
readonly btnDrawingsTbmlTransactionsButton: Locator;
readonly btnLcAmendmentsTbmlTransactionsButton: Locator;

// Trade Based Lending
readonly ddlTradeBasedLendingDropdown: Locator;
readonly btnTradeBasedLendingProductCatalogButton: Locator;
readonly btnAuthoriseViewLoanDetailsButton: Locator;

// Accounting Entries
readonly ddlTradeFinanceAccountingEntriesDropdown: Locator;
readonly btnTradeFinanceAccountingEntriesViewUnauthorisedEntriesButton: Locator;
readonly btnTradeFinanceAccountingEntriesViewTransactionEntriesButton: Locator;
readonly btnTradeFinanceAccountingEntriesViewAccountEntriesButton: Locator;
readonly btnTradeFinanceAccountingEntriesSeePlCategoriesEntriesButton: Locator;

// Guarantees
readonly ddlGuaranteesDropdown: Locator;

// Undertaking Issued
readonly ddlUndertakingIssuedDropdown: Locator;

// Issue of Undertakings
readonly ddlIssueOfUndertakingsDropdown: Locator;

// Demand Guarantees
readonly ddlDemandGuaranteesDropdown: Locator;
readonly btnIssueOfGenericUndertakingButton: Locator;
readonly btnIssueOfBidBondButton: Locator;
readonly btnIssueOfPerformanceBondButton: Locator;
readonly btnIssueOfShippingGuaranteeButton: Locator;

// StandBy LC
readonly ddlStandByLcDropdown: Locator;
readonly btnIssueOfStandbyLcButton: Locator;

// Maintenance of Undertaking
readonly ddlMaintenanceOfUndertakingDropdown: Locator;

// Amendment under Guarantees
readonly ddlAmendmentUnderGuaranteesDropdown: Locator;
readonly btnAmendReverseGuaranteeIssuedButton: Locator;
readonly btnAmendmentResponseToGuaranteeIssuedButton: Locator;
readonly btnInternetAmendRequestsButton: Locator;

// Process Claim
readonly ddlGuaranteeIssuedProcessClaimDropdown: Locator;

// Guarantee Claim Processing
readonly ddlGuaranteeIssuedClaimProcessingDropdown: Locator;
readonly btnRegisterClaimUnderGuaranteeButton: Locator;
readonly btnPayRejectClaimUnderGuaranteeButton: Locator;
readonly btnInternetPendingClaimsUnderProcessButton: Locator;

// Standby LC Claim Processing
readonly ddlStandbyLcClaimProcessingDropdown: Locator;
readonly btnRegisterPresentationUnderStandbyLcButton: Locator;
readonly btnRegisterClaimUnderStandbyLcButton: Locator;
readonly btnPayRejectClaimUnderStandbyLcButton: Locator;

readonly btnChangeCommissionRateButton: Locator;
readonly btnReleaseGuaranteeMarginButton: Locator;
readonly btnExpiryOfGuaranteesButton: Locator;
readonly btnCancellationOfShippingGuaranteeButton: Locator;
readonly btnReinstateLiquidatedGuaranteesButton: Locator;
readonly btnNonExtensionNotificationButton: Locator;

// Internet Request
readonly ddlInternetRequestDropdown: Locator;
readonly btnGuaranteesInternetRequestsButton: Locator;

// Inward Swift Messages
readonly ddlGuaranteesInwardSwiftMessagesDropdown: Locator;
readonly btnInwardGuaranteeSwiftMessagesButton: Locator;

// Multi-party/Participation Guarantees
readonly ddlMultiPartyParticipationGuaranteesDropdown: Locator;
readonly btnIssueOfMultiPartyGuaranteeButton: Locator;
readonly btnAmendmentToMultiPartyGuaranteeButton: Locator;
readonly btnParticipationTakenButton: Locator;

// Undertaking Received
readonly ddlUndertakingReceivedDropdown: Locator;

// Register Undertaking Received
readonly ddlRegisterUndertakingReceivedDropdown: Locator;
readonly btnGenericGuaranteeStandbyLcButton: Locator;
readonly btnGuaranteeReceivedCoveringFacilityButton: Locator;

// Inward Guarantees
readonly ddlInwardGuaranteesDropdown: Locator;
readonly btnInwardMt760MessagesButton: Locator;

// Maintenance of Undertaking Received
readonly ddlMaintenanceOfUndertakingReceivedDropdown: Locator;

// Amendment under Guarantees Received
readonly ddlAmendmentUnderGuaranteesReceivedDropdown: Locator;
readonly btnAmendmentToGuaranteeReceivedButton: Locator;
readonly btnAmendmentResponseToGuaranteeReceivedButton: Locator;

// Process Claim - Undertaking Received
readonly ddlUndertakingReceivedProcessClaimDropdown: Locator;

// Guarantee Claim Processing - Undertaking Received
readonly ddlUndertakingReceivedGuaranteeClaimProcessingDropdown: Locator;
readonly btnRegisterClaimUnderGuaranteeReceivedButton: Locator;
readonly btnPayRejectClaimUnderGuaranteeReceivedButton: Locator;
readonly btnInternetInitiatedClaimRequestsButton: Locator;

// Standby LC Claim Processing - Undertaking Received
readonly ddlStandbyLcClaimProcessingReceivedDropdown: Locator;
readonly btnRegisterPresentationUnderStandbyLcReceivedButton: Locator;
readonly btnRegisterClaimUnderStandbyLcReceivedButton: Locator;
readonly btnPayRejectClaimUnderStandbyLcReceivedButton: Locator;

readonly btnInwardGuaranteesReceivedButton: Locator;
readonly btnReleaseGuaranteesLiabilityButton: Locator;

// Undertaking Advised
readonly ddlUndertakingAdvisedDropdown: Locator;

// Register Undertaking Advised
readonly ddlRegisterUndertakingAdvisedDropdown: Locator;
readonly btnGenericGuaranteeReceivedAdvisedButton: Locator;

// Maintenance of Undertakings
readonly ddlMaintenanceOfUndertakingsDropdown: Locator;

// Amendment under Guarantees Advised
readonly ddlAmendmentUnderGuaranteesAdvisedDropdown: Locator;
readonly btnAmendmentToGuaranteeAdvisedButton: Locator;
readonly btnAmendmentResponseToGuaranteeAdvisedButton: Locator;

// Process Claim - Advised
readonly ddlProcessClaimAdvisedDropdown: Locator;

// Standby LC Claim Processing - Advised
readonly ddlStandbyLcClaimProcessingAdvisedDropdown: Locator;
readonly btnAdviseResponseToPresentationUnderStandbyLcButton: Locator;
readonly btnRegisterClaimUnderStandbyLcAdvisedButton: Locator;
readonly btnPayRejectClaimUnderStandbyLcAdvisedButton: Locator;

// Counter/Counter-counter Undertakings
readonly ddlCounterCounterCounterUndertakingsDropdown: Locator;

// Issuance of Counter/Counter-counter Undertakings
readonly ddlIssuanceOfCounterCounterCounterUndertakingsDropdown: Locator;
readonly btnIssueOfCounterCounterCounterUndertakingsButton: Locator;
readonly btnIssueOfStandbyLcUndertakingButton: Locator;

// Counter/Counter-counter Undertakings Received
readonly ddlCounterCounterCounterUndertakingsReceivedDropdown: Locator;
readonly btnCounterCounterCounterUndertakingButton: Locator;
readonly btnCounterCounterCounterStandbyLcButton: Locator;

// Transfer Undertaking
readonly ddlTransferUndertakingDropdown: Locator;
readonly btnListOfTransferableReceivedUndertakingButton: Locator;
readonly btnIssueOfTransferUndertakingButton: Locator;

// MD Reimbursement Processing
readonly ddlMdReimbursementProcessingDropdown: Locator;
readonly btnMdReimbursementProcessingButton: Locator;

// External Asset Register
readonly ddlExternalAssetRegisterDropdown: Locator;
readonly btnArtAntiquesRegisterButton: Locator;

// Commission and Charges Processing
readonly ddlCommissionAndChargesProcessingDropdown: Locator;
readonly btnGuaranteeClaimedCommissionSettlementButton: Locator;
readonly btnGuaranteeCommissionRefundButton: Locator;
readonly btnWriteoffOfUncollectedCommissionButton: Locator;
readonly btnRefundOfGuaranteeChargesButton: Locator;

// Unauthorised Guarantee Transaction
readonly ddlUnauthorisedGuaranteeTransactionDropdown: Locator;
readonly btnUnauthorisedGuaranteeTransactionsButton: Locator;

// Authorise/Delete Guarantee Transaction
readonly ddlAuthoriseDeleteGuaranteeTransactionDropdown: Locator;
readonly btnAuthoriseDeleteGuaranteeIssuedButton: Locator;
readonly btnAuthoriseDeleteGuaranteeReceivedButton: Locator;
readonly btnAuthoriseDeleteCommRateChangeButton: Locator;
readonly btnAuthorisationOfGuaranteeCommTransactionsButton: Locator;
readonly btnAuthorisationRefundOfChargesButton: Locator;
readonly btnAuthoriseDeleteInternetRequestsButton: Locator;

// Guarantees Enquiries
readonly ddlGuaranteesEnquiriesDropdown: Locator;
readonly btnGuaranteesIssuedOutstandingButton: Locator;
readonly btnFrontedGuaranteesOutstandingButton: Locator;
readonly btnGuaranteesReceivedOutstandingButton: Locator;
readonly btnOustandingShippingGuaranteesButton: Locator;
readonly btnGuaranteesProvisionOustandingButton: Locator;
readonly btnGuaranteesDueForExpiryButton: Locator;
readonly btnGuaranteesExpiredButNotLiquidatedButton: Locator;
readonly btnClaimsReceivedUnderGuaranteeButton: Locator;
readonly btnClaimsPaidCancelledUnderGuaranteeButton: Locator;
readonly btnReversedMdDealsButton: Locator;
readonly btnGuaranteePaymentOrdersButton: Locator;
readonly btnTransferUndertakingIssuedOutstandingButton: Locator;
readonly btnListOfUndertakingsToAddConfirmationButton: Locator;
readonly btnGuaranteesWithAutoExtnDetailsButton: Locator;

// Guarantees TBML Enquiries
readonly ddlGuaranteesTbmlEnquiriesDropdown: Locator;
readonly btnGuaranteesTbmlTransactionsButton: Locator;

// Guarantees Accounting Entries
readonly ddlGuaranteesAccountingEntriesDropdown: Locator;
readonly btnGuaranteesAccountingEntriesViewUnauthorisedEntriesButton: Locator;
readonly btnViewAuthorisedEntriesButton: Locator;
readonly btnGuaranteesAccountingEntriesViewAccountEntriesButton: Locator;
readonly btnGuaranteesAccountingEntriesSeePlCategoriesEntriesButton: Locator;

// Inward Trade Finance Swift Messages
readonly ddlInwardTradeFinanceSwiftMessagesDropdown: Locator;
readonly btnInwardTradeSwiftMessagesButton: Locator;
readonly btnProcessingOfRepairedMessagesButton: Locator;

// Miscellaneous Messages
readonly ddlMiscellaneousMessagesDropdown: Locator;

// Outward Miscellaneous Messages
readonly ddlOutwardMiscellaneousMessagesDropdown: Locator;
readonly btnRequestStopPaymentOfChequeMt111Button: Locator;
readonly btnAuthoriseDeleteMt111Button: Locator;
readonly btnSendFreeFormatMessageButton: Locator;
readonly btnSendCancellationMessageButton: Locator;
readonly btnSendQueryButton: Locator;
readonly btnSendAnswerToQueryButton: Locator;
readonly btnUnauthorisedMiscellaneousMessageButton: Locator;
readonly btnAuthoriseDeleteFreeFormatMessageButton: Locator;
readonly btnAuthoriseDeleteQueryAnswerCancellationButton: Locator;
readonly btnFindOutwardMessageButton: Locator;
readonly btnSentFreeMessagesButton: Locator;
readonly btnViewSentQueriesAnswersButton: Locator;

// Inward Miscellaneous Messages
readonly ddlInwardMiscellaneousMessagesDropdown: Locator;
readonly btnCancellationRequestsMtn92Button: Locator;
readonly btnQueriesReceivedMtn95Button: Locator;
readonly btnAuthoriseDeleteQueryCancellationButton: Locator;
readonly btnAnswersReceivedMtn96Button: Locator;
readonly btnImwFreeFormatMessagesMtn99Button: Locator;

// MT759 Ancillary Messages
readonly ddlMt759AncillaryMessagesDropdown: Locator;
readonly btnOutwardAncillaryMessagesButton: Locator;
readonly btnInwardAncillaryMessagesButton: Locator;
readonly btnAuthoriseAncillaryMessageForLcsButton: Locator;
readonly btnAuthoriseAncillaryMessageForGuaranteesButton: Locator;

// Corporate Lending
readonly ddlCorporateLendingDropdown: Locator;
readonly btnCorporateLendingProductCatalogButton: Locator;
readonly btnFindDealButton: Locator;

// Deal Transactions
readonly ddlDealTransactionsDropdown: Locator;
readonly ddlDealTransactionsArrangementActivitiesPoDropdown: Locator;
readonly btnDealTransactionsAaPayOffButton: Locator;
readonly btnDealTransactionsAaBillsRepaymentButton: Locator;
readonly btnDealTransactionsAuthoriseDeleteArrangementsPoButton: Locator;

readonly btnFindFacilityButton: Locator;

// Facility Transactions
readonly ddlFacilityTransactionsDropdown: Locator;
readonly ddlFacilityTransactionsArrangementActivitiesPoDropdown: Locator;
readonly btnFacilityTransactionsAaRepaymentButton: Locator;
readonly btnFacilityTransactionsAaPayOffButton: Locator;
readonly btnFacilityTransactionsAaPrincipalDecreaseButton: Locator;
readonly btnFacilityTransactionsAaBillsRepaymentButton: Locator;
readonly btnFacilityTransactionsAuthoriseDeleteArrangementsPoButton: Locator;

readonly btnFindDrawingsButton: Locator;

// Lending Transactions
readonly ddlLendingTransactionsDropdown: Locator;
readonly ddlLendingTransactionsArrangementActivitiesPoDropdown: Locator;
readonly btnAaDisbursementDomesticButton: Locator;
readonly btnAaDisbursementInternationalButton: Locator;
readonly btnLendingTransactionsAaRepaymentButton: Locator;
readonly btnAaAdvanceRepaymentButton: Locator;
readonly btnLendingTransactionsAaPayOffButton: Locator;
readonly btnLendingTransactionsAaPrincipalDecreaseButton: Locator;
readonly btnAaCreditArrangementButton: Locator;
readonly btnLendingTransactionsAuthoriseDeleteArrangementsPoButton: Locator;

// Arrangement Enquiries
readonly ddlArrangementEnquiriesDropdown: Locator;
readonly btnPendingDrawdownRolloverRequestButton: Locator;
readonly btnLoansGettingRolloverIn7DaysButton: Locator;
readonly btnLoansExpiringInNext7DaysButton: Locator;
readonly btnMaturedClosedDealsButton: Locator;
readonly btnMaturedClosedFacilitiesButton: Locator;
readonly btnMaturedClosedDrawingsButton: Locator;
readonly btnFacilityCreditRiskStatusButton: Locator;

// Evidence
readonly ddlEvidenceDropdown: Locator;
readonly btnNewEvidenceButton: Locator;

// Evidence Enquiries
readonly ddlEvidenceEnquiriesDropdown: Locator;
readonly btnEvidencePendingApprovalButton: Locator;
readonly btnUpcomingEvidenceDuesButton: Locator;
readonly btnEvidencesDueButton: Locator;
readonly btnEvidencesPastDueButton: Locator;
readonly btnNonCompliantEvidencesButton: Locator;

// Secondary Loan Trading
readonly ddlSecondaryLoanTradingDropdown: Locator;
readonly btnCaptureLoanTradeButton: Locator;
readonly btnAuthoriseEditDeleteLoanTradeButton: Locator;
readonly btnLoanTradeReportButton: Locator;
readonly btnPendingConfirmationTradesButton: Locator;
readonly btnConfirmedTradesButton: Locator;
readonly btnPendingConsentButton: Locator;
readonly btnPendingSettlementTradesButton: Locator;
readonly btnSettledTradesButton: Locator;
readonly btnLoanTradesBookedTodayButton: Locator;
readonly btnLoanTradeChargesButton: Locator;
readonly btnLoanTradeBalancesButton: Locator;
readonly btnSettledTradeInLast10DaysButton: Locator;

// Syndicated/Corporate Lending
readonly ddlSyndicatedCorporateLendingDropdown: Locator;

// Syndicated Loans
readonly ddlSyndicatedLoansDropdown: Locator;
readonly btnFacilityButton: Locator;

// Cash Management
readonly ddlCashManagementDropdown: Locator;

// Balance Netting
readonly ddlBalanceNettingDropdown: Locator;
readonly btnCashManagementProductCatalogButton: Locator;
readonly btnFindCustomerButton: Locator;
readonly btnFindPoolButton: Locator;
readonly btnFindAccountButton: Locator;
readonly btnAccountTransactionsButton: Locator;

// Balance Netting Enquiries
readonly ddlBalanceNettingEnquiriesDropdown: Locator;
readonly btnSweepScheduledAfterCutOffTimeButton: Locator;
readonly btnViewAmendCashPoolGroupsButton: Locator;

// Notional Pooling
readonly ddlNotionalPoolingDropdown: Locator;
readonly btnCreateGroupHierarchyButton: Locator;
readonly btnCreateNotionalPoolMainAccountButton: Locator;
readonly btnCreateNotionalPoolSubAccountButton: Locator;
readonly btnRemoveSubAccountLinkButton: Locator;
readonly btnAuthoriseDeleteMainAccountButton: Locator;
readonly btnAuthoriseDeleteSubAccountButton: Locator;
readonly btnAuthoriseDeleteRemoveSubAccountLinkButton: Locator;

// Notional Pooling Enquiry
readonly ddlNotionalPoolingEnquiryDropdown: Locator;
readonly btnNotionalPoolAccountsHierarchyButton: Locator;
readonly btnViewBeneficiaryInterestButton: Locator;

// Transactional Pooling
readonly ddlTransactionalPoolingDropdown: Locator;
readonly btnCreateSweepConditionButton: Locator;

// Cash Pool Group Functions
readonly ddlCashPoolGroupFunctionsDropdown: Locator;
readonly btnCreateSimpleGroupButton: Locator;
readonly btnCreateSharedBalancesGroupButton: Locator;
readonly btnCreateFinancingCashPoolButton: Locator;
readonly btnCreateSubGroupAndLinkToMainGroupButton: Locator;
readonly btnCreateSharedBalancesSubGroupButton: Locator;
readonly btnAuthorizeDeleteGroupButton: Locator;
readonly btnAuthorizeDeleteSubGroupButton: Locator;

// Cash Pool Sweep Functions
readonly ddlCashPoolSweepFunctionsDropdown: Locator;
readonly btnCreateCashPoolButton: Locator;
readonly btnAmendCashPoolButton: Locator;
readonly btnAuthorizeDeleteCashPoolButton: Locator;

// Sweep Processes
readonly ddlSweepProcessesDropdown: Locator;
readonly btnIntraDaySweepsButton: Locator;
readonly btnReverseLastRunSweepsButton: Locator;
readonly btnAuthoriseDeleteSweepsButton: Locator;
readonly btnCreateCashPoolProcessButton: Locator;

// Cash Management Enquiries
readonly ddlCashManagementEnquiriesDropdown: Locator;
readonly btnSweepHistoryButton: Locator;
readonly btnSharedAccountsListButton: Locator;
readonly btnCashPoolGroupListButton: Locator;
readonly btnCashPoolLinksListButton: Locator;
readonly btnGroupPositionButton: Locator;
readonly btnSweepMovementsButton: Locator;
readonly btnProjectedSweepMovementsButton: Locator;
readonly btnSuspendedSweepsButton: Locator;
readonly btnInterestStatementForMasterAccountButton: Locator;
readonly btnInterestStatementForSubAccountButton: Locator;

// Factoring and Forfaiting
readonly ddlFactoringAndForfaitingDropdown: Locator;

// Automatic Upload & Batching
readonly ddlAutomaticUploadBatchingDropdown: Locator;
readonly btnUploadReceivablesButton: Locator;
readonly btnAmendDeleteUploadErrorsButton: Locator;
readonly btnAuthoriseDeleteAllUploadedRegistersButton: Locator;
readonly btnDeleteUploadErrorRegisterButton: Locator;
readonly btnRectifyProductUpdateErrorsButton: Locator;
readonly btnAutoBatchingChangeProductButton: Locator;

// Manual Upload & Batching
readonly ddlManualUploadBatchingDropdown: Locator;

// Receivable Register
readonly ddlReceivableRegisterDropdown: Locator;
readonly btnRegisterReceivablesButton: Locator;
readonly btnChangeProductTypeButton: Locator;
readonly btnAmendReverseReceivablesButton: Locator;
readonly btnAuthoriseDeleteReceivablesButton: Locator;

// Batch Receivables
readonly ddlBatchReceivablesDropdown: Locator;
readonly btnInputReceivableBatchButton: Locator;
readonly btnAmendReverseReceivableBatchButton: Locator;
readonly btnAuthoriseDeleteReceivableBatchButton: Locator;
readonly btnRebatchButton: Locator;

// Factoring and Forfaiting Enquiries
readonly ddlFactoringAndForfaitingEnquiriesDropdown: Locator;
readonly btnListOfLodgedReceivablesButton: Locator;
readonly btnReceivablesLodgedForCollnDiscountingButton: Locator;
readonly btnListOfBatchedReceivablesButton: Locator;
readonly btnListOfDiscountedReceivablesButton: Locator;
readonly btnListOfReceivablesSentForCollectionButton: Locator;
readonly btnListOfCollateralisedReceivablesButton: Locator;
readonly btnListOfReceivablesByTypeButton: Locator;
readonly btnListOfReceivablesMaturingNext7DaysButton: Locator;
readonly btnListOfReceivablesWithSuspendedIntButton: Locator;
readonly btnReceivablesStatusButton: Locator;
readonly btnAutoBatchDetailsButton: Locator;
readonly btnAutoUploadDetailsButton: Locator;
readonly btnAutoRegisterDetailsButton: Locator;
readonly btnInvoiceUploadSummaryButton: Locator;
readonly btnUpdateProductSummaryButton: Locator;
readonly btnPendingDisbursementsButton: Locator;
readonly btnOverdueRegistersButton: Locator;
readonly btnBuyerSellerLimitDetailsButton: Locator;

// Receivable Transaction
readonly ddlReceivableTransactionDropdown: Locator;
readonly btnInputDisbursementRegisterButton: Locator;
readonly btnInputDisbursementBatchButton: Locator;
readonly btnInputSettlementButton: Locator;
readonly btnInputReceivableContractButton: Locator;
readonly btnUnsuccessfulDisbursementRegisterButton: Locator;
readonly btnUnsuccessfulDisbursementBatchButton: Locator;
readonly btnAmendReverseReceivableContractButton: Locator;
readonly btnAuthoriseDeleteDisbursementButton: Locator;
readonly btnAuthoriseDeleteSettlementButton: Locator;
readonly btnAuthoriseDeleteReceivableContractButton: Locator;

// Accounting Entries
readonly ddlFactoringAndForfaitingAccountingEntriesDropdown: Locator;
readonly btnFactoringAndForfaitingAccountingEntriesViewUnauthorisedEntriesButton: Locator;
readonly btnFactoringAndForfaitingAccountingEntriesViewTransactionEntriesButton: Locator;
readonly btnFactoringAndForfaitingAccountingEntriesViewAccountEntriesButton: Locator;
readonly btnSeePlCategoryEntriesButton: Locator;
readonly btnSeeForwardEntriesButton: Locator;

// Advices/Messages
readonly ddlAdvicesMessagesDropdown: Locator;
readonly btnViewReceivableAdvicesMessagesButton: Locator;

// Adhoc Charge Request
readonly ddlAdhocChargeRequestDropdown: Locator;
readonly btnWithDeliveryButton: Locator;
readonly btnWithoutDeliveryButton: Locator;
readonly btnAuthoriseDeleteChargeRequestButton: Locator;
readonly btnViewDeliveryMessagesButton: Locator;
readonly btnChargesUnpaidButton: Locator;

constructor(page: Page) {
    super(page);
    this.page = page;

// Corporate Operations
this.ddlCorporateOperationsDropdown = page.locator(`//span[contains(text(),'Corporate Operations')]`);

// Trade Finance
this.ddlTradeFinanceDropdown = page.locator(`//span[text()=" Trade Finance "]`);

// Import LCs
this.ddlImportLcsDropdown = page.locator(`//span[text()=" Import LCs "]`);
this.ddlIssuanceOfImportLcsDropdown = page.locator(`//span[text()=" Issuance of Import LCs "]`);
this.btnPreAdviceOfImportLcsButton = page.locator(`//a[text()=" Pre Advice of Import LCs "]`);
this.btnPreAdviceToIssueListOfPreadvisedLcsButton = page.locator(`//a[text()=" Pre Advice to Issue/List of Preadvised LCs "]`);
this.btnIssueOfSightPaymentLcsButton = page.locator(`//a[text()=" Issue of Sight Payment LCs "]`);
this.btnIssueOfUsanceLcsButton = page.locator(`//a[text()=" Issue of Usance LCs "]`);
this.btnIssueOfNegotiationLcsButton = page.locator(`//a[text()=" Issue of Negotiation LCs "]`);
this.btnIssueOfMixedPaymentLcsButton = page.locator(`//a[text()=" Issue of Mixed Payment LCs "]`);
this.btnImportLcsInternetRequestsButton = page.locator(`//a[text()=" Internet Requests "]`);

// Maintenance of Import LCs
this.ddlMaintenanceOfImportLcsDropdown = page.locator(`//span[text()=" Maintenance of Import LCs "]`);
this.btnMaintenanceOfImportLcsTakeReduceMarginButton = page.locator(`//a[text()=" Take/Reduce Margin "]`);
this.btnMaintenanceOfImportLcsReleaseMarginButton = page.locator(`//a[text()=" Release Margin "]`);
this.btnMaintenanceOfImportLcsInternalAmendmentButton = page.locator(`//a[text()=" Internal Amendment "]`);
this.btnMaintenanceOfImportLcsExternalAmendmentButton = page.locator(`//a[text()=" External Amendment "]`);
this.btnMaintenanceOfImportLcsAmendmentSeekingBenefConsentButton = page.locator(`//a[text()=" Amendment seeking Benef's Consent "]`);
this.btnMaintenanceOfImportLcsInternetRequestsLcAmendmentsButton = page.locator(`//a[text()=" Internet Requests - LC Amendments "]`);
this.btnApproveRejectAmendmentOfImportLcButton = page.locator(`//a[text()=" Approve/Reject Amendment of Import LC "]`);
this.btnReversalCancellationOfImportLcButton = page.locator(`//a[text()=" Reversal/Cancellation of Import LC "]`);

// Drawings under Import LCs
this.ddlDrawingsUnderImportLcsDropdown = page.locator(`//span[text()=" Drawings under Import LCs "]`);
this.btnRegisterUploadDocumentsButton = page.locator(`//a[text()=" Register/Upload Documents "]`);
this.btnDrawingsUnderImportLcsCaptureCheckDocumentsButton = page.locator(`//a[text()=" Capture/Check Documents "]`);
this.btnDrawingsUnderImportLcsInternetPendingDrawingsButton = page.locator(`//a[text()=" Internet Pending Drawings "]`);

// Non-Discrepant Documents under Import LC
this.ddlNonDiscrepantDocumentsUnderImportLcDropdown = page.locator(`//span[text()=" Non-Discrepant Documents under Import LC "]`);
this.btnDrawingsUnderShippingGuaranteeButton = page.locator(`//a[text()=" Drawings Under Shipping Guarantee "]`);
this.btnSightPaymentUnderImportLcButton = page.locator(`//a[text()=" Sight Payment under Import LC "]`);
this.btnAcceptanceOfDocumentsButton = page.locator(`//a[text()=" Acceptance of Documents "]`);
this.btnDrawingsUnderMixedPaymentImportLcButton = page.locator(`//a[text()=" Drawings Under Mixed Payment "]`);
this.btnPaymentAcceptanceUnderStandbyLcImportButton = page.locator(`//a[text()=" Payment/Acceptance under Standby LC "]`);
this.btnOnlineMaturityOfAcceptancesImportsButton = page.locator(`//a[text()=" Online Maturity of Acceptances(Imports) "]`);
this.btnAmendmentOnlineSettlementOfMixedPaymentsImportButton = page.locator(`//a[text()=" Amendment/Online Settlement of Mixed Payments "]`);
this.btnAmendmentToPaidDrawingsButton = page.locator(`//a[text()=" Amendment to Paid Drawings "]`);

// Sight Payment with Financing
this.ddlSightPaymentWithFinancingDropdown = page.locator(`//span[text()=" Sight Payment with Financing "]`);
this.btnSightPaymentUnderImportLcFinancingButton = page.locator(`//a[text()=" Sight Payment under Import LC "]`);

// Discounting under Import LC
this.ddlDiscountingUnderImportLcDropdown = page.locator(`//span[text()=" Discounting under Import LC "]`);
this.btnDiscountingOfUsanceBillsImportsButton = page.locator(`//a[text()=" Discounting of Usance Bills(Imports) "]`);
this.btnDiscountingUnderImportLcAmendmentToUsanceDiscountingButton = page.locator(`//a[text()=" Amendment to Usance Discounting "]`);
this.btnDiscountingForMixedPaymentsImportsButton = page.locator(`//a[text()=" Discounting for Mixed Payments(Imports) "]`);
this.btnAmendmentForMixedPaymentDiscountingImportButton = page.locator(`//a[text()=" Amendment for Mixed Payment Discounting "]`);

// Discrepant Documents under Import LC
this.ddlDiscrepantDocumentsUnderImportLcDropdown = page.locator(`//span[text()=" Discrepant Documents under Import LC "]`);
this.btnDocumentsPendingForApplicantApprovalButton = page.locator(`//a[text()=" Documents Pending for Applicant Approval "]`);
this.btnRejectDocumentsUnderImportLcButton = page.locator(`//a[text()=" Reject Documents under Import LC "]`);
this.btnHandlingOfRejectedDocumentsImportsButton = page.locator(`//a[text()=" Handling of Rejected Documents(Imports) "]`);

// Documents Under Trust (Import LC)
this.ddlDocumentsUnderTrustImportLcDropdown = page.locator(`//span[text()=" Documents Under Trust (Import LC) "]`);
this.btnReleaseDocumentUnderTrustButton = page.locator(`//a[text()=" Release Document Under Trust "]`);
this.btnPayRejectAcceptDocReleasedUnderTrustButton = page.locator(`//a[text()=" Pay/Reject/Accept Doc Released Under Trust "]`);
this.btnOnlineMaturityOfAcceptedDocumentsButton = page.locator(`//a[text()=" Online Maturity of Accepted Documents "]`);
this.btnFinalRejectionOfDocumentsButton = page.locator(`//a[text()=" Final Rejection of Documents "]`);

// Import Inward Swift Messages
this.ddlImportInwardSwiftMessagesDropdown = page.locator(`//span[text()=" Import Inward Swift Messages "]`);
this.btnImportInwardSwiftMessagesButton = page.locator(`//a[text()=" Import Inward Swift Messages "]`);
this.btnAcknowledgementMessagesButton = page.locator(`//a[text()=" Acknowledgement Messages "]`);

// Export LCs
this.ddlExportLcsDropdown = page.locator(`//span[text()=" Export LCs "]`);

// Register/Advise Export LCs
this.ddlRegisterAdviseExportLcsDropdown = page.locator(`//span[text()=" Register/Advise Export LCs "]`);
this.btnExportLcsPreAdviceButton = page.locator(`//a[text()=" Pre-Advice "]`);
this.btnPreAdviceToAdviseListOfPreadvisedLcsButton = page.locator(`//a[text()=" PreAdvice to Advice/List of Preadvised LCs "]`);
this.btnAdviseRegisterSightPaymentLcsButton = page.locator(`//a[text()=" Advise/Register Sight Payment LCs "]`);
this.btnAdviseRegisterUsanceLcsButton = page.locator(`//a[text()=" Advise/Register Usance LCs "]`);
this.btnAdviseRegisterNegotiationLcsButton = page.locator(`//a[text()=" Advise/Register Negotiation LCs "]`);
this.btnAdviseRegisterMixedPaymentLcsButton = page.locator(`//a[text()=" Advise/Register Mixed Payment LCs "]`);

// Transfer of Export LCs
this.ddlTransferOfExportLcsDropdown = page.locator(`//span[text()=" Transfer of Export LCs "]`);
this.btnListOfTransferableExportLcsButton = page.locator(`//a[text()=" List of Transferable Export LCs "]`);
this.btnTransferOfExportLcButton = page.locator(`//a[text()=" Transfer of Export LC "]`);

// Maintenance of Export LCs
this.ddlMaintenanceOfExportLcsDropdown = page.locator(`//span[text()=" Maintenance of Export LCs "]`);
this.btnMaintenanceOfExportLcsInternalAmendmentButton = page.locator(`//a[text()=" Internal Amendment "]`);
this.btnMaintenanceOfExportLcsExternalAmendmentButton = page.locator(`//a[text()=" External Amendment "]`);
this.btnMaintenanceOfExportLcsAmendmentSeekingBenefConsentButton = page.locator(`//a[text()=" Amendment seeking Benef's Consent "]`);
this.btnMaintenanceOfExportLcsInternetRequestsLcAmendmentsButton = page.locator(`//a[text()=" Internet Requests - LC Amendments "]`);
this.btnApproveRejectAmendmentOfExportLcButton = page.locator(`//a[text()=" Approve/Reject Amendment of Export LC "]`);
this.btnReversalCancellationOfExportLcButton = page.locator(`//a[text()=" Reversal/Cancellation of Export LC "]`);

// Drawings under Export LCs
this.ddlDrawingsUnderExportLcsDropdown = page.locator(`//span[text()=" Drawings under Export LCs "]`);
this.btnRegisterDocumentsButton = page.locator(`//a[text()=" Register Documents "]`);
this.btnDrawingsUnderExportLcsCaptureCheckDocumentsButton = page.locator(`//a[text()=" Capture/Check Documents "]`);
this.btnRegisterCaptureCheckDocTransferredLcButton = page.locator(`//a[text()=" Register/Capture/Check Doc. - Transferred LC "]`);
this.btnDrawingsUnderExportLcsInternetPendingDrawingsButton = page.locator(`//a[text()=" Internet Pending Drawings "]`);

// Non-Discrepant Documents under Export LC
this.ddlNonDiscrepantDocumentsUnderExportLcDropdown = page.locator(`//span[text()=" Non-Discrepant Documents under Export LC "]`);
this.btnSightPaymentUnderExportLcButton = page.locator(`//a[text()=" Sight Payment under Export LC "]`);
this.btnAcceptanceUnderExportLcButton = page.locator(`//a[text()=" Acceptance under Export LC "]`);
this.btnDrawingsUnderMixedPaymentExportLcButton = page.locator(`//a[text()=" Drawings Under Mixed Payment "]`);
this.btnPaymentAcceptanceUnderStandbyLcExportButton = page.locator(`//a[text()=" Payment/Acceptance under Standby LC "]`);
this.btnOnlineMaturityOfAcceptancesButton = page.locator(`//a[text()=" Online Maturity of Acceptances "]`);
this.btnAmendmentOnlineSettlementOfMixedPaymentsExportButton = page.locator(`//a[text()=" Amendment/Online Settlement of Mixed Payments "]`);

// Negotiation/Discounting under Export LC
this.ddlNegotiationDiscountingUnderExportLcDropdown = page.locator(`//span[text()=" Negotiation/Discounting under Export LC "]`);
this.btnSightBillNegotiationDiscountingButton = page.locator(`//a[text()=" Sight Bill Negotiation/Discounting "]`);
this.btnAmendmentToSightDiscountingButton = page.locator(`//a[text()=" Amendment to Sight Discounting "]`);
this.btnUsanceBillNegotiationDiscountingButton = page.locator(`//a[text()=" Usance Bill Negotiation/Discounting "]`);
this.btnNegotiationDiscountingUnderExportLcAmendmentToUsanceDiscountingButton = page.locator(`//a[text()=" Amendment to Usance Discounting "]`);
this.btnMixedBillsNegotiationDiscountingButton = page.locator(`//a[text()=" Mixed Bills Negotiation/Discounting "]`);
this.btnAmendmentForMixedPaymentDiscountingExportButton = page.locator(`//a[text()=" Amendment for Mixed Payment Discounting "]`);

// Discrepant Documents under Export LC
this.ddlDiscrepantDocumentsUnderExportLcDropdown = page.locator(`//span[text()=" Discrepant Documents under Export LC "]`);
this.btnRejectDiscrepantDocumentsExportsButton = page.locator(`//a[text()=" Reject Discrepant Documents (Exports) "]`);
this.btnHandlingOfRejectedDocumentsExportsButton = page.locator(`//a[text()=" Handling of Rejected Documents(Exports) "]`);

// Payment Under Reserve
this.ddlPaymentUnderReserveDropdown = page.locator(`//span[text()=" Payment Under Reserve "]`);
this.btnPaymentUnderReserveExportsButton = page.locator(`//a[text()=" Payment Under Reserve (Exports) "]`);
this.btnPaymentOfSightBillPaidUnderReserveButton = page.locator(`//a[text()=" Payment of Sight Bill Paid Under Reserve "]`);
this.btnBillPaidUnderReserveReturnedUnpaidButton = page.locator(`//a[text()=" Bill (Paid Under Reserve) Returned Unpaid "]`);
this.btnFinalRejectionOfReturnedBillButton = page.locator(`//a[text()=" Final Rejection of Returned Bill "]`);

// Export Loan and Adjustment from Bill Proceeds
this.ddlExportLoanAndAdjustmentFromBillProceedsDropdown = page.locator(`//span[text()=" Export Loan and Adjustment from Bill Proceeds "]`);
this.btnCreateExportPackingCreditLimitButton = page.locator(`//a[text()=" Create Export Packing Credit Limit "]`);
this.btnCreateExportPackingCreditAccountButton = page.locator(`//a[text()=" Create Export Packing Credit Account "]`);
this.btnSightNegotiationAdjustmentOfEpcButton = page.locator(`//a[text()=" Sight Negotiation-Adjustment of EPC "]`);
this.btnSightNegotiationAdjustmentOfLoanButton = page.locator(`//a[text()=" Sight Negotiation-Adjustment of Loan "]`);

// Inward SWIFT Messages (LC)
this.ddlInwardSwiftMessagesLcDropdown = page.locator(`//span[text()=" Inward SWIFT Messages (LC) "]`);
this.btnInwardLcsButton = page.locator(`//a[text()=" Inward LC's "]`);
this.btnBeneConsentAmendmentsButton = page.locator(`//a[text()=" Bene Consent Amendment's "]`);
this.btnRejectionThroughMt734Button = page.locator(`//a[text()=" Rejection through MT 734 "]`);
this.btnNonConformingReimbursementsButton = page.locator(`//a[text()=" Non-Conforming Reimbursements "]`);
this.btnOtherInwardMessagesButton = page.locator(`//a[text()=" Other Inward Messages "]`);

// Back to Back LCs
this.ddlBackToBackLcsDropdown = page.locator(`//span[text()=" Back to Back LCs "]`);
this.btnExportLcForBackToBackLcButton = page.locator(`//a[text()=" Export LC for Back to Back LC "]`);
this.btnBackToBackImportLcButton = page.locator(`//a[text()=" Back to Back Import LC "]`);

// Inward Collections
this.ddlInwardCollectionsDropdown = page.locator(`//span[text()=" Inward Collections "]`);
this.btnInwardCollectionsLodgeSightDocyCollectionButton = page.locator(`//a[text()=" Lodge Sight Docy Collection "]`);
this.btnInwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton = page.locator(`//a[text()=" Lodge Usance(Tenor) Documentary Collection "]`);
this.btnLodgeCleanCollectionButton = page.locator(`//a[text()=" Lodge Clean Collection "]`);
this.btnAmendmentOfInwardAvalisedCollectionButton = page.locator(`//a[text()=" Amendment of Inward/Avalised Collection "]`);
this.btnInternetPendingInwardCollectionsButton = page.locator(`//a[text()=" Internet Pending Inward Collections "]`);
this.btnAcceptanceAvalisationOfInwardCollectionButton = page.locator(`//a[text()=" Acceptance/Avalisation of Inward Collection "]`);
this.btnPaymentOfInwardCollectionButton = page.locator(`//a[text()=" Payment of Inward Collection "]`);
this.btnInitiatePaymentOfAcceptedAvalisedCollnButton = page.locator(`//a[text()=" Initiate Payment of Accepted/Avalised Colln "]`);
this.btnSettleAcceptedAvalisedCollectionButton = page.locator(`//a[text()=" Settle Accepted/Avalised Collection "]`);
this.btnInwardCollectionsTakeReduceMarginButton = page.locator(`//a[text()=" Take/Reduce Margin "]`);
this.btnClosureOfInwardCollectionButton = page.locator(`//a[text()=" Closure of Inward Collection "]`);

// Inward Collections - Inward Swift Messages
this.ddlInwardCollectionsInwardSwiftMessagesDropdown = page.locator(`//span[text()=" Inward Swift Messages "]`);
this.btnInwardCollectionsMessagesProcessedButton = page.locator(`//a[text()=" Messages Processed "]`);

// Outward Collections
this.ddlOutwardCollectionsDropdown = page.locator(`//span[text()=" Outward Collections "]`);
this.btnDefineDirectCollectionRangeForCustomersButton = page.locator(`//a[text()=" Define Direct Collection Range for Customers "]`);
this.btnOutwardCollectionsLodgeSightDocyCollectionButton = page.locator(`//a[text()=" Lodge Sight Docy Collection "]`);
this.btnOutwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton = page.locator(`//a[text()=" Lodge Usance(Tenor) Documentary Collection "]`);
this.btnLodgeCleanCollectionsButton = page.locator(`//a[text()=" Lodge Clean Collections "]`);
this.btnInternetPendingOutwardCollectionsButton = page.locator(`//a[text()=" Internet Pending Outward Collections "]`);
this.btnAmendUploadDocsOutwardCollectionButton = page.locator(`//a[text()=" Amend/Upload(Docs) Outward Collection "]`);
this.btnTraceTheCollectionButton = page.locator(`//a[text()=" Trace the Collection "]`);
this.btnAcceptanceOfOutwardCollectionButton = page.locator(`//a[text()=" Acceptance of Outward Collection "]`);
this.btnPaymentOfOutwardCollectionButton = page.locator(`//a[text()=" Payment of Outward Collection "]`);
this.btnOnlineMaturityOfAcceptedCollectionsButton = page.locator(`//a[text()=" Online Maturity of Accepted Collections "]`);

// Purchase/Discounting of Collection
this.ddlPurchaseDiscountingOfCollectionDropdown = page.locator(`//span[text()=" Purchase/ Discounting of Collection "]`);
this.btnPurchaseOfCollectionButton = page.locator(`//a[text()=" Purchase of Collection "]`);
this.btnAmendmentToCollectionPurchasedButton = page.locator(`//a[text()=" Amendment to Collection Purchased "]`);
this.btnPurchaseOfAvalisedCollectionButton = page.locator(`//a[text()=" Purchase of Avalised Collection "]`);
this.btnAmendmentToAvalisedCollectionPurchasedButton = page.locator(`//a[text()=" Amendment to Avalised Collection Purchased "]`);

// Return/Closure of Outward Collection
this.ddlReturnClosureOfOutwardCollectionDropdown = page.locator(`//span[text()=" Return/Closure of Outward Collection "]`);
this.btnReturnOfOutwardCollectionsButton = page.locator(`//a[text()=" Return of outward collections "]`);
this.btnClosureOfOutwardCollectionsButton = page.locator(`//a[text()=" Closure of outward collections "]`);

// Outward Collections - Inward SWIFT Messages
this.ddlOutwardCollectionsInwardSwiftMessagesDropdown = page.locator(`//span[text()=" Inward SWIFT Messages "]`);
this.btnOutwardCollectionsMessagesProcessedButton = page.locator(`//a[text()=" Messages Processed "]`);

// Open Account Trading
this.ddlOpenAccountTradingDropdown = page.locator(`//span[text()=" Open Account Trading "]`);

// Import Open Account Trading
this.ddlImportOpenAccountTradingDropdown = page.locator(`//span[text()=" Import Open Account Trading "]`);
this.btnLodgeImportDocumentsButton = page.locator(`//a[text()=" Lodge Import Documents "]`);
this.btnAmendImportDocumentsButton = page.locator(`//a[text()=" Amend Import Documents "]`);
this.btnSightPaymentOfImportDocsButton = page.locator(`//a[text()=" Sight Payment of Import Docs "]`);
this.btnUsancePaymentImportButton = page.locator(`//a[text()=" Usance Payment "]`);

// Export Open Account Trading
this.ddlExportOpenAccountTradingDropdown = page.locator(`//span[text()=" Export Open Account Trading "]`);
this.btnLodgeExportDocumentsButton = page.locator(`//a[text()=" Lodge Export Documents "]`);
this.btnAmendExportDocumentsButton = page.locator(`//a[text()=" Amend Export Documents "]`);
this.btnSightPaymentOfExportDocsButton = page.locator(`//a[text()=" Sight Payment of Export Docs "]`);
this.btnUsancePaymentExportButton = page.locator(`//a[text()=" Usance Payment "]`);

// Advance Payment Trading
this.ddlAdvancePaymentTradingDropdown = page.locator(`//span[text()=" Advance Payment Trading "]`);

// Import - Trade Evidence against Advance Payment
this.ddlImportTradeEvidenceAgainstAdvancePaymentDropdown = page.locator(`//span[text()=" Import - Trade Evidence against Advance Payment "]`);
this.btnLodgeImportAdvancePaymentButton = page.locator(`//a[text()=" Lodge Import Advance Payment "]`);
this.btnAmendImportAdvancePaymentButton = page.locator(`//a[text()=" Amend Import Advance Payment "]`);

// Export - Trade Evidence against Advance Payment
this.ddlExportTradeEvidenceAgainstAdvancePaymentDropdown = page.locator(`//span[text()=" Export - Trade Evidence against Advance Payment "]`);
this.btnLodgeExportAdvancePaymentButton = page.locator(`//a[text()=" Lodge Export Advance Payment "]`);
this.btnAmendExportAdvancePaymentButton = page.locator(`//a[text()=" Amend Export Advance Payment "]`);

// Charge Processing
this.ddlChargeProcessingDropdown = page.locator(`//span[text()=" Charge Processing "]`);
this.btnDirectChargeCollectionButton = page.locator(`//a[text()=" Direct Charge Collection "]`);
this.btnLcRefundOfChargesButton = page.locator(`//a[text()=" LC Refund of Charges "]`);
this.btnSettleWriteOffClaimedChargesButton = page.locator(`//a[text()=" Settle/Write off Claimed Charges "]`);
this.btnWaiveUnpaidChargesButton = page.locator(`//a[text()=" Waive Unpaid Charges "]`);

// LC Reimbursement Processing
this.ddlLcReimbursementProcessingDropdown = page.locator(`//span[text()=" LC Reimbursement Processing "]`);
this.btnLcReimbursementTransactionsButton = page.locator(`//a[text()=" LC Reimbursement Transactions "]`);
this.btnReimbursementAuthorisationButton = page.locator(`//a[text()=" Reimbursement Authorisation "]`);

// Unauthorised Transactions
this.ddlUnauthorisedTransactionsDropdown = page.locator(`//span[text()=" Unauthorised Transactions "]`);
this.btnUnauthorisedLcCollnTransactionsButton = page.locator(`//a[text()=" Unauthorised LC / Colln Transactions "]`);
this.btnUnauthorisedDrawingsButton = page.locator(`//a[text()=" Unauthorised Drawings "]`);
this.btnUnauthorisedChargesButton = page.locator(`//a[text()=" Unauthorised ChargesS "]`);

// Authorise TF Transactions
this.ddlAuthoriseTfTransactionsDropdown = page.locator(`//span[text()=" Authorise TF Transactions "]`);
this.btnAuthoriseDeleteImportLcsAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Import LCs/Amendments "]`);
this.btnAuthoriseDeleteExportLcsAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Export LCs/Amendments "]`);
this.btnAuthoriseDeleteInwardCollnAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Inward Colln/Amendments "]`);
this.btnAuthoriseDeleteOutwardCollnAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Outward Colln/Amendments "]`);
this.btnAuthoriseDeleteBeneConsentAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Bene Consent Amendments "]`);
this.btnAuthoriseDeleteDrawingsButton = page.locator(`//a[text()=" Authorise/Delete Drawings "]`);
this.btnAuthoriseDeleteDiscountAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Discount Amendments "]`);
this.btnAuthoriseDeleteDirectCollnAllotmentButton = page.locator(`//a[text()=" Authorise/Delete Direct Colln Allotment "]`);
this.btnAuthoriseDeleteChargeRecoveryButton = page.locator(`//a[text()=" Authorise/Delete Charge Recovery "]`);
this.btnAuthoriseDeleteRefundOfChargesButton = page.locator(`//a[text()=" Authorise/Delete Refund of Charges "]`);
this.btnAuthoriseDeleteChargeSettlementWriteOffButton = page.locator(`//a[text()=" Authorise/Delete Charge Settlement/WriteOff "]`);
this.btnAuthoriseDeleteInwardLcsButton = page.locator(`//a[text()=" Authorise/Delete Inward LCs "]`);
this.btnAuthoriseDeleteInwardLcAmendmentsButton = page.locator(`//a[text()=" Authorise/Delete Inward LC Amendments "]`);
this.btnAuthoriseDeleteInwardDrawingsButton = page.locator(`//a[text()=" Authorise/Delete Inward Drawings "]`);
this.btnAuthoriseDeleteInwardMsgsForInwardCollnButton = page.locator(`//a[text()=" Authorise/Delete Inward Msgs for Inward Colln "]`);

// Trade Finance Enquiries
this.ddlTradeFinanceEnquiriesDropdown = page.locator(`//span[text()=" Enquiries "]`);

this.btnImportLcsOutstandingButton = page.locator(`//a[text()=" Import LCs Outstanding "]`);
this.btnImportLcsExpiredButOutstandingButton = page.locator(`//a[text()=" Import LCs Expired but Outstanding "]`);
this.btnImportLcsLinkedToShippingGuaranteeButton = page.locator(`//a[text()=" Import LCs Linked to Shipping Guarantee "]`);
this.btnImportLcsCoveredThroughFxContractButton = page.locator(`//a[text()=" Import LCs Covered through FX Contract "]`);
this.btnImportLcsBillReceivedUnderCollectionButton = page.locator(`//a[text()=" Import LCs Bill Received under Collection "]`);
this.btnSgDrawingsBookedUnderLcButton = page.locator(`//a[text()=" SG Drawings booked under LC "]`);
this.btnPresentationsPendingCheckingImportLcButton = page.locator(`//a[text()=" Presentations pending checking - Import LC "]`);
this.btnUsanceBillsDueForSettlementImportLcButton = page.locator(`//a[text()=" Usance Bills Due for Settlement -Import LC "]`);
this.btnOsUsanceBillsDiscountedUnderImportLcButton = page.locator(`//a[text()=" O/S Usance Bills Discounted under Import LC "]`);
this.btnDocumentsImportLcReleasedUnderTrustButton = page.locator(`//a[text()=" Documents (Import LC) Released under Trust "]`);
this.btnLcSummaryImportExportLcsButton = page.locator(`//a[text()=" LC Summary (Import/Export LCs) "]`);
this.btnPaymentOnInstallmentsImportExportLcsButton = page.locator(`//a[text()=" Payment on Installments (Import/Export LC's) "]`);

this.btnExportLcsOutstandingButton = page.locator(`//a[text()=" Export LCs Outstanding "]`);
this.btnExportLcsExpiredButOutstandingButton = page.locator(`//a[text()=" Export LCs Expired but Outstanding "]`);
this.btnAmendmentsApprovedExportLcsInternetButton = page.locator(`//a[text()=" Amendments Approved-Export LCs Internet "]`);
this.btnAmendmentsRejectedExportLcsInternetButton = page.locator(`//a[text()=" Amendments Rejected-Export LCs Internet "]`);
this.btnExportLcsCoveredThroughFxContractButton = page.locator(`//a[text()=" Export LCs Covered through FX Contract "]`);
this.btnExportLcsBillSentForCollectionButton = page.locator(`//a[text()=" Export LCs Bill Sent for Collection "]`);
this.btnPresentationsPendingCheckingExportLcButton = page.locator(`//a[text()=" Presentations pending checking - Export LC "]`);
this.btnUsanceBillsDueForSettlementExportLcButton = page.locator(`//a[text()=" Usance Bills Due for Settlement -Export LC "]`);
this.btnOsBillsNegotiatedDiscountedExportLcButton = page.locator(`//a[text()=" O/S Bills Negotiated/Discounted - Export LC "]`);
this.btnExportBillsPaidUnderReserveButton = page.locator(`//a[text()=" Export Bills Paid Under Reserve "]`);

this.btnInwardDocumentaryCollectionsOutstandingButton = page.locator(`//a[text()=" Inward Documentary Collections Outstanding "]`);
this.btnInwardDocCollectionsReleasedUnderTrustButton = page.locator(`//a[text()=" Inward Doc Collections Released Under Trust "]`);
this.btnInwardCleanCollectionsOutstandingButton = page.locator(`//a[text()=" Inward Clean Collections Outstanding "]`);
this.btnAvalisedInwardCollectionsButton = page.locator(`//a[text()=" Avalised Inward Collections "]`);
this.btnInwardDocCollectionsOverdueButton = page.locator(`//a[text()=" Inward Doc Collections Overdue "]`);
this.btnInwardDocCollectionsPendingResponseButton = page.locator(`//a[text()=" Inward Doc Collections Pending Response "]`);

this.btnOutwardDocumentaryCollectionsOutstandingButton = page.locator(`//a[text()=" Outward Documentary Collections Outstanding "]`);
this.btnOutwardCleanCollectionsOutstandingButton = page.locator(`//a[text()=" Outward Clean Collections Outstanding "]`);
this.btnOutwardCollectionDocumentsButton = page.locator(`//a[text()=" Outward Collection Documents "]`);
this.btnOverdueOutwardAvalisedDiscountedCollectionButton = page.locator(`//a[text()=" Overdue Outward Avalised DiscountedCollection "]`);
this.btnRejectedOutwardCollectionInternetRequestsButton = page.locator(`//a[text()=" Rejected Outward Collection Internet Requests "]`);

this.btnLcCommissionCalculationDetailsButton = page.locator(`//a[text()=" LC Commission Calculation Details "]`);
this.btnDocumentsReceivedUnderImportLcButton = page.locator(`//a[text()=" Documents Received under Import LC "]`);
this.btnListOfPaidImportDrawingsPendingDocumentButton = page.locator(`//a[text()=" List of Paid Import Drawings Pending Document "]`);
this.btnImportDrawingsPendingBeyondAllowedDaysButton = page.locator(`//a[text()=" Import drawings pending beyond allowed days "]`);
this.btnDocumentsReceivedUnderExportLcButton = page.locator(`//a[text()=" Documents Received under Export LC "]`);
this.btnViewChargeDetailsButton = page.locator(`//a[text()=" View Charge Details "]`);
this.btnImportDrawingPaymentOrdersButton = page.locator(`//a[text()=" Import Drawing Payment Orders "]`);
this.btnExportDrawingPaymentOrdersButton = page.locator(`//a[text()=" Export Drawing Payment Orders "]`);

// TF TBML Enquiries
this.ddlTfTbmlEnquiriesDropdown = page.locator(`//span[text()=" TF TBML Enquiries "]`);
this.btnLcTbmlTransactionsButton = page.locator(`//a[text()=" LC TBML Transactions "]`);
this.btnDrawingsTbmlTransactionsButton = page.locator(`//a[text()=" Drawings TBML Transactions "]`);
this.btnLcAmendmentsTbmlTransactionsButton = page.locator(`//a[text()=" LC Amendments TBML Transactions "]`);

// Trade Based Lending
this.ddlTradeBasedLendingDropdown = page.locator(`//span[text()=" Trade Based Lending "]`);
this.btnTradeBasedLendingProductCatalogButton = page.locator(`//a[text()=" Product Catalog "]`);
this.btnAuthoriseViewLoanDetailsButton = page.locator(`//a[text()=" Authorise/View Loan Details "]`);

// Accounting Entries
this.ddlTradeFinanceAccountingEntriesDropdown = page.locator(`//span[text()=" Accounting Entries "]`);
this.btnTradeFinanceAccountingEntriesViewUnauthorisedEntriesButton = page.locator(`//a[text()=" View Unauthorised Entries "]`);
this.btnTradeFinanceAccountingEntriesViewTransactionEntriesButton = page.locator(`//a[text()=" View Transaction Entries "]`);
this.btnTradeFinanceAccountingEntriesViewAccountEntriesButton = page.locator(`//a[text()=" View Account Entries "]`);
this.btnTradeFinanceAccountingEntriesSeePlCategoriesEntriesButton = page.locator(`//a[text()=" See PL Categories Entries "]`);

// Guarantees
this.ddlGuaranteesDropdown = page.locator(`//span[text()=" Guarantees "]`);

// Undertaking Issued
this.ddlUndertakingIssuedDropdown = page.locator(`//span[text()=" Undertaking Issued "]`);

// Issue of Undertakings
this.ddlIssueOfUndertakingsDropdown = page.locator(`//span[text()=" Issue of Undertakings "]`);

// Demand Guarantees
this.ddlDemandGuaranteesDropdown = page.locator(`//span[text()=" Demand Guarantees "]`);
this.btnIssueOfGenericUndertakingButton = page.locator(`//a[text()=" Issue of Generic Undertaking "]`);
this.btnIssueOfBidBondButton = page.locator(`//a[text()=" Issue of Bid Bond "]`);
this.btnIssueOfPerformanceBondButton = page.locator(`//a[text()=" Issue of Performance Bond "]`);
this.btnIssueOfShippingGuaranteeButton = page.locator(`//a[text()=" Issue of Shipping Guarantee "]`);

// StandBy LC
this.ddlStandByLcDropdown = page.locator(`//span[text()=" StandBy LC "]`);
this.btnIssueOfStandbyLcButton = page.locator(`//a[text()=" Issue of Standby LC "]`);

// Maintenance of Undertaking
this.ddlMaintenanceOfUndertakingDropdown = page.locator(`//span[text()=" Maintenance of Undertaking "]`);

// Amendment under Guarantees
this.ddlAmendmentUnderGuaranteesDropdown = page.locator(`//span[text()=" Amendment under Guarantees "]`);
this.btnAmendReverseGuaranteeIssuedButton = page.locator(`//a[text()=" Amend/Reverse - Guarantee Issued "]`);
this.btnAmendmentResponseToGuaranteeIssuedButton = page.locator(`//a[text()=" Amendment Response To Guarantee Issued "]`);
this.btnInternetAmendRequestsButton = page.locator(`//a[text()=" Internet Amend Requests "]`);

// Process Claim
this.ddlGuaranteeIssuedProcessClaimDropdown = page.locator(`//span[text()=" Process Claim "]`);

// Guarantee Claim Processing
this.ddlGuaranteeIssuedClaimProcessingDropdown = page.locator(`//span[text()=" Guarantee Claim Processing "]`);
this.btnRegisterClaimUnderGuaranteeButton = page.locator(`//a[text()=" Register Claim under Guarantee "]`);
this.btnPayRejectClaimUnderGuaranteeButton = page.locator(`//a[text()=" Pay/ Reject Claim under Guarantee "]`);
this.btnInternetPendingClaimsUnderProcessButton = page.locator(`//a[text()=" Internet - Pending claims under Process "]`);

// Standby LC Claim Processing
this.ddlStandbyLcClaimProcessingDropdown = page.locator(`//span[text()=" Standby LC Claim Processing "]`);
this.btnRegisterPresentationUnderStandbyLcButton = page.locator(`//a[text()=" Register Presentation under Standby LC "]`);
this.btnRegisterClaimUnderStandbyLcButton = page.locator(`//a[text()=" Register Claim under Standby LC "]`);
this.btnPayRejectClaimUnderStandbyLcButton = page.locator(`//a[text()=" Pay/ Reject Claim under Standby LC "]`);

this.btnChangeCommissionRateButton = page.locator(`//a[text()=" Change Commission Rate "]`);
this.btnReleaseGuaranteeMarginButton = page.locator(`//a[text()=" Release Guarantee Margin "]`);
this.btnExpiryOfGuaranteesButton = page.locator(`//a[text()=" Expiry of Guarantees "]`);
this.btnCancellationOfShippingGuaranteeButton = page.locator(`//a[text()=" Cancellation of Shipping Guarantee "]`);
this.btnReinstateLiquidatedGuaranteesButton = page.locator(`//a[text()=" Reinstate Liquidated Guarantees "]`);
this.btnNonExtensionNotificationButton = page.locator(`//a[text()=" Non-Extension Notification "]`);

// Internet Request
this.ddlInternetRequestDropdown = page.locator(`//span[text()=" Internet Request "]`);
this.btnGuaranteesInternetRequestsButton = page.locator(`//a[text()=" Internet Requests "]`);

// Inward Swift Messages
this.ddlGuaranteesInwardSwiftMessagesDropdown = page.locator(`//span[text()=" Inward Swift Messages "]`);
this.btnInwardGuaranteeSwiftMessagesButton = page.locator(`//a[text()=" Inward Guarantee Swift Messages "]`);

// Multi-party/Participation Guarantees
this.ddlMultiPartyParticipationGuaranteesDropdown = page.locator(`//span[text()=" Multi-party/Participation Guarantees "]`);
this.btnIssueOfMultiPartyGuaranteeButton = page.locator(`//a[text()=" Issue of Multi-party Guarantee "]`);
this.btnAmendmentToMultiPartyGuaranteeButton = page.locator(`//a[text()=" Amendment to Multi-party Guarantee "]`);
this.btnParticipationTakenButton = page.locator(`//a[text()=" Participation Taken "]`);

// Undertaking Received
this.ddlUndertakingReceivedDropdown = page.locator(`//span[text()=" Undertaking Received "]`);

// Register Undertaking Received
this.ddlRegisterUndertakingReceivedDropdown = page.locator(`//span[text()=" Register Undertaking Received "]`);
this.btnGenericGuaranteeStandbyLcButton = page.locator(`//a[text()=" Generic-Guarantee/Standby LC "]`);
this.btnGuaranteeReceivedCoveringFacilityButton = page.locator(`//a[text()=" Guarantee Received-Covering Facility "]`);

// Inward Guarantees
this.ddlInwardGuaranteesDropdown = page.locator(`//span[text()=" Inward Guarantees "]`);
this.btnInwardMt760MessagesButton = page.locator(`//a[text()=" Inward MT760 Messages "]`);

// Maintenance of Undertaking Received
this.ddlMaintenanceOfUndertakingReceivedDropdown = page.locator(`//span[text()=" Maintenance of Undertaking "]`);

// Amendment under Guarantees Received
this.ddlAmendmentUnderGuaranteesReceivedDropdown = page.locator(`//span[text()=" Amendment under Guarantees "]`);
this.btnAmendmentToGuaranteeReceivedButton = page.locator(`//a[text()=" Amendment to Guarantee Received "]`);
this.btnAmendmentResponseToGuaranteeReceivedButton = page.locator(`//a[text()=" Amendment Response to Guarantee Received "]`);

// Process Claim - Undertaking Received
this.ddlUndertakingReceivedProcessClaimDropdown = page.locator(`//span[text()=" Process Claim "]`);

// Guarantee Claim Processing - Undertaking Received
this.ddlUndertakingReceivedGuaranteeClaimProcessingDropdown = page.locator(`//span[text()=" Guarantee Claim Processing "]`);
this.btnRegisterClaimUnderGuaranteeReceivedButton = page.locator(`//a[text()=" Register Claim under Guarantee Received"]`);
this.btnPayRejectClaimUnderGuaranteeReceivedButton = page.locator(`//a[text()=" Pay/ Reject Claim under Guarantee Received"]`);
this.btnInternetInitiatedClaimRequestsButton = page.locator(`//a[text()=" Internet Initiated Claim Requests "]`);

// Standby LC Claim Processing - Undertaking Received
this.ddlStandbyLcClaimProcessingReceivedDropdown = page.locator(`//span[text()=" Standby LC Claim Processing "]`);
this.btnRegisterPresentationUnderStandbyLcReceivedButton = page.locator(`//a[text()=" Register Presentation under StandbyLC "]`);
this.btnRegisterClaimUnderStandbyLcReceivedButton = page.locator(`//a[text()=" Register Claim under StandbyLC "]`);
this.btnPayRejectClaimUnderStandbyLcReceivedButton = page.locator(`//a[text()=" Pay/Reject Claim under StandbyLC "]`);

this.btnInwardGuaranteesReceivedButton = page.locator(`//a[text()=" Inward Guarantees Received "]`);
this.btnReleaseGuaranteesLiabilityButton = page.locator(`//a[text()=" Release Guarantees Liability "]`);

// Undertaking Advised
this.ddlUndertakingAdvisedDropdown = page.locator(`//span[text()=" Undertaking Advised "]`);

// Register Undertaking Advised
this.ddlRegisterUndertakingAdvisedDropdown = page.locator(`//span[text()=" Register Undertaking Advised "]`);
this.btnGenericGuaranteeReceivedAdvisedButton = page.locator(`//a[text()=" Generic-Guarantee Received/Advised "]`);

// Maintenance of Undertakings
this.ddlMaintenanceOfUndertakingsDropdown = page.locator(`//span[text()=" Maintenance of Undertakings "]`);

// Amendment under Guarantees Advised
this.ddlAmendmentUnderGuaranteesAdvisedDropdown = page.locator(`//span[text()=" Amendment under Guarantees "]`);
this.btnAmendmentToGuaranteeAdvisedButton = page.locator(`//a[text()=" Amendment to Guarantee Advised "]`);
this.btnAmendmentResponseToGuaranteeAdvisedButton = page.locator(`//a[text()=" Amendment Response to Guarantee Advised "]`);

// Process Claim - Advised
this.ddlProcessClaimAdvisedDropdown = page.locator(`//span[text()=" Process Claim "]`);

// Standby LC Claim Processing - Advised
this.ddlStandbyLcClaimProcessingAdvisedDropdown = page.locator(`//span[text()=" Standby LC Claim Processing "]`);
this.btnAdviseResponseToPresentationUnderStandbyLcButton = page.locator(`//a[text()=" Advise Response to Presentation under Standby LC "]`);
this.btnRegisterClaimUnderStandbyLcAdvisedButton = page.locator(`//a[text()=" Register Claim under Standby LC Advised "]`);
this.btnPayRejectClaimUnderStandbyLcAdvisedButton = page.locator(`//a[text()=" Pay/Reject Claim under Standby LC Advised "]`);

// Counter/Counter-counter Undertakings
this.ddlCounterCounterCounterUndertakingsDropdown = page.locator(`//span[text()=" Counter/Counter-counter Undertakings "]`);

// Issuance of Counter/Counter-counter Undertakings
this.ddlIssuanceOfCounterCounterCounterUndertakingsDropdown = page.locator(`//span[text()=" Issuance of Counter/Counter-counter Undertakings "]`);
this.btnIssueOfCounterCounterCounterUndertakingsButton = page.locator(`//a[text()=" Issue of Counter/Counter-counter Undertakings "]`);
this.btnIssueOfStandbyLcUndertakingButton = page.locator(`//a[text()=" Issue of Standby LC Undertaking "]`);

// Counter/Counter-counter Undertakings Received
this.ddlCounterCounterCounterUndertakingsReceivedDropdown = page.locator(`//span[text()=" Counter/Counter-counter Undertakings Received "]`);
this.btnCounterCounterCounterUndertakingButton = page.locator(`//a[text()=" Counter/Counter-counter Undertaking "]`);
this.btnCounterCounterCounterStandbyLcButton = page.locator(`//a[text()=" Counter/Counter-counter Standby LC "]`);

// Transfer Undertaking
this.ddlTransferUndertakingDropdown = page.locator(`//span[text()=" Transfer Undertaking "]`);
this.btnListOfTransferableReceivedUndertakingButton = page.locator(`//a[text()=" List of Transferable received Undertaking "]`);
this.btnIssueOfTransferUndertakingButton = page.locator(`//a[text()=" Issue of Transfer Undertaking "]`);

// MD Reimbursement Processing
this.ddlMdReimbursementProcessingDropdown = page.locator(`//span[text()=" MD Reimbursement Processing "]`);
this.btnMdReimbursementProcessingButton = page.locator(`//a[text()=" MD Reimbursement Processing "]`);

// External Asset Register
this.ddlExternalAssetRegisterDropdown = page.locator(`//span[text()=" External Asset Register "]`);
this.btnArtAntiquesRegisterButton = page.locator(`//a[text()=" Art & Antiques Register "]`);

// Commission and Charges Processing
this.ddlCommissionAndChargesProcessingDropdown = page.locator(`//span[text()=" Commission and Charges Processing "]`);
this.btnGuaranteeClaimedCommissionSettlementButton = page.locator(`//a[text()=" Guarantee Claimed Commission Settlement "]`);
this.btnGuaranteeCommissionRefundButton = page.locator(`//a[text()=" Guarantee Commission Refund "]`);
this.btnWriteoffOfUncollectedCommissionButton = page.locator(`//a[text()=" Writeoff of Uncollected Commission "]`);
this.btnRefundOfGuaranteeChargesButton = page.locator(`//a[text()=" Refund of Guarantee Charges "]`);

// Unauthorised Guarantee Transaction
this.ddlUnauthorisedGuaranteeTransactionDropdown = page.locator(`//span[text()=" Unauthorised Guarantee Transaction "]`);
this.btnUnauthorisedGuaranteeTransactionsButton = page.locator(`//a[text()=" Unauthorised Guarantee Transactions "]`);

// Authorise/Delete Guarantee Transaction
this.ddlAuthoriseDeleteGuaranteeTransactionDropdown = page.locator(`//span[text()=" Authorise/Delete Guarantee Transaction "]`);
this.btnAuthoriseDeleteGuaranteeIssuedButton = page.locator(`//a[text()=" Authorise/Delete Guarantee Issued "]`);
this.btnAuthoriseDeleteGuaranteeReceivedButton = page.locator(`//a[text()=" Authorise/Delete Guarantee Received "]`);
this.btnAuthoriseDeleteCommRateChangeButton = page.locator(`//a[text()=" Authorise/Delete Comm Rate Change "]`);
this.btnAuthorisationOfGuaranteeCommTransactionsButton = page.locator(`//a[text()=" Authorisation of Guarantee Comm Transactions "]`);
this.btnAuthorisationRefundOfChargesButton = page.locator(`//a[text()=" Authorisation Refund of Charges "]`);
this.btnAuthoriseDeleteInternetRequestsButton = page.locator(`//a[text()=" Authorise/Delete Internet Requests "]`);

// Guarantees Enquiries
this.ddlGuaranteesEnquiriesDropdown = page.locator(`//span[text()=" Enquiries "]`);
this.btnGuaranteesIssuedOutstandingButton = page.locator(`//a[text()=" Guarantees Issued Outstanding "]`);
this.btnFrontedGuaranteesOutstandingButton = page.locator(`//a[text()=" Fronted Guarantees Outstanding "]`);
this.btnGuaranteesReceivedOutstandingButton = page.locator(`//a[text()=" Guarantees Received Outstanding "]`);
this.btnOustandingShippingGuaranteesButton = page.locator(`//a[text()=" Oustanding Shipping Guarantees "]`);
this.btnGuaranteesProvisionOustandingButton = page.locator(`//a[text()=" Guarantees Provision Oustanding "]`);
this.btnGuaranteesDueForExpiryButton = page.locator(`//a[text()=" Guarantees Due for Expiry "]`);
this.btnGuaranteesExpiredButNotLiquidatedButton = page.locator(`//a[text()=" Guarantees Expired but not Liquidated "]`);
this.btnClaimsReceivedUnderGuaranteeButton = page.locator(`//a[text()=" Claims Received Under Guarantee "]`);
this.btnClaimsPaidCancelledUnderGuaranteeButton = page.locator(`//a[text()=" Claims Paid / Cancelled under Guarantee "]`);
this.btnReversedMdDealsButton = page.locator(`//a[text()=" Reversed MD Deals "]`);
this.btnGuaranteePaymentOrdersButton = page.locator(`//a[text()=" Guarantee Payment Orders "]`);
this.btnTransferUndertakingIssuedOutstandingButton = page.locator(`//a[text()=" Transfer Undertaking Issued Outstanding "]`);
this.btnListOfUndertakingsToAddConfirmationButton = page.locator(`//a[text()=" List of Undertakings to add confirmation "]`);
this.btnGuaranteesWithAutoExtnDetailsButton = page.locator(`//a[text()=" Guarantees with Auto Extn Details "]`);

// Guarantees TBML Enquiries
this.ddlGuaranteesTbmlEnquiriesDropdown = page.locator(`//span[text()=" Guarantees TBML Enquiries "]`);
this.btnGuaranteesTbmlTransactionsButton = page.locator(`//a[text()=" Guarantees TBML Transactions "]`);

// Guarantees Accounting Entries
this.ddlGuaranteesAccountingEntriesDropdown = page.locator(`//span[text()=" Accounting Entries "]`);
this.btnGuaranteesAccountingEntriesViewUnauthorisedEntriesButton = page.locator(`//a[text()=" View Unauthorised Entries "]`);
this.btnViewAuthorisedEntriesButton = page.locator(`//a[text()=" View Authorised Entries "]`);
this.btnGuaranteesAccountingEntriesViewAccountEntriesButton = page.locator(`//a[text()=" View Account Entries "]`);
this.btnGuaranteesAccountingEntriesSeePlCategoriesEntriesButton = page.locator(`//a[text()=" See PL Categories Entries "]`);

// Inward Trade Finance Swift Messages
this.ddlInwardTradeFinanceSwiftMessagesDropdown = page.locator(`//span[text()=" Inward Trade Finance Swift Messages "]`);
this.btnInwardTradeSwiftMessagesButton = page.locator(`//a[text()=" Inward Trade Swift Messages "]`);
this.btnProcessingOfRepairedMessagesButton = page.locator(`//a[text()=" Processing of Repaired Messages "]`);

// Miscellaneous Messages
this.ddlMiscellaneousMessagesDropdown = page.locator(`//span[text()=" Miscellaneous Messages "]`);

// Outward Miscellaneous Messages
this.ddlOutwardMiscellaneousMessagesDropdown = page.locator(`//span[text()=" Outward Miscellaneous Messages "]`);
this.btnRequestStopPaymentOfChequeMt111Button = page.locator(`//a[text()=" Request Stop Payment of Cheque-MT111 "]`);
this.btnAuthoriseDeleteMt111Button = page.locator(`//a[text()=" Authorise/Delete MT111 "]`);
this.btnSendFreeFormatMessageButton = page.locator(`//a[text()=" Send Free Format Message "]`);
this.btnSendCancellationMessageButton = page.locator(`//a[text()=" Send Cancellation Message "]`);
this.btnSendQueryButton = page.locator(`//a[text()=" Send Query "]`);
this.btnSendAnswerToQueryButton = page.locator(`//a[text()=" Send Answer To Query "]`);
this.btnUnauthorisedMiscellaneousMessageButton = page.locator(`//a[text()=" Unauthorised Miscellaneous Message "]`);
this.btnAuthoriseDeleteFreeFormatMessageButton = page.locator(`//a[text()=" Authorise/Delete Free Format Message "]`);
this.btnAuthoriseDeleteQueryAnswerCancellationButton = page.locator(`//a[text()=" Authorise/Delete Query/Answer/Cancellation "]`);
this.btnFindOutwardMessageButton = page.locator(`//a[text()=" Find Outward Message "]`);
this.btnSentFreeMessagesButton = page.locator(`//a[text()=" Sent Free Messages "]`);
this.btnViewSentQueriesAnswersButton = page.locator(`//a[text()=" View Sent Queries/Answers "]`);

// Inward Miscellaneous Messages
this.ddlInwardMiscellaneousMessagesDropdown = page.locator(`//span[text()=" Inward Miscellaneous Messages "]`);
this.btnCancellationRequestsMtn92Button = page.locator(`//a[text()=" Cancellation Requests (MT n92) "]`);
this.btnQueriesReceivedMtn95Button = page.locator(`//a[text()=" Queries Received (MT n95) "]`);
this.btnAuthoriseDeleteQueryCancellationButton = page.locator(`//a[text()=" Authorise/Delete Query/Cancellation "]`);
this.btnAnswersReceivedMtn96Button = page.locator(`//a[text()=" Answers Received (MT n96) "]`);
this.btnImwFreeFormatMessagesMtn99Button = page.locator(`//a[text()=" Inw Free Format Messages (MT n99) "]`);

// MT759 Ancillary Messages
this.ddlMt759AncillaryMessagesDropdown = page.locator(`//span[text()=" MT759 Ancillary Messages "]`);
this.btnOutwardAncillaryMessagesButton = page.locator(`//a[text()=" Outward Ancillary Messages "]`);
this.btnInwardAncillaryMessagesButton = page.locator(`//a[text()=" Inward Ancillary Messages "]`);
this.btnAuthoriseAncillaryMessageForLcsButton = page.locator(`//a[text()=" Authorise Ancillary Message for LC's "]`);
this.btnAuthoriseAncillaryMessageForGuaranteesButton = page.locator(`//a[text()=" Authorise Ancillary Message for Guarantees "]`);

// Corporate Lending
this.ddlCorporateLendingDropdown = page.locator(`//span[text()=" Corporate Lending "]`);
this.btnCorporateLendingProductCatalogButton = page.locator(`//a[text()=" Product Catalog "]`);
this.btnFindDealButton = page.locator(`//a[text()=" Find Deal "]`);

// Deal Transactions
this.ddlDealTransactionsDropdown = page.locator(`//span[text()=" Deal Transactions "]`);
this.ddlDealTransactionsArrangementActivitiesPoDropdown = page.locator(`//span[text()=" Arrangement Activities (PO) "]`);
this.btnDealTransactionsAaPayOffButton = page.locator(`//a[text()=" AA Pay-off "]`);
this.btnDealTransactionsAaBillsRepaymentButton = page.locator(`//a[text()=" AA Bills Repayment "]`);
this.btnDealTransactionsAuthoriseDeleteArrangementsPoButton = page.locator(`//a[text()=" Authorise/Delete Arrangements (PO) "]`);

this.btnFindFacilityButton = page.locator(`//a[text()=" Find Facility "]`);

// Facility Transactions
this.ddlFacilityTransactionsDropdown = page.locator(`//span[text()=" Facility Transactions "]`);
this.ddlFacilityTransactionsArrangementActivitiesPoDropdown = page.locator(`//span[text()=" Arrangement Activities (PO) "]`);
this.btnFacilityTransactionsAaRepaymentButton = page.locator(`//a[text()=" AA Repayment "]`);
this.btnFacilityTransactionsAaPayOffButton = page.locator(`//a[text()=" AA Pay-off "]`);
this.btnFacilityTransactionsAaPrincipalDecreaseButton = page.locator(`//a[text()=" AA Principal Decrease "]`);
this.btnFacilityTransactionsAaBillsRepaymentButton = page.locator(`//a[text()=" AA Bills Repayment "]`);
this.btnFacilityTransactionsAuthoriseDeleteArrangementsPoButton = page.locator(`//a[text()=" Authorise/Delete Arrangements (PO) "]`);

this.btnFindDrawingsButton = page.locator(`//a[text()=" Find Drawings "]`);

// Lending Transactions
this.ddlLendingTransactionsDropdown = page.locator(`//span[text()=" Lending Transactions "]`);
this.ddlLendingTransactionsArrangementActivitiesPoDropdown = page.locator(`//span[text()=" Arrangement Activities (PO) "]`);
this.btnAaDisbursementDomesticButton = page.locator(`//a[text()=" AA Disbursement Domestic "]`);
this.btnAaDisbursementInternationalButton = page.locator(`//a[text()=" AA Disbursement International "]`);
this.btnLendingTransactionsAaRepaymentButton = page.locator(`//a[text()=" AA Repayment "]`);
this.btnAaAdvanceRepaymentButton = page.locator(`//a[text()=" AA Advance Repayment "]`);
this.btnLendingTransactionsAaPayOffButton = page.locator(`//a[text()=" AA Pay-off "]`);
this.btnLendingTransactionsAaPrincipalDecreaseButton = page.locator(`//a[text()=" AA Principal Decrease "]`);
this.btnAaCreditArrangementButton = page.locator(`//a[text()=" AA Credit Arrangement "]`);
this.btnLendingTransactionsAuthoriseDeleteArrangementsPoButton = page.locator(`//a[text()=" Authorise/Delete Arrangements (PO) "]`);

// Arrangement Enquiries
this.ddlArrangementEnquiriesDropdown = page.locator(`//span[text()=" Arrangement Enquiries "]`);
this.btnPendingDrawdownRolloverRequestButton = page.locator(`//a[text()=" Pending Drawdown/Rollover Request "]`);
this.btnLoansGettingRolloverIn7DaysButton = page.locator(`//a[text()=" Loans getting Rollover in 7 days "]`);
this.btnLoansExpiringInNext7DaysButton = page.locator(`//a[text()=" Loans Expiring in next 7 days "]`);
this.btnMaturedClosedDealsButton = page.locator(`//a[text()=" Matured/Closed Deals "]`);
this.btnMaturedClosedFacilitiesButton = page.locator(`//a[text()=" Matured/Closed Facilities "]`);
this.btnMaturedClosedDrawingsButton = page.locator(`//a[text()=" Matured/Closed Drawings "]`);
this.btnFacilityCreditRiskStatusButton = page.locator(`//a[text()=" Facility Credit Risk Status "]`);

// Evidence
this.ddlEvidenceDropdown = page.locator(`//span[text()=" Evidence "]`);
this.btnNewEvidenceButton = page.locator(`//a[text()=" New Evidence "]`);

// Evidence Enquiries
this.ddlEvidenceEnquiriesDropdown = page.locator(`//span[text()=" Evidence Enquiries "]`);
this.btnEvidencePendingApprovalButton = page.locator(`//a[text()=" Evidence - Pending Approval "]`);
this.btnUpcomingEvidenceDuesButton = page.locator(`//a[text()=" Upcoming Evidence Dues "]`);
this.btnEvidencesDueButton = page.locator(`//a[text()=" Evidences - Due "]`);
this.btnEvidencesPastDueButton = page.locator(`//a[text()=" Evidences - Past Due "]`);
this.btnNonCompliantEvidencesButton = page.locator(`//a[text()=" Non-Compliant Evidences "]`);

// Secondary Loan Trading
this.ddlSecondaryLoanTradingDropdown = page.locator(`//span[text()=" Secondary Loan Trading "]`);
this.btnCaptureLoanTradeButton = page.locator(`//a[text()=" Capture Loan Trade "]`);
this.btnAuthoriseEditDeleteLoanTradeButton = page.locator(`//a[text()=" Authorise/Edit/Delete Loan Trade "]`);
this.btnLoanTradeReportButton = page.locator(`//a[text()=" Loan Trade Report "]`);
this.btnPendingConfirmationTradesButton = page.locator(`//a[text()=" Pending Confirmation Trades "]`);
this.btnConfirmedTradesButton = page.locator(`//a[text()=" Confirmed Trades "]`);
this.btnPendingConsentButton = page.locator(`//a[text()=" Pending Consent "]`);
this.btnPendingSettlementTradesButton = page.locator(`//a[text()=" Pending Settlement Trades "]`);
this.btnSettledTradesButton = page.locator(`//a[text()=" Settled Trades "]`);
this.btnLoanTradesBookedTodayButton = page.locator(`//a[text()=" Loan Trades Booked Today "]`);
this.btnLoanTradeChargesButton = page.locator(`//a[text()=" Loan Trade Charges "]`);
this.btnLoanTradeBalancesButton = page.locator(`//a[text()=" Loan Trade Balances "]`);
this.btnSettledTradeInLast10DaysButton = page.locator(`//a[text()=" Settled trade in last 10 days "]`);

// Syndicated/Corporate Lending
this.ddlSyndicatedCorporateLendingDropdown = page.locator(`//span[text()=" Syndicated/Corporate Lending "]`);

// Syndicated Loans
this.ddlSyndicatedLoansDropdown = page.locator(`//span[text()=" Syndicated Loans "]`);
this.btnFacilityButton = page.locator(`//a[text()=" Facility "]`);

// Cash Management
this.ddlCashManagementDropdown = page.locator(`//span[text()=" Cash Management "]`);

// Balance Netting
this.ddlBalanceNettingDropdown = page.locator(`//span[text()=" Balance Netting "]`);
this.btnCashManagementProductCatalogButton = page.locator(`//a[text()=" Product Catalog "]`);
this.btnFindCustomerButton = page.locator(`//a[text()=" Find Customer "]`);
this.btnFindPoolButton = page.locator(`//a[text()=" Find Pool "]`);
this.btnFindAccountButton = page.locator(`//a[text()=" Find Account "]`);
this.btnAccountTransactionsButton = page.locator(`//a[text()=" Account Transactions "]`);

// Balance Netting Enquiries
this.ddlBalanceNettingEnquiriesDropdown = page.locator(`//span[text()=" Enquiries "]`);
this.btnSweepScheduledAfterCutOffTimeButton = page.locator(`//a[text()=" Sweep Scheduled after Cut off time "]`);
this.btnViewAmendCashPoolGroupsButton = page.locator(`//a[text()=" View/Amend Cash Pool Groups "]`);

// Notional Pooling
this.ddlNotionalPoolingDropdown = page.locator(`//span[text()=" Notional Pooling "]`);
this.btnCreateGroupHierarchyButton = page.locator(`//a[text()=" Create Group Hierarchy "]`);
this.btnCreateNotionalPoolMainAccountButton = page.locator(`//a[text()=" Create Notional Pool Main Account "]`);
this.btnCreateNotionalPoolSubAccountButton = page.locator(`//a[text()=" Create Notional Pool Sub Account "]`);
this.btnRemoveSubAccountLinkButton = page.locator(`//a[text()=" Remove Sub Account Link "]`);
this.btnAuthoriseDeleteMainAccountButton = page.locator(`//a[text()=" Authorise/Delete Main Account "]`);
this.btnAuthoriseDeleteSubAccountButton = page.locator(`//a[text()=" Authorise/Delete Sub Account "]`);
this.btnAuthoriseDeleteRemoveSubAccountLinkButton = page.locator(`//a[text()=" Authorise/Delete remove sub account link "]`);

// Notional Pooling Enquiry
this.ddlNotionalPoolingEnquiryDropdown = page.locator(`//span[text()=" Enquiry "]`);
this.btnNotionalPoolAccountsHierarchyButton = page.locator(`//a[text()=" Notional Pool Accounts Hierarchy "]`);
this.btnViewBeneficiaryInterestButton = page.locator(`//a[text()=" View beneficiary interest "]`);

// Transactional Pooling
this.ddlTransactionalPoolingDropdown = page.locator(`//span[text()=" Transactional Pooling "]`);
this.btnCreateSweepConditionButton = page.locator(`//a[text()=" Create Sweep Condition "]`);

// Cash Pool Group Functions
this.ddlCashPoolGroupFunctionsDropdown = page.locator(`//span[text()=" Cash Pool Group Functions "]`);
this.btnCreateSimpleGroupButton = page.locator(`//a[text()=" Create simple group "]`);
this.btnCreateSharedBalancesGroupButton = page.locator(`//a[text()=" Create Shared balances group "]`);
this.btnCreateFinancingCashPoolButton = page.locator(`//a[text()=" Create Financing Cash Pool "]`);
this.btnCreateSubGroupAndLinkToMainGroupButton = page.locator(`//a[text()=" Create sub group and link to main group "]`);
this.btnCreateSharedBalancesSubGroupButton = page.locator(`//a[text()=" Create shared balances sub group "]`);
this.btnAuthorizeDeleteGroupButton = page.locator(`//a[text()=" Authorize/delete group "]`);
this.btnAuthorizeDeleteSubGroupButton = page.locator(`//a[text()=" Authorize/delete sub group "]`);

// Cash Pool Sweep Functions
this.ddlCashPoolSweepFunctionsDropdown = page.locator(`//span[text()=" Cash Pool Sweep functions "]`);
this.btnCreateCashPoolButton = page.locator(`//a[text()=" Create cash pool "]`);
this.btnAmendCashPoolButton = page.locator(`//a[text()=" Amend Cash Pool "]`);
this.btnAuthorizeDeleteCashPoolButton = page.locator(`//a[text()=" Authorize/delete Cash pool "]`);

// Sweep Processes
this.ddlSweepProcessesDropdown = page.locator(`//span[text()=" Sweep Processes "]`);
this.btnIntraDaySweepsButton = page.locator(`//a[text()=" Intra Day Sweeps "]`);
this.btnReverseLastRunSweepsButton = page.locator(`//a[text()=" Reverse last run sweeps "]`);
this.btnAuthoriseDeleteSweepsButton = page.locator(`//a[text()=" Authorise/Delete Sweeps "]`);
this.btnCreateCashPoolProcessButton = page.locator(`//a[text()=" Create Cash Pool (Process) "]`);

// Cash Management Enquiries
this.ddlCashManagementEnquiriesDropdown = page.locator(`//span[text()=" Enquiries "]`);
this.btnSweepHistoryButton = page.locator(`//a[text()=" Sweep History "]`);
this.btnSharedAccountsListButton = page.locator(`//a[text()=" Shared Accounts List "]`);
this.btnCashPoolGroupListButton = page.locator(`//a[text()=" Cash Pool Group List "]`);
this.btnCashPoolLinksListButton = page.locator(`//a[text()=" Cash Pool Links List "]`);
this.btnGroupPositionButton = page.locator(`//a[text()=" Group Position "]`);
this.btnSweepMovementsButton = page.locator(`//a[text()=" Sweep movements "]`);
this.btnProjectedSweepMovementsButton = page.locator(`//a[text()=" Projected sweep movements "]`);
this.btnSuspendedSweepsButton = page.locator(`//a[text()=" Suspended Sweeps "]`);
this.btnInterestStatementForMasterAccountButton = page.locator(`//a[text()=" Interest Statement for Master Account "]`);
this.btnInterestStatementForSubAccountButton = page.locator(`//a[text()=" Interest Statement for Sub Account "]`);

// Factoring and Forfaiting
this.ddlFactoringAndForfaitingDropdown = page.locator(`//span[text()=" Factoring and Forfaiting "]`);

// Automatic Upload & Batching
this.ddlAutomaticUploadBatchingDropdown = page.locator(`//span[text()=" Automatic Upload & Batching "]`);
this.btnUploadReceivablesButton = page.locator(`//a[text()=" Upload Receivables "]`);
this.btnAmendDeleteUploadErrorsButton = page.locator(`//a[text()=" Amend/Delete Upload Errors "]`);
this.btnAuthoriseDeleteAllUploadedRegistersButton = page.locator(`//a[text()=" Authorise/Delete All Uploaded registers "]`);
this.btnDeleteUploadErrorRegisterButton = page.locator(`//a[text()=" Delete Upload Error Register "]`);
this.btnRectifyProductUpdateErrorsButton = page.locator(`//a[text()=" Rectify Product Update Errors "]`);
this.btnAutoBatchingChangeProductButton = page.locator(`//a[text()=" Auto Batching/Change Product "]`);

// Manual Upload & Batching
this.ddlManualUploadBatchingDropdown = page.locator(`//span[text()=" Manual Upload & Batching "]`);

// Receivable Register
this.ddlReceivableRegisterDropdown = page.locator(`//span[text()=" Receivable Register "]`);
this.btnRegisterReceivablesButton = page.locator(`//a[text()=" Register Receivables "]`);
this.btnChangeProductTypeButton = page.locator(`//a[text()=" Change Product Type "]`);
this.btnAmendReverseReceivablesButton = page.locator(`//a[text()=" Amend/Reverse Receivables "]`);
this.btnAuthoriseDeleteReceivablesButton = page.locator(`//a[text()=" Authorise/Delete Receivables "]`);

// Batch Receivables
this.ddlBatchReceivablesDropdown = page.locator(`//span[text()=" Batch Receivables "]`);
this.btnInputReceivableBatchButton = page.locator(`//a[text()=" Input Receivable Batch "]`);
this.btnAmendReverseReceivableBatchButton = page.locator(`//a[text()=" Amend/Reverse Receivable Batch "]`);
this.btnAuthoriseDeleteReceivableBatchButton = page.locator(`//a[text()=" Authorise/Delete Receivable Batch "]`);
this.btnRebatchButton = page.locator(`//a[text()=" Rebatch "]`);

// Factoring and Forfaiting Enquiries
this.ddlFactoringAndForfaitingEnquiriesDropdown = page.locator(`//span[text()=" Enquiries "]`);
this.btnListOfLodgedReceivablesButton = page.locator(`//a[text()=" List of Lodged Receivables "]`);
this.btnReceivablesLodgedForCollnDiscountingButton = page.locator(`//a[text()=" Receivables Lodged for Colln/Discounting "]`);
this.btnListOfBatchedReceivablesButton = page.locator(`//a[text()=" List of Batched Receivables "]`);
this.btnListOfDiscountedReceivablesButton = page.locator(`//a[text()=" List of Discounted Receivables "]`);
this.btnListOfReceivablesSentForCollectionButton = page.locator(`//a[text()=" List of Receivables sent for Collection "]`);
this.btnListOfCollateralisedReceivablesButton = page.locator(`//a[text()=" List of Collateralised Receivables "]`);
this.btnListOfReceivablesByTypeButton = page.locator(`//a[text()=" List of Receivables by Type "]`);
this.btnListOfReceivablesMaturingNext7DaysButton = page.locator(`//a[text()=" List of Receivables maturing next 7 days "]`);
this.btnListOfReceivablesWithSuspendedIntButton = page.locator(`//a[text()=" List of Receivables with Suspended Int "]`);
this.btnReceivablesStatusButton = page.locator(`//a[text()=" Receivables Status "]`);
this.btnAutoBatchDetailsButton = page.locator(`//a[text()=" Auto Batch Details "]`);
this.btnAutoUploadDetailsButton = page.locator(`//a[text()=" Auto Upload Details "]`);
this.btnAutoRegisterDetailsButton = page.locator(`//a[text()=" Auto Register Details "]`);
this.btnInvoiceUploadSummaryButton = page.locator(`//a[text()=" Invoice upload summary "]`);
this.btnUpdateProductSummaryButton = page.locator(`//a[text()=" Update product summary "]`);
this.btnPendingDisbursementsButton = page.locator(`//a[text()=" Pending Disbursements "]`);
this.btnOverdueRegistersButton = page.locator(`//a[text()=" Overdue Registers "]`);
this.btnBuyerSellerLimitDetailsButton = page.locator(`//a[text()=" Buyer-Seller Limit Details "]`);

// Receivable Transaction
this.ddlReceivableTransactionDropdown = page.locator(`//span[text()=" Receivable Transaction "]`);
this.btnInputDisbursementRegisterButton = page.locator(`//a[text()=" Input Disbursement - Register "]`);
this.btnInputDisbursementBatchButton = page.locator(`//a[text()=" Input Disbursement - Batch "]`);
this.btnInputSettlementButton = page.locator(`//a[text()=" Input Settlement "]`);
this.btnInputReceivableContractButton = page.locator(`//a[text()=" Input Receivable Contract "]`);
this.btnUnsuccessfulDisbursementRegisterButton = page.locator(`//a[text()=" Unsuccessful Disbursement - Register "]`);
this.btnUnsuccessfulDisbursementBatchButton = page.locator(`//a[text()=" Unsuccessful Disbursement - Batch "]`);
this.btnAmendReverseReceivableContractButton = page.locator(`//a[text()=" Amend/Reverse Receivable Contract "]`);
this.btnAuthoriseDeleteDisbursementButton = page.locator(`//a[text()=" Authorise/Delete Disbursement "]`);
this.btnAuthoriseDeleteSettlementButton = page.locator(`//a[text()=" Authorise/Delete Settlement "]`);
this.btnAuthoriseDeleteReceivableContractButton = page.locator(`//a[text()=" Authorise/Delete Receivable Contract "]`);

// Accounting Entries
this.ddlFactoringAndForfaitingAccountingEntriesDropdown = page.locator(`//span[text()=" Accounting Entries "]`);
this.btnFactoringAndForfaitingAccountingEntriesViewUnauthorisedEntriesButton = page.locator(`//a[text()=" View Unauthorised Entries "]`);
this.btnFactoringAndForfaitingAccountingEntriesViewTransactionEntriesButton = page.locator(`//a[text()=" View Transaction Entries "]`);
this.btnFactoringAndForfaitingAccountingEntriesViewAccountEntriesButton = page.locator(`//a[text()=" View Account Entries "]`);
this.btnSeePlCategoryEntriesButton = page.locator(`//a[text()=" See PL Category Entries "]`);
this.btnSeeForwardEntriesButton = page.locator(`//a[text()=" See Forward Entries "]`);

// Advices/Messages
this.ddlAdvicesMessagesDropdown = page.locator(`//span[text()=" Advices/Messages "]`);
this.btnViewReceivableAdvicesMessagesButton = page.locator(`//a[text()=" View Receivable Advices/Messages "]`);

// Adhoc Charge Request
this.ddlAdhocChargeRequestDropdown = page.locator(`//span[text()=" Adhoc Charge Request "]`);
this.btnWithDeliveryButton = page.locator(`//a[text()=" With delivery "]`);
this.btnWithoutDeliveryButton = page.locator(`//a[text()=" Without delivery "]`);
this.btnAuthoriseDeleteChargeRequestButton = page.locator(`//a[text()=" Authorise/Delete Charge Request "]`);
this.btnViewDeliveryMessagesButton = page.locator(`//a[text()=" View Delivery Messages "]`);
this.btnChargesUnpaidButton = page.locator(`//a[text()=" Charges Unpaid "]`);

}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */


 async clickCorporateOperationsDropdown() {
    await this.ddlCorporateOperationsDropdown.click();
}

async clickTradeFinanceDropdown() {
    await this.ddlTradeFinanceDropdown.click();
}

async clickImportLcsDropdown() {
    await this.ddlImportLcsDropdown.click();
}

async clickIssuanceOfImportLcsDropdown() {
    await this.ddlIssuanceOfImportLcsDropdown.click();
}

async clickPreAdviceOfImportLcsButton() {
    await this.btnPreAdviceOfImportLcsButton.click();
}

async clickPreAdviceToIssueListOfPreadvisedLcsButton() {
    await this.btnPreAdviceToIssueListOfPreadvisedLcsButton.click();
}

async clickIssueOfSightPaymentLcsButton() {
    await this.btnIssueOfSightPaymentLcsButton.click();
}

async clickIssueOfUsanceLcsButton() {
    await this.btnIssueOfUsanceLcsButton.click();
}

async clickIssueOfNegotiationLcsButton() {
    await this.btnIssueOfNegotiationLcsButton.click();
}

async clickIssueOfMixedPaymentLcsButton() {
    await this.btnIssueOfMixedPaymentLcsButton.click();
}

async clickImportLcsInternetRequestsButton() {
    await this.btnImportLcsInternetRequestsButton.click();
}

// Maintenance of Import LCs

async clickMaintenanceOfImportLcsDropdown() {
    await this.ddlMaintenanceOfImportLcsDropdown.click();
}

async clickMaintenanceOfImportLcsTakeReduceMarginButton() {
    await this.btnMaintenanceOfImportLcsTakeReduceMarginButton.click();
}

async clickMaintenanceOfImportLcsReleaseMarginButton() {
    await this.btnMaintenanceOfImportLcsReleaseMarginButton.click();
}

async clickMaintenanceOfImportLcsInternalAmendmentButton() {
    await this.btnMaintenanceOfImportLcsInternalAmendmentButton.click();
}

async clickMaintenanceOfImportLcsExternalAmendmentButton() {
    await this.btnMaintenanceOfImportLcsExternalAmendmentButton.click();
}

async clickMaintenanceOfImportLcsAmendmentSeekingBenefConsentButton() {
    await this.btnMaintenanceOfImportLcsAmendmentSeekingBenefConsentButton.click();
}

async clickMaintenanceOfImportLcsInternetRequestsLcAmendmentsButton() {
    await this.btnMaintenanceOfImportLcsInternetRequestsLcAmendmentsButton.click();
}

async clickApproveRejectAmendmentOfImportLcButton() {
    await this.btnApproveRejectAmendmentOfImportLcButton.click();
}

async clickReversalCancellationOfImportLcButton() {
    await this.btnReversalCancellationOfImportLcButton.click();
}

// Drawings under Import LCs

async clickDrawingsUnderImportLcsDropdown() {
    await this.ddlDrawingsUnderImportLcsDropdown.click();
}

async clickRegisterUploadDocumentsButton() {
    await this.btnRegisterUploadDocumentsButton.click();
}

async clickDrawingsUnderImportLcsCaptureCheckDocumentsButton() {
    await this.btnDrawingsUnderImportLcsCaptureCheckDocumentsButton.click();
}

async clickDrawingsUnderImportLcsInternetPendingDrawingsButton() {
    await this.btnDrawingsUnderImportLcsInternetPendingDrawingsButton.click();
}

// Non-Discrepant Documents under Import LC

async clickNonDiscrepantDocumentsUnderImportLcDropdown() {
    await this.ddlNonDiscrepantDocumentsUnderImportLcDropdown.click();
}

async clickDrawingsUnderShippingGuaranteeButton() {
    await this.btnDrawingsUnderShippingGuaranteeButton.click();
}

async clickSightPaymentUnderImportLcButton() {
    await this.btnSightPaymentUnderImportLcButton.click();
}

async clickAcceptanceOfDocumentsButton() {
    await this.btnAcceptanceOfDocumentsButton.click();
}

async clickDrawingsUnderMixedPaymentImportLcButton() {
    await this.btnDrawingsUnderMixedPaymentImportLcButton.click();
}

async clickPaymentAcceptanceUnderStandbyLcImportButton() {
    await this.btnPaymentAcceptanceUnderStandbyLcImportButton.click();
}

async clickOnlineMaturityOfAcceptancesImportsButton() {
    await this.btnOnlineMaturityOfAcceptancesImportsButton.click();
}

async clickAmendmentOnlineSettlementOfMixedPaymentsImportButton() {
    await this.btnAmendmentOnlineSettlementOfMixedPaymentsImportButton.click();
}

async clickAmendmentToPaidDrawingsButton() {
    await this.btnAmendmentToPaidDrawingsButton.click();
}

// Sight Payment with Financing

async clickSightPaymentWithFinancingDropdown() {
    await this.ddlSightPaymentWithFinancingDropdown.click();
}

async clickSightPaymentUnderImportLcFinancingButton() {
    await this.btnSightPaymentUnderImportLcFinancingButton.click();
}

// Discounting under Import LC

async clickDiscountingUnderImportLcDropdown() {
    await this.ddlDiscountingUnderImportLcDropdown.click();
}

async clickDiscountingOfUsanceBillsImportsButton() {
    await this.btnDiscountingOfUsanceBillsImportsButton.click();
}

async clickDiscountingUnderImportLcAmendmentToUsanceDiscountingButton() {
    await this.btnDiscountingUnderImportLcAmendmentToUsanceDiscountingButton.click();
}

async clickDiscountingForMixedPaymentsImportsButton() {
    await this.btnDiscountingForMixedPaymentsImportsButton.click();
}

async clickAmendmentForMixedPaymentDiscountingImportButton() {
    await this.btnAmendmentForMixedPaymentDiscountingImportButton.click();
}

// Discrepant Documents under Import LC

async clickDiscrepantDocumentsUnderImportLcDropdown() {
    await this.ddlDiscrepantDocumentsUnderImportLcDropdown.click();
}

async clickDocumentsPendingForApplicantApprovalButton() {
    await this.btnDocumentsPendingForApplicantApprovalButton.click();
}

async clickRejectDocumentsUnderImportLcButton() {
    await this.btnRejectDocumentsUnderImportLcButton.click();
}

async clickHandlingOfRejectedDocumentsImportsButton() {
    await this.btnHandlingOfRejectedDocumentsImportsButton.click();
}

// Documents Under Trust (Import LC)

async clickDocumentsUnderTrustImportLcDropdown() {
    await this.ddlDocumentsUnderTrustImportLcDropdown.click();
}

async clickReleaseDocumentUnderTrustButton() {
    await this.btnReleaseDocumentUnderTrustButton.click();
}

async clickPayRejectAcceptDocReleasedUnderTrustButton() {
    await this.btnPayRejectAcceptDocReleasedUnderTrustButton.click();
}

async clickOnlineMaturityOfAcceptedDocumentsButton() {
    await this.btnOnlineMaturityOfAcceptedDocumentsButton.click();
}

async clickFinalRejectionOfDocumentsButton() {
    await this.btnFinalRejectionOfDocumentsButton.click();
}

// Import Inward Swift Messages

async clickImportInwardSwiftMessagesDropdown() {
    await this.ddlImportInwardSwiftMessagesDropdown.click();
}

async clickImportInwardSwiftMessagesButton() {
    await this.btnImportInwardSwiftMessagesButton.click();
}

async clickAcknowledgementMessagesButton() {
    await this.btnAcknowledgementMessagesButton.click();
}

// Export LCs

async clickExportLcsDropdown() {
    await this.ddlExportLcsDropdown.click();
}

// Register/Advise Export LCs

async clickRegisterAdviseExportLcsDropdown() {
    await this.ddlRegisterAdviseExportLcsDropdown.click();
}

async clickExportLcsPreAdviceButton() {
    await this.btnExportLcsPreAdviceButton.click();
}

async clickPreAdviceToAdviseListOfPreadvisedLcsButton() {
    await this.btnPreAdviceToAdviseListOfPreadvisedLcsButton.click();
}

async clickAdviseRegisterSightPaymentLcsButton() {
    await this.btnAdviseRegisterSightPaymentLcsButton.click();
}

async clickAdviseRegisterUsanceLcsButton() {
    await this.btnAdviseRegisterUsanceLcsButton.click();
}

async clickAdviseRegisterNegotiationLcsButton() {
    await this.btnAdviseRegisterNegotiationLcsButton.click();
}

async clickAdviseRegisterMixedPaymentLcsButton() {
    await this.btnAdviseRegisterMixedPaymentLcsButton.click();
}

// Transfer of Export LCs

async clickTransferOfExportLcsDropdown() {
    await this.ddlTransferOfExportLcsDropdown.click();
}

async clickListOfTransferableExportLcsButton() {
    await this.btnListOfTransferableExportLcsButton.click();
}

async clickTransferOfExportLcButton() {
    await this.btnTransferOfExportLcButton.click();
}

// Maintenance of Export LCs

async clickMaintenanceOfExportLcsDropdown() {
    await this.ddlMaintenanceOfExportLcsDropdown.click();
}

async clickMaintenanceOfExportLcsInternalAmendmentButton() {
    await this.btnMaintenanceOfExportLcsInternalAmendmentButton.click();
}

async clickMaintenanceOfExportLcsExternalAmendmentButton() {
    await this.btnMaintenanceOfExportLcsExternalAmendmentButton.click();
}

async clickMaintenanceOfExportLcsAmendmentSeekingBenefConsentButton() {
    await this.btnMaintenanceOfExportLcsAmendmentSeekingBenefConsentButton.click();
}

async clickMaintenanceOfExportLcsInternetRequestsLcAmendmentsButton() {
    await this.btnMaintenanceOfExportLcsInternetRequestsLcAmendmentsButton.click();
}

async clickApproveRejectAmendmentOfExportLcButton() {
    await this.btnApproveRejectAmendmentOfExportLcButton.click();
}

async clickReversalCancellationOfExportLcButton() {
    await this.btnReversalCancellationOfExportLcButton.click();
}

// Drawings under Export LCs

async clickDrawingsUnderExportLcsDropdown() {
    await this.ddlDrawingsUnderExportLcsDropdown.click();
}

async clickRegisterDocumentsButton() {
    await this.btnRegisterDocumentsButton.click();
}

async clickDrawingsUnderExportLcsCaptureCheckDocumentsButton() {
    await this.btnDrawingsUnderExportLcsCaptureCheckDocumentsButton.click();
}

async clickRegisterCaptureCheckDocTransferredLcButton() {
    await this.btnRegisterCaptureCheckDocTransferredLcButton.click();
}

async clickDrawingsUnderExportLcsInternetPendingDrawingsButton() {
    await this.btnDrawingsUnderExportLcsInternetPendingDrawingsButton.click();
}

// Non-Discrepant Documents under Export LC

async clickNonDiscrepantDocumentsUnderExportLcDropdown() {
    await this.ddlNonDiscrepantDocumentsUnderExportLcDropdown.click();
}

async clickSightPaymentUnderExportLcButton() {
    await this.btnSightPaymentUnderExportLcButton.click();
}

async clickAcceptanceUnderExportLcButton() {
    await this.btnAcceptanceUnderExportLcButton.click();
}

async clickDrawingsUnderMixedPaymentExportLcButton() {
    await this.btnDrawingsUnderMixedPaymentExportLcButton.click();
}

async clickPaymentAcceptanceUnderStandbyLcExportButton() {
    await this.btnPaymentAcceptanceUnderStandbyLcExportButton.click();
}

async clickOnlineMaturityOfAcceptancesButton() {
    await this.btnOnlineMaturityOfAcceptancesButton.click();
}

async clickAmendmentOnlineSettlementOfMixedPaymentsExportButton() {
    await this.btnAmendmentOnlineSettlementOfMixedPaymentsExportButton.click();
}

// Negotiation/Discounting under Export LC

async clickNegotiationDiscountingUnderExportLcDropdown() {
    await this.ddlNegotiationDiscountingUnderExportLcDropdown.click();
}

async clickSightBillNegotiationDiscountingButton() {
    await this.btnSightBillNegotiationDiscountingButton.click();
}

async clickAmendmentToSightDiscountingButton() {
    await this.btnAmendmentToSightDiscountingButton.click();
}

async clickUsanceBillNegotiationDiscountingButton() {
    await this.btnUsanceBillNegotiationDiscountingButton.click();
}

async clickNegotiationDiscountingUnderExportLcAmendmentToUsanceDiscountingButton() {
    await this.btnNegotiationDiscountingUnderExportLcAmendmentToUsanceDiscountingButton.click();
}

async clickMixedBillsNegotiationDiscountingButton() {
    await this.btnMixedBillsNegotiationDiscountingButton.click();
}

async clickAmendmentForMixedPaymentDiscountingExportButton() {
    await this.btnAmendmentForMixedPaymentDiscountingExportButton.click();
}

// Discrepant Documents under Export LC

async clickDiscrepantDocumentsUnderExportLcDropdown() {
    await this.ddlDiscrepantDocumentsUnderExportLcDropdown.click();
}

async clickRejectDiscrepantDocumentsExportsButton() {
    await this.btnRejectDiscrepantDocumentsExportsButton.click();
}

async clickHandlingOfRejectedDocumentsExportsButton() {
    await this.btnHandlingOfRejectedDocumentsExportsButton.click();
}

// Payment Under Reserve

async clickPaymentUnderReserveDropdown() {
    await this.ddlPaymentUnderReserveDropdown.click();
}

async clickPaymentUnderReserveExportsButton() {
    await this.btnPaymentUnderReserveExportsButton.click();
}

async clickPaymentOfSightBillPaidUnderReserveButton() {
    await this.btnPaymentOfSightBillPaidUnderReserveButton.click();
}

async clickBillPaidUnderReserveReturnedUnpaidButton() {
    await this.btnBillPaidUnderReserveReturnedUnpaidButton.click();
}

async clickFinalRejectionOfReturnedBillButton() {
    await this.btnFinalRejectionOfReturnedBillButton.click();
}

// Export Loan and Adjustment from Bill Proceeds

async clickExportLoanAndAdjustmentFromBillProceedsDropdown() {
    await this.ddlExportLoanAndAdjustmentFromBillProceedsDropdown.click();
}

async clickCreateExportPackingCreditLimitButton() {
    await this.btnCreateExportPackingCreditLimitButton.click();
}

async clickCreateExportPackingCreditAccountButton() {
    await this.btnCreateExportPackingCreditAccountButton.click();
}

async clickSightNegotiationAdjustmentOfEpcButton() {
    await this.btnSightNegotiationAdjustmentOfEpcButton.click();
}

async clickSightNegotiationAdjustmentOfLoanButton() {
    await this.btnSightNegotiationAdjustmentOfLoanButton.click();
}

// Inward SWIFT Messages (LC)

async clickInwardSwiftMessagesLcDropdown() {
    await this.ddlInwardSwiftMessagesLcDropdown.click();
}

async clickInwardLcsButton() {
    await this.btnInwardLcsButton.click();
}

async clickBeneConsentAmendmentsButton() {
    await this.btnBeneConsentAmendmentsButton.click();
}

async clickRejectionThroughMt734Button() {
    await this.btnRejectionThroughMt734Button.click();
}

async clickNonConformingReimbursementsButton() {
    await this.btnNonConformingReimbursementsButton.click();
}

async clickOtherInwardMessagesButton() {
    await this.btnOtherInwardMessagesButton.click();
}

// Back to Back LCs

async clickBackToBackLcsDropdown() {
    await this.ddlBackToBackLcsDropdown.click();
}

async clickExportLcForBackToBackLcButton() {
    await this.btnExportLcForBackToBackLcButton.click();
}

async clickBackToBackImportLcButton() {
    await this.btnBackToBackImportLcButton.click();
}

// Inward Collections

async clickInwardCollectionsDropdown() {
    await this.ddlInwardCollectionsDropdown.click();
}

async clickInwardCollectionsLodgeSightDocyCollectionButton() {
    await this.btnInwardCollectionsLodgeSightDocyCollectionButton.click();
}

async clickInwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton() {
    await this.btnInwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton.click();
}

async clickLodgeCleanCollectionButton() {
    await this.btnLodgeCleanCollectionButton.click();
}

async clickAmendmentOfInwardAvalisedCollectionButton() {
    await this.btnAmendmentOfInwardAvalisedCollectionButton.click();
}

async clickInternetPendingInwardCollectionsButton() {
    await this.btnInternetPendingInwardCollectionsButton.click();
}

async clickAcceptanceAvalisationOfInwardCollectionButton() {
    await this.btnAcceptanceAvalisationOfInwardCollectionButton.click();
}

async clickPaymentOfInwardCollectionButton() {
    await this.btnPaymentOfInwardCollectionButton.click();
}

async clickInitiatePaymentOfAcceptedAvalisedCollnButton() {
    await this.btnInitiatePaymentOfAcceptedAvalisedCollnButton.click();
}

async clickSettleAcceptedAvalisedCollectionButton() {
    await this.btnSettleAcceptedAvalisedCollectionButton.click();
}

async clickInwardCollectionsTakeReduceMarginButton() {
    await this.btnInwardCollectionsTakeReduceMarginButton.click();
}

async clickClosureOfInwardCollectionButton() {
    await this.btnClosureOfInwardCollectionButton.click();
}

// Inward Collections - Inward Swift Messages

async clickInwardCollectionsInwardSwiftMessagesDropdown() {
    await this.ddlInwardCollectionsInwardSwiftMessagesDropdown.click();
}

async clickInwardCollectionsMessagesProcessedButton() {
    await this.btnInwardCollectionsMessagesProcessedButton.click();
}

// Outward Collections

async clickOutwardCollectionsDropdown() {
    await this.ddlOutwardCollectionsDropdown.click();
}

async clickDefineDirectCollectionRangeForCustomersButton() {
    await this.btnDefineDirectCollectionRangeForCustomersButton.click();
}

async clickOutwardCollectionsLodgeSightDocyCollectionButton() {
    await this.btnOutwardCollectionsLodgeSightDocyCollectionButton.click();
}

async clickOutwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton() {
    await this.btnOutwardCollectionsLodgeUsanceTenorDocumentaryCollectionButton.click();
}

async clickLodgeCleanCollectionsButton() {
    await this.btnLodgeCleanCollectionsButton.click();
}

async clickInternetPendingOutwardCollectionsButton() {
    await this.btnInternetPendingOutwardCollectionsButton.click();
}

async clickAmendUploadDocsOutwardCollectionButton() {
    await this.btnAmendUploadDocsOutwardCollectionButton.click();
}

async clickTraceTheCollectionButton() {
    await this.btnTraceTheCollectionButton.click();
}

async clickAcceptanceOfOutwardCollectionButton() {
    await this.btnAcceptanceOfOutwardCollectionButton.click();
}

async clickPaymentOfOutwardCollectionButton() {
    await this.btnPaymentOfOutwardCollectionButton.click();
}

async clickOnlineMaturityOfAcceptedCollectionsButton() {
    await this.btnOnlineMaturityOfAcceptedCollectionsButton.click();
}

// Purchase/Discounting of Collection

async clickPurchaseDiscountingOfCollectionDropdown() {
    await this.ddlPurchaseDiscountingOfCollectionDropdown.click();
}

async clickPurchaseOfCollectionButton() {
    await this.btnPurchaseOfCollectionButton.click();
}

async clickAmendmentToCollectionPurchasedButton() {
    await this.btnAmendmentToCollectionPurchasedButton.click();
}

async clickPurchaseOfAvalisedCollectionButton() {
    await this.btnPurchaseOfAvalisedCollectionButton.click();
}

async clickAmendmentToAvalisedCollectionPurchasedButton() {
    await this.btnAmendmentToAvalisedCollectionPurchasedButton.click();
}

// Return/Closure of Outward Collection

async clickReturnClosureOfOutwardCollectionDropdown() {
    await this.ddlReturnClosureOfOutwardCollectionDropdown.click();
}

async clickReturnOfOutwardCollectionsButton() {
    await this.btnReturnOfOutwardCollectionsButton.click();
}

async clickClosureOfOutwardCollectionsButton() {
    await this.btnClosureOfOutwardCollectionsButton.click();
}

// Outward Collections - Inward SWIFT Messages

async clickOutwardCollectionsInwardSwiftMessagesDropdown() {
    await this.ddlOutwardCollectionsInwardSwiftMessagesDropdown.click();
}

async clickOutwardCollectionsMessagesProcessedButton() {
    await this.btnOutwardCollectionsMessagesProcessedButton.click();
}

// Open Account Trading

async clickOpenAccountTradingDropdown() {
    await this.ddlOpenAccountTradingDropdown.click();
}

// Import Open Account Trading

async clickImportOpenAccountTradingDropdown() {
    await this.ddlImportOpenAccountTradingDropdown.click();
}

async clickLodgeImportDocumentsButton() {
    await this.btnLodgeImportDocumentsButton.click();
}

async clickAmendImportDocumentsButton() {
    await this.btnAmendImportDocumentsButton.click();
}

async clickSightPaymentOfImportDocsButton() {
    await this.btnSightPaymentOfImportDocsButton.click();
}

async clickUsancePaymentImportButton() {
    await this.btnUsancePaymentImportButton.click();
}

// Export Open Account Trading

async clickExportOpenAccountTradingDropdown() {
    await this.ddlExportOpenAccountTradingDropdown.click();
}

async clickLodgeExportDocumentsButton() {
    await this.btnLodgeExportDocumentsButton.click();
}

async clickAmendExportDocumentsButton() {
    await this.btnAmendExportDocumentsButton.click();
}

async clickSightPaymentOfExportDocsButton() {
    await this.btnSightPaymentOfExportDocsButton.click();
}

async clickUsancePaymentExportButton() {
    await this.btnUsancePaymentExportButton.click();
}

// Advance Payment Trading

async clickAdvancePaymentTradingDropdown() {
    await this.ddlAdvancePaymentTradingDropdown.click();
}

// Import - Trade Evidence against Advance Payment

async clickImportTradeEvidenceAgainstAdvancePaymentDropdown() {
    await this.ddlImportTradeEvidenceAgainstAdvancePaymentDropdown.click();
}

async clickLodgeImportAdvancePaymentButton() {
    await this.btnLodgeImportAdvancePaymentButton.click();
}

async clickAmendImportAdvancePaymentButton() {
    await this.btnAmendImportAdvancePaymentButton.click();
}

// Export - Trade Evidence against Advance Payment

async clickExportTradeEvidenceAgainstAdvancePaymentDropdown() {
    await this.ddlExportTradeEvidenceAgainstAdvancePaymentDropdown.click();
}

async clickLodgeExportAdvancePaymentButton() {
    await this.btnLodgeExportAdvancePaymentButton.click();
}

async clickAmendExportAdvancePaymentButton() {
    await this.btnAmendExportAdvancePaymentButton.click();
}

// Charge Processing

async clickChargeProcessingDropdown() {
    await this.ddlChargeProcessingDropdown.click();
}

async clickDirectChargeCollectionButton() {
    await this.btnDirectChargeCollectionButton.click();
}

async clickLcRefundOfChargesButton() {
    await this.btnLcRefundOfChargesButton.click();
}

async clickSettleWriteOffClaimedChargesButton() {
    await this.btnSettleWriteOffClaimedChargesButton.click();
}

async clickWaiveUnpaidChargesButton() {
    await this.btnWaiveUnpaidChargesButton.click();
}

// LC Reimbursement Processing

async clickLcReimbursementProcessingDropdown() {
    await this.ddlLcReimbursementProcessingDropdown.click();
}

async clickLcReimbursementTransactionsButton() {
    await this.btnLcReimbursementTransactionsButton.click();
}

async clickReimbursementAuthorisationButton() {
    await this.btnReimbursementAuthorisationButton.click();
}

// Unauthorised Transactions

async clickUnauthorisedTransactionsDropdown() {
    await this.ddlUnauthorisedTransactionsDropdown.click();
}

async clickUnauthorisedLcCollnTransactionsButton() {
    await this.btnUnauthorisedLcCollnTransactionsButton.click();
}

async clickUnauthorisedDrawingsButton() {
    await this.btnUnauthorisedDrawingsButton.click();
}

async clickUnauthorisedChargesButton() {
    await this.btnUnauthorisedChargesButton.click();
}

// Authorise TF Transactions

async clickAuthoriseTfTransactionsDropdown() {
    await this.ddlAuthoriseTfTransactionsDropdown.click();
}

async clickAuthoriseDeleteImportLcsAmendmentsButton() {
    await this.btnAuthoriseDeleteImportLcsAmendmentsButton.click();
}

async clickAuthoriseDeleteExportLcsAmendmentsButton() {
    await this.btnAuthoriseDeleteExportLcsAmendmentsButton.click();
}

async clickAuthoriseDeleteInwardCollnAmendmentsButton() {
    await this.btnAuthoriseDeleteInwardCollnAmendmentsButton.click();
}

async clickAuthoriseDeleteOutwardCollnAmendmentsButton() {
    await this.btnAuthoriseDeleteOutwardCollnAmendmentsButton.click();
}

async clickAuthoriseDeleteBeneConsentAmendmentsButton() {
    await this.btnAuthoriseDeleteBeneConsentAmendmentsButton.click();
}

async clickAuthoriseDeleteDrawingsButton() {
    await this.btnAuthoriseDeleteDrawingsButton.click();
}

async clickAuthoriseDeleteDiscountAmendmentsButton() {
    await this.btnAuthoriseDeleteDiscountAmendmentsButton.click();
}

async clickAuthoriseDeleteDirectCollnAllotmentButton() {
    await this.btnAuthoriseDeleteDirectCollnAllotmentButton.click();
}

async clickAuthoriseDeleteChargeRecoveryButton() {
    await this.btnAuthoriseDeleteChargeRecoveryButton.click();
}

async clickAuthoriseDeleteRefundOfChargesButton() {
    await this.btnAuthoriseDeleteRefundOfChargesButton.click();
}

async clickAuthoriseDeleteChargeSettlementWriteOffButton() {
    await this.btnAuthoriseDeleteChargeSettlementWriteOffButton.click();
}

async clickAuthoriseDeleteInwardLcsButton() {
    await this.btnAuthoriseDeleteInwardLcsButton.click();
}

async clickAuthoriseDeleteInwardLcAmendmentsButton() {
    await this.btnAuthoriseDeleteInwardLcAmendmentsButton.click();
}

async clickAuthoriseDeleteInwardDrawingsButton() {
    await this.btnAuthoriseDeleteInwardDrawingsButton.click();
}

async clickAuthoriseDeleteInwardMsgsForInwardCollnButton() {
    await this.btnAuthoriseDeleteInwardMsgsForInwardCollnButton.click();
}

// Trade Finance Enquiries

async clickTradeFinanceEnquiriesDropdown() {
    await this.ddlTradeFinanceEnquiriesDropdown.click();
}

async clickImportLcsOutstandingButton() {
    await this.btnImportLcsOutstandingButton.click();
}

async clickImportLcsExpiredButOutstandingButton() {
    await this.btnImportLcsExpiredButOutstandingButton.click();
}

async clickImportLcsLinkedToShippingGuaranteeButton() {
    await this.btnImportLcsLinkedToShippingGuaranteeButton.click();
}

async clickImportLcsCoveredThroughFxContractButton() {
    await this.btnImportLcsCoveredThroughFxContractButton.click();
}

async clickImportLcsBillReceivedUnderCollectionButton() {
    await this.btnImportLcsBillReceivedUnderCollectionButton.click();
}

async clickSgDrawingsBookedUnderLcButton() {
    await this.btnSgDrawingsBookedUnderLcButton.click();
}

async clickPresentationsPendingCheckingImportLcButton() {
    await this.btnPresentationsPendingCheckingImportLcButton.click();
}

async clickUsanceBillsDueForSettlementImportLcButton() {
    await this.btnUsanceBillsDueForSettlementImportLcButton.click();
}

async clickOsUsanceBillsDiscountedUnderImportLcButton() {
    await this.btnOsUsanceBillsDiscountedUnderImportLcButton.click();
}

async clickDocumentsImportLcReleasedUnderTrustButton() {
    await this.btnDocumentsImportLcReleasedUnderTrustButton.click();
}

async clickLcSummaryImportExportLcsButton() {
    await this.btnLcSummaryImportExportLcsButton.click();
}

async clickPaymentOnInstallmentsImportExportLcsButton() {
    await this.btnPaymentOnInstallmentsImportExportLcsButton.click();
}

async clickExportLcsOutstandingButton() {
    await this.btnExportLcsOutstandingButton.click();
}

async clickExportLcsExpiredButOutstandingButton() {
    await this.btnExportLcsExpiredButOutstandingButton.click();
}

async clickAmendmentsApprovedExportLcsInternetButton() {
    await this.btnAmendmentsApprovedExportLcsInternetButton.click();
}

async clickAmendmentsRejectedExportLcsInternetButton() {
    await this.btnAmendmentsRejectedExportLcsInternetButton.click();
}

async clickExportLcsCoveredThroughFxContractButton() {
    await this.btnExportLcsCoveredThroughFxContractButton.click();
}

async clickExportLcsBillSentForCollectionButton() {
    await this.btnExportLcsBillSentForCollectionButton.click();
}

async clickPresentationsPendingCheckingExportLcButton() {
    await this.btnPresentationsPendingCheckingExportLcButton.click();
}

async clickUsanceBillsDueForSettlementExportLcButton() {
    await this.btnUsanceBillsDueForSettlementExportLcButton.click();
}

async clickOsBillsNegotiatedDiscountedExportLcButton() {
    await this.btnOsBillsNegotiatedDiscountedExportLcButton.click();
}

async clickExportBillsPaidUnderReserveButton() {
    await this.btnExportBillsPaidUnderReserveButton.click();
}

async clickInwardDocumentaryCollectionsOutstandingButton() {
    await this.btnInwardDocumentaryCollectionsOutstandingButton.click();
}

async clickInwardDocCollectionsReleasedUnderTrustButton() {
    await this.btnInwardDocCollectionsReleasedUnderTrustButton.click();
}

async clickInwardCleanCollectionsOutstandingButton() {
    await this.btnInwardCleanCollectionsOutstandingButton.click();
}

async clickAvalisedInwardCollectionsButton() {
    await this.btnAvalisedInwardCollectionsButton.click();
}

async clickInwardDocCollectionsOverdueButton() {
    await this.btnInwardDocCollectionsOverdueButton.click();
}

async clickInwardDocCollectionsPendingResponseButton() {
    await this.btnInwardDocCollectionsPendingResponseButton.click();
}

async clickOutwardDocumentaryCollectionsOutstandingButton() {
    await this.btnOutwardDocumentaryCollectionsOutstandingButton.click();
}

async clickOutwardCleanCollectionsOutstandingButton() {
    await this.btnOutwardCleanCollectionsOutstandingButton.click();
}

async clickOutwardCollectionDocumentsButton() {
    await this.btnOutwardCollectionDocumentsButton.click();
}

async clickOverdueOutwardAvalisedDiscountedCollectionButton() {
    await this.btnOverdueOutwardAvalisedDiscountedCollectionButton.click();
}

async clickRejectedOutwardCollectionInternetRequestsButton() {
    await this.btnRejectedOutwardCollectionInternetRequestsButton.click();
}

async clickLcCommissionCalculationDetailsButton() {
    await this.btnLcCommissionCalculationDetailsButton.click();
}

async clickDocumentsReceivedUnderImportLcButton() {
    await this.btnDocumentsReceivedUnderImportLcButton.click();
}

async clickListOfPaidImportDrawingsPendingDocumentButton() {
    await this.btnListOfPaidImportDrawingsPendingDocumentButton.click();
}

async clickImportDrawingsPendingBeyondAllowedDaysButton() {
    await this.btnImportDrawingsPendingBeyondAllowedDaysButton.click();
}

async clickDocumentsReceivedUnderExportLcButton() {
    await this.btnDocumentsReceivedUnderExportLcButton.click();
}

async clickViewChargeDetailsButton() {
    await this.btnViewChargeDetailsButton.click();
}

async clickImportDrawingPaymentOrdersButton() {
    await this.btnImportDrawingPaymentOrdersButton.click();
}

async clickExportDrawingPaymentOrdersButton() {
    await this.btnExportDrawingPaymentOrdersButton.click();
}

// TF TBML Enquiries

async clickTfTbmlEnquiriesDropdown() {
    await this.ddlTfTbmlEnquiriesDropdown.click();
}

async clickLcTbmlTransactionsButton() {
    await this.btnLcTbmlTransactionsButton.click();
}

async clickDrawingsTbmlTransactionsButton() {
    await this.btnDrawingsTbmlTransactionsButton.click();
}

async clickLcAmendmentsTbmlTransactionsButton() {
    await this.btnLcAmendmentsTbmlTransactionsButton.click();
}

// Trade Based Lending

async clickTradeBasedLendingDropdown() {
    await this.ddlTradeBasedLendingDropdown.click();
}

async clickTradeBasedLendingProductCatalogButton() {
    await this.btnTradeBasedLendingProductCatalogButton.click();
}

async clickAuthoriseViewLoanDetailsButton() {
    await this.btnAuthoriseViewLoanDetailsButton.click();
}

// Accounting Entries

async clickTradeFinanceAccountingEntriesDropdown() {
    await this.ddlTradeFinanceAccountingEntriesDropdown.click();
}

async clickTradeFinanceAccountingEntriesViewUnauthorisedEntriesButton() {
    await this.btnTradeFinanceAccountingEntriesViewUnauthorisedEntriesButton.click();
}

async clickTradeFinanceAccountingEntriesViewTransactionEntriesButton() {
    await this.btnTradeFinanceAccountingEntriesViewTransactionEntriesButton.click();
}

async clickTradeFinanceAccountingEntriesViewAccountEntriesButton() {
    await this.btnTradeFinanceAccountingEntriesViewAccountEntriesButton.click();
}

async clickTradeFinanceAccountingEntriesSeePlCategoriesEntriesButton() {
    await this.btnTradeFinanceAccountingEntriesSeePlCategoriesEntriesButton.click();
}

// Guarantees

async clickGuaranteesDropdown() {
    await this.ddlGuaranteesDropdown.click();
}

// Undertaking Issued

async clickUndertakingIssuedDropdown() {
    await this.ddlUndertakingIssuedDropdown.click();
}

// Issue of Undertakings

async clickIssueOfUndertakingsDropdown() {
    await this.ddlIssueOfUndertakingsDropdown.click();
}

// Demand Guarantees

async clickDemandGuaranteesDropdown() {
    await this.ddlDemandGuaranteesDropdown.click();
}

async clickIssueOfGenericUndertakingButton() {
    await this.btnIssueOfGenericUndertakingButton.click();
}

async clickIssueOfBidBondButton() {
    await this.btnIssueOfBidBondButton.click();
}

async clickIssueOfPerformanceBondButton() {
    await this.btnIssueOfPerformanceBondButton.click();
}

async clickIssueOfShippingGuaranteeButton() {
    await this.btnIssueOfShippingGuaranteeButton.click();
}

// StandBy LC

async clickStandByLcDropdown() {
    await this.ddlStandByLcDropdown.click();
}

async clickIssueOfStandbyLcButton() {
    await this.btnIssueOfStandbyLcButton.click();
}

// Maintenance of Undertaking

async clickMaintenanceOfUndertakingDropdown() {
    await this.ddlMaintenanceOfUndertakingDropdown.click();
}

// Amendment under Guarantees

async clickAmendmentUnderGuaranteesDropdown() {
    await this.ddlAmendmentUnderGuaranteesDropdown.click();
}

async clickAmendReverseGuaranteeIssuedButton() {
    await this.btnAmendReverseGuaranteeIssuedButton.click();
}

async clickAmendmentResponseToGuaranteeIssuedButton() {
    await this.btnAmendmentResponseToGuaranteeIssuedButton.click();
}

async clickInternetAmendRequestsButton() {
    await this.btnInternetAmendRequestsButton.click();
}

// Process Claim

async clickGuaranteeIssuedProcessClaimDropdown() {
    await this.ddlGuaranteeIssuedProcessClaimDropdown.click();
}

// Guarantee Claim Processing

async clickGuaranteeIssuedClaimProcessingDropdown() {
    await this.ddlGuaranteeIssuedClaimProcessingDropdown.click();
}

async clickRegisterClaimUnderGuaranteeButton() {
    await this.btnRegisterClaimUnderGuaranteeButton.click();
}

async clickPayRejectClaimUnderGuaranteeButton() {
    await this.btnPayRejectClaimUnderGuaranteeButton.click();
}

async clickInternetPendingClaimsUnderProcessButton() {
    await this.btnInternetPendingClaimsUnderProcessButton.click();
}

// Standby LC Claim Processing

async clickStandbyLcClaimProcessingDropdown() {
    await this.ddlStandbyLcClaimProcessingDropdown.click();
}

async clickRegisterPresentationUnderStandbyLcButton() {
    await this.btnRegisterPresentationUnderStandbyLcButton.click();
}

async clickRegisterClaimUnderStandbyLcButton() {
    await this.btnRegisterClaimUnderStandbyLcButton.click();
}

async clickPayRejectClaimUnderStandbyLcButton() {
    await this.btnPayRejectClaimUnderStandbyLcButton.click();
}

async clickChangeCommissionRateButton() {
    await this.btnChangeCommissionRateButton.click();
}

async clickReleaseGuaranteeMarginButton() {
    await this.btnReleaseGuaranteeMarginButton.click();
}

async clickExpiryOfGuaranteesButton() {
    await this.btnExpiryOfGuaranteesButton.click();
}

async clickCancellationOfShippingGuaranteeButton() {
    await this.btnCancellationOfShippingGuaranteeButton.click();
}

async clickReinstateLiquidatedGuaranteesButton() {
    await this.btnReinstateLiquidatedGuaranteesButton.click();
}

async clickNonExtensionNotificationButton() {
    await this.btnNonExtensionNotificationButton.click();
}

// Internet Request

async clickInternetRequestDropdown() {
    await this.ddlInternetRequestDropdown.click();
}

async clickGuaranteesInternetRequestsButton() {
    await this.btnGuaranteesInternetRequestsButton.click();
}

// Inward Swift Messages

async clickGuaranteesInwardSwiftMessagesDropdown() {
    await this.ddlGuaranteesInwardSwiftMessagesDropdown.click();
}

async clickInwardGuaranteeSwiftMessagesButton() {
    await this.btnInwardGuaranteeSwiftMessagesButton.click();
}

// Multi-party/Participation Guarantees

async clickMultiPartyParticipationGuaranteesDropdown() {
    await this.ddlMultiPartyParticipationGuaranteesDropdown.click();
}

async clickIssueOfMultiPartyGuaranteeButton() {
    await this.btnIssueOfMultiPartyGuaranteeButton.click();
}

async clickAmendmentToMultiPartyGuaranteeButton() {
    await this.btnAmendmentToMultiPartyGuaranteeButton.click();
}

async clickParticipationTakenButton() {
    await this.btnParticipationTakenButton.click();
}

// Undertaking Received

async clickUndertakingReceivedDropdown() {
    await this.ddlUndertakingReceivedDropdown.click();
}

// Register Undertaking Received

async clickRegisterUndertakingReceivedDropdown() {
    await this.ddlRegisterUndertakingReceivedDropdown.click();
}

async clickGenericGuaranteeStandbyLcButton() {
    await this.btnGenericGuaranteeStandbyLcButton.click();
}

async clickGuaranteeReceivedCoveringFacilityButton() {
    await this.btnGuaranteeReceivedCoveringFacilityButton.click();
}

// Inward Guarantees

async clickInwardGuaranteesDropdown() {
    await this.ddlInwardGuaranteesDropdown.click();
}

async clickInwardMt760MessagesButton() {
    await this.btnInwardMt760MessagesButton.click();
}

// Maintenance of Undertaking Received

async clickMaintenanceOfUndertakingReceivedDropdown() {
    await this.ddlMaintenanceOfUndertakingReceivedDropdown.click();
}

// Amendment under Guarantees Received

async clickAmendmentUnderGuaranteesReceivedDropdown() {
    await this.ddlAmendmentUnderGuaranteesReceivedDropdown.click();
}

async clickAmendmentToGuaranteeReceivedButton() {
    await this.btnAmendmentToGuaranteeReceivedButton.click();
}

async clickAmendmentResponseToGuaranteeReceivedButton() {
    await this.btnAmendmentResponseToGuaranteeReceivedButton.click();
}

// Process Claim - Undertaking Received

async clickUndertakingReceivedProcessClaimDropdown() {
    await this.ddlUndertakingReceivedProcessClaimDropdown.click();
}

// Guarantee Claim Processing - Undertaking Received

async clickUndertakingReceivedGuaranteeClaimProcessingDropdown() {
    await this.ddlUndertakingReceivedGuaranteeClaimProcessingDropdown.click();
}

async clickRegisterClaimUnderGuaranteeReceivedButton() {
    await this.btnRegisterClaimUnderGuaranteeReceivedButton.click();
}

async clickPayRejectClaimUnderGuaranteeReceivedButton() {
    await this.btnPayRejectClaimUnderGuaranteeReceivedButton.click();
}

async clickInternetInitiatedClaimRequestsButton() {
    await this.btnInternetInitiatedClaimRequestsButton.click();
}

// Standby LC Claim Processing - Undertaking Received

async clickStandbyLcClaimProcessingReceivedDropdown() {
    await this.ddlStandbyLcClaimProcessingReceivedDropdown.click();
}

async clickRegisterPresentationUnderStandbyLcReceivedButton() {
    await this.btnRegisterPresentationUnderStandbyLcReceivedButton.click();
}

async clickRegisterClaimUnderStandbyLcReceivedButton() {
    await this.btnRegisterClaimUnderStandbyLcReceivedButton.click();
}

async clickPayRejectClaimUnderStandbyLcReceivedButton() {
    await this.btnPayRejectClaimUnderStandbyLcReceivedButton.click();
}

async clickInwardGuaranteesReceivedButton() {
    await this.btnInwardGuaranteesReceivedButton.click();
}

async clickReleaseGuaranteesLiabilityButton() {
    await this.btnReleaseGuaranteesLiabilityButton.click();
}

// Undertaking Advised

async clickUndertakingAdvisedDropdown() {
    await this.ddlUndertakingAdvisedDropdown.click();
}

// Register Undertaking Advised

async clickRegisterUndertakingAdvisedDropdown() {
    await this.ddlRegisterUndertakingAdvisedDropdown.click();
}

async clickGenericGuaranteeReceivedAdvisedButton() {
    await this.btnGenericGuaranteeReceivedAdvisedButton.click();
}

// Maintenance of Undertakings

async clickMaintenanceOfUndertakingsDropdown() {
    await this.ddlMaintenanceOfUndertakingsDropdown.click();
}

// Amendment under Guarantees Advised

async clickAmendmentUnderGuaranteesAdvisedDropdown() {
    await this.ddlAmendmentUnderGuaranteesAdvisedDropdown.click();
}

async clickAmendmentToGuaranteeAdvisedButton() {
    await this.btnAmendmentToGuaranteeAdvisedButton.click();
}

async clickAmendmentResponseToGuaranteeAdvisedButton() {
    await this.btnAmendmentResponseToGuaranteeAdvisedButton.click();
}

// Process Claim - Advised

async clickProcessClaimAdvisedDropdown() {
    await this.ddlProcessClaimAdvisedDropdown.click();
}

// Standby LC Claim Processing - Advised

async clickStandbyLcClaimProcessingAdvisedDropdown() {
    await this.ddlStandbyLcClaimProcessingAdvisedDropdown.click();
}

async clickAdviseResponseToPresentationUnderStandbyLcButton() {
    await this.btnAdviseResponseToPresentationUnderStandbyLcButton.click();
}

async clickRegisterClaimUnderStandbyLcAdvisedButton() {
    await this.btnRegisterClaimUnderStandbyLcAdvisedButton.click();
}

async clickPayRejectClaimUnderStandbyLcAdvisedButton() {
    await this.btnPayRejectClaimUnderStandbyLcAdvisedButton.click();
}

// Counter/Counter-counter Undertakings

async clickCounterCounterCounterUndertakingsDropdown() {
    await this.ddlCounterCounterCounterUndertakingsDropdown.click();
}

// Issuance of Counter/Counter-counter Undertakings

async clickIssuanceOfCounterCounterCounterUndertakingsDropdown() {
    await this.ddlIssuanceOfCounterCounterCounterUndertakingsDropdown.click();
}

async clickIssueOfCounterCounterCounterUndertakingsButton() {
    await this.btnIssueOfCounterCounterCounterUndertakingsButton.click();
}

async clickIssueOfStandbyLcUndertakingButton() {
    await this.btnIssueOfStandbyLcUndertakingButton.click();
}

// Counter/Counter-counter Undertakings Received

async clickCounterCounterCounterUndertakingsReceivedDropdown() {
    await this.ddlCounterCounterCounterUndertakingsReceivedDropdown.click();
}

async clickCounterCounterCounterUndertakingButton() {
    await this.btnCounterCounterCounterUndertakingButton.click();
}

async clickCounterCounterCounterStandbyLcButton() {
    await this.btnCounterCounterCounterStandbyLcButton.click();
}

// Transfer Undertaking

async clickTransferUndertakingDropdown() {
    await this.ddlTransferUndertakingDropdown.click();
}

async clickListOfTransferableReceivedUndertakingButton() {
    await this.btnListOfTransferableReceivedUndertakingButton.click();
}

async clickIssueOfTransferUndertakingButton() {
    await this.btnIssueOfTransferUndertakingButton.click();
}

// MD Reimbursement Processing

async clickMdReimbursementProcessingDropdown() {
    await this.ddlMdReimbursementProcessingDropdown.click();
}

async clickMdReimbursementProcessingButton() {
    await this.btnMdReimbursementProcessingButton.click();
}

// External Asset Register

async clickExternalAssetRegisterDropdown() {
    await this.ddlExternalAssetRegisterDropdown.click();
}

async clickArtAntiquesRegisterButton() {
    await this.btnArtAntiquesRegisterButton.click();
}

// Commission and Charges Processing

async clickCommissionAndChargesProcessingDropdown() {
    await this.ddlCommissionAndChargesProcessingDropdown.click();
}

async clickGuaranteeClaimedCommissionSettlementButton() {
    await this.btnGuaranteeClaimedCommissionSettlementButton.click();
}

async clickGuaranteeCommissionRefundButton() {
    await this.btnGuaranteeCommissionRefundButton.click();
}

async clickWriteoffOfUncollectedCommissionButton() {
    await this.btnWriteoffOfUncollectedCommissionButton.click();
}

async clickRefundOfGuaranteeChargesButton() {
    await this.btnRefundOfGuaranteeChargesButton.click();
}

// Unauthorised Guarantee Transaction

async clickUnauthorisedGuaranteeTransactionDropdown() {
    await this.ddlUnauthorisedGuaranteeTransactionDropdown.click();
}

async clickUnauthorisedGuaranteeTransactionsButton() {
    await this.btnUnauthorisedGuaranteeTransactionsButton.click();
}

// Authorise/Delete Guarantee Transaction

async clickAuthoriseDeleteGuaranteeTransactionDropdown() {
    await this.ddlAuthoriseDeleteGuaranteeTransactionDropdown.click();
}

async clickAuthoriseDeleteGuaranteeIssuedButton() {
    await this.btnAuthoriseDeleteGuaranteeIssuedButton.click();
}

async clickAuthoriseDeleteGuaranteeReceivedButton() {
    await this.btnAuthoriseDeleteGuaranteeReceivedButton.click();
}

async clickAuthoriseDeleteCommRateChangeButton() {
    await this.btnAuthoriseDeleteCommRateChangeButton.click();
}

async clickAuthorisationOfGuaranteeCommTransactionsButton() {
    await this.btnAuthorisationOfGuaranteeCommTransactionsButton.click();
}

async clickAuthorisationRefundOfChargesButton() {
    await this.btnAuthorisationRefundOfChargesButton.click();
}

async clickAuthoriseDeleteInternetRequestsButton() {
    await this.btnAuthoriseDeleteInternetRequestsButton.click();
}

// Guarantees Enquiries

async clickGuaranteesEnquiriesDropdown() {
    await this.ddlGuaranteesEnquiriesDropdown.click();
}

async clickGuaranteesIssuedOutstandingButton() {
    await this.btnGuaranteesIssuedOutstandingButton.click();
}

async clickFrontedGuaranteesOutstandingButton() {
    await this.btnFrontedGuaranteesOutstandingButton.click();
}

async clickGuaranteesReceivedOutstandingButton() {
    await this.btnGuaranteesReceivedOutstandingButton.click();
}

async clickOustandingShippingGuaranteesButton() {
    await this.btnOustandingShippingGuaranteesButton.click();
}

async clickGuaranteesProvisionOustandingButton() {
    await this.btnGuaranteesProvisionOustandingButton.click();
}

async clickGuaranteesDueForExpiryButton() {
    await this.btnGuaranteesDueForExpiryButton.click();
}

async clickGuaranteesExpiredButNotLiquidatedButton() {
    await this.btnGuaranteesExpiredButNotLiquidatedButton.click();
}

async clickClaimsReceivedUnderGuaranteeButton() {
    await this.btnClaimsReceivedUnderGuaranteeButton.click();
}

async clickClaimsPaidCancelledUnderGuaranteeButton() {
    await this.btnClaimsPaidCancelledUnderGuaranteeButton.click();
}

async clickReversedMdDealsButton() {
    await this.btnReversedMdDealsButton.click();
}

async clickGuaranteePaymentOrdersButton() {
    await this.btnGuaranteePaymentOrdersButton.click();
}

async clickTransferUndertakingIssuedOutstandingButton() {
    await this.btnTransferUndertakingIssuedOutstandingButton.click();
}

async clickListOfUndertakingsToAddConfirmationButton() {
    await this.btnListOfUndertakingsToAddConfirmationButton.click();
}

async clickGuaranteesWithAutoExtnDetailsButton() {
    await this.btnGuaranteesWithAutoExtnDetailsButton.click();
}

// Guarantees TBML Enquiries

async clickGuaranteesTbmlEnquiriesDropdown() {
    await this.ddlGuaranteesTbmlEnquiriesDropdown.click();
}

async clickGuaranteesTbmlTransactionsButton() {
    await this.btnGuaranteesTbmlTransactionsButton.click();
}

// Guarantees Accounting Entries

async clickGuaranteesAccountingEntriesDropdown() {
    await this.ddlGuaranteesAccountingEntriesDropdown.click();
}

async clickGuaranteesAccountingEntriesViewUnauthorisedEntriesButton() {
    await this.btnGuaranteesAccountingEntriesViewUnauthorisedEntriesButton.click();
}

async clickViewAuthorisedEntriesButton() {
    await this.btnViewAuthorisedEntriesButton.click();
}

async clickGuaranteesAccountingEntriesViewAccountEntriesButton() {
    await this.btnGuaranteesAccountingEntriesViewAccountEntriesButton.click();
}

async clickGuaranteesAccountingEntriesSeePlCategoriesEntriesButton() {
    await this.btnGuaranteesAccountingEntriesSeePlCategoriesEntriesButton.click();
}

// Inward Trade Finance Swift Messages

async clickInwardTradeFinanceSwiftMessagesDropdown() {
    await this.ddlInwardTradeFinanceSwiftMessagesDropdown.click();
}

async clickInwardTradeSwiftMessagesButton() {
    await this.btnInwardTradeSwiftMessagesButton.click();
}

async clickProcessingOfRepairedMessagesButton() {
    await this.btnProcessingOfRepairedMessagesButton.click();
}

// Miscellaneous Messages

async clickMiscellaneousMessagesDropdown() {
    await this.ddlMiscellaneousMessagesDropdown.click();
}

// Outward Miscellaneous Messages

async clickOutwardMiscellaneousMessagesDropdown() {
    await this.ddlOutwardMiscellaneousMessagesDropdown.click();
}

async clickRequestStopPaymentOfChequeMt111Button() {
    await this.btnRequestStopPaymentOfChequeMt111Button.click();
}

async clickAuthoriseDeleteMt111Button() {
    await this.btnAuthoriseDeleteMt111Button.click();
}

async clickSendFreeFormatMessageButton() {
    await this.btnSendFreeFormatMessageButton.click();
}

async clickSendCancellationMessageButton() {
    await this.btnSendCancellationMessageButton.click();
}

async clickSendQueryButton() {
    await this.btnSendQueryButton.click();
}

async clickSendAnswerToQueryButton() {
    await this.btnSendAnswerToQueryButton.click();
}

async clickUnauthorisedMiscellaneousMessageButton() {
    await this.btnUnauthorisedMiscellaneousMessageButton.click();
}

async clickAuthoriseDeleteFreeFormatMessageButton() {
    await this.btnAuthoriseDeleteFreeFormatMessageButton.click();
}

async clickAuthoriseDeleteQueryAnswerCancellationButton() {
    await this.btnAuthoriseDeleteQueryAnswerCancellationButton.click();
}

async clickFindOutwardMessageButton() {
    await this.btnFindOutwardMessageButton.click();
}

async clickSentFreeMessagesButton() {
    await this.btnSentFreeMessagesButton.click();
}

async clickViewSentQueriesAnswersButton() {
    await this.btnViewSentQueriesAnswersButton.click();
}

// Inward Miscellaneous Messages

async clickInwardMiscellaneousMessagesDropdown() {
    await this.ddlInwardMiscellaneousMessagesDropdown.click();
}

async clickCancellationRequestsMtn92Button() {
    await this.btnCancellationRequestsMtn92Button.click();
}

async clickQueriesReceivedMtn95Button() {
    await this.btnQueriesReceivedMtn95Button.click();
}

async clickAuthoriseDeleteQueryCancellationButton() {
    await this.btnAuthoriseDeleteQueryCancellationButton.click();
}

async clickAnswersReceivedMtn96Button() {
    await this.btnAnswersReceivedMtn96Button.click();
}

async clickImwFreeFormatMessagesMtn99Button() {
    await this.btnImwFreeFormatMessagesMtn99Button.click();
}

// MT759 Ancillary Messages

async clickMt759AncillaryMessagesDropdown() {
    await this.ddlMt759AncillaryMessagesDropdown.click();
}

async clickOutwardAncillaryMessagesButton() {
    await this.btnOutwardAncillaryMessagesButton.click();
}

async clickInwardAncillaryMessagesButton() {
    await this.btnInwardAncillaryMessagesButton.click();
}

async clickAuthoriseAncillaryMessageForLcsButton() {
    await this.btnAuthoriseAncillaryMessageForLcsButton.click();
}

async clickAuthoriseAncillaryMessageForGuaranteesButton() {
    await this.btnAuthoriseAncillaryMessageForGuaranteesButton.click();
}

// Corporate Lending

async clickCorporateLendingDropdown() {
    await this.ddlCorporateLendingDropdown.click();
}

async clickCorporateLendingProductCatalogButton() {
    await this.btnCorporateLendingProductCatalogButton.click();
}

async clickFindDealButton() {
    await this.btnFindDealButton.click();
}

// Deal Transactions

async clickDealTransactionsDropdown() {
    await this.ddlDealTransactionsDropdown.click();
}

async clickDealTransactionsArrangementActivitiesPoDropdown() {
    await this.ddlDealTransactionsArrangementActivitiesPoDropdown.click();
}

async clickDealTransactionsAaPayOffButton() {
    await this.btnDealTransactionsAaPayOffButton.click();
}

async clickDealTransactionsAaBillsRepaymentButton() {
    await this.btnDealTransactionsAaBillsRepaymentButton.click();
}

async clickDealTransactionsAuthoriseDeleteArrangementsPoButton() {
    await this.btnDealTransactionsAuthoriseDeleteArrangementsPoButton.click();
}

async clickFindFacilityButton() {
    await this.btnFindFacilityButton.click();
}

// Facility Transactions

async clickFacilityTransactionsDropdown() {
    await this.ddlFacilityTransactionsDropdown.click();
}

async clickFacilityTransactionsArrangementActivitiesPoDropdown() {
    await this.ddlFacilityTransactionsArrangementActivitiesPoDropdown.click();
}

async clickFacilityTransactionsAaRepaymentButton() {
    await this.btnFacilityTransactionsAaRepaymentButton.click();
}

async clickFacilityTransactionsAaPayOffButton() {
    await this.btnFacilityTransactionsAaPayOffButton.click();
}

async clickFacilityTransactionsAaPrincipalDecreaseButton() {
    await this.btnFacilityTransactionsAaPrincipalDecreaseButton.click();
}

async clickFacilityTransactionsAaBillsRepaymentButton() {
    await this.btnFacilityTransactionsAaBillsRepaymentButton.click();
}

async clickFacilityTransactionsAuthoriseDeleteArrangementsPoButton() {
    await this.btnFacilityTransactionsAuthoriseDeleteArrangementsPoButton.click();
}

async clickFindDrawingsButton() {
    await this.btnFindDrawingsButton.click();
}

// Lending Transactions

async clickLendingTransactionsDropdown() {
    await this.ddlLendingTransactionsDropdown.click();
}

async clickLendingTransactionsArrangementActivitiesPoDropdown() {
    await this.ddlLendingTransactionsArrangementActivitiesPoDropdown.click();
}

async clickAaDisbursementDomesticButton() {
    await this.btnAaDisbursementDomesticButton.click();
}

async clickAaDisbursementInternationalButton() {
    await this.btnAaDisbursementInternationalButton.click();
}

async clickLendingTransactionsAaRepaymentButton() {
    await this.btnLendingTransactionsAaRepaymentButton.click();
}

async clickAaAdvanceRepaymentButton() {
    await this.btnAaAdvanceRepaymentButton.click();
}

async clickLendingTransactionsAaPayOffButton() {
    await this.btnLendingTransactionsAaPayOffButton.click();
}

async clickLendingTransactionsAaPrincipalDecreaseButton() {
    await this.btnLendingTransactionsAaPrincipalDecreaseButton.click();
}

async clickAaCreditArrangementButton() {
    await this.btnAaCreditArrangementButton.click();
}

async clickLendingTransactionsAuthoriseDeleteArrangementsPoButton() {
    await this.btnLendingTransactionsAuthoriseDeleteArrangementsPoButton.click();
}

// Arrangement Enquiries

async clickArrangementEnquiriesDropdown() {
    await this.ddlArrangementEnquiriesDropdown.click();
}

async clickPendingDrawdownRolloverRequestButton() {
    await this.btnPendingDrawdownRolloverRequestButton.click();
}

async clickLoansGettingRolloverIn7DaysButton() {
    await this.btnLoansGettingRolloverIn7DaysButton.click();
}

async clickLoansExpiringInNext7DaysButton() {
    await this.btnLoansExpiringInNext7DaysButton.click();
}

async clickMaturedClosedDealsButton() {
    await this.btnMaturedClosedDealsButton.click();
}

async clickMaturedClosedFacilitiesButton() {
    await this.btnMaturedClosedFacilitiesButton.click();
}

async clickMaturedClosedDrawingsButton() {
    await this.btnMaturedClosedDrawingsButton.click();
}

async clickFacilityCreditRiskStatusButton() {
    await this.btnFacilityCreditRiskStatusButton.click();
}

// Evidence

async clickEvidenceDropdown() {
    await this.ddlEvidenceDropdown.click();
}

async clickNewEvidenceButton() {
    await this.btnNewEvidenceButton.click();
}

// Evidence Enquiries

async clickEvidenceEnquiriesDropdown() {
    await this.ddlEvidenceEnquiriesDropdown.click();
}

async clickEvidencePendingApprovalButton() {
    await this.btnEvidencePendingApprovalButton.click();
}

async clickUpcomingEvidenceDuesButton() {
    await this.btnUpcomingEvidenceDuesButton.click();
}

async clickEvidencesDueButton() {
    await this.btnEvidencesDueButton.click();
}

async clickEvidencesPastDueButton() {
    await this.btnEvidencesPastDueButton.click();
}

async clickNonCompliantEvidencesButton() {
    await this.btnNonCompliantEvidencesButton.click();
}

// Secondary Loan Trading

async clickSecondaryLoanTradingDropdown() {
    await this.ddlSecondaryLoanTradingDropdown.click();
}

async clickCaptureLoanTradeButton() {
    await this.btnCaptureLoanTradeButton.click();
}

async clickAuthoriseEditDeleteLoanTradeButton() {
    await this.btnAuthoriseEditDeleteLoanTradeButton.click();
}

async clickLoanTradeReportButton() {
    await this.btnLoanTradeReportButton.click();
}

async clickPendingConfirmationTradesButton() {
    await this.btnPendingConfirmationTradesButton.click();
}

async clickConfirmedTradesButton() {
    await this.btnConfirmedTradesButton.click();
}

async clickPendingConsentButton() {
    await this.btnPendingConsentButton.click();
}

async clickPendingSettlementTradesButton() {
    await this.btnPendingSettlementTradesButton.click();
}

async clickSettledTradesButton() {
    await this.btnSettledTradesButton.click();
}

async clickLoanTradesBookedTodayButton() {
    await this.btnLoanTradesBookedTodayButton.click();
}

async clickLoanTradeChargesButton() {
    await this.btnLoanTradeChargesButton.click();
}

async clickLoanTradeBalancesButton() {
    await this.btnLoanTradeBalancesButton.click();
}

async clickSettledTradeInLast10DaysButton() {
    await this.btnSettledTradeInLast10DaysButton.click();
}

// Syndicated/Corporate Lending

async clickSyndicatedCorporateLendingDropdown() {
    await this.ddlSyndicatedCorporateLendingDropdown.click();
}

// Syndicated Loans

async clickSyndicatedLoansDropdown() {
    await this.ddlSyndicatedLoansDropdown.click();
}

async clickFacilityButton() {
    await this.btnFacilityButton.click();
}

// Cash Management

async clickCashManagementDropdown() {
    await this.ddlCashManagementDropdown.click();
}

// Balance Netting

async clickBalanceNettingDropdown() {
    await this.ddlBalanceNettingDropdown.click();
}

async clickCashManagementProductCatalogButton() {
    await this.btnCashManagementProductCatalogButton.click();
}

async clickFindCustomerButton() {
    await this.btnFindCustomerButton.click();
}

async clickFindPoolButton() {
    await this.btnFindPoolButton.click();
}

async clickFindAccountButton() {
    await this.btnFindAccountButton.click();
}

async clickAccountTransactionsButton() {
    await this.btnAccountTransactionsButton.click();
}

// Balance Netting Enquiries

async clickBalanceNettingEnquiriesDropdown() {
    await this.ddlBalanceNettingEnquiriesDropdown.click();
}

async clickSweepScheduledAfterCutOffTimeButton() {
    await this.btnSweepScheduledAfterCutOffTimeButton.click();
}

async clickViewAmendCashPoolGroupsButton() {
    await this.btnViewAmendCashPoolGroupsButton.click();
}

// Notional Pooling

async clickNotionalPoolingDropdown() {
    await this.ddlNotionalPoolingDropdown.click();
}

async clickCreateGroupHierarchyButton() {
    await this.btnCreateGroupHierarchyButton.click();
}

async clickCreateNotionalPoolMainAccountButton() {
    await this.btnCreateNotionalPoolMainAccountButton.click();
}

async clickCreateNotionalPoolSubAccountButton() {
    await this.btnCreateNotionalPoolSubAccountButton.click();
}

async clickRemoveSubAccountLinkButton() {
    await this.btnRemoveSubAccountLinkButton.click();
}

async clickAuthoriseDeleteMainAccountButton() {
    await this.btnAuthoriseDeleteMainAccountButton.click();
}

async clickAuthoriseDeleteSubAccountButton() {
    await this.btnAuthoriseDeleteSubAccountButton.click();
}

async clickAuthoriseDeleteRemoveSubAccountLinkButton() {
    await this.btnAuthoriseDeleteRemoveSubAccountLinkButton.click();
}

// Notional Pooling Enquiry

async clickNotionalPoolingEnquiryDropdown() {
    await this.ddlNotionalPoolingEnquiryDropdown.click();
}

async clickNotionalPoolAccountsHierarchyButton() {
    await this.btnNotionalPoolAccountsHierarchyButton.click();
}

async clickViewBeneficiaryInterestButton() {
    await this.btnViewBeneficiaryInterestButton.click();
}

// Transactional Pooling

async clickTransactionalPoolingDropdown() {
    await this.ddlTransactionalPoolingDropdown.click();
}

async clickCreateSweepConditionButton() {
    await this.btnCreateSweepConditionButton.click();
}

// Cash Pool Group Functions

async clickCashPoolGroupFunctionsDropdown() {
    await this.ddlCashPoolGroupFunctionsDropdown.click();
}

async clickCreateSimpleGroupButton() {
    await this.btnCreateSimpleGroupButton.click();
}

async clickCreateSharedBalancesGroupButton() {
    await this.btnCreateSharedBalancesGroupButton.click();
}

async clickCreateFinancingCashPoolButton() {
    await this.btnCreateFinancingCashPoolButton.click();
}

async clickCreateSubGroupAndLinkToMainGroupButton() {
    await this.btnCreateSubGroupAndLinkToMainGroupButton.click();
}

async clickCreateSharedBalancesSubGroupButton() {
    await this.btnCreateSharedBalancesSubGroupButton.click();
}

async clickAuthorizeDeleteGroupButton() {
    await this.btnAuthorizeDeleteGroupButton.click();
}

async clickAuthorizeDeleteSubGroupButton() {
    await this.btnAuthorizeDeleteSubGroupButton.click();
}

// Cash Pool Sweep Functions

async clickCashPoolSweepFunctionsDropdown() {
    await this.ddlCashPoolSweepFunctionsDropdown.click();
}

async clickCreateCashPoolButton() {
    await this.btnCreateCashPoolButton.click();
}

async clickAmendCashPoolButton() {
    await this.btnAmendCashPoolButton.click();
}

async clickAuthorizeDeleteCashPoolButton() {
    await this.btnAuthorizeDeleteCashPoolButton.click();
}

// Sweep Processes

async clickSweepProcessesDropdown() {
    await this.ddlSweepProcessesDropdown.click();
}

async clickIntraDaySweepsButton() {
    await this.btnIntraDaySweepsButton.click();
}

async clickReverseLastRunSweepsButton() {
    await this.btnReverseLastRunSweepsButton.click();
}

async clickAuthoriseDeleteSweepsButton() {
    await this.btnAuthoriseDeleteSweepsButton.click();
}

async clickCreateCashPoolProcessButton() {
    await this.btnCreateCashPoolProcessButton.click();
}

// Cash Management Enquiries

async clickCashManagementEnquiriesDropdown() {
    await this.ddlCashManagementEnquiriesDropdown.click();
}

async clickSweepHistoryButton() {
    await this.btnSweepHistoryButton.click();
}

async clickSharedAccountsListButton() {
    await this.btnSharedAccountsListButton.click();
}

async clickCashPoolGroupListButton() {
    await this.btnCashPoolGroupListButton.click();
}

async clickCashPoolLinksListButton() {
    await this.btnCashPoolLinksListButton.click();
}

async clickGroupPositionButton() {
    await this.btnGroupPositionButton.click();
}

async clickSweepMovementsButton() {
    await this.btnSweepMovementsButton.click();
}

async clickProjectedSweepMovementsButton() {
    await this.btnProjectedSweepMovementsButton.click();
}

async clickSuspendedSweepsButton() {
    await this.btnSuspendedSweepsButton.click();
}

async clickInterestStatementForMasterAccountButton() {
    await this.btnInterestStatementForMasterAccountButton.click();
}

async clickInterestStatementForSubAccountButton() {
    await this.btnInterestStatementForSubAccountButton.click();
}

// Factoring and Forfaiting

async clickFactoringAndForfaitingDropdown() {
    await this.ddlFactoringAndForfaitingDropdown.click();
}

// Automatic Upload & Batching

async clickAutomaticUploadBatchingDropdown() {
    await this.ddlAutomaticUploadBatchingDropdown.click();
}

async clickUploadReceivablesButton() {
    await this.btnUploadReceivablesButton.click();
}

async clickAmendDeleteUploadErrorsButton() {
    await this.btnAmendDeleteUploadErrorsButton.click();
}

async clickAuthoriseDeleteAllUploadedRegistersButton() {
    await this.btnAuthoriseDeleteAllUploadedRegistersButton.click();
}

async clickDeleteUploadErrorRegisterButton() {
    await this.btnDeleteUploadErrorRegisterButton.click();
}

async clickRectifyProductUpdateErrorsButton() {
    await this.btnRectifyProductUpdateErrorsButton.click();
}

async clickAutoBatchingChangeProductButton() {
    await this.btnAutoBatchingChangeProductButton.click();
}

// Manual Upload & Batching

async clickManualUploadBatchingDropdown() {
    await this.ddlManualUploadBatchingDropdown.click();
}

// Receivable Register

async clickReceivableRegisterDropdown() {
    await this.ddlReceivableRegisterDropdown.click();
}

async clickRegisterReceivablesButton() {
    await this.btnRegisterReceivablesButton.click();
}

async clickChangeProductTypeButton() {
    await this.btnChangeProductTypeButton.click();
}

async clickAmendReverseReceivablesButton() {
    await this.btnAmendReverseReceivablesButton.click();
}

async clickAuthoriseDeleteReceivablesButton() {
    await this.btnAuthoriseDeleteReceivablesButton.click();
}

// Batch Receivables

async clickBatchReceivablesDropdown() {
    await this.ddlBatchReceivablesDropdown.click();
}

async clickInputReceivableBatchButton() {
    await this.btnInputReceivableBatchButton.click();
}

async clickAmendReverseReceivableBatchButton() {
    await this.btnAmendReverseReceivableBatchButton.click();
}

async clickAuthoriseDeleteReceivableBatchButton() {
    await this.btnAuthoriseDeleteReceivableBatchButton.click();
}

async clickRebatchButton() {
    await this.btnRebatchButton.click();
}

// Factoring and Forfaiting Enquiries

async clickFactoringAndForfaitingEnquiriesDropdown() {
    await this.ddlFactoringAndForfaitingEnquiriesDropdown.click();
}

async clickListOfLodgedReceivablesButton() {
    await this.btnListOfLodgedReceivablesButton.click();
}

async clickReceivablesLodgedForCollnDiscountingButton() {
    await this.btnReceivablesLodgedForCollnDiscountingButton.click();
}

async clickListOfBatchedReceivablesButton() {
    await this.btnListOfBatchedReceivablesButton.click();
}

async clickListOfDiscountedReceivablesButton() {
    await this.btnListOfDiscountedReceivablesButton.click();
}

async clickListOfReceivablesSentForCollectionButton() {
    await this.btnListOfReceivablesSentForCollectionButton.click();
}

async clickListOfCollateralisedReceivablesButton() {
    await this.btnListOfCollateralisedReceivablesButton.click();
}

async clickListOfReceivablesByTypeButton() {
    await this.btnListOfReceivablesByTypeButton.click();
}

async clickListOfReceivablesMaturingNext7DaysButton() {
    await this.btnListOfReceivablesMaturingNext7DaysButton.click();
}

async clickListOfReceivablesWithSuspendedIntButton() {
    await this.btnListOfReceivablesWithSuspendedIntButton.click();
}

async clickReceivablesStatusButton() {
    await this.btnReceivablesStatusButton.click();
}

async clickAutoBatchDetailsButton() {
    await this.btnAutoBatchDetailsButton.click();
}

async clickAutoUploadDetailsButton() {
    await this.btnAutoUploadDetailsButton.click();
}

async clickAutoRegisterDetailsButton() {
    await this.btnAutoRegisterDetailsButton.click();
}

async clickInvoiceUploadSummaryButton() {
    await this.btnInvoiceUploadSummaryButton.click();
}

async clickUpdateProductSummaryButton() {
    await this.btnUpdateProductSummaryButton.click();
}

async clickPendingDisbursementsButton() {
    await this.btnPendingDisbursementsButton.click();
}

async clickOverdueRegistersButton() {
    await this.btnOverdueRegistersButton.click();
}

async clickBuyerSellerLimitDetailsButton() {
    await this.btnBuyerSellerLimitDetailsButton.click();
}

// Receivable Transaction

async clickReceivableTransactionDropdown() {
    await this.ddlReceivableTransactionDropdown.click();
}

async clickInputDisbursementRegisterButton() {
    await this.btnInputDisbursementRegisterButton.click();
}

async clickInputDisbursementBatchButton() {
    await this.btnInputDisbursementBatchButton.click();
}

async clickInputSettlementButton() {
    await this.btnInputSettlementButton.click();
}

async clickInputReceivableContractButton() {
    await this.btnInputReceivableContractButton.click();
}

async clickUnsuccessfulDisbursementRegisterButton() {
    await this.btnUnsuccessfulDisbursementRegisterButton.click();
}

async clickUnsuccessfulDisbursementBatchButton() {
    await this.btnUnsuccessfulDisbursementBatchButton.click();
}

async clickAmendReverseReceivableContractButton() {
    await this.btnAmendReverseReceivableContractButton.click();
}

async clickAuthoriseDeleteDisbursementButton() {
    await this.btnAuthoriseDeleteDisbursementButton.click();
}

async clickAuthoriseDeleteSettlementButton() {
    await this.btnAuthoriseDeleteSettlementButton.click();
}

async clickAuthoriseDeleteReceivableContractButton() {
    await this.btnAuthoriseDeleteReceivableContractButton.click();
}

// Accounting Entries

async clickFactoringAndForfaitingAccountingEntriesDropdown() {
    await this.ddlFactoringAndForfaitingAccountingEntriesDropdown.click();
}

async clickFactoringAndForfaitingAccountingEntriesViewUnauthorisedEntriesButton() {
    await this.btnFactoringAndForfaitingAccountingEntriesViewUnauthorisedEntriesButton.click();
}

async clickFactoringAndForfaitingAccountingEntriesViewTransactionEntriesButton() {
    await this.btnFactoringAndForfaitingAccountingEntriesViewTransactionEntriesButton.click();
}

async clickFactoringAndForfaitingAccountingEntriesViewAccountEntriesButton() {
    await this.btnFactoringAndForfaitingAccountingEntriesViewAccountEntriesButton.click();
}

async clickSeePlCategoryEntriesButton() {
    await this.btnSeePlCategoryEntriesButton.click();
}

async clickSeeForwardEntriesButton() {
    await this.btnSeeForwardEntriesButton.click();
}

// Advices/Messages

async clickAdvicesMessagesDropdown() {
    await this.ddlAdvicesMessagesDropdown.click();
}

async clickViewReceivableAdvicesMessagesButton() {
    await this.btnViewReceivableAdvicesMessagesButton.click();
}

// Adhoc Charge Request

async clickAdhocChargeRequestDropdown() {
    await this.ddlAdhocChargeRequestDropdown.click();
}

async clickWithDeliveryButton() {
    await this.btnWithDeliveryButton.click();
}

async clickWithoutDeliveryButton() {
    await this.btnWithoutDeliveryButton.click();
}

async clickAuthoriseDeleteChargeRequestButton() {
    await this.btnAuthoriseDeleteChargeRequestButton.click();
}

async clickViewDeliveryMessagesButton() {
    await this.btnViewDeliveryMessagesButton.click();
}

async clickChargesUnpaidButton() {
    await this.btnChargesUnpaidButton.click();
}

};
