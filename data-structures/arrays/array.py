class Array:
    '''
    My custom implementation of an array data structure via a Python class
    
    For illustration purposes only, this implementation uses a Python dictionary to mimic the storage of elements in computer memory. 
    
    Overall space complexity: O(n), n = Length of array
    '''

    def __init__(self):
        '''
        Instantiates a new empty array
        
        Time complexity: O(1)
        
        Space complexity: O(1)
        '''

        self.data = {}
        self.length = 0
    
    def lookup(self, index):
        '''
        Returns the element at a given index

        Time complexity: O(1)

        Space complexity: O(1)
        '''

        assert index > 0, f'Index {index} is too small.'
        assert index < self.length, f'Index {index} is too large.'

        return self.data[index]
    
    def append(self, element):
        '''
        Inserts an element at the end of the array

        Time complexity: O(1)
        
        Space complexity: O(1)
        '''

        self.data[self.length] = element
        self.length += 1

    def pop(self):
        '''
        Removes the element at the end of the array

        Time complexity: O(1)

        Space complexity: O(1)
        '''

        assert self.length > 0, 'This list is empty.'
        del self.data[self.length - 1]
        self.length -= 1

    def insert(self, element, index):
        '''
        Inserts an element at a given index
        
        Time complexity: O(n), n = Length of array
        
        Space complexity: O(1)
        '''

        assert index > 0, f'Index {index} is too small.'
        assert index < self.length, f'Index {index} is too large.'

        if index == self.length - 1:
            return self.append(element)

        # Shift each index to the left
        # Keep track of next element in temp variable
        currentElement = element
        for i in range(index, self.length): # O(n)
            temp = self.data[i]
            self.data[i] = currentElement
            currentElement = temp
        # Create new index for last element
        self.data[self.length] = currentElement
        self.length += 1

    def delete(self, index):
        '''
        Removes the element at a given index
        
        Time complexity: O(n), n = Length of array
        
        Space complexity: O(1)
        '''

        assert index > 0, f'Index {index} is too small.'
        assert index < self.length, f'Index {index} is too large.'

        if index == self.length - 1:
            return self.pop()
        
        # Delete selected element
        del self.data[index]
        # Shift each index to the right - O(n)
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1]
        # Remove last unused index
        del self.data[self.length - 1]
        self.length -= 1

    def __str__(self):
        '''
        Returns string representation of array

        Time complexity: O(n)

        Space complexity: O(n)
        '''
        if self.length == 0:
            return '[]'
        
        result = '['
        for i in range(0, self.length): # O(n)
            result += str(self.data[i]) + ', '
        return result[:-2] + ']'

