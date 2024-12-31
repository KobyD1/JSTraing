import { expect, Locator, Page } from '@playwright/test';
export class TestGridReportPage{
  readonly page: Page;
  readonly historyButton: Locator;
  readonly score: Locator;
  readonly link: Locator;




  constructor(page: Page){
    this.page = page;
    this.historyButton = page.locator('[href="/cym/waf_reports/?client=prod1"]')
    this.score = page.locator('div.table-col');
  }





  async clickOnFirewallHistory(){
    console.log("Clicking on Firewall history button" );
    await this.historyButton.click();


  }

}