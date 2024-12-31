import{test,expect} from '@playwright/test';
import { TestGridHomePage } from "../pages/home.page";
import { TestGridLoginPage } from '../pages/login.page';
import { TestGridReportPage } from '../pages/reports.page';
import { TestGridFirewallPage } from '../pages/firewall.page';
test('Computer at firewall Flow',async ({page}) => {
  const loginPage = new TestGridLoginPage(page);
  const homePage = new TestGridHomePage(page);
  const reportsPage = new TestGridReportPage(page);
  const firewallPage = new TestGridFirewallPage(page);


  // test precondition
  // install playwright according https://playwright.dev/docs/intro
  // or by NPM command npm init playwright@latest
  // make sure there is user "candidate_user@cymulate1.com" with password "ZzAa!@#$4321"




  const mail_pattern = "candidate_user@cymulate1.com";
  const password_pattern = "ZzAa!@#$4321";
  console.log("#### Test Start #####" );

  await loginPage.goTo();
  await loginPage.login(mail_pattern,password_pattern);
  await homePage.clickOnReportsTab()
  await reportsPage.clickOnFirewallHistory();
  await firewallPage.clickOnRowIntoTable()
  await firewallPage.getAndAssertForScore()
  await firewallPage.getAndAssertForWAFUrl()
  await firewallPage.downloadByDownLoadManager()


  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  console.log("#### Test End #####" );

})