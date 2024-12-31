import { expect, Locator, Page } from '@playwright/test';
export class TestGridFirewallPage{
  readonly page: Page;

  readonly tableLink: Locator;
  readonly generateReport: Locator;
  readonly url: Locator;
  readonly score:Locator;
  readonly downloadManager:Locator;
  readonly csvDownloadButton :Locator;







  constructor(page: Page){
    this.page = page;
    this.tableLink = page.locator("[href='/cym/waf_category/action?attackID=677117bdddd0ea52e5d12a9d&client=prod1&history=true&site=https%3A%2F%2Fekslabs.cymulatedev.com']")
    this.score = page.locator("span.pieChartInfoText")
    this.url = page.locator("div.report-summary-data")
    this.generateReport = page.locator('button.btn.btn-cymulate.report-pop-up.undefined')
    this.downloadManager = page.getByTestId("open-download-manager-button")
    this.csvDownloadButton = page.locator('[id="icon.download"]')
  }


  async clickOnRowIntoTable(){
    //  in case of the link is dynamic - it should be changed to according to something according  [href*='/cym/waf_category/action?attackID']
    await this.tableLink.click()
    console.log("Clicking on First raw successfully" );


  }


  async getAndAssertForScore(){
    let scoreText: string  = await this.score.textContent()
    await expect(scoreText).toBe("100");

  }

  async getAndAssertForWAFUrl(){
    await expect(this.page.getByText('https://ekslabs.cymulatedev.com')).toBeVisible();



  }
async generateCsvReport(){
  await this.generateReport.click()

}
async downloadByDownLoadManager(){
await this.downloadManager.click()
  this.csvDownloadButton.click()
}



}