def insertion_sort(nums):
    """
    My Python implementation of insertion sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n^2)

    Space complexity: O(1)
    """

    for i in range(len(nums)):
        # Store current value
        current_value = nums[i]
        # Initialize j to current index
        j = i
        # Move all previous values greater than current value to the right
        while j > 0 and nums[j - 1] > current_value:
            nums[j] = nums[j - 1]
            j -= 1
        # Add current value to the empty slot
        nums[j] = current_value
    return nums
