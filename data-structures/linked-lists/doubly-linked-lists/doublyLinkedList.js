/**
 * - A helper class for instantiating doubly linked list nodes
 * - Overall space complexity: O(1)
 */
class DLLNode {
    /**
     * - Instantiates a new doubly linked list node
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * - My implementation of a doubly linked list as a JS class
 * - Overall space complexity: O(n), n = Length of linked list
 */
class DoublyLinkedList {
    /**
     * - Instantiates a new doubly linked list 
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    constructor(value) {
        this.head = new DLLNode(value); // O(1)
        this.tail = this.head;
        this.length = 1;
    }
    
    /**
     * - Inserts new head node
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    prepend(value) {
        const newHead = new DLLNode(value); // O(1)
        newHead.next = this.head;
        this.head.prev = newHead;
        this.head = newHead;
        this.length++;
    }
    
    /**
     * - Inserts new tail node
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    append(value) {
        const newTail = new DLLNode(value); // O(1)
        this.tail.next = newTail;
        newTail.prev = this.tail;
        this.tail = newTail;
        this.length++;
    }
    
    /**
     * - Returns the node at a given index (zero-based)
     * - Time complexity: O(n), n = Length of linked list, but half as many operations as a singly linked list lookup
     * - Space complexity: O(1)
     */
    lookup(index) {
        if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);
        
        let currentNode = this.head, count = 0;
        if (index < this.length / 2) {
            // Iterate from head to index
            while (count < index) { // O(n), n = Length of linked list
                currentNode = currentNode.next;
                count++;
            }
        } else {
            // Iterate from tail to index
            currentNode = this.tail, count = this.length - 1;
            while (count > index) { // O(n), n = Length of linked list
                currentNode = currentNode.prev;
                count--;
            }
        }
        return currentNode;
    }
    
    /**
     * - Inserts a new node at a given index
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    insert(value, index) {
        if (index < 0 || index >= this.length) {
            return new Error (`Index ${index} is out of bounds.`);
        } else if (index === 0) {
            return this.prepend(value); // O(1)
        } else if (index === this.length - 1) {
            return this.append(value); // O(1)
        }

        const newNode = new DLLNode(value);
        const prevNode = this.lookup(index - 1); // O(n), n = Length of linked list
        const nextNode = prevNode.next;
        // Reroute pointers
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
    }
    
    /**
     * - Removes a node at a given index
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error (`Index ${index} is out of bounds.`);
        } else if (index === 0) { // O(1)
            const newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
        } else if (index === this.length - 1) { // O(1)
            const newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
        } else {
            const prevNode = this.lookup(index - 1); // O(n), n = Length of linked list
            const nextNode = prevNode.next.next;
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length--;
    }
    
    /**
     * - Reverses the linked list such that the old head node is the new tail node, and the old tail node is the new head node
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    reverse() {
        const newHead = this.tail, newTail = this.head;
        let prevNode = null, currentNode = this.head;
        while (currentNode !== null) { // O(n), n = Length of linked list
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
            currentNode.prev = nextNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = newHead;
        this.tail = newTail;
    }
    
    /**
     * - Prints out a graphical representation of the linked list in the console
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(n), n = Length of linked list
     */
    print() {
        const printArray = []; // O(n), n = Length of linked list space complexity
        let currentNode = this.head;
        while (currentNode !== null) { // O(n), n = Length of linked list time complexity
            printArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(printArray);
    }
}