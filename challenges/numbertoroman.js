export function numberToRoman(num)
{
    if (num === 1) {
        return "I";
      } else if (num === 2) {
        return "II";
      } else if (num === 3) {
        return "III";
      } else if (num === 4) {
        return "IV";
      } else if (num === 5) {
        return "V";
      } else if (num === 6) {
        return "VI";
      } else if (num === 7) {
        return "VII";
      } else if (num === 8) {
        return "VIII";
      } else if (num === 9) {
        return "IX";
      } else if (num === 10) {
        return "X";
      } else {
        return ""; // Return an empty string for numbers outside the range 1-10
    }
}
    const number = 1;
const romanNumeral = numberToRoman(number);
console.log(romanNumeral);

    


