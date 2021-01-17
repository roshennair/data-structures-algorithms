def partition(arr, start, end):
    """
    Helper function that partitions/orders array elements around a selected pivot values

    Time complexity: O(n)

    Space complexity: O(1)
    """

    # Select pivot
    pivot = arr[end]
    # Initialize partition index as start
    partition_index = start
    # Whenever an element smaller/equal to pivot is found, swap it with the partition index element
    for i in range(start, end):
        if arr[i] <= pivot:
            arr[i], arr[partition_index] = arr[partition_index], arr[i]
            partition_index += 1
    # Swap positions of partition index and pivot element
    arr[partition_index], arr[end] = arr[end], arr[partition_index]
    # Return index of pivot element
    return partition_index


def quick_sort(arr, start, end):
    """
    My Python implementation of quick sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n log n) average, O(n^2) worst-case

    Space complexity: O(log n) average, O(n) worst-case
    """

    # If sublist is valid
    if start < end:
        # Partition list and get pivot index
        pivot_index = partition(arr, start, end)
        # Recursively call quick_sort for left and right sublists
        quick_sort(arr, start, pivot_index - 1)
        quick_sort(arr, pivot_index + 1, end)


def run_quick_sort(arr):
    """
    Helper function to run quick sort on a given list
    """

    quick_sort(arr, 0, len(arr) - 1)
    return arr


numbers = [99, 44, 3, 7, 6, 2, 1, 5, 63, 87, 283, 4, 0]
print(run_quick_sort(numbers))