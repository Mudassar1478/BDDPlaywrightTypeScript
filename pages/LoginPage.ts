import {Locator, Page} from '@playwright/test'
import { Config } from '../support/config';


export class LoginPage{
    private txtUserName: Locator;
    private txtPassword: Locator;
    private btnSubmit: Locator;

    constructor(private page:Page){
        this.txtUserName = this.page.locator('[name="username"]');
        this.txtPassword = this.page.locator('[name="password"]');
        this.btnSubmit = this.page.locator('button[type="submit"]');
    }

    async goto(){
        //await this.page.goto('https://opensource-demo.orangehrmlive.com/')
        await this.page.goto(Config.baseurl)
    }

    async login(username:string, password:string){
        // await this.txtUserName.fill(username);
        // await this.txtPassword.fill(password);
        console.log('User Name : ',Config.username);
        console.log('Password : ',Config.password);
        await this.txtUserName.fill(Config.username);
        await this.txtPassword.fill(Config.password);
        await this.btnSubmit.click()
    }

    

}