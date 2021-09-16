
// Not all functions are imported, be careful 👇
const {
    subtract,
    divide,
    isDivisibleBy,
    gradeAssignment,
    trimString
} = require("./app.js");

describe('Somke test', () => {
    test("Tests work", () => {
        expect(1+1).toEqual(2);
    });
});

describe('Test the subtract() function', () => {
    test("Subtract 2 positive numbers, where the first parameter is larger than the scond one", () => {
        let num1 = 5;
        let num2 = 1;
        let expected = 4;
        let output = subtract(num1, num2);
        expect(output).toEqual(expected);
        expect(subtract(-5, -2)).toEqual(-3);
        expect(subtract(-50, -200)).toEqual(150);
    });
});

describe('Test the divide() function', () => {
    test("Should whole numbers", () => {
        expect(divide(9,3)).toBe(3);
        expect(divide(10,5)).toBe(2);
    });
});

describe('Test the isDivisibleBy() function', () => {
    test("Should whole numbers", () => {
        expect(isDivisibleBy(14, 7)).toBeTruthy();
        expect(isDivisibleBy(21, 3)).toBe(true);
    });
});

describe("Test gradeAssignment()", () => {
    it('should return a Pass', function () {
        expect(gradeAssignment(41)).toBe('Pass');
    })
    it('should return a Merit', function () {
        expect(gradeAssignment(65)).toBe('Merit');
    })
    it('should return a Distinction', function () {
        expect(gradeAssignment(95)).toBe('Distinction');
    })
    it('should return a Fail', function () {
        expect(gradeAssignment(10)).toBe('Fail');
    })
});

describe("Test trimString()", () => {
    it('should trim a string', function () {
        expect(trimString("   hello       ")).toBe('hello');
    })
});