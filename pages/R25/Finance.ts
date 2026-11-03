import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class R25_Finance extends BasePage {

    readonly page: Page;

    // Finance Module
    readonly ddlFinanceDropdown: Locator;

    // Ledger Monitor and Control
    readonly ddlLedgerMonitorAndControlDropdown: Locator;
    readonly btnTotalsByApplication: Locator;
    readonly btnReprintGeneralLedgerReport: Locator;
    readonly btnReprintConsolidatedGeneralLedgerReport: Locator;
    readonly btnGLBalanceOverviewGLShort: Locator;
    readonly btnContractWiseBalances: Locator;

    // Finance Operations
    readonly ddlFinanceOperationsDropdown: Locator;
    readonly btnGLLineMapping: Locator;
    readonly btnPLLineMapping: Locator;
    readonly btnOpenInternalAccount: Locator;
    readonly btnUnauthorisedInternalAccount: Locator;
    readonly btnAuthoriseDeleteInternalAccount: Locator;

    // View UMB General Ledger Reports
    readonly ddlViewUMBGeneralLedgerReportsDropdown: Locator;
    readonly btnViewUMBBalanceSheet: Locator;
    readonly btnViewUMBProfitLoss: Locator;
    readonly btnViewUMBCCYWiseGeneralLedgerReport: Locator;

    // View PMB General Ledger Reports
    readonly ddlViewPMBGeneralLedgerReportsDropdown: Locator;
    readonly btnViewPMBBalanceSheet: Locator;
    readonly btnViewPMBProfitLoss: Locator;
    readonly btnViewPMBCCYWiseGeneralLedgerReport: Locator;

    // Provision
    readonly ddlProvisionDropdown: Locator;
    readonly btnAssetDetails: Locator;
    readonly btnCustomerDetails: Locator;
    readonly btnAuthoriseDeleteAssetDetails: Locator;
    readonly btnAuthoriseDeleteCustomerDetails: Locator;
    readonly btnAuthoriseDeletePVProfile: Locator;

    // Enquiry
    readonly ddlEnquiry: Locator;
    readonly btnAssetClassification: Locator;
    readonly btnCustomerClassification: Locator;
    readonly btnProvisionSummary: Locator;
    readonly btnAssetClassificationHist: Locator;
    readonly btnCustomerClassificationHist: Locator;
    readonly btnFinancialAssetsAssessedUnderStandardProvisioning: Locator;

    // Regulatory DOD
    readonly ddlRegulatoryDOD: Locator;
    readonly ddlAssetLevelDODDetails: Locator;
    readonly btnInputAmendAssetLevelDPDDetails: Locator;
    readonly btnAuthorizeAssetLevelDPDDetails: Locator;
    readonly ddlObligorLevelDODDetails: Locator;
    readonly btnInputAmendObligorLevelDPDDetails: Locator;
    readonly btnAuthorizeObligorLevelDPDDetails: Locator;
    readonly btnCustomerAndAssetLevelDODDetails: Locator;

    // Pay/Receive Customer Balances
    readonly ddlPayReceiveCustomerBalancesDropdown: Locator;
    readonly btnPayReceiveCustomerBalance: Locator;

    // Hedge Operations
    readonly ddlHedgeOperationsDropdown: Locator;
    readonly btnHedgeIASGroup: Locator;
    readonly btnEnquiries: Locator;

    // Investigation Reports
    readonly ddlInvestigationReportsDropdown: Locator;
    readonly btnViewGeneralLedgerReportByMvmtCRFKeys: Locator;
    readonly btnBreakdownOfLinesByCRFKeys: Locator;
    readonly btnAccountBalanceInIFAccounting: Locator;

    // Finance Maintenance
    readonly ddlFinanceMaintenanceDropdown: Locator;
    readonly btnCreateAmendCategory: Locator;
    readonly btnCreateAmendSector: Locator;
    readonly btnCreateAmendIndustryCode: Locator;
    readonly btnCreateAmendReportLine: Locator;
    readonly btnCreateAmendRangeName: Locator;
    readonly btnCreateAmendReportHead: Locator;
    readonly btnCreateAmendColumnType: Locator;

    // Fixed Asset Maintenance
    readonly ddlFixedAssetMaintenanceDropdown: Locator;
    readonly btnCaptureNewFixedAsset: Locator;
    readonly btnFindFixedAsset: Locator;

    // Journal Facility
    readonly ddlJournalFacilityDropdown: Locator;
    readonly btnLcyTransactionEntries: Locator;
    readonly btnFcyTransactionEntries: Locator;
    readonly btnForeignExchangeTransactionsFT: Locator;
    readonly btnReversalOfTransactionEntries: Locator;
    readonly btnAmendJournalEntry: Locator;
    readonly btnAuthoriseDeleteJournalEntry: Locator;
    readonly btnAuthoriseDeleteForexTransactionsFT: Locator;

    // Accounting Entries Enquiry
    readonly ddlAccountingEntriesEnquiry: Locator;
    readonly btnListOfUnauthorisedTransactionEntries: Locator;
    readonly btnListOfTransactionEntries: Locator;
    readonly btnViewPLCategoryEntries: Locator;
    readonly btnViewPositionEntryDetail: Locator;
    readonly btnViewAccountEntries: Locator;
    readonly btnViewForwardEntries: Locator;

    // Data Capture Enquiry
    readonly ddlDataCaptureEnquiryDropdown: Locator;
    readonly btnDataCaptureJournal: Locator;
    readonly btnDataCaptureBatch: Locator;

    // View COB Reports
    readonly ddlViewCOBReportsDropdown: Locator;
    readonly btnDataCaptureActivityJournal: Locator;
    readonly btnDataCaptureCOBDifferenceEntries: Locator;
    readonly btnDataCaptureCOBSuspenseEntries: Locator;
    readonly btnViewTxnJournal: Locator;

    // End of Month Post Closure
    readonly ddlEndOfMonthPostClosureDropdown: Locator;
    readonly btnDefineOpenPeriod: Locator;
    readonly btnAdjustmentToAcsPLByDC: Locator;
    readonly btnAdjustmentToAcsPLByFT: Locator;
    readonly btnAuthoriseDeletePCByDC: Locator;
    readonly btnAuthoriseDeletePCByFT: Locator;
    readonly btnUpdatePCDatabase: Locator;
    readonly btnPrintReport: Locator;
    readonly btnClosePeriod: Locator;

    // End of Year Procedures
    readonly ddlEndOfYearProceduresDropdown: Locator;
    readonly btnPLCloseParameter: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        // Finance Module
        this.ddlFinanceDropdown = page.locator('//span[contains(text()," Finance ")]');

        // Ledger Monitor and Control
        this.ddlLedgerMonitorAndControlDropdown = page.locator('//span[text()=" Ledger Monitor and Control "]');
        this.btnTotalsByApplication = page.locator('//a[text()=" Totals by Application "]');
        this.btnReprintGeneralLedgerReport = page.locator('//a[text()=" Reprint General Ledger Report "]');
        this.btnReprintConsolidatedGeneralLedgerReport = page.locator('//a[text()=" Reprint Consolidated General Ledger Report "]');
        this.btnGLBalanceOverviewGLShort = page.locator('//a[text()=" GL Balance Overview - GL Short "]');
        this.btnContractWiseBalances = page.locator('//a[text()=" Contract-wise Balances "]');

        // Finance Operations
        this.ddlFinanceOperationsDropdown = page.locator('//span[contains(text()," Finance - Operations ")]');
        this.btnGLLineMapping = page.locator('//a[text()=" GL Line Mapping "]');
        this.btnPLLineMapping = page.locator('//a[text()=" PL Line Mapping "]');
        this.btnOpenInternalAccount = page.locator('//a[text()=" Open Internal Account "]');
        this.btnUnauthorisedInternalAccount = page.locator('//a[text()=" Unauthorised Internal Account "]');
        this.btnAuthoriseDeleteInternalAccount = page.locator('//a[text()=" Authorise/Delete Internal Account "]');

        // View UMB General Ledger Reports
        this.ddlViewUMBGeneralLedgerReportsDropdown = page.locator('//span[contains(text()," View UMB General Ledger Reports ")]');
        this.btnViewUMBBalanceSheet = page.locator('//a[text()=" View Balance Sheet "]');
        this.btnViewUMBProfitLoss = page.locator('//a[text()=" View Profit & Loss "]');
        this.btnViewUMBCCYWiseGeneralLedgerReport = page.locator('//a[text()=" View CCY wise General Ledger report "]');

        // View PMB General Ledger Reports
        this.ddlViewPMBGeneralLedgerReportsDropdown = page.locator('//span[contains(text()," View PMB General Ledger Reports ")]');
        this.btnViewPMBBalanceSheet = page.locator('//a[text()=" View Balance Sheet "]');
        this.btnViewPMBProfitLoss = page.locator('//a[text()=" View Profit & Loss "]');
        this.btnViewPMBCCYWiseGeneralLedgerReport = page.locator('//a[text()=" View CCY wise General Ledger report "]');

        // Provision
        this.ddlProvisionDropdown = page.locator('//span[contains(text()," Provision ")]');
        this.btnAssetDetails = page.locator('//a[text()=" Asset Details "]');
        this.btnCustomerDetails = page.locator('//a[text()=" Customer Details "]');
        this.btnAuthoriseDeleteAssetDetails = page.locator('//a[text()=" Authorise/Delete Asset Details "]');
        this.btnAuthoriseDeleteCustomerDetails = page.locator('//a[text()=" Authorise/Delete Customer Details "]');
        this.btnAuthoriseDeletePVProfile = page.locator('//a[text()=" Authorise/Delete PV Profile "]');

        // Enquiry
        this.ddlEnquiry = page.locator('//span[text()=" Enquiry "]');
        this.btnAssetClassification = page.locator('//a[text()=" Asset Classification "]');
        this.btnCustomerClassification = page.locator('//a[text()=" Customer Classification "]');
        this.btnProvisionSummary = page.locator('//a[text()=" Provision Summary "]');
        this.btnAssetClassificationHist = page.locator('//a[text()=" Asset Classification Hist "]');
        this.btnCustomerClassificationHist = page.locator('//a[text()=" Customer Classification Hist "]');
        this.btnFinancialAssetsAssessedUnderStandardProvisioning = page.locator('//a[text()=" Financial Assets Assessed under Standard Provisioning "]');

        // Regulatory DOD
        this.ddlRegulatoryDOD = page.locator('//span[text()=" Regulatory DOD "]');
        this.ddlAssetLevelDODDetails = page.locator('//span[text()=" Asset Level DOD Details "]');
        this.btnInputAmendAssetLevelDPDDetails = page.locator('//a[text()=" Input/Amend asset level DPD Details "]');
        this.btnAuthorizeAssetLevelDPDDetails = page.locator('//a[text()=" Authorize asset level DPD Details "]');
        this.ddlObligorLevelDODDetails = page.locator('//span[text()=" Obligor Level DOD Details "]');
        this.btnInputAmendObligorLevelDPDDetails = page.locator('//a[text()=" Input/Amend Obligor level DPD Details "]');
        this.btnAuthorizeObligorLevelDPDDetails = page.locator('//a[text()=" Authorize Obligor level DPD Details "]');
        this.btnCustomerAndAssetLevelDODDetails = page.locator('//a[text()=" Customer and Asset Level DOD Details "]');

        // Pay/Receive Customer Balances
        this.ddlPayReceiveCustomerBalancesDropdown = page.locator('//span[contains(text()," Pay/Receive Customer Balances ")]');
        this.btnPayReceiveCustomerBalance = page.locator('//a[text()=" Pay/Receive Customer Balance "]');

        // Hedge Operations
        this.ddlHedgeOperationsDropdown = page.locator('//span[contains(text()," Hedge Operations ")]');
        this.btnHedgeIASGroup = page.locator('//a[text()=" IAS Hedge Group "]');
        this.btnEnquiries = page.locator('//a[text()=" Enquiries "]');

        // Investigation Reports
        this.ddlInvestigationReportsDropdown = page.locator('//span[contains(text()," Investigation Reports ")]');
        this.btnViewGeneralLedgerReportByMvmtCRFKeys = page.locator('//a[text()=" View General Ledger report by Mvmt( CRF Keys) "]');
        this.btnBreakdownOfLinesByCRFKeys = page.locator('//a[text()=" Breakdown of Lines by CRF keys "]');
        this.btnAccountBalanceInIFAccounting = page.locator('//a[text()=" account Balances in IF accounting "]');

        // Finance Maintenance
        this.ddlFinanceMaintenanceDropdown = page.locator('//span[contains(text(),"Finance Maintenance")]');
        this.btnCreateAmendCategory = page.locator('//a[text()=" Create / Amend Category "]');
        this.btnCreateAmendSector = page.locator('//a[text()=" Create / Amend Sector "]');
        this.btnCreateAmendIndustryCode = page.locator('//a[text()=" Create / Amend an Industry Code "]');
        this.btnCreateAmendReportLine = page.locator('//a[text()=" Create / Amend a Report Line "]');
        this.btnCreateAmendRangeName = page.locator('//a[text()=" Create / Amend a Range Name "]');
        this.btnCreateAmendReportHead = page.locator('//a[text()=" Create / Amend a Report Head "]');
        this.btnCreateAmendColumnType = page.locator('//a[text()=" Create / Amend a Column Type "]');

        // Fixed Asset Maintenance
        this.ddlFixedAssetMaintenanceDropdown = page.locator('//span[contains(text(),"Fixed Asset Maintenance")]');
        this.btnCaptureNewFixedAsset = page.locator('//a[text()=" Capture new Fixed Asset "]');
        this.btnFindFixedAsset = page.locator('//a[text()=" Find Fixed Asset "]');

        // Journal Facility
        this.ddlJournalFacilityDropdown = page.locator('//span[contains(text(),"Journal Facility")]');
        this.btnLcyTransactionEntries = page.locator('//a[text()=" LCY Transaction Entries "]');
        this.btnFcyTransactionEntries = page.locator('//a[text()=" FCY Transaction Entries "]');
        this.btnForeignExchangeTransactionsFT = page.locator('//a[text()=" Foreign Exchange Transactions-FT "]');
        this.btnReversalOfTransactionEntries = page.locator('//a[text()=" Reversal of Transaction Entries "]');
        this.btnAmendJournalEntry = page.locator('//a[text()=" Amend Journal Entry "]');
        this.btnAuthoriseDeleteJournalEntry = page.locator('//a[text()=" Authorise/Delete Journal Entry "]');
        this.btnAuthoriseDeleteForexTransactionsFT = page.locator('//a[text()=" Authorise/Delete Forex Transactions-FT "]');

        // Accounting Entries Enquiry
        this.ddlAccountingEntriesEnquiry = page.locator('//span[text()=" Accounting Entries Enquiry "]');
        this.btnListOfUnauthorisedTransactionEntries = page.locator('//a[text()=" List of Unauthorised Transaction Entries "]');
        this.btnListOfTransactionEntries = page.locator('//a[text()=" List of Transaction Entries "]');
        this.btnViewPLCategoryEntries = page.locator('//a[text()=" View PL Category Entries "]');
        this.btnViewPositionEntryDetail = page.locator('//a[text()=" View Position entry detail "]');
        this.btnViewAccountEntries = page.locator('//a[text()=" View Account Entries "]');
        this.btnViewForwardEntries = page.locator('//a[text()=" View Forward Entries "]');

        // Data Capture Enquiry
        this.ddlDataCaptureEnquiryDropdown = page.locator('//span[contains(text(),"Data Capture Enquiry")]');
        this.btnDataCaptureJournal = page.locator('//a[text()=" Data Capture Journal "]');
        this.btnDataCaptureBatch = page.locator('//a[text()=" Data Capture Batch "]');

        // View COB Reports
        this.ddlViewCOBReportsDropdown = page.locator('//span[contains(text(),"View COB Reports")]');
        this.btnDataCaptureActivityJournal = page.locator('//a[text()=" Data Capture Activity Journal "]');
        this.btnDataCaptureCOBDifferenceEntries = page.locator('//a[text()=" Data Capture COB Difference Entries "]');
        this.btnDataCaptureCOBSuspenseEntries = page.locator('//a[text()=" Data Capture COB Suspense Entries "]');
        this.btnViewTxnJournal = page.locator('//a[text()=" View Txn Journal "]');

        // End of Month Post Closure
        this.ddlEndOfMonthPostClosureDropdown = page.locator('//span[contains(text(),"End of Month Post Closure")]');
        this.btnDefineOpenPeriod = page.locator('//a[text()=" Define Open Period "]');
        this.btnAdjustmentToAcsPLByDC = page.locator('//a[text()=" Adjustment to A/cs/PL by DC "]');
        this.btnAdjustmentToAcsPLByFT = page.locator('//a[text()=" Adjustment to A/cs/PL by FT "]');
        this.btnAuthoriseDeletePCByDC = page.locator('//a[text()=" Authorise/Delete PC by DC "]');
        this.btnAuthoriseDeletePCByFT = page.locator('//a[text()=" Authorise/Delete PC by FT "]');
        this.btnUpdatePCDatabase = page.locator('//a[text()=" Update PC Database "]');
        this.btnPrintReport = page.locator('//a[text()=" Print Report "]');
        this.btnClosePeriod = page.locator('//a[text()=" Close Period "]');

        // End of Year Procedures
        this.ddlEndOfYearProceduresDropdown = page.locator('//span[contains(text(),"End of Year Procedures")]');
        this.btnPLCloseParameter = page.locator('//a[text()=" PL Close Parameter "]');
    }

    //*****************************PAGE FUNCTIONS****************************************/

    async clickFinanceDropdown() {
        await this.ddlFinanceDropdown.click();
    }

    async clickLedgerMonitorAndControlDropdown() {
        await this.ddlLedgerMonitorAndControlDropdown.click();
    }

    async clickTotalsByApplication() {
        await this.btnTotalsByApplication.click();
    }

    async clickReprintGeneralLedgerReport() {
        await this.btnReprintGeneralLedgerReport.click();
    }

    async clickReprintConsolidatedGeneralLedgerReport() {
        await this.btnReprintConsolidatedGeneralLedgerReport.click();
    }

    async clickGLBalanceOverviewGLShort() {
        await this.btnGLBalanceOverviewGLShort.click();
    }

    async clickContractWiseBalances() {
        await this.btnContractWiseBalances.click();
    }

    async clickFinanceOperationsDropdown() {
        await this.ddlFinanceOperationsDropdown.click();
    }
    async clickGLLineMapping() {
        await this.btnGLLineMapping.click();
    }

    async clickPLLineMapping() {
        await this.btnPLLineMapping.click();
    }

    async clickOpenInternalAccount() {
        await this.btnOpenInternalAccount.click();
    }

    async clickUnauthorisedInternalAccount() {
        await this.btnUnauthorisedInternalAccount.click();
    }

    async clickAuthoriseDeleteInternalAccount() {
        await this.btnAuthoriseDeleteInternalAccount.click();
    }

    async clickViewUMBGeneralLedgerReportsDropdown() {
        await this.ddlViewUMBGeneralLedgerReportsDropdown.click();
    }

    async clickViewUMBBalanceSheet() {
        await this.btnViewUMBBalanceSheet.click();
    }

    async clickViewUMBProfitLoss() {
        await this.btnViewUMBProfitLoss.click();
    }

    async clickViewUMBCCYWiseGeneralLedgerReport() {
        await this.btnViewUMBCCYWiseGeneralLedgerReport.click();
    }

    async clickViewPMBGeneralLedgerReportsDropdown() {
        await this.ddlViewPMBGeneralLedgerReportsDropdown.click();
    }

    async clickViewPMBBalanceSheet() {
        await this.btnViewPMBBalanceSheet.click();
    }

    async clickViewPMBProfitLoss() {
        await this.btnViewPMBProfitLoss.click();
    }

    async clickViewPMBCCYWiseGeneralLedgerReport() {
        await this.btnViewPMBCCYWiseGeneralLedgerReport.click();
    }

    async clickProvisionDropdown() {
        await this.ddlProvisionDropdown.click();
    }

    async clickAssetDetails() {
        await this.btnAssetDetails.click();
    }

    async clickCustomerDetails() {
        await this.btnCustomerDetails.click();
    }

    async clickAuthoriseDeleteAssetDetails() {
        await this.btnAuthoriseDeleteAssetDetails.click();
    }

    async clickAuthoriseDeleteCustomerDetails() {
        await this.btnAuthoriseDeleteCustomerDetails.click();
    }

    async clickAuthoriseDeletePVProfile() {
        await this.btnAuthoriseDeletePVProfile.click();
    }

    async clickEnquiry() {
        await this.ddlEnquiry.click();
    }

    async clickAssetClassification() {
        await this.btnAssetClassification.click();
    }

    async clickCustomerClassification() {
        await this.btnCustomerClassification.click();
    }

    async clickProvisionSummary() {
        await this.btnProvisionSummary.click();
    }

    async clickAssetClassificationHist() {
        await this.btnAssetClassificationHist.click();
    }

    async clickCustomerClassificationHist() {
        await this.btnCustomerClassificationHist.click();
    }

    async clickFinancialAssetsAssessedUnderStandardProvisioning() {
        await this.btnFinancialAssetsAssessedUnderStandardProvisioning.click();
    }

    async clickRegulatoryDOD() {
        await this.ddlRegulatoryDOD.click();
    }

    async clickAssetLevelDODDetails() {
        await this.ddlAssetLevelDODDetails.click();
    }

    async clickInputAmendAssetLevelDPDDetails() {
        await this.btnInputAmendAssetLevelDPDDetails.click();
    }

    async clickAuthorizeAssetLevelDPDDetails() {
        await this.btnAuthorizeAssetLevelDPDDetails.click();
    }

    async clickObligorLevelDODDetails() {
        await this.ddlObligorLevelDODDetails.click();
    }

    async clickInputAmendObligorLevelDPDDetails() {
        await this.btnInputAmendObligorLevelDPDDetails.click();
    }

    async clickAuthorizeObligorLevelDPDDetails() {
        await this.btnAuthorizeObligorLevelDPDDetails.click();
    }

    async clickCustomerAndAssetLevelDODDetails() {
        await this.btnCustomerAndAssetLevelDODDetails.click();
    }
    
    // Pay / Receive Customer Balances
    async clickPayReceiveCustomerBalancesDropdown() {
        await this.ddlPayReceiveCustomerBalancesDropdown.click();
    }

    async clickPayReceiveCustomerBalance() {
        await this.btnPayReceiveCustomerBalance.click();
    }

    // Hedge Operations
    async clickHedgeOperationsDropdown() {
        await this.ddlHedgeOperationsDropdown.click();
    }

    async clickHedgeIASGroup() {
        await this.btnHedgeIASGroup.click();
    }

    async clickEnquiries() {
        await this.btnEnquiries.click();
    }

    // Investigation Reports
    async clickInvestigationReportsDropdown() {
        await this.ddlInvestigationReportsDropdown.click();
    }

    async clickViewGeneralLedgerReportByMvmtCRFKeys() {
        await this.btnViewGeneralLedgerReportByMvmtCRFKeys.click();
    }

    async clickBreakdownOfLinesByCRFKeys() {
        await this.btnBreakdownOfLinesByCRFKeys.click();
    }

    async clickAccountBalanceInIFAccounting() {
        await this.btnAccountBalanceInIFAccounting.click();
    }

    // Finance Maintenance
    async clickFinanceMaintenanceDropdown() {
        await this.ddlFinanceMaintenanceDropdown.click();
    }

    async clickCreateAmendCategory() {
        await this.btnCreateAmendCategory.click();
    }

    async clickCreateAmendSector() {
        await this.btnCreateAmendSector.click();
    }

    async clickCreateAmendIndustryCode() {
        await this.btnCreateAmendIndustryCode.click();
    }

    async clickCreateAmendReportLine() {
        await this.btnCreateAmendReportLine.click();
    }

    async clickCreateAmendRangeName() {
        await this.btnCreateAmendRangeName.click();
    }

    async clickCreateAmendReportHead() {
        await this.btnCreateAmendReportHead.click();
    }

    async clickCreateAmendColumnType() {
        await this.btnCreateAmendColumnType.click();
    }

    // Fixed Asset Maintenance
    async clickFixedAssetMaintenanceDropdown() {
        await this.ddlFixedAssetMaintenanceDropdown.click();
    }

    async clickCaptureNewFixedAsset() {
        await this.btnCaptureNewFixedAsset.click();
    }

    async clickFindFixedAsset() {
        await this.btnFindFixedAsset.click();
    }

    // Journal Facility
    async clickJournalFacilityDropdown() {
        await this.ddlJournalFacilityDropdown.click();
    }

    async clickLcyTransactionEntries() {
        await this.btnLcyTransactionEntries.click();
    }

    async clickFcyTransactionEntries() {
        await this.btnFcyTransactionEntries.click();
    }

    async clickForeignExchangeTransactionsFT() {
        await this.btnForeignExchangeTransactionsFT.click();
    }

    async clickReversalOfTransactionEntries() {
        await this.btnReversalOfTransactionEntries.click();
    }

    async clickAmendJournalEntry() {
        await this.btnAmendJournalEntry.click();
    }

    async clickAuthoriseDeleteJournalEntry() {
        await this.btnAuthoriseDeleteJournalEntry.click();
    }

    async clickAuthoriseDeleteForexTransactionsFT() {
        await this.btnAuthoriseDeleteForexTransactionsFT.click();
    }

    // Accounting Entries Enquiry
    async clickAccountingEntriesEnquiry() {
        await this.ddlAccountingEntriesEnquiry.click();
    }

    async clickListOfUnauthorisedTransactionEntries() {
        await this.btnListOfUnauthorisedTransactionEntries.click();
    }

    async clickListOfTransactionEntries() {
        await this.btnListOfTransactionEntries.click();
    }

    async clickViewPLCategoryEntries() {
        await this.btnViewPLCategoryEntries.click();
    }

    async clickViewPositionEntryDetail() {
        await this.btnViewPositionEntryDetail.click();
    }

    async clickViewAccountEntries() {
        await this.btnViewAccountEntries.click();
    }

    async clickViewForwardEntries() {
        await this.btnViewForwardEntries.click();
    }

    // Data Capture Enquiry
    async clickDataCaptureEnquiryDropdown() {
        await this.ddlDataCaptureEnquiryDropdown.click();
    }

    async clickDataCaptureJournal() {
        await this.btnDataCaptureJournal.click();
    }

    async clickDataCaptureBatch() {
        await this.btnDataCaptureBatch.click();
    }

    // View COB Reports
    async clickViewCOBReportsDropdown() {
        await this.ddlViewCOBReportsDropdown.click();
    }

    async clickDataCaptureActivityJournal() {
        await this.btnDataCaptureActivityJournal.click();
    }

    async clickDataCaptureCOBDifferenceEntries() {
        await this.btnDataCaptureCOBDifferenceEntries.click();
    }

    async clickDataCaptureCOBSuspenseEntries() {
        await this.btnDataCaptureCOBSuspenseEntries.click();
    }

    async clickViewTxnJournal() {
        await this.btnViewTxnJournal.click();
    }

    // End of Month Post Closure
    async clickEndOfMonthPostClosureDropdown() {
        await this.ddlEndOfMonthPostClosureDropdown.click();
    }

    async clickDefineOpenPeriod() {
        await this.btnDefineOpenPeriod.click();
    }

    async clickAdjustmentToAcsPLByDC() {
        await this.btnAdjustmentToAcsPLByDC.click();
    }

    async clickAdjustmentToAcsPLByFT() {
        await this.btnAdjustmentToAcsPLByFT.click();
    }

    async clickAuthoriseDeletePCByDC() {
        await this.btnAuthoriseDeletePCByDC.click();
    }

    async clickAuthoriseDeletePCByFT() {
        await this.btnAuthoriseDeletePCByFT.click();
    }

    async clickUpdatePCDatabase() {
        await this.btnUpdatePCDatabase.click();
    }

    async clickPrintReport() {
        await this.btnPrintReport.click();
    }

    async clickClosePeriod() {
        await this.btnClosePeriod.click();
    }

    // End of Year Procedures
    async clickEndOfYearProceduresDropdown() {
        await this.ddlEndOfYearProceduresDropdown.click();
    }

    async clickPLCloseParameter() {
        await this.btnPLCloseParameter.click();
    }
};