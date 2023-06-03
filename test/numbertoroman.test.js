import {
    numberToRoman
  } from "../challenges/numbertoroman";

  describe("numberToRoman", () => {
    it("should convert number 1 to Roman numeral I", () => {
      expect(numberToRoman(1)).toBe("I");
    });
  
    it("should convert number 2 to Roman numeral II", () => {
      expect(numberToRoman(2)).toBe("II");
    });
  
    it("should convert number 3 to Roman numeral III", () => {
      expect(numberToRoman(3)).toBe("III");
    });
  
    it("should convert number 4 to Roman numeral IV", () => {
      expect(numberToRoman(4)).toBe("IV");
    });
  
    it("should convert number 5 to Roman numeral V", () => {
      expect(numberToRoman(5)).toBe("V");
    });
  
    it("should convert number 6 to Roman numeral VI", () => {
      expect(numberToRoman(6)).toBe("VI");
    });
  
    it("should convert number 7 to Roman numeral VII", () => {
      expect(numberToRoman(7)).toBe("VII");
    });
  
    it("should convert number 8 to Roman numeral VIII", () => {
      expect(numberToRoman(8)).toBe("VIII");
    });
  
    it("should convert number 9 to Roman numeral IX", () => {
      expect(numberToRoman(9)).toBe("IX");
    });
  
    it("should convert number 10 to Roman numeral X", () => {
      expect(numberToRoman(10)).toBe("X");
    });
  });
  