class UndirectedGraph:
	"""
	My implementation of an undirected graph as a Python class

	Overall space complexity: O(V + E)
	"""
	def __init__(self):
		"""
		Instantiates a new undirected graph

		Time complexity: O(1)

		Space complexity: O(1)
		"""

		self.vertex_count = 0
		self.adjacency_list = {}

	def add_vertex(self, vertex):
		"""
		Adds a new vertex to the graph

		Time complexity: O(1)

		Space complexity: O(1)
		"""
		assert (vertex not in self.adjacency_list), f"Graph already contains a vertex with value of {vertex}"

		self.adjacency_list[vertex] = []
		self.vertex_count += 1

	def add_edge(self, vertex_1, vertex_2):
		"""
		Adds a new undirected edge between 2 nodes in the graph

		Time complexity: O(V)

		Space complexity: O(1)
		"""
		assert (vertex_1 in self.adjacency_list and vertex_2 in self.adjacency_list), "Please ensure both vertices have been added to the graph before attempting to add an edge between them"
		# O(V) operation to check if edge already exists
		assert (vertex_2 not in self.adjacency_list[vertex_1]), f"Edge already exists between vertices {vertex_1} and {vertex_2}"

		self.adjacency_list[vertex_1].append(vertex_2)
		self.adjacency_list[vertex_2].append(vertex_1)

	def get_adjacent_vertices(self, vertex):
		"""
		Return all adjacent vertices of a given vertex in the graph

		Time complexity: O(1)

		Space complexity: O(1)
		"""
		assert vertex in self.adjacency_list, f"Graph does not contain a vertex with value of {vertex}"

		return self.adjacency_list[vertex]

	def show_connections(self):
		"""
		Print all existing edges in the graph

		Time complexity: O(1)

		Space complexity: O(1)
		"""

		print(self.adjacency_list)