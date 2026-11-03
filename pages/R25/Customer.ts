import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_Customer extends BasePage {

readonly page: Page;

// Customer
readonly ddlCustomer: Locator;
readonly btnIndividualCustomer: Locator;
readonly btnCorporateCustomer: Locator;
readonly btnCaptureProspectExitStatus: Locator;
readonly btnActivateCustomer: Locator;
readonly btnAmendCustomer: Locator;
readonly btnCaptureCustomerExitStatus: Locator;
readonly btnDeceasedCustomer: Locator;
readonly btnViewReverseExternalUser: Locator;
readonly btnUnauthorisedCustomer: Locator;
readonly btnUnauthorisedCustomerPendingAMLCheck: Locator;
readonly btnAuthoriseDeleteCustomer: Locator;
readonly btnDeleteAuthoriseExternalUser: Locator;
readonly btnCreateRoutingInstructions: Locator;
readonly btnAmendRoutingInstructions: Locator;
readonly btnAuthoriseDeleteRoutingInstructions: Locator;
readonly btnCaptureCustomerSegmentationDetails: Locator;
readonly btnAmendCustomerCharge: Locator;
readonly btnAuthoriseDeleteCustomerCharge: Locator;
readonly btnSetRemovePostingRestrict: Locator;
readonly btnAuthoriseDeletePostingRestrict: Locator;
readonly btnCaptureExternalArrangement: Locator;
readonly btnAuthoriseDeleteExternalArrangement: Locator;
readonly btnSetCustomerSSI: Locator;
readonly btnAuthoriseDeleteCustomerSSI: Locator;

// KYC
readonly ddlKYC: Locator;
readonly btnCreateKYC: Locator;
readonly btnRiskAnalysis: Locator;

// Customer Process Workflow
readonly ddlCustomerProcessWorkflow: Locator;
readonly btnCustomerOnboarding: Locator;

// Customer Mass Block
readonly ddlCustomerMassBlock: Locator;

// Mass Block
readonly ddlMassBlock: Locator;
readonly btnCustomerAccountBlock: Locator;
readonly btnAccountBlock: Locator;
readonly btnBlockBundleArrangement: Locator;
readonly btnCommitMassBlockRecord: Locator;
readonly btnAuthoriseDeleteMassBlock: Locator;
readonly btnAmendReverseMassBlock: Locator;
readonly btnUnblockCustomerAccount: Locator;
readonly btnUnblockMassBlock: Locator;
readonly btnUnblockBundleArrangement: Locator;

// Enquiries
readonly ddlEnquiries: Locator;
readonly btnCustomerDetails: Locator;
readonly btnProspectSearch: Locator;
readonly btnCustomerList: Locator;
readonly btnGlobalViewCharges: Locator;
readonly btnAMLProcessedCustomers: Locator;
readonly btnCustomerHoldReports: Locator;
readonly btnCustomerAddressHistory: Locator;
readonly btnCustomerExitList: Locator;

// Travel Notification Management
readonly ddlTravelNotificationManagement: Locator;
readonly btnInputTravelNotification: Locator;
readonly btnAmendActiveTravelNotification: Locator;
readonly btnAuthoriseTravelNotification: Locator;
readonly btnListTravelNotifications: Locator;

// Customer Dormancy
readonly ddlCustomerDormancy: Locator;
readonly btnAmendDormancyStatus: Locator;
readonly btnAuthoriseDormancyStatus: Locator;
readonly btnDormancyStatusReports: Locator;
readonly btnAmendDormancyExtActivitiesCapture: Locator;
readonly btnAuthoriseDormancyExtActivitiesCapture: Locator;

// FCM
readonly ddlFCM: Locator;
readonly btnAuthoriseCorporateCustomers: Locator;

// Customer Addresses and Preferences
readonly ddlCustomerAddressesAndPreferences: Locator;
readonly btnCreateCustomerDeliveryPreference: Locator;
readonly btnCustomerDeliveryPreferences: Locator;
readonly btnCustomerDeliveryProducts: Locator;
readonly btnAdditionalAddressOfCustomer: Locator;
readonly btnCustomerDeliveryAddressLinks: Locator;

// Customer Closure Process
readonly ddlCustomerClosureProcess: Locator;
readonly btnCreateClosureRequest: Locator;
readonly btnAuthoriseDeleteClosureRequest: Locator;
readonly btnViewAmendUnauthorizedClosureRequest: Locator;
readonly btnViewAmendAuthorisedClosureRequest: Locator;
readonly btnViewCancelledClosureRequest: Locator;
readonly btnViewExceptionLogDetails: Locator;

constructor(page: Page) {
    super(page);

    this.page = page;


// Customer
this.ddlCustomer = page.locator('//span[text()=" Customer "]');
this.btnIndividualCustomer = page.locator('//a[text()=" Individual Customer "]');
this.btnCorporateCustomer = page.locator('//a[text()=" Corporate Customer "]');
this.btnCaptureProspectExitStatus = page.locator('//a[text()=" Capture Prospect Exit Status "]');
this.btnActivateCustomer = page.locator('//a[text()=" Activate Customer "]');
this.btnAmendCustomer = page.locator('//a[text()=" Amend Customer "]');
this.btnCaptureCustomerExitStatus = page.locator('//a[text()=" Capture Customer Exit Status "]');
this.btnDeceasedCustomer = page.locator('//a[text()=" Deceased Customer "]');
this.btnViewReverseExternalUser = page.locator('//a[text()=" View/Reverse External User "]');
this.btnUnauthorisedCustomer = page.locator('//a[text()=" Unauthorised Customer "]');
this.btnUnauthorisedCustomerPendingAMLCheck = page.locator('//a[text()=" Unauthorised Customer Pending AML Check "]');
this.btnAuthoriseDeleteCustomer = page.locator('//a[text()=" Authorise/Delete Customer "]');
this.btnDeleteAuthoriseExternalUser = page.locator('//a[text()=" Delete/Authorise External User "]');
this.btnCreateRoutingInstructions = page.locator('//a[text()=" Create Routing Instructions "]');
this.btnAmendRoutingInstructions = page.locator('//a[text()=" Amend Routing Instructions "]');
this.btnAuthoriseDeleteRoutingInstructions = page.locator('//a[text()=" Authorise/Delete Routing Instructions "]');
this.btnCaptureCustomerSegmentationDetails = page.locator('//a[text()=" Capture Customer Segmentation Details "]');
this.btnAmendCustomerCharge = page.locator('//a[text()=" Amend Customer Charge "]');
this.btnAuthoriseDeleteCustomerCharge = page.locator('//a[text()=" Authorise/Delete Customer Charge "]');
this.btnSetRemovePostingRestrict = page.locator('//a[text()=" Set/Remove Posting Restrict "]');
this.btnAuthoriseDeletePostingRestrict = page.locator('//a[text()=" Authorise/Delete Posting Restrict "]');
this.btnCaptureExternalArrangement = page.locator('//a[text()=" Capture External Arrangement "]');
this.btnAuthoriseDeleteExternalArrangement = page.locator('//a[text()=" Authorise/Delete External Arrangement "]');
this.btnSetCustomerSSI = page.locator('//a[text()=" Set Customer SSI "]');
this.btnAuthoriseDeleteCustomerSSI = page.locator('//a[text()=" Authorise/Delete Customer SSI "]');

// KYC
this.ddlKYC = page.locator('//span[text()=" KYC "]');
this.btnCreateKYC = page.locator('//a[text()=" Create KYC "]');
this.btnRiskAnalysis = page.locator('//a[text()=" Risk Analysis "]');

// Customer Process Workflow
this.ddlCustomerProcessWorkflow = page.locator('//span[text()=" Customer Process Workflow "]');
this.btnCustomerOnboarding = page.locator('//a[text()=" Customer Onboarding "]');

// Customer Mass Block
this.ddlCustomerMassBlock = page.locator('//span[text()=" Customer Mass Block "]');

// Mass Block
this.ddlMassBlock = page.locator('//span[text()=" Mass Block "]');
this.btnCustomerAccountBlock = page.locator('//a[text()=" Customer-Account Block "]');
this.btnAccountBlock = page.locator('//a[text()=" Account Block "]');
this.btnBlockBundleArrangement = page.locator('//a[text()=" Block Bundle Arrangement "]');
this.btnCommitMassBlockRecord = page.locator('//a[text()=" Commit Mass Block Record "]');
this.btnAuthoriseDeleteMassBlock = page.locator('//a[text()=" Authorise / Delete Mass Block "]');
this.btnAmendReverseMassBlock = page.locator('//a[text()=" Amend / Reverse Mass Block "]');
this.btnUnblockCustomerAccount = page.locator('//a[text()=" Unblock Customer / Account "]');
this.btnUnblockMassBlock = page.locator('//a[text()=" Unblock Mass Block "]');
this.btnUnblockBundleArrangement = page.locator('//a[text()=" Unblock Bundle Arrangement "]');

// Enquiries
this.ddlEnquiries = page.locator('//span[text()=" Enquiries "]');
this.btnCustomerDetails = page.locator('//a[text()=" Customer Details "]');
this.btnProspectSearch = page.locator('//a[text()=" Prospect Search "]');
this.btnCustomerList = page.locator('//a[text()=" Customer List "]');
this.btnGlobalViewCharges = page.locator('//a[text()=" Global View - Charges "]');
this.btnAMLProcessedCustomers = page.locator('//a[text()=" AML Processed - Customers "]');
this.btnCustomerHoldReports = page.locator('//a[text()=" Customer Hold Reports "]');
this.btnCustomerAddressHistory = page.locator('//a[text()=" Customer Address History "]');
this.btnCustomerExitList = page.locator('//a[text()=" Customer Exit List "]');

// Travel Notification Management
this.ddlTravelNotificationManagement = page.locator('//span[text()=" Travel Notification Management "]');
this.btnInputTravelNotification = page.locator('//a[text()=" Input Travel Notification "]');
this.btnAmendActiveTravelNotification = page.locator('//a[text()=" Amend Active Travel Notification "]');
this.btnAuthoriseTravelNotification = page.locator('//a[text()=" Authorise Travel Notification "]');
this.btnListTravelNotifications = page.locator('//a[text()=" List Travel Notifications "]');

// Customer Dormancy
this.ddlCustomerDormancy = page.locator('//span[text()=" Customer Dormancy "]');
this.btnAmendDormancyStatus = page.locator('//a[text()=" Amend Dormancy Status "]');
this.btnAuthoriseDormancyStatus = page.locator('//a[text()=" Authorise Dormancy Status "]');
this.btnDormancyStatusReports = page.locator('//a[text()=" Dormancy Status Reports "]');
this.btnAmendDormancyExtActivitiesCapture = page.locator('//a[text()=" Amend Dormancy Ext Activities Capture "]');
this.btnAuthoriseDormancyExtActivitiesCapture = page.locator('//a[text()=" Authorise Dormancy Ext Activities Capture "]');

// FCM
this.ddlFCM = page.locator('//span[text()=" FCM "]');
this.btnAuthoriseCorporateCustomers = page.locator('//a[text()=" Authorise Corporate Customers "]');

// Customer Addresses and Preferences
this.ddlCustomerAddressesAndPreferences = page.locator('//span[text()=" Customer Addresses and Preferences "]');
this.btnCreateCustomerDeliveryPreference = page.locator('//a[text()=" Create Customer Delivery Preference "]');
this.btnCustomerDeliveryPreferences = page.locator('//a[text()=" Customer Delivery Preferences "]');
this.btnCustomerDeliveryProducts = page.locator('//a[text()=" Customer Delivery Products "]');
this.btnCustomerAddressHistory= page.locator('//a[text()=" Customer Address History "]');
this.btnAdditionalAddressOfCustomer = page.locator('//a[text()=" Additional Address of Customer "]');
this.btnCustomerDeliveryAddressLinks = page.locator('//a[text()=" Customer Delivery Address Links "]');

// Customer Closure Process
this.ddlCustomerClosureProcess = page.locator('//span[text()=" Customer Closure Process "]');
this.btnCreateClosureRequest = page.locator('//a[text()=" Create Closure request "]');
this.btnAuthoriseDeleteClosureRequest = page.locator('//a[text()=" Authorise/Delete Closure request "]');
this.btnViewAmendUnauthorizedClosureRequest = page.locator('//a[text()=" View/Amend Unauthorized Closure Request "]');
this.btnViewAmendAuthorisedClosureRequest = page.locator('//a[text()=" View/Amend Authorised Closure Request "]');
this.btnViewCancelledClosureRequest = page.locator('//a[text()=" View Cancelled Closure Request "]');
this.btnViewExceptionLogDetails = page.locator('//a[text()=" View Exception Log Details "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

async clickCustomer() {
    await this.ddlCustomer.click();
}

async clickIndividualCustomer() {
    await this.btnIndividualCustomer.click();
}

async clickCorporateCustomer() {
    await this.btnCorporateCustomer.click();
}

async clickCaptureProspectExitStatus() {
    await this.btnCaptureProspectExitStatus.click();
}

async clickActivateCustomer() {
    await this.btnActivateCustomer.click();
}

async clickAmendCustomer() {
    await this.btnAmendCustomer.click();
}

async clickCaptureCustomerExitStatus() {
    await this.btnCaptureCustomerExitStatus.click();
}

async clickDeceasedCustomer() {
    await this.btnDeceasedCustomer.click();
}

async clickViewReverseExternalUser() {
    await this.btnViewReverseExternalUser.click();
}

async clickUnauthorisedCustomer() {
    await this.btnUnauthorisedCustomer.click();
}

async clickUnauthorisedCustomerPendingAMLCheck() {
    await this.btnUnauthorisedCustomerPendingAMLCheck.click();
}

async clickAuthoriseDeleteCustomer() {
    await this.btnAuthoriseDeleteCustomer.click();
}

async clickDeleteAuthoriseExternalUser() {
    await this.btnDeleteAuthoriseExternalUser.click();
}

async clickCreateRoutingInstructions() {
    await this.btnCreateRoutingInstructions.click();
}

async clickAmendRoutingInstructions() {
    await this.btnAmendRoutingInstructions.click();
}

async clickAuthoriseDeleteRoutingInstructions() {
    await this.btnAuthoriseDeleteRoutingInstructions.click();
}

async clickCaptureCustomerSegmentationDetails() {
    await this.btnCaptureCustomerSegmentationDetails.click();
}

async clickAmendCustomerCharge() {
    await this.btnAmendCustomerCharge.click();
}

async clickAuthoriseDeleteCustomerCharge() {
    await this.btnAuthoriseDeleteCustomerCharge.click();
}

async clickSetRemovePostingRestrict() {
    await this.btnSetRemovePostingRestrict.click();
}

async clickAuthoriseDeletePostingRestrict() {
    await this.btnAuthoriseDeletePostingRestrict.click();
}

async clickCaptureExternalArrangement() {
    await this.btnCaptureExternalArrangement.click();
}

async clickAuthoriseDeleteExternalArrangement() {
    await this.btnAuthoriseDeleteExternalArrangement.click();
}

async clickSetCustomerSSI() {
    await this.btnSetCustomerSSI.click();
}

async clickAuthoriseDeleteCustomerSSI() {
    await this.btnAuthoriseDeleteCustomerSSI.click();
}

async clickKYC() {
    await this.ddlKYC.click();
}

async clickCreateKYC() {
    await this.btnCreateKYC.click();
}

async clickRiskAnalysis() {
    await this.btnRiskAnalysis.click();
}

async clickCustomerProcessWorkflow() {
    await this.ddlCustomerProcessWorkflow.click();
}

async clickCustomerOnboarding() {
    await this.btnCustomerOnboarding.click();
}

async clickCustomerMassBlock() {
    await this.ddlCustomerMassBlock.click();
}

async clickMassBlock() {
    await this.ddlMassBlock.click();
}

async clickCustomerAccountBlock() {
    await this.btnCustomerAccountBlock.click();
}

async clickAccountBlock() {
    await this.btnAccountBlock.click();
}

async clickBlockBundleArrangement() {
    await this.btnBlockBundleArrangement.click();
}

async clickCommitMassBlockRecord() {
    await this.btnCommitMassBlockRecord.click();
}

async clickAuthoriseDeleteMassBlock() {
    await this.btnAuthoriseDeleteMassBlock.click();
}

async clickAmendReverseMassBlock() {
    await this.btnAmendReverseMassBlock.click();
}

async clickUnblockCustomerAccount() {
    await this.btnUnblockCustomerAccount.click();
}

async clickUnblockMassBlock() {
    await this.btnUnblockMassBlock.click();
}

async clickUnblockBundleArrangement() {
    await this.btnUnblockBundleArrangement.click();
}

async clickEnquiries() {
    await this.ddlEnquiries.click();
}

async clickCustomerDetails() {
    await this.btnCustomerDetails.click();
}

async clickProspectSearch() {
    await this.btnProspectSearch.click();
}

async clickCustomerList() {
    await this.btnCustomerList.click();
}

async clickGlobalViewCharges() {
    await this.btnGlobalViewCharges.click();
}

async clickAMLProcessedCustomers() {
    await this.btnAMLProcessedCustomers.click();
}

async clickCustomerHoldReports() {
    await this.btnCustomerHoldReports.click();
}

async clickCustomerAddressHistory() {
    await this.btnCustomerAddressHistory.click();
}

async clickCustomerExitList() {
    await this.btnCustomerExitList.click();
}

async clickTravelNotificationManagement() {
    await this.ddlTravelNotificationManagement.click();
}

async clickInputTravelNotification() {
    await this.btnInputTravelNotification.click();
}

async clickAmendActiveTravelNotification() {
    await this.btnAmendActiveTravelNotification.click();
}

async clickAuthoriseTravelNotification() {
    await this.btnAuthoriseTravelNotification.click();
}

async clickListTravelNotifications() {
    await this.btnListTravelNotifications.click();
}

async clickCustomerDormancy() {
    await this.ddlCustomerDormancy.click();
}

async clickAmendDormancyStatus() {
    await this.btnAmendDormancyStatus.click();
}

async clickAuthoriseDormancyStatus() {
    await this.btnAuthoriseDormancyStatus.click();
}

async clickDormancyStatusReports() {
    await this.btnDormancyStatusReports.click();
}

async clickAmendDormancyExtActivitiesCapture() {
    await this.btnAmendDormancyExtActivitiesCapture.click();
}

async clickAuthoriseDormancyExtActivitiesCapture() {
    await this.btnAuthoriseDormancyExtActivitiesCapture.click();
}

async clickFCM() {
    await this.ddlFCM.click();
}

async clickAuthoriseCorporateCustomers() {
    await this.btnAuthoriseCorporateCustomers.click();
}

async clickCustomerAddressesAndPreferences() {
    await this.ddlCustomerAddressesAndPreferences.click();
}

async clickCreateCustomerDeliveryPreference() {
    await this.btnCreateCustomerDeliveryPreference.click();
}

async clickCustomerDeliveryPreferences() {
    await this.btnCustomerDeliveryPreferences.click();
}

async clickCustomerDeliveryProducts() {
    await this.btnCustomerDeliveryProducts.click();
}

async clickCustomerAddressHistoryCAP() {
    await this.btnCustomerAddressHistory.click();
}

async clickAdditionalAddressOfCustomer() {
    await this.btnAdditionalAddressOfCustomer.click();
}

async clickCustomerDeliveryAddressLinks() {
    await this.btnCustomerDeliveryAddressLinks.click();
}

async clickCustomerClosureProcess() {
    await this.ddlCustomerClosureProcess.click();
}

async clickCreateClosureRequest() {
    await this.btnCreateClosureRequest.click();
}

async clickAuthoriseDeleteClosureRequest() {
    await this.btnAuthoriseDeleteClosureRequest.click();
}

async clickViewAmendUnauthorizedClosureRequest() {
    await this.btnViewAmendUnauthorizedClosureRequest.click();
}

async clickViewAmendAuthorisedClosureRequest() {
    await this.btnViewAmendAuthorisedClosureRequest.click();
}

async clickViewCancelledClosureRequest() {
    await this.btnViewCancelledClosureRequest.click();
}

async clickViewExceptionLogDetails() {
    await this.btnViewExceptionLogDetails.click();

}
};
