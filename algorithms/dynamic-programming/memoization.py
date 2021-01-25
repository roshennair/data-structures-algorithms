# Memo used to store computed Fibonacci values
memo = {0: 0, 1: 1}


def fibonacci_memoized(n):
	"""
	Returns the Fibonacci number at the nth index in the Fibonacci sequence

	Time complexity: O(n)

	Space complexity: O(n)

	More efficient, uses a memo to store calculated values, avoiding redundant operations
	"""

	# Throw error if negative input
	assert n >= 0, f"Input value {n} is not a positive integer."

	if n in memo:
		# Return memo value if already computed
		return memo[n]
	else:
		# Calculate new value, store in memo, and return it
		fib_value = fibonacci_memoized(n - 1) + fibonacci_memoized(n - 2)
		memo[n] = fib_value
		return fib_value
