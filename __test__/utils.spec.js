import { scoreConverter } from "../src/client/js/utils"
import { postApi } from "../src/client/js/utils"

describe("Testing the submit functionality", () => {
     test("Testing the postApi function", () => {
         const input = "P";
         const output = "Positive"
            
        expect(scoreConverter(input)).toEqual(output);
        })
});
describe("Testing the submit functionality", () => {
    test("Testing the postApi function", () => {
        expect(postApi()).toBeFalsy();
})});
