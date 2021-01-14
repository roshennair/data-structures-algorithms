/**
 * - My JS implementation of bubble sort 
 * - Sorts an array of numbers and returns the sorted array
 * - Time complexity: O(n^2)
 * - Space complexity: O(1)
 */
function bubbleSort(arr) {
	// One iteration for each element
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			// Compare each pair and swap if not in order
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
