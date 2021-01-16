/**
 * - My JS implementation of selection sort 
 * - Sorts an array of numbers and returns the sorted array
 * - Time complexity: O(n^2)
 * - Space complexity: O(1)
 */
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		// Initialize current value as minimum
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			// Update min if new minimum found
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		// Swap min and current values
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
}