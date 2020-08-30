class SLLNode:
    '''
    A helper class for instantiating linked list nodes

    Overall space complexity: O(1)
    '''
    
    def __init__(self, value):
        '''
        Instantiates a new linked list node
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''

        self.value = value
        self.next = None

class Queue:
    '''
    My implementation of a queue (using an internal linked list) as a Python class
    
    Overall space complexity: O(n)
    '''

    def __init__(self):
        '''
        Instantiates a new queue
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''

        self.first = None
        self.last = None
        self.length = 0
    
    def enqueue(self, element):
        '''
        Add an element to the end of the queue
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''
        
        new_last = SLLNode(element)
        if self.length == 0:
            self.first = new_last
        else:
            self.last.next = new_last
        self.last = new_last
        self.length += 1
        return self.length
    
    def dequeue(self):
        '''
        Remove first element from the queue
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''
        
        assert self.first, 'No elements to dequeue from empty queue'

        if self.length == 1: self.last = None
        old_first = self.first.value
        self.first = self.first.next
        self.length -= 1
        return old_first
    
    def peek(self):
        '''
        Return first element in the queue, or None if queue is empty
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''
        
        return self.first.value if self.first else None