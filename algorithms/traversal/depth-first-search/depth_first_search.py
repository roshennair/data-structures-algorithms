def tree_DFS(root_node):
	"""
	My Python implementation of DFS for a tree

	Traverses a binary tree from its root and returns an array of the nodes in traversal order

	Time complexity: O(n), n = Number of nodes

	Space complexity: O(n)
	"""

	# Track BFS traversal
	dfs_traversal = []
	# Stack for next nodes to explore
	dfs_stack = []
	# Add root to stack
	dfs_stack.append(root_node)
	# Keep iterating until stack is empty
	while len(dfs_stack) > 0:
		current_node = dfs_stack.pop()
		# Push current node to traversal list
		dfs_traversal.append(current_node.value)
		# If children exist, push them onto stack
		if current_node.right:
			dfs_stack.append(current_node.right)
		if current_node.left:
			dfs_stack.append(current_node.left)
	return dfs_traversal


def graph_DFS(graph, start):
	"""
    My Python implementation of DFS for a graph

    Traverses a graph from a starting vertex and returns an array of the vertices in traversal order

    Time complexity: O(V + E), V = Number of vertices, E = Number of edges

    Space complexity: O(V)
    """

	# Track DFS traversal
	dfs_traversal = []
	# Track visited nodes in set
	visited = set()
	# Stack for next nodes to explore
	dfs_stack = []
	# Add start vertex to stack and visited set
	dfs_stack.append(start)
	visited.add(start)
	# Keep iterating until stack is empty
	while len(dfs_stack) > 0:
		current_vertex = dfs_stack.pop()
		# Push current vertex to traversal list
		dfs_traversal.append(current_vertex)
		# Iterate through adjacent vertices
		for adjacent_vertex in graph.get_adjacent_vertices(current_vertex):
			if adjacent_vertex not in visited:
				dfs_stack.append(adjacent_vertex)
				visited.add(adjacent_vertex)
	return dfs_traversal
