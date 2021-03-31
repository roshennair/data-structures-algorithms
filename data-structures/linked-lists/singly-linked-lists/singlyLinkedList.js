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
 * - My implementation of a singly linked list as a JS class
 * - Overall space complexity: O(n)
 */
class SinglyLinkedList {
    /**
     * - Instantiates a new singly linked list
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    constructor(value) {
        this.head = new SLLNode(value);
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * - Inserts new head node
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    prepend(value) {
        const newHead = new SLLNode(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
    }
    
    /**
     * - Inserts new tail node
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    append(value) {
        const newTail = new SLLNode(value);
        this.tail.next = newTail;
        this.tail = newTail
        this.length++;
    }

    /**
     * - Returns the node at a given index (zero-based)
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    lookup(index) {
        if (index < 0 || index >= this.length) throw new Error(`Index ${index} is out of bounds.`);

        let currentNode = this.head, count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    /**
     * - Inserts a new node at a given index
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    insert(value, index) {
        if (index < 0 || index > this.length) { // O(1)
            throw new Error(`Index ${index} is out of bounds.`)
        } else if (index === 0) {
            return this.prepend(value);
        } else if (index === this.length - 1) {
            return this.append(value);
        }

        // Index is in the middle of the list
        const newNode = new SLLNode(value);
        const prevNode = this.lookup(index - 1); // O(n)
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
    }

    /**
     * - Removes a node at a given index
     * - Time complexity: O(n), n = Length of linked list
     * - Space complexity: O(1)
     */
    remove(index) {
        if (index < 0 || index > this.length) { // O(1)
            throw new Error(`Index ${index} is out of bounds.`);
        } else if (index === 0) { // O(1)
            const newHead = this.head.next;
            this.head = newHead;
        } else if (index === this.length - 1) { // O(n)
            const newTail = this.lookup(index - 1); // O(n)
            newTail.next = null;
            this.tail = newTail;
        } else { // O(n)
            const prevNode = this.lookup(index - 1); // O(n)
            const nextNode = prevNode.next.next;
            prevNode.next = nextNode;            
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
        while (currentNode !== null) { // O(n)
            const nextNode = currentNode.next;
            currentNode.next = prevNode;
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
        const printArray = [];
        let currentNode = this.head;
        while (currentNode !== null) { // O(n)
            printArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(printArray);
    }
}