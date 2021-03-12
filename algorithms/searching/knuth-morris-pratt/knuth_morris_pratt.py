def build_prefix_table(pattern):
	"""
	Helper function to build a prefix table - stores length of longest prefix suffix ending at each index in pattern

	Time complexity: O(n), n = Length of pattern

	Space complexity: O(n), n = Length of pattern
	"""

	prefix_table = []
	if len(pattern) > 0:
		prefix_table.append(0)
		previous_length = 0
		i = 1
		while i < len(pattern):
			if pattern[i] == pattern[previous_length]:
				prefix_table.append(previous_length + 1)
				previous_length += 1
				i += 1
			else:
				if previous_length != 0:
					previous_length = prefix_table[previous_length - 1]
				else:
					prefix_table.append(0)
					i += 1
	return prefix_table


def knuth_morris_pratt(text, pattern):
	"""
    My Python implementation of the KMP pattern search algorithm

    Returns the starting index of the pattern if it exists in the text string or -1 if it doesn't.

    Time complexity: O(m + n), m = Length of text, n = Length of pattern

    Space complexity: O(n), n = Length of pattern
    """

	if len(pattern) == 0:
		return 0
	if len(text) >= len(pattern):
		prefix_table = build_prefix_table(pattern) # O(n) time, O(n) space
		text_index = pattern_index = 0
		while text_index < len(text): # O(m) time
			if text[text_index] == pattern[pattern_index]:
				text_index += 1
				pattern_index += 1
				if pattern_index == len(pattern):
					return text_index - pattern_index # Return starting index
			else:
				if pattern_index != 0:
					pattern_index = prefix_table[pattern_index - 1] # Check for previous longest prefix suffix length
				else:
					text_index += 1
	return -1
