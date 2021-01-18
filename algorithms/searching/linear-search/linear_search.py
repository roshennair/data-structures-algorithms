def linear_search(arr, value):
    """
    My Python implementation of linear search

    Searches an array and returns either the index of the value (if found) or -1 (if not found)

    Time complexity: O(n)

    Space complexity: O(1)
    """

    for i in range(len(arr)):  # O(n)
        if arr[i] == value:
            return i
    return -1