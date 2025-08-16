import {
  isArray,
  isNonEmptyArray,
  isEmptyArray,
  isArrayOf,
  isStringArray,
  isNumberArray,
  isBooleanArray,
  isObjectArray,
  isArrayWithLength,
  isArrayWithMinLength,
  isArrayWithMaxLength,
  validateArray,
} from "../index";

describe("Enhanced Array Validation", () => {
  describe("isArray", () => {
    it("should return true for arrays", () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2, 3])).toBe(true);
      expect(isArray(["a", "b", "c"])).toBe(true);
      expect(isArray([true, false])).toBe(true);
      expect(isArray([{}, {}])).toBe(true);
    });

    it("should return false for non-arrays", () => {
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray({})).toBe(false);
      expect(isArray("string")).toBe(false);
      expect(isArray(123)).toBe(false);
      expect(isArray(true)).toBe(false);
      expect(isArray(new Date())).toBe(false);
    });

    it("should work with arguments object", () => {
      function testArguments(): boolean {
        // eslint-disable-next-line prefer-rest-params
        return isArray(arguments);
      }
      expect(testArguments()).toBe(false);
    });
  });

  describe("isNonEmptyArray", () => {
    it("should return true for non-empty arrays", () => {
      expect(isNonEmptyArray([1])).toBe(true);
      expect(isNonEmptyArray([1, 2, 3])).toBe(true);
      expect(isNonEmptyArray(["a"])).toBe(true);
    });

    it("should return false for empty arrays and non-arrays", () => {
      expect(isNonEmptyArray([])).toBe(false);
      expect(isNonEmptyArray(null)).toBe(false);
      expect(isNonEmptyArray(undefined)).toBe(false);
      expect(isNonEmptyArray({})).toBe(false);
    });
  });

  describe("isEmptyArray", () => {
    it("should return true only for empty arrays", () => {
      expect(isEmptyArray([])).toBe(true);
    });

    it("should return false for non-empty arrays and non-arrays", () => {
      expect(isEmptyArray([1])).toBe(false);
      expect(isEmptyArray([1, 2, 3])).toBe(false);
      expect(isEmptyArray(null)).toBe(false);
      expect(isEmptyArray(undefined)).toBe(false);
      expect(isEmptyArray({})).toBe(false);
    });
  });

  describe("isArrayOf", () => {
    const isString = (value: unknown): value is string =>
      typeof value === "string";
    const isNumber = (value: unknown): value is number =>
      typeof value === "number";

    it("should validate arrays with specific types", () => {
      expect(isArrayOf(["a", "b", "c"], isString)).toBe(true);
      expect(isArrayOf([1, 2, 3], isNumber)).toBe(true);
      expect(isArrayOf([], isString)).toBe(true); // empty array is valid
    });

    it("should return false for mixed or wrong types", () => {
      expect(isArrayOf(["a", 1, "c"], isString)).toBe(false);
      expect(isArrayOf([1, 2, "3"], isNumber)).toBe(false);
      expect(isArrayOf("not an array", isString)).toBe(false);
    });
  });

  describe("isStringArray", () => {
    it("should return true for string arrays", () => {
      expect(isStringArray(["a", "b", "c"])).toBe(true);
      expect(isStringArray([])).toBe(true);
      expect(isStringArray([""])).toBe(true);
    });

    it("should return false for non-string arrays", () => {
      expect(isStringArray([1, 2, 3])).toBe(false);
      expect(isStringArray(["a", 1, "c"])).toBe(false);
      expect(isStringArray(null)).toBe(false);
    });
  });

  describe("isNumberArray", () => {
    it("should return true for number arrays", () => {
      expect(isNumberArray([1, 2, 3])).toBe(true);
      expect(isNumberArray([])).toBe(true);
      expect(isNumberArray([0, -1, 3.14])).toBe(true);
    });

    it("should return false for arrays with NaN or non-numbers", () => {
      expect(isNumberArray([1, NaN, 3])).toBe(false);
      expect(isNumberArray(["1", 2, 3])).toBe(false);
      expect(isNumberArray([1, "2", 3])).toBe(false);
      expect(isNumberArray(null)).toBe(false);
    });
  });

  describe("isBooleanArray", () => {
    it("should return true for boolean arrays", () => {
      expect(isBooleanArray([true, false])).toBe(true);
      expect(isBooleanArray([])).toBe(true);
      expect(isBooleanArray([false, false, false])).toBe(true);
    });

    it("should return false for non-boolean arrays", () => {
      expect(isBooleanArray([true, 1, false])).toBe(false);
      expect(isBooleanArray([0, 1])).toBe(false);
      expect(isBooleanArray(null)).toBe(false);
    });
  });

  describe("isObjectArray", () => {
    it("should return true for object arrays", () => {
      expect(isObjectArray([{}, {}])).toBe(true);
      expect(isObjectArray([])).toBe(true);
      expect(isObjectArray([{ a: 1 }, { b: 2 }])).toBe(true);
    });

    it("should return false for arrays with null, primitives, or nested arrays", () => {
      expect(isObjectArray([{}, null])).toBe(false);
      expect(isObjectArray([{}, []])).toBe(false);
      expect(isObjectArray([1, 2, 3])).toBe(false);
      expect(isObjectArray(null)).toBe(false);
    });
  });

  describe("isArrayWithLength", () => {
    it("should validate array length", () => {
      expect(isArrayWithLength([], 0)).toBe(true);
      expect(isArrayWithLength([1], 1)).toBe(true);
      expect(isArrayWithLength([1, 2, 3], 3)).toBe(true);
    });

    it("should return false for wrong length or non-arrays", () => {
      expect(isArrayWithLength([1], 2)).toBe(false);
      expect(isArrayWithLength([1, 2], 1)).toBe(false);
      expect(isArrayWithLength(null, 0)).toBe(false);
    });
  });

  describe("isArrayWithMinLength", () => {
    it("should validate minimum array length", () => {
      expect(isArrayWithMinLength([1, 2, 3], 2)).toBe(true);
      expect(isArrayWithMinLength([1, 2], 2)).toBe(true);
      expect(isArrayWithMinLength([], 0)).toBe(true);
    });

    it("should return false for arrays below minimum length", () => {
      expect(isArrayWithMinLength([1], 2)).toBe(false);
      expect(isArrayWithMinLength([], 1)).toBe(false);
      expect(isArrayWithMinLength(null, 0)).toBe(false);
    });
  });

  describe("isArrayWithMaxLength", () => {
    it("should validate maximum array length", () => {
      expect(isArrayWithMaxLength([1], 2)).toBe(true);
      expect(isArrayWithMaxLength([1, 2], 2)).toBe(true);
      expect(isArrayWithMaxLength([], 5)).toBe(true);
    });

    it("should return false for arrays above maximum length", () => {
      expect(isArrayWithMaxLength([1, 2, 3], 2)).toBe(false);
      expect(isArrayWithMaxLength([1], 0)).toBe(false);
      expect(isArrayWithMaxLength(null, 5)).toBe(false);
    });
  });

  describe("validateArray", () => {
    it("should validate arrays with default options", () => {
      expect(validateArray([])).toBe(true);
      expect(validateArray([1, 2, 3])).toBe(true);
      expect(validateArray(null)).toBe(false);
    });

    it("should validate empty arrays based on allowEmpty option", () => {
      expect(validateArray([], { allowEmpty: true })).toBe(true);
      expect(validateArray([], { allowEmpty: false })).toBe(false);
      expect(validateArray([1], { allowEmpty: false })).toBe(true);
    });

    it("should validate array length constraints", () => {
      expect(validateArray([1, 2], { minLength: 1, maxLength: 3 })).toBe(true);
      expect(validateArray([1], { minLength: 2 })).toBe(false);
      expect(validateArray([1, 2, 3, 4], { maxLength: 3 })).toBe(false);
    });

    it("should validate element types", () => {
      expect(validateArray(["a", "b"], { elementType: "string" })).toBe(true);
      expect(validateArray([1, 2], { elementType: "number" })).toBe(true);
      expect(validateArray([true, false], { elementType: "boolean" })).toBe(
        true
      );
      expect(validateArray([{}, {}], { elementType: "object" })).toBe(true);

      expect(validateArray([1, 2], { elementType: "string" })).toBe(false);
      expect(validateArray(["a", "b"], { elementType: "number" })).toBe(false);
    });

    it("should combine multiple validation criteria", () => {
      const options = {
        allowEmpty: false,
        minLength: 2,
        maxLength: 5,
        elementType: "string" as const,
      };

      expect(validateArray(["a", "b"], options)).toBe(true);
      expect(validateArray(["a", "b", "c"], options)).toBe(true);

      expect(validateArray([], options)).toBe(false); // empty not allowed
      expect(validateArray(["a"], options)).toBe(false); // too short
      expect(validateArray(["a", "b", "c", "d", "e", "f"], options)).toBe(
        false
      ); // too long
      expect(validateArray([1, 2, 3], options)).toBe(false); // wrong type
    });
  });
});
