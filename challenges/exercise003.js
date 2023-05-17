export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	const squares = [];

	for (const number of nums) {
	const square = number * number;
	squares.push(square);
	}
  
	return squares;
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	if (words.length === 0) {
		return '';
	}
	let result = words[0];
	
	for (let i = 1; i < words.length; i++) {
		const word = words[i];
		const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
		result += capitalizedWord;
	}
	
	return result;
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	let totalSubjects = 0;

  for (const person of people) {
    totalSubjects += person.subjects.length;
  }

  return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	for (const menuItem of menu) {
		if (menuItem.ingredients.includes(ingredient)) {
		return true;
		}
	}
	
	return false;
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	const duplicates = [];
	const uniqueSet = new Set(arr1);
  
	for (const num of arr2) {
	if (uniqueSet.has(num) && !duplicates.includes(num)) {
		duplicates.push(num);
	}
	}
  
	return duplicates.sort((a, b) => a - b);
}
