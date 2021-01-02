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


class SinglyLinkedList:
    """
    My implementation of a singly linked list as a Python class

    Overall space complexity: O(n)
    """

    def __init__(self, value):
        """
        Instantiates a new linked list

        Time complexity: O(1)

        Space complexity: O(1)
        """

        self.head = SLLNode(value)
        self.tail = self.head
        self.length = 1

    def prepend(self, value):
        """
        Inserts new head node

        Time complexity: O(1)

        Space complexity: O(1)
        """

        new_head = SLLNode(value)
        new_head.next = self.head
        self.head = new_head
        self.length += 1

    def append(self, value):
        """
        Inserts new tail node

        Time complexity: O(1)

        Space complexity: O(1)
        """

        new_tail = SLLNode(value)
        self.tail.next = new_tail
        self.tail = new_tail
        self.length += 1

    def lookup(self, index):
        """
        Returns the node at a given index (zero-based)

        Time complexity: O(n), n = Length of linked list

        Space complexity: O(1)
        """

        assert index >= 0, "Index is too low"
        assert index < self.length, "Index is too high"

        current_node, count = self.head, 0
        while count < index:
            current_node = current_node.next
            count += 1
        return current_node

    def insert(self, value, index):
        """
        Inserts a new node at a given index

        Time complexity: O(n), n = Length of linked list

        Space complexity: O(1)
        """

        assert index >= 0, "Index is too low"
        assert index < self.length, "Index is too high"

        if index == 0:
            return self.prepend(value)
        elif index == self.length - 1:
            return self.append(value)

        # Index is in middle of list, not at either end
        new_node = SLLNode(value)
        prev_node = self.lookup(index - 1)  # O(n)
        next_node = prev_node.next
        prev_node.next = new_node
        new_node.next = next_node
        self.length += 1

    def remove(self, index):
        """
        Removes a node at a given index

        Time complexity: O(n), n = Length of linked list

        Space complexity: O(1)
        """

        assert index >= 0, "Index is too low"
        assert index < self.length, "Index is too high"

        if index == 0:  # O(1)
            new_head = self.head.next
            self.head = new_head
        elif index == self.length - 1:
            new_tail = self.lookup(index - 1)  # O(n)
            new_tail.next = None
            self.tail = new_tail
        else:
            prev_node = self.lookup(index - 1)
            next_node = prev_node.next.next
            prev_node.next = next_node
        self.length -= 1

    def reverse(self):
        """
        Reverses the linked list such that the old head node is the new tail node, and the old tail node is the new head node

        Time complexity: O(n), n = Length of linked list

        Space complexity: O(1)
        """

        new_head, new_tail = self.tail, self.head
        prev_node, current_node = None, self.head
        while current_node != None:  # O(n)
            next_node = current_node.next
            current_node.next = prev_node
            prev_node = current_node
            current_node = next_node
        self.head = new_head
        self.tail = new_tail

    def __str__(self):
        """
        Returns a graphical representation of the linked list

        Time complexity: O(n), n = Length of linked list

        Space complexity: O(n), n = Length of linked list
        """

        print_list = []
        current_node, count = self.head, 0
        while count < self.length:  # O(n)
            print_list.append(current_node.value)
            current_node = current_node.next
            count += 1
        return str(print_list)
