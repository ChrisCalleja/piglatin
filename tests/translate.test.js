const translate = require("../src/translate");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("words that start with the vowel e", () => {
    let result = translate("ice");
    expect(result).toBe("iceway");
  });
  test("words that start with the vowel i", () => {
    let result = translate("electric");
    expect(result).toBe("electricway");
  });
  test("words that start with the vowel o", () => {
    let result = translate("ocean");
    expect(result).toBe("oceanway");
  });
  test("words that start with the vowel u", () => {
    let result = translate("under");
    expect(result).toBe("underway");
  });
  test("words that start with the vowel A", () => {
    let result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("words that start with one consonant", () => {
    let result = translate("day");
    expect(result).toBe("ayday");
  });
  test("words that start with two consonants", () => {
    let result = translate("cheese");
    expect(result).toBe("eesechay");
  });
  test("words that start with three consonants", () => {
    let result = translate("splendid");
    expect(result).toBe("endidsplay");
  });
});
