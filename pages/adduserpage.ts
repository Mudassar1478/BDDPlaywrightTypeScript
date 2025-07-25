import { Console } from "console";
import { Locator,Page } from "playwright";
import { DashboardPage } from "./dashboardpage";
import { expect } from "playwright/test";


export class AddUserPage{

    private selectRole: Locator;
    private empName:Locator;
    private selectStatus:Locator;
    private userName:Locator;
    private pass:Locator;
    private conPass:Locator;
    private btnSubmit:Locator;

    constructor(private page:Page){
        this.selectRole =   this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "User Role")]]//div[contains(@class, "oxd-select-wrapper")]');
        this.empName =      this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "Employee Name")]]//input');
        this.selectStatus = this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "Status")]]//div[contains(@class, "oxd-select-wrapper")]');
        this.userName =     this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "Username")]]//input');
        this.pass =         this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "Password")]]//input');
        this.conPass =      this.page.locator('//div[contains(@class,"oxd-input-group oxd-input-field-bottom-space") and .//label[contains(text(), "Confirm Password")]]//input');
        this.btnSubmit = this.page.locator('button[type="submit"]');
    }

    async selectRolefn(role:string){
        await this.selectRole.click();
        await this.page.locator('.oxd-select-option',{hasText:role}).click();        
        //await this.page.waitForTimeout(2000);
        console.log('Role Selected')
    }

    async enterName(name:string){
        console.log('Entering Employee Name');        
        try{
            name = await DashboardPage.empName;
            console.log(name);
            await this.empName.fill(name);
            this.page.waitForTimeout(2000);
            await this.page.locator('.oxd-autocomplete-option',{hasText:'Searching'}).waitFor({state:'hidden'});
            const element = await this.page.locator('.oxd-autocomplete-option');            
            await this.page.waitForSelector('.oxd-autocomplete-option');            
            if(await element.count() > 0)
            {
                console.log("Total Options for Selection : " , await this.page.locator('.oxd-autocomplete-option').count());
                await this.page.locator('.oxd-autocomplete-option').first().click()
                //await this.page.locator('.oxd-autocomplete-option',{hasText:name}).click();
            }
        }
        catch(error){
            console.log('Error Filling Input',(error instanceof Error) ? error.message : String(error));
        }
        console.log('Employee Name Entered');
        //await this.page.waitForTimeout(2000);
    }

    async selectStatusfn(status:string){
        console.log('Select Status Element',await this.selectStatus.count());
        await this.selectStatus.click();
        await this.page.locator('.oxd-select-option',{hasText:status}).click();
        console.log('Selected Status');
    }

    async enterUserName(name:string){
        //console.log('User Name Class Name',await this.userName.getAttribute('class'));
        console.log('User Name Elements',await this.userName.count());
        console.log('User Name Already Exist: ', await this.userName.textContent());
        await this.userName.fill(name);
        //await this.page.waitForTimeout(5000);
        console.log('User Name Entered');
    }

    async enterPass(name:string){
        await this.pass.first().fill(name);
        console.log('Password Entered');
    }

    async enterConPass(name:string){
        await this.conPass.fill(name);
        console.log('Confirm Password Entered');
        await this.page.waitForTimeout(3000);
        
    }

    async saveRole(){
        await this.btnSubmit.click();
        await this.page.waitForTimeout(10000);
    }
}