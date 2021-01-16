/**
 * - My JS implementation of insertion sort 
 * - Sorts an array of numbers and returns the sorted array
 * - Time complexity: O(n^2)
 * - Space complexity: O(1)
 */
function insertionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// Store current value
		let currentValue = arr[i];
		// Initialize j to current index
		let j = i;
		// Move all previous values greater than current value to the right
		while (j > 0 && arr[j - 1] > currentValue) {
			arr[j] = arr[j - 1];
			j--;
		}
		// Add current value to the empty slot
		arr[j] = currentValue;
	}
	return arr;
}