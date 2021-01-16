def selection_sort(nums):
    """
    My Python implementation of selection sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n^2)

    Space complexity: O(1)
    """

    for i in range(len(nums)):
        # Initialize current value as min
        min = i
        for j in range(i + 1, len(nums)):
            # Update min if new minimum found
            if nums[j] < nums[min]:
                min = j
        # Swap current value with min value
        nums[i], nums[min] = nums[min], nums[i]
    return nums