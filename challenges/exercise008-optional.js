/* 
	👉 These exercises are a quick practice of some modern JavaScript features.
*/

export function printColours(colours) {
	if (!colours) throw new Error('colour is required');
	return colours;
}

export function shoppingList(list, newItem) {
	if (!list) throw new Error('list is required');
	if (!newItem) throw new Error('newItem is required');
	return list.concat(newItem);
  
}

export function highestNumber(numbers) {
	if (!numbers) throw new Error('numbers are required');
	return Math.max(...numbers);

}

export function splitThatString(string) {
	if (!string) throw new Error('string is required');
	return string.split('');

}

// Optional Chaining Bonus activity!

export function addressLookUp(user) {
	if (!user) throw new Error('user is required');
	if (user.address && user.address.postcode) {
		return user.address.postcode;
	} else {
		return undefined;
	}
	
}
