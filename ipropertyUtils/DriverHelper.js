const { browser, element, by } = require('protractor');
let assert = require('./AssertUtils');


class DriverHelper {

    /**
     * Convert the String into webelement and returns the webelement
     */
    findLocator(locator, value) {
        var locatorType = locator[0];
        var locatorValue = locator[1];
        var webELement = null;
        if (typeof locator !== 'undefined') {
            if (locatorType == 'id') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.id(locatorValue));
                }
            } else if (locatorType == 'name') {
                if (locator !== 'undefined') {
                    this.webElement = element(by.name(locatorValue));
                }
            } else if (locatorType == 'xpath') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.xpath(locatorValue));
                }
            } else if (locatorType == 'css') {
                if (locatorValue !== 'undefined') {
                    this.webElement = element(by.css(locatorValue));
                }
            } else if (locatorType == 'cssText') {
                if (value !== 'undefined') {
                    console.log('the locator passed from the outside is:-' + locatorValue)
                    this.webElement = element(by.cssContainingText(locatorValue))
                }
            }
        }
        return this.webElement
    };


    /**
     * Navigate to the application
     * @param {*} value 
     */
    navigateTo(value) {
        browser.get(value);
    }

    //Get Current Page Title
    async getPageTitle() {
        return await browser.getTitle();
    }

    //click on element
    click(element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(() => {
                element.isEnabled().then(() => {
                    element.click();
                    return this;
                });
            });
        }
    }

    /**
     * Click On Any element by passing the tag name and text
     * @param {*} tagName  :- The tag name on which click needs to be performed
     * @param {*} text :- The text of the tag
     */
    clickOnTagUsingText(tagName, text) {
        if (tagName !== 'undefined') {
            let buttonLocator = element(by.cssContainingText(tagName, text))
            this.JsClick(buttonLocator);
        }
    }


    // Click WebElement using Javascript
    JsClick(element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(() => {
                element.isEnabled().then(() => {
                    browser.executeScript("arguments[0].click()", element);
                    return this;
                });
            });
        }
    }

    //click using action class
    clickUsingAction(element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed(() => {
                element.isEnabled().then(() => {
                    browser.actions().mouseMove(element).click().perform();
                    return this;
                });
            });
        }
    };

    // Double click on the element using action class
    doubleClick(element) {
        if (typeof element !== 'undefined') {
            element.isDisplayed(() => {
                element.isEnabled().then(() => {
                    browser.actions().doubleClick(element).perform();
                });
            });
        };
    };

    /**
     * Get text of webELement
     */
    async getText(element) {
        if (typeof element !== 'undefined') {
            // element.isDisplayed().then(() => {
            //     element.isEnabled().then(() => {
                    var text = await element.getText();
                    return text;
             //   })
           // })
        }
    }

    //Clear The Text Using Javascript
    clearText(element) {
        if (typeof element !== 'undefined') {
            browser.executeScript("arguments[0].value = '';", element);
        }
    }

    // type a value in input box
    type(element, value) {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(() => {
                element.isEnabled().then(() => {
                    element.clear().then(() => {
                        if (typeof value !== 'undefined') {
                            element.sendKeys(value);
                        }
                    });
                    return this;
                });
            });
        }
    };

    // type a value in input box and press enter key
    typeAndEnter = (element, value) => {
        if (typeof element !== 'undefined') {
            element.isDisplayed().then(() => {
                element.isEnabled().then(() => {
                    element.clear();
                    if (typeof value !== 'undefined') {
                        element.sendKeys(value);
                    }
                    return this;
                });
            });
        }
    };


    /**
     * Mouse Hover To The Element passed inside the parameter
     * @param {*} element 
     */
    mouseHoverToTheElement(element) {
        if (element !== 'undefined') {
            browser.actions().mouseMove(element).perform();
        }
    }

    //accept the alert and return the text  
    getAlertText() {
        var alertDialog = browser.switchTo().alert();
        var text = alertDialog.getText();
        alertDialog.accept();
        return text;
    };

    /**
     * Scroll Down To The Last 
     */
    scrollTheWindow() {
        browser.executeScript('window.scrollTo(0,10000);');
        return this;
    }

    //Scroll To The Top of page
    scrollToTheTopOfPage() {
        browser.executeScript('window.scrollTo(0,0);').then(function () {
            logger.Log().debug('++++++SCROLLED UP+++++');
        });
    }

    //Scroll upto an element
    ScrollToView(element) {
        if (typeof element !== 'undefined') {
            browser.executeScript("arguments[0].scrollIntoView();", element);
        }
    }

    /**
     * Verify The text present inside the element is equal to expected text
     * @param {*} element 
     * @param {*} expectedText 
     */
    verifyTheElementIsPresent(element) {
        element.isPresent().then((res) => {
            assert.expectToBeTrue(res);
        });
    }

   

    /**
     * Sets the test data file according to the url
     */
    getCurrentEnvironment() {
        logger.Log().debug('____________' + env);
        return env
    }

    /**
     * Get Current Env path
     */
    getCurrentEnvPath() {
        let TestDataPath = "\\Resources\\" + env + "_TestData";
        let absolutePath = __basedir + TestDataPath;
        return absolutePath;
    }

    //Switch To parent window
    getWindowHandle() {
        var window = browser.getAllWindowHandles();
        window.then((handles) => {
            let childWindow = handles[0];
            let parentWindow = handles[1];
            browser.getWindowHandle().then((window) => {
                if (childWindow == window) {
                    browser.switchTo().window(parentWindow);
                } else {
                    browser.switchTo().window(childWindow);
                }
            });
        });
    }

    /**
     * Opens The Url In New Tab
     * 
     */
    openTheUrlInsideNewTab(url) {
        //browser.waitForAngular(false);
        browser.executeScript(`window.open ("${url}") `)
    }

    /**
     * Get Current Window id
     * @param {*} element 
     */
    async getCurrentWindowId() {
        return await browser.getWindowHandle();
    }

    /**
     * Verify that element is present 
     * @param {*} element 
     */
    verifyTheElementIsPresent(element) {
        if (element !== 'undefined') {
            assert.expectToBeTrue(element.isPresent());
        } else {
            logger.Log().error('The element passed is null pass in the correct locator');
        }
    }

    /**
     * Pass Expedted text need to be verified and pdf file path where pdf is available
     * @param {*} expectedText 
     * @param {*} pdfFilePath 
     */
    verifyPdfContent(expectedText, pdfFilePath) {
        let dataBuffer = fs.readFileSync(pdfFilePath);
        pdf(dataBuffer).then((data) => {
            assert.expectToContain(data.text,expectedText);
        }).catch((error) => {
            logger.Log().error('The exception caused due to :- ' + error);
            console.log('The pdf couldnt read beacuse of :- ' + error);
        });
    }

    //Verify Page Numbers in Pdf
    verifyPageNumberInsidePdf(pageNumber, pdfFilePath) {
        let dataBuffer = fs.readFileSync(pdfFilePath);
        pdf(dataBuffer).then((data) => {
            assert.expectToContain(pageNumber, data.numpages);
        }).catch((error) => {
            logger.Log().error('The exception caused due to :- ' + error);
            console.log('The pdf couldnt read beacuse of :- ' + error);
        });
    }

    deleteAllFilesInsideAFolder(folderPath){
        
    }

}
module.exports = new DriverHelper();