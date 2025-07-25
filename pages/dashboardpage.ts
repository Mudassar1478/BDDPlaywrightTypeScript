import { expect, Locator,Page } from '@playwright/test'
import assert from 'assert';

export class DashboardPage{

    private menu: Locator;
    private header:Locator;    
    private addUserButton:Locator;
    static empName:string;

    constructor(private page:Page)
    {
        this.menu = this.page.locator('.oxd-main-menu');
        this.header = this.page.locator('.oxd-topbar-header-breadcrumb');
        this.addUserButton = this.page.getByRole('button',{name: ' Add '});
    }

    async isDashboardVisible():Promise<string>{
        // return await this.page.locator('.oxd-topbar-header-breadcrumb').textContent() == ""        
        await this.page.waitForLoadState('load');   
        await this.page.waitForSelector('.oxd-topbar-header-breadcrumb', { state: 'visible', timeout: 10000 });     
        return this.page.url();
    }

    async clickOnMenuItem(strmenuItem:string){
        let menuItem = await this.menu.locator('li a span').filter({hasText:strmenuItem});
        await menuItem.click();
    }

    async verifyPage(headerText:string){
        await expect(this.header).toHaveText(headerText);
    }

    async clickAddButton(){
        await this.addUserButton.click();
    }

    async getEmpName(){
        this.page.waitForTimeout(5000);
        DashboardPage.empName = await this.page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[4]/div").textContent()??"";        
        console.log("Employee Name from Dashboard",DashboardPage.empName);
        
    }
}