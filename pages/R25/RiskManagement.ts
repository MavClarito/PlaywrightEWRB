import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class R25_RiskManagement extends BasePage {

    readonly page: Page;

    // Risk Management
    readonly ddlRiskManagement: Locator;

    // Limits
    readonly ddlLimits: Locator;
    readonly btnLimitProcess: Locator;

    // Limit Menu
    readonly ddlLimitMenu: Locator;
    readonly btnCreateSecuredLimit: Locator;
    readonly btnCreateUnsecuredLimit: Locator;
    readonly btnModifyRejectedLimit: Locator;
    readonly btnMaintainReverseLimit: Locator;
    readonly btnChangeCustomerLiability: Locator;
    readonly btnSubAllocateLimit: Locator;
    readonly btnAuthoriseDeleteRejectLimit: Locator;
    readonly btnAuthoriseDeleteLimitSubAllocation: Locator;

    // Limit Sharing Groups
    readonly ddlLimitSharingGroups: Locator;
    readonly btnCreateLimitGroup: Locator;
    readonly btnDefineLimitPriority: Locator;

    // Enquiries - Limit Sharing Groups
    readonly ddlEnquiries: Locator;
    readonly btnSharingGroupDetails: Locator;
    readonly btnGroupsWithSingleLine: Locator;
    readonly btnCustomerGroupDetails: Locator;
    readonly btnLimitSubGroupDetails: Locator;
    readonly btnMasterGroupDetails: Locator;
    readonly btnCustomerAndGroupPriorityDetails: Locator;
    readonly btnLimitGroupAllocationDetails: Locator;

    // Exposure Limits
    readonly ddlExposureLimits: Locator;
    readonly btnCountryAndCountryGroupLimit: Locator;
    readonly btnIndustryAndIndustryGroupLimit: Locator;
    readonly btnCurrencyLimits: Locator;

    // Enquiries - Exposure Limits
    readonly ddlExposureLimitsEnquiries: Locator;
    readonly btnLiabEnquiry: Locator;
    readonly btnCustomerPositionSummary: Locator;
    readonly btnReversedLimits: Locator;
    readonly btnCountryRiskExposure: Locator;
    readonly btnLimitRiskExposure: Locator;
    readonly btnValidationLimitBreachInformation: Locator;

    // View COB Reports
    readonly ddlViewCOBReports: Locator;
    readonly btnCreditLinesExpired: Locator;
    readonly btnCreditLinesToBeReviewed: Locator;
    readonly btnLimitCollateralExcess: Locator;
    readonly btnLiabilityAmendments: Locator;

    // Collateral
    readonly ddlCollateral: Locator;
    readonly btnCollateralLink: Locator;
    readonly btnCollateral: Locator;
    readonly btnAuthoriseDeleteCollateralRight: Locator;
    readonly btnAuthoriseDeleteCollateral: Locator;
    readonly btnMainCollateralEnquiry: Locator;
    readonly btnCollateralExpiry: Locator;
    readonly btnViewCollateralExposurePosition: Locator;
    readonly btnViewCollateralPositionSummary: Locator;
    readonly btnViewCollateralDeficitDetails: Locator;
    readonly btnViewCollateralDefictAlerts: Locator;
    readonly btnViewCollateralAllocationDetails: Locator;
    readonly btnViewCollateralAssetDetails: Locator;
    readonly btnViewExcessConcentrationCapDetails: Locator;
    readonly btnViewCollateralManagementAlert: Locator;

    // Collateral Pool
    readonly ddlCollateralPool: Locator;
    readonly btnCreateCollateralAccount: Locator;
    readonly btnAuthoriseDeleteCollateralAccounts: Locator;
    readonly btnCreateCollateralPool: Locator;
    readonly btnAuthoriseDeleteCollateralPools: Locator;

    // Enquiries - Collateral Pool
    readonly ddlCollateralPoolEnquiries: Locator;

    // Collateral Accounts
    readonly ddlCollateralAccounts: Locator;
    readonly btnAmendCollateralAccounts: Locator;
    readonly btnCollateralAccountsAvailableForPool: Locator;
    readonly btnReviewExpiringExpiredCollateralAccounts: Locator;

    // Collateral Pool Enquiries Section
    readonly ddlCollateralPoolEnquiriesSection: Locator;
    readonly btnOverviewOfCollateralPools: Locator;
    readonly btnReviewExpiringExpiredCollateralPool: Locator;
    readonly btnViewUncoveredRisksInThePool: Locator;
    readonly btnViewUnallocatedCollateralsInThePool: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;

        // Risk Management
        this.ddlRiskManagement = page.locator("//span[contains(text(),'Risk Management')]");

        // Limits
        this.ddlLimits = page.locator("//span[contains(text(),'Limits')]");
        this.btnLimitProcess = page.locator("//a[text()=' Limit Process ']");

        // Limit Menu
        this.ddlLimitMenu = page.locator("//span[contains(text(),'Limit Menu')]");
        this.btnCreateSecuredLimit = page.locator("//a[text()=' Create Secured Limit ']");
        this.btnCreateUnsecuredLimit = page.locator("//a[text()=' Create Unsecured Limit ']");
        this.btnModifyRejectedLimit = page.locator("//a[text()=' Modify Rejected Limit ']");
        this.btnMaintainReverseLimit = page.locator("//a[text()=' Maintain/Reverse Limit ']");
        this.btnChangeCustomerLiability = page.locator("//a[text()=' Change Customer Liability ']");
        this.btnSubAllocateLimit = page.locator("//a[text()=' Sub Allocate Limit ']");
        this.btnAuthoriseDeleteRejectLimit = page.locator("//a[text()=' Authorise/Delete/Reject Limit ']");
        this.btnAuthoriseDeleteLimitSubAllocation = page.locator("//a[text()=' Authorise/Delete Limit Sub Allocation ']");

        // Limit Sharing Groups
        this.ddlLimitSharingGroups = page.locator("//span[contains(text(),'Limit Sharing Groups')]");
        this.btnCreateLimitGroup = page.locator("//a[text()=' Create Limit Group ']");
        this.btnDefineLimitPriority = page.locator("//a[text()=' Define Limit Priority ']");

        // Enquiries
        this.ddlEnquiries = page.locator("//span[contains(text(),'Enquiries')]");
        this.btnSharingGroupDetails = page.locator("//a[text()=' Sharing Group Details ']");
        this.btnGroupsWithSingleLine = page.locator("//a[text()=' Groups with Single Line ']");
        this.btnCustomerGroupDetails = page.locator("//a[text()=' Customer Group Details ']");
        this.btnLimitSubGroupDetails = page.locator("//a[text()=' Limit Sub Group Details ']");
        this.btnMasterGroupDetails = page.locator("//a[text()=' Master Group Details ']");
        this.btnCustomerAndGroupPriorityDetails = page.locator("//a[text()=' Customer and Group Priority Details ']");
        this.btnLimitGroupAllocationDetails = page.locator("//a[text()=' Limit Group Allocation Details ']");

        // Exposure Limits
        this.ddlExposureLimits = page.locator("//span[contains(text(),'Exposure Limits')]");
        this.btnCountryAndCountryGroupLimit = page.locator("//a[text()=' Country & Country Group Limit ']");
        this.btnIndustryAndIndustryGroupLimit = page.locator("//a[text()=' Industry & Industry Group Limit ']");
        this.btnCurrencyLimits = page.locator("//a[text()=' Currency Limits ']");

        // Exposure Limits Enquiries
        this.ddlExposureLimitsEnquiries = page.locator("//span[contains(text(),'Enquiries')]");
        this.btnLiabEnquiry = page.locator("//a[text()=' Liab Enquiry ']");
        this.btnCustomerPositionSummary = page.locator("//a[text()=' Customer Position Summary ']");
        this.btnReversedLimits = page.locator("//a[text()=' Reversed Limits ']");
        this.btnCountryRiskExposure = page.locator("//a[text()=' Country Risk Exposure ']");
        this.btnLimitRiskExposure = page.locator("//a[text()=' Limit Risk Exposure ']");
        this.btnValidationLimitBreachInformation = page.locator("//a[text()=' Validation Limit Breach Information ']");

        // View COB Reports
        this.ddlViewCOBReports = page.locator("//span[contains(text(),'View COB Reports')]");
        this.btnCreditLinesExpired = page.locator("//a[text()=' Credit Lines Expired ']");
        this.btnCreditLinesToBeReviewed = page.locator("//a[text()=' Credit Lines to be Reviewed ']");
        this.btnLimitCollateralExcess = page.locator("//a[text()=' Limit/Collateral Excess ']");
        this.btnLiabilityAmendments = page.locator("//a[text()=' Liability Amendments ']");

        // Collateral
        this.ddlCollateral = page.locator("//span[contains(text(),'Collateral')]");
        this.btnCollateralLink = page.locator("//a[text()=' Collateral Link ']");
        this.btnCollateral = page.locator("//a[text()=' Collateral ']");
        this.btnAuthoriseDeleteCollateralRight = page.locator("//a[text()=' Authorise/Delete Collateral Right ']");
        this.btnAuthoriseDeleteCollateral = page.locator("//a[text()=' Authorise/Delete Collateral ']");
        this.btnMainCollateralEnquiry = page.locator("//a[text()=' Main Collateral Enquiry ']");
        this.btnCollateralExpiry = page.locator("//a[text()=' Collateral Expiry ']");

        this.btnViewCollateralExposurePosition = page.locator("//a[text()=' View Collateral Exposure Position ']");
        this.btnViewCollateralPositionSummary = page.locator("//a[text()=' View Collateral Position Summary ']");
        this.btnViewCollateralDeficitDetails = page.locator("//a[text()=' View Collateral Deficit Details ']");
        this.btnViewCollateralDefictAlerts = page.locator("//a[text()=' View Collateral Defict Alerts ']");
        this.btnViewCollateralAllocationDetails = page.locator("//a[text()=' View Collateral Allocation Details ']");
        this.btnViewCollateralAssetDetails = page.locator("//a[text()=' View Collateral Asset Details ']");
        this.btnViewExcessConcentrationCapDetails = page.locator("//a[text()=' View Excess Concentration Cap Details ']");
        this.btnViewCollateralManagementAlert = page.locator("//a[text()=' View Collateral Management Alert ']");

        // Collateral Pool
        this.ddlCollateralPool = page.locator("//span[contains(text(),'Collateral Pool')]");
        this.btnCreateCollateralAccount = page.locator("//a[text()=' Create Collateral Account ']");
        this.btnAuthoriseDeleteCollateralAccounts = page.locator("//a[text()=' Authorise/Delete Collateral Accounts ']");
        this.btnCreateCollateralPool = page.locator("//a[text()=' Create Collateral Pool ']");
        this.btnAuthoriseDeleteCollateralPools = page.locator("//a[text()=' Authorise/Delete Collateral Pools ']");

        // Enquiries - Collateral Pool
        this.ddlCollateralPoolEnquiries = page.locator("//span[contains(text(),'Enquiries')]");

        // Collateral Accounts
        this.ddlCollateralAccounts = page.locator("//span[contains(text(),'Collateral Accounts')]");
        this.btnAmendCollateralAccounts = page.locator("//a[text()=' Amend Collateral Accounts ']");
        this.btnCollateralAccountsAvailableForPool = page.locator("//a[text()=' Collateral Accounts available for Pool ']");
        this.btnReviewExpiringExpiredCollateralAccounts = page.locator("//a[text()=' Review/Expiring/Expired Collateral Accounts ']");

        // Collateral Pool Enquiries
        this.ddlCollateralPoolEnquiriesSection = page.locator("//span[contains(text(),'Collateral Pool')]");
        this.btnOverviewOfCollateralPools = page.locator("//a[text()=' Overview of Collateral Pools ']");
        this.btnReviewExpiringExpiredCollateralPool = page.locator("//a[text()=' Review/Expiring/Expired Collateral Pool ']");
        this.btnViewUncoveredRisksInThePool = page.locator("//a[text()=' View Uncovered Risks in the Pool ']");
        this.btnViewUnallocatedCollateralsInThePool = page.locator("//a[text()=' View Unallocated Collaterals in the Pool ']");
    }

    //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

    // Risk Management
    async clickRiskManagement() {
        await this.ddlRiskManagement.click();
    }

    // Limits
    async clickLimits() {
        await this.ddlLimits.click();
    }

    async clickLimitProcess() {
        await this.btnLimitProcess.click();
    }

    // Limit Menu
    async clickLimitMenu() {
        await this.ddlLimitMenu.click();
    }

    async clickCreateSecuredLimit() {
        await this.btnCreateSecuredLimit.click();
    }

    async clickCreateUnsecuredLimit() {
        await this.btnCreateUnsecuredLimit.click();
    }

    async clickModifyRejectedLimit() {
        await this.btnModifyRejectedLimit.click();
    }

    async clickMaintainReverseLimit() {
        await this.btnMaintainReverseLimit.click();
    }

    async clickChangeCustomerLiability() {
        await this.btnChangeCustomerLiability.click();
    }

    async clickSubAllocateLimit() {
        await this.btnSubAllocateLimit.click();
    }

    async clickAuthoriseDeleteRejectLimit() {
        await this.btnAuthoriseDeleteRejectLimit.click();
    }

    async clickAuthoriseDeleteLimitSubAllocation() {
        await this.btnAuthoriseDeleteLimitSubAllocation.click();
    }

    // Limit Sharing Groups
    async clickLimitSharingGroups() {
        await this.ddlLimitSharingGroups.click();
    }

    async clickCreateLimitGroup() {
        await this.btnCreateLimitGroup.click();
    }

    async clickDefineLimitPriority() {
        await this.btnDefineLimitPriority.click();
    }

    // Enquiries
    async clickEnquiries() {
        await this.ddlEnquiries.click();
    }

    async clickSharingGroupDetails() {
        await this.btnSharingGroupDetails.click();
    }

    async clickGroupsWithSingleLine() {
        await this.btnGroupsWithSingleLine.click();
    }

    async clickCustomerGroupDetails() {
        await this.btnCustomerGroupDetails.click();
    }

    async clickLimitSubGroupDetails() {
        await this.btnLimitSubGroupDetails.click();
    }

    async clickMasterGroupDetails() {
        await this.btnMasterGroupDetails.click();
    }

    async clickCustomerAndGroupPriorityDetails() {
        await this.btnCustomerAndGroupPriorityDetails.click();
    }

    async clickLimitGroupAllocationDetails() {
        await this.btnLimitGroupAllocationDetails.click();
    }

    // Exposure Limits
    async clickExposureLimits() {
        await this.ddlExposureLimits.click();
    }

    async clickCountryAndCountryGroupLimit() {
        await this.btnCountryAndCountryGroupLimit.click();
    }

    async clickIndustryAndIndustryGroupLimit() {
        await this.btnIndustryAndIndustryGroupLimit.click();
    }

    async clickCurrencyLimits() {
        await this.btnCurrencyLimits.click();
    }

    // Exposure Limits Enquiries
    async clickExposureLimitsEnquiries() {
        await this.ddlExposureLimitsEnquiries.click();
    }

    async clickLiabEnquiry() {
        await this.btnLiabEnquiry.click();
    }

    async clickCustomerPositionSummary() {
        await this.btnCustomerPositionSummary.click();
    }

    async clickReversedLimits() {
        await this.btnReversedLimits.click();
    }

    async clickCountryRiskExposure() {
        await this.btnCountryRiskExposure.click();
    }

    async clickLimitRiskExposure() {
        await this.btnLimitRiskExposure.click();
    }

    async clickValidationLimitBreachInformation() {
        await this.btnValidationLimitBreachInformation.click();
    }

    // View COB Reports
    async clickViewCOBReports() {
        await this.ddlViewCOBReports.click();
    }

    async clickCreditLinesExpired() {
        await this.btnCreditLinesExpired.click();
    }

    async clickCreditLinesToBeReviewed() {
        await this.btnCreditLinesToBeReviewed.click();
    }

    async clickLimitCollateralExcess() {
        await this.btnLimitCollateralExcess.click();
    }

    async clickLiabilityAmendments() {
        await this.btnLiabilityAmendments.click();
    }

    // Collateral
    async clickCollateralDropdown() {
        await this.ddlCollateral.click();
    }

    async clickCollateralLink() {
        await this.btnCollateralLink.click();
    }

    async clickCollateral() {
        await this.btnCollateral.click();
    }

    async clickAuthoriseDeleteCollateralRight() {
        await this.btnAuthoriseDeleteCollateralRight.click();
    }

    async clickAuthoriseDeleteCollateral() {
        await this.btnAuthoriseDeleteCollateral.click();
    }

    async clickMainCollateralEnquiry() {
        await this.btnMainCollateralEnquiry.click();
    }

    async clickCollateralExpiry() {
        await this.btnCollateralExpiry.click();
    }

    async clickViewCollateralExposurePosition() {
        await this.btnViewCollateralExposurePosition.click();
    }

    async clickViewCollateralPositionSummary() {
        await this.btnViewCollateralPositionSummary.click();
    }

    async clickViewCollateralDeficitDetails() {
        await this.btnViewCollateralDeficitDetails.click();
    }

    async clickViewCollateralDefictAlerts() {
        await this.btnViewCollateralDefictAlerts.click();
    }

    async clickViewCollateralAllocationDetails() {
        await this.btnViewCollateralAllocationDetails.click();
    }

    async clickViewCollateralAssetDetails() {
        await this.btnViewCollateralAssetDetails.click();
    }

    async clickViewExcessConcentrationCapDetails() {
        await this.btnViewExcessConcentrationCapDetails.click();
    }

    async clickViewCollateralManagementAlert() {
        await this.btnViewCollateralManagementAlert.click();
    }

    // Collateral Pool
    async clickCollateralPool() {
        await this.ddlCollateralPool.click();
    }

    async clickCreateCollateralAccount() {
        await this.btnCreateCollateralAccount.click();
    }

    async clickAuthoriseDeleteCollateralAccounts() {
        await this.btnAuthoriseDeleteCollateralAccounts.click();
    }

    async clickCreateCollateralPool() {
        await this.btnCreateCollateralPool.click();
    }

    async clickAuthoriseDeleteCollateralPools() {
        await this.btnAuthoriseDeleteCollateralPools.click();
    }

    // Collateral Pool Enquiries
    async clickCollateralPoolEnquiries() {
        await this.ddlCollateralPoolEnquiries.click();
    }

    // Collateral Accounts
    async clickCollateralAccounts() {
        await this.ddlCollateralAccounts.click();
    }

    async clickAmendCollateralAccounts() {
        await this.btnAmendCollateralAccounts.click();
    }

    async clickCollateralAccountsAvailableForPool() {
        await this.btnCollateralAccountsAvailableForPool.click();
    }

    async clickReviewExpiringExpiredCollateralAccounts() {
        await this.btnReviewExpiringExpiredCollateralAccounts.click();
    }

    // Collateral Pool Enquiries Section
    async clickCollateralPoolEnquiriesSection() {
        await this.ddlCollateralPoolEnquiriesSection.click();
    }

    async clickOverviewOfCollateralPools() {
        await this.btnOverviewOfCollateralPools.click();
    }

    async clickReviewExpiringExpiredCollateralPool() {
        await this.btnReviewExpiringExpiredCollateralPool.click();
    }

    async clickViewUncoveredRisksInThePool() {
        await this.btnViewUncoveredRisksInThePool.click();
    }

    async clickViewUnallocatedCollateralsInThePool() {
        await this.btnViewUnallocatedCollateralsInThePool.click();
    }
};