def floyds_cycle_detection(head):
	"""
    My Python implementation of Floyd's cycle detection algorithm

    Checks if a cycle exists in a linked list, and if it does, returns the starting node of the cycle.

    Time complexity: O(μ+λ), μ = Starting index of cycle, λ = Length of cycle

    Space complexity: O(1)
    """

	# Check if list has at least 2 next nodes
	if not head.next or not head.next.next:
		return False
	# Initialize tortoise and hare pointers
	tortoise, hare = head.next, head.next.next
	# Iterate until the pointers meet in the cycle
	while tortoise.value != hare.value:
		# Move hare pointer at twice the speed of tortoise
		tortoise = tortoise.next
		hare = hare.next.next
		# Check if hare pointer is null or at end of list
		if not hare or not hare.next:
			return False
	# If the two have met, there is a cycle
	# Move tortoise back to head node
	tortoise = head
	# Iterate over list again, with both nodes moving at same speed
	while tortoise.value != hare.value:
		tortoise = tortoise.next
		hare = hare.next
	# Their second meeting point is the starting node of the cycle
	return tortoise
