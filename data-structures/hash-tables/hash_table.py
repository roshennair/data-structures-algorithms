class HashTable:
    """
    My implementation of a hash table as a Python class

    Overall space complexity: O(n*m), n = Size of hash table, m = Size of each bucket. Amortized O(n) for large-enough hash table sizes

    Uses a simple & insecure hash function for simplicity and ease of understanding

    Solution to hash collisions: An array to store multiple key-value pairs within each bucket
    """

    def __init__(self, size):
        """
        Instantiates a new hash table

        Time complexity: O(n), n = Size of hash table

        Space complexity: O(n)
        """

        assert type(size) is int, "Size must be an integer."
        assert size >= 1, "Size of hash table must be 1 or greater."

        self.data = [None] * size
        # O(n)

    def __hash(self, key):
        """
        Generates a pseudo-random hash(address) for a key

        Time complexity: O(1)

        Space complexity: O(1)
        """

        # Use Python's built-in hash method
        # abs() prevents negative values
        # Bounded by size of hash table
        return abs(hash(key)) % len(self.data)  # O(1)

    def assign(self, key, value):
        """
        Generates a new key-value pair

        Time complexity: O(1)

        Space complexity: O(1)
        """

        address = self.__hash(key)
        # Create new bucket if it doesn't already exist
        if not self.data[address]:
            self.data[address] = []
        # Push new key-value pair (tuple) into bucket
        self.data[address].append((key, value))

    def get(self, key):
        """
        Returns the stored value for a given key

        Time complexity: O(m) where m = Size of bucket; amortized O(1) for big-enough hash table sizes

        Space complexity: O(1)
        """

        address = self.__hash(key)
        if self.data[address]:
            # Iterate through each tuple pair in the bucket till a pair with a matching key is found
            for pair in self.data[address]:
                if pair[0] == key:
                    return pair[1]
            raise KeyError(key)
        else:
            raise KeyError(key)

    def keys(self):
        """
        Returns a list of the keys

        Time complexity: O(n*m) where n = Size of hash table, m = Size of each bucket; amortized O(1) for big-enough hash table sizes

        Space complexity: O(n*m), amortized O(n) for big-enough hash table sizes
        """

        keysList = []
        for bucket in self.data:  # O(n)
            # If the bucket exists
            if bucket:
                for pair in bucket:  # O(m)
                    keysList.append(pair[0])
        return keysList