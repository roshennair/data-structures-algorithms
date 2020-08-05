class MyArray {
    // Instantiates a new empty array
    constructor() {
        this.data = {};
        this.length = 0;
    }

    // Returns the element at a given index
    lookup(index) {
        if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
        return this.data[index];
    }

    // Inserts an element at the end of the array
    push(element) {
        if (element === undefined) throw new Error('This function requires 1 argument: element.');
        this.data[this.length] = element;
    }

    // Removes the element at the end of the array
    pop() {
        if (this.length < 1) throw new Error('This array is empty.');
        delete this.data[this.length - 1];
        this.length--;
    }
    
    // Removes the element at a given index
    delete(index) {
        if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
        delete this.data[index];
        this.shiftIndexes(index);
    }

    shiftIndexes(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}