
class AssertUtils {


    /**
     * the method validate that expression passed inside the parameter is true
     * @param {*} expression 
     */
    expectToBeTrue(expression) {
        if (typeof (expression) !== "undefined" && expression !== null) {
            expect(expression).toBe(true);
        }
    }


    /**
     * The method validate that expression passed inside the parameter is false
     * @param {*} expression 
     */
    expectToBeFalse(expression) {
        if (typeof (expression) !== "undefined" && expression !== null) {
            expect(expression).toBe(false);
        }
    }

    /**
     * The method validate that expected value should be equal to the actual value
     * @param {*} expected 
     * @param {*} actual 
     */
    expectToBeEqual(expected, actual) {
        if (typeof (expected) !== "undefined" && actual !== "undefined") {
            expect(expected).toEqual(actual);
        }
    }

    /**
     * Expected :- pass the refrence text
     * actual :- pass the text to be verified
     *  //"Uaturl":"https://www.iproperty.com.my/home-loan-eligibility/calculator/?disabled=all",
     * @param {*} expected 
     * @param {*} actual 
     */
    expectToContain(expected,actual){
        expect(expected).toContain(actual);
    }

    /**
     * The method validate that expected outcome is not equal to the actual outcome
     * @param {*} expected 
     * @param {*} actual 
     */
    expectNotEqual(expected, actual) {
        if (typeof (expected) !== "undefined" && actual !== "undefined") {
            expect(expected).not.toBe(actual);
        }
    }

}
module.exports = new AssertUtils();