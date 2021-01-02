class ArrayStack:
    """
    My implementation of an array stack as a Python class

    Overall space complexity: O(n)
    """

    def __init__(self):
        """
        Instantiates a new array stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.__data = []

    def push(self, element):
        """
        Add new element to top of stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.__data.append(element)

        return len(self.__data)

    def pop(self):
        """
        Remove element from top of stack

        Time complexity: O(1)

        Space complexity: O(1)
        """

        # Check if array is empty
        assert self.__data, "No elements to pop from empty stack"

        return self.__data.pop()

    def peek(self):
        """
        Return top-most element of stack, or None if stack is empty

        Time complexity: O()

        Space complexity: O()
        """

        # Check if array is empty
        return self.__data[-1] if self.__data else None