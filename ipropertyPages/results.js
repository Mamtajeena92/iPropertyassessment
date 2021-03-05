const { element, by } = require('protractor');
//Import All The Utils 
let driverHelper = require('../ipropertyUtils/DriverHelper');
let waitHelper = require('../ipropertyUtils/WaitUtils');
let assertUtils = require('../ipropertyUtils/AssertUtils');

let email = element(by.xpath("//input[@class='ant-input ant-input-lg']"));
let viewreportassumpition = element(by.xpath("//div[@class='report-assumptions']"));
let userName = element(by.css("input[name='username']"));
let password = element(by.css("input[type='password']"));
let NextButton = element(by.css("input[value='Next']"));
let passwordNextButton = element(by.css("button[value='Next']"));
let mailIcon = element(by.css("a[id='header-mail-button']"));
let mailInboxheader = element(by.xpath("//img[@alt='Yahoo Mail']/parent::a"));
let yahooMail = element(by.xpath("//img[@alt='Yahoo Mail']/parent::a"));
let firstEmail = element(by.css("div[data-test-id='virtual-list']>ul>li:nth-child(3)>a"));
let message = element(by.xpath("(//table[contains(@class,'TextContentContainer')])[1]//p[2]/i[2]"));

class results {

     /**
     * Enter email 
     * @param {*} FixedAllowance 
     */
    enterEmail(){
        waitHelper.waitForElementIsDisplayed(email);
        driverHelper.type(email, "testaccount1439@yahoo.com");
        waitHelper.wait(3000);
    }

    //Open New Tab
    openNewtab(url) {
        driverHelper.openTheUrlInsideNewTab(url);
    }

    //Get Window handle
    getWindowHandle() {
        driverHelper.getWindowHandle();
    }

    /**
     * Login To The yahoo Mail
     * @param {*} user 
     * @param {*} pass 
     */
    loginToYahooMail(user,pass){
        driverHelper.type(userName,user);
        driverHelper.click(NextButton);
        waitHelper.wait(2000);
        driverHelper.type(password,pass);
        driverHelper.click(passwordNextButton);
    }

    //Click On mail icon After login To Account
    clickOnMailIcon(){
        waitHelper.waitForElementIsDisplayed(mailIcon);
        driverHelper.click(mailIcon);
    }
    //Verify Yahoo Mail Inbox Page
    verifyYahooMailInboxPage(){
        waitHelper.wait(mailInboxheader);
        driverHelper.verifyTheElementIsPresent(mailInboxheader);
    }

    //Click On Refresh
    clickOnRefresh(){
        waitHelper.waitForElementVisible(yahooMail);
        driverHelper.click(yahooMail);
        return this;
    }

    // Select The First Mail
    selectTheFirstMail(){
       waitHelper.wait(3000);
        driverHelper.click(firstEmail);
       return this;
    }

    //Verify The Message 
    verifyTheMessage(){
        waitHelper.waitForElementVisible(message);
        message.getText().then(text=>{
            console.log('The message is :-- '+text);
        });
    }

} 
module.exports = new results ();