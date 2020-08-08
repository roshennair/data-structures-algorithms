/**
 * - My implementation of a hash table as a JS class
 * - Overall space complexity: O(n), n = Size of hash table
 * - Uses a simple & insecure hash function for simplicity and ease of understanding
 * - Solution to hash collisions: An array to store multiple key-value pairs within each bucket
 */
class HashTable {
    /**
     * - Instantiates a new hash table
     * - Time complexity: O(n), n = Size of hash table
     * - Space complexity: O(n)
     */
    constructor(size) {
        if (isNaN(size)) {
            throw new Error('Size must be an integer.')
        } else if (size < 1) {
            throw new Error('Size of hash table must be 1 or greater.');
        }
        
        this.data = new Array(size); // O(n)
    }

    /**
     * - Generates a pseudo-random hash(address) for a key
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    _hash(key) {
        key = String(key);
        let hash = 0;
        // The generated hash/address is bound by the size of the hash table
        for (let i = 0; i < Math.min(key.length, 20); i++) { // O(1), number of loops is limited to 20/less
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    /**
     * - Generates a new key-value pair
     * - Time complexity: O(1)
     * - Space complexity: O(1)
     */
    set(key, value) {
        const address = this._hash(key);
        // Create new bucket if it doesn't already exist
        if (!this.data[address]) {
            this.data[address] = [];
        }
        // Push new key-value pair into bucket
        this.data[address].push([key, value]);
    }

    /**
     * - Returns the stored value for a given key
     * - Time complexity: O(m) where m = Size of bucket, amortized O(1) for big-enough hash table sizes
     * - Space complexity: O(1)
     */
    get(key) {
        const address = this._hash(key);
        if (this.data[address]) {
            // Iterate through each key-value pair in the bucket till a pair with a matching key is found
            for (let pair of this.data[address]) {
                if (pair[0] === key) return pair[1];
            }

            throw new Error(`This hash table doesn't contain the key ${key}`);
        } else {
            throw new Error(`This hash table doesn't contain the key ${key}`);
        }
    }

    /**
     * - Returns an array of the keys
     * - Time complexity: O(n*m) where n = Size of hash table, m = Size of each bucket
     *  - Amortized O(1) for big-enough hash table sizes
     * - Space complexity: O(n*m)
     *  - Amortized O(n) for big-enough hash table sizes
     */
    keys() {
        let keysArray = [];
        for (let bucket of this.data) { // O(n)
            if (bucket) {
                for (let pair of bucket) { // O(m)
                    keysArray.push(pair[0]);
                }
            }
        }
        return keysArray;
    }
}