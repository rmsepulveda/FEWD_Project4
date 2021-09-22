import "babel-polyfill";
import { scoreConverter } from "../src/client/js/utils"
import { postApi } from "../src/client/js/utils"

describe("Testing the submit functionality", () => {
     test("Testing the scoreConverter function", () => {
        expect(scoreConverter('P')).toEqual('Positive');
        })
            
        test('Testing the scoreConverter() function', () => {
            expect(scoreConverter('NEU')).toBe('Neutral')
        })
        
        test('Testing the polarityChecker() function', () => {
            expect(scoreConverter('P+')).toBe('Strong Positive')
        })

        test('Testing the scoreConverter() function', () => {
            expect(scoreConverter('N')).toBe('Negative')
        })
    
        test('Testing the scoreConverter() function', () => {
            expect(scoreConverter('N+')).toBe('Strong Negative')
        })
    
        test('Testing the scoreConverter() function', () => {
            expect(scoreConverter('NONE')).toBe('No Sentiment')
        })
    
        test('Testing the scoreConverter() function', () => {
            expect(scoreConverter('')).toBe('No data')
        })
});

describe("Testing the submit functionality", () => {
    test("Testing the postApi function", () => {
        expect(postApi).toBeDefined();
       })
});