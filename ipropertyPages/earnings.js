const { element, by } = require('protractor');

// Import All The Utils Page
let driverHelper = require('../ipropertyUtils/DriverHelper');
let waitHelper = require('../ipropertyUtils/WaitUtils');

//All The Locators Of earnings page
let contractualbonusvalue = element(by.xpath("//input[@id='formData.[1].yearlyAverage.contractual_bonus']"));
let performancebonusvalue = element(by.xpath("//input[@id='formData.[1].yearlyAverage.performance_bonus']"));
let directorfeevalue = element(by.xpath("//input[@id='formData.[1].yearlyAverage.annual_fees']"));
let asbdividendvalue = element(by.xpath("//input[@id='formData.[1].yearlyAverage.asb_income']"));
let interestvalue = element(by.xpath("//input[@id='formData.[1].yearlyAverage.interest_deposit_income']"));
let rentalincomevalue = element(by.xpath("//input[@id='formData.[1].monthlyAverage.rental_income']"));
let overtimevalue = element(by.xpath("//input[@id='formData.[1].monthlyAverage.overtime']"));
let nextbutton = element(by.xpath("//button[@class='ant-btn btn-next ant-btn-primary']"));
let previousbutton = element(by.xpath("//button[@class='ant-btn btn-prev']"));

class earnings {
    /**
     * Enter bonus which employees receive 
     * @param {*} ContractualBonus 
     */
   enterContractualBonus(ContractualBonus){
    waitHelper.waitForElementIsDisplayed(contractualbonusvalue);
    driverHelper.type(contractualbonusvalue, ContractualBonus);
    }
   /**
     * Enter bonus which employees receive 
     * @param {*} PerformanceBonus
     */
    enterPerformanceBonus(PerformanceBonus){
        waitHelper.waitForElementIsDisplayed(performancebonusvalue);
        driverHelper.type(performancebonusvalue, PerformanceBonus);
    }
    /**
     * Enter bonus which employees receive 
     * @param {*} DirectorFees
     */
    enterDirectorFees(DirectorFees){
        waitHelper.waitForElementIsDisplayed(directorfeevalue);
        driverHelper.type(directorfeevalue, DirectorFees);
    }
    /**
     * Enter bonus which employees receive 
     * @param {*} ASBDividends
     */
    enterASBDividends(ASBDividends){
        waitHelper.waitForElementIsDisplayed(asbdividendvalue);
        driverHelper.type(asbdividendvalue, ASBDividends);
    }
    /**
     * Enter bonus which employees receive 
     * @param {*} Interests
     */
    enterInterests(Interests){
        waitHelper.waitForElementIsDisplayed(interestvalue);
        driverHelper.type(interestvalue, Interests);
    }
    /**
     * Enter bonus which employees receive 
     * @param {*} RentalIncome
     */
    enterRentalIncome(RentalIncome){
        waitHelper.waitForElementIsDisplayed(rentalincomevalue);
        driverHelper.type(rentalincomevalue, RentalIncome);
    }
    /**
     * Enter bonus which employees receive 
     * @param {*} Overtime
     */
    enterOvertime(Overtime){
        waitHelper.waitForElementIsDisplayed(overtimevalue);
        driverHelper.type(overtimevalue, Overtime);
    }
    clickonNextButton(){
        waitHelper.waitForElementIsDisplayed(nextbutton);
        driverHelper.click(nextbutton);
       }
    
    clickonPreviousButton(){
        waitHelper.waitForElementIsDisplayed(previousbutton);
        driverHelper.click(previousbutton);
       }
     
}
module.exports = new earnings();