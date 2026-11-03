import { Page, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
    this.waitForPageLoad();
    console.log(`User navigated to URL: ${url}`);
  }

  // async waitForPageLoad() {
  //   await this.page.waitForLoadState('networkidle');
  // }

  async waitForPageLoad() {
    if (this.page.isClosed()) return;
    await this.page.waitForLoadState('load');
}

  async assertUrlContains(path: string) {
    await expect(this.page).toHaveURL(new RegExp(path));
  }
}