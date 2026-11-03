# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: accountsAndDepositUni.spec.ts >> Accounts and Deposit UNI Core >> Verify Change Product with product in the Allowed list
- Location: tests\accountsAndDepositUni.spec.ts:23:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[contains (text(), "User Menu")]')
    - locator resolved to <span class="menu-text fs-16" _ngcontent-ng-c1174507108=""> User Menu </span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    47 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f3e4]:
  - generic [ref=f3e6]:
    - img "Company logo about" [ref=f3e8] [cursor=pointer]
    - button "Menu" [active] [ref=f3e9] [cursor=pointer]:
      - img [ref=f3e10]: menu
    - button "History" [ref=f3e12] [cursor=pointer]:
      - img [ref=f3e13]: history
    - button "Favourites" [ref=f3e15] [cursor=pointer]:
      - img [ref=f3e16]: star
    - button "Products" [ref=f3e18] [cursor=pointer]:
      - img [ref=f3e19]: apps
    - generic [ref=f3e21]:
      - button "Settings" [ref=f3e22] [cursor=pointer]:
        - img [ref=f3e23]: settings
      - button "User Profile" [ref=f3e25] [cursor=pointer]:
        - img [ref=f3e26]: manage_accounts
      - button "Logout" [ref=f3e28] [cursor=pointer]:
        - img [ref=f3e29]: logout
  - generic [ref=f3e33]:
    - img "landing page logo" [ref=f3e35]
    - generic [ref=f3e36]:
      - heading "Welcome Back, Chan , Ivan Matthew R." [level=3] [ref=f3e37]
      - paragraph [ref=f3e39]: Last signed in Asia/HK-Singapore-Beijing on 29 OCT 2026 at 12:08 with 0 attempt(s)
  - contentinfo:
    - generic [ref=f3e40]:
      - button "Toggle show/hide footer" [ref=f3e41] [cursor=pointer]:
        - img [ref=f3e42]: keyboard_arrow_down
      - generic [ref=f3e45]:
        - textbox "Command Line" [ref=f3e50]
        - button "run_icon" [ref=f3e51] [cursor=pointer]:
          - img [ref=f3e52]: send
```

# Test source

```ts
  1  | import { BasePage } from '../BasePage';
  2  | import { Locator, Page } from '@playwright/test';
  3  | import { encryptionUtil } from '../../utils/encryptionUtil';
  4  | 
  5  | export class R25_LoginPage extends BasePage {
  6  | 
  7  |   readonly page: Page;
  8  |   readonly txtUsername: Locator;
  9  |   readonly txtPassword: Locator;
  10 |   readonly btnLogin: Locator;
  11 |   readonly btnLogout: Locator;
  12 | 
  13 |   readonly ddlUserMenu: Locator;
  14 |   readonly btnProductCatalog: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     super(page);
  18 | 
  19 |     //Text Field
  20 |     this.page = page;
  21 |     this.txtUsername = page.locator('//input[@id="username"]');
  22 |     this.txtPassword = page.locator('//input[@id="password"]');
  23 | 
  24 |     //Button
  25 |     this.btnLogin = page.locator('//input[@id="kc-login"]');
  26 |     this.btnLogout = page.locator('//button[@id="logoutButton"]')
  27 | 
  28 |     //User Menu
  29 |     this.ddlUserMenu = page.locator('//span[contains (text(), "User Menu")]')
  30 |     this.btnProductCatalog = page.locator('//a[text()=" Product Catalog "]')
  31 | 
  32 | 
  33 |   }
  34 | 
  35 |   //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */
  36 | 
  37 |   //Go to Link / R25
  38 |   async gotoLoginPage() {
  39 |     await this.page.goto('https://ewbk01-sit.ewbk.dev.temenosbanking.cloud/transact-explorer-wa/');
  40 |   }
  41 | 
  42 |   async login(username: any, password: any) {
  43 |     console.log(password);
  44 |     const decryptedPassword = encryptionUtil.decrypt(
  45 |       String(password ?? '')
  46 |     );
  47 |     console.log(decryptedPassword);
  48 |     await this.txtUsername.fill(String(username ?? ''));
  49 |     await this.txtPassword.fill(String(decryptedPassword ?? ''));
  50 |     console.log(`Input username: ${String(username ?? '')}`);
  51 |     await this.btnLogin.click();
  52 |     console.log(`Click on Login Button.`)
  53 |   }
  54 | 
  55 |   async logOut() {
  56 |     await this.btnLogout.click();
  57 |     console.log(`User logged out.`);
  58 |     await this.page.close();
  59 |     console.log('Browser page has been closed.');
  60 |   }
  61 | 
  62 |   async clickUserMenu() {
> 63 |     await this.ddlUserMenu.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  64 |   }
  65 |   async clickProductCatalog() {
  66 |     await this.btnProductCatalog.click();
  67 |   }
  68 | 
  69 | };
  70 | 
```