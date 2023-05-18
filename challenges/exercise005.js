export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const index = nums.indexOf(n);
	if (index === -1 || index === nums.length - 1) {
	return null;
	}
	return nums[index + 1];
  
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	let count = {
		'1': 0,
		'0': 0
	};
	
	for (let i = 0; i < str.length; i++) {
		count[str[i]]++;
	}
	
	return count;
  
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	const reversedString = n.toString().split('').reverse().join('');
  return parseInt(reversedString, 10);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let sum = 0;

	for (let i = 0; i < arrs.length; i++) {
	const subArray = arrs[i];
	for (let j = 0; j < subArray.length; j++) {
		sum += subArray[j];
	}
	}
  
	return sum;
  

};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	if (arr.length < 2) {
		return arr;
	}
	const swappedArray = [...arr]; 
	
	[swappedArray[0], swappedArray[arr.length - 1]] = 
	[swappedArray[arr.length - 1], swappedArray[0]];
  
	return swappedArray;
  
	
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	const keys = Object.keys(haystack);
  
	for (let i = 0; i < keys.length; i++) {
	const propertyValue = haystack[keys[i]];
	if (typeof propertyValue === 'string' && propertyValue.toLowerCase().
	includes(searchTerm.toLowerCase())) {
	return true;
	}
	}
	return false;
  
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	const wordCount = {};

	// Remove punctuation and convert to lowercase
	const sanitizedStr = str.replace(/[^\w\s]/g, "").toLowerCase();
	const words = sanitizedStr.split(" ");
	for (let i = 0; i < words.length; i++) {
	const word = words[i];
	if (wordCount[word]) {
		wordCount[word]++;
	} else {
		wordCount[word] = 1;
	}
	}
	return wordCount;
  
};
