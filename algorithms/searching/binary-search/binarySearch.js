/**
 * - My JS implementation of binary search
 * - Searches an array and returns either the index of the value (if found) or -1 (if not found)
 * - Time complexity: O(log n)
 * - Space complexity: O(1)
 */
function binarySearch(arr, value) {
	let start = 0, end = arr.length - 1;
	// While current search space has >= 1 element
	while (start <= end) { // O(log n)
		let mid = Math.ceil((start + end) / 2);
		if (value > arr[mid]) { // Go right
			start = mid + 1;
		} else if (value < arr[mid]) { // Go left
			end = mid - 1;
		} else {
			return mid;
		}
	}
	// If not found
	return -1;
}