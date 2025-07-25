import { Given,When,Then } from '@cucumber/cucumber';
import { LoginPage } from "../../pages/LoginPage";
import { customWorld } from "../../support/world";

let loginPage: LoginPage

Given('I Open the login page', async function (this: customWorld) {
    loginPage = new LoginPage(this.page)
    console.log("logging into applicatoin");
    await loginPage.goto()
});

When('I login with UserName {string} and Password {string}', async function (this:customWorld,username:string,password:string) {
    await loginPage.login(username,password)
});

