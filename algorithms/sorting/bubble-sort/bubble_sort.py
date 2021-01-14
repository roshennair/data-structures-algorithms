def bubble_sort(nums):
    """
    My Python implementation of bubble sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n^2)

    Space complexity: O(1)
    """

    # One iteration for each element
    for i in range(len(nums)):
        # One pass through list for
        for j in range(len(nums) - 1):
            # Compare each pair and swap if not in order
            if nums[j] > nums[j + 1]:
                nums[j], nums[j + 1] = nums[j + 1], nums[j]
    return nums
