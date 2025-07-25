import { When,Then } from '@cucumber/cucumber';
import { DashboardPage } from "../../pages/dashboardpage";
import { customWorld } from "../../support/world";

let dashboardPage:DashboardPage;

Then('I Should see the dashboard',{timeout:20000},async function (this: customWorld) {    
    dashboardPage = new DashboardPage(this.page)
    const currentURL = await dashboardPage.isDashboardVisible();
    console.log(currentURL);
    if(!currentURL.includes('dashboard'))
    {
        throw new Error(`Expected URL to contain 'dashboard' but got: ${currentURL}`);
    }    
});

When('I Click on {string} From Menu',async function (this: customWorld,menuItem: string) {
    await dashboardPage.clickOnMenuItem(menuItem);
});

Then('Admin User Mangement page should open',async function (this: customWorld) {
    await dashboardPage.verifyPage('AdminUser Management');
});

When('I click Add button', async function (this: customWorld) {
    await dashboardPage.clickAddButton();
});

Then('New User Page Should Open',async function (this:customWorld) {
    await dashboardPage.verifyPage('Admin');
})

Then('I Get Employee Name',async function (this:customWorld) {
    await dashboardPage.getEmpName();
})
