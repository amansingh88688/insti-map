class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        this.nodes.set(node, []);
    }

    addEdge(node1, node2, weight) {
        this.nodes.get(node1).push({ node: node2, weight: weight });
        this.nodes.get(node2).push({ node: node1, weight: weight }); // For undirected graph
    }
}

function dijkstra(graph, start, end) {
    const visited = new Set();
    const distances = new Map();
    const previous = new Map();
    const priorityQueue = new Map();

    for (const node of graph.nodes.keys()) {
        distances.set(node, Infinity);
        previous.set(node, null);
    }

    distances.set(start, 0);
    priorityQueue.set(start, 0);

    while (priorityQueue.size > 0) {
        const currentNode = [...priorityQueue.entries()].sort((a, b) => a[1] - b[1])[0][0];
        priorityQueue.delete(currentNode);

        if (currentNode === end) {
            const path = [];
            let current = end;

            while (current !== null) {
                path.unshift(current);
                current = previous.get(current);
            }

            return { path, distance: distances.get(end) };
        }

        visited.add(currentNode);

        for (const neighbor of graph.nodes.get(currentNode)) {
            if (!visited.has(neighbor.node)) {
                const potentialDistance = distances.get(currentNode) + neighbor.weight;

                if (potentialDistance < distances.get(neighbor.node)) {
                    distances.set(neighbor.node, potentialDistance);
                    previous.set(neighbor.node, currentNode);
                    priorityQueue.set(neighbor.node, potentialDistance);
                }
            }
        }
    }

    return { path: [], distance: Infinity }; // No path found
}

module.exports = { Graph, dijkstra };
