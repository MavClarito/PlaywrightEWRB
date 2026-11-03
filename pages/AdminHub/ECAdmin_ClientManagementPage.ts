import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class ECAdmin_ClientManagementPage extends BasePage {

  //*****************************PAGE OBJECT CONSTRUCTOR**************************************** */

  //Page
  readonly pgAdminDash: Locator;

  //Buttons
  readonly btnClientMgmt: Locator;
  readonly btnOperatingBankAcct: Locator;

  //Links
  //Client Management Left Side Menu
  readonly lnkOrganizations: Locator;
  readonly lnkClientHubUsers: Locator;

  //Operating Bank Account Management Left Side Menu
  readonly lnkAcctListWorkflow: Locator;
  readonly lnkAcctChanges: Locator;

  //Transaction Management Left Side Menu
  readonly lnkTransactionMgmt: Locator;
  //Support Management Left Side Menu
  readonly lnkSupportMgmt: Locator;

  //Eastwest Logo
  readonly imgEWLogo: Locator;

  //Header
  readonly hdrClientMgmt: Locator;

  //*****************************PAGE LOCATORS**************************************** */
  constructor(page: Page) {
    super(page);

    //Page
    this.pgAdminDash = page.locator("//div[@class='min-h-screen']");

    //Buttons
    this.btnClientMgmt = page.locator("//span[normalize-space()='Client Management']");
    this.btnOperatingBankAcct = page.locator("//span[normalize-space()='Operating Bank Account']");

    //Links
    this.lnkOrganizations = page.locator("//span[normalize-space()='Organizations']");
    this.lnkClientHubUsers = page.locator("//span[normalize-space()='Client Hub Users']");
    this.lnkAcctListWorkflow = page.locator("//span[normalize-space()='Account List & Workflow']");
    this.lnkAcctChanges = page.locator("//span[normalize-space()='Account Changes']");
    this.lnkTransactionMgmt = page.locator("//span[normalize-space()='Transaction Management']");
    this.lnkSupportMgmt = page.locator("//span[normalize-space()='Support Management']");

    //Image
    this.imgEWLogo = page.locator('img[alt="Logo"][src="/NewEasyConnectLogo.png"]');

    //Header
    this.hdrClientMgmt = page.locator("");

  }

  //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
  // async logOut() {
  //   await this.lnkLogOut.click();
  //   console.log(`User logged out.`);
  // }

}



