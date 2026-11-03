import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';
import { encryptionUtil } from '../../utils/encryptionUtil';
export class SSO3_LoginPage extends BasePage {

  //*****************************PAGE OBJECT CONSTRUCTOR**************************************** */
  //Text Fields
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
 

  //Button
  readonly btnLogin: Locator;

  //Message Prompt
  readonly msgUsername: Locator;
  readonly msgPassword: Locator;
  readonly msgCommonError: Locator;

  //*****************************PAGE LOCATORS**************************************** */
  constructor(page: Page) {
    super(page);

    //Text Fields
    this.txtUsername = page.locator("//*[@id='User_Username']");
    this.txtPassword = page.locator("//*[@id='User_Password']");

    //Button
    this.btnLogin = page.locator("//*[@id='login-btn']");

    //Prompt Message
    this.msgUsername = page.locator("//*[@data-valmsg-for='User.Username']");
    this.msgPassword = page.locator("//*[@data-valmsg-for='User.Password']");
    this.msgCommonError = page.locator("//span[@class='validation-message field-validation-error']");
  }

  //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
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

  async getUsernameErrorText(): Promise<string> {
    return (await this.msgUsername.textContent()) ?? '';
  }

  async getPasswordErrorText(): Promise<string> {
    return (await this.msgPassword.textContent()) ?? '';
  }

  async getCommonErrorText(): Promise<string> {
    return (await this.msgCommonError.textContent()) ?? '';
  }
}