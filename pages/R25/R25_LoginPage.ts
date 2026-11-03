import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';
import { encryptionUtil } from '../../utils/encryptionUtil';

export class R25_LoginPage extends BasePage {

  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly btnLogout: Locator;
  readonly btnMenu: Locator;
  readonly ddlUserMenu: Locator;
  readonly btnProductCatalog: Locator;


  // Account Balance - Mav

  readonly commandLine: Locator;
  readonly enterCommandLine: Locator;
  readonly openDropdown: Locator
  readonly workspaceMenu: Locator;
  readonly EWRBTeller: Locator;
  readonly customerMenu: Locator;
  readonly TellerDropdown: Locator;
  readonly customerAmendmentMenu: Locator;
  readonly customerList: Locator;
  readonly singleCustomerView: Locator;
  readonly scvTable: Locator;

  constructor(page: Page) {
    super(page);

    //Account Balance - Mav
    this.commandLine = page.locator('//input[@aria-label="Command Line"]');
    this.enterCommandLine = page.locator('//mat-icon[text()="send"]');
    this.EWRBTeller = page.locator('//input[@aria-label="Command Line"]');
    this.openDropdown = page.locator("//div[contains(@class,'workspace-menu')]//mat-icon[text()='keyboard_arrow_right']");
    this.workspaceMenu = page.locator("//div[@class='menu-wrapper workspace-menu']").nth(1);
    this.customerMenu = page.locator("//span[contains(@class,'menu__item--left')][.//span[normalize-space()='Customer']]");
    this.TellerDropdown = page.locator("//span[contains(@class,'menu__item') and .//span[normalize-space()='EWRB Teller']]//mat-icon").first();
    this.customerAmendmentMenu = page.locator("//a[contains(text(),'Customer Amendment - Full details')]");
    this.customerList = page.locator("//ul[@name='drawer__menu']//a[normalize-space()='Single Customer View']");
    this.singleCustomerView = page.locator("//span[contains(@class,'menu-item-link') and .//a[contains(normalize-space(),'Single Customer View')]]");
    this.scvTable = page.locator("//table[@role='table']");

    //Text Field
    this.page = page;
    this.txtUsername = page.locator('//input[@id="username"]');
    this.txtPassword = page.locator('//input[@id="password"]');

    //Button
    this.btnLogin = page.locator('//input[@id="kc-login"]');
    this.btnLogout = page.locator('//button[@id="logoutButton"]')

    //Menu
    this.btnMenu = page.locator('//button[@aria-label="Menu"]')

    //User Menu
    this.ddlUserMenu = page.locator('//span[contains (text(), "User Menu")]')
    this.btnProductCatalog = page.locator('//a[text()=" Product Catalog "]')


  }

  //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */

  //Go to Link / R25
  async gotoLoginPage() {
    await this.page.goto('https://ewbk01-sit.ewbk.dev.temenosbanking.cloud/transact-explorer-wa/');
  }

  //Account Balance check
  async commandLineBox(txtinput: any){
    await this.page.commandLine.fill(String(txtinput ?? '?800'))
  }

  async login(username: any, password: any) {
    console.log(password);
    const decryptedPassword = encryptionUtil.decrypt(
      String(password ?? '')
    );
    console.log(decryptedPassword);
    await this.txtUsername.fill(String(username ?? ''));
    await this.txtPassword.fill(String(decryptedPassword ?? ''));
    console.log(`Input username: ${String(username ?? '')}`);
    await this.btnLogin.click();
    console.log(`Click on Login Button.`)
  }

  async logOut() {
    await this.btnLogout.click();
    console.log(`User logged out.`);
    await this.page.close();
    console.log('Browser page has been closed.');
  }

  async clickUserMenu() {
    await this.btnMenu.click();
    await this.ddlUserMenu.click();
  }
  async clickProductCatalog() {
    await this.btnProductCatalog.click();
  }

};
