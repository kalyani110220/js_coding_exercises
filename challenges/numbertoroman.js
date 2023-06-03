export function numberToRoman(num, numeralToDigitMap) {
    let result = '';
  
    for (const digit in numeralToDigitMap) {
      while (num >= digit) {
        result += numeralToDigitMap[digit];
        num -= digit;
      }
    }
  
    return result;
  }

  export function numeralToDigit(numeral) {
    const numeralToDigitMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
  
    if (numeral in numeralToDigitMap) {
      return numeralToDigitMap[numeral];
    } else {
      throw new Error('Invalid Roman numeral');
    }
}
     
  


    


