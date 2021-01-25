// 3 examples of recursion

/**
 * - Returns the factorial of the input integer
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */
function factorial(n) {
	if (n < 0) throw new Error(`Input value ${n} is not a positive integer.`);

	if (n <= 1) return 1;
	return n * factorial(n - 1);
}

/**
 * - Returns the Fibonacci number at the nth index in the Fibonacci sequence
 * - Time complexity: O(2^n)
 * - Space complexity: O(n)
 * - Highly inefficient, can be improved with memoization
 */
function fibonacci(n) {
	if (n < 0) throw new Error(`Input value ${n} is not a positive integer.`);

	if (n < 2) return n;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * - Returns the reverse of the input string
 * - Time complexity: O(n^2) = O(n) slice * O(n) recursive call stack
 * - Space complexity: O(n)
 */
function reverseStringRecursive(s) {
	if (s.length < 2) return s;
	// string.slice() operation has O(n) time complexity
	return reverseStringRecursive(s.slice(1)) + s[0];
}

/**
 * - Returns the reverse of the input string
 * - Time complexity: O(n)
 * - Space complexity: O(n) 
 * - More efficient, only 3 O(n) operations
 */
function reverseStringIterative(s) {
	let chars = s.split(''); // O(n)
	for (let i = 0, j = s.length - 1; i < j; i++, j--) { // O(n)
		[chars[i], chars[j]] = [chars[j], chars[i]];
	}
	return chars.join(''); // O(n);
}