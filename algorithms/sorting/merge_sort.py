def merge(left, right):
    """
    Helper function that merges two sorted sublists into one sorted list

    Time complexity: O(n)

    Space complexity: O(n)
    """

    result = []
    left_index = right_index = 0
    while left_index < len(left) and right_index < len(right):  # O(n)
        if left[left_index] < right[right_index]:
            result.append(left[left_index])
            left_index += 1
        else:
            result.append(right[right_index])
            right_index += 1
    while left_index < len(left):  # O(n)
        result.append(left[left_index])
        left_index += 1
    while right_index < len(right):  # O(n)
        result.append(right[right_index])
        right_index += 1
    return result


def merge_sort(nums):
    """
    My Python implementation of merge sort

    Sorts a list of numbers and returns the sorted list

    Time complexity: O(n log n)

    Space complexity: O(n)
    """

    if len(nums) < 2:
        return nums
    left = nums[0 : len(nums) // 2]  # O(n)
    right = nums[len(nums) // 2 :]  # O(n)
    return merge(merge_sort(left), merge_sort(right))  # O(n log n)
