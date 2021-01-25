# 3 examples of recursion


def factorial(n):
	"""
	Returns the factorial of the input integer

	Time complexity: O(n)

	Space complexity: O(n)
	"""

	assert n >= 0, f"Input value {n} is not a positive integer."

	if n <= 1:
		return 1
	return n * factorial(n - 1)


def fibonacci(n):
	"""
	Returns the Fibonacci number at the nth index in the Fibonacci sequence

	Time complexity: O(2^n)

	Space complexity: O(n)

	Highly inefficient, can be improved with memoization
	"""

	assert n >= 0, f"Input value {n} is not a positive integer."

	if n < 2:
		return n
	return fibonacci(n - 1) + fibonacci(n - 2)


def reverse_string_recursive(s):
	"""
	Returns the reverse of the input string

	Time complexity: O(n^2) = O(n) slice * O(n) recursive call stack

	Space complexity: O(n)
	"""

	if len(s) < 2:
		return s
	# String slicing is O(n) operation
	return reverse_string_recursive(s[1:]) + s[0]


def reverse_string_iterative(s):
	"""
	Returns the reverse of the input string

	Time complexity: O(n)

	Space complexity: O(n)

	More efficient, only 3 O(n) operations
	"""

	chars = list(s) # O(n)
	i, j = 0, len(s) - 1
	while i < j: # O(n)
		chars[i], chars[j] = chars[j], chars[i]
		i += 1
		j -= 1
	return "".join(chars) # O(n)
