/**
 * - My implementation of an undirected graph as a JS class
 * - Overall space complexity: O(V + E)
 */
class UndirectedGraph {
	/**
	 * - Instantiates a new undirected graph 
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	constructor() {
		this.vertexCount = 0;
		this.adjacencyList = new Map();
	}

	/**
	 * - Adds a new vertex to the graph
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	addVertex(vertex) {
		if (this.adjacencyList.has(vertex)) {
			console.log(`Graph already contains a vertex with value of ${vertex}`);
			return false;
		}

		this.adjacencyList.set(vertex, []);
		this.vertexCount++;
	}

	/**
	 * - Adds a new undirected edge between 2 nodes in the graph
	 * - Time complexity: O(V)
	 * - Space complexity: O(1)
	 */
	addEdge(vertex1, vertex2) {
		if (!(this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2))) {
			console.log('Please ensure both vertices have been added to the graph before attempting to add an edge between them');
			return false;
		} else if (this.adjacencyList.get(vertex1).includes(vertex2)) { // O(V) check
			console.log(`Edge already exists between vertices ${vertex1} and ${vertex2}`);
			return false;
		}

		this.adjacencyList.get(vertex1).push(vertex2);
		this.adjacencyList.get(vertex2).push(vertex1);
	}

	/**
	 * - Print all the existing edges in the graph
	 * - Time complexity: O(1)
	 * - Space complexity: O(1)
	 */
	showConnections() {
		console.log(this.adjacencyList);
	}
}