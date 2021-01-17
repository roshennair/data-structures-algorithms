/**
 * - Helper function that partitions/orders array elements around a selected pivot value
 * - Time complexity: O(n)
 * - Space complexity: O(1)
 */
function partition(arr, start, end) {
	// Select a pivot (last element)
	let pivot = arr[end];
	// Initialize partition index as start
	let partitionIndex = start;
	// Whenever an element smaller/equal to pivot is found, swap it with the partition index
	for (let i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			[arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]];
			partitionIndex++;
		}
	}
	// Swap positions of partition index and pivot element
	[arr[partitionIndex], arr[end]] = [arr[end], arr[partitionIndex]];
	// Return index of pivot element
	return partitionIndex;
}

/**
 * - My JS implementation of quick sort 
 * - Sorts an array of numbers and returns the sorted array
 * - Time complexity: O(n log n) average, O(n^2) worst-case
 * - Space complexity: O(log n) average, O(n) worst-case
 */
function quickSort(arr, start, end) {
	// If subarray is valid
	if (start < end) {
		// Partition array and get pivot index
		let pivotIndex = partition(arr, start, end);
		// Recursively call quickSort for left and right subarrays
		quickSort(arr, start, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, end);
	}
}

// Helper function to run quick sort on a given array
function runQuickSort(arr) {
	quickSort(arr, 0, arr.length - 1);
	return arr;
}