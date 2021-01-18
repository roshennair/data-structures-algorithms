/**
 * - My JS implementation of linear search
 * - Searches an array and returns either the index of the value (if found) or -1 (if not found)
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */
function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) { // O(n)
		if (arr[i] === value) return i;
	}
	return -1;
}
console.log(linearSearch([1, 3, 4, 5, 6, 33, 9, 11, 25], 3));
console.log(linearSearch([1, 3, 4, 5, 6, 33, 9, 11, 25], 25));
console.log(linearSearch([1, 3, 4, 5, 6, 33, 9, 11, 25], 20));