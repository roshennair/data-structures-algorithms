/**
 * - My JS implementation of the Boyer-Moore majority vote algorithm 
 * - Finds the majority (more than half) element of an input sequence, if it exists
 * - Time complexity: O(n), n = Length of input sequence
 * - Space complexity: O(1)
 */
function boyerMooreMajorityVote(arr) {
	let majority = null, counter = 0;
	for (let element of arr) { // O(n)
		// If counter is 0, there is no majority
		if (counter === 0) {
			// Store element as majority and increment counter
			majority = element;
			counter = 1;
		} else if (element === majority) {
			// If element is current majority, increment counter
			counter++;
		} else {
			// Otherwise, decrement counter
			counter--;
		}
	}
	// Return overall majority element, if it exists
	return majority;
}
