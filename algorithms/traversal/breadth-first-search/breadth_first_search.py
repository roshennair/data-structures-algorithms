from collections import deque


def tree_BFS(root_node):
	"""
	My Python implementation of BFS for a tree

	Traverses a binary tree from its root and returns an array of the nodes in traversal order

	Time complexity: O(n), n = Number of nodes

	Space complexity: O(n)
	"""

	# Track BFS traversal
	bfs_traversal = []
	# Queue for next nodes to explore
	bfs_queue = deque()
	# Add root to queue
	bfs_queue.append(root_node)
	# Keep iterating until queue is empty
	while len(bfs_queue) > 0:
		current_node = bfs_queue.popleft()
		# Push current node to traversal list
		bfs_traversal.append(current_node.value)
		# If children exist, enqueue them
		if current_node.left:
			bfs_queue.append(current_node.left)
		if current_node.right:
			bfs_queue.append(current_node.right)
	return bfs_traversal


def graph_BFS(graph, start):
	"""
    My Python implementation of BFS for a graph

    Traverses a graph from a starting vertex and returns an array of the vertices in traversal order

    Time complexity: O(V + E), V = Number of vertices, E = Number of edges

    Space complexity: O(V)
    """

	# Track BFS traversal
	bfs_traversal = []
	# Track visited nodes in set
	visited = set()
	# Queue for next nodes to explore
	bfs_queue = deque()
	# Add root to queue and visited set
	bfs_queue.append(start)
	visited.add(start)
	# Keep iterating until queue is empty
	while len(bfs_queue) > 0:
		current_vertex = bfs_queue.popleft()
		# Push current vertex to traversal list
		bfs_traversal.append(current_vertex)
		# Iterate through adjacent vertices
		for adjacent_vertex in graph.get_adjacent_vertices(current_vertex):
			if adjacent_vertex not in visited:
				bfs_queue.append(adjacent_vertex)
				visited.add(adjacent_vertex)
	return bfs_traversal