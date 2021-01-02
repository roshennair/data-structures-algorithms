class SLLNode:
    """
    A helper class for instantiating linked list nodes

    Overall space complexity: O(1)
    """

    def __init__(self, value):
        """
        Instantiates a new linked list node

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.value = value
        self.next = None


class LinkedListStack:
    """
    My implementation of a linked list stack as a Python class

    Overall space complexity: O(n)
    """

    def __init__(self):
        """
        Instantiates a new linked list stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.top = None
        self.length = 0

    def push(self, element):
        """
        Add new element to top of stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        new_top = SLLNode(element)
        if self.length == 0:
            self.top = new_top
        else:
            new_top.next = self.top
            self.top = new_top
        self.length += 1
        return self.length

    def pop(self):
        """
        Remove element from top of stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        # Check if top exists
        assert self.top, "No elements to pop from empty stack"

        popped_element = self.top.value
        self.top = self.top.next
        self.length -= 1
        return popped_element

    def peek(self):
        """
        Return top-most element of stack, or null if stack is empty

        Time complexity: O(1)

        Space complexity: O(1)
        """

        return self.top.value if self.top else None