import { expect, Locator, Page } from '@playwright/test';
export class TestGridHomePage{
  readonly page: Page;
  readonly reportsTabButton: Locator;


  constructor(page: Page){
    this.page = page;
    this.reportsTabButton = page.locator('[href="/cym/global_report"]');
  }





  async clickOnReportsTab(){
    console.log("Navigate to reports tab " );

    await this.reportsTabButton.click();
  }

}