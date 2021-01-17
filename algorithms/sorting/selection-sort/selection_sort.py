def selection_sort(arr):
    """
    My Python implementation of selection sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n^2)

    Space complexity: O(1)
    """

    for i in range(len(arr)):
        # Initialize current value as min
        min = i
        for j in range(i + 1, len(arr)):
            # Update min if new minimum found
            if arr[j] < arr[min]:
                min = j
        # Swap current value with min value
        arr[i], arr[min] = arr[min], arr[i]
    return arr