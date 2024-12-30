import{test,expect} from '@playwright/test';
import { TestGridHomePage } from "../pages/home.page";
import { RegistrationPage } from '../pages/register.page';
test('TestGrid Get Started Flow',async ({page}) => {
  const homePage = new TestGridHomePage(page);
  const regPage = new RegistrationPage(page);
  await homePage.goTo();
  await homePage.getStarted();
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  await delay(10000);
  await regPage.fillForm();
})