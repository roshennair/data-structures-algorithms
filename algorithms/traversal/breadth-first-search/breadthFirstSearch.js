const Queue = require('../../../data-structures/queues/queue');

/**
 * - My JS implementation of BFS for a tree 
 * - Traverses a binary tree from its root and returns an array of the nodes in traversal order
 * - Time complexity: O(n), n = Number of nodes
 * - Space complexity: O(n)
 */
function treeBFS(rootNode) {
	// Track BFS traversal
	const bfsTraversal = [];
	// Queue for next nodes to explore
	const bfsQueue = new Queue();
	// Add root to queue
	bfsQueue.enqueue(rootNode);
	// Keep iterating until queue is empty
	while (bfsQueue.length > 0) {
		const currentNode = bfsQueue.dequeue();
		// Push current node to traversal list
		bfsTraversal.push(currentNode.value);
		// If children exist, enqueue them
		if (currentNode.left) bfsQueue.enqueue(currentNode.left);
		if (currentNode.right) bfsQueue.enqueue(currentNode.right);
	}
	return bfsTraversal;
}

/**
 * - My JS implementation of BFS for a graph 
 * - Traverses a graph from a starting vertex and returns an array of the vertices in traversal order
 * - Time complexity: O(V + E), V = Number of vertices, E = Number of edges
 * - Space complexity: O(V)
 */
function graphBFS(graph, start) {
	// Track BFS traversal
	const bfsTraversal = [];
	// Track visited nodes
	const visited = new Set();
	// Queue for next nodes to explore
	const bfsQueue = new Queue();
	// Add root to queue and visited set
	bfsQueue.enqueue(start);
	visited.add(start)
	// Keep iterating until queue is empty
	while (bfsQueue.length > 0) {
		const currentVertex = bfsQueue.dequeue();
		// Push current vertex to traversal list
		bfsTraversal.push(currentVertex);
		// Iterate through adjacent vertices
		for (let adjacentVertex of graph.getAdjacentVertices(currentVertex)) {
			// Check if already visited
			if (!visited.has(adjacentVertex)) {
				// Add to queue and visited set
				bfsQueue.enqueue(adjacentVertex);
				visited.add(adjacentVertex);
			}
		}
	}
	return bfsTraversal;
}