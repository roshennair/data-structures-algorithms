/**
 * - My JS implementation of Floyd's cycle detection algorithm 
 * - Checks if a cycle exists in a linked list, and if it does, returns the starting node of the cycle.
 * - Time complexity: O(μ+λ), μ = Starting index of cycle, λ = Length of cycle
 * - Space complexity: O(1)
 */
function floydsCycleDetection(head) {
	// Check if list has at least 2 next nodes
	if (!head.next || !head.next.next) return false;
	// Initialize tortoise and hare pointers
	let tortoise = head.next, hare = head.next.next;
	// Iterate until tortoise and hare meet in the cycle
	while (tortoise.value !== hare.value) {
		// Move hare pointer at twice the speed of tortoise pointer
		tortoise = tortoise.next;
		hare = hare.next.next;
		// Check if hare pointer is null or at end of list
		if (!hare || !hare.next) return false;
	}
	// If the two have met, there is a cycle
	// Move tortoise back to head
	tortoise = head;
	// Iterate over list again, with both nodes moving at same speed
	while (tortoise.value !== hare.value) {
		tortoise = tortoise.next;
		hare = hare.next;
	}
	// Their second meeting point is the starting node of the cycle
	return tortoise;
}
