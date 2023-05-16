// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	
	const initials = `${firstName.charAt(0)}.${lastName.charAt(0)}`;
	return initials;
  
  
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	const vatAmount = (originalPrice * vatRate) / 100;
	const totalPrice = originalPrice + vatAmount;
	const  totalVatPrice= totalPrice.toFixed(2)
	return Number(totalVatPrice);
}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	const discountAmount = (originalPrice * reduction) / 100;
	const salePrice = originalPrice - discountAmount;
	const roundedSalePrice = salePrice.toFixed(2);
	return Number(roundedSalePrice);
    } 


export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');const middleIndex = Math.floor(str.length / 2);

	if (str.length % 2 === 0) {
	  // Even length string
	  return str.substring(middleIndex - 1, middleIndex + 1);
	} else {
	  // Odd length string
	  return str.charAt(middleIndex);
	}
	
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	return word.split('').reverse().join('');

}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	return words.map(reverseWord);

}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	return users.filter(user => user.type === "Linux").length;

}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	const sum = scores.reduce((total, score) => total + score, 0);
	const mean = sum / scores.length;
	return Number(mean.toFixed(2));
  
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	if (n % 3 === 0 && n % 5 === 0) {
		return "fizzbuzz";
	  } else if (n % 3 === 0) {
		return "fizz";
	  } else if (n % 5 === 0) {
		return "buzz";
	  } else {
		return n;
	  }
}
