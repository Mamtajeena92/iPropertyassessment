const { element, by } = require('protractor');

//Import All Helper
let driverHelper = require('../ipropertyUtils/DriverHelper')
let waitHelper = require('../ipropertyUtils/WaitUtils');
let assertUtils = require('../ipropertyUtils/AssertUtils');

//locators Of commitments Page

let homeloanvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.mortgage_loan']"));
let carloanvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.hire_purchase']"));
let personalloanvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.personal_loan']"));
let ptpnvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.ptptn-loan']"));
let otherloanvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.other_loan']"));
let creditcardvalue = element(by.xpath("//input[@id='formData.[2].monthlyCommitments.other_loan']")); 
let overdraftvalue = element(by.xpath("//input[@id='formData.[2].outstandingCommitments.overdraft']"));
let calculatebutton = element(by.xpath("//button[@class='ant-btn btn-next ant-btn-primary']"));
let previousbutton = element(by.xpath("//button[@class='ant-btn btn-prev']"));

class commitments {
/**
     * Enter loan which employees have 
     * @param {*} HomeLoan
     */
    enterHomeLoan(HomeLoan){
        waitHelper.waitForElementIsDisplayed(homeloanvalue);
        driverHelper.type(homeloanvalue, HomeLoan);
    }
/**
     * Enter loan which employees have 
     * @param {*} CarLoan
     */
    enterCarLoan(CarLoan){
        waitHelper.waitForElementIsDisplayed(carloanvalue);
        driverHelper.type(carloanvalue, CarLoan);
    }
/**
     * Enter loan which employees have 
     * @param {*} PersonalLoan
     */
    enterPersonalLoan(PersonalLoan){
        waitHelper.waitForElementIsDisplayed(personalloanvalue);
        driverHelper.type(personalloanvalue, PersonalLoan);
    }
/**
     * Enter loan which employees have 
     * @param {*} PTPTNLoan
     */
    enterPTPTNLoan(PTPTNLoan){
        waitHelper.waitForElementIsDisplayed(ptpnvalue);
        driverHelper.type(ptpnvalue, PTPTNLoan);
    }
/**
     * Enter loan which employees have 
     * @param {*} OtherLoan
     */
    enterOtherLoan(OtherLoan){
        waitHelper.waitForElementIsDisplayed(otherloanvalue);
        driverHelper.type(otherloanvalue, OtherLoan);
    }
/**
     * Enter loan which employees have 
     * @param {*} CreditCard
     */
    enterCreditCard(CreditCard){
        waitHelper.waitForElementIsDisplayed(creditcardvalue);
        driverHelper.type(creditcardvalue, CreditCard);
    }
/**
     * Enter loan which employees have 
     * @param {*} Overdraft
     */
    enterOverdraft(Overdraft){
        waitHelper.waitForElementIsDisplayed(overdraftvalue);
        driverHelper.type(overdraftvalue, Overdraft);
    }
 clickonCalculateButton(){
        waitHelper.waitForElementIsDisplayed(calculatebutton);
        driverHelper.click(calculatebutton);
       }
    
    clickonPreviousButton(){
        waitHelper.waitForElementIsDisplayed(previousbutton);
        driverHelper.click(previousbutton);
       }




}
module.exports = new commitments();