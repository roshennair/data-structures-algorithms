class BTNode:
    """
    A helper class for instantiating binary tree nodes

    Overall space complexity: O(1)
    """

    def __init__(self, value):
        """
        Instantiates a new binary tree node

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree:
    """
    My implementation of a binary search tree as a Python class

    Overall space complexity: O(n)
    """

    def __init__(self):
        """
        Instantiates a new linked list

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.root = None

    def insert(self, value):
        """
        Inserts a new node, or returns False if node already exists

        Time complexity: O(log n)

        Space complexity: O(1)
        """

        new_node = BTNode(value)
        if self.root is None:
            self.root = new_node
        else:
            parent_node, current_node = None, self.root
            while current_node:  # O(log n), height = log n
                parent_node = current_node
                if value > current_node.value:
                    current_node = current_node.right
                elif value < current_node.value:
                    current_node = current_node.left
                else:
                    print(f"Tree already contains node with value of {value}")
                    return False
            if value > parent_node.value:
                parent_node.right = new_node
            else:
                parent_node.left = new_node
            return True

    def lookup(self, value):
        """
        Returns the node containing a given value, or returns False if node does not exist

        Time complexity: O(log n)

        Space complexity: O(1)
        """

        current_node = self.root
        while current_node:  # O(log n)
            if value > current_node.value:
                current_node = current_node.right
            elif value < current_node.value:
                current_node = current_node.left
            else:
                return current_node
        print(f"Tree does not contain node with value of {value}")
        return False

    def remove(self, value):
        """
        Removes the node of a given value, or returns false if node does not exist

        Time complexity: O(log n)

        Space complexity: O(1)
        """

        parent_node, current_node = None, self.root
        while current_node:
            if value > current_node.value:
                parent_node = current_node
                current_node = current_node.right
            elif value < current_node.value:
                parent_node = current_node
                current_node = current_node.left
            else:
                if current_node.right is None:
                    # Case 1: No right child
                    if current_node is self.root:
                        self.root = current_node.left
                    else:
                        if value > parent_node.value:
                            parent_node.right = current_node.left
                        else:
                            parent_node.left = current_node.left
                elif current_node.right.left is None:
                    # Case 2: Right child without left child
                    if current_node is self.root:
                        self.root = current_node.right
                    else:
                        if value > parent_node.value:
                            parent_node.right = current_node.right
                        else:
                            parent_node.left = current_node.right
                    current_node.right.left = current_node.left
                else:
                    # Case 3: Right child with left child
                    left_most, left_most_parent = (
                        current_node.right.left,
                        current_node.right,
                    )
                    while left_most.left:  # O(log n)
                        left_most_parent = left_most
                        left_most = left_most.left
                    if current_node is self.root:
                        self.root = left_most
                    else:
                        if value > parent_node.value:
                            parent_node.right = left_most
                        else:
                            parent_node.left = left_most
                    left_most_parent.left = left_most.right
                    left_most.left = current_node.left
                    left_most.right = current_node.right
                return True
        print(f"Tree does not contain node with value of {value}")
        return False