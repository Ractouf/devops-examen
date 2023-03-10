const { isEmpty, checkName } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

describe("tests suite for validation function", () => {
    test("should return false as name is shorter than 8 characters", () => {
        const result = checkName("test");
        expect(result).toBeFalsy();
    });
    test("should return false as name does not contain special character", () => {
        const result = checkName("testtest");
        expect(result).toBeFalsy();
    });
    test("should return false as name does not contain number", () => {
        const result = checkName("testtest!");
        expect(result).toBeFalsy();
    });
    test("should return true as name is longer than 8 characters", () => {
        const result = checkName("testtest2!");
        expect(result).toBeTruthy();
    });
    test("should return true as name is equal to 8 characters", () => {
        const result = checkName("testte2!");
        expect(result).toBeTruthy();
    });
    test("should return true as name does contain special character and number", () => {
        const result = checkName("testtest2!");
        expect(result).toBeTruthy();
    });
});

// TODO: Create tests suite for validation function
