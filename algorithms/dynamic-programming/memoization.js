// Memo used to store computed Fibonacci values
const memo = new Map([[0, 0], [1, 1]]);

/**
 * - Returns the Fibonacci number at the nth index in the Fibonacci sequence
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 * - More efficient, uses a memo to store calculated values, avoiding redundant operations
 */
function fibonacciMemoized(n) {
	// Throw error if negative input
	if (n < 0) throw new Error(`Input value ${n} is not a positive integer.`);
	if (memo.has(n)) {
		// Return memo value if already computed
		return memo.get(n);
	} else {
		// Calculate new value, store in memo and return it
		let fibValue = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
		memo.set(n, fibValue);
		return fibValue;
	}
}
