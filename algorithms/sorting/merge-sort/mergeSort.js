/**
 * - Helper function that merges two sorted subarrays into one sorted array
 * - Time complexity: O(n)
 * - Space complexity: O(n) 
 */
function merge(left, right) {
	const result = [];
	let leftIndex = rightIndex = 0;
	while (leftIndex < left.length && rightIndex < right.length) { // O(n)
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
	while (leftIndex < left.length) { // O(n)
		result.push(left[leftIndex]);
		leftIndex++;
	}
	while (rightIndex < right.length) { // O(n)
		result.push(right[rightIndex]);
		rightIndex++;
	}
	return result;
}

/**
 * - My JS implementation of merge sort 
 * - Sorts an array of numbers and returns the sorted array
 * - Time complexity: O(n log n)
 * - Space complexity: O(n)
 */
function mergeSort(arr) {
	if (arr.length < 2) return arr;

	let left = arr.slice(0, arr.length / 2); // O(n)
	let right = arr.slice(arr.length / 2); // O(n)
	return merge(mergeSort(left), mergeSort(right)); // O(n log n) - O(n) operation called O(log n times)
}