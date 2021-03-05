describe('Calculate Home loan for a Self Employed in Bahasa Malay',()=>{
    
    //import all the pages
   let driverHelper = require('../../ipropertyUtils/DriverHelper');
   //let waitHelper = require('../../ipropertyUtils/WaitUtils');
   let applicationFile = require('../../Resources/application.json');
   let commitmentFile = require('../../ipropertyPages/commitments.js');
   let earningsFile = require('../../ipropertyPages/earnings.js');
   let employmentFile = require('../../ipropertyPages/employmentandsalary.js');
   let resultFile = require('../../ipropertyPages/results.js');

   //import all the test data files
   let excelUtil = require('../../ipropertyUtils/ExcelUtils.js');
   let dataProvider = excelUtil.getDataFromFileInJson('C:/Users/mamta.singh/Downloads/Assessment/Resources/TestData.xlsx', 'TestData_SelfEmployed');
   

   //Initialize All The Test Data
   let url = applicationFile.ApplicationCredentials.Uaturl;
   let mailUrl = applicationFile.ApplicationCredentials.yahooMailUrl;
   let mailUser = applicationFile.ApplicationCredentials.YahooUser;
   let mailPass = applicationFile.ApplicationCredentials.YahooPass;
   
   beforeAll(()=>{
       url = applicationFile.ApplicationCredentials.Uaturl;
   
   });
   dataProvider.forEach((data) => {
   it('navigate to url',()=>{

        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);

       //navigate to iProperty URL
       employmentFile.navigatetoURL(url);

       //maximize window
       browser.driver.manage().window().maximize();

       employmentFile.selectBahasaMalay();

       //Select age from dropdown
       employmentFile.clickonAgeDropdown();

       //Select age from dropdown
       employmentFile.selectage(); 

       //Choose employment Status as Employee 
       employmentFile.selectSelfEmployed();

       //enter Latest B income anually 
       employmentFile.enterLatestB(data.LatestB);

       //Click on Next Button 
       employmentFile.clickonNextButton();

        //Enter Contractual Bonus 
       earningsFile.enterContractualBonus(data.ContractualBonus);

       //Enter Perfomrance Bonus 
       earningsFile.enterPerformanceBonus(data.PerformanceBonus);

       //Enter Director Fees
       earningsFile.enterDirectorFees(data.DirectorFees);

       //Enter ASB Dividends  earnings
       earningsFile.enterASBDividends(data.ASBDividends);

       //Enter Intersts earnings
       earningsFile.enterInterests(data.Interests);

       //Enter Rental  earnings
       earningsFile.enterRentalIncome(data.RentalIncome);

       //Enter Overtime earnings 
       earningsFile.enterOvertime(data.Overtime);

       //Click on Next Button 
       earningsFile.clickonNextButton();

       ////Enter Home Loan
       commitmentFile.enterHomeLoan(data.HomeLoan);

       //Enter Car Loan
       commitmentFile.enterCarLoan(data.CarLoan);

       //Enter Personal Loan 
       commitmentFile.enterPersonalLoan(data.PersonalLoan);

       //Enter PTPTN Loan
       commitmentFile.enterPTPTNLoan(data.PTPTNLoan);

       //Enter Other Loan 
       commitmentFile.enterOtherLoan(data.OtherLoan);

       //Enter Credit Card 
       commitmentFile.enterCreditCard(data.CreditCard);

       //Enter Overdraft Value 
       commitmentFile.enterOverdraft(data.Overdraft);

       //Click on Caluculate Button 
       commitmentFile.clickonCalculateButton();

       //Enter Email 
       resultFile.enterEmail();

      //  //Open Yahoo Mail To New tab
       //  resultFile.openNewtab(mailUrl);

       //  //Switch To The New Window
       //  resultFile.getWindowHandle();

       //  //login To The yahoo mail
       //  resultFile.loginToYahooMail(mailUser, mailPass);

       //  //Click On The Mail Icon
       //  resultFile.clickOnMailIcon();

       //  //Verify The yahoo Mail Inbox page
       //  resultFile.verifyYahooMailInboxPage();

       //  resultFile.clickOnRefresh()
       //      .selectTheFirstMail()
       //      .verifyTheMessage();

       // resultFile.getWindowHandle();
       
   });

});


})