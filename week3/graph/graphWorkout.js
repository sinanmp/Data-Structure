class Graph{
    constructor(){
        this.adjecencyList = {}
    }


    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = new Set()
        }
    }


    addEdjes(vertex1 , vertex2){
       if(!this.adjecencyList[vertex1]){
           this.addVertex(vertex1)
       }
       if(!this.adjecencyList[vertex2]){
        this.addVertex(vertex2)
       }

       this.adjecencyList[vertex1].add(vertex2)
       this.adjecencyList[vertex2].add(vertex1)
    }


    dfs(startingNode){
        const visited = {}
        const result = []
        let k = 0
        const dfsTraversal = (vertex) =>{
            if(!vertex){
                return null
            }

            visited[vertex] = true
            console.log(++k)
            result.push(vertex)

            for(let neighbor of this.adjecencyList[vertex]){
                if(!visited[neighbor]){
                    dfsTraversal(neighbor)
                }
            }
        }

        dfsTraversal(startingNode)

        for(let neighbor in this.adjecencyList){
            if(!visited[neighbor]){
                dfsTraversal(neighbor)
            }
        }
        console.log(result)
    }
}



const graph = new Graph()


graph.addVertex(4)
graph.addVertex(3)
graph.addVertex(56)
graph.addVertex(5)

graph.addEdjes(56, 4); // Add edges between vertices
graph.addEdjes(56, 3);

graph.dfs(56)