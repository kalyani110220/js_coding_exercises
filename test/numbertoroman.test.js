import {
    numberToRoman
  } from "../challenges/numbertoroman";

  describe('numberToRoman', () => {
    it('should convert number 1 to Roman numeral I', () => {
      expect(numberToRoman(1)).toBe('I');
    });
});
  