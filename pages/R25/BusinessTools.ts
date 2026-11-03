import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_BusinessTools extends BasePage {

readonly page: Page;

// Business Tools
readonly ddlBusinessToolsDropdown: Locator;

// Multimedia Operations
readonly ddlMultimediaOperationsDropdown: Locator;
readonly btnCaptureUploadImageButton: Locator;
readonly btnCaptureUploadDocumentButton: Locator;
readonly btnCaptureUploadMediaAudioButton: Locator;
readonly btnUploadMultimediaButton: Locator;
readonly btnReverseImageCaptureButton: Locator;
readonly btnReverseDocumentCaptureButton: Locator;
readonly btnReverseMediaCaptureButton: Locator;
readonly btnFindImageButton: Locator;
readonly btnFindDocumentButton: Locator;
readonly btnFindMultimediaButton: Locator;

// Document Operations
readonly ddlDocumentOperationsDropdown: Locator;
readonly btnCaptureCustomerDocumentButton: Locator;
readonly btnCaptureTransactionDocumentButton: Locator;
readonly btnCustomerDocumentOverviewButton: Locator;
readonly btnTransactionDocumentOverviewButton: Locator;

// Process Workflow Operations
readonly ddlProcessWorkflowOperationsDropdown: Locator;
readonly btnStartAProcessPWButton: Locator;
readonly btnStartAnExternalProcessButton: Locator;
readonly btnMaintainActivitiesButton: Locator;
readonly btnActivityDetailsButton: Locator;
readonly btnProcessDurationAnalyticsButton: Locator;
readonly btnProcessWorkloadMonitorButton: Locator;
readonly btnProcessTimeAnalysisButton: Locator;
readonly btnProcessStatusViewButton: Locator;
readonly btnPwProcessOverviewButton: Locator;

// Mass Change Instruction
readonly ddlMassChangeInstructionDropdown: Locator;
readonly btnMassChangeInstructionButton: Locator;
readonly btnAuthoriseMassChangeInstructionsButton: Locator;


constructor(page: Page) {
    super(page);
    this.page = page;

    // Business Tools
this.ddlBusinessToolsDropdown = page.locator('//span[contains(text(),"Business Tools")]');

// Multimedia Operations
this.ddlMultimediaOperationsDropdown = page.locator('//span[contains(text(),"Multimedia Operations")]');
this.btnCaptureUploadImageButton = page.locator('//a[text()=" Capture & upload an image "]');
this.btnCaptureUploadDocumentButton = page.locator('//a[text()=" Capture & upload a document "]');
this.btnCaptureUploadMediaAudioButton = page.locator('//a[text()=" Capture & upload Media(Video) "]');
this.btnUploadMultimediaButton = page.locator('//a[text()=" Upload Multimedia "]');
this.btnReverseImageCaptureButton = page.locator('//a[text()=" Reverse an Image capture "]');
this.btnReverseDocumentCaptureButton = page.locator('//a[text()=" Reverse a Document capture "]');
this.btnReverseMediaCaptureButton = page.locator('//a[text()=" Reverse a Media capture "]');
this.btnFindImageButton = page.locator('//a[text()=" Find Image "]');
this.btnFindDocumentButton = page.locator('//a[text()=" Find Document "]');
this.btnFindMultimediaButton = page.locator('//a[text()=" Find Multimedia "]');

// Document Operations
this.ddlDocumentOperationsDropdown = page.locator('//span[contains(text(),"Document Operations")]');
this.btnCaptureCustomerDocumentButton = page.locator('//a[text()=" Capture Customer Document "]');
this.btnCaptureTransactionDocumentButton = page.locator('//a[text()=" Capture Transaction Document "]');
this.btnCustomerDocumentOverviewButton = page.locator('//a[text()=" Customer Document Overview "]');
this.btnTransactionDocumentOverviewButton = page.locator('//a[text()=" Transaction Document Overview "]');

// Process Workflow Operations
this.ddlProcessWorkflowOperationsDropdown = page.locator('//span[contains(text(),"Process Workflow Operations")]');
this.btnStartAProcessPWButton = page.locator('//a[text()=" Start a Process(PW) "]');
this.btnStartAnExternalProcessButton = page.locator('//a[text()=" Start an external process "]');
this.btnMaintainActivitiesButton = page.locator('//a[text()=" Maintain Activities "]');
this.btnActivityDetailsButton = page.locator('//a[text()=" Activity Details "]');
this.btnProcessDurationAnalyticsButton = page.locator('//a[text()=" Process Duration Analytics "]');
this.btnProcessWorkloadMonitorButton = page.locator('//a[text()=" Process Workload Monitor "]');
this.btnProcessTimeAnalysisButton = page.locator('//a[text()=" Process Time Analysis "]');
this.btnProcessStatusViewButton = page.locator('//a[text()=" Process Status View "]');
this.btnPwProcessOverviewButton = page.locator('//a[text()=" PW Process Overview "]');

// Mass Change Instruction
this.ddlMassChangeInstructionDropdown = page.locator('//span[contains(text(),"Mass Change Instruction")]');
this.btnMassChangeInstructionButton = page.locator('//a[text()=" Mass Change Instruction "]');
this.btnAuthoriseMassChangeInstructionsButton = page.locator('//a[text()=" Authorise Mass Change Instructions "]');

}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
 
 async clickBusinessToolsDropdown() {
    await this.ddlBusinessToolsDropdown.click();
}

async clickMultimediaOperationsDropdown() {
    await this.ddlMultimediaOperationsDropdown.click();
}

async clickCaptureUploadImage() {
    await this.btnCaptureUploadImageButton.click();
}

async clickCaptureUploadDocument() {
    await this.btnCaptureUploadDocumentButton.click();
}

async clickCaptureUploadMediaAudio() {
    await this.btnCaptureUploadMediaAudioButton.click();
}

async clickUploadMultimedia() {
    await this.btnUploadMultimediaButton.click();
}

async clickReverseImageCapture() {
    await this.btnReverseImageCaptureButton.click();
}

async clickReverseDocumentCapture() {
    await this.btnReverseDocumentCaptureButton.click();
}

async clickReverseMediaCapture() {
    await this.btnReverseMediaCaptureButton.click();
}

async clickFindImage() {
    await this.btnFindImageButton.click();
}

async clickFindDocument() {
    await this.btnFindDocumentButton.click();
}

async clickFindMultimedia() {
    await this.btnFindMultimediaButton.click();
}

async clickDocumentOperationsDropdown() {
    await this.ddlDocumentOperationsDropdown.click();
}

async clickCaptureCustomerDocument() {
    await this.btnCaptureCustomerDocumentButton.click();
}

async clickCaptureTransactionDocument() {
    await this.btnCaptureTransactionDocumentButton.click();
}

async clickCustomerDocumentOverview() {
    await this.btnCustomerDocumentOverviewButton.click();
}

async clickTransactionDocumentOverview() {
    await this.btnTransactionDocumentOverviewButton.click();
}

async clickProcessWorkflowOperationsDropdown() {
    await this.ddlProcessWorkflowOperationsDropdown.click();
}

async clickStartAProcessPW() {
    await this.btnStartAProcessPWButton.click();
}

async clickStartAnExternalProcess() {
    await this.btnStartAnExternalProcessButton.click();
}

async clickMaintainActivities() {
    await this.btnMaintainActivitiesButton.click();
}

async clickActivityDetails() {
    await this.btnActivityDetailsButton.click();
}

async clickProcessDurationAnalytics() {
    await this.btnProcessDurationAnalyticsButton.click();
}

async clickProcessWorkloadMonitor() {
    await this.btnProcessWorkloadMonitorButton.click();
}

async clickProcessTimeAnalysis() {
    await this.btnProcessTimeAnalysisButton.click();
}

async clickProcessStatusView() {
    await this.btnProcessStatusViewButton.click();
}

async clickPwProcessOverview() {
    await this.btnPwProcessOverviewButton.click();
}

async clickMassChangeInstructionDropdown() {
    await this.ddlMassChangeInstructionDropdown.click();
}

async clickMassChangeInstruction() {
    await this.btnMassChangeInstructionButton.click();
}

async clickAuthoriseMassChangeInstructions() {
    await this.btnAuthoriseMassChangeInstructionsButton.click();
}

};