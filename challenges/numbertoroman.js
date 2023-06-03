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
  


    


