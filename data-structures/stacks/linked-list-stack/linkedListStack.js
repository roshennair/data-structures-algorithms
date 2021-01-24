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
 * - My implementation of a linked list stack as a JS class
 * - Overall space complexity: O()
 */
class LinkedListStack {
	/**
	 * - Instantiates a new linked list stack
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	constructor() {
		this.top = null;
		this.length = 0;
	}

	/**
	 * - Add new value to top of stack
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	push(value) {
		const newTop = new SLLNode(value);
		if (this.length === 0) {
			this.top = newTop;
		} else {
			newTop.next = this.top;
			this.top = newTop;
		}
		this.length++;
		return this.length;
	}

	/**
	 * - Remove value from top of stack
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	pop() {
		if (this.length === 0) throw new Error('No values to pop from empty stack');

		let poppedValue = this.top.value;
		this.top = this.top.next;
		this.length--;
		return poppedValue;
	}

	/**
	 * - Return top-most value of stack, or null if stack is empty
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	peek() {
		return this.length > 0 ? this.top.value : null;
	}
}

module.exports = LinkedListStack;