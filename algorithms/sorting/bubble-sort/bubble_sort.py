def bubble_sort(arr):
    """
    My Python implementation of bubble sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n^2)

    Space complexity: O(1)
    """

    # One iteration for each element
    for i in range(len(arr)):
        # One pass through list for
        for j in range(len(arr) - 1):
            # Compare each pair and swap if not in order
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr
