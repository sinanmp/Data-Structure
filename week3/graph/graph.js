class Graph {
    constructor() {
        this.adjecencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjecencyList[vertex]) {
            this.adjecencyList[vertex] = new Set()
        }
    }

    hasEdge(vertex1, vertex2) {
        return (
            this.adjecencyList[vertex1].has(vertex2) &&
            this.adjecencyList[vertex2].has(vertex1)
        )
    }

    removeVertex(vertex) {
        if (!this.adjecencyList[vertex]) {
            return console.log('this vertex is not have in this graph')
        }
        for (let adjacentVertex of this.adjecencyList[vertex]) {
            this.removeEdge(vertex, adjacentVertex)
        }

        delete this.adjecencyList[vertex]
    }

    removeEdge(vertex1, vertex2) {
        if (this.hasEdge(vertex1, vertex2)) {
            this.adjecencyList[vertex1].delete(vertex2)
            this.adjecencyList[vertex2].delete(vertex1)
            return true
        } else {
            return console.log('no edges to remove with these values')
        }
    }

    addEdges(vertex1, vertex2) {
        if (!this.adjecencyList[vertex1]) {
            this.addVertex(vertex1)
        }

        if (!this.adjecencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }

    display() {
        for (let vertex in this.adjecencyList) {
            console.log(vertex + " -> " + [...this.adjecencyList[vertex]])
        }
    }

    dfs(startingVertex) {
        const visited = {};
        const result = [];

        const dfsTraversal = (vertex) => {
            if (!vertex) return null;

            visited[vertex] = true;
            result.push(vertex);

            for (let neighbor of this.adjecencyList[vertex]) {
                if (!visited[neighbor]) {
                    dfsTraversal(neighbor);
                }
            }
        };

        dfsTraversal(startingVertex);
        return result;
    }



    bfs(startVertex){
        let result = []
        let queue = []
        let visited = {}
        
        visited[startVertex] = true
        queue.push(startVertex)

        while(queue.length){
            let currentVertex = queue.shift()
            result.push(currentVertex)

            for(let values of this.adjecencyList[currentVertex]){
                if(!visited[values]){
                    visited[values] = true
                    queue.push(values)
                }
            }
        }
    }



}

const graph = new Graph();

// Adding the vertices
graph.addVertex('19');
graph.addVertex('14');
graph.addVertex('10');
graph.addVertex('15');
graph.addVertex('2');
graph.addVertex('12');
graph.addVertex('21');

// Adding edges
graph.addEdges('19', '2');
graph.addEdges('19', '14');
graph.addEdges('2', '15');
graph.addEdges('14', '10');
graph.addEdges('10', '15');
graph.addEdges('15', '21');
graph.addEdges('15', '12');

console.log("Depth First Search (DFS) Traversal:");
console.log(graph.dfs('19')); 

console.log("\nBreadth First Search (BFS) Traversal:");
console.log(graph.bfs('19')); 
