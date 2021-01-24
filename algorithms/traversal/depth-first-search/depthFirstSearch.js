const Stack = require('../../../data-structures/stacks/linked-list-stack/linkedListStack');

/**
 * - My JS implementation of DFS for a tree 
 * - Traverses a binary tree from its root and returns an array of the nodes in traversal order
 * - Time complexity: O(n), n = Number of nodes
 * - Space complexity: O(n)
 */
function treeDFS(rootNode) {
	// Track DFS traversal
	const dfsTraversal = [];
	// Stack for next nodes to explore
	const dfsStack = new Stack();
	// Add root to stack
	dfsStack.push(rootNode);
	// Keep iterating until stack is empty
	while (dfsStack.length > 0) {
		const currentNode = dfsStack.pop();
		// Push current node to traversal list
		dfsTraversal.push(currentNode.value);
		// If children exist, push them onto stack
		if (currentNode.right) dfsStack.push(currentNode.right);
		if (currentNode.left) dfsStack.push(currentNode.left);
	}
	return dfsTraversal;
}

/**
 * - My JS implementation of DFS for a graph 
 * - Traverses a graph from a starting vertex and returns an array of the vertices in traversal order
 * - Time complexity: O(V + E), V = Number of vertices, E = Number of edges
 * - Space complexity: O(V)
 */
function graphDFS(graph, start) {
	// Track DFS traversal
	const dfsTraversal = [];
	// Track visited nodes
	const visited = new Set();
	// Stack for next nodes to explore
	const dfsStack = new Stack();
	// Add start vertex to stack and visited set
	dfsStack.push(start);
	visited.add(start);
	// Keep iterating until stack is empty
	while (dfsStack.length > 0) {
		const currentVertex = dfsStack.pop();
		// Push current node to traversal list
		dfsTraversal.push(currentVertex);
		// Iterate through adjacent nodes
		for (let adjacentVertex of graph.getAdjacentVertices(currentVertex)) {
			// Check if already visited
			if (!visited.has(adjacentVertex)) {
				// Add to stack and visited set
				dfsStack.push(adjacentVertex);
				visited.add(adjacentVertex);
			}
		}
	}
	return dfsTraversal;
}