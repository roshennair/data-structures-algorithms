/**
 * - A helper class for instantiating binary tree nodes
 * - Overall space complexity: O(1)
 */
class BTNode {
	/**
	 * - Instantiates a new binary tree node
	 * - Time complexity: O(1) 
	 * - Space complexity: O(1) 
	 */
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/**
 * - My implementation of a binary search tree as a JS class
 * - Overall space complexity: O(n)
 */
class BinarySearchTree {
	/**
	 * - Instantiates a new binary search tree
	 * - Time complexity: O(1) 
	 * - Space complexity: O(1) 
	 */
	constructor() {
		this.root = null;
	}

	/**
	 * - Inserts a new node, or returns false if node already exists
	 * - Time complexity: O(log n)
	 * - Space complexity: O(1) 
	 */
	insert(value) {
		const newNode = new BTNode(value);
		if (!this.root) {
			this.root = newNode;
		} else {
			let parentNode = null, currentNode = this.root;
			while (currentNode) { // O(log n), num of iterations = num of levels in tree
				parentNode = currentNode;
				if (value > currentNode.value) {
					currentNode = currentNode.right;
				} else if (value < currentNode.value) {
					currentNode = currentNode.left;
				} else {
					console.log(`Tree already contains node with value of ${value}.`);
					return false;
				}
			}
			if (value > parentNode.value) {
				parentNode.right = newNode;
			} else {
				parentNode.left = newNode;
			}
			return true;
		}
	}

	/**
	 * - Returns the node containing a given value, or returns false if node does not exist
	 * - Time complexity: O(log n) 
	 * - Space complexity: O(1) 
	 */
	lookup(value) {
		let currentNode = this.root;
		while (currentNode) { // O(log n), bound by height of tree which is bound by log n (number of nodes)
			if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else {
				return currentNode;
			}
		}
		console.log(`Tree does not contain node with value of ${value}.`);
		return false;
	}

	/**
	 * - Removes the node of a given value, or returns false if node does not exist
	 * - Time complexity: O(log n) 
	 * - Space complexity: O(1) 
	 */
	remove(value) {
		let parentNode = null, currentNode = this.root;
		while (currentNode) { // O(log n), bound by height of tree
			if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else {
				if (!currentNode.right) {
					// Case 1: No right child
					if (currentNode === this.root) {
						this.root = currentNode.left;
					} else {
						if (value > parentNode.value) {
							parentNode.right = currentNode.left;
						} else {
							parentNode.left = currentNode.left;
						}
					}
				} else if (!currentNode.right.left) {
					// Case 2: Right child with no left child
					if (currentNode === this.root) {
						this.root = currentNode.right;
					} else {
						if (value > parentNode.value) {
							parentNode.right = currentNode.right;
						} else {
							parentNode.left = currentNode.right;
						}
					}
					currentNode.right.left = currentNode.left;
				} else {
					// Case 3: Right child with left child
					let leftMost = currentNode.right.left, leftMostParent = currentNode.right;
					while (leftMost.left) { // O(log n), bound by height of tree
						leftMostParent = leftMost;
						leftMost = leftMost.left;
					}

					if (currentNode === this.root) {
						this.root = leftMost;
					} else {
						if (value > parentNode.value) {
							parentNode.right = leftMost;
						} else {
							parentNode.left = leftMost;
						}
					}
					leftMostParent.left = leftMost.right;
					leftMost.left = currentNode.left;
					leftMost.right = currentNode.right;
				}
				return true;
			}
		}
		console.log(`Tree does not contain node with value of ${value}.`);
		return false;
	}
}

module.exports = BinarySearchTree;