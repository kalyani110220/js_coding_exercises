import {
    numberToRoman,
    numeralToDigit,

  } from "../challenges/numbertoroman";

  describe('numberToRoman', () => {
    it('should convert number 1 to Roman numeral I', () => {
      const numeralToDigitMap = {
        1: 'I',
      };
      expect(numberToRoman(1, numeralToDigitMap)).toBe('I');
    });
  
    it('should convert number 4 to Roman numeral IV', () => {
      const numeralToDigitMap = {
        4: 'IV',
      };
      expect(numberToRoman(4, numeralToDigitMap)).toBe('IV');
    });
  
    it('should convert number 5 to Roman numeral V', () => {
      const numeralToDigitMap = {
        5: 'V',
      };
      expect(numberToRoman(5, numeralToDigitMap)).toBe('V');
    });
  
    it('should convert number 9 to Roman numeral IX', () => {
      const numeralToDigitMap = {
        9: 'IX',
      };
      expect(numberToRoman(9, numeralToDigitMap)).toBe('IX');
    });
  
    it('should convert number 10 to Roman numeral X', () => {
      const numeralToDigitMap = {
        10: 'X',
      };
      expect(numberToRoman(10, numeralToDigitMap)).toBe('X');
    });
});

describe("numeralToDigit", () => {
    it('should convert numeral I to digit 1', () => {
        expect(numeralToDigit('I')).toBe(1);
    });
});
  
  
  