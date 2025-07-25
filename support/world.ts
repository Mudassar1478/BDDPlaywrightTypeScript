import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser,BrowserContext,Page,chromium } from 'playwright';

export class customWorld extends World{
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    async init(){
        this.browser = await chromium.launch({
            headless:false, 
            channel:'chrome',
            args: ['--start-maximized']
        });
        this.context = await this.browser.newContext({
            viewport:null
        });
        this.page = await this.context.newPage();
    }

    async close(){
        await this.page.close();
        await this.context.close();
        await this.browser.close();
    }
}

setWorldConstructor(customWorld);