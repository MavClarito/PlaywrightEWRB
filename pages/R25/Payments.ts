import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_Payment extends BasePage {

readonly page: Page;

// Payments
readonly ddlPaymentsDropdown: Locator;

// Standing Order
readonly ddlStandingOrderDropdown: Locator;
readonly ddlInputStandingOrderDropdown: Locator;
readonly btnInputFixedBalanceSTOButton: Locator;

// Standing Order MX
readonly ddlStandingOrderMXDropdown: Locator;
readonly btnInputStandingOrdersMXButton: Locator;
readonly btnAmendViewStandingOrdersMXButton: Locator;
readonly btnAmendAuthoriseDeleteUnauthorisedStandingOrdersMXButton: Locator;
readonly btnStandingOrdersListButton: Locator;
readonly btnAmendUnauthorisedStandingOrdersButton: Locator;
readonly btnAuthoriseDeleteUnauthorisedStandingOrdersButton: Locator;
readonly btnListOfInactiveStandingOrdersButton: Locator;
readonly btnStandingOrdersExecutionDetailsButton: Locator;
readonly btnViewAmendFailedStandingOrdersButton: Locator;

// Payment Hub
readonly ddlPaymentHubDropdown: Locator;

// Initiate Payment Transaction
readonly ddlInitiatePaymentTransactionDropdown: Locator;

// Initiate Customer Transfer
readonly ddlInitiateCustomerTransferDropdown: Locator;
readonly btnCustomerIncomingTransferButton: Locator;
readonly btnCustomerOutgoingTransferButton: Locator;
readonly btnCustomerBookTransferButton: Locator;
readonly btnCustomerRedirectTransferButton: Locator;

// Initiate Bank Transfer
readonly ddlInitiateBankTransferDropdown: Locator;
readonly btnBankIncomingTransferButton: Locator;
readonly btnBankOutgoingTransferButton: Locator;
readonly btnBankBookTransferButton: Locator;
readonly btnBankRedirectTransferButton: Locator;
readonly btnOwnAccountTransferMT200Button: Locator;
readonly btnInitiateSEPACreditTransferButton: Locator;

// Initiate Direct Debit
readonly ddlInitiateDirectDebitDropdown: Locator;
readonly btnDirectDebitInitiationBookButton: Locator;
readonly btnDirectDebitInitiationOutgoingButton: Locator;
readonly btnDirectDebitInitiationOutgoingISOButton: Locator;
readonly btnInterbankDirectDebitInitiationOutgoingButton: Locator;

// Initiate ISO Customer Transfer
readonly ddlInitiateISOCustomerTransferDropdown: Locator;
readonly btnIncomingISOCustomerTransferButton: Locator;
readonly btnOutgoingISOCustomerTransferButton: Locator;
readonly btnInitiateIsoCustomerTransferReturnButton: Locator;

// Initiate ISO Bank Transfer
readonly ddlInitiateISOBankTransferDropdown: Locator;
readonly btnIncomingISOBankTransferButton: Locator;
readonly btnOutgoingISOBankTransferButton: Locator;
readonly btnOutgoingISOOwnAccountTransferButton: Locator;
readonly btnInitiateIsoBankTransferReturnButton: Locator;

// Payment Inquiries
readonly ddlPaymentInquiriesDropdown: Locator;

// Pending Payments
readonly ddlPendingPaymentsDropdown: Locator;
readonly btnPendingRepairPaymentsButton: Locator;
readonly btnPendingReprocessPaymentsButton: Locator;

// Pending Payment Orders
readonly ddlPendingPaymentOrdersDropdown: Locator;
readonly btnPendingOrderEntryPaymentsButton: Locator;
readonly btnPendingOrderEntryDirectDebitsButton: Locator;
readonly btnPendingOrderEntryDirectDebitsInterbankButton: Locator;
readonly btnAmendUnauthorisedPaymentsButton: Locator;
readonly btnPendingDDMandateVerificationButton: Locator;
readonly btnPendingChequeDebitPaymentsButton: Locator;
readonly btnPendingAutoRepairPaymentsButton: Locator;
readonly btnAllTransferPendingRepairPaymentsButton: Locator;
readonly btnScheduledForReleasePaymentsButton: Locator;
readonly btnPendingUnmatchedRPaymentsButton: Locator;

// Rejected Order Entry Payments
readonly ddlRejectedOrderEntryPaymentsDropdown: Locator;
readonly btnRejectedOrderEntryPaymentsButton: Locator;
readonly btnRejectedOrderEntryDirectDebitsButton: Locator;

// Pending And Processed Payments
readonly ddlPendingAndProcessedPaymentsDropdown: Locator;
readonly btnPaymentsEnquiryPartyWiseButton: Locator;
readonly btnPaymentsEnquiryTransactionWiseButton: Locator;
readonly btnPaymentsEnquiryArchiveTxnsButton: Locator;
readonly btnPendingPaymentsForCoverButton: Locator;
readonly btnCoverPaymentsUnmatchedButton: Locator;
readonly btnCurrentStatusInformationOfPaymentButton: Locator;
readonly btnAuditTrailForRepairPaymentsButton: Locator;
readonly btnViewAccountingEntriesButton: Locator;
readonly btnManualFundsAuthorisationQueueButton: Locator;
readonly btnPaymentInquiryLiveHistoricalPaymentInformationButton: Locator;
readonly btnNostroQuotaUtilisationButton: Locator;

// Received And Sent File Details
readonly ddlReceivedAndSentFileDetailsDropdown: Locator;

// Received Files Details
readonly ddlReceivedFilesDetailsDropdown: Locator;
readonly btnReceivedMessageFileDetailsListButton: Locator;
readonly btnReceivedMessageFileDetailsFromIPButton: Locator;

// Received Message File Repair
readonly ddlReceivedMessageFileRepairDropdown: Locator;
readonly btnReceivedMessageFileRepairQueueListButton: Locator;
readonly btnRcvdMsgFileDetsRepairUnauthListAmendButton: Locator;

// Received Bulk Repair Queue List
readonly ddlReceivedBulkRepairQueueListDropdown: Locator;
readonly btnReceivedBulkRepairQueueListButton: Locator;
readonly btnReceivedBulkRepairUnauthListAmendButton: Locator;

// Received Claims
readonly ddlReceivedClaimsDropdown: Locator;
readonly btnReceivedClaimsListButton: Locator;
readonly btnIsoReceivedClaimsListButton: Locator;

// Received Charge Payment Notification
readonly ddlReceivedChargePaymentNotificationDropdown: Locator;
readonly btnInwardChargePaymentNotificationButton: Locator;

// Sent File Details
readonly ddlSentFileDetailsDropdown: Locator;
readonly btnSentFileDetailsButton: Locator;
readonly btnSentFileDetailsIPButton: Locator;
readonly btnSentFileDetailsExceptionButton: Locator;
readonly btnSentClaimsButton: Locator;

// Monitoring File Details
readonly ddlMonitoringFileDetailsDropdown: Locator;
readonly btnMonitoringOfReceivedFileDetailsButton: Locator;
readonly btnMonitoringOfSentFileDetailsButton: Locator;

// Confirmations
readonly ddlConfirmationsDropdown: Locator;
readonly btnPhoneConfirmationsButton: Locator;

// Reports
readonly ddlReportsDropdown: Locator;

// Local Clearing Reports
readonly ddlLocalClearingReportsDropdown: Locator;
readonly btnSettlementTransactionStatusReportButton: Locator;
readonly btnEquensClearingDRRReportButton: Locator;
readonly btnEbainstDRRReportButton: Locator;
readonly btnEbainstRSFReportButton: Locator;

// Current Payments Reports
readonly ddlCurrentPaymentsReportsDropdown: Locator;
readonly btnPaymentsInRepairAndWarehouseQueueButton: Locator;
readonly btnPaymentsPerMsgTypeButton: Locator;

// BIC Upload Reports
readonly ddlBicUploadReportsDropdown: Locator;
readonly btnBicUploadReportsButton: Locator;

// US ACH Payments
readonly ddlUsACHPaymentsDropdown: Locator;
readonly btnPaymentsAwaitingTraceNumberButton: Locator;
readonly btnReturnCompletedCTPaymentsButton: Locator;

// Batch Payments
readonly ddlBatchPaymentsDropdown: Locator;
readonly btnInvalidChildPaymentsAutoReversedButton: Locator;
readonly btnForceReleasedBatchButton: Locator;

// Inward Cheque Collection
readonly ddlInwardChequeCollectionDropdown: Locator;
readonly btnInwardChequesStatusButton: Locator;
readonly btnManualChequeDebitPaymentsButton: Locator;
readonly btnInwardChequesReturnedButton: Locator;

// Outward Cheque Collection
readonly ddlOutwardChequeCollectionDropdown: Locator;
readonly btnForeignChequesStatusCorrespondentButton: Locator;
readonly btnLocalOutstationChequesStatusButton: Locator;
readonly btnChequePaymentStatusButton: Locator;
readonly btnLocalChequesStatusStandaloneButton: Locator;

// Payment Monitoring
readonly ddlPaymentMonitoringDropdown: Locator;

// Payment Flow Monitor
readonly ddlPaymentFlowMonitorDropdown: Locator;
readonly btnPaymentFlowStatusMonitorButton: Locator;
readonly btnInProcessPaymentsButton: Locator;
readonly btnFinalStatusMonitorButton: Locator;
readonly btnInwardMonitorButton: Locator;
readonly btnCompanySpecificServicesMonitorButton: Locator;
readonly btnNonCompanySpecificServicesMonitorButton: Locator;
readonly btnLcTimeScheduledProcessStatusMonitorButton: Locator;

// Virtual Queue Monitor
readonly ddlVirtualQueueMonitorDropdown: Locator;
readonly btnQueueMonitorButton: Locator;
readonly btnRiskFilterAuthorisationQueueButton: Locator;
readonly btnClearingServicesMonitorButton: Locator;
readonly btnCutOffTimeMonitorButton: Locator;

// Payments Matched With Notice To Receive
readonly ddlPaymentsMatchedWithNoticeToReceiveDropdown: Locator;
readonly btnPaymentsMatchedWithNoticeToReceiveButton: Locator;

// Payment Exceptions
readonly ddlPaymentExceptionsDropdown: Locator;
readonly btnTreasuryRateRequestButton: Locator;

// Warehouse And Parked Payments
readonly ddlWarehouseAndParkedPaymentsDropdown: Locator;

// Warehouse Payments List
readonly ddlWarehousePaymentsListDropdown: Locator;
readonly btnWarehousePaymentsListButton: Locator;

// Parked Payments
readonly ddlParkedPaymentsDropdown: Locator;
readonly btnViewParkedPaymentsButton: Locator;

// Parked Parent Payments
readonly ddlParkedParentPaymentsDropdown: Locator;
readonly btnViewParentParkedPaymentsButton: Locator;

// Manual Funds Authorisation
readonly ddlManualFundsAuthorisationDropdown: Locator;
readonly btnCreatePreApprovalButton: Locator;
readonly btnRequestsPendingForManualApprovalListButton: Locator;
readonly btnAuthorisedManualApprovalCancelButton: Locator;
readonly btnUnauthorisedManualApprovalCancelButton: Locator;

// Pre-Authorisation Requests
readonly ddlPreAuthorisationRequestsDropdown: Locator;
readonly btnCreatePreAuthorisation2EyesButton: Locator;
readonly btnCreatePreAuthorisation4EyesButton: Locator;
readonly btnPendingPreAuthorisationRequestsButton: Locator;
readonly btnAuthorisedPreAuthorisationRequestsButton: Locator;

// SWIFT Out Exception Queue
readonly ddlSwiftOutExceptionQueueDropdown: Locator;

// Exception Queue
readonly ddlExceptionQueueDropdown: Locator;
readonly btnExceptionQueueButton: Locator;

// Pending Messages
readonly ddlPendingMessagesDropdown: Locator;
readonly btnViewPendingSwiftMessagesButton: Locator;
readonly btnViewDeletePendingSwiftMessagesButton: Locator;

// Received MT019
readonly ddlReceivedMT019Dropdown: Locator;
readonly btnReceivedMT019DetailScreenButton: Locator;

// RTGS ISO Exception Queue
readonly ddlRtgsISOExceptionQueueDropdown: Locator;
readonly btnRtgsTechnicalExceptionQueueButton: Locator;
readonly btnRtgsBusinessExceptionQueueButton: Locator;

// SWIFT ISO Exception Queue
readonly ddlSwiftISOExceptionQueueDropdown: Locator;
readonly btnSwiftISOTechnicalExceptionsButton: Locator;
readonly btnSwiftISOBusinessExceptionsButton: Locator;

// Clearing Status Report
readonly ddlClearingStatusReportDropdown: Locator;
readonly btnFileLevelExceptionButton: Locator;
readonly btnBulkLevelExceptionButton: Locator;
readonly btnTxnLevelExceptionButton: Locator;

// FX
readonly ddlFxDropdown: Locator;

// Pending FX Rate Request Payments
readonly ddlPendingFXRateRequestPaymentsDropdown: Locator;
readonly btnPendingFXRateRequestPaymentsListButton: Locator;
readonly btnParkedPaymentsAwaitFixingRateButton: Locator;

// Filtering
readonly ddlFilteringDropdown: Locator;
readonly btnManualFilterPaymentsButton: Locator;
readonly btnHitFilterButton: Locator;
readonly btnHitFilterAuthorisationButton: Locator;
readonly btnFilteringReportButton: Locator;
readonly btnRegeneratePaymentsAndMessagesButton: Locator;

// Pending Requests To External Systems
readonly ddlPendingRequestsToExternalSystemsDropdown: Locator;
readonly btnPendingReqAccountInquiryDebitButton: Locator;
readonly btnPendingReqAccountInquiryCreditButton: Locator;
readonly btnPendingReqAccountInquiryDebitChargesButton: Locator;
readonly btnPendingReqAccountInquiryCreditChargesButton: Locator;
readonly btnPendingReqReserveEntriesButton: Locator;
readonly btnPendingReqPostingEntriesButton: Locator;
readonly btnPendingReqReversePostingButton: Locator;
readonly btnPendingReqMandateValidationButton: Locator;
readonly btnPendingReqMandateReopenButton: Locator;
readonly btnPendingReqMandateUpdateButton: Locator;
readonly btnPendingReqCancelReservationButton: Locator;
readonly btnPendingReqAccountCheckFeeInquiryDebitButton: Locator;
readonly btnPendingReqAccountCheckFeeInquiryCreditButton: Locator;

// Investigations & Cancellations
readonly ddlInvestigationsAndCancellationsDropdown: Locator;

// Cancellations
readonly ddlCancellationsDropdown: Locator;

// SWIFT Cancellations
readonly ddlSwiftCancellationsDropdown: Locator;

// SWIFT Inward Cancellation Requests
readonly ddlSwiftInwardCancellationRequestsDropdown: Locator;
readonly btnAcceptCancellationRequestButton: Locator;
readonly btnRejectCancellationRequestButton: Locator;

// SWIFT Outward Cancellation Requests
readonly ddlSwiftOutwardCancellationRequestsDropdown: Locator;
readonly btnSendCancellationRequestButton: Locator;
readonly btnViewOutwardCancellationRequestsButton: Locator;
readonly btnSendGSRPCancellationRequestISOButton: Locator;
readonly btnInwardReturnOfRedirectPaymentRcvdViaCOVButton: Locator;

// Clearing Cancellations
readonly ddlClearingCancellationsDropdown: Locator;

// CT Cancellation Requests
readonly ddlCtCancellationRequestsDropdown: Locator;

// CT Create Cancellation Request
readonly ddlCtCreateCancellationRequestDropdown: Locator;
readonly btnCtBankInitiatedCancellationRequestButton: Locator;
readonly btnCtCustomerInitiatedCancellationRequestButton: Locator;
readonly btnCtBulkBankInitiatedCancellationRequestButton: Locator;
readonly btnCtAuthBulkCancellationReqInButton: Locator;
readonly btnCtAuthoriseOutwardCancellationRequestButton: Locator;
readonly btnCtAuthBulkCancellationReqOutButton: Locator;
readonly btnCtDeleteUnapprovedCancellationRequestsButton: Locator;
readonly btnCtInwardCancellationReqViewStatusButton: Locator;
readonly btnCtUnmatchedIncomingReqStatusUpdateButton: Locator;
readonly btnCtInwardCancellationReqUpdateButton: Locator;
readonly btnCtCancellationReqPendingResponseButton: Locator;
readonly btnCtCancellationReqClearingRejectsButton: Locator;
readonly btnCtCancellationReqViewStatusButton: Locator;
readonly btnCtOutgoingCancellationReqUpdateButton: Locator;
readonly btnCtCancellationRequestIPButton: Locator;
readonly btnCtCancelReqIPViewStatusButton: Locator;
readonly btnCtAuthDelCancelReqFromIPButton: Locator;

// DD Cancellation Requests
readonly ddlDdCancellationRequestsDropdown: Locator;
readonly btnInwardCancellationManualRepairButton: Locator;
readonly btnCreateBankCancellationRequestButton: Locator;
readonly btnInwardCancellationReqEnquiryButton: Locator;
readonly btnOutwardCancellationReqEnquiryButton: Locator;
readonly btnAuthoriseCancellationRequestsButton: Locator;
readonly btnDeleteUnapprovedOutwardCancellationsButton: Locator;

// CC Cancellation Requests
readonly ddlCcCancellationRequestsDropdown: Locator;

// CC Outward Cancellation Requests
readonly ddlCcOutwardCancellationRequestsDropdown: Locator;
readonly btnCcBankInitiatedCancellationRequestButton: Locator;
readonly btnCcCustomerInitiatedCancellationRequestButton: Locator;
readonly btnCcAuthoriseOutwardCancellationRequestButton: Locator;
readonly btnCcDeleteUnapprovedCancellationRequestsButton: Locator;
readonly btnCcOutwardCancellationRequestViewStatusButton: Locator;

// CC Inward Cancellation Requests
readonly ddlCcInwardCancellationRequestsDropdown: Locator;
readonly btnCcInwardCancellationReqManualActionButton: Locator;
readonly btnCcInwardCancellationReqViewStatusButton: Locator;

// Return Cancellation Requests
readonly ddlReturnCancellationRequestsDropdown: Locator;

// Return Outward Cancellation Requests
readonly ddlReturnOutwardCancellationRequestsDropdown: Locator;
readonly btnReturnBankInitiatedCancellationRequestButton: Locator;
readonly btnReturnCustomerInitiatedCancellationRequestButton: Locator;
readonly btnReturnAuthoriseOutwardCancellationRequestButton: Locator;
readonly btnReturnDeleteUnapprovedCancellationRequestsButton: Locator;
readonly btnReturnOutwardCancellationRequestViewStatusButton: Locator;

// Return Inward Cancellation Requests
readonly ddlReturnInwardCancellationRequestsDropdown: Locator;
readonly btnReturnInwardCancellationReqManualActionButton: Locator;
readonly btnReturnInwardCancellationReqViewStatusButton: Locator;

// CT DD CC Cancellation
readonly ddlCtDDCCCancellationDropdown: Locator;
readonly btnAwaitingDistributionToClearingButton: Locator;
readonly btnCancelBeforeDistributionToClearingButton: Locator;

// Cancellation Of Return
readonly ddlCancellationOfReturnDropdown: Locator;
readonly btnCancellationOfReturnBeforeDistributionButton: Locator;

// RTGS Cancellations
readonly ddlRtgsCancellationsDropdown: Locator;

// RTGS Create Cancellation Requests
readonly ddlCreateRTGSCancellationRequestsDropdown: Locator;
readonly btnRtgsCustomerInitiatedCancellationRequestButton: Locator;
readonly btnRtgsBankInitiatedCancellationRequestButton: Locator;
readonly btnRtgsAuthoriseOutwardCancellationRequestButton: Locator;
readonly btnRtgsDeleteUnapprovedCancellationRequestButton: Locator;
readonly btnRtgsInwardCancellationReqRequireManualActionButton: Locator;
readonly btnRtgsInwardCancellationRequestViewStatusButton: Locator;
readonly btnRtgsOutwardCancellationRequestPendingResponseButton: Locator;
readonly btnRtgsOutwardCancellationReqNetworkClearingRejectedButton: Locator;
readonly btnRtgsOutwardCancellationRequestViewStatusButton: Locator;
readonly btnRoiClearingRejectedViewStatusButton: Locator;
readonly btnAuthoriseInwardCancellationRequestsButton: Locator;

// RTGS DD Cancellation
readonly ddlRtgsDDCancellationsDropdown: Locator;
readonly btnInitiateRTGSDDCancellationButton: Locator;
readonly btnAuthorizeRTGSDDCancellationsButton: Locator;
readonly btnDeleteUnapprovedRTGSDDCancellationsButton: Locator;

// SWIFT ISO Cancellations
readonly ddlSwiftISOCancellationsDropdown: Locator;

// SWIFT ISO Create Cancellation Requests
readonly ddlSwiftIsoCreateCancellationRequestsDropdown: Locator;
readonly btnSwiftIsoCustomerInitiatedCancellationRequestButton: Locator;
readonly btnSwiftIsoBankInitiatedCancellationRequestButton: Locator;
readonly btnSwiftIsoApproveOutwardCancellationRequestButton: Locator;
readonly btnSwiftIsoDeleteUnapprovedOutwardCancellationRequestButton: Locator;
readonly btnSwiftIsoCreateCancellationAdviceForNoticeToReceiveButton: Locator;
readonly btnSwiftIsoAuthorizeCancellationAdviceForNoticeToReceiveButton: Locator;
readonly btnSwiftIsoInwardCancellationReqRequireManualActionButton: Locator;
readonly btnSwiftIsoAuthoriseInwardCancellationRequestsButton: Locator;
readonly btnSwiftIsoInwardCancellationReqViewStatusButton: Locator;
readonly btnSwiftIsoOutwardCancellationRequestPendingResponseButton: Locator;
readonly btnSwiftIsoOutwardCancellationReqNetworkClearingRejectedButton: Locator;
readonly btnSwiftIsoOutwardCancellationRequestViewStatusButton: Locator;
readonly btnSwiftIsoViewCustomerCancellationRequestsButton: Locator;
readonly btnSwiftIsoCustomerCancellationReqRequireManualActionButton: Locator;
readonly btnSwiftIsoAuthoriseCustomerCancellationRequestButton: Locator;

// Investigations
readonly ddlInvestigationsDropdown: Locator;

// Payment Investigations Queries Answers
readonly ddlPaymentInvestigationsQueriesAnswersDropdown: Locator;
readonly btnSendAQueryButton: Locator;
readonly btnViewSentQueriesButton: Locator;
readonly btnAnswerAQueryButton: Locator;
readonly btnViewAnswersButton: Locator;

// Investigations Free Format Messages
readonly ddlInvestigationsFreeFormatMsgsDropdown: Locator;
readonly btnSendFreeFormatMessageButton: Locator;
readonly btnViewFreeFormatMessageButton: Locator;

// Claims And Investigations SEPA CT
readonly ddlClaimsAndInvestigationsSEPACTDropdown: Locator;

// Claim Of Non Receipt
readonly ddlClaimOfNonReceiptDropdown: Locator;

// Outward Claims For Non Receipt
readonly ddlOutwardClaimsForNonReceiptDropdown: Locator;
readonly btnCreateOutwardClaimButton: Locator;
readonly btnAuthoriseDeleteOutwardClaimsButton: Locator;
readonly btnViewOutwardClaimsButton: Locator;
readonly btnClearingRejectedOutwardClaimsButton: Locator;
readonly btnUnmatchedOutwardClaimResolutionButton: Locator;
readonly btnRequestStatusUpdateForOutwardClaimsButton: Locator;

// Inward Claims For Non Receipt
readonly ddlInwardClaimsForNonReceiptDropdown: Locator;
readonly btnViewInwardClaimsButton: Locator;
readonly btnInwardClaimsRequireManualActionButton: Locator;
readonly btnAuthoriseDeleteInwardClaimsButton: Locator;
readonly btnUnmatchedInwardClaimsButton: Locator;
readonly btnUnmatchedInwardRequestForStatusUpdateButton: Locator;

// Request To Modify Payment Date
readonly ddlRequestToModifyPaymentDateDropdown: Locator;

// Outward Requests To Modify Date
readonly ddlOutwardRequestsToModifyDateDropdown: Locator;
readonly btnCreateOutwardRequestButton: Locator;
readonly btnAuthoriseDeleteOutwardRequestsButton: Locator;
readonly btnViewOutwardRequestsButton: Locator;
readonly btnClearingRejectedOutwardRequestsButton: Locator;
readonly btnInitiateStatusUpdateForOutwardRequestsButton: Locator;

// Inward Requests To Modify Date
readonly ddlInwardRequestsToModifyDateDropdown: Locator;
readonly btnViewInwardRequestsButton: Locator;
readonly btnInwardRequestsRequireManualActionButton: Locator;
readonly btnAuthoriseDeleteInwardRequestsButton: Locator;
readonly btnUnmatchedInwardRequestsButton: Locator;
readonly btnInwardRequestsUnmatchedRequestForStatusUpdateButton: Locator;

// Exceptions And Investigations
readonly ddlExceptionsAndInvestigationsDropdown: Locator;

// Outward Investigations
readonly ddlOutwardInvestigationsDropdown: Locator;
readonly btnSendInvestigationRequestButton: Locator;
readonly btnViewInvestigationRequestButton: Locator;

// Inward Investigations
readonly ddlInwardInvestigationsDropdown: Locator;
readonly btnInwardInvestigationReqRequireManualActionButton: Locator;
readonly btnViewInwardInvestigationRequestButton: Locator;

// Exceptions
readonly ddlExceptionsDropdown: Locator;
readonly btnInvestigationRequestResponseClearingRejectsButton: Locator;

// Reversal Of Payments
readonly ddlReversalOfPaymentsDropdown: Locator;
readonly btnReversalOfPaymentsButton: Locator;
readonly btnReversalOfProcessedDirectDebitsButton: Locator;

// Return Reject Payments
readonly ddlReturnRejectPaymentsDropdown: Locator;
readonly btnReturnRejectInwardDirectDebitsButton: Locator;
readonly btnReturnBookDirectDebitsButton: Locator;
readonly btnReturnInwardClearedCHQButton: Locator;
readonly btnReturnInwardClearedCHQArchiveButton: Locator;
readonly btnReturnCompletedCreditTransfersButton: Locator;
readonly btnInitiateRtnForTxnSetldWithCOVButton: Locator;
readonly btnReturnReversalInwardSWIFTMTRTNButton: Locator;
readonly btnReturnOfSWIFTCompletedCreditTXNButton: Locator;
readonly btnReturnRejectIsoBankTransferReturnButton: Locator;
readonly btnReturnRejectIsoCustomerTransferReturnButton: Locator;
readonly btnPendingRepairTxnCancelReqRcvdButton: Locator;
readonly btnUpdateUserStatusButton: Locator;
readonly btnAuthoriseUserStatusUpdateButton: Locator;
readonly btnCaseAssignmentButton: Locator;

// Payment Approvals
readonly DDLPaymentApprovals: Locator;

// Authorise Pending Payments
readonly DDLAuthorisePendingPayments: Locator;

// Auth Order Entry Repair Payments
readonly DDLAuthOrderEntryRepairPayments: Locator;
readonly BTNPendingAuthorisePayments: Locator;

// Authorise DD Mandate Verification
readonly DDLAuthoriseDDMandateVerification: Locator;
readonly BTNAuthoriseDDMandateVerification: Locator;

// Authorise Return Reject Direct Debits
readonly DDLAuthoriseReturnRejectDirectDebits: Locator;
readonly BTNAuthoriseReturnRejectDirectDebits: Locator;

// Authorise Cheque Debit Payments
readonly DDLAuthoriseChequeDebitPayments: Locator;
readonly BTNAuthorisePendingChequeDebitPayments: Locator;

// Return Inward Cleared CHQ Auth
readonly DDLReturnInwardClearedCHQAuth: Locator;
readonly BTNReturnInwardClearedCHQAuth: Locator;

// Authorise Payments Pending For Cover
readonly DDLAuthorisePaymentsPendingForCover: Locator;
readonly BTNAuthorisePendingPaymentsForCover: Locator;
readonly BTNAuthoriseCoverPaymentsMT202: Locator;

// All Transfer Pending Authorise Payments
readonly DDLAllTransferPendingAuthorisePayments: Locator;
readonly BTNAllTransferPendingAuthPymtsLevel1: Locator;
readonly BTNAllTransferPendingAuthPymtsLevel2: Locator;

// Received Files Awaiting Auth
readonly DDLReceivedFilesAwaitingAuth: Locator;
readonly BTNRcvdMsgFileRepUnauthAuth: Locator;
readonly BTNRcvdBulkRepairUnauthListAuth: Locator;
readonly BTNRcvdClaimsUnauthListAuth: Locator;

// Investigation Cancellation Auth
readonly DDLInvestigationCancellationAuth: Locator;

// SWIFT Cancellation
readonly DDLSWIFTCancellation: Locator;

// Authorise Outward Cancellation Request
readonly DDLAuthoriseOutwardCancellationRequest: Locator;
readonly BTNAuthoriseCancellationRequest: Locator;

// Authorise Inward Cancellation Request
readonly DDLAuthoriseInwardCancellationRequest: Locator;
readonly BTNAuthoriseAnswers: Locator;
readonly BTNAuthoriseFreeFormatMessages: Locator;
readonly BTNAuthorizeGSRPResponseCamt056: Locator;
readonly BTNInwardReturnOfRedirectPaymentRcvdViaCOV: Locator;

// Payment Investigations
readonly DDLPaymentInvestigations: Locator;

// Authorise Queries Answers
readonly DDLAuthoriseQueriesAnswers: Locator;
readonly BTNAuthoriseAQuery: Locator;
readonly BTNAuthoriseAnAnswer: Locator;

// Authorise Free Format Messages
readonly DDLAuthoriseFreeFormatMessagesPI: Locator;
readonly BTNAuthoriseFreeFormatMessage: Locator;

// Authorise Exceptions Investigations
readonly DDLAuthoriseExceptionsInvestigations: Locator;
readonly BTNAuthoriseOutwardInvestigation: Locator;
readonly BTNAuthoriseInwardInvestigation: Locator;

// CT DD CC Cancellation Auth
readonly DDLCTDDCCCancellationAuth: Locator;
readonly BTNAwaitingDistributionToClearingAuth: Locator;
readonly BTNCancelBeforeDistributionToClearingAuth: Locator;

// Cancellation Of Return Auth
readonly DDLCancellationOfReturnAuth: Locator;
readonly BTNCancellationOfReturnBeforeDistribution: Locator;

// Return Reject SWIFT Transfers
readonly DDLReturnRejectSWIFTTransfers: Locator;
readonly BTNReturnRejectSWIFTTransfers: Locator;
readonly BTNReturnOfSWIFTCompletedCreditTXN: Locator;

// Authorise Warehouse Payments
readonly DDLAuthoriseWarehousePayments: Locator;
readonly BTNWarehousePaymentsUnauthorisedList: Locator;

// Authorise Release Parked Payments
readonly DDLAuthoriseReleaseParkedPayments: Locator;
readonly BTNReleaseParkedPaymentsApprove: Locator;
readonly BTNReleaseParentParkedPymtsApprove: Locator;

// Authorise Payment Reversal
readonly DDLAuthorisePaymentReversal: Locator;
readonly BTNAuthoriseRejectReversalOfPayments: Locator;

// Clrg Status Report Exceptions Auth
readonly DDLClrgStatusReportExceptionsAuth: Locator;
readonly BTNFileLevelExceptionAuth: Locator;
readonly BTNBulkLevelExceptionAuth: Locator;
readonly BTNTxnLevelExceptionAuth: Locator;

// Manual Funds Authorisation
readonly DDLManualFundsAuthorisation: Locator;

// Requests For Pending Approval
readonly DDLRequestsForPendingApproval: Locator;
readonly BTNPendingApproval2Eyes: Locator;
readonly BTNPendingApproval4Eyes: Locator;
readonly BTNPendingAuthorise: Locator;
readonly BTNViewAuthorisationHistory: Locator;

// Manual Filter Payments
readonly DDLManualFilterPayments: Locator;
readonly BTNManualFilterPaymentsUnauthLevel1: Locator;
readonly BTNManualFilterPaymentsUnauthLevel2: Locator;

// Standing Orders
readonly DDLStandingOrders: Locator;
readonly BTNAuthoriseFixedStandingOrders: Locator;

// Authorise SWIFTOUT RTGS Exceptions
readonly DDLAuthoriseSWIFTOUTRTGSExceptions: Locator;
readonly BTNAuthoriseSWIFTOUTRTGSExceptions: Locator;

// Risk Filter Breach Queue
readonly DDLRiskFilterBreachQueue: Locator;
readonly BTNApproveRejectRiskFilterBreachAuth1: Locator;
readonly BTNApproveRejectRiskFilterBreachAuth2: Locator;

// Authorise Return Credit Transfers
readonly DDLAuthoriseReturnCreditTransfers: Locator;
readonly BTNAuthoriseReturnCreditTransfers: Locator;

// Authorise SWIFT ISO Exceptions
readonly DDLAuthoriseSWIFTISOExceptions: Locator;
readonly BTNAuthoriseSWIFTISOExceptions: Locator;

// Authorise RTGS Exceptions
readonly DDLAuthoriseRTGSExceptions: Locator;
readonly BTNAuthoriseRTGSExceptions: Locator;

// Instant Payments
readonly ddlInstantPaymentsDropdown: Locator;

// Investigation And Reversal
readonly ddlInvestigationAndReversalDropdown: Locator;

// Unconfirmed Instant Payments
readonly ddlUnconfirmedInstantPaymentsDropdown: Locator;
readonly btnUnconfirmedExpTimeOutAllButton: Locator;
readonly btnInwardInvestigationRepairButton: Locator;
readonly btnReversedInwardPaymentsButton: Locator;

// Instant Payments Cancellations
readonly ddlInstantPaymentsCancellationsDropdown: Locator;

// Instant Create Cancellation Request
readonly ddlInstantCreateCancellationRequestDropdown: Locator;
readonly btnInstantBankInitiatedCancellationRequestButton: Locator;
readonly btnInstantCustomerInitiatedCancellationRequestButton: Locator;
readonly btnInstantBulkBankInitiatedCancellationRequestButton: Locator;
readonly btnInstantAuthBulkCancellationReqInButton: Locator;
readonly btnInstantAuthoriseOutwardCancellationRequestButton: Locator;
readonly btnInstantAuthBulkCancellationReqOutButton: Locator;
readonly btnInstantDeleteUnapprovedCancellationRequestsButton: Locator;
readonly btnInstantInwardCancellationReqRepairButton: Locator;
readonly btnInstantInwardCancellationReqEnquiryButton: Locator;
readonly btnInstantInwardCancellationReqAuthDelButton: Locator;
readonly btnInstantUnmatchedInRequestStatusUpdateButton: Locator;
readonly btnInstantPendingCancellationsReqUpdateButton: Locator;
readonly btnInstantOutwardCancellationReqViewStatusButton: Locator;
readonly btnInstantCancellationReqIPNotProcessedButton: Locator;
readonly btnInstantCancellationReqIPViewStatusButton: Locator;
readonly btnInstantOutgoingCancellationReqUpdateButton: Locator;
readonly btnUnauthorisedEBQAQueriesButton: Locator;

// Same Day Instant Payment Enquiry
readonly ddlSameDayInstPaymentEnquiryDropdown: Locator;
readonly btnPendingProcessedPaymentsCurrDateButton: Locator;

// Pending Processed Instant Payments
readonly ddlPendingProcessedInstantPaymentsDropdown: Locator;
readonly btnPendingProcessedInstPaymentsButton: Locator;

// Pending Processed UK FPS Payments
readonly ddlPendingProcessedUKFPSPaymentsDropdown: Locator;
readonly btnPendingAndProcessedUKFPSPaymentsButton: Locator;

// Instant Payments Unresolved Posting
readonly ddlInstantPaymentsUnresolvedPostingDropdown: Locator;
readonly btnUnresolvedPostingFailuresButton: Locator;

// Action Unconfirmed Instant Payments
readonly ddlActionUnconfirmedInstantPaymentsDropdown: Locator;
readonly btnUnconfirmedInstantOutgoingPaymentButton: Locator;
readonly btnUnconfirmedInstantIncomingPaymentButton: Locator;
readonly btnUnconfirmedOutgoingReturnPaymentButton: Locator;
readonly btnUnconfirmedIncomingReturnPaymentButton: Locator;
readonly btnAuthoriseUnconfirmedInstantPaymentsButton: Locator;

// Miscellaneous Payment Messages
readonly ddlMiscellaneousPaymentMessagesDropdown: Locator;

readonly btnRequestForTransferMT101Button: Locator;
readonly btnAuthoriseDeleteMT101Button: Locator;

readonly btnCreateStopPaymentOfChequeOutwardMT111Button: Locator;
readonly btnCreateStopPaymentOfChequeOutwardGenericButton: Locator;
readonly btnAuthoriseDeleteStopPaymentOfChequesSentButton: Locator;
readonly btnViewAmendUnauthorisedStopPaymentRequestsSentButton: Locator;
readonly btnViewStopPaymentRequestsOutwardButton: Locator;

readonly btnCreateReceivedStopRequestStatusGenericButton: Locator;
readonly btnViewAmendUnauthorisedStopRequestStatusReceivedButton: Locator;
readonly btnAuthoriseDeleteStopRequestStatusReceivedButton: Locator;
readonly btnViewStopRequestStatusReceivedButton: Locator;

readonly btnAdviceOfChargesMT190MT290Button: Locator;
readonly btnAuthoriseDeleteMT190290Button: Locator;

readonly btnRequestForChargesMT191MT291Button: Locator;
readonly btnAuthoriseDeleteMT191MT291Button: Locator;

readonly btnSendFreeFormatMessageMTn99Button: Locator;
readonly btnAuthoriseDeleteMT199MT299MT999Button: Locator;

readonly btnSendCancellationMessageMTn92Button: Locator;
readonly btnAuthoriseDeleteMT192MT292MT992Button: Locator;

readonly btnSendQueryMessagesMT195MT295MT995Button: Locator;
readonly btnAuthoriseDeleteMT195MT295MT995Button: Locator;

readonly btnSendAnswerMessagesMT196MT296MT996Button: Locator;
readonly btnAuthoriseDeleteMT196MT296MT996Button: Locator;

// Enquiries
readonly ddlEnquiriesDropdown: Locator;
readonly btnMT101RequestButton: Locator;
readonly btnMT111RequestButton: Locator;
readonly btnStatusOfStopPaymentRequestMT112Button: Locator;
readonly btnChargeRequestButton: Locator;
readonly btnFreeMessagesButton: Locator;
readonly btnQueriesAnswersButton: Locator;
readonly btnListOfClaimsGeneratedAutomaticallyButton: Locator;

// Claims
readonly btnSwiftConfirmationTrackerButton: Locator;
readonly btnActionOnUnpaidClaimsButton: Locator;
readonly btnAuthoriseDeleteUnpaidClaimsButton: Locator;

// Direct Debit Mandates
readonly ddlDirectDebitMandatesDropdown: Locator;
readonly btnDdManagementButton: Locator;

// Nostro/Vostro Accounts
readonly ddlNostroVostroAccountsDropdown: Locator;
readonly btnOpenVostroAccountButton: Locator;
readonly btnOpenNostroAccountButton: Locator;
readonly btnAmendVostroNostroAccountButton: Locator;
readonly btnAuthoriseVostroNostroAccountButton: Locator;
readonly btnNostroBalancePositionButton: Locator;

// Beneficiary Details
readonly ddlBeneficiaryDetailsDropdown: Locator;
readonly btnBeneficiaryDetailsButton: Locator;

// Drafts Inventory
readonly ddlDraftsInventoryDropdown: Locator;
readonly btnReceiptOfStockButton: Locator;
readonly btnAuthoriseDeleteReceiptOfStockButton: Locator;
readonly btnDraftInventoryStopPaymentForDraftsButton: Locator;
readonly btnAuthoriseDeleteStopPaymentOfDraftsButton: Locator;
readonly btnDraftInventoryRevokeStopPaymentOfDraftButton: Locator;
readonly btnAuthoriseDeleteRevokeStopPaymentOfDraftButton: Locator;

// Expected Receipts
readonly ddlExpectedReceiptsDropdown: Locator;

// Expected Receipts Creation
readonly ddlExpectedReceiptsCreationDropdown: Locator;
readonly btnCreateMT210ExpectedReceiptButton: Locator;
readonly btnCreateCamt057ExpectedReceiptButton: Locator;
readonly btnExpectedReceiptsManualButton: Locator;
readonly btnAuthDelExpectedReceiptItemButton: Locator;
readonly btnCreateCamt058ExpectedReceiptButton: Locator;

// Expected Receipts Enquiries
readonly ddlExpectedReceiptsEnquiriesDropdown: Locator;
readonly btnExpectedBalanceProjectionButton: Locator;
readonly btnExpiredRecordsButton: Locator;
readonly btnProjectedCashFlowButton: Locator;
readonly btnExpectedCancelAndReceiptsUnmatchedItemsButton: Locator;
readonly btnExpectedCancelAndReceiptsMatchedItemsButton: Locator;
readonly btnExpectedReceiptsInExceptionButton: Locator;

// Payment & Cover
readonly ddlPaymentAndCoverDropdown: Locator;
readonly btnStartManualMatchingButton: Locator;
readonly btnAuthoriseDeletePaymentAndCoverItemsButton: Locator;
readonly btnPaymentAndCoverMatchedItemsButton: Locator;

// External Request Pending Responses
readonly ddlExternalRequestPendingResponsesDropdown: Locator;
readonly btnAllExternalRequestsButton: Locator;
readonly btnPendingResponsesAcctValidationButton: Locator;
readonly btnPendingResponsesFundsReservationButton: Locator;
readonly btnPendingResponsesCancelReservationButton: Locator;
readonly btnPendingResponsesPostingAcctEntriesButton: Locator;
readonly btnPendingResponsesReversalAcctEntriesButton: Locator;
readonly btnPendingResponsesMandateValidationButton: Locator;
readonly btnPendingResponsesMandateModificationButton: Locator;
readonly btnUpdateOfMandateLimitButton: Locator;

// External Request Failed Responses
readonly ddlExternalRequestFailedResponsesDropdown: Locator;
readonly btnFailedResponsesCancelReservationButton: Locator;
readonly btnFailedResponsesReOpenMandateButton: Locator;
readonly btnFailedResponsesUpdateMandateButton: Locator;

// Drawee Bank FCY Drafts Operations
readonly ddlDraweeBankFCYDraftsOperationsDropdown: Locator;
readonly btnCreateReceivedAdviceOfChequesMT110Button: Locator;
readonly btnCreateReceivedAdviceOfChequesCAMT107Button: Locator;
readonly btnAuthoriseReceivedAdviceOfChequesButton: Locator;
readonly btnViewReceivedChequeAdvicesButton: Locator;
readonly btnCreateStopPaymentOfChequeInwardMT111Button: Locator;
readonly btnCreateStopPaymentOfChequeInwardGenericButton: Locator;
readonly btnViewRespondUnauthorisedStopPaymentRequestOfChequesButton: Locator;
readonly btnAuthoriseDeleteRequestResponseStopPaymentOfChequesButton: Locator;
readonly btnViewRequestResponseStopPaymentOfChequesButton: Locator;
readonly btnViewStopRequestStatusOutwardButton: Locator;

// Multiple Payments Exception Handling
readonly ddlMultiplePaymentsExceptionHandlingDropdown: Locator;
readonly btnCancelPaymentsInIntermediateStatusButton: Locator;
readonly btnAmendParkedPaymentsButton: Locator;
readonly btnReleaseRepairPaymentsButton: Locator;
readonly btnReleasePaymentsAwaitingExternalRequestsButton: Locator;

// Input Payment Order
readonly ddlInputPaymentOrderDropdown: Locator;
readonly btnAccountTransferHomeButton: Locator;
readonly btnAccountTransferOtherButton: Locator;
readonly btnFundingRequestButton: Locator;
readonly btnPLTransferButton: Locator;
readonly btnDomesticButton: Locator;
readonly btnDomesticPlusButton: Locator;
readonly btnInternationalButton: Locator;
readonly btnAALoanDisbursementButton: Locator;
readonly btnAADepositPaymentsButton: Locator;
readonly btnSwiftCBPRCustomerTransferButton: Locator;
readonly btnSwiftCBPRBankTransferButton: Locator;
readonly btnAfricaButton: Locator;
readonly btnArgentinaButton: Locator;
readonly btnAustraliaButton: Locator;
readonly btnEuropeanUnionButton: Locator;
readonly btnHongKongButton: Locator;
readonly btnHungaryButton: Locator;
readonly btnItalyButton: Locator;
readonly btnIsraelButton: Locator;
readonly btnSaudiArabiaButton: Locator;
readonly btnSriLankaButton: Locator;
readonly btnSwitzerlandButton: Locator;
readonly btnUkButton: Locator;
readonly btnUsButton: Locator;
readonly btnTunisiaButton: Locator;
readonly btnIndiaButton: Locator;

// Drafts
readonly ddlDraftsDropdown: Locator;
readonly btnDraftIssueInLocalCurrencyButton: Locator;
readonly btnDraftIssueInForeignCurrencyButton: Locator;
readonly btnDraftsAwaitingPrintingButton: Locator;
readonly btnDraftPaymentButton: Locator;
readonly btnDraftsStopPaymentForDraftsButton: Locator;
readonly btnStopPaymentOfDraftsAuthDelButton: Locator;
readonly btnDraftsRevokeStopPaymentOfDraftButton: Locator;
readonly btnRevokeStopPaymentAuthDelButton: Locator;
readonly btnCancellationOfDraftsButton: Locator;
readonly btnSwiftCBPRIssuanceOfForeignCurrencyDraftButton: Locator;

// Amend Payment Order
readonly ddlAmendPaymentOrderDropdown: Locator;
readonly btnAmendPaymentOrderButton: Locator;
readonly btnAmendPaymentOrderExceptionButton: Locator;
readonly btnPaymentOrderSTOExceptionButton: Locator;
readonly btnPaymentOrderDepositExceptionButton: Locator;
readonly btnPaymentOrderLoanExceptionButton: Locator;
readonly btnPaymentOrderDrawingsExceptionButton: Locator;

// Authorise Delete Payment Order
readonly ddlAuthoriseDeletePaymentOrderDropdown: Locator;
readonly btnAuthoriseDeletePaymentOrderButton: Locator;

// Payment Order Notifications
readonly ddlPaymentOrderNotificationsDropdown: Locator;
readonly btnPoNotificationsInputButton: Locator;
readonly btnPoNotificationsExceptionButton: Locator;
readonly btnPoNotificationsAuthoriseButton: Locator;
readonly btnPoNotificationsViewButton: Locator;

// Payment Order Enquiries
readonly ddlPaymentOrderEnquiriesDropdown: Locator;
readonly btnPaymentOrderEnquiriesButton: Locator;
readonly btnTrackPaymentStatusButton: Locator;
readonly btnPaymentOrderLiveHistoricalPaymentInformationButton: Locator;
readonly btnPaymentOrderFundsDecisionButton: Locator;

// Recalls And Investigations
readonly ddlRecallsAndInvestigationsDropdown: Locator;

// Outward Recalls
readonly ddlOutwardRecallsDropdown: Locator;
readonly btnInitiateRecallButton: Locator;
readonly btnViewStatusOfRecallsSentButton: Locator;

// Bulk Payments
readonly DDLBulkPayments: Locator;
readonly BTNBulkFileUpload: Locator;
readonly BTNCaptureNewBulk: Locator;
readonly BTNSubmitCancelBulk: Locator;
readonly BTNAuthorizeRejectBulk: Locator;
readonly BTNViewCancelOrder: Locator;
readonly BTNAuthorizeRejectOrder: Locator;
readonly BTNViewBulkPayments: Locator;
readonly BTNViewCancelWarehousedBulk: Locator;
readonly BTNAuthoriseCancellationOfWarehousedBulk: Locator;
readonly BTNViewBulkPaymentOrders: Locator;
readonly BTNViewBulkFiles: Locator;

// Payment Interface Requests
readonly DDLPaymentInterfaceRequests: Locator;
readonly BTNAccountInquiryDebit: Locator;
readonly BTNAccountInquiryCredit: Locator;
readonly BTNAccountInquiryDebitCharges: Locator;
readonly BTNAccountInquiryCreditCharges: Locator;
readonly BTNReserveEntries: Locator;
readonly BTNPostingEntries: Locator;
readonly BTNPostingEntriesWithBalance: Locator;
readonly BTNReversePosting: Locator;
readonly BTNMandateValidation: Locator;
readonly BTNMandateUpdate: Locator;
readonly BTNMandateReopen: Locator;
readonly BTNCancelReservation: Locator;
readonly BTNAccountCheckFeeInquiryForDebit: Locator;
readonly BTNAccountCheckFeeInquiryForCredit: Locator;

constructor(page: Page) {
    super(page);
    this.page = page;

// Payments
this.ddlPaymentsDropdown = page.locator("//span[contains(text(),'Payments')]");

// Standing Order
this.ddlStandingOrderDropdown = page.locator("//span[contains(text(),'Standing Order')]");
this.ddlInputStandingOrderDropdown = page.locator("//span[contains(text(),'Input Standing Order')]");
this.btnInputFixedBalanceSTOButton = page.locator("//a[text()=' Input Fixed/Balance STO ']");

// Standing Order MX
this.ddlStandingOrderMXDropdown = page.locator("//span[contains(text(),'Standing Order-MX')]");
this.btnInputStandingOrdersMXButton = page.locator("//a[text()=' Input Standing Orders - MX ']");
this.btnAmendViewStandingOrdersMXButton = page.locator("//a[text()=' Amend/View Standing Orders -MX ']");
this.btnAmendAuthoriseDeleteUnauthorisedStandingOrdersMXButton = page.locator("//a[text()=' Amend/Authorise/Delete Unauthorised Standing Orders-MX ']");
this.btnStandingOrdersListButton = page.locator("//a[text()=' Standing Orders List ']");
this.btnAmendUnauthorisedStandingOrdersButton = page.locator("//a[text()=' Amend Unauthorised Standing Orders ']");
this.btnAuthoriseDeleteUnauthorisedStandingOrdersButton = page.locator("//a[text()=' Authorise/Delete Unauthorised Standing Orders ']");
this.btnListOfInactiveStandingOrdersButton = page.locator("//a[text()=' List of Inactive Standing Orders ']");
this.btnStandingOrdersExecutionDetailsButton = page.locator("//a[text()=' Standing Orders Execution Details ']");
this.btnViewAmendFailedStandingOrdersButton = page.locator("//a[text()=' View/Amend Failed Standing Orders ']");

// Payment Hub
this.ddlPaymentHubDropdown = page.locator("//span[contains(text(),'Payment Hub')]");

// Initiate Payment Transaction
this.ddlInitiatePaymentTransactionDropdown = page.locator("//span[contains(text(),'Initiate Payment Transaction')]");

// Initiate Customer Transfer
this.ddlInitiateCustomerTransferDropdown = page.locator("//span[contains(text(),'Initiate Customer Transfer')]");
this.btnCustomerIncomingTransferButton = page.locator("//a[text()=' Incoming Transfer ']");
this.btnCustomerOutgoingTransferButton = page.locator("//a[text()=' Outgoing Transfer ']");
this.btnCustomerBookTransferButton = page.locator("//a[text()=' Book Transfer ']");
this.btnCustomerRedirectTransferButton = page.locator("//a[text()=' Redirect Transfer ']");

// Initiate Bank Transfer
this.ddlInitiateBankTransferDropdown = page.locator("//span[contains(text(),'Initiate Bank Transfer')]");
this.btnBankIncomingTransferButton = page.locator("//a[text()=' Incoming Transfer ']");
this.btnBankOutgoingTransferButton = page.locator("//a[text()=' Outgoing Transfer ']");
this.btnBankBookTransferButton = page.locator("//a[text()=' Book Transfer ']");
this.btnBankRedirectTransferButton = page.locator("//a[text()=' Redirect Transfer ']");
this.btnOwnAccountTransferMT200Button = page.locator("//a[text()=' Own Account Transfer MT200 ']");
this.btnInitiateSEPACreditTransferButton = page.locator("//a[text()=' Initiate SEPA Credit Transfer ']");

// Initiate Direct Debit
this.ddlInitiateDirectDebitDropdown = page.locator("//span[contains(text(),'Initiate Direct Debit')]");
this.btnDirectDebitInitiationBookButton = page.locator("//a[text()=' Direct Debit initiation Book ']");
this.btnDirectDebitInitiationOutgoingButton = page.locator("//a[text()=' Direct Debit initiation Outgoing ']");
this.btnDirectDebitInitiationOutgoingISOButton = page.locator("//a[text()=' Direct Debit initiation Outgoing - ISO ']");
this.btnInterbankDirectDebitInitiationOutgoingButton = page.locator("//a[text()=' Interbank Direct Debit Initiation Outgoing ']");

// Initiate ISO Customer Transfer
this.ddlInitiateISOCustomerTransferDropdown = page.locator("//span[contains(text(),'Initiate ISO Customer Transfer')]");
this.btnIncomingISOCustomerTransferButton = page.locator("//a[text()=' Incoming ISO Customer Transfer ']");
this.btnOutgoingISOCustomerTransferButton = page.locator("//a[text()=' Outgoing ISO Customer Transfer ']");
this.btnInitiateIsoCustomerTransferReturnButton = page.locator("//a[text()=' Outgoing ISO Customer Transfer Return ']");

// Initiate ISO Bank Transfer
this.ddlInitiateISOBankTransferDropdown = page.locator("//span[contains(text(),'Initiate ISO Bank Transfer')]");
this.btnIncomingISOBankTransferButton = page.locator("//a[text()=' Incoming ISO Bank Transfer ']");
this.btnOutgoingISOBankTransferButton = page.locator("//a[text()=' Outgoing ISO Bank Transfer ']");
this.btnOutgoingISOOwnAccountTransferButton = page.locator("//a[text()=' Outgoing ISO Own Account Transfer ']");
this.btnInitiateIsoBankTransferReturnButton = page.locator("//a[text()=' Outgoing ISO Bank Transfer Return ']");

// Payment Inquiries
this.ddlPaymentInquiriesDropdown = page.locator("//span[contains(text(),'Payment Inquiries')]");

// Pending Payments
this.ddlPendingPaymentsDropdown = page.locator("//span[contains(text(),'Pending Payments')]");
this.btnPendingRepairPaymentsButton = page.locator("//a[text()=' Pending Repair Payments ']");
this.btnPendingReprocessPaymentsButton = page.locator("//a[text()=' Pending Reprocess Payments ']");

// Pending Payment Orders
this.ddlPendingPaymentOrdersDropdown = page.locator("//span[contains(text(),'Pending Payment Orders')]");
this.btnPendingOrderEntryPaymentsButton = page.locator("//a[text()=' Pending Order Entry Payments ']");
this.btnPendingOrderEntryDirectDebitsButton = page.locator("//a[text()=' Pending Order Entry Direct Debits ']");
this.btnPendingOrderEntryDirectDebitsInterbankButton = page.locator("//a[text()=' Pending Order Entry Direct Debits (Interbank) ']");
this.btnAmendUnauthorisedPaymentsButton = page.locator("//a[text()=' Amend Unauthorised Payments ']");
this.btnPendingDDMandateVerificationButton = page.locator("//a[text()=' Pending DD - Mandate Verification ']");
this.btnPendingChequeDebitPaymentsButton = page.locator("//a[text()=' Pending Cheque Debit Payments ']");
this.btnPendingAutoRepairPaymentsButton = page.locator("//a[text()=' Pending Auto Repair Payments ']");
this.btnAllTransferPendingRepairPaymentsButton = page.locator("//a[text()=' All Transfer Pending Repair Payments ']");
this.btnScheduledForReleasePaymentsButton = page.locator("//a[text()=' Scheduled for Release Payments ']");
this.btnPendingUnmatchedRPaymentsButton = page.locator("//a[text()=' Pending Unmatched R-Payments ']");

// Rejected Order Entry Payments
this.ddlRejectedOrderEntryPaymentsDropdown = page.locator("//span[contains(text(),'Rejected Order Entry Payments')]");
this.btnRejectedOrderEntryPaymentsButton = page.locator("//a[text()=' Rejected Order Entry Payments ']");
this.btnRejectedOrderEntryDirectDebitsButton = page.locator("//a[text()=' Rejected Order Entry Direct Debits ']");

// Pending And Processed Payments
this.ddlPendingAndProcessedPaymentsDropdown = page.locator("//span[contains(text(),'Pending and Processed Payments')]");
this.btnPaymentsEnquiryPartyWiseButton = page.locator("//a[text()=' Payments Enquiry - Party wise ']");
this.btnPaymentsEnquiryTransactionWiseButton = page.locator("//a[text()=' Payments Enquiry - Transaction wise ']");
this.btnPaymentsEnquiryArchiveTxnsButton = page.locator("//a[text()=' Payments Enquiry - Archive Txns ']");
this.btnPendingPaymentsForCoverButton = page.locator("//a[text()=' Pending Payments for Cover ']");
this.btnCoverPaymentsUnmatchedButton = page.locator("//a[text()=' Cover Payments Unmatched ']");
this.btnCurrentStatusInformationOfPaymentButton = page.locator("//a[text()=' Current Status Information of Payment ']");
this.btnAuditTrailForRepairPaymentsButton = page.locator("//a[text()=' Audit Trail for Repair Payments ']");
this.btnViewAccountingEntriesButton = page.locator("//a[text()=' View Accounting Entries ']");
this.btnManualFundsAuthorisationQueueButton = page.locator("//a[text()=' Manual Funds Authorisation Queue ']");
this.btnPaymentInquiryLiveHistoricalPaymentInformationButton = page.locator("//a[text()=' Live/ Historical Payment Information ']");
this.btnNostroQuotaUtilisationButton = page.locator("//a[text()=' Nostro Quota Utilisation ']");

// Received And Sent File Details
this.ddlReceivedAndSentFileDetailsDropdown = page.locator("//span[contains(text(),'Received and SentFile Details')]");

// Received Files Details
this.ddlReceivedFilesDetailsDropdown = page.locator("//span[contains(text(),'Received Files Details')]");
this.btnReceivedMessageFileDetailsListButton = page.locator("//a[contains(text(),' Received Message/File Details List ')]");
this.btnReceivedMessageFileDetailsFromIPButton = page.locator("//a[text()=' Received Message/File Details List ']");

// Received Message File Repair
this.ddlReceivedMessageFileRepairDropdown = page.locator("//span[contains(text(),'Received Message/File - Repair')]");
this.btnReceivedMessageFileRepairQueueListButton = page.locator("//a[text()=' Received Message/File - Repair Queue List ']");
this.btnRcvdMsgFileDetsRepairUnauthListAmendButton = page.locator("//a[text()=' Rcvd Msg/File Dets-Repair Unauth List-Amend ']");

// Received Bulk Repair Queue List
this.ddlReceivedBulkRepairQueueListDropdown = page.locator("//span[contains(text(),'Received Bulk - Repair Queue List')]");
this.btnReceivedBulkRepairQueueListButton = page.locator("//a[text()=' Received Bulk - Repair Queue List ']");
this.btnReceivedBulkRepairUnauthListAmendButton = page.locator("//a[text()=' Received Bulk - Repair Unauth List-Amend ']");

// Received Claims
this.ddlReceivedClaimsDropdown = page.locator("//span[contains(text(),'Received Claims')]");
this.btnReceivedClaimsListButton = page.locator("//a[text()=' Received Claims List ']");
this.btnIsoReceivedClaimsListButton = page.locator("//a[text()=' ISO Received Claims List ']");

// Received Charge Payment Notification
this.ddlReceivedChargePaymentNotificationDropdown = page.locator("//span[contains(text(),'Received Charge Payment Notification')]");
this.btnInwardChargePaymentNotificationButton = page.locator("//a[text()=' Inward Charge Payment Notification ']");

// Sent File Details
this.ddlSentFileDetailsDropdown = page.locator("//span[contains(text(),'Sent File Details')]");
this.btnSentFileDetailsButton = page.locator("//a[text()=' Sent File Details ']");
this.btnSentFileDetailsIPButton = page.locator("//a[text()=' Sent File Details - IP ']");
this.btnSentFileDetailsExceptionButton = page.locator("//a[text()=' Sent File Details - Exception ']");
this.btnSentClaimsButton = page.locator("//a[text()=' Sent Claims ']");

// Monitoring File Details
this.ddlMonitoringFileDetailsDropdown = page.locator("//span[contains(text(),'Monitoring File Details')]");
this.btnMonitoringOfReceivedFileDetailsButton = page.locator("//a[text()=' Monitoring Of Received File Details ']");
this.btnMonitoringOfSentFileDetailsButton = page.locator("//a[text()=' Monitoring Of Sent File Details ']");

// Confirmations
this.ddlConfirmationsDropdown = page.locator("//span[contains(text(),'Confirmations')]");
this.btnPhoneConfirmationsButton = page.locator("//a[text()=' Phone Confirmations ']");

// Reports
this.ddlReportsDropdown = page.locator("//span[contains(text(),'Reports')]");

// Local Clearing Reports
this.ddlLocalClearingReportsDropdown = page.locator("//span[contains(text(),'Local Clearing Reports')]");
this.btnSettlementTransactionStatusReportButton = page.locator("//a[text()=' Settlement Transaction Status Report ']");
this.btnEquensClearingDRRReportButton = page.locator("//a[text()=' Equens Clearing DRR Report ']");
this.btnEbainstDRRReportButton = page.locator("//a[text()=' EBAINST DRR Report ']");
this.btnEbainstRSFReportButton = page.locator("//a[text()=' EBAINST RSF Report ']");

// Current Payments Reports
this.ddlCurrentPaymentsReportsDropdown = page.locator("//span[contains(text(),'Current Payments Reports')]");
this.btnPaymentsInRepairAndWarehouseQueueButton = page.locator("//a[text()=' Payments in Repair and WareHouse Queue ']");
this.btnPaymentsPerMsgTypeButton = page.locator("//a[text()=' Payments Per Msg Type ']");

// BIC Upload Reports
this.ddlBicUploadReportsDropdown = page.locator("//span[contains(text(),'BIC Upload Reports')]");
this.btnBicUploadReportsButton = page.locator("//a[text()=' BIC UPLOAD Reports ']");

// US ACH Payments
this.ddlUsACHPaymentsDropdown = page.locator("//span[contains(text(),'US ACH Payments')]");
this.btnPaymentsAwaitingTraceNumberButton = page.locator("//a[text()=' Payments awaiting trace number ']");
this.btnReturnCompletedCTPaymentsButton = page.locator("//a[contains(text(),'Return Completed CT Payments')]");

// Batch Payments
this.ddlBatchPaymentsDropdown = page.locator("//span[contains(text(),'Batch Payments')]");
this.btnInvalidChildPaymentsAutoReversedButton = page.locator("//a[text()=' Invalid Child Payments - Auto Reversed ']");
this.btnForceReleasedBatchButton = page.locator("//a[text()=' Force Released Batch ']");

// Inward Cheque Collection
this.ddlInwardChequeCollectionDropdown = page.locator("//span[contains(text(),'Inward Cheque Collection')]");
this.btnInwardChequesStatusButton = page.locator("//a[text()=' Inward Cheques Status ']");
this.btnManualChequeDebitPaymentsButton = page.locator("//a[text()=' Manual Cheque Debit Payments ']");
this.btnInwardChequesReturnedButton = page.locator("//a[text()=' Inward Cheques Returned ']");

// Outward Cheque Collection
this.ddlOutwardChequeCollectionDropdown = page.locator("//span[contains(text(),'Outward Cheque Collection')]");
this.btnForeignChequesStatusCorrespondentButton = page.locator("//a[text()=' Foreign Cheques Status-Correspondent ']");
this.btnLocalOutstationChequesStatusButton = page.locator("//a[text()=' Local & Outstation Cheques Status ']");
this.btnChequePaymentStatusButton = page.locator("//a[text()=' Cheque Payment Status ']");
this.btnLocalChequesStatusStandaloneButton = page.locator("//a[text()=' Local Cheques Status - StandAlone ']");

// Payment Monitoring
this.ddlPaymentMonitoringDropdown = page.locator("//span[contains(text(),'Payment Monitoring')]");

// Payment Flow Monitor
this.ddlPaymentFlowMonitorDropdown = page.locator("//span[contains(text(),'Payment Flow Monitor')]");
this.btnPaymentFlowStatusMonitorButton = page.locator("//a[text()=' Payment Flow Status Monitor ']");
this.btnInProcessPaymentsButton = page.locator("//a[text()=' In-Process Payments ']");
this.btnFinalStatusMonitorButton = page.locator("//a[text()=' Final Status Monitor ']");
this.btnInwardMonitorButton = page.locator("//a[text()=' Inward Monitor ']");
this.btnCompanySpecificServicesMonitorButton = page.locator("//a[text()=' Company Specific Services Monitor ']");
this.btnNonCompanySpecificServicesMonitorButton = page.locator("//a[text()=' Non-Company Specific Services Monitor ']");
this.btnLcTimeScheduledProcessStatusMonitorButton = page.locator("//a[text()=' LC Time Scheduled Process Status Monitor ']");

// Virtual Queue Monitor
this.ddlVirtualQueueMonitorDropdown = page.locator("//span[contains(text(),'Virtual Queue Monitor')]");
this.btnQueueMonitorButton = page.locator("//a[text()=' Queue Monitor ']");
this.btnRiskFilterAuthorisationQueueButton = page.locator("//a[text()=' Risk Filter Authorisation Queue ']");
this.btnClearingServicesMonitorButton = page.locator("//a[text()=' Clearing Services Monitor ']");
this.btnCutOffTimeMonitorButton = page.locator("//a[text()=' Cut-Off Time Monitor ']");

// Payments Matched With Notice To Receive
this.ddlPaymentsMatchedWithNoticeToReceiveDropdown = page.locator("//span[contains(text(),'Payments Matched With NoticeToReceive')]");
this.btnPaymentsMatchedWithNoticeToReceiveButton = page.locator("//a[text()=' Payments Matched With NoticeToReceive ']");

// Payment Exceptions
this.ddlPaymentExceptionsDropdown = page.locator("//span[contains(text(),'Payment Exceptions')]");
this.btnTreasuryRateRequestButton = page.locator("//a[text()=' Treasury Rate Request ']");

// Warehouse And Parked Payments
this.ddlWarehouseAndParkedPaymentsDropdown = page.locator("//span[contains(text(),'Warehouse and Parked Payments')]");

// Warehouse Payments List
this.ddlWarehousePaymentsListDropdown = page.locator("//span[contains(text(),'Warehouse Payments List')]");
this.btnWarehousePaymentsListButton = page.locator("//a[text()=' Warehouse Payments List ']");

// Parked Payments
this.ddlParkedPaymentsDropdown = page.locator("//span[contains(text(),'Parked Payments')]");
this.btnViewParkedPaymentsButton = page.locator("//a[text()=' View Parked Payments ']");

// Parked Parent Payments
this.ddlParkedParentPaymentsDropdown = page.locator("//span[contains(text(),'Parked Parent Payments')]");
this.btnViewParentParkedPaymentsButton = page.locator("//a[text()=' View Parent Parked Payments ']");

// Manual Funds Authorisation
this.ddlManualFundsAuthorisationDropdown = page.locator("//span[contains(text(),'Manual Funds Authorisation')]");
this.btnCreatePreApprovalButton = page.locator("//a[text()=' Create Pre-Approval ']");
this.btnRequestsPendingForManualApprovalListButton = page.locator("//a[text()=' Requests pending for manual approval list ']");
this.btnAuthorisedManualApprovalCancelButton = page.locator("//a[text()=' Authorised Manual approval - Cancel ']");
this.btnUnauthorisedManualApprovalCancelButton = page.locator("//a[text()=' Unauthorised Manual approval - Cancel ']");

// Pre Authorisation Requests
this.ddlPreAuthorisationRequestsDropdown = page.locator("//span[contains(text(),'Pre-Authorisation Requests')]");
this.btnCreatePreAuthorisation2EyesButton = page.locator("//a[text()=' Create Pre-Authorisation - 2 Eyes ']");
this.btnCreatePreAuthorisation4EyesButton = page.locator("//a[text()=' Create Pre-Authorisation - 4 Eyes ']");
this.btnPendingPreAuthorisationRequestsButton = page.locator("//a[text()=' Pending Pre-Authorisation Requests ']");
this.btnAuthorisedPreAuthorisationRequestsButton = page.locator("//a[text()=' Authorised Pre-Authorisation Requests ']");

// SWIFT Out Exception Queue
this.ddlSwiftOutExceptionQueueDropdown = page.locator("//span[contains(text(),'SWIFT Out Exception Queue')]");

// Exception Queue
this.ddlExceptionQueueDropdown = page.locator("//span[contains(text(),'Exception Queue')]");
this.btnExceptionQueueButton = page.locator("//a[text()=' Exception Queue ']");

// Pending Messages
this.ddlPendingMessagesDropdown = page.locator("//span[contains(text(),'Pending Messages')]");
this.btnViewPendingSwiftMessagesButton = page.locator("//a[text()=' View pending SWIFT messages ']");
this.btnViewDeletePendingSwiftMessagesButton = page.locator("//a[text()=' View/Delete Pending Swift Messages ']");

// Received MT019
this.ddlReceivedMT019Dropdown = page.locator("//span[contains(text(),'Received MT019')]");
this.btnReceivedMT019DetailScreenButton = page.locator("//a[text()=' Received MT019 - Detail screen ']");

// RTGS ISO Exception Queue
this.ddlRtgsISOExceptionQueueDropdown = page.locator("//span[contains(text(),'RTGS ISO Exception Queue')]");
this.btnRtgsTechnicalExceptionQueueButton = page.locator("//a[text()=' RTGS Technical Exception Queue ']");
this.btnRtgsBusinessExceptionQueueButton = page.locator("//a[text()=' RTGS Business Exception Queue ']");

// SWIFT ISO Exception Queue
this.ddlSwiftISOExceptionQueueDropdown = page.locator("//span[contains(text(),'SWIFT ISO Exception Queue')]");
this.btnSwiftISOTechnicalExceptionsButton = page.locator("//a[text()=' SWIFT ISO Technical Exceptions ']");
this.btnSwiftISOBusinessExceptionsButton = page.locator("//a[text()=' SWIFT ISO Business Exceptions ']");

// Clearing Status Report
this.ddlClearingStatusReportDropdown = page.locator("//span[contains(text(),'Clearing Status Report')]");
this.btnFileLevelExceptionButton = page.locator("//a[text()=' File Level Exception ']");
this.btnBulkLevelExceptionButton = page.locator("//a[text()=' Bulk Level Exception ']");
this.btnTxnLevelExceptionButton = page.locator("//a[text()=' Txn Level Exception ']");

// FX
this.ddlFxDropdown = page.locator("//span[contains(text(),'FX')]");

// Pending FX Rate Request Payments
this.ddlPendingFXRateRequestPaymentsDropdown = page.locator("//span[contains(text(),'Pending FX Rate Request Payments')]");
this.btnPendingFXRateRequestPaymentsListButton = page.locator("//a[text()=' Pending FX Rate Request Payments List ']");
this.btnParkedPaymentsAwaitFixingRateButton = page.locator("//a[text()=' Parked Payments - Await Fixing Rate ']");

// Filtering
this.ddlFilteringDropdown = page.locator("//span[contains(text(),'Filtering')]");
this.btnManualFilterPaymentsButton = page.locator("//a[text()=' Manual Filter Payments ']");
this.btnHitFilterButton = page.locator("//a[text()=' Hit Filter ']");
this.btnHitFilterAuthorisationButton = page.locator("//a[text()=' Hit Filter Authorisation ']");
this.btnFilteringReportButton = page.locator("//a[text()=' Filtering Report ']");
this.btnRegeneratePaymentsAndMessagesButton = page.locator("//a[text()=' Regenerate Payments and Messages ']");

// Pending Requests To External Systems
this.ddlPendingRequestsToExternalSystemsDropdown = page.locator("//span[contains(text(),'Pending Requests to External Systems')]");
this.btnPendingReqAccountInquiryDebitButton = page.locator("//a[text()=' Account Inquiry Debit ']");
this.btnPendingReqAccountInquiryCreditButton = page.locator("//a[text()=' Account Inquiry Credit ']");
this.btnPendingReqAccountInquiryDebitChargesButton = page.locator("//a[text()=' Account Inquiry Debit Charges ']");
this.btnPendingReqAccountInquiryCreditChargesButton = page.locator("//a[text()=' Account Inquiry Credit Charges ']");
this.btnPendingReqReserveEntriesButton = page.locator("//a[text()=' Reserve Entries ']");
this.btnPendingReqPostingEntriesButton = page.locator("//a[text()=' Posting Entries ']");
this.btnPendingReqReversePostingButton = page.locator("//a[text()=' Reverse Posting ']");
this.btnPendingReqMandateValidationButton = page.locator("//a[text()=' Mandate Validation ']");
this.btnPendingReqMandateReopenButton = page.locator("//a[text()=' Mandate Reopen ']");
this.btnPendingReqMandateUpdateButton = page.locator("//a[text()=' Mandate Update ']");
this.btnPendingReqCancelReservationButton = page.locator("//a[text()=' Cancel Reservation ']");
this.btnPendingReqAccountCheckFeeInquiryDebitButton = page.locator("//a[text()=' Account Check Fee Inquiry For Debit ']");
this.btnPendingReqAccountCheckFeeInquiryCreditButton = page.locator("//a[text()=' Account Check Fee Inquiry For Credit ']");

// Investigations & Cancellations
this.ddlInvestigationsAndCancellationsDropdown = page.locator("//span[contains(text(),'Investigations & Cancellations')]");

// Cancellations
this.ddlCancellationsDropdown = page.locator("//span[contains(text(),'Cancellations')]");

// SWIFT Cancellations
this.ddlSwiftCancellationsDropdown = page.locator("//span[contains(text(),'SWIFT Cancellations')]");

// SWIFT Inward Cancellation Requests
this.ddlSwiftInwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Inward Cancellation Requests')]");
this.btnAcceptCancellationRequestButton = page.locator("//a[text()=' Accept Cancellation Request ']");
this.btnRejectCancellationRequestButton = page.locator("//a[text()=' Reject Cancellation Request ']");

// SWIFT Outward Cancellation Requests
this.ddlSwiftOutwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Outward Cancellation Requests')]");
this.btnSendCancellationRequestButton = page.locator("//a[text()=' Send Cancellation Request ']");
this.btnViewOutwardCancellationRequestsButton = page.locator("//a[text()=' View Outward Cancellation Requests ']");
this.btnSendGSRPCancellationRequestISOButton = page.locator("//a[text()=' Send gSRP Cancellation Request - ISO ']");
this.btnInwardReturnOfRedirectPaymentRcvdViaCOVButton = page.locator("//a[text()=' Inward Return of Redirect Payment Rcvd via COV ']");

// Clearing Cancellations
this.ddlClearingCancellationsDropdown = page.locator("//span[contains(text(),'Clearing Cancellations')]");

// CT Cancellation Requests
this.ddlCtCancellationRequestsDropdown = page.locator("//span[contains(text(),'CT Cancellation Requests')]");

// CT Create Cancellation Request
this.ddlCtCreateCancellationRequestDropdown = page.locator("//span[contains(text(),'Create Cancellation Request')]");
this.btnCtBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Bank Initiated Cancellation Request ')]");
this.btnCtCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Customer Initiated Cancellation Request ')]");
this.btnCtBulkBankInitiatedCancellationRequestButton = page.locator("//a[text()=' Bulk Bank Initiated Cancellation Request ']");
this.btnCtAuthBulkCancellationReqInButton = page.locator("//a[text()=' Auth Bulk Cancellation Req - In ']");
this.btnCtAuthoriseOutwardCancellationRequestButton = page.locator("//a[text()=' Authorise Outward Cancellation Request ']");
this.btnCtAuthBulkCancellationReqOutButton = page.locator("//a[text()=' Auth Bulk Cancellation Req - Out ']");
this.btnCtDeleteUnapprovedCancellationRequestsButton = page.locator("//a[contains(text(),'Delete Unapproved Cancellation Requests')]");
this.btnCtInwardCancellationReqViewStatusButton = page.locator("//a[text()=' Inward Cancellation Req-View status ']");
this.btnCtUnmatchedIncomingReqStatusUpdateButton = page.locator("//a[text()=' Unmatched Incoming Req - Status Update ']");
this.btnCtInwardCancellationReqUpdateButton = page.locator("//a[text()=' Inward Cancellation - Req Update ']");
this.btnCtCancellationReqPendingResponseButton = page.locator("//a[text()=' Cancellation Req - Pending Response ']");
this.btnCtCancellationReqClearingRejectsButton = page.locator("//a[text()=' Cancellation Req - Clearing Rejects ']");
this.btnCtCancellationReqViewStatusButton = page.locator("//a[text()=' Cancellation Req - View Status ']");
this.btnCtOutgoingCancellationReqUpdateButton = page.locator("//a[text()=' Outgoing Cancellation - Req. Update ']");
this.btnCtCancellationRequestIPButton = page.locator("//a[text()=' Cancellation Request - IP ']");
this.btnCtCancelReqIPViewStatusButton = page.locator("//a[text()=' Cancel Req IP-View Status ']");
this.btnCtAuthDelCancelReqFromIPButton = page.locator("//a[text()=' Auth/Del Cancel Req from IP ']");

// DD Cancellation Requests
this.ddlDdCancellationRequestsDropdown = page.locator("//span[contains(text(),'DD Cancellation Requests')]");
this.btnInwardCancellationManualRepairButton = page.locator("//a[text()=' Inward Cancellation - Manual repair ']");
this.btnCreateBankCancellationRequestButton = page.locator("//a[text()=' Create Bank Cancellation Request ']");
this.btnInwardCancellationReqEnquiryButton = page.locator("//a[text()=' Inward Cancellation Req - Enquiry ']");
this.btnOutwardCancellationReqEnquiryButton = page.locator("//a[text()=' Outward Cancellation Req - Enquiry ']");
this.btnAuthoriseCancellationRequestsButton = page.locator("//a[text()=' Authorise Cancellation Requests ']");
this.btnDeleteUnapprovedOutwardCancellationsButton = page.locator("//a[text()=' Delete Unapproved Outward Cancellations ']");

// CC Cancellation Requests
this.ddlCcCancellationRequestsDropdown = page.locator("//span[contains(text(),'CC Cancellation Requests')]");

// CC Outward Cancellation Requests
this.ddlCcOutwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Outward Cancellation Requests')]");
this.btnCcBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Bank Initiated Cancellation Request ')]");
this.btnCcCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Customer Initiated Cancellation Request ')]");
this.btnCcAuthoriseOutwardCancellationRequestButton = page.locator("//a[text()=' Authorise Outward Cancellation Request ']");
this.btnCcDeleteUnapprovedCancellationRequestsButton = page.locator("//a[contains(text(),'Delete Unapproved Cancellation Requests')]");
this.btnCcOutwardCancellationRequestViewStatusButton = page.locator("//a[text()=' Outward Cancellation Req - View Status ']");

// CC Inward Cancellation Requests
this.ddlCcInwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Inward Cancellation Requests')]");
this.btnCcInwardCancellationReqManualActionButton = page.locator("//a[text()=' Inward Cancellation Req - Manual Action ']");
this.btnCcInwardCancellationReqViewStatusButton = page.locator("//a[text()=' Inward Cancellation Req-View status ']");

// Return Cancellation Requests
this.ddlReturnCancellationRequestsDropdown = page.locator("//span[contains(text(),'Return Cancellation Requests')]");

// Return Outward Cancellation Requests
this.ddlReturnOutwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Outward Cancellation Requests')]");
this.btnReturnBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Bank Initiated Cancellation Request ')]");
this.btnReturnCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),' Customer Initiated Cancellation Request ')]");
this.btnReturnAuthoriseOutwardCancellationRequestButton = page.locator("//a[text()=' Authorise Outward Cancellation Request ']");
this.btnReturnDeleteUnapprovedCancellationRequestsButton = page.locator("//a[contains(text(),'Delete Unapproved Cancellation Requests')]");
this.btnReturnOutwardCancellationRequestViewStatusButton = page.locator("//a[text()=' Outward Cancellation Req - View Status ']");

// Return Inward Cancellation Requests
this.ddlReturnInwardCancellationRequestsDropdown = page.locator("//span[contains(text(),'Inward Cancellation Requests')]");
this.btnReturnInwardCancellationReqManualActionButton = page.locator("//a[text()=' Inward Cancellation Req - Manual Action ']");
this.btnReturnInwardCancellationReqViewStatusButton = page.locator("//a[text()=' Inward Cancellation Req-View status ']");

// CT DD CC Cancellation
this.ddlCtDDCCCancellationDropdown = page.locator("//span[text()=' CT DD CC Cancellation ']");
this.btnAwaitingDistributionToClearingButton = page.locator("//a[text()=' Awaiting Distribution To Clearing ']");
this.btnCancelBeforeDistributionToClearingButton = page.locator("//a[text()=' Cancel Before Distribution To Clearing ']");

// Cancellation Of Return
this.ddlCancellationOfReturnDropdown = page.locator("//span[text()=' Cancellation Of Return ']");
this.btnCancellationOfReturnBeforeDistributionButton = page.locator("//a[text()=' Cancel Before Distribution To Clearing ']");

// RTGS Cancellations
this.ddlRtgsCancellationsDropdown = page.locator("//span[contains(text(),'RTGS Cancellations')]");

// RTGS Create Cancellation Requests
this.ddlCreateRTGSCancellationRequestsDropdown = page.locator("//span[contains(text(),'Create RTGS Cancellation Requests')]");
this.btnRtgsCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Customer Initiated Cancellation Request')]");
this.btnRtgsBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Bank Initiated Cancellation Request')]");
this.btnRtgsAuthoriseOutwardCancellationRequestButton = page.locator("//a[text()=' Authorise Outward Cancellation Request ']");
this.btnRtgsDeleteUnapprovedCancellationRequestButton = page.locator("//a[text()=' Delete Unapproved Cancellation Request ']");
this.btnRtgsInwardCancellationReqRequireManualActionButton = page.locator("//a[text()=' Inward Cancellation Req - Require Manual Action ']");
this.btnRtgsInwardCancellationRequestViewStatusButton = page.locator("//a[text()=' Inward Cancellation Req - View Status ']");
this.btnRtgsOutwardCancellationRequestPendingResponseButton = page.locator("//a[text()=' Outward Cancellation Req - Pending Response ']");
this.btnRtgsOutwardCancellationReqNetworkClearingRejectedButton = page.locator("//a[text()=' Outward Cancellation Req - Network/Clearing Rejected ']");
this.btnRtgsOutwardCancellationRequestViewStatusButton = page.locator("//a[text()=' Outward Cancellation Req - View Status ']");
this.btnRoiClearingRejectedViewStatusButton = page.locator("//a[text()=' ROI Clearing Rejected - View Status ']");
this.btnAuthoriseInwardCancellationRequestsButton = page.locator("//a[text()=' Authorise Inward Cancellation Requests ']");
// RTGS DD Cancellation
this.ddlRtgsDDCancellationsDropdown = page.locator("//span[contains(text(),'RTGS DD Cancellation')]");
this.btnInitiateRTGSDDCancellationButton = page.locator("//a[text()=' Initiate RTGS DD Cancellation ']");
this.btnAuthorizeRTGSDDCancellationsButton = page.locator("//a[text()=' Authorize RTGS DD Cancellations ']");
this.btnDeleteUnapprovedRTGSDDCancellationsButton = page.locator("//a[text()=' Delete Unapproved RTGS DD Cancellations ']");

// SWIFT ISO Cancellations
this.ddlSwiftISOCancellationsDropdown = page.locator("//span[contains(text(),'SWIFT ISO Cancellations')]");

// SWIFT ISO Create Cancellation Requests
this.ddlSwiftIsoCreateCancellationRequestsDropdown = page.locator("//span[contains(text(),'Create Cancellation Requests')]");
this.btnSwiftIsoCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Customer Initiated Cancellation Request')]");
this.btnSwiftIsoBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Bank Initiated Cancellation Request')]");
this.btnSwiftIsoApproveOutwardCancellationRequestButton = page.locator("//a[text()=' Approve Outward Cancellation Request ']");
this.btnSwiftIsoDeleteUnapprovedOutwardCancellationRequestButton = page.locator("//a[text()=' Delete Unapproved Outward Cancellation Request ']");
this.btnSwiftIsoCreateCancellationAdviceForNoticeToReceiveButton = page.locator("//a[text()=' Create Cancellation Advice For Notice To Receive ']");
this.btnSwiftIsoAuthorizeCancellationAdviceForNoticeToReceiveButton = page.locator("//a[text()=' Authorize Cancellation Advice For Notice To Receive ']");
this.btnSwiftIsoInwardCancellationReqRequireManualActionButton = page.locator("//a[text()=' Inward Cancellation Req - Require Manual Action ']");
this.btnSwiftIsoAuthoriseInwardCancellationRequestsButton = page.locator("//a[text()=' Authorise Inward Cancellation Requests ']");
this.btnSwiftIsoInwardCancellationReqViewStatusButton = page.locator("//a[text()=' Inward Cancellation Req - View Status ']");
this.btnSwiftIsoOutwardCancellationRequestPendingResponseButton = page.locator("//a[text()=' Outward Cancellation Req - Pending Response ']");
this.btnSwiftIsoOutwardCancellationReqNetworkClearingRejectedButton = page.locator("//a[text()=' Outward Cancellation Req - Network/Clearing Rejected ']");
this.btnSwiftIsoOutwardCancellationRequestViewStatusButton = page.locator("//a[text()=' Outward Cancellation Req - View Status ']");
this.btnSwiftIsoViewCustomerCancellationRequestsButton = page.locator("//a[text()=' View Customer Cancellation Requests ']");
this.btnSwiftIsoCustomerCancellationReqRequireManualActionButton = page.locator("//a[text()=' Customer Cancellation Req - Require Manual Action ']");
this.btnSwiftIsoAuthoriseCustomerCancellationRequestButton = page.locator("//a[text()=' Authorise Customer Cancellation Request ']");

// Investigations
this.ddlInvestigationsDropdown = page.locator("//span[contains(text(),'Investigations')]");

// Payment Investigations Queries Answers
this.ddlPaymentInvestigationsQueriesAnswersDropdown = page.locator("//span[contains(text(),'Queries/Answers')]");
this.btnSendAQueryButton = page.locator("//a[text()=' Send A Query ']");
this.btnViewSentQueriesButton = page.locator("//a[text()=' View Sent Queries ']");
this.btnAnswerAQueryButton = page.locator("//a[text()=' Answer A Query ']");
this.btnViewAnswersButton = page.locator("//a[text()=' View Answers ']");

// Investigations Free Format Messages
this.ddlInvestigationsFreeFormatMsgsDropdown = page.locator("//span[contains(text(),'Free Format Messages')]");
this.btnSendFreeFormatMessageButton = page.locator("//a[text()=' Send Free Format Message ']");
this.btnViewFreeFormatMessageButton = page.locator("//a[text()=' View Free Format Message ']");

// Claims And Investigations SEPA CT
this.ddlClaimsAndInvestigationsSEPACTDropdown = page.locator("//span[contains(text(),'Claims and Investigations')]");

// Claim Of Non Receipt
this.ddlClaimOfNonReceiptDropdown = page.locator("//span[contains(text(),'Claim Of Non Receipt')]");

// Outward Claims For Non Receipt
this.ddlOutwardClaimsForNonReceiptDropdown = page.locator("//span[contains(text(),'Outward Claims For Non-Receipt')]");
this.btnCreateOutwardClaimButton = page.locator("//a[text()=' Create Outward Claim ']");
this.btnAuthoriseDeleteOutwardClaimsButton = page.locator("//a[text()=' Authorise/Delete Outward Claims ']");
this.btnViewOutwardClaimsButton = page.locator("//a[text()=' View Outward Claims ']");
this.btnClearingRejectedOutwardClaimsButton = page.locator("//a[text()=' Clearing Rejected Outward Claims ']");
this.btnUnmatchedOutwardClaimResolutionButton = page.locator("//a[text()=' Unmatched Outward Claim Resolution ']");
this.btnRequestStatusUpdateForOutwardClaimsButton = page.locator("//a[text()=' Request Status Update For Outward Claims ']");

// Inward Claims For Non Receipt
this.ddlInwardClaimsForNonReceiptDropdown = page.locator("//span[contains(text(),'Inward Claims For Non-Receipt')]");
this.btnViewInwardClaimsButton = page.locator("//a[text()=' View Inward Claims ']");
this.btnInwardClaimsRequireManualActionButton = page.locator("//a[text()=' Inward Claims Require Manual Action ']");
this.btnAuthoriseDeleteInwardClaimsButton = page.locator("//a[text()=' Authorise/Delete Inward Claims ']");
this.btnUnmatchedInwardClaimsButton = page.locator("//a[text()=' Unmatched Inward Claims ']");
this.btnUnmatchedInwardRequestForStatusUpdateButton = page.locator("//a[text()=' Unmatched Inward Request For Status Update ']");

// Request To Modify Payment Date
this.ddlRequestToModifyPaymentDateDropdown = page.locator("//span[contains(text(),'Request To Modify Payment Date')]");

// Outward Requests To Modify Date
this.ddlOutwardRequestsToModifyDateDropdown = page.locator("//span[contains(text(),'Outward Requests To Modify Date')]");
this.btnCreateOutwardRequestButton = page.locator("//a[text()=' Create Outward Request ']");
this.btnAuthoriseDeleteOutwardRequestsButton = page.locator("//a[text()=' Authorise/Delete Outward Requests ']");
this.btnViewOutwardRequestsButton = page.locator("//a[text()=' View Outward Requests ']");
this.btnClearingRejectedOutwardRequestsButton = page.locator("//a[text()=' Clearing Rejected Outward Requests ']");
this.btnInitiateStatusUpdateForOutwardRequestsButton = page.locator("//a[text()=' Initiate Status Update For Outward Requests ']");

// Inward Requests To Modify Date
this.ddlInwardRequestsToModifyDateDropdown = page.locator("//span[contains(text(),'Inward Requests To Modify Date')]");
this.btnViewInwardRequestsButton = page.locator("//a[text()=' View Inward Requests ']");
this.btnInwardRequestsRequireManualActionButton = page.locator("//a[text()=' Inward Requests Require Manual Action ']");
this.btnAuthoriseDeleteInwardRequestsButton = page.locator("//a[text()=' Authorise/Delete Inward Requests ']");
this.btnUnmatchedInwardRequestsButton = page.locator("//a[text()=' Unmatched Inward Requests ']");
this.btnInwardRequestsUnmatchedRequestForStatusUpdateButton = page.locator("//a[text()=' Unmatched Inward Request For Status Update ']");

// Exceptions And Investigations
this.ddlExceptionsAndInvestigationsDropdown = page.locator("//span[contains(text(),'Exceptions & Investigations')]");

// Outward Investigations
this.ddlOutwardInvestigationsDropdown = page.locator("//span[contains(text(),'Outward Investigations')]");
this.btnSendInvestigationRequestButton = page.locator("//a[text()=' Send Investigation Request ']");
this.btnViewInvestigationRequestButton = page.locator("//a[text()=' View Investigation Request ']");

// Inward Investigations
this.ddlInwardInvestigationsDropdown = page.locator("//span[contains(text(),'Inward Investigations')]");
this.btnInwardInvestigationReqRequireManualActionButton = page.locator("//a[text()=' Inward Investigation Req - Require Manual Action ']");
this.btnViewInwardInvestigationRequestButton = page.locator("//a[text()=' View Inward Investigation Request ']");

// Exceptions
this.ddlExceptionsDropdown = page.locator("//span[contains(text(),'Exceptions')]");
this.btnInvestigationRequestResponseClearingRejectsButton = page.locator("//a[text()=' Investigation Request/Response - Clearing Rejects ']");

// Reversal Of Payments
this.ddlReversalOfPaymentsDropdown = page.locator("//span[contains(text(),'Reversal Of Payments')]");
this.btnReversalOfPaymentsButton = page.locator("//a[text()=' Reversal Of Payments ']");
this.btnReversalOfProcessedDirectDebitsButton = page.locator("//a[text()=' Reversal Of Processed Direct Debits ']");

// Return Reject Payments
this.ddlReturnRejectPaymentsDropdown = page.locator("//span[contains(text(),'Return / Reject Payments')]");
this.btnReturnRejectInwardDirectDebitsButton = page.locator("//a[text()=' Return/Reject Inward Direct Debits ']");
this.btnReturnBookDirectDebitsButton = page.locator("//a[text()=' Return Book Direct Debits ']");
this.btnReturnInwardClearedCHQButton = page.locator("//a[text()=' Return Inward Cleared CHQ ']");
this.btnReturnInwardClearedCHQArchiveButton = page.locator("//a[text()=' Return Inward Cleared CHQ Archive ']");
this.btnReturnCompletedCreditTransfersButton = page.locator("//a[text()=' Return Completed Credit Transfers ']");
this.btnInitiateRtnForTxnSetldWithCOVButton = page.locator("//a[text()=' Initiate Rtn For Txn Setld With COV ']");
this.btnReturnReversalInwardSWIFTMTRTNButton = page.locator("//a[text()=' Return/Reversal Inward SWIFT MT-RTN ']");
this.btnReturnOfSWIFTCompletedCreditTXNButton = page.locator("//a[text()=' Return Of SWIFT Completed Credit TXN ']");
this.btnReturnRejectIsoBankTransferReturnButton = page.locator("//a[text()=' Outgoing ISO Bank Transfer Return ']");
this.btnReturnRejectIsoCustomerTransferReturnButton = page.locator("//a[text()=' Outgoing ISO Customer Transfer Return ']");
this.btnPendingRepairTxnCancelReqRcvdButton = page.locator("//a[text()=' Pending Repair Txn Cancel Req Rcvd ']");
this.btnUpdateUserStatusButton = page.locator("//a[text()=' Update User Status ']");
this.btnAuthoriseUserStatusUpdateButton = page.locator("//a[text()=' Authorise User Status Update ']");
this.btnCaseAssignmentButton = page.locator("//a[text()=' Case Assignment ']");

// Payment Approvals
this.DDLPaymentApprovals = page.locator("//span[contains(text(),'Payment Approvals')]");

// Authorise Pending Payments
this.DDLAuthorisePendingPayments = page.locator("//span[contains(text(),'Authorise Pending Payments')]");

// Auth Order Entry Repair Payments
this.DDLAuthOrderEntryRepairPayments = page.locator("//span[contains(text(),'Order Entry')]");
this.BTNPendingAuthorisePayments = page.locator("//a[text()=' Pending Authorise Payments ']");

// Authorise DD Mandate Verification
this.DDLAuthoriseDDMandateVerification = page.locator("//span[contains(text(),'DD - Mandate Verification')]");
this.BTNAuthoriseDDMandateVerification = page.locator("//a[text()=' Authorise DD - Mandate Verification ']");

// Authorise Return Reject Direct Debits
this.DDLAuthoriseReturnRejectDirectDebits = page.locator("//span[contains(text(),'Return/Reject Direct Debits')]");
this.BTNAuthoriseReturnRejectDirectDebits = page.locator("//a[text()=' Authorise Return/Reject Direct Debits ']");

// Authorise Cheque Debit Payments
this.DDLAuthoriseChequeDebitPayments = page.locator("//span[contains(text(),'Cheque Debit Payments')]");
this.BTNAuthorisePendingChequeDebitPayments = page.locator("//a[text()=' Authorise Pending Cheque Debit Payments ']");

// Return Inward Cleared CHQ Auth
this.DDLReturnInwardClearedCHQAuth = page.locator("//span[contains(text(),'Return Inward Cleared CHQ')]");
this.BTNReturnInwardClearedCHQAuth = page.locator("//a[text()=' Return Inward Cleared CHQ - Auth ']");

// Authorise Payments Pending For Cover
this.DDLAuthorisePaymentsPendingForCover = page.locator("//span[contains(text(),'Payments Pending For Cover')]");
this.BTNAuthorisePendingPaymentsForCover = page.locator("//a[text()=' Authorise Pending Payments For Cover ']");
this.BTNAuthoriseCoverPaymentsMT202 = page.locator("//a[text()=' Authorise Cover Payments MT202 ']");

// All Transfer Pending Authorise Payments
this.DDLAllTransferPendingAuthorisePayments = page.locator("//span[contains(text(),'All Transfer Pending Authorise Payments')]");
this.BTNAllTransferPendingAuthPymtsLevel1 = page.locator("//a[text()=' All Transfer Pending Auth Payments - Level 1 ']");
this.BTNAllTransferPendingAuthPymtsLevel2 = page.locator("//a[text()=' All Transfer Pending Auth Payments - Level 2 ']");

// Received Files Awaiting Auth
this.DDLReceivedFilesAwaitingAuth = page.locator("//span[contains(text(),'Received Files Awaiting Auth')]");
this.BTNRcvdMsgFileRepUnauthAuth = page.locator("//a[text()=' Rcvd Msg/File Rep Unauth Auth ']");
this.BTNRcvdBulkRepairUnauthListAuth = page.locator("//a[text()=' Rcvd Bulk Repair Unauth List Auth ']");
this.BTNRcvdClaimsUnauthListAuth = page.locator("//a[text()=' Rcvd Claims Unauth List Auth ']");

// Investigation Cancellation Auth
this.DDLInvestigationCancellationAuth = page.locator("//span[contains(text(),'Investigation') and contains(text(),'Cancellation')]");

// SWIFT Cancellation
this.DDLSWIFTCancellation = page.locator("//span[contains(text(),'SWIFT Cancellation')]");

// Authorise Outward Cancellation Request
this.DDLAuthoriseOutwardCancellationRequest = page.locator("//span[contains(text(),'Authorise Outward Cancellation Request')]");
this.BTNAuthoriseCancellationRequest = page.locator("//a[text()=' Authorise Cancellation Request ']");

// Authorise Inward Cancellation Request
this.DDLAuthoriseInwardCancellationRequest = page.locator("//span[contains(text(),'Authorise Inward Cancellation Request')]");
this.BTNAuthoriseAnswers = page.locator("//a[text()=' Authorise Answers ']");
this.BTNAuthoriseFreeFormatMessages = page.locator("//a[text()=' Authorise Free Format Messages ']");
this.BTNAuthorizeGSRPResponseCamt056 = page.locator("//a[contains(text(),'Authorize GSRP Response')]");
this.BTNInwardReturnOfRedirectPaymentRcvdViaCOV = page.locator("//a[contains(text(),'Inward Return of Redirect Payment')]");

// Payment Investigations
this.DDLPaymentInvestigations = page.locator("//span[contains(text(),'Payment Investigations')]");

// Authorise Queries Answers
this.DDLAuthoriseQueriesAnswers = page.locator("//span[contains(text(),'Queries') and contains(text(),'Answers')]");
this.BTNAuthoriseAQuery = page.locator("//a[text()=' Authorise A Query ']");
this.BTNAuthoriseAnAnswer = page.locator("//a[text()=' Authorise An Answer ']");

// Authorise Free Format Messages
this.DDLAuthoriseFreeFormatMessagesPI = page.locator("//span[contains(text(),'Free Format Messages')]");
this.BTNAuthoriseFreeFormatMessage = page.locator("//a[text()=' Authorise Free Format Message ']");

// Authorise Exceptions Investigations
this.DDLAuthoriseExceptionsInvestigations = page.locator("//span[contains(text(),'Exceptions') and contains(text(),'Investigations')]");
this.BTNAuthoriseOutwardInvestigation = page.locator("//a[text()=' Authorise Outward Investigation ']");
this.BTNAuthoriseInwardInvestigation = page.locator("//a[text()=' Authorise Inward Investigation ']");

// CT DD CC Cancellation Auth
this.DDLCTDDCCCancellationAuth = page.locator("//span[contains(text(),'CT DD CC Cancellation')]");
this.BTNAwaitingDistributionToClearingAuth = page.locator("//a[text()=' Awaiting Distribution To Clearing - Auth ']");
this.BTNCancelBeforeDistributionToClearingAuth = page.locator("//a[text()=' Cancel Before Distribution To Clearing - Auth ']");

// Cancellation Of Return Auth
this.DDLCancellationOfReturnAuth = page.locator("//span[contains(text(),'Cancellation Of Return')]");
this.BTNCancellationOfReturnBeforeDistribution = page.locator("//a[text()=' Cancellation Of Return Before Distribution ']");

// Return Reject SWIFT Transfers
this.DDLReturnRejectSWIFTTransfers = page.locator("//span[contains(text(),'Return') and contains(text(),'SWIFT')]");
this.BTNReturnRejectSWIFTTransfers = page.locator("//a[text()=' Return Reject SWIFT Transfers ']");
this.BTNReturnOfSWIFTCompletedCreditTXN = page.locator("//a[text()=' Return Of SWIFT Completed Credit TXN ']");

// Authorise Warehouse Payments
this.DDLAuthoriseWarehousePayments = page.locator("//span[contains(text(),'Warehouse Payments')]");
this.BTNWarehousePaymentsUnauthorisedList = page.locator("//a[text()=' Warehouse Payments Unauthorised List ']");

// Authorise Release Parked Payments
this.DDLAuthoriseReleaseParkedPayments = page.locator("//span[contains(text(),'Release Parked Payments')]");
this.BTNReleaseParkedPaymentsApprove = page.locator("//a[text()=' Release Parked Payments Approve ']");
this.BTNReleaseParentParkedPymtsApprove = page.locator("//a[text()=' Release Parent Parked Payments Approve ']");

// Authorise Payment Reversal
this.DDLAuthorisePaymentReversal = page.locator("//span[contains(text(),'Payment Reversal')]");
this.BTNAuthoriseRejectReversalOfPayments = page.locator("//a[text()=' Authorise Reject Reversal Of Payments ']");

// Clrg Status Report Exceptions Auth
this.DDLClrgStatusReportExceptionsAuth = page.locator("//span[contains(text(),'Status Report Exceptions')]");
this.BTNFileLevelExceptionAuth = page.locator("//a[text()=' File Level Exception Auth ']");
this.BTNBulkLevelExceptionAuth = page.locator("//a[text()=' Bulk Level Exception Auth ']");
this.BTNTxnLevelExceptionAuth = page.locator("//a[text()=' Txn Level Exception Auth ']");

// Manual Funds Authorisation
this.DDLManualFundsAuthorisation = page.locator("//span[contains(text(),'Manual Funds Authorisation')]");

// Requests For Pending Approval
this.DDLRequestsForPendingApproval = page.locator("//span[contains(text(),'Requests For Pending Approval')]");
this.BTNPendingApproval2Eyes = page.locator("//a[text()=' Pending Approval 2 Eyes ']");
this.BTNPendingApproval4Eyes = page.locator("//a[text()=' Pending Approval 4 Eyes ']");
this.BTNPendingAuthorise = page.locator("//a[text()=' Pending Authorise ']");
this.BTNViewAuthorisationHistory = page.locator("//a[text()=' View Authorisation History ']");

// Manual Filter Payments
this.DDLManualFilterPayments = page.locator("//span[contains(text(),'Manual Filter Payments')]");
this.BTNManualFilterPaymentsUnauthLevel1 = page.locator("//a[text()=' Manual Filter Payments Unauth Level 1 ']");
this.BTNManualFilterPaymentsUnauthLevel2 = page.locator("//a[text()=' Manual Filter Payments Unauth Level 2 ']");

// Standing Orders
this.DDLStandingOrders = page.locator("//span[contains(text(),'Standing Orders')]");
this.BTNAuthoriseFixedStandingOrders = page.locator("//a[text()=' Authorise Fixed Standing Orders ']");

// Authorise SWIFTOUT RTGS Exceptions
this.DDLAuthoriseSWIFTOUTRTGSExceptions = page.locator("//span[contains(text(),'SWIFTOUT') and contains(text(),'RTGS')]");
this.BTNAuthoriseSWIFTOUTRTGSExceptions = page.locator("//a[text()=' Authorise SWIFTOUT RTGS Exceptions ']");

// Risk Filter Breach Queue
this.DDLRiskFilterBreachQueue = page.locator("//span[contains(text(),'Risk Filter Breach Queue')]");
this.BTNApproveRejectRiskFilterBreachAuth1 = page.locator("//a[text()=' Approve Reject Risk Filter Breach Auth1 ']");
this.BTNApproveRejectRiskFilterBreachAuth2 = page.locator("//a[text()=' Approve Reject Risk Filter Breach Auth2 ']");

// Authorise Return Credit Transfers
this.DDLAuthoriseReturnCreditTransfers = page.locator("//span[contains(text(),'Return Credit Transfers')]");
this.BTNAuthoriseReturnCreditTransfers = page.locator("//a[text()=' Authorise Return Credit Transfers ']");

// Authorise SWIFT ISO Exceptions
this.DDLAuthoriseSWIFTISOExceptions = page.locator("//span[contains(text(),'SWIFT ISO Exceptions')]");
this.BTNAuthoriseSWIFTISOExceptions = page.locator("//a[text()=' Authorise SWIFT ISO Exceptions ']");

// Authorise RTGS Exceptions
this.DDLAuthoriseRTGSExceptions = page.locator("//span[contains(text(),'RTGS Exceptions')]");
this.BTNAuthoriseRTGSExceptions = page.locator("//a[text()=' Authorise RTGS Exceptions ']");

// Instant Payments
this.ddlInstantPaymentsDropdown = page.locator("//span[contains(text(),'Instant Payments')]");

// Investigation And Reversal
this.ddlInvestigationAndReversalDropdown = page.locator("//span[contains(text(),'Investigation and Reversal')]");

// Unconfirmed Instant Payments
this.ddlUnconfirmedInstantPaymentsDropdown = page.locator("//span[contains(text(),'Unconfirmed Instant Payments')]");
this.btnUnconfirmedExpTimeOutAllButton = page.locator("//a[text()=' Unconfirmed - Exp Time Out All ']");
this.btnInwardInvestigationRepairButton = page.locator("//a[text()=' Inward Investigation - Repair ']");
this.btnReversedInwardPaymentsButton = page.locator("//a[text()=' Reversed Inward Payments ']");

// Instant Payments Cancellations
this.ddlInstantPaymentsCancellationsDropdown = page.locator("//span[contains(text(),'Instant Payments Cancellations')]");

// Instant Create Cancellation Request
this.ddlInstantCreateCancellationRequestDropdown = page.locator("//span[contains(text(),'Create Cancellation Request')]");
this.btnInstantBankInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Bank Initiated Cancellation Request')]");
this.btnInstantCustomerInitiatedCancellationRequestButton = page.locator("//a[contains(text(),'Customer Initiated Cancellation Request')]");
this.btnInstantBulkBankInitiatedCancellationRequestButton = page.locator("//a[text()=' Bulk Bank Initiated Cancellation Request ']");
this.btnInstantAuthBulkCancellationReqInButton = page.locator("//a[text()=' Auth Bulk Cancellation Req - In ']");
this.btnInstantAuthoriseOutwardCancellationRequestButton = page.locator("//a[text()=' Authorise Outward Cancellation Request ']");
this.btnInstantAuthBulkCancellationReqOutButton = page.locator("//a[text()=' Auth Bulk Cancellation Req - Out ']");
this.btnInstantDeleteUnapprovedCancellationRequestsButton = page.locator("//a[contains(text(),'Delete Unapproved Cancellation Requests')]");
this.btnInstantInwardCancellationReqRepairButton = page.locator("//a[text()=' Inward Cancellation Req - Repair ']");
this.btnInstantInwardCancellationReqEnquiryButton = page.locator("//a[text()=' Inward Cancellation Req - Enquiry ']");
this.btnInstantInwardCancellationReqAuthDelButton = page.locator("//a[text()=' Inward Cancellation Req - Auth/Del ']");
this.btnInstantUnmatchedInRequestStatusUpdateButton = page.locator("//a[text()=' Unmatched In Request - Status Update ']");
this.btnInstantPendingCancellationsReqUpdateButton = page.locator("//a[text()=' Pending Cancellations Req - Update ']");
this.btnInstantOutwardCancellationReqViewStatusButton = page.locator("//a[text()=' Outward Cancellation Req - View Status ']");
this.btnInstantCancellationReqIPNotProcessedButton = page.locator("//a[text()=' Cancellation Req IP - Not Processed ']");
this.btnInstantCancellationReqIPViewStatusButton = page.locator("//a[text()=' Cancellation Req IP - View Status ']");
this.btnInstantOutgoingCancellationReqUpdateButton = page.locator("//a[text()=' Outgoing Cancellation Req - Update ']");
this.btnUnauthorisedEBQAQueriesButton = page.locator("//a[text()=' Unauthorised EBQA Queries ']");

// Same Day Instant Payment Enquiry
this.ddlSameDayInstPaymentEnquiryDropdown = page.locator("//span[contains(text(),'Same Day Inst Payment Enquiry')]");
this.btnPendingProcessedPaymentsCurrDateButton = page.locator("//a[text()=' Pending/Processed Payments Curr Date ']");

// Pending Processed Instant Payments
this.ddlPendingProcessedInstantPaymentsDropdown = page.locator("//span[contains(text(),'Pending Processed Instant Payments')]");
this.btnPendingProcessedInstPaymentsButton = page.locator("//a[text()=' Pending/Processed Instant Payments ']");

// Pending Processed UK FPS Payments
this.ddlPendingProcessedUKFPSPaymentsDropdown = page.locator("//span[contains(text(),'Pending Processed UK FPS Payments')]");
this.btnPendingAndProcessedUKFPSPaymentsButton = page.locator("//a[text()=' Pending And Processed UK FPS Payments ']");

// Instant Payments Unresolved Posting
this.ddlInstantPaymentsUnresolvedPostingDropdown = page.locator("//span[contains(text(),'Instant Payments Unresolved Posting')]");
this.btnUnresolvedPostingFailuresButton = page.locator("//a[text()=' Unresolved Posting Failures ']");

// Action Unconfirmed Instant Payments
this.ddlActionUnconfirmedInstantPaymentsDropdown = page.locator("//span[contains(text(),'Action Unconfirmed Instant Payments')]");
this.btnUnconfirmedInstantOutgoingPaymentButton = page.locator("//a[text()=' Unconfirmed Instant Outgoing Payment ']");
this.btnUnconfirmedInstantIncomingPaymentButton = page.locator("//a[text()=' Unconfirmed Instant Incoming Payment ']");
this.btnUnconfirmedOutgoingReturnPaymentButton = page.locator("//a[text()=' Unconfirmed Outgoing Return Payment ']");
this.btnUnconfirmedIncomingReturnPaymentButton = page.locator("//a[text()=' Unconfirmed Incoming Return Payment ']");
this.btnAuthoriseUnconfirmedInstantPaymentsButton = page.locator("//a[text()=' Authorise Unconfirmed Instant Payments ']");

// Miscellaneous Payment Messages
this.ddlMiscellaneousPaymentMessagesDropdown = page.locator("//span[contains(text(),'Miscellaneous Payment Messages')]");

this.btnRequestForTransferMT101Button = page.locator("//a[contains(text(),'Request For Transfer MT101')]");
this.btnAuthoriseDeleteMT101Button = page.locator("//a[contains(text(),'Authorise/Delete MT101')]");

this.btnCreateStopPaymentOfChequeOutwardMT111Button = page.locator("//a[contains(text(),'Create Stop Payment Of Cheque Outward MT111')]");
this.btnCreateStopPaymentOfChequeOutwardGenericButton = page.locator("//a[contains(text(),'Create Stop Payment Of Cheque Outward Generic')]");
this.btnAuthoriseDeleteStopPaymentOfChequesSentButton = page.locator("//a[contains(text(),'Authorise/Delete Stop Payment Of Cheques Sent')]");
this.btnViewAmendUnauthorisedStopPaymentRequestsSentButton = page.locator("//a[contains(text(),'View/Amend Unauthorised Stop Payment Requests Sent')]");
this.btnViewStopPaymentRequestsOutwardButton = page.locator("//a[contains(text(),'View Stop Payment Requests Outward')]");

this.btnCreateReceivedStopRequestStatusGenericButton = page.locator("//a[contains(text(),'Create Received Stop Request Status Generic')]");
this.btnViewAmendUnauthorisedStopRequestStatusReceivedButton = page.locator("//a[contains(text(),'View/Amend Unauthorised Stop Request Status Received')]");
this.btnAuthoriseDeleteStopRequestStatusReceivedButton = page.locator("//a[contains(text(),'Authorise/Delete Stop Request Status Received')]");
this.btnViewStopRequestStatusReceivedButton = page.locator("//a[contains(text(),'View Stop Request Status Received')]");

this.btnAdviceOfChargesMT190MT290Button = page.locator("//a[contains(text(),'Advice Of Charges MT190 MT290')]");
this.btnAuthoriseDeleteMT190290Button = page.locator("//a[contains(text(),'Authorise/Delete MT190/290')]");

this.btnRequestForChargesMT191MT291Button = page.locator("//a[contains(text(),'Request For Charges MT191 MT291')]");
this.btnAuthoriseDeleteMT191MT291Button = page.locator("//a[contains(text(),'Authorise/Delete MT191/291')]");

this.btnSendFreeFormatMessageMTn99Button = page.locator("//a[contains(text(),'Send Free Format Message MTn99')]");
this.btnAuthoriseDeleteMT199MT299MT999Button = page.locator("//a[contains(text(),'Authorise/Delete MT199 MT299 MT999')]");

this.btnSendCancellationMessageMTn92Button = page.locator("//a[contains(text(),'Send Cancellation Message MTn92')]");
this.btnAuthoriseDeleteMT192MT292MT992Button = page.locator("//a[contains(text(),'Authorise/Delete MT192 MT292 MT992')]");

this.btnSendQueryMessagesMT195MT295MT995Button = page.locator("//a[contains(text(),'Send Query Messages MT195 MT295 MT995')]");
this.btnAuthoriseDeleteMT195MT295MT995Button = page.locator("//a[contains(text(),'Authorise/Delete MT195 MT295 MT995')]");

this.btnSendAnswerMessagesMT196MT296MT996Button = page.locator("//a[contains(text(),'Send Answer Messages MT196 MT296 MT996')]");
this.btnAuthoriseDeleteMT196MT296MT996Button = page.locator("//a[contains(text(),'Authorise/Delete MT196 MT296 MT996')]");

// Enquiries
this.ddlEnquiriesDropdown = page.locator("//span[contains(text(),'Enquiries')]");
this.btnMT101RequestButton = page.locator("//a[contains(text(),'MT101 Request')]");
this.btnMT111RequestButton = page.locator("//a[contains(text(),'MT111 Request')]");
this.btnStatusOfStopPaymentRequestMT112Button = page.locator("//a[contains(text(),'Status Of Stop Payment Request MT112')]");
this.btnChargeRequestButton = page.locator("//a[contains(text(),'Charge Request')]");
this.btnFreeMessagesButton = page.locator("//a[contains(text(),'Free Messages')]");
this.btnQueriesAnswersButton = page.locator("//a[contains(text(),'Queries Answers')]");
this.btnListOfClaimsGeneratedAutomaticallyButton = page.locator("//a[contains(text(),'List Of Claims Generated Automatically')]");

this.btnSwiftConfirmationTrackerButton = page.locator("//a[contains(text(),'SWIFT Confirmation Tracker')]");
this.btnActionOnUnpaidClaimsButton = page.locator("//a[contains(text(),'Action On Unpaid Claims')]");
this.btnAuthoriseDeleteUnpaidClaimsButton = page.locator("//a[contains(text(),'Authorise/Delete Unpaid Claims')]");

// Direct Debit Mandates
this.ddlDirectDebitMandatesDropdown = page.locator("//span[contains(text(),'Direct Debit Mandates')]");
this.btnDdManagementButton = page.locator("//a[contains(text(),'DD Management')]");

// Nostro/Vostro Accounts
this.ddlNostroVostroAccountsDropdown = page.locator("//span[contains(text(),'Nostro/Vostro Accounts')]");
this.btnOpenVostroAccountButton = page.locator("//a[contains(text(),'Open Vostro Account')]");
this.btnOpenNostroAccountButton = page.locator("//a[contains(text(),'Open Nostro Account')]");
this.btnAmendVostroNostroAccountButton = page.locator("//a[contains(text(),'Amend Vostro/Nostro Account')]");
this.btnAuthoriseVostroNostroAccountButton = page.locator("//a[contains(text(),'Authorise Vostro/Nostro Account')]");
this.btnNostroBalancePositionButton = page.locator("//a[contains(text(),'Nostro Balance Position')]");

// Beneficiary Details
this.ddlBeneficiaryDetailsDropdown = page.locator("//span[contains(text(),'Beneficiary Details')]");
this.btnBeneficiaryDetailsButton = page.locator("//a[contains(text(),'Beneficiary Details')]");

// Drafts Inventory
this.ddlDraftsInventoryDropdown = page.locator("//span[contains(text(),'Drafts Inventory')]");
this.btnReceiptOfStockButton = page.locator("//a[contains(text(),'Receipt Of Stock')]");
this.btnAuthoriseDeleteReceiptOfStockButton = page.locator("//a[contains(text(),'Authorise/Delete Receipt Of Stock')]");
this.btnDraftInventoryStopPaymentForDraftsButton = page.locator("//a[contains(text(),'Stop Payment For Drafts')]");
this.btnAuthoriseDeleteStopPaymentOfDraftsButton = page.locator("//a[contains(text(),'Authorise/Delete Stop Payment Of Drafts')]");
this.btnDraftInventoryRevokeStopPaymentOfDraftButton = page.locator("//a[contains(text(),'Revoke Stop Payment Of Draft')]");
this.btnAuthoriseDeleteRevokeStopPaymentOfDraftButton = page.locator("//a[contains(text(),'Authorise/Delete Revoke Stop Payment Of Draft')]");

// Expected Receipts
this.ddlExpectedReceiptsDropdown = page.locator("//span[contains(text(),'Expected Receipts')]");

// Expected Receipts Creation
this.ddlExpectedReceiptsCreationDropdown = page.locator("//span[contains(text(),'Expected Receipts Creation')]");
this.btnCreateMT210ExpectedReceiptButton = page.locator("//a[contains(text(),'Create MT210 Expected Receipt')]");
this.btnCreateCamt057ExpectedReceiptButton = page.locator("//a[contains(text(),'Create CAMT057 Expected Receipt')]");
this.btnExpectedReceiptsManualButton = page.locator("//a[contains(text(),'Expected Receipts Manual')]");
this.btnAuthDelExpectedReceiptItemButton = page.locator("//a[contains(text(),'Auth/Del Expected Receipt Item')]");
this.btnCreateCamt058ExpectedReceiptButton = page.locator("//a[contains(text(),'Create CAMT058 Expected Receipt')]");

// Expected Receipts Enquiries
this.ddlExpectedReceiptsEnquiriesDropdown = page.locator("//span[contains(text(),'Expected Receipts Enquiries')]");
this.btnExpectedBalanceProjectionButton = page.locator("//a[contains(text(),'Expected Balance Projection')]");
this.btnExpiredRecordsButton = page.locator("//a[contains(text(),'Expired Records')]");
this.btnProjectedCashFlowButton = page.locator("//a[contains(text(),'Projected Cash Flow')]");
this.btnExpectedCancelAndReceiptsUnmatchedItemsButton = page.locator("//a[contains(text(),'Expected Cancel And Receipts Unmatched Items')]");
this.btnExpectedCancelAndReceiptsMatchedItemsButton = page.locator("//a[contains(text(),'Expected Cancel And Receipts Matched Items')]");
this.btnExpectedReceiptsInExceptionButton = page.locator("//a[contains(text(),'Expected Receipts In Exception')]");

// Payment & Cover
this.ddlPaymentAndCoverDropdown = page.locator("//span[contains(text(),'Payment & Cover')]");
this.btnStartManualMatchingButton = page.locator("//a[contains(text(),'Start Manual Matching')]");
this.btnAuthoriseDeletePaymentAndCoverItemsButton = page.locator("//a[contains(text(),'Authorise/Delete Payment And Cover Items')]");
this.btnPaymentAndCoverMatchedItemsButton = page.locator("//a[contains(text(),'Payment And Cover Matched Items')]");

// External Request Pending Responses
this.ddlExternalRequestPendingResponsesDropdown = page.locator("//span[contains(text(),'External Request Pending Responses')]");
this.btnAllExternalRequestsButton = page.locator("//a[contains(text(),'All External Requests')]");
this.btnPendingResponsesAcctValidationButton = page.locator("//a[contains(text(),'Pending Responses Acct Validation')]");
this.btnPendingResponsesFundsReservationButton = page.locator("//a[contains(text(),'Pending Responses Funds Reservation')]");
this.btnPendingResponsesCancelReservationButton = page.locator("//a[contains(text(),'Pending Responses Cancel Reservation')]");
this.btnPendingResponsesPostingAcctEntriesButton = page.locator("//a[contains(text(),'Pending Responses Posting Acct Entries')]");
this.btnPendingResponsesReversalAcctEntriesButton = page.locator("//a[contains(text(),'Pending Responses Reversal Acct Entries')]");
this.btnPendingResponsesMandateValidationButton = page.locator("//a[contains(text(),'Pending Responses Mandate Validation')]");
this.btnPendingResponsesMandateModificationButton = page.locator("//a[contains(text(),'Pending Responses Mandate Modification')]");
this.btnUpdateOfMandateLimitButton = page.locator("//a[contains(text(),'Update Of Mandate Limit')]");

// External Request Failed Responses
this.ddlExternalRequestFailedResponsesDropdown = page.locator("//span[contains(text(),'External Request Failed Responses')]");
this.btnFailedResponsesCancelReservationButton = page.locator("//a[contains(text(),'Failed Responses Cancel Reservation')]");
this.btnFailedResponsesReOpenMandateButton = page.locator("//a[contains(text(),'Failed Responses Re-Open Mandate')]");
this.btnFailedResponsesUpdateMandateButton = page.locator("//a[contains(text(),'Failed Responses Update Mandate')]");

// Drawee Bank FCY Drafts Operations
this.ddlDraweeBankFCYDraftsOperationsDropdown = page.locator("//span[contains(text(),'Drawee Bank FCY Drafts Operations')]");
this.btnCreateReceivedAdviceOfChequesMT110Button = page.locator("//a[contains(text(),'Create Received Advice Of Cheques MT110')]");
this.btnCreateReceivedAdviceOfChequesCAMT107Button = page.locator("//a[contains(text(),'Create Received Advice Of Cheques CAMT107')]");
this.btnAuthoriseReceivedAdviceOfChequesButton = page.locator("//a[contains(text(),'Authorise Received Advice Of Cheques')]");
this.btnViewReceivedChequeAdvicesButton = page.locator("//a[contains(text(),'View Received Cheque Advices')]");
this.btnCreateStopPaymentOfChequeInwardMT111Button = page.locator("//a[contains(text(),'Create Stop Payment Of Cheque Inward MT111')]");
this.btnCreateStopPaymentOfChequeInwardGenericButton = page.locator("//a[contains(text(),'Create Stop Payment Of Cheque Inward Generic')]");
this.btnViewRespondUnauthorisedStopPaymentRequestOfChequesButton = page.locator("//a[contains(text(),'View Respond Unauthorised Stop Payment Request Of Cheques')]");
this.btnAuthoriseDeleteRequestResponseStopPaymentOfChequesButton = page.locator("//a[contains(text(),'Authorise/Delete Request Response Stop Payment Of Cheques')]");
this.btnViewRequestResponseStopPaymentOfChequesButton = page.locator("//a[contains(text(),'View Request Response Stop Payment Of Cheques')]");
this.btnViewStopRequestStatusOutwardButton = page.locator("//a[contains(text(),'View Stop Request Status Outward')]");

// Multiple Payments Exception Handling
this.ddlMultiplePaymentsExceptionHandlingDropdown = page.locator("//span[contains(text(),'Multiple Payments Exception Handling')]");
this.btnCancelPaymentsInIntermediateStatusButton = page.locator("//a[contains(text(),'Cancel Payments In Intermediate Status')]");
this.btnAmendParkedPaymentsButton = page.locator("//a[contains(text(),'Amend Parked Payments')]");
this.btnReleaseRepairPaymentsButton = page.locator("//a[contains(text(),'Release Repair Payments')]");
this.btnReleasePaymentsAwaitingExternalRequestsButton = page.locator("//a[contains(text(),'Release Payments Awaiting External Requests')]");

// Input Payment Order
this.ddlInputPaymentOrderDropdown = page.locator("//span[contains(text(),'Input Payment Order')]");
this.btnAccountTransferHomeButton = page.locator("//a[contains(text(),'Account Transfer Home')]");
this.btnAccountTransferOtherButton = page.locator("//a[contains(text(),'Account Transfer Other')]");
this.btnFundingRequestButton = page.locator("//a[contains(text(),'Funding Request')]");
this.btnPLTransferButton = page.locator("//a[contains(text(),'PL Transfer')]");

// Input Payment Order (continued)
this.btnDomesticButton = page.locator("//a[contains(text(),'Domestic')]");
this.btnDomesticPlusButton = page.locator("//a[contains(text(),'Domestic Plus')]");
this.btnInternationalButton = page.locator("//a[contains(text(),'International')]");
this.btnAALoanDisbursementButton = page.locator("//a[contains(text(),'AA Loan Disbursement')]");
this.btnAADepositPaymentsButton = page.locator("//a[contains(text(),'AA Deposit Payments')]");
this.btnSwiftCBPRCustomerTransferButton = page.locator("//a[contains(text(),'SWIFT CBPR Customer Transfer')]");
this.btnSwiftCBPRBankTransferButton = page.locator("//a[contains(text(),'SWIFT CBPR Bank Transfer')]");
this.btnAfricaButton = page.locator("//a[contains(text(),'Africa')]");
this.btnArgentinaButton = page.locator("//a[contains(text(),'Argentina')]");
this.btnAustraliaButton = page.locator("//a[contains(text(),'Australia')]");
this.btnEuropeanUnionButton = page.locator("//a[contains(text(),'European Union')]");
this.btnHongKongButton = page.locator("//a[contains(text(),'Hong Kong')]");
this.btnHungaryButton = page.locator("//a[contains(text(),'Hungary')]");
this.btnItalyButton = page.locator("//a[contains(text(),'Italy')]");
this.btnIsraelButton = page.locator("//a[contains(text(),'Israel')]");
this.btnSaudiArabiaButton = page.locator("//a[contains(text(),'Saudi Arabia')]");
this.btnSriLankaButton = page.locator("//a[contains(text(),'Sri Lanka')]");
this.btnSwitzerlandButton = page.locator("//a[contains(text(),'Switzerland')]");
this.btnUkButton = page.locator("//a[contains(text(),'UK')]");
this.btnUsButton = page.locator("//a[contains(text(),'US')]");
this.btnTunisiaButton = page.locator("//a[contains(text(),'Tunisia')]");
this.btnIndiaButton = page.locator("//a[contains(text(),'India')]");

// Drafts
this.ddlDraftsDropdown = page.locator("//span[contains(text(),'Drafts')]");
this.btnDraftIssueInLocalCurrencyButton = page.locator("//a[contains(text(),'Draft Issue In Local Currency')]");
this.btnDraftIssueInForeignCurrencyButton = page.locator("//a[contains(text(),'Draft Issue In Foreign Currency')]");
this.btnDraftsAwaitingPrintingButton = page.locator("//a[contains(text(),'Drafts Awaiting Printing')]");
this.btnDraftPaymentButton = page.locator("//a[contains(text(),'Draft Payment')]");
this.btnDraftsStopPaymentForDraftsButton = page.locator("//a[contains(text(),'Stop Payment For Drafts')]");
this.btnStopPaymentOfDraftsAuthDelButton = page.locator("//a[contains(text(),'Stop Payment Of Drafts Auth Del')]");
this.btnDraftsRevokeStopPaymentOfDraftButton = page.locator("//a[contains(text(),'Revoke Stop Payment Of Draft')]");
this.btnRevokeStopPaymentAuthDelButton = page.locator("//a[contains(text(),'Revoke Stop Payment Auth Del')]");
this.btnCancellationOfDraftsButton = page.locator("//a[contains(text(),'Cancellation Of Drafts')]");
this.btnSwiftCBPRIssuanceOfForeignCurrencyDraftButton = page.locator("//a[contains(text(),'SWIFT CBPR Issuance Of Foreign Currency Draft')]");

// Amend Payment Order
this.ddlAmendPaymentOrderDropdown = page.locator("//span[contains(text(),'Amend Payment Order')]");
this.btnAmendPaymentOrderButton = page.locator("//a[contains(text(),'Amend Payment Order')]");
this.btnAmendPaymentOrderExceptionButton = page.locator("//a[contains(text(),'Amend Payment Order Exception')]");
this.btnPaymentOrderSTOExceptionButton = page.locator("//a[contains(text(),'Payment Order STO Exception')]");
this.btnPaymentOrderDepositExceptionButton = page.locator("//a[contains(text(),'Payment Order Deposit Exception')]");
this.btnPaymentOrderLoanExceptionButton = page.locator("//a[contains(text(),'Payment Order Loan Exception')]");
this.btnPaymentOrderDrawingsExceptionButton = page.locator("//a[contains(text(),'Payment Order Drawings Exception')]");

// Authorise Delete Payment Order
this.ddlAuthoriseDeletePaymentOrderDropdown = page.locator("//span[contains(text(),'Authorise Delete Payment Order')]");
this.btnAuthoriseDeletePaymentOrderButton = page.locator("//a[contains(text(),'Authorise Delete Payment Order')]");

// Payment Order Notifications
this.ddlPaymentOrderNotificationsDropdown = page.locator("//span[contains(text(),'Payment Order Notifications')]");
this.btnPoNotificationsInputButton = page.locator("//a[contains(text(),'PO Notifications Input')]");
this.btnPoNotificationsExceptionButton = page.locator("//a[contains(text(),'PO Notifications Exception')]");
this.btnPoNotificationsAuthoriseButton = page.locator("//a[contains(text(),'PO Notifications Authorise')]");
this.btnPoNotificationsViewButton = page.locator("//a[contains(text(),'PO Notifications View')]");

// Payment Order Enquiries
this.ddlPaymentOrderEnquiriesDropdown = page.locator("//span[contains(text(),'Payment Order Enquiries')]");
this.btnPaymentOrderEnquiriesButton = page.locator("//a[contains(text(),'Payment Order Enquiries')]");
this.btnTrackPaymentStatusButton = page.locator("//a[contains(text(),'Track Payment Status')]");
this.btnPaymentOrderLiveHistoricalPaymentInformationButton = page.locator("//a[contains(text(),'Live Historical Payment Information')]");
this.btnPaymentOrderFundsDecisionButton = page.locator("//a[contains(text(),'Payment Order Funds Decision')]");

// Recalls And Investigations
this.ddlRecallsAndInvestigationsDropdown = page.locator("//span[contains(text(),'Recalls And Investigations')]");

// Outward Recalls
this.ddlOutwardRecallsDropdown = page.locator("//span[contains(text(),'Outward Recalls')]");
this.btnInitiateRecallButton = page.locator("//a[contains(text(),'Initiate Recall')]");
this.btnViewStatusOfRecallsSentButton = page.locator("//a[contains(text(),'View Status Of Recalls Sent')]");

// Bulk Payments
this.DDLBulkPayments = page.locator("//span[contains(text(),'Bulk Payments')]");
this.BTNBulkFileUpload = page.locator("//a[contains(text(),'Bulk File Upload')]");
this.BTNCaptureNewBulk = page.locator("//a[contains(text(),'Capture New Bulk')]");
this.BTNSubmitCancelBulk = page.locator("//a[contains(text(),'Submit Cancel Bulk')]");
this.BTNAuthorizeRejectBulk = page.locator("//a[contains(text(),'Authorize Reject Bulk')]");
this.BTNViewCancelOrder = page.locator("//a[contains(text(),'View Cancel Order')]");
this.BTNAuthorizeRejectOrder = page.locator("//a[contains(text(),'Authorize Reject Order')]");
this.BTNViewBulkPayments = page.locator("//a[contains(text(),'View Bulk Payments')]");
this.BTNViewCancelWarehousedBulk = page.locator("//a[contains(text(),'View Cancel Warehoused Bulk')]");
this.BTNAuthoriseCancellationOfWarehousedBulk = page.locator("//a[contains(text(),'Authorise Cancellation Of Warehoused Bulk')]");
this.BTNViewBulkPaymentOrders = page.locator("//a[contains(text(),'View Bulk Payment Orders')]");
this.BTNViewBulkFiles = page.locator("//a[contains(text(),'View Bulk Files')]");

// Payment Interface Requests
this.DDLPaymentInterfaceRequests = page.locator("//span[contains(text(),'Payment Interface Requests')]");
this.BTNAccountInquiryDebit = page.locator("//a[contains(text(),'Account Inquiry Debit')]");
this.BTNAccountInquiryCredit = page.locator("//a[contains(text(),'Account Inquiry Credit')]");
this.BTNAccountInquiryDebitCharges = page.locator("//a[contains(text(),'Account Inquiry Debit Charges')]");
this.BTNAccountInquiryCreditCharges = page.locator("//a[contains(text(),'Account Inquiry Credit Charges')]");
this.BTNReserveEntries = page.locator("//a[contains(text(),'Reserve Entries')]");
this.BTNPostingEntries = page.locator("//a[contains(text(),'Posting Entries')]");
this.BTNPostingEntriesWithBalance = page.locator("//a[contains(text(),'Posting Entries With Balance')]");
this.BTNReversePosting = page.locator("//a[contains(text(),'Reverse Posting')]");
this.BTNMandateValidation = page.locator("//a[contains(text(),'Mandate Validation')]");
this.BTNMandateUpdate = page.locator("//a[contains(text(),'Mandate Update')]");
this.BTNMandateReopen = page.locator("//a[contains(text(),'Mandate Reopen')]");
this.BTNCancelReservation = page.locator("//a[contains(text(),'Cancel Reservation')]");
this.BTNAccountCheckFeeInquiryForDebit = page.locator("//a[contains(text(),'Account Check Fee Inquiry For Debit')]");
this.BTNAccountCheckFeeInquiryForCredit = page.locator("//a[contains(text(),'Account Check Fee Inquiry For Credit')]");

}


 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

 // Payments
async clickPaymentsDropdown() {
    await this.ddlPaymentsDropdown.click();
}

// Standing Order
async clickStandingOrderDropdown() {
    await this.ddlStandingOrderDropdown.click();
}

async clickInputStandingOrderDropdown() {
    await this.ddlInputStandingOrderDropdown.click();
}

async clickInputFixedBalanceSTOButton() {
    await this.btnInputFixedBalanceSTOButton.click();
}

// Standing Order MX
async clickStandingOrderMXDropdown() {
    await this.ddlStandingOrderMXDropdown.click();
}

async clickInputStandingOrdersMXButton() {
    await this.btnInputStandingOrdersMXButton.click();
}

async clickAmendViewStandingOrdersMXButton() {
    await this.btnAmendViewStandingOrdersMXButton.click();
}

async clickAmendAuthoriseDeleteUnauthorisedStandingOrdersMXButton() {
    await this.btnAmendAuthoriseDeleteUnauthorisedStandingOrdersMXButton.click();
}

async clickStandingOrdersListButton() {
    await this.btnStandingOrdersListButton.click();
}

async clickAmendUnauthorisedStandingOrdersButton() {
    await this.btnAmendUnauthorisedStandingOrdersButton.click();
}

async clickAuthoriseDeleteUnauthorisedStandingOrdersButton() {
    await this.btnAuthoriseDeleteUnauthorisedStandingOrdersButton.click();
}

async clickListOfInactiveStandingOrdersButton() {
    await this.btnListOfInactiveStandingOrdersButton.click();
}

async clickStandingOrdersExecutionDetailsButton() {
    await this.btnStandingOrdersExecutionDetailsButton.click();
}

async clickViewAmendFailedStandingOrdersButton() {
    await this.btnViewAmendFailedStandingOrdersButton.click();
}

// Payment Hub
async clickPaymentHubDropdown() {
    await this.ddlPaymentHubDropdown.click();
}

// Initiate Payment Transaction
async clickInitiatePaymentTransactionDropdown() {
    await this.ddlInitiatePaymentTransactionDropdown.click();
}

// Initiate Customer Transfer
async clickInitiateCustomerTransferDropdown() {
    await this.ddlInitiateCustomerTransferDropdown.click();
}

async clickCustomerIncomingTransferButton() {
    await this.btnCustomerIncomingTransferButton.click();
}

async clickCustomerOutgoingTransferButton() {
    await this.btnCustomerOutgoingTransferButton.click();
}

async clickCustomerBookTransferButton() {
    await this.btnCustomerBookTransferButton.click();
}

async clickCustomerRedirectTransferButton() {
    await this.btnCustomerRedirectTransferButton.click();
}

// Initiate Bank Transfer
async clickInitiateBankTransferDropdown() {
    await this.ddlInitiateBankTransferDropdown.click();
}

async clickBankIncomingTransferButton() {
    await this.btnBankIncomingTransferButton.click();
}

async clickBankOutgoingTransferButton() {
    await this.btnBankOutgoingTransferButton.click();
}

async clickBankBookTransferButton() {
    await this.btnBankBookTransferButton.click();
}

async clickBankRedirectTransferButton() {
    await this.btnBankRedirectTransferButton.click();
}

async clickOwnAccountTransferMT200Button() {
    await this.btnOwnAccountTransferMT200Button.click();
}

async clickInitiateSEPACreditTransferButton() {
    await this.btnInitiateSEPACreditTransferButton.click();
}

// Initiate Direct Debit
async clickInitiateDirectDebitDropdown() {
    await this.ddlInitiateDirectDebitDropdown.click();
}

async clickDirectDebitInitiationBookButton() {
    await this.btnDirectDebitInitiationBookButton.click();
}

async clickDirectDebitInitiationOutgoingButton() {
    await this.btnDirectDebitInitiationOutgoingButton.click();
}

async clickDirectDebitInitiationOutgoingISOButton() {
    await this.btnDirectDebitInitiationOutgoingISOButton.click();
}

async clickInterbankDirectDebitInitiationOutgoingButton() {
    await this.btnInterbankDirectDebitInitiationOutgoingButton.click();
}

// Initiate ISO Customer Transfer
async clickInitiateISOCustomerTransferDropdown() {
    await this.ddlInitiateISOCustomerTransferDropdown.click();
}

async clickIncomingISOCustomerTransferButton() {
    await this.btnIncomingISOCustomerTransferButton.click();
}

async clickOutgoingISOCustomerTransferButton() {
    await this.btnOutgoingISOCustomerTransferButton.click();
}

async clickInitiateIsoCustomerTransferReturnButton() {
    await this.btnInitiateIsoCustomerTransferReturnButton.click();
}

// Initiate ISO Bank Transfer
async clickInitiateISOBankTransferDropdown() {
    await this.ddlInitiateISOBankTransferDropdown.click();
}

async clickIncomingISOBankTransferButton() {
    await this.btnIncomingISOBankTransferButton.click();
}

async clickOutgoingISOBankTransferButton() {
    await this.btnOutgoingISOBankTransferButton.click();
}

async clickOutgoingISOOwnAccountTransferButton() {
    await this.btnOutgoingISOOwnAccountTransferButton.click();
}

async clickInitiateIsoBankTransferReturnButton() {
    await this.btnInitiateIsoBankTransferReturnButton.click();
}

// Payment Inquiries
async clickPaymentInquiriesDropdown() {
    await this.ddlPaymentInquiriesDropdown.click();
}

// Pending Payments
async clickPendingPaymentsDropdown() {
    await this.ddlPendingPaymentsDropdown.click();
}

async clickPendingRepairPaymentsButton() {
    await this.btnPendingRepairPaymentsButton.click();
}

async clickPendingReprocessPaymentsButton() {
    await this.btnPendingReprocessPaymentsButton.click();
}

// Pending Payment Orders
async clickPendingPaymentOrdersDropdown() {
    await this.ddlPendingPaymentOrdersDropdown.click();
}

async clickPendingOrderEntryPaymentsButton() {
    await this.btnPendingOrderEntryPaymentsButton.click();
}

async clickPendingOrderEntryDirectDebitsButton() {
    await this.btnPendingOrderEntryDirectDebitsButton.click();
}

async clickPendingOrderEntryDirectDebitsInterbankButton() {
    await this.btnPendingOrderEntryDirectDebitsInterbankButton.click();
}

async clickAmendUnauthorisedPaymentsButton() {
    await this.btnAmendUnauthorisedPaymentsButton.click();
}

async clickPendingDDMandateVerificationButton() {
    await this.btnPendingDDMandateVerificationButton.click();
}

async clickPendingChequeDebitPaymentsButton() {
    await this.btnPendingChequeDebitPaymentsButton.click();
}

async clickPendingAutoRepairPaymentsButton() {
    await this.btnPendingAutoRepairPaymentsButton.click();
}

async clickAllTransferPendingRepairPaymentsButton() {
    await this.btnAllTransferPendingRepairPaymentsButton.click();
}

async clickScheduledForReleasePaymentsButton() {
    await this.btnScheduledForReleasePaymentsButton.click();
}

async clickPendingUnmatchedRPaymentsButton() {
    await this.btnPendingUnmatchedRPaymentsButton.click();
}

// Rejected Order Entry Payments
async clickRejectedOrderEntryPaymentsDropdown() {
    await this.ddlRejectedOrderEntryPaymentsDropdown.click();
}

async clickRejectedOrderEntryPaymentsButton() {
    await this.btnRejectedOrderEntryPaymentsButton.click();
}

async clickRejectedOrderEntryDirectDebitsButton() {
    await this.btnRejectedOrderEntryDirectDebitsButton.click();
}

// Pending And Processed Payments
async clickPendingAndProcessedPaymentsDropdown() {
    await this.ddlPendingAndProcessedPaymentsDropdown.click();
}

async clickPaymentsEnquiryPartyWiseButton() {
    await this.btnPaymentsEnquiryPartyWiseButton.click();
}

async clickPaymentsEnquiryTransactionWiseButton() {
    await this.btnPaymentsEnquiryTransactionWiseButton.click();
}

async clickPaymentsEnquiryArchiveTxnsButton() {
    await this.btnPaymentsEnquiryArchiveTxnsButton.click();
}

async clickPendingPaymentsForCoverButton() {
    await this.btnPendingPaymentsForCoverButton.click();
}

async clickCoverPaymentsUnmatchedButton() {
    await this.btnCoverPaymentsUnmatchedButton.click();
}

async clickCurrentStatusInformationOfPaymentButton() {
    await this.btnCurrentStatusInformationOfPaymentButton.click();
}

async clickAuditTrailForRepairPaymentsButton() {
    await this.btnAuditTrailForRepairPaymentsButton.click();
}

async clickViewAccountingEntriesButton() {
    await this.btnViewAccountingEntriesButton.click();
}

async clickManualFundsAuthorisationQueueButton() {
    await this.btnManualFundsAuthorisationQueueButton.click();
}

async clickPaymentInquiryLiveHistoricalPaymentInformationButton() {
    await this.btnPaymentInquiryLiveHistoricalPaymentInformationButton.click();
}

async clickNostroQuotaUtilisationButton() {
    await this.btnNostroQuotaUtilisationButton.click();
}

// Received And Sent File Details
async clickReceivedAndSentFileDetailsDropdown() {
    await this.ddlReceivedAndSentFileDetailsDropdown.click();
}

// Received Files Details
async clickReceivedFilesDetailsDropdown() {
    await this.ddlReceivedFilesDetailsDropdown.click();
}

async clickReceivedMessageFileDetailsListButton() {
    await this.btnReceivedMessageFileDetailsListButton.click();
}

async clickReceivedMessageFileDetailsFromIPButton() {
    await this.btnReceivedMessageFileDetailsFromIPButton.click();
}

// Received Message File Repair
async clickReceivedMessageFileRepairDropdown() {
    await this.ddlReceivedMessageFileRepairDropdown.click();
}

async clickReceivedMessageFileRepairQueueListButton() {
    await this.btnReceivedMessageFileRepairQueueListButton.click();
}

async clickRcvdMsgFileDetsRepairUnauthListAmendButton() {
    await this.btnRcvdMsgFileDetsRepairUnauthListAmendButton.click();
}

// Received Bulk Repair Queue List
async clickReceivedBulkRepairQueueListDropdown() {
    await this.ddlReceivedBulkRepairQueueListDropdown.click();
}

async clickReceivedBulkRepairQueueListButton() {
    await this.btnReceivedBulkRepairQueueListButton.click();
}

async clickReceivedBulkRepairUnauthListAmendButton() {
    await this.btnReceivedBulkRepairUnauthListAmendButton.click();
}

// Received Claims
async clickReceivedClaimsDropdown() {
    await this.ddlReceivedClaimsDropdown.click();
}

async clickReceivedClaimsListButton() {
    await this.btnReceivedClaimsListButton.click();
}

async clickIsoReceivedClaimsListButton() {
    await this.btnIsoReceivedClaimsListButton.click();
}

// Received Charge Payment Notification
async clickReceivedChargePaymentNotificationDropdown() {
    await this.ddlReceivedChargePaymentNotificationDropdown.click();
}

async clickInwardChargePaymentNotificationButton() {
    await this.btnInwardChargePaymentNotificationButton.click();
}

// Sent File Details
async clickSentFileDetailsDropdown() {
    await this.ddlSentFileDetailsDropdown.click();
}

async clickSentFileDetailsButton() {
    await this.btnSentFileDetailsButton.click();
}

async clickSentFileDetailsIPButton() {
    await this.btnSentFileDetailsIPButton.click();
}

async clickSentFileDetailsExceptionButton() {
    await this.btnSentFileDetailsExceptionButton.click();
}

async clickSentClaimsButton() {
    await this.btnSentClaimsButton.click();
}

// Monitoring File Details
async clickMonitoringFileDetailsDropdown() {
    await this.ddlMonitoringFileDetailsDropdown.click();
}

async clickMonitoringOfReceivedFileDetailsButton() {
    await this.btnMonitoringOfReceivedFileDetailsButton.click();
}

async clickMonitoringOfSentFileDetailsButton() {
    await this.btnMonitoringOfSentFileDetailsButton.click();
}

// Confirmations
async clickConfirmationsDropdown() {
    await this.ddlConfirmationsDropdown.click();
}

async clickPhoneConfirmationsButton() {
    await this.btnPhoneConfirmationsButton.click();
}

// Reports
async clickReportsDropdown() {
    await this.ddlReportsDropdown.click();
}

// Local Clearing Reports
async clickLocalClearingReportsDropdown() {
    await this.ddlLocalClearingReportsDropdown.click();
}

async clickSettlementTransactionStatusReportButton() {
    await this.btnSettlementTransactionStatusReportButton.click();
}

async clickEquensClearingDRRReportButton() {
    await this.btnEquensClearingDRRReportButton.click();
}

async clickEbainstDRRReportButton() {
    await this.btnEbainstDRRReportButton.click();
}

async clickEbainstRSFReportButton() {
    await this.btnEbainstRSFReportButton.click();
}

// Current Payments Reports
async clickCurrentPaymentsReportsDropdown() {
    await this.ddlCurrentPaymentsReportsDropdown.click();
}

async clickPaymentsInRepairAndWarehouseQueueButton() {
    await this.btnPaymentsInRepairAndWarehouseQueueButton.click();
}

async clickPaymentsPerMsgTypeButton() {
    await this.btnPaymentsPerMsgTypeButton.click();
}

// BIC Upload Reports
async clickBicUploadReportsDropdown() {
    await this.ddlBicUploadReportsDropdown.click();
}

async clickBicUploadReportsButton() {
    await this.btnBicUploadReportsButton.click();
}

// US ACH Payments
async clickUsACHPaymentsDropdown() {
    await this.ddlUsACHPaymentsDropdown.click();
}

async clickPaymentsAwaitingTraceNumberButton() {
    await this.btnPaymentsAwaitingTraceNumberButton.click();
}

async clickReturnCompletedCTPaymentsButton() {
    await this.btnReturnCompletedCTPaymentsButton.click();
}

// Batch Payments
async clickBatchPaymentsDropdown() {
    await this.ddlBatchPaymentsDropdown.click();
}

async clickInvalidChildPaymentsAutoReversedButton() {
    await this.btnInvalidChildPaymentsAutoReversedButton.click();
}

async clickForceReleasedBatchButton() {
    await this.btnForceReleasedBatchButton.click();
}

// Inward Cheque Collection
async clickInwardChequeCollectionDropdown() {
    await this.ddlInwardChequeCollectionDropdown.click();
}

async clickInwardChequesStatusButton() {
    await this.btnInwardChequesStatusButton.click();
}

async clickManualChequeDebitPaymentsButton() {
    await this.btnManualChequeDebitPaymentsButton.click();
}

async clickInwardChequesReturnedButton() {
    await this.btnInwardChequesReturnedButton.click();
}

// Outward Cheque Collection
async clickOutwardChequeCollectionDropdown() {
    await this.ddlOutwardChequeCollectionDropdown.click();
}

async clickForeignChequesStatusCorrespondentButton() {
    await this.btnForeignChequesStatusCorrespondentButton.click();
}

async clickLocalOutstationChequesStatusButton() {
    await this.btnLocalOutstationChequesStatusButton.click();
}

async clickChequePaymentStatusButton() {
    await this.btnChequePaymentStatusButton.click();
}

async clickLocalChequesStatusStandaloneButton() {
    await this.btnLocalChequesStatusStandaloneButton.click();
}

// Payment Monitoring
async clickPaymentMonitoringDropdown() {
    await this.ddlPaymentMonitoringDropdown.click();
}

// Payment Flow Monitor
async clickPaymentFlowMonitorDropdown() {
    await this.ddlPaymentFlowMonitorDropdown.click();
}

async clickPaymentFlowStatusMonitorButton() {
    await this.btnPaymentFlowStatusMonitorButton.click();
}

async clickInProcessPaymentsButton() {
    await this.btnInProcessPaymentsButton.click();
}

async clickFinalStatusMonitorButton() {
    await this.btnFinalStatusMonitorButton.click();
}

async clickInwardMonitorButton() {
    await this.btnInwardMonitorButton.click();
}

async clickCompanySpecificServicesMonitorButton() {
    await this.btnCompanySpecificServicesMonitorButton.click();
}

async clickNonCompanySpecificServicesMonitorButton() {
    await this.btnNonCompanySpecificServicesMonitorButton.click();
}

async clickLcTimeScheduledProcessStatusMonitorButton() {
    await this.btnLcTimeScheduledProcessStatusMonitorButton.click();
}

// Virtual Queue Monitor
async clickVirtualQueueMonitorDropdown() {
    await this.ddlVirtualQueueMonitorDropdown.click();
}

async clickQueueMonitorButton() {
    await this.btnQueueMonitorButton.click();
}

async clickRiskFilterAuthorisationQueueButton() {
    await this.btnRiskFilterAuthorisationQueueButton.click();
}

async clickClearingServicesMonitorButton() {
    await this.btnClearingServicesMonitorButton.click();
}

async clickCutOffTimeMonitorButton() {
    await this.btnCutOffTimeMonitorButton.click();
}

// Payments Matched With Notice To Receive
async clickPaymentsMatchedWithNoticeToReceiveDropdown() {
    await this.ddlPaymentsMatchedWithNoticeToReceiveDropdown.click();
}

async clickPaymentsMatchedWithNoticeToReceiveButton() {
    await this.btnPaymentsMatchedWithNoticeToReceiveButton.click();
}

// Payment Exceptions
async clickPaymentExceptionsDropdown() {
    await this.ddlPaymentExceptionsDropdown.click();
}

async clickTreasuryRateRequestButton() {
    await this.btnTreasuryRateRequestButton.click();
}

// Warehouse And Parked Payments
async clickWarehouseAndParkedPaymentsDropdown() {
    await this.ddlWarehouseAndParkedPaymentsDropdown.click();
}

// Warehouse Payments List
async clickWarehousePaymentsListDropdown() {
    await this.ddlWarehousePaymentsListDropdown.click();
}

async clickWarehousePaymentsListButton() {
    await this.btnWarehousePaymentsListButton.click();
}

// Parked Payments
async clickParkedPaymentsDropdown() {
    await this.ddlParkedPaymentsDropdown.click();
}

async clickViewParkedPaymentsButton() {
    await this.btnViewParkedPaymentsButton.click();
}

// Parked Parent Payments
async clickParkedParentPaymentsDropdown() {
    await this.ddlParkedParentPaymentsDropdown.click();
}

async clickViewParentParkedPaymentsButton() {
    await this.btnViewParentParkedPaymentsButton.click();
}

// Manual Funds Authorisation
async clickManualFundsAuthorisationDropdown() {
    await this.ddlManualFundsAuthorisationDropdown.click();
}

async clickCreatePreApprovalButton() {
    await this.btnCreatePreApprovalButton.click();
}

async clickRequestsPendingForManualApprovalListButton() {
    await this.btnRequestsPendingForManualApprovalListButton.click();
}

async clickAuthorisedManualApprovalCancelButton() {
    await this.btnAuthorisedManualApprovalCancelButton.click();
}

async clickUnauthorisedManualApprovalCancelButton() {
    await this.btnUnauthorisedManualApprovalCancelButton.click();
}

// Pre-Authorisation Requests
async clickPreAuthorisationRequestsDropdown() {
    await this.ddlPreAuthorisationRequestsDropdown.click();
}

async clickCreatePreAuthorisation2EyesButton() {
    await this.btnCreatePreAuthorisation2EyesButton.click();
}

async clickCreatePreAuthorisation4EyesButton() {
    await this.btnCreatePreAuthorisation4EyesButton.click();
}

async clickPendingPreAuthorisationRequestsButton() {
    await this.btnPendingPreAuthorisationRequestsButton.click();
}

async clickAuthorisedPreAuthorisationRequestsButton() {
    await this.btnAuthorisedPreAuthorisationRequestsButton.click();
}

// SWIFT Out Exception Queue
async clickSwiftOutExceptionQueueDropdown() {
    await this.ddlSwiftOutExceptionQueueDropdown.click();
}

// Exception Queue
async clickExceptionQueueDropdown() {
    await this.ddlExceptionQueueDropdown.click();
}

async clickExceptionQueueButton() {
    await this.btnExceptionQueueButton.click();
}

// Pending Messages
async clickPendingMessagesDropdown() {
    await this.ddlPendingMessagesDropdown.click();
}

async clickViewPendingSwiftMessagesButton() {
    await this.btnViewPendingSwiftMessagesButton.click();
}

async clickViewDeletePendingSwiftMessagesButton() {
    await this.btnViewDeletePendingSwiftMessagesButton.click();
}

// Received MT019
async clickReceivedMT019Dropdown() {
    await this.ddlReceivedMT019Dropdown.click();
}

async clickReceivedMT019DetailScreenButton() {
    await this.btnReceivedMT019DetailScreenButton.click();
}

// RTGS ISO Exception Queue
async clickRtgsISOExceptionQueueDropdown() {
    await this.ddlRtgsISOExceptionQueueDropdown.click();
}

async clickRtgsTechnicalExceptionQueueButton() {
    await this.btnRtgsTechnicalExceptionQueueButton.click();
}

async clickRtgsBusinessExceptionQueueButton() {
    await this.btnRtgsBusinessExceptionQueueButton.click();
}

// SWIFT ISO Exception Queue
async clickSwiftISOExceptionQueueDropdown() {
    await this.ddlSwiftISOExceptionQueueDropdown.click();
}

async clickSwiftISOTechnicalExceptionsButton() {
    await this.btnSwiftISOTechnicalExceptionsButton.click();
}

async clickSwiftISOBusinessExceptionsButton() {
    await this.btnSwiftISOBusinessExceptionsButton.click();
}

// Clearing Status Report
async clickClearingStatusReportDropdown() {
    await this.ddlClearingStatusReportDropdown.click();
}

async clickFileLevelExceptionButton() {
    await this.btnFileLevelExceptionButton.click();
}

async clickBulkLevelExceptionButton() {
    await this.btnBulkLevelExceptionButton.click();
}

async clickTxnLevelExceptionButton() {
    await this.btnTxnLevelExceptionButton.click();
}

// FX
async clickFxDropdown() {
    await this.ddlFxDropdown.click();
}

// Pending FX Rate Request Payments
async clickPendingFXRateRequestPaymentsDropdown() {
    await this.ddlPendingFXRateRequestPaymentsDropdown.click();
}

async clickPendingFXRateRequestPaymentsListButton() {
    await this.btnPendingFXRateRequestPaymentsListButton.click();
}

async clickParkedPaymentsAwaitFixingRateButton() {
    await this.btnParkedPaymentsAwaitFixingRateButton.click();
}

// Filtering
async clickFilteringDropdown() {
    await this.ddlFilteringDropdown.click();
}

async clickManualFilterPaymentsButton() {
    await this.btnManualFilterPaymentsButton.click();
}

async clickHitFilterButton() {
    await this.btnHitFilterButton.click();
}

async clickHitFilterAuthorisationButton() {
    await this.btnHitFilterAuthorisationButton.click();
}

async clickFilteringReportButton() {
    await this.btnFilteringReportButton.click();
}

async clickRegeneratePaymentsAndMessagesButton() {
    await this.btnRegeneratePaymentsAndMessagesButton.click();
}

// Pending Requests To External Systems
async clickPendingRequestsToExternalSystemsDropdown() {
    await this.ddlPendingRequestsToExternalSystemsDropdown.click();
}

async clickPendingReqAccountInquiryDebitButton() {
    await this.btnPendingReqAccountInquiryDebitButton.click();
}

async clickPendingReqAccountInquiryCreditButton() {
    await this.btnPendingReqAccountInquiryCreditButton.click();
}

async clickPendingReqAccountInquiryDebitChargesButton() {
    await this.btnPendingReqAccountInquiryDebitChargesButton.click();
}

async clickPendingReqAccountInquiryCreditChargesButton() {
    await this.btnPendingReqAccountInquiryCreditChargesButton.click();
}

async clickPendingReqReserveEntriesButton() {
    await this.btnPendingReqReserveEntriesButton.click();
}

async clickPendingReqPostingEntriesButton() {
    await this.btnPendingReqPostingEntriesButton.click();
}

async clickPendingReqReversePostingButton() {
    await this.btnPendingReqReversePostingButton.click();
}

async clickPendingReqMandateValidationButton() {
    await this.btnPendingReqMandateValidationButton.click();
}

async clickPendingReqMandateReopenButton() {
    await this.btnPendingReqMandateReopenButton.click();
}

async clickPendingReqMandateUpdateButton() {
    await this.btnPendingReqMandateUpdateButton.click();
}

async clickPendingReqCancelReservationButton() {
    await this.btnPendingReqCancelReservationButton.click();
}

async clickPendingReqAccountCheckFeeInquiryDebitButton() {
    await this.btnPendingReqAccountCheckFeeInquiryDebitButton.click();
}

async clickPendingReqAccountCheckFeeInquiryCreditButton() {
    await this.btnPendingReqAccountCheckFeeInquiryCreditButton.click();
}

// Investigations & Cancellations
async clickInvestigationsAndCancellationsDropdown() {
    await this.ddlInvestigationsAndCancellationsDropdown.click();
}

// Cancellations
async clickCancellationsDropdown() {
    await this.ddlCancellationsDropdown.click();
}

// SWIFT Cancellations
async clickSwiftCancellationsDropdown() {
    await this.ddlSwiftCancellationsDropdown.click();
}

// SWIFT Inward Cancellation Requests
async clickSwiftInwardCancellationRequestsDropdown() {
    await this.ddlSwiftInwardCancellationRequestsDropdown.click();
}

async clickAcceptCancellationRequestButton() {
    await this.btnAcceptCancellationRequestButton.click();
}

async clickRejectCancellationRequestButton() {
    await this.btnRejectCancellationRequestButton.click();
}

// SWIFT Outward Cancellation Requests
async clickSwiftOutwardCancellationRequestsDropdown() {
    await this.ddlSwiftOutwardCancellationRequestsDropdown.click();
}

async clickSendCancellationRequestButton() {
    await this.btnSendCancellationRequestButton.click();
}

async clickViewOutwardCancellationRequestsButton() {
    await this.btnViewOutwardCancellationRequestsButton.click();
}

async clickSendGSRPCancellationRequestISOButton() {
    await this.btnSendGSRPCancellationRequestISOButton.click();
}

async clickInwardReturnOfRedirectPaymentRcvdViaCOVButton() {
    await this.btnInwardReturnOfRedirectPaymentRcvdViaCOVButton.click();
}

// Clearing Cancellations
async clickClearingCancellationsDropdown() {
    await this.ddlClearingCancellationsDropdown.click();
}

// CT Cancellation Requests
async clickCtCancellationRequestsDropdown() {
    await this.ddlCtCancellationRequestsDropdown.click();
}

// CT Create Cancellation Request
async clickCtCreateCancellationRequestDropdown() {
    await this.ddlCtCreateCancellationRequestDropdown.click();
}

async clickCtBankInitiatedCancellationRequestButton() {
    await this.btnCtBankInitiatedCancellationRequestButton.click();
}

async clickCtCustomerInitiatedCancellationRequestButton() {
    await this.btnCtCustomerInitiatedCancellationRequestButton.click();
}

async clickCtBulkBankInitiatedCancellationRequestButton() {
    await this.btnCtBulkBankInitiatedCancellationRequestButton.click();
}

async clickCtAuthBulkCancellationReqInButton() {
    await this.btnCtAuthBulkCancellationReqInButton.click();
}

async clickCtAuthoriseOutwardCancellationRequestButton() {
    await this.btnCtAuthoriseOutwardCancellationRequestButton.click();
}

async clickCtAuthBulkCancellationReqOutButton() {
    await this.btnCtAuthBulkCancellationReqOutButton.click();
}

async clickCtDeleteUnapprovedCancellationRequestsButton() {
    await this.btnCtDeleteUnapprovedCancellationRequestsButton.click();
}

async clickCtInwardCancellationReqViewStatusButton() {
    await this.btnCtInwardCancellationReqViewStatusButton.click();
}

async clickCtUnmatchedIncomingReqStatusUpdateButton() {
    await this.btnCtUnmatchedIncomingReqStatusUpdateButton.click();
}

async clickCtInwardCancellationReqUpdateButton() {
    await this.btnCtInwardCancellationReqUpdateButton.click();
}

async clickCtCancellationReqPendingResponseButton() {
    await this.btnCtCancellationReqPendingResponseButton.click();
}

async clickCtCancellationReqClearingRejectsButton() {
    await this.btnCtCancellationReqClearingRejectsButton.click();
}

async clickCtCancellationReqViewStatusButton() {
    await this.btnCtCancellationReqViewStatusButton.click();
}

async clickCtOutgoingCancellationReqUpdateButton() {
    await this.btnCtOutgoingCancellationReqUpdateButton.click();
}

async clickCtCancellationRequestIPButton() {
    await this.btnCtCancellationRequestIPButton.click();
}

async clickCtCancelReqIPViewStatusButton() {
    await this.btnCtCancelReqIPViewStatusButton.click();
}

async clickCtAuthDelCancelReqFromIPButton() {
    await this.btnCtAuthDelCancelReqFromIPButton.click();
}

// DD Cancellation Requests
async clickDdCancellationRequestsDropdown() {
    await this.ddlDdCancellationRequestsDropdown.click();
}

async clickInwardCancellationManualRepairButton() {
    await this.btnInwardCancellationManualRepairButton.click();
}

async clickCreateBankCancellationRequestButton() {
    await this.btnCreateBankCancellationRequestButton.click();
}

async clickInwardCancellationReqEnquiryButton() {
    await this.btnInwardCancellationReqEnquiryButton.click();
}

async clickOutwardCancellationReqEnquiryButton() {
    await this.btnOutwardCancellationReqEnquiryButton.click();
}

async clickAuthoriseCancellationRequestsButton() {
    await this.btnAuthoriseCancellationRequestsButton.click();
}

async clickDeleteUnapprovedOutwardCancellationsButton() {
    await this.btnDeleteUnapprovedOutwardCancellationsButton.click();
}

// CC Cancellation Requests
async clickCcCancellationRequestsDropdown() {
    await this.ddlCcCancellationRequestsDropdown.click();
}

// CC Outward Cancellation Requests
async clickCcOutwardCancellationRequestsDropdown() {
    await this.ddlCcOutwardCancellationRequestsDropdown.click();
}

async clickCcBankInitiatedCancellationRequestButton() {
    await this.btnCcBankInitiatedCancellationRequestButton.click();
}

async clickCcCustomerInitiatedCancellationRequestButton() {
    await this.btnCcCustomerInitiatedCancellationRequestButton.click();
}

async clickCcAuthoriseOutwardCancellationRequestButton() {
    await this.btnCcAuthoriseOutwardCancellationRequestButton.click();
}

async clickCcDeleteUnapprovedCancellationRequestsButton() {
    await this.btnCcDeleteUnapprovedCancellationRequestsButton.click();
}

async clickCcOutwardCancellationRequestViewStatusButton() {
    await this.btnCcOutwardCancellationRequestViewStatusButton.click();
}

// CC Inward Cancellation Requests
async clickCcInwardCancellationRequestsDropdown() {
    await this.ddlCcInwardCancellationRequestsDropdown.click();
}

async clickCcInwardCancellationReqManualActionButton() {
    await this.btnCcInwardCancellationReqManualActionButton.click();
}

async clickCcInwardCancellationReqViewStatusButton() {
    await this.btnCcInwardCancellationReqViewStatusButton.click();
}

// Return Cancellation Requests
async clickReturnCancellationRequestsDropdown() {
    await this.ddlReturnCancellationRequestsDropdown.click();
}

// Return Outward Cancellation Requests
async clickReturnOutwardCancellationRequestsDropdown() {
    await this.ddlReturnOutwardCancellationRequestsDropdown.click();
}

async clickReturnBankInitiatedCancellationRequestButton() {
    await this.btnReturnBankInitiatedCancellationRequestButton.click();
}

async clickReturnCustomerInitiatedCancellationRequestButton() {
    await this.btnReturnCustomerInitiatedCancellationRequestButton.click();
}

async clickReturnAuthoriseOutwardCancellationRequestButton() {
    await this.btnReturnAuthoriseOutwardCancellationRequestButton.click();
}

async clickReturnDeleteUnapprovedCancellationRequestsButton() {
    await this.btnReturnDeleteUnapprovedCancellationRequestsButton.click();
}

async clickReturnOutwardCancellationRequestViewStatusButton() {
    await this.btnReturnOutwardCancellationRequestViewStatusButton.click();
}

// Return Inward Cancellation Requests
async clickReturnInwardCancellationRequestsDropdown() {
    await this.ddlReturnInwardCancellationRequestsDropdown.click();
}

async clickReturnInwardCancellationReqManualActionButton() {
    await this.btnReturnInwardCancellationReqManualActionButton.click();
}

async clickReturnInwardCancellationReqViewStatusButton() {
    await this.btnReturnInwardCancellationReqViewStatusButton.click();
}

// CT DD CC Cancellation
async clickCtDDCCCancellationDropdown() {
    await this.ddlCtDDCCCancellationDropdown.click();
}

async clickAwaitingDistributionToClearingButton() {
    await this.btnAwaitingDistributionToClearingButton.click();
}

async clickCancelBeforeDistributionToClearingButton() {
    await this.btnCancelBeforeDistributionToClearingButton.click();
}

// Cancellation Of Return
async clickCancellationOfReturnDropdown() {
    await this.ddlCancellationOfReturnDropdown.click();
}

async clickCancellationOfReturnBeforeDistributionButton() {
    await this.btnCancellationOfReturnBeforeDistributionButton.click();
}

// RTGS Cancellations
async clickRtgsCancellationsDropdown() {
    await this.ddlRtgsCancellationsDropdown.click();
}

// RTGS Create Cancellation Requests
async clickCreateRTGSCancellationRequestsDropdown() {
    await this.ddlCreateRTGSCancellationRequestsDropdown.click();
}

async clickRtgsCustomerInitiatedCancellationRequestButton() {
    await this.btnRtgsCustomerInitiatedCancellationRequestButton.click();
}

async clickRtgsBankInitiatedCancellationRequestButton() {
    await this.btnRtgsBankInitiatedCancellationRequestButton.click();
}

async clickRtgsAuthoriseOutwardCancellationRequestButton() {
    await this.btnRtgsAuthoriseOutwardCancellationRequestButton.click();
}

async clickRtgsDeleteUnapprovedCancellationRequestButton() {
    await this.btnRtgsDeleteUnapprovedCancellationRequestButton.click();
}

async clickRtgsInwardCancellationReqRequireManualActionButton() {
    await this.btnRtgsInwardCancellationReqRequireManualActionButton.click();
}

async clickRtgsInwardCancellationRequestViewStatusButton() {
    await this.btnRtgsInwardCancellationRequestViewStatusButton.click();
}

async clickRtgsOutwardCancellationRequestPendingResponseButton() {
    await this.btnRtgsOutwardCancellationRequestPendingResponseButton.click();
}

async clickRtgsOutwardCancellationReqNetworkClearingRejectedButton() {
    await this.btnRtgsOutwardCancellationReqNetworkClearingRejectedButton.click();
}

async clickRtgsOutwardCancellationRequestViewStatusButton() {
    await this.btnRtgsOutwardCancellationRequestViewStatusButton.click();
}

async clickRoiClearingRejectedViewStatusButton() {
    await this.btnRoiClearingRejectedViewStatusButton.click();
}

async clickAuthoriseInwardCancellationRequestsButton() {
    await this.btnAuthoriseInwardCancellationRequestsButton.click();
}

// RTGS DD Cancellation
async clickRtgsDDCancellationsDropdown() {
    await this.ddlRtgsDDCancellationsDropdown.click();
}

async clickInitiateRTGSDDCancellationButton() {
    await this.btnInitiateRTGSDDCancellationButton.click();
}

async clickAuthorizeRTGSDDCancellationsButton() {
    await this.btnAuthorizeRTGSDDCancellationsButton.click();
}

async clickDeleteUnapprovedRTGSDDCancellationsButton() {
    await this.btnDeleteUnapprovedRTGSDDCancellationsButton.click();
}

// SWIFT ISO Cancellations
async clickSwiftISOCancellationsDropdown() {
    await this.ddlSwiftISOCancellationsDropdown.click();
}

// SWIFT ISO Create Cancellation Requests
async clickSwiftIsoCreateCancellationRequestsDropdown() {
    await this.ddlSwiftIsoCreateCancellationRequestsDropdown.click();
}

async clickSwiftIsoCustomerInitiatedCancellationRequestButton() {
    await this.btnSwiftIsoCustomerInitiatedCancellationRequestButton.click();
}

async clickSwiftIsoBankInitiatedCancellationRequestButton() {
    await this.btnSwiftIsoBankInitiatedCancellationRequestButton.click();
}

async clickSwiftIsoApproveOutwardCancellationRequestButton() {
    await this.btnSwiftIsoApproveOutwardCancellationRequestButton.click();
}

async clickSwiftIsoDeleteUnapprovedOutwardCancellationRequestButton() {
    await this.btnSwiftIsoDeleteUnapprovedOutwardCancellationRequestButton.click();
}

async clickSwiftIsoCreateCancellationAdviceForNoticeToReceiveButton() {
    await this.btnSwiftIsoCreateCancellationAdviceForNoticeToReceiveButton.click();
}

async clickSwiftIsoAuthorizeCancellationAdviceForNoticeToReceiveButton() {
    await this.btnSwiftIsoAuthorizeCancellationAdviceForNoticeToReceiveButton.click();
}

async clickSwiftIsoInwardCancellationReqRequireManualActionButton() {
    await this.btnSwiftIsoInwardCancellationReqRequireManualActionButton.click();
}

async clickSwiftIsoAuthoriseInwardCancellationRequestsButton() {
    await this.btnSwiftIsoAuthoriseInwardCancellationRequestsButton.click();
}

async clickSwiftIsoInwardCancellationReqViewStatusButton() {
    await this.btnSwiftIsoInwardCancellationReqViewStatusButton.click();
}

async clickSwiftIsoOutwardCancellationRequestPendingResponseButton() {
    await this.btnSwiftIsoOutwardCancellationRequestPendingResponseButton.click();
}

async clickSwiftIsoOutwardCancellationReqNetworkClearingRejectedButton() {
    await this.btnSwiftIsoOutwardCancellationReqNetworkClearingRejectedButton.click();
}

async clickSwiftIsoOutwardCancellationRequestViewStatusButton() {
    await this.btnSwiftIsoOutwardCancellationRequestViewStatusButton.click();
}

async clickSwiftIsoViewCustomerCancellationRequestsButton() {
    await this.btnSwiftIsoViewCustomerCancellationRequestsButton.click();
}

async clickSwiftIsoCustomerCancellationReqRequireManualActionButton() {
    await this.btnSwiftIsoCustomerCancellationReqRequireManualActionButton.click();
}

async clickSwiftIsoAuthoriseCustomerCancellationRequestButton() {
    await this.btnSwiftIsoAuthoriseCustomerCancellationRequestButton.click();
}

// Investigations
async clickInvestigationsDropdown() {
    await this.ddlInvestigationsDropdown.click();
}

// Payment Investigations Queries Answers
async clickPaymentInvestigationsQueriesAnswersDropdown() {
    await this.ddlPaymentInvestigationsQueriesAnswersDropdown.click();
}

async clickSendAQueryButton() {
    await this.btnSendAQueryButton.click();
}

async clickViewSentQueriesButton() {
    await this.btnViewSentQueriesButton.click();
}

async clickAnswerAQueryButton() {
    await this.btnAnswerAQueryButton.click();
}

async clickViewAnswersButton() {
    await this.btnViewAnswersButton.click();
}

// Investigations Free Format Messages
async clickInvestigationsFreeFormatMsgsDropdown() {
    await this.ddlInvestigationsFreeFormatMsgsDropdown.click();
}

async clickSendFreeFormatMessageButton() {
    await this.btnSendFreeFormatMessageButton.click();
}

async clickViewFreeFormatMessageButton() {
    await this.btnViewFreeFormatMessageButton.click();
}

// Claims And Investigations SEPA CT
async clickClaimsAndInvestigationsSEPACTDropdown() {
    await this.ddlClaimsAndInvestigationsSEPACTDropdown.click();
}

// Claim Of Non Receipt
async clickClaimOfNonReceiptDropdown() {
    await this.ddlClaimOfNonReceiptDropdown.click();
}

// Outward Claims For Non Receipt
async clickOutwardClaimsForNonReceiptDropdown() {
    await this.ddlOutwardClaimsForNonReceiptDropdown.click();
}

async clickCreateOutwardClaimButton() {
    await this.btnCreateOutwardClaimButton.click();
}

async clickAuthoriseDeleteOutwardClaimsButton() {
    await this.btnAuthoriseDeleteOutwardClaimsButton.click();
}

async clickViewOutwardClaimsButton() {
    await this.btnViewOutwardClaimsButton.click();
}

async clickClearingRejectedOutwardClaimsButton() {
    await this.btnClearingRejectedOutwardClaimsButton.click();
}

async clickUnmatchedOutwardClaimResolutionButton() {
    await this.btnUnmatchedOutwardClaimResolutionButton.click();
}

async clickRequestStatusUpdateForOutwardClaimsButton() {
    await this.btnRequestStatusUpdateForOutwardClaimsButton.click();
}

// Inward Claims For Non Receipt
async clickInwardClaimsForNonReceiptDropdown() {
    await this.ddlInwardClaimsForNonReceiptDropdown.click();
}

async clickViewInwardClaimsButton() {
    await this.btnViewInwardClaimsButton.click();
}

async clickInwardClaimsRequireManualActionButton() {
    await this.btnInwardClaimsRequireManualActionButton.click();
}

async clickAuthoriseDeleteInwardClaimsButton() {
    await this.btnAuthoriseDeleteInwardClaimsButton.click();
}

async clickUnmatchedInwardClaimsButton() {
    await this.btnUnmatchedInwardClaimsButton.click();
}

async clickUnmatchedInwardRequestForStatusUpdateButton() {
    await this.btnUnmatchedInwardRequestForStatusUpdateButton.click();
}

// Request To Modify Payment Date
async clickRequestToModifyPaymentDateDropdown() {
    await this.ddlRequestToModifyPaymentDateDropdown.click();
}

// Outward Requests To Modify Date
async clickOutwardRequestsToModifyDateDropdown() {
    await this.ddlOutwardRequestsToModifyDateDropdown.click();
}

async clickCreateOutwardRequestButton() {
    await this.btnCreateOutwardRequestButton.click();
}

async clickAuthoriseDeleteOutwardRequestsButton() {
    await this.btnAuthoriseDeleteOutwardRequestsButton.click();
}

async clickViewOutwardRequestsButton() {
    await this.btnViewOutwardRequestsButton.click();
}

async clickClearingRejectedOutwardRequestsButton() {
    await this.btnClearingRejectedOutwardRequestsButton.click();
}

async clickInitiateStatusUpdateForOutwardRequestsButton() {
    await this.btnInitiateStatusUpdateForOutwardRequestsButton.click();
}

// Inward Requests To Modify Date
async clickInwardRequestsToModifyDateDropdown() {
    await this.ddlInwardRequestsToModifyDateDropdown.click();
}

async clickViewInwardRequestsButton() {
    await this.btnViewInwardRequestsButton.click();
}

async clickInwardRequestsRequireManualActionButton() {
    await this.btnInwardRequestsRequireManualActionButton.click();
}

async clickAuthoriseDeleteInwardRequestsButton() {
    await this.btnAuthoriseDeleteInwardRequestsButton.click();
}

async clickUnmatchedInwardRequestsButton() {
    await this.btnUnmatchedInwardRequestsButton.click();
}

async clickInwardRequestsUnmatchedRequestForStatusUpdateButton() {
    await this.btnInwardRequestsUnmatchedRequestForStatusUpdateButton.click();
}

// Exceptions And Investigations
async clickExceptionsAndInvestigationsDropdown() {
    await this.ddlExceptionsAndInvestigationsDropdown.click();
}

// Outward Investigations
async clickOutwardInvestigationsDropdown() {
    await this.ddlOutwardInvestigationsDropdown.click();
}

async clickSendInvestigationRequestButton() {
    await this.btnSendInvestigationRequestButton.click();
}

async clickViewInvestigationRequestButton() {
    await this.btnViewInvestigationRequestButton.click();
}

// Inward Investigations
async clickInwardInvestigationsDropdown() {
    await this.ddlInwardInvestigationsDropdown.click();
}

async clickInwardInvestigationReqRequireManualActionButton() {
    await this.btnInwardInvestigationReqRequireManualActionButton.click();
}

async clickViewInwardInvestigationRequestButton() {
    await this.btnViewInwardInvestigationRequestButton.click();
}

// Exceptions
async clickExceptionsDropdown() {
    await this.ddlExceptionsDropdown.click();
}

async clickInvestigationRequestResponseClearingRejectsButton() {
    await this.btnInvestigationRequestResponseClearingRejectsButton.click();
}

// Reversal Of Payments
async clickReversalOfPaymentsDropdown() {
    await this.ddlReversalOfPaymentsDropdown.click();
}

async clickReversalOfPaymentsButton() {
    await this.btnReversalOfPaymentsButton.click();
}

async clickReversalOfProcessedDirectDebitsButton() {
    await this.btnReversalOfProcessedDirectDebitsButton.click();
}

// Return Reject Payments
async clickReturnRejectPaymentsDropdown() {
    await this.ddlReturnRejectPaymentsDropdown.click();
}

async clickReturnRejectInwardDirectDebitsButton() {
    await this.btnReturnRejectInwardDirectDebitsButton.click();
}

async clickReturnBookDirectDebitsButton() {
    await this.btnReturnBookDirectDebitsButton.click();
}

async clickReturnInwardClearedCHQButton() {
    await this.btnReturnInwardClearedCHQButton.click();
}

async clickReturnInwardClearedCHQArchiveButton() {
    await this.btnReturnInwardClearedCHQArchiveButton.click();
}

async clickReturnCompletedCreditTransfersButton() {
    await this.btnReturnCompletedCreditTransfersButton.click();
}

async clickInitiateRtnForTxnSetldWithCOVButton() {
    await this.btnInitiateRtnForTxnSetldWithCOVButton.click();
}

async clickReturnReversalInwardSWIFTMTRTNButton() {
    await this.btnReturnReversalInwardSWIFTMTRTNButton.click();
}

async clickReturnOfSWIFTCompletedCreditTXNButton() {
    await this.btnReturnOfSWIFTCompletedCreditTXNButton.click();
}

async clickReturnRejectIsoBankTransferReturnButton() {
    await this.btnReturnRejectIsoBankTransferReturnButton.click();
}

async clickReturnRejectIsoCustomerTransferReturnButton() {
    await this.btnReturnRejectIsoCustomerTransferReturnButton.click();
}

async clickPendingRepairTxnCancelReqRcvdButton() {
    await this.btnPendingRepairTxnCancelReqRcvdButton.click();
}

async clickUpdateUserStatusButton() {
    await this.btnUpdateUserStatusButton.click();
}

async clickAuthoriseUserStatusUpdateButton() {
    await this.btnAuthoriseUserStatusUpdateButton.click();
}

async clickCaseAssignmentButton() {
    await this.btnCaseAssignmentButton.click();
}

// Payment Approvals
async clickPaymentApprovals() {
    await this.DDLPaymentApprovals.click();
}

// Authorise Pending Payments
async clickAuthorisePendingPayments() {
    await this.DDLAuthorisePendingPayments.click();
}

// Auth Order Entry Repair Payments
async clickAuthOrderEntryRepairPayments() {
    await this.DDLAuthOrderEntryRepairPayments.click();
}

async clickPendingAuthorisePayments() {
    await this.BTNPendingAuthorisePayments.click();
}

// Authorise DD Mandate Verification
async clickAuthoriseDDMandateVerification() {
    await this.DDLAuthoriseDDMandateVerification.click();
}

async clickBTNAuthoriseDDMandateVerification() {
    await this.BTNAuthoriseDDMandateVerification.click();
}

// Authorise Return Reject Direct Debits
async clickAuthoriseReturnRejectDirectDebits() {
    await this.DDLAuthoriseReturnRejectDirectDebits.click();
}

async clickBTNAuthoriseReturnRejectDirectDebits() {
    await this.BTNAuthoriseReturnRejectDirectDebits.click();
}

// Authorise Cheque Debit Payments
async clickAuthoriseChequeDebitPayments() {
    await this.DDLAuthoriseChequeDebitPayments.click();
}

async clickAuthorisePendingChequeDebitPayments() {
    await this.BTNAuthorisePendingChequeDebitPayments.click();
}

// Return Inward Cleared CHQ Auth
async clickReturnInwardClearedCHQAuth() {
    await this.DDLReturnInwardClearedCHQAuth.click();
}

async clickBTNReturnInwardClearedCHQAuth() {
    await this.BTNReturnInwardClearedCHQAuth.click();
}

// Authorise Payments Pending For Cover
async clickAuthorisePaymentsPendingForCover() {
    await this.DDLAuthorisePaymentsPendingForCover.click();
}

async clickAuthorisePendingPaymentsForCover() {
    await this.BTNAuthorisePendingPaymentsForCover.click();
}

async clickAuthoriseCoverPaymentsMT202() {
    await this.BTNAuthoriseCoverPaymentsMT202.click();
}

// All Transfer Pending Authorise Payments
async clickAllTransferPendingAuthorisePayments() {
    await this.DDLAllTransferPendingAuthorisePayments.click();
}

async clickAllTransferPendingAuthPymtsLevel1() {
    await this.BTNAllTransferPendingAuthPymtsLevel1.click();
}

async clickAllTransferPendingAuthPymtsLevel2() {
    await this.BTNAllTransferPendingAuthPymtsLevel2.click();
}

// Received Files Awaiting Auth
async clickReceivedFilesAwaitingAuth() {
    await this.DDLReceivedFilesAwaitingAuth.click();
}

async clickRcvdMsgFileRepUnauthAuth() {
    await this.BTNRcvdMsgFileRepUnauthAuth.click();
}

async clickRcvdBulkRepairUnauthListAuth() {
    await this.BTNRcvdBulkRepairUnauthListAuth.click();
}

async clickRcvdClaimsUnauthListAuth() {
    await this.BTNRcvdClaimsUnauthListAuth.click();
}

// Investigation Cancellation Auth
async clickInvestigationCancellationAuth() {
    await this.DDLInvestigationCancellationAuth.click();
}

// SWIFT Cancellation
async clickSWIFTCancellation() {
    await this.DDLSWIFTCancellation.click();
}

// Authorise Outward Cancellation Request
async clickAuthoriseOutwardCancellationRequest() {
    await this.DDLAuthoriseOutwardCancellationRequest.click();
}

async clickAuthoriseCancellationRequest() {
    await this.BTNAuthoriseCancellationRequest.click();
}

// Authorise Inward Cancellation Request
async clickAuthoriseInwardCancellationRequest() {
    await this.DDLAuthoriseInwardCancellationRequest.click();
}

async clickAuthoriseAnswers() {
    await this.BTNAuthoriseAnswers.click();
}

async clickAuthoriseFreeFormatMessages() {
    await this.BTNAuthoriseFreeFormatMessages.click();
}

async clickAuthorizeGSRPResponseCamt056() {
    await this.BTNAuthorizeGSRPResponseCamt056.click();
}

async clickInwardReturnOfRedirectPaymentRcvdViaCOV() {
    await this.BTNInwardReturnOfRedirectPaymentRcvdViaCOV.click();
}

// Payment Investigations
async clickPaymentInvestigations() {
    await this.DDLPaymentInvestigations.click();
}

// Authorise Queries Answers
async clickAuthoriseQueriesAnswers() {
    await this.DDLAuthoriseQueriesAnswers.click();
}

async clickAuthoriseAQuery() {
    await this.BTNAuthoriseAQuery.click();
}

async clickAuthoriseAnAnswer() {
    await this.BTNAuthoriseAnAnswer.click();
}

// Authorise Free Format Messages
async clickAuthoriseFreeFormatMessagesPI() {
    await this.DDLAuthoriseFreeFormatMessagesPI.click();
}

async clickAuthoriseFreeFormatMessage() {
    await this.BTNAuthoriseFreeFormatMessage.click();
}

// Authorise Exceptions Investigations
async clickAuthoriseExceptionsInvestigations() {
    await this.DDLAuthoriseExceptionsInvestigations.click();
}

async clickAuthoriseOutwardInvestigation() {
    await this.BTNAuthoriseOutwardInvestigation.click();
}

async clickAuthoriseInwardInvestigation() {
    await this.BTNAuthoriseInwardInvestigation.click();
}

// CT DD CC Cancellation Auth
async clickCTDDCCCancellationAuth() {
    await this.DDLCTDDCCCancellationAuth.click();
}

async clickAwaitingDistributionToClearingAuth() {
    await this.BTNAwaitingDistributionToClearingAuth.click();
}

async clickCancelBeforeDistributionToClearingAuth() {
    await this.BTNCancelBeforeDistributionToClearingAuth.click();
}

// Cancellation Of Return Auth
async clickCancellationOfReturnAuth() {
    await this.DDLCancellationOfReturnAuth.click();
}

async clickCancellationOfReturnBeforeDistribution() {
    await this.BTNCancellationOfReturnBeforeDistribution.click();
}

// Return Reject SWIFT Transfers
async clickReturnRejectSWIFTTransfers() {
    await this.DDLReturnRejectSWIFTTransfers.click();
}

async clickBTNReturnRejectSWIFTTransfers() {
    await this.BTNReturnRejectSWIFTTransfers.click();
}

async clickBTNReturnOfSWIFTCompletedCreditTXN() {
    await this.BTNReturnOfSWIFTCompletedCreditTXN.click();
}

// Authorise Warehouse Payments
async clickAuthoriseWarehousePayments() {
    await this.DDLAuthoriseWarehousePayments.click();
}

async clickWarehousePaymentsUnauthorisedList() {
    await this.BTNWarehousePaymentsUnauthorisedList.click();
}

// Authorise Release Parked Payments
async clickAuthoriseReleaseParkedPayments() {
    await this.DDLAuthoriseReleaseParkedPayments.click();
}

async clickReleaseParkedPaymentsApprove() {
    await this.BTNReleaseParkedPaymentsApprove.click();
}

async clickReleaseParentParkedPymtsApprove() {
    await this.BTNReleaseParentParkedPymtsApprove.click();
}

// Authorise Payment Reversal
async clickAuthorisePaymentReversal() {
    await this.DDLAuthorisePaymentReversal.click();
}

async clickAuthoriseRejectReversalOfPayments() {
    await this.BTNAuthoriseRejectReversalOfPayments.click();
}

// Clrg Status Report Exceptions Auth
async clickClrgStatusReportExceptionsAuth() {
    await this.DDLClrgStatusReportExceptionsAuth.click();
}

async clickFileLevelExceptionAuth() {
    await this.BTNFileLevelExceptionAuth.click();
}

async clickBulkLevelExceptionAuth() {
    await this.BTNBulkLevelExceptionAuth.click();
}

async clickTxnLevelExceptionAuth() {
    await this.BTNTxnLevelExceptionAuth.click();
}

// Manual Funds Authorisation
async clickDDLManualFundsAuthorisation() {
    await this.DDLManualFundsAuthorisation.click();
}

// Requests For Pending Approval
async clickRequestsForPendingApproval() {
    await this.DDLRequestsForPendingApproval.click();
}

async clickPendingApproval2Eyes() {
    await this.BTNPendingApproval2Eyes.click();
}

async clickPendingApproval4Eyes() {
    await this.BTNPendingApproval4Eyes.click();
}

async clickPendingAuthorise() {
    await this.BTNPendingAuthorise.click();
}

async clickViewAuthorisationHistory() {
    await this.BTNViewAuthorisationHistory.click();
}

// Manual Filter Payments
async clickDDLManualFilterPayments() {
    await this.DDLManualFilterPayments.click();
}

async clickManualFilterPaymentsUnauthLevel1() {
    await this.BTNManualFilterPaymentsUnauthLevel1.click();
}

async clickManualFilterPaymentsUnauthLevel2() {
    await this.BTNManualFilterPaymentsUnauthLevel2.click();
}

// Standing Orders
async clickDDLStandingOrders() {
    await this.DDLStandingOrders.click();
}

async clickAuthoriseFixedStandingOrders() {
    await this.BTNAuthoriseFixedStandingOrders.click();
}

// Authorise SWIFTOUT RTGS Exceptions
async clickAuthoriseSWIFTOUTRTGSExceptions() {
    await this.DDLAuthoriseSWIFTOUTRTGSExceptions.click();
}

async clickBTNAuthoriseSWIFTOUTRTGSExceptions() {
    await this.BTNAuthoriseSWIFTOUTRTGSExceptions.click();
}

// Risk Filter Breach Queue
async clickRiskFilterBreachQueue() {
    await this.DDLRiskFilterBreachQueue.click();
}

async clickApproveRejectRiskFilterBreachAuth1() {
    await this.BTNApproveRejectRiskFilterBreachAuth1.click();
}

async clickApproveRejectRiskFilterBreachAuth2() {
    await this.BTNApproveRejectRiskFilterBreachAuth2.click();
}

// Authorise Return Credit Transfers
async clickAuthoriseReturnCreditTransfers() {
    await this.DDLAuthoriseReturnCreditTransfers.click();
}

async clickBTNAuthoriseReturnCreditTransfers() {
    await this.BTNAuthoriseReturnCreditTransfers.click();
}

// Authorise SWIFT ISO Exceptions
async clickAuthoriseSWIFTISOExceptions() {
    await this.DDLAuthoriseSWIFTISOExceptions.click();
}

async clickBTNAuthoriseSWIFTISOExceptions() {
    await this.BTNAuthoriseSWIFTISOExceptions.click();
}

// Authorise RTGS Exceptions
async clickAuthoriseRTGSExceptions() {
    await this.DDLAuthoriseRTGSExceptions.click();
}

async clickBTNAuthoriseRTGSExceptions() {
    await this.BTNAuthoriseRTGSExceptions.click();
}

// Instant Payments
async clickInstantPaymentsDropdown() {
    await this.ddlInstantPaymentsDropdown.click();
}

// Investigation And Reversal
async clickInvestigationAndReversalDropdown() {
    await this.ddlInvestigationAndReversalDropdown.click();
}

// Unconfirmed Instant Payments
async clickUnconfirmedInstantPaymentsDropdown() {
    await this.ddlUnconfirmedInstantPaymentsDropdown.click();
}

async clickUnconfirmedExpTimeOutAllButton() {
    await this.btnUnconfirmedExpTimeOutAllButton.click();
}

async clickInwardInvestigationRepairButton() {
    await this.btnInwardInvestigationRepairButton.click();
}

async clickReversedInwardPaymentsButton() {
    await this.btnReversedInwardPaymentsButton.click();
}

// Instant Payments Cancellations
async clickInstantPaymentsCancellationsDropdown() {
    await this.ddlInstantPaymentsCancellationsDropdown.click();
}

// Instant Create Cancellation Request
async clickInstantCreateCancellationRequestDropdown() {
    await this.ddlInstantCreateCancellationRequestDropdown.click();
}

async clickInstantBankInitiatedCancellationRequestButton() {
    await this.btnInstantBankInitiatedCancellationRequestButton.click();
}

async clickInstantCustomerInitiatedCancellationRequestButton() {
    await this.btnInstantCustomerInitiatedCancellationRequestButton.click();
}

async clickInstantBulkBankInitiatedCancellationRequestButton() {
    await this.btnInstantBulkBankInitiatedCancellationRequestButton.click();
}

async clickInstantAuthBulkCancellationReqInButton() {
    await this.btnInstantAuthBulkCancellationReqInButton.click();
}

async clickInstantAuthoriseOutwardCancellationRequestButton() {
    await this.btnInstantAuthoriseOutwardCancellationRequestButton.click();
}

async clickInstantAuthBulkCancellationReqOutButton() {
    await this.btnInstantAuthBulkCancellationReqOutButton.click();
}

async clickInstantDeleteUnapprovedCancellationRequestsButton() {
    await this.btnInstantDeleteUnapprovedCancellationRequestsButton.click();
}

async clickInstantInwardCancellationReqRepairButton() {
    await this.btnInstantInwardCancellationReqRepairButton.click();
}

async clickInstantInwardCancellationReqEnquiryButton() {
    await this.btnInstantInwardCancellationReqEnquiryButton.click();
}

async clickInstantInwardCancellationReqAuthDelButton() {
    await this.btnInstantInwardCancellationReqAuthDelButton.click();
}

async clickInstantUnmatchedInRequestStatusUpdateButton() {
    await this.btnInstantUnmatchedInRequestStatusUpdateButton.click();
}

async clickInstantPendingCancellationsReqUpdateButton() {
    await this.btnInstantPendingCancellationsReqUpdateButton.click();
}

async clickInstantOutwardCancellationReqViewStatusButton() {
    await this.btnInstantOutwardCancellationReqViewStatusButton.click();
}

async clickInstantCancellationReqIPNotProcessedButton() {
    await this.btnInstantCancellationReqIPNotProcessedButton.click();
}

async clickInstantCancellationReqIPViewStatusButton() {
    await this.btnInstantCancellationReqIPViewStatusButton.click();
}

async clickInstantOutgoingCancellationReqUpdateButton() {
    await this.btnInstantOutgoingCancellationReqUpdateButton.click();
}

async clickUnauthorisedEBQAQueriesButton() {
    await this.btnUnauthorisedEBQAQueriesButton.click();
}

// Same Day Instant Payment Enquiry
async clickSameDayInstPaymentEnquiryDropdown() {
    await this.ddlSameDayInstPaymentEnquiryDropdown.click();
}

async clickPendingProcessedPaymentsCurrDateButton() {
    await this.btnPendingProcessedPaymentsCurrDateButton.click();
}

// Pending Processed Instant Payments
async clickPendingProcessedInstantPaymentsDropdown() {
    await this.ddlPendingProcessedInstantPaymentsDropdown.click();
}

async clickPendingProcessedInstPaymentsButton() {
    await this.btnPendingProcessedInstPaymentsButton.click();
}

// Pending Processed UK FPS Payments
async clickPendingProcessedUKFPSPaymentsDropdown() {
    await this.ddlPendingProcessedUKFPSPaymentsDropdown.click();
}

async clickPendingAndProcessedUKFPSPaymentsButton() {
    await this.btnPendingAndProcessedUKFPSPaymentsButton.click();
}

// Instant Payments Unresolved Posting
async clickInstantPaymentsUnresolvedPostingDropdown() {
    await this.ddlInstantPaymentsUnresolvedPostingDropdown.click();
}

async clickUnresolvedPostingFailuresButton() {
    await this.btnUnresolvedPostingFailuresButton.click();
}

// Action Unconfirmed Instant Payments
async clickActionUnconfirmedInstantPaymentsDropdown() {
    await this.ddlActionUnconfirmedInstantPaymentsDropdown.click();
}

async clickUnconfirmedInstantOutgoingPaymentButton() {
    await this.btnUnconfirmedInstantOutgoingPaymentButton.click();
}

async clickUnconfirmedInstantIncomingPaymentButton() {
    await this.btnUnconfirmedInstantIncomingPaymentButton.click();
}

async clickUnconfirmedOutgoingReturnPaymentButton() {
    await this.btnUnconfirmedOutgoingReturnPaymentButton.click();
}

async clickUnconfirmedIncomingReturnPaymentButton() {
    await this.btnUnconfirmedIncomingReturnPaymentButton.click();
}

async clickAuthoriseUnconfirmedInstantPaymentsButton() {
    await this.btnAuthoriseUnconfirmedInstantPaymentsButton.click();
}

// Miscellaneous Payment Messages
async clickMiscellaneousPaymentMessagesDropdown() {
    await this.ddlMiscellaneousPaymentMessagesDropdown.click();
}

async clickRequestForTransferMT101Button() {
    await this.btnRequestForTransferMT101Button.click();
}

async clickAuthoriseDeleteMT101Button() {
    await this.btnAuthoriseDeleteMT101Button.click();
}

async clickCreateStopPaymentOfChequeOutwardMT111Button() {
    await this.btnCreateStopPaymentOfChequeOutwardMT111Button.click();
}

async clickCreateStopPaymentOfChequeOutwardGenericButton() {
    await this.btnCreateStopPaymentOfChequeOutwardGenericButton.click();
}

async clickAuthoriseDeleteStopPaymentOfChequesSentButton() {
    await this.btnAuthoriseDeleteStopPaymentOfChequesSentButton.click();
}

async clickViewAmendUnauthorisedStopPaymentRequestsSentButton() {
    await this.btnViewAmendUnauthorisedStopPaymentRequestsSentButton.click();
}

async clickViewStopPaymentRequestsOutwardButton() {
    await this.btnViewStopPaymentRequestsOutwardButton.click();
}

async clickCreateReceivedStopRequestStatusGenericButton() {
    await this.btnCreateReceivedStopRequestStatusGenericButton.click();
}

async clickViewAmendUnauthorisedStopRequestStatusReceivedButton() {
    await this.btnViewAmendUnauthorisedStopRequestStatusReceivedButton.click();
}

async clickAuthoriseDeleteStopRequestStatusReceivedButton() {
    await this.btnAuthoriseDeleteStopRequestStatusReceivedButton.click();
}

async clickViewStopRequestStatusReceivedButton() {
    await this.btnViewStopRequestStatusReceivedButton.click();
}

async clickAdviceOfChargesMT190MT290Button() {
    await this.btnAdviceOfChargesMT190MT290Button.click();
}

async clickAuthoriseDeleteMT190290Button() {
    await this.btnAuthoriseDeleteMT190290Button.click();
}

async clickRequestForChargesMT191MT291Button() {
    await this.btnRequestForChargesMT191MT291Button.click();
}

async clickAuthoriseDeleteMT191MT291Button() {
    await this.btnAuthoriseDeleteMT191MT291Button.click();
}

async clickSendFreeFormatMessageMTn99Button() {
    await this.btnSendFreeFormatMessageMTn99Button.click();
}

async clickAuthoriseDeleteMT199MT299MT999Button() {
    await this.btnAuthoriseDeleteMT199MT299MT999Button.click();
}

async clickSendCancellationMessageMTn92Button() {
    await this.btnSendCancellationMessageMTn92Button.click();
}

async clickAuthoriseDeleteMT192MT292MT992Button() {
    await this.btnAuthoriseDeleteMT192MT292MT992Button.click();
}

async clickSendQueryMessagesMT195MT295MT995Button() {
    await this.btnSendQueryMessagesMT195MT295MT995Button.click();
}

async clickAuthoriseDeleteMT195MT295MT995Button() {
    await this.btnAuthoriseDeleteMT195MT295MT995Button.click();
}

async clickSendAnswerMessagesMT196MT296MT996Button() {
    await this.btnSendAnswerMessagesMT196MT296MT996Button.click();
}

async clickAuthoriseDeleteMT196MT296MT996Button() {
    await this.btnAuthoriseDeleteMT196MT296MT996Button.click();
}

// Enquiries
async clickEnquiriesDropdown() {
    await this.ddlEnquiriesDropdown.click();
}

async clickMT101RequestButton() {
    await this.btnMT101RequestButton.click();
}

async clickMT111RequestButton() {
    await this.btnMT111RequestButton.click();
}

async clickStatusOfStopPaymentRequestMT112Button() {
    await this.btnStatusOfStopPaymentRequestMT112Button.click();
}

async clickChargeRequestButton() {
    await this.btnChargeRequestButton.click();
}

async clickFreeMessagesButton() {
    await this.btnFreeMessagesButton.click();
}

async clickQueriesAnswersButton() {
    await this.btnQueriesAnswersButton.click();
}

async clickListOfClaimsGeneratedAutomaticallyButton() {
    await this.btnListOfClaimsGeneratedAutomaticallyButton.click();
}

// Claims
async clickSwiftConfirmationTrackerButton() {
    await this.btnSwiftConfirmationTrackerButton.click();
}

async clickActionOnUnpaidClaimsButton() {
    await this.btnActionOnUnpaidClaimsButton.click();
}

async clickAuthoriseDeleteUnpaidClaimsButton() {
    await this.btnAuthoriseDeleteUnpaidClaimsButton.click();
}

// Direct Debit Mandates
async clickDirectDebitMandatesDropdown() {
    await this.ddlDirectDebitMandatesDropdown.click();
}

async clickDdManagementButton() {
    await this.btnDdManagementButton.click();
}

// Nostro/Vostro Accounts
async clickNostroVostroAccountsDropdown() {
    await this.ddlNostroVostroAccountsDropdown.click();
}

async clickOpenVostroAccountButton() {
    await this.btnOpenVostroAccountButton.click();
}

async clickOpenNostroAccountButton() {
    await this.btnOpenNostroAccountButton.click();
}

async clickAmendVostroNostroAccountButton() {
    await this.btnAmendVostroNostroAccountButton.click();
}

async clickAuthoriseVostroNostroAccountButton() {
    await this.btnAuthoriseVostroNostroAccountButton.click();
}

async clickNostroBalancePositionButton() {
    await this.btnNostroBalancePositionButton.click();
}

// Beneficiary Details
async clickBeneficiaryDetailsDropdown() {
    await this.ddlBeneficiaryDetailsDropdown.click();
}

async clickBeneficiaryDetailsButton() {
    await this.btnBeneficiaryDetailsButton.click();
}

// Drafts Inventory
async clickDraftsInventoryDropdown() {
    await this.ddlDraftsInventoryDropdown.click();
}

async clickReceiptOfStockButton() {
    await this.btnReceiptOfStockButton.click();
}

async clickAuthoriseDeleteReceiptOfStockButton() {
    await this.btnAuthoriseDeleteReceiptOfStockButton.click();
}

async clickDraftInventoryStopPaymentForDraftsButton() {
    await this.btnDraftInventoryStopPaymentForDraftsButton.click();
}

async clickAuthoriseDeleteStopPaymentOfDraftsButton() {
    await this.btnAuthoriseDeleteStopPaymentOfDraftsButton.click();
}

async clickDraftInventoryRevokeStopPaymentOfDraftButton() {
    await this.btnDraftInventoryRevokeStopPaymentOfDraftButton.click();
}

async clickAuthoriseDeleteRevokeStopPaymentOfDraftButton() {
    await this.btnAuthoriseDeleteRevokeStopPaymentOfDraftButton.click();
}

// Expected Receipts
async clickExpectedReceiptsDropdown() {
    await this.ddlExpectedReceiptsDropdown.click();
}

// Expected Receipts Creation
async clickExpectedReceiptsCreationDropdown() {
    await this.ddlExpectedReceiptsCreationDropdown.click();
}

async clickCreateMT210ExpectedReceiptButton() {
    await this.btnCreateMT210ExpectedReceiptButton.click();
}

async clickCreateCamt057ExpectedReceiptButton() {
    await this.btnCreateCamt057ExpectedReceiptButton.click();
}

async clickExpectedReceiptsManualButton() {
    await this.btnExpectedReceiptsManualButton.click();
}

async clickAuthDelExpectedReceiptItemButton() {
    await this.btnAuthDelExpectedReceiptItemButton.click();
}

async clickCreateCamt058ExpectedReceiptButton() {
    await this.btnCreateCamt058ExpectedReceiptButton.click();
}

// Expected Receipts Enquiries
async clickExpectedReceiptsEnquiriesDropdown() {
    await this.ddlExpectedReceiptsEnquiriesDropdown.click();
}

async clickExpectedBalanceProjectionButton() {
    await this.btnExpectedBalanceProjectionButton.click();
}

async clickExpiredRecordsButton() {
    await this.btnExpiredRecordsButton.click();
}

async clickProjectedCashFlowButton() {
    await this.btnProjectedCashFlowButton.click();
}

async clickExpectedCancelAndReceiptsUnmatchedItemsButton() {
    await this.btnExpectedCancelAndReceiptsUnmatchedItemsButton.click();
}

async clickExpectedCancelAndReceiptsMatchedItemsButton() {
    await this.btnExpectedCancelAndReceiptsMatchedItemsButton.click();
}

async clickExpectedReceiptsInExceptionButton() {
    await this.btnExpectedReceiptsInExceptionButton.click();
}

// Payment & Cover
async clickPaymentAndCoverDropdown() {
    await this.ddlPaymentAndCoverDropdown.click();
}

async clickStartManualMatchingButton() {
    await this.btnStartManualMatchingButton.click();
}

async clickAuthoriseDeletePaymentAndCoverItemsButton() {
    await this.btnAuthoriseDeletePaymentAndCoverItemsButton.click();
}

async clickPaymentAndCoverMatchedItemsButton() {
    await this.btnPaymentAndCoverMatchedItemsButton.click();
}

// External Request Pending Responses
async clickExternalRequestPendingResponsesDropdown() {
    await this.ddlExternalRequestPendingResponsesDropdown.click();
}

async clickAllExternalRequestsButton() {
    await this.btnAllExternalRequestsButton.click();
}

async clickPendingResponsesAcctValidationButton() {
    await this.btnPendingResponsesAcctValidationButton.click();
}

async clickPendingResponsesFundsReservationButton() {
    await this.btnPendingResponsesFundsReservationButton.click();
}

async clickPendingResponsesCancelReservationButton() {
    await this.btnPendingResponsesCancelReservationButton.click();
}

async clickPendingResponsesPostingAcctEntriesButton() {
    await this.btnPendingResponsesPostingAcctEntriesButton.click();
}

async clickPendingResponsesReversalAcctEntriesButton() {
    await this.btnPendingResponsesReversalAcctEntriesButton.click();
}

async clickPendingResponsesMandateValidationButton() {
    await this.btnPendingResponsesMandateValidationButton.click();
}

async clickPendingResponsesMandateModificationButton() {
    await this.btnPendingResponsesMandateModificationButton.click();
}

async clickUpdateOfMandateLimitButton() {
    await this.btnUpdateOfMandateLimitButton.click();
}

// External Request Failed Responses
async clickExternalRequestFailedResponsesDropdown() {
    await this.ddlExternalRequestFailedResponsesDropdown.click();
}

async clickFailedResponsesCancelReservationButton() {
    await this.btnFailedResponsesCancelReservationButton.click();
}

async clickFailedResponsesReOpenMandateButton() {
    await this.btnFailedResponsesReOpenMandateButton.click();
}

async clickFailedResponsesUpdateMandateButton() {
    await this.btnFailedResponsesUpdateMandateButton.click();
}

// Drawee Bank FCY Drafts Operations
async clickDraweeBankFCYDraftsOperationsDropdown() {
    await this.ddlDraweeBankFCYDraftsOperationsDropdown.click();
}

async clickCreateReceivedAdviceOfChequesMT110Button() {
    await this.btnCreateReceivedAdviceOfChequesMT110Button.click();
}

async clickCreateReceivedAdviceOfChequesCAMT107Button() {
    await this.btnCreateReceivedAdviceOfChequesCAMT107Button.click();
}

async clickAuthoriseReceivedAdviceOfChequesButton() {
    await this.btnAuthoriseReceivedAdviceOfChequesButton.click();
}

async clickViewReceivedChequeAdvicesButton() {
    await this.btnViewReceivedChequeAdvicesButton.click();
}

async clickCreateStopPaymentOfChequeInwardMT111Button() {
    await this.btnCreateStopPaymentOfChequeInwardMT111Button.click();
}

async clickCreateStopPaymentOfChequeInwardGenericButton() {
    await this.btnCreateStopPaymentOfChequeInwardGenericButton.click();
}

async clickViewRespondUnauthorisedStopPaymentRequestOfChequesButton() {
    await this.btnViewRespondUnauthorisedStopPaymentRequestOfChequesButton.click();
}

async clickAuthoriseDeleteRequestResponseStopPaymentOfChequesButton() {
    await this.btnAuthoriseDeleteRequestResponseStopPaymentOfChequesButton.click();
}

async clickViewRequestResponseStopPaymentOfChequesButton() {
    await this.btnViewRequestResponseStopPaymentOfChequesButton.click();
}

async clickViewStopRequestStatusOutwardButton() {
    await this.btnViewStopRequestStatusOutwardButton.click();
}

// Multiple Payments Exception Handling
async clickMultiplePaymentsExceptionHandlingDropdown() {
    await this.ddlMultiplePaymentsExceptionHandlingDropdown.click();
}

async clickCancelPaymentsInIntermediateStatusButton() {
    await this.btnCancelPaymentsInIntermediateStatusButton.click();
}

async clickAmendParkedPaymentsButton() {
    await this.btnAmendParkedPaymentsButton.click();
}

async clickReleaseRepairPaymentsButton() {
    await this.btnReleaseRepairPaymentsButton.click();
}

async clickReleasePaymentsAwaitingExternalRequestsButton() {
    await this.btnReleasePaymentsAwaitingExternalRequestsButton.click();
}

// Input Payment Order
async clickInputPaymentOrderDropdown() {
    await this.ddlInputPaymentOrderDropdown.click();
}

async clickAccountTransferHomeButton() {
    await this.btnAccountTransferHomeButton.click();
}

async clickAccountTransferOtherButton() {
    await this.btnAccountTransferOtherButton.click();
}

async clickFundingRequestButton() {
    await this.btnFundingRequestButton.click();
}

async clickPLTransferButton() {
    await this.btnPLTransferButton.click();
}

async clickDomesticButton() {
    await this.btnDomesticButton.click();
}

async clickDomesticPlusButton() {
    await this.btnDomesticPlusButton.click();
}

async clickInternationalButton() {
    await this.btnInternationalButton.click();
}

async clickAALoanDisbursementButton() {
    await this.btnAALoanDisbursementButton.click();
}

async clickAADepositPaymentsButton() {
    await this.btnAADepositPaymentsButton.click();
}

async clickSwiftCBPRCustomerTransferButton() {
    await this.btnSwiftCBPRCustomerTransferButton.click();
}

async clickSwiftCBPRBankTransferButton() {
    await this.btnSwiftCBPRBankTransferButton.click();
}

async clickAfricaButton() {
    await this.btnAfricaButton.click();
}

async clickArgentinaButton() {
    await this.btnArgentinaButton.click();
}

async clickAustraliaButton() {
    await this.btnAustraliaButton.click();
}

async clickEuropeanUnionButton() {
    await this.btnEuropeanUnionButton.click();
}

async clickHongKongButton() {
    await this.btnHongKongButton.click();
}

async clickHungaryButton() {
    await this.btnHungaryButton.click();
}

async clickItalyButton() {
    await this.btnItalyButton.click();
}

async clickIsraelButton() {
    await this.btnIsraelButton.click();
}

async clickSaudiArabiaButton() {
    await this.btnSaudiArabiaButton.click();
}

async clickSriLankaButton() {
    await this.btnSriLankaButton.click();
}

async clickSwitzerlandButton() {
    await this.btnSwitzerlandButton.click();
}

async clickUkButton() {
    await this.btnUkButton.click();
}

async clickUsButton() {
    await this.btnUsButton.click();
}

async clickTunisiaButton() {
    await this.btnTunisiaButton.click();
}

async clickIndiaButton() {
    await this.btnIndiaButton.click();
}

// Drafts
async clickDraftsDropdown() {
    await this.ddlDraftsDropdown.click();
}

async clickDraftIssueInLocalCurrencyButton() {
    await this.btnDraftIssueInLocalCurrencyButton.click();
}

async clickDraftIssueInForeignCurrencyButton() {
    await this.btnDraftIssueInForeignCurrencyButton.click();
}

async clickDraftsAwaitingPrintingButton() {
    await this.btnDraftsAwaitingPrintingButton.click();
}

async clickDraftPaymentButton() {
    await this.btnDraftPaymentButton.click();
}

async clickDraftsStopPaymentForDraftsButton() {
    await this.btnDraftsStopPaymentForDraftsButton.click();
}

async clickStopPaymentOfDraftsAuthDelButton() {
    await this.btnStopPaymentOfDraftsAuthDelButton.click();
}

async clickDraftsRevokeStopPaymentOfDraftButton() {
    await this.btnDraftsRevokeStopPaymentOfDraftButton.click();
}

async clickRevokeStopPaymentAuthDelButton() {
    await this.btnRevokeStopPaymentAuthDelButton.click();
}

async clickCancellationOfDraftsButton() {
    await this.btnCancellationOfDraftsButton.click();
}

async clickSwiftCBPRIssuanceOfForeignCurrencyDraftButton() {
    await this.btnSwiftCBPRIssuanceOfForeignCurrencyDraftButton.click();
}

// Amend Payment Order
async clickAmendPaymentOrderDropdown() {
    await this.ddlAmendPaymentOrderDropdown.click();
}

async clickAmendPaymentOrderButton() {
    await this.btnAmendPaymentOrderButton.click();
}

async clickAmendPaymentOrderExceptionButton() {
    await this.btnAmendPaymentOrderExceptionButton.click();
}

async clickPaymentOrderSTOExceptionButton() {
    await this.btnPaymentOrderSTOExceptionButton.click();
}

async clickPaymentOrderDepositExceptionButton() {
    await this.btnPaymentOrderDepositExceptionButton.click();
}

async clickPaymentOrderLoanExceptionButton() {
    await this.btnPaymentOrderLoanExceptionButton.click();
}

async clickPaymentOrderDrawingsExceptionButton() {
    await this.btnPaymentOrderDrawingsExceptionButton.click();
}

// Authorise Delete Payment Order
async clickAuthoriseDeletePaymentOrderDropdown() {
    await this.ddlAuthoriseDeletePaymentOrderDropdown.click();
}

async clickAuthoriseDeletePaymentOrderButton() {
    await this.btnAuthoriseDeletePaymentOrderButton.click();
}

// Payment Order Notifications
async clickPaymentOrderNotificationsDropdown() {
    await this.ddlPaymentOrderNotificationsDropdown.click();
}

async clickPoNotificationsInputButton() {
    await this.btnPoNotificationsInputButton.click();
}

async clickPoNotificationsExceptionButton() {
    await this.btnPoNotificationsExceptionButton.click();
}

async clickPoNotificationsAuthoriseButton() {
    await this.btnPoNotificationsAuthoriseButton.click();
}

async clickPoNotificationsViewButton() {
    await this.btnPoNotificationsViewButton.click();
}

// Payment Order Enquiries
async clickPaymentOrderEnquiriesDropdown() {
    await this.ddlPaymentOrderEnquiriesDropdown.click();
}

async clickPaymentOrderEnquiriesButton() {
    await this.btnPaymentOrderEnquiriesButton.click();
}

async clickTrackPaymentStatusButton() {
    await this.btnTrackPaymentStatusButton.click();
}

async clickPaymentOrderLiveHistoricalPaymentInformationButton() {
    await this.btnPaymentOrderLiveHistoricalPaymentInformationButton.click();
}

async clickPaymentOrderFundsDecisionButton() {
    await this.btnPaymentOrderFundsDecisionButton.click();
}

// Recalls And Investigations
async clickRecallsAndInvestigationsDropdown() {
    await this.ddlRecallsAndInvestigationsDropdown.click();
}

// Outward Recalls
async clickOutwardRecallsDropdown() {
    await this.ddlOutwardRecallsDropdown.click();
}

async clickInitiateRecallButton() {
    await this.btnInitiateRecallButton.click();
}

async clickViewStatusOfRecallsSentButton() {
    await this.btnViewStatusOfRecallsSentButton.click();
}

// Bulk Payments
async clickBulkPayments() {
    await this.DDLBulkPayments.click();
}

async clickBulkFileUpload() {
    await this.BTNBulkFileUpload.click();
}

async clickCaptureNewBulk() {
    await this.BTNCaptureNewBulk.click();
}

async clickSubmitCancelBulk() {
    await this.BTNSubmitCancelBulk.click();
}

async clickAuthorizeRejectBulk() {
    await this.BTNAuthorizeRejectBulk.click();
}

async clickViewCancelOrder() {
    await this.BTNViewCancelOrder.click();
}

async clickAuthorizeRejectOrder() {
    await this.BTNAuthorizeRejectOrder.click();
}

async clickViewBulkPayments() {
    await this.BTNViewBulkPayments.click();
}

async clickViewCancelWarehousedBulk() {
    await this.BTNViewCancelWarehousedBulk.click();
}

async clickAuthoriseCancellationOfWarehousedBulk() {
    await this.BTNAuthoriseCancellationOfWarehousedBulk.click();
}

async clickViewBulkPaymentOrders() {
    await this.BTNViewBulkPaymentOrders.click();
}

async clickViewBulkFiles() {
    await this.BTNViewBulkFiles.click();
}

// Payment Interface Requests
async clickPaymentInterfaceRequests() {
    await this.DDLPaymentInterfaceRequests.click();
}

async clickAccountInquiryDebit() {
    await this.BTNAccountInquiryDebit.click();
}

async clickAccountInquiryCredit() {
    await this.BTNAccountInquiryCredit.click();
}

async clickAccountInquiryDebitCharges() {
    await this.BTNAccountInquiryDebitCharges.click();
}

async clickAccountInquiryCreditCharges() {
    await this.BTNAccountInquiryCreditCharges.click();
}

async clickReserveEntries() {
    await this.BTNReserveEntries.click();
}

async clickPostingEntries() {
    await this.BTNPostingEntries.click();
}

async clickPostingEntriesWithBalance() {
    await this.BTNPostingEntriesWithBalance.click();
}

async clickReversePosting() {
    await this.BTNReversePosting.click();
}

async clickMandateValidation() {
    await this.BTNMandateValidation.click();
}

async clickMandateUpdate() {
    await this.BTNMandateUpdate.click();
}

async clickMandateReopen() {
    await this.BTNMandateReopen.click();
}

async clickCancelReservation() {
    await this.BTNCancelReservation.click();
}

async clickAccountCheckFeeInquiryForDebit() {
    await this.BTNAccountCheckFeeInquiryForDebit.click();
}

async clickAccountCheckFeeInquiryForCredit() {
    await this.BTNAccountCheckFeeInquiryForCredit.click();
}

};