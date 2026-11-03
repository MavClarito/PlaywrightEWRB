import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';

export class SSO3_DashboardPage extends BasePage {

  //*****************************PAGE OBJECT CONSTRUCTOR**************************************** */

  //Links
  readonly lnkHome: Locator;
  readonly lnkEasyConnectPortal: Locator;
  readonly lnkChangePWord: Locator;
  readonly lnkLogOut: Locator;

  //Labels
  readonly lblSingleSignOn: Locator;

  //Message Prompt
  readonly msgPrompt: Locator;

  //*****************************PAGE LOCATORS**************************************** */
  constructor(page: Page) {
    super(page);
    //label
    this.lblSingleSignOn = page.locator("//span[@id='menu-app-name']");

    //Links
    this.lnkHome = page.locator("//span[@id='menu-app-name']");
    this.lnkEasyConnectPortal = page.getByRole('link', { name: 'EasyConnect Portal' });
    this.lnkChangePWord = page.locator("//span[@id='menu-app-name']");
    this.lnkLogOut = page.locator("//*[@id='logout']");

    //Prompt Message
    this.msgPrompt = page.locator("//p[contains(@class, 'flash-message')]");
  }

  //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

  async clickEasyConnectPortalLink() {
    await this.lnkEasyConnectPortal.click();
    console.log(`User clicked Easy Connect Portal link from SS03 Dashboard page.`);
  }

  async logOut() {
    await this.lnkLogOut.click();
    console.log(`User logged out.`);
  }

}