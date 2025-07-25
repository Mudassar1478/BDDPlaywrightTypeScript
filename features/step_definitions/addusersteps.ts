import { When,Then } from "@cucumber/cucumber";
import { AddUserPage } from "../../pages/adduserpage";
import { customWorld } from "../../support/world";

let adduserpage: AddUserPage;

When('I Select {string} from Role Dropdown',async function (this:customWorld,role:string) {
    adduserpage = new AddUserPage(this.page);
    await adduserpage.selectRolefn(role);
});

When('I Enter Employee Name {string}',async function (this:customWorld,name:string) {
    await adduserpage.enterName(name);
});

When('I Select {string} from Status Dropdown',async function (this:customWorld,status:string) {
    adduserpage = new AddUserPage(this.page);
    await adduserpage.selectStatusfn(status);
});

When('I Enter User Name {string}',async function (this:customWorld,username:string) {
    await adduserpage.enterUserName(username);
});

When('I Enter Password {string}',async function (this:customWorld,pass:string) {
    await adduserpage.enterPass(pass);
});

When('I Enter Confirm Password {string}',async function (this:customWorld,conPass:string) {
    await adduserpage.enterConPass(conPass);
});

Then('I click on Submit button',async function (this:customWorld) {
    await adduserpage.saveRole();
})

