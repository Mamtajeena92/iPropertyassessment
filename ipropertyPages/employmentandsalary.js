const { element, by, browser } = require('protractor');

let driverHelper = require('../ipropertyUtils/DriverHelper');
const { wait } = require('../ipropertyUtils/WaitUtils');
let waitHelper = require('../ipropertyUtils/WaitUtils');
let applicationFile = require('../Resources/application.json');
let url = applicationFile.ApplicationCredentials.Uaturl;

//Elements Of Page's
let malayln = element(by.xpath("//span[@data-locale='ms-MY']"));
let agedropdown = element(by.xpath("//div[@class='ant-select-selection__rendered']"));
let selectage = element(by.xpath("//ul[@role='menu']/li[9]"));
let employee = element(by.xpath("//span[contains(text(),'Employee')]/parent::label"));
let selfemployed = element(by.xpath("//span[contains(text(),'Basic Salary + Variable Income / Commission')]/parent::label"));
let basicsalary = element(by.xpath("//span[contains(text(),'Basic Salary')]/parent::label"));
let basicsalarycommision = element(by.xpath("//span[contains(text(),'Basic Salary + Variable Income / Commission')]/parent::label"));
let purecommision = element(by.xpath("//span[contains(text(),'Pure Commission')]/parent::label"));
let basicsalaryvalue = element(by.xpath("//input[@id='formData.[0].monthlySalary.gross_salary']"));
let fixedallowancevalue = element(by.xpath("//input[@id='formData.[0].monthlySalary.gross_fixed_allowance']"));
let commissionvalue = element(by.xpath("//input[@id='formData.[0].monthlySalary.commission']"));
let pcbvalue = element(by.xpath("//input[@id='formData.[0].monthlyPcb.pcb']"));
let nextbutton = element(by.xpath("//button[@type='button']"));
let latestB = element(by.xpath("//input[@id='formData.[0].annualIncome.b_form_revenue']"));


class employmentandsalary {

   navigatetoURL(url){
    browser.ignoreSynchronisation = true;
  browser.get(url)
   }
  
   selectBahasaMalay(){
     driverHelper.click(malayln);
   }

   clickonAgeDropdown(){
    //waitHelper.waitForElementIsDisplayed(agedropdown);
    //browser.waitForAngularEnabled(false);
    driverHelper.click(agedropdown);
    
   }

   selectage(){
     driverHelper.click(selectage);
   }

   selectEmployee(){
    ////waitHelper.waitForElementIsDisplayed(employee);
    waitHelper.wait(2000);
    driverHelper.click(employee);

   }

   selectSelfEmployed(){
    //waitHelper.waitForElementIsDisplayed(selfemployed);
    driverHelper.click(selfemployed);
   }
   
   selectBasicsalary(){
    //waitHelper.waitForElementIsDisplayed(basicsalary);
    driverHelper.click(basicsalary);
   }
   
   selectBasicSalaryCommision(){
    //waitHelper.waitForElementIsDisplayed(basicsalarycommision);
    driverHelper.click(basicsalarycommision);

   }

   selectPureCommision(){
    //waitHelper.waitForElementIsDisplayed(purecommision);
    driverHelper.click(purecommision);

   }
   
   
   /**
     * Enter bonus which employees receive 
     * @param {*} BasicSalary 
     */
   enterBasicSalary(BasicSalary){
    //waitHelper.waitForElementIsDisplayed(basicsalaryvalue);
    driverHelper.type(basicsalaryvalue, BasicSalary);
   
   }

    /**
     * Enter bonus which employees receive 
     * @param {*} FixedAllowance 
     */
    enterFixedAllowance(FixedAllowance){
      //waitHelper.waitForElementIsDisplayed(fixedallowancevalue);
      driverHelper.type(fixedallowancevalue, FixedAllowance);
     
     }

      /**
     * Enter bonus which employees receive 
     * @param {*} Commission 
     */
    enterCommision(Commission){
      //waitHelper.waitForElementIsDisplayed(commissionvalue);
      driverHelper.type(commissionvalue, Commission);
     
     }

      /**
     * Enter bonus which employees receive 
     * @param {*} MonthlyPCB 
     */
    enterPCBValue(MonthlyPCB){
      //waitHelper.waitForElementIsDisplayed(pcbvalue);
      driverHelper.type(pcbvalue, MonthlyPCB);
     
     }

       /**
     * Enter bonus which employees receive 
     * @param {*} LatestB 
     */
    enterLatestB(LatestB){
      //waitHelper.waitForElementIsDisplayed(latestB);
      driverHelper.type(latestB, LatestB);
     
     }

       clickonNextButton(){
      //waitHelper.waitForElementIsDisplayed(nextbutton);
      driverHelper.click(nextbutton);
     }
 
}
module.exports = new employmentandsalary();