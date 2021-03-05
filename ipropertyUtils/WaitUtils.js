const {browser,protractor} = require('protractor');
const Ec = protractor.ExpectedConditions;



class WaitUtils{
        //wait till specified time 
        wait(value) {
            browser.sleep(value | 2000);
        };
        
        /**
         * Wait for Invisiblity loading  text
         */
        waitForInvisiblityOfText(loadingText){
            browser.wait(Ec.invisibilityOf(loadingText, 2000));
        }
    
        //wait for element is displayed
        waitForElementIsDisplayed (element) {
            if(typeof element !== 'undefined') {
                browser.wait( ()=> {
                    return element.isDisplayed();
                },  30000) ;
            }
        };
    
        //wait for element not present 
        waitForElementIsNotDisplayed (element) {
            if(typeof element !== 'undefined') {
                browser.wait( () =>{
                    return !element.isDisplayed();
                }, 30000);
            }
        };
    
        //wait for the element to be clickable
        waitForElementToBeClickable (element) {
            if(typeof element!== 'undefined') {
                browser.wait(()=> {
                    return Ec.elementToBeClickable(element);
                }, 30000);
            }
        }
    
        waitForElementVisible(element) {
            if(typeof element!== 'undefined') {
                browser.wait(()=>{
                    return Ec.presenceOf(element);
                }, 30000);
            }
        };
    
     
    }
    module.exports = new WaitUtils();
