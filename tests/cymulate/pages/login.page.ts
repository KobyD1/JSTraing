import { expect, Locator, Page } from '@playwright/test';
export class TestGridLoginPage{
  readonly url="https://app.cymulate.com/cym/login";
  readonly page: Page;
  readonly getEmailMenu: Locator;
  readonly getPWMenu: Locator;
  readonly getSignInButton: Locator;




  constructor(page: Page){
    this.page = page;
    this.getEmailMenu = page.locator('[id="email"]');
    this.getPWMenu = page.locator('[id="password"]');
    this.getSignInButton = page.locator('button:nth-child(1) > span.MuiButton-label');


  }


  async goTo(){
    await this.page.goto(this.url);
    console.log("Navigate to "+this.url +"success" );

  }


  async login(userPattern, passwordPattern){
    console.log("Login with email "+ userPattern );

    await this.getEmailMenu.click();
    await this.getEmailMenu.fill(userPattern);
    await this.getPWMenu.click();
    await this.getPWMenu.fill(passwordPattern);
    await this.getSignInButton.click()



  }

}