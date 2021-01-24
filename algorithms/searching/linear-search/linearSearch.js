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