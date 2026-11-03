import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class R25_ComplianceAndRegulatoryManagement extends BasePage {

    readonly page: Page;

    // Compliance and Regulatory Management
    readonly ddlComplianceAndRegulatoryManagement: Locator;

    // IFRS
    readonly ddlIFRS: Locator;

    // Financial Assets
    readonly ddlFinancialAssets: Locator;
    readonly ddlClassifiedByBusinessModel: Locator;
    readonly btnClassifiedUnderAMC: Locator;
    readonly btnClassifiedUnderFVOCI: Locator;
    readonly btnClassifiedUnderFVPL: Locator;
    readonly btnClassifiedUnderFinanceLease: Locator;
    readonly btnClassifiedUnderOperatingLease: Locator;
    readonly btnClassifiedByStage: Locator;
    readonly btnClassifiedByProduct: Locator;
    readonly btnClassifiedByApplication: Locator;

    // Financial Liabilities
    readonly ddlFinancialLiabilities: Locator;
    readonly ddlFinancialLiabilitiesClassifiedByBusinessModel: Locator;
    readonly btnFinancialLiabilitiesClassifiedUnderAMC: Locator;
    readonly btnFinancialLiabilitiesClassifiedUnderFVPL: Locator;
    readonly btnFinancialLiabilitiesClassifiedByProduct: Locator;
    readonly btnFinancialLiabilitiesClassifiedByApplication: Locator;

    // Assets under IAS36
    readonly ddlAssetsUnderIAS36: Locator;
    readonly btnAssetsUnderIAS36: Locator;

    // Impairment Operations
    readonly ddlImpairmentOperations: Locator;
    readonly btnAmendImpairLoans: Locator;
    readonly btnStageChange: Locator;
    readonly btnReclassificationOfLoans: Locator;
    readonly btnChangeAssetRiskClassification: Locator;
    readonly btnChangeCustomerRiskClassification: Locator;

    // Enquiry
    readonly ddlEnquiry: Locator;
    readonly btnContractsWithImpairmentEvidence: Locator;
    readonly btnImpairedContracts: Locator;
    readonly btnImpairmentLossDetails: Locator;
    readonly btnPreviousAndCurrentImpairmentDetails: Locator;
    readonly btnUnimpairedContracts: Locator;
    readonly btnExpectedCashflowDetails: Locator;
    readonly btnContractualCashflowDetails: Locator;
    readonly btnCashflowSummaryForContracts: Locator;

    // Enquiries
    readonly ddlEnquiries: Locator;
    readonly btnImpairInterestDetails: Locator;
    readonly btnSplitFeeCostDetails: Locator;
    readonly btnModificationDerecognitionOfContractsCashflowDetails: Locator;
    readonly btnDerecognisedContractsOverrideDetails: Locator;
    readonly btnBelowMarketContractDetails: Locator;
    readonly btnCollateralMitigationDetails: Locator;
    readonly btnFinancialAssetsAssessedUnderIFRS9Staging: Locator;
    readonly btnIFWashAccountSummaryForSplitsOrMergesOfArrangements: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        // Compliance and Regulatory Management
        this.ddlComplianceAndRegulatoryManagement = page.locator("//span[contains(text(),'Compliance and Regulatory Management')]");

        // IFRS
        this.ddlIFRS = page.locator("//span[contains(text(),'IFRS')]");

        // Financial Assets
        this.ddlFinancialAssets = page.locator("//span[contains(text(),'Financial Assets')]");
        this.ddlClassifiedByBusinessModel = page.locator("//span[contains(text(),'Classified by Business Model')]");
        this.btnClassifiedUnderAMC = page.locator("//a[text()=' Classified under AMC ']");
        this.btnClassifiedUnderFVOCI = page.locator("//a[text()=' Classified under FVOCI ']");
        this.btnClassifiedUnderFVPL = page.locator("//a[text()=' Classified under FVPL ']");
        this.btnClassifiedUnderFinanceLease = page.locator("//a[text()=' Classified under Finance Lease ']");
        this.btnClassifiedUnderOperatingLease = page.locator("//a[text()=' Classified under Operating Lease ']");
        this.btnClassifiedByStage = page.locator("//a[text()=' Classified by Stage ']");
        this.btnClassifiedByProduct = page.locator("//a[text()=' Classified by Product ']");
        this.btnClassifiedByApplication = page.locator("//a[text()=' Classified by Application ']");

        // Financial Liabilities
        this.ddlFinancialLiabilities = page.locator("//span[contains(text(),'Financial Liabilities')]");
        this.ddlFinancialLiabilitiesClassifiedByBusinessModel = page.locator("//span[contains(text(),'Classified by Business Model')]");
        this.btnFinancialLiabilitiesClassifiedUnderAMC = page.locator("//a[contains(text(),'Classified under AMC')]");
        this.btnFinancialLiabilitiesClassifiedUnderFVPL = page.locator("//a[text()=' Classified under FVPL ']");
        this.btnFinancialLiabilitiesClassifiedByProduct = page.locator("//a[text()=' Classified by Product ']");
        this.btnFinancialLiabilitiesClassifiedByApplication = page.locator("//a[text()=' Classified by Application ']");

        // Assets under IAS36
        this.ddlAssetsUnderIAS36 = page.locator("//span[contains(text(),'Assets under IAS36')]");
        this.btnAssetsUnderIAS36 = page.locator("//a[text()=' Assets under IAS36 ']");

        // Impairment Operations
        this.ddlImpairmentOperations = page.locator("//span[contains(text(),'Impairment Operations')]");
        this.btnAmendImpairLoans = page.locator("//a[text()=' Amend Impair Loans ']");
        this.btnStageChange = page.locator("//a[text()=' Stage Change ']");
        this.btnReclassificationOfLoans = page.locator("//a[text()=' Reclassification of Loans ']");
        this.btnChangeAssetRiskClassification = page.locator("//a[text()=' Change Asset Risk Classification ']");
        this.btnChangeCustomerRiskClassification = page.locator("//a[text()=' Change Customer Risk Classification ']");

        // Enquiry
        this.ddlEnquiry = page.locator("//span[contains(text(),'Enquiry')]");
        this.btnContractsWithImpairmentEvidence = page.locator("//a[text()=' Contracts with Impairment Evidence ']");
        this.btnImpairedContracts = page.locator("//a[text()=' Impaired Contracts ']");
        this.btnImpairmentLossDetails = page.locator("//a[text()=' Impairment Loss Details ']");
        this.btnPreviousAndCurrentImpairmentDetails = page.locator("//a[text()=' Previous and Current Impairment Details ']");
        this.btnUnimpairedContracts = page.locator("//a[text()=' Unimpaired Contracts ']");
        this.btnExpectedCashflowDetails = page.locator("//a[text()=' Expected Cashflow Details ']");
        this.btnContractualCashflowDetails = page.locator("//a[text()=' Contractual Cashflow details ']");
        this.btnCashflowSummaryForContracts = page.locator("//a[text()=' Cashflow Summary for Contracts ']");

        // Enquiries
        this.ddlEnquiries = page.locator("//span[contains(text(),'Enquiries')]");
        this.btnImpairInterestDetails = page.locator("//a[text()=' Impair Interest Details ']");
        this.btnSplitFeeCostDetails = page.locator("//a[text()=' Split Fee/Cost Details ']");
        this.btnModificationDerecognitionOfContractsCashflowDetails = page.locator("//a[text()=' Modification/Derecognition of Contracts Cashflow Details ']");
        this.btnDerecognisedContractsOverrideDetails = page.locator("//a[text()=' Derecognised Contracts Override Details ']");
        this.btnBelowMarketContractDetails = page.locator("//a[text()=' Below Market Contract Details ']");
        this.btnCollateralMitigationDetails = page.locator("//a[text()=' Collateral Mitigation Details ']");
        this.btnFinancialAssetsAssessedUnderIFRS9Staging = page.locator("//a[text()=' Financial Assets Assessed under IFRS9 Staging ']");
        this.btnIFWashAccountSummaryForSplitsOrMergesOfArrangements = page.locator("//a[text()=' IF Wash Account Summary for Splits or Merges of Arrangements ']");
    }

    //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

async clickComplianceAndRegulatoryManagement() {
    await this.ddlComplianceAndRegulatoryManagement.click();
}

async clickIfrs() {
    await this.ddlIFRS.click();
}

async clickFinancialAssets() {
    await this.ddlFinancialAssets.click();
}

async clickClassifiedByBusinessModel() {
    await this.ddlClassifiedByBusinessModel.click();
}

async clickClassifiedUnderAMC() {
    await this.btnClassifiedUnderAMC.click();
}

async clickClassifiedUnderFVOCI() {
    await this.btnClassifiedUnderFVOCI.click();
}

async clickClassifiedUnderFVPL() {
    await this.btnClassifiedUnderFVPL.click();
}

async clickClassifiedUnderFinanceLease() {
    await this.btnClassifiedUnderFinanceLease.click();
}

async clickClassifiedUnderOperatingLease() {
    await this.btnClassifiedUnderOperatingLease.click();
}

async clickClassifiedByStage() {
    await this.btnClassifiedByStage.click();
}

async clickClassifiedByProduct() {
    await this.btnClassifiedByProduct.click();
}

async clickClassifiedByApplication() {
    await this.btnClassifiedByApplication.click();
}

async clickFinancialLiabilities() {
    await this.ddlFinancialLiabilities.click();
}

async clickFinancialLiabilitiesClassifiedByBusinessModel() {
    await this.ddlFinancialLiabilitiesClassifiedByBusinessModel.click();
}

async clickFinancialLiabilitiesClassifiedUnderAMC() {
    await this.btnFinancialLiabilitiesClassifiedUnderAMC.click();
}

async clickFinancialLiabilitiesClassifiedUnderFVPL() {
    await this.btnFinancialLiabilitiesClassifiedUnderFVPL.click();
}

async clickFinancialLiabilitiesClassifiedByProduct() {
    await this.btnFinancialLiabilitiesClassifiedByProduct.click();
}

async clickFinancialLiabilitiesClassifiedByApplication() {
    await this.btnFinancialLiabilitiesClassifiedByApplication.click();
}

async clickAssetsUnderIAS36() {
    await this.ddlAssetsUnderIAS36.click();
}

async clickAssetsUnderIAS36Menu() {
    await this.btnAssetsUnderIAS36.click();
}

async clickImpairmentOperations() {
    await this.ddlImpairmentOperations.click();
}

async clickAmendImpairLoans() {
    await this.btnAmendImpairLoans.click();
}

async clickStageChange() {
    await this.btnStageChange.click();
}

async clickReclassificationOfLoans() {
    await this.btnReclassificationOfLoans.click();
}

async clickChangeAssetRiskClassification() {
    await this.btnChangeAssetRiskClassification.click();
}

async clickChangeCustomerRiskClassification() {
    await this.btnChangeCustomerRiskClassification.click();
}

async clickEnquiry() {
    await this.ddlEnquiry.click();
}

async clickContractsWithImpairmentEvidence() {
    await this.btnContractsWithImpairmentEvidence.click();
}

async clickImpairedContracts() {
    await this.btnImpairedContracts.click();
}

async clickImpairmentLossDetails() {
    await this.btnImpairmentLossDetails.click();
}

async clickPreviousAndCurrentImpairmentDetails() {
    await this.btnPreviousAndCurrentImpairmentDetails.click();
}

async clickUnimpairedContracts() {
    await this.btnUnimpairedContracts.click();
}

async clickExpectedCashflowDetails() {
    await this.btnExpectedCashflowDetails.click();
}

async clickContractualCashflowDetails() {
    await this.btnContractualCashflowDetails.click();
}

async clickCashflowSummaryForContracts() {
    await this.btnCashflowSummaryForContracts.click();
}

async clickEnquiries() {
    await this.ddlEnquiries.click();
}

async clickImpairInterestDetails() {
    await this.btnImpairInterestDetails.click();
}

async clickSplitFeeCostDetails() {
    await this.btnSplitFeeCostDetails.click();
}

async clickModificationDerecognitionOfContractsCashflowDetails() {
    await this.btnModificationDerecognitionOfContractsCashflowDetails.click();
}

async clickDerecognisedContractsOverrideDetails() {
    await this.btnDerecognisedContractsOverrideDetails.click();
}

async clickBelowMarketContractDetails() {
    await this.btnBelowMarketContractDetails.click();
}

async clickCollateralMitigationDetails() {
    await this.btnCollateralMitigationDetails.click();
}

async clickFinancialAssetsAssessedUnderIFRS9Staging() {
    await this.btnFinancialAssetsAssessedUnderIFRS9Staging.click();
}

async clickIFWashAccountSummaryForSplitsOrMergesOfArrangements() {
    await this.btnIFWashAccountSummaryForSplitsOrMergesOfArrangements.click();
}
}