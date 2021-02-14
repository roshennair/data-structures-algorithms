def boyer_moore_majority_vote(arr):
	"""
    My Python implementation of the Boyer-Moore majority vote algorithm

    Finds the majority (more than half) element of an input sequence, if it exists

    Time complexity: O(n), n = Length of input sequence

    Space complexity: O(1)
    """

	majority, counter = None, 0
	for element in arr: # O(n)
		# If counter is 0, there is no majority
		if counter == 0:
			# Store element as majority and increment counter
			majority = element
			counter = 1
		elif element == majority:
			# If element is current majority, increment counter
			counter += 1
		else:
			# Otherwise, decrement counter
			counter -= 1
	# Return overall majority element, if it exists
	return majority