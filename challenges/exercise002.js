export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	if (person.city === 'Manchester') 
		return true;
 else 
		return false;
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	const busCapacity = 40;
	const busesNeeded = Math.ceil(people / busCapacity);
	return busesNeeded;
  
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	const sheepCount = arr.filter(animal => animal === 'sheep').length;
	return sheepCount;
  
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	const { postCode, city } = person.address;
  if (postCode.startsWith('M') && city === 'Manchester') {
    return true;
  }
  return false;
}
