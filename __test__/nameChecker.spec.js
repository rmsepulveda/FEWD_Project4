import "babel-polyfill";
import { checkForName } from "../src/client/js/nameChecker"

describe("Testing the submit functionality", () => {
    test("Testing the checkForName() function", () => {
        expect(checkForName).toBeDefined();
    });
    
    test("Return true on valid URL", () => {
        expect(checkForName("http://www.ricksepulveda.com")).toBe(true);
    });

    test("Return false on valid URL", () => {
        expect(checkForName("NotAurl")).toBe(false);
    });

});

