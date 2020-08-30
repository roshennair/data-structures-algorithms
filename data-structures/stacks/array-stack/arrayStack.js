/**
 * - My implementation of an array stack as a JS class
 * - Overall space complexity: O(n)
 */
class ArrayStack {
    /**
     * - Instantiates a new array stack
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    constructor() {
        this._data = [];
    }
    
    /**
     * - Add new element to top of stack
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    push(element) {
        this._data.push(element);
        return this._data.length;
    }
    
    /**
     * - Remove element from top of stack
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    pop() {
        if (this._data.length === 0) throw new Error('No elements to pop from empty stack');

        return this._data.pop();
    }
    
    /**
     * - Return top-most element of stack, or null if stack is empty
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    peek() {
        return this._data.length > 0 ? this._data[this._data.length - 1] : null;
    }
}