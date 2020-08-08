/**
 * - My custom implementation of an array data structure via a JS class
 * - For illustration purposes only, this implementation uses a JS object to store the array elements
 * - Overall space complexity: O(n), n = Length of array 
 */
class MyArray {
    /**
     * - Instantiates a new empty array
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    constructor() {
        this.data = {};
        this.length = 0;
    }

    /** 
     * - Returns the element at a given index
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    lookup(index) {
        if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
        
        return this.data[index];
    }

    /** 
     * - Inserts an element at the end of the array
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    push(element) {
        if (element === undefined) throw new Error('This function requires 1 argument: element.');
        
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }

    /** 
     * - Removes the element at the end of the array
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    pop() {
        if (this.length < 1) throw new Error('This array is empty.');
        
        const deletedElement = this.data[this.length - 1]; 
        delete this.data[this.length - 1];
        this.length--;
        return deletedElement;
    }

    /** 
     * - Inserts an element at a given index
     * - Time complexity: O(n), n = Length of array
     * - Space complexity: O(1)
     */
    insert(element, index) {
        if (element === undefined) {
            throw new Error('This method requires an element argument');
        } else if (index < 0 || index >= this.length) {
            throw new Error(`Index ${index} is out of bounds.`);
        } else if (index === this.length - 1) {
            return this.push(element);
        }

        // Shift each index to the left, keeping track of next element
        let currentElement = element;
        for (let i = index; i < this.length; i++) {
            let temp = this.data[i];
            this.data[i] = currentElement;
            currentElement = temp;
        }
        // Create new index for last element
        this.data[this.length] = currentElement;
        this.length++;
        return this.length;
    }
    
    /** 
     * - Removes the element at a given index
     * - Time complexity: O(n), n = Length of array
     * - Space complexity: O(1)
     */
    delete(index) {
        if (index < 0 || index >= this.length) {
            throw new Error(`Index ${index} is out of bounds.`);
        } else if (index === this.length - 1) {
            return this.pop();
        }
        
        let deletedElement = this.data[index];
        delete this.data[index]; // Remove selected element
        // Shift each index to the right
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        // Remove last unused index
        delete this.data[this.length - 1];
        this.length--;
        return deletedElement;
    }
}