import { Before,After, Status } from '@cucumber/cucumber';
import { customWorld } from './world';

Before(async function (this:customWorld) {
    await this.init();
});

After(async function (this: customWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const { page } = this;
    const screenshot = await page.screenshot({ path: `./allure-results/${scenario.pickle.name}.png` });
    this.attach(screenshot, 'image/png');    
  }
  await this.close();
});