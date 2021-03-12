/**
 * - Helper function to build a prefix table - stores length of longest prefix suffix ending at each index in pattern
 * - Time complexity: O(n), n = Length of pattern
 * - Space complexity: O(n), n = Length of pattern
 */
function buildPrefixTable(pattern) {
	const prefixTable = [];
	if (pattern.length > 0) {
		prefixTable.push(0);
		let previousLength = 0, i = 1;
		while (i < pattern.length) {
			if (pattern[i] === pattern[previousLength]) {
				prefixTable.push(previousLength + 1);
				previousLength++;
				i++;
			} else {
				if (previousLength !== 0) {
					previousLength = prefixTable[previousLength - 1];
				} else {
					prefixTable.push(0);
					i++;
				}
			}
		}
	}
	return prefixTable;
}

/**
 * - My JS implementation of the KMP string search algorithm
 * - Returns the starting index of the pattern if it exists in the text string or -1 if it doesn't.
 * - Time complexity: O(m + n), m = Length of text, n = Length of pattern
 * - Space complexity: O(n), n = Length of pattern
 */
function knuthMorrisPratt(text, pattern) {
	if (pattern.length === 0) return 0
	if (text.length >= pattern.length) {
		const prefixTable = buildPrefixTable(pattern); // O(n) time, O(n) space
		let textIndex = 0, patternIndex = 0;
		while (textIndex < text.length) { // O(m) time
			if (text[textIndex] === pattern[patternIndex]) {
				textIndex++;
				patternIndex++;
				if (patternIndex === pattern.length) return textIndex - patternIndex;
			} else {
				if (patternIndex !== 0) {
					patternIndex = prefixTable[patternIndex - 1]; // Find previous longest prefix suffix length and try again
				} else {
					textIndex++;
				}
			}
		}
	}
	return -1;
}