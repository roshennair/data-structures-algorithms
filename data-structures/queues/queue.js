/**
 * - A helper class for instantiating linked list nodes
 * - Overall space complexity: O(1)
 */
class SLLNode {
	/**
	 * - Instantiates a new linked list node
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

/**
 * - My implementation of a queue (using an internal linked list) as a JS class
 * - Overall space complexity: O(n)
 */
class Queue {
	/**
	 * - Instantiates a new queue
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	/**
	 * - Add an element to the end of the queue
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	enqueue(element) {
		const newLast = new SLLNode(element)
		if (this.length === 0) {
			this.first = newLast;
		} else {
			this.last.next = newLast;
		}
		this.last = newLast;
		this.length++;
		return this.length;
	}

	/**
	 * - Remove first element from the queue
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	dequeue() {
		if (this.length === 0) {
			throw new Error('No elements to dequeue from empty queue');
		}

		if (this.length === 1) this.last = null;
		let oldFirst = this.first.value;
		this.first = this.first.next;
		this.length--;
		return oldFirst;
	}

	/**
	 * - Return first element in the queue, or null if queue is empty
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	peek() {
		return this.length > 0 ? this.first.value : null;
	}
}

module.exports = Queue;