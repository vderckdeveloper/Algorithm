function Vertex(key) {
    this.key = key;
    this.next = null;
    this.arc = null;
    this.distance = Infinity;
}

function Arc(destination, data) {
    this.destination = destination;
    this.nextArc = null;
    this.data = data; // weight of the edge
}

function Graph() {
    this.first = null;
}

Graph.prototype.insertVertex = function(key) {
    const vertex = new Vertex(key);
    let last = this.first;
    if (!last) {
        this.first = vertex;
    } else {
        while (last.next) {
            last = last.next;
        }
        last.next = vertex;
    }
}

Graph.prototype.insertArc = function(data, fromKey, toKey) {
    const fromVertex = this.findVertex(fromKey);
    const toVertex = this.findVertex(toKey);
    let arc = new Arc(toVertex, data);
    let lastArc = fromVertex.arc;
    if (!lastArc) {
        fromVertex.arc = arc;
    } else {
        while (lastArc.nextArc) {
            lastArc = lastArc.nextArc;
        }
        lastArc.nextArc = arc;
    }
}

Graph.prototype.findVertex = function(key) {
    let vertex = this.first;
    while (vertex) {
        if (vertex.key === key) {
            return vertex;
        }
        vertex = vertex.next;
    }
    return null;
}

Graph.prototype.shortest = function(startKey) {
    const from = this.findVertex(startKey);
    console.log('Start vertex is %s', from.key);
    let current = this.first;
    while (current) {
        current.distance = Infinity;
        current = current.next;
    }
    from.distance = 0;
    const pq = []; // priority queue
    pq.push({ vertex: from, distance: 0 });
    
    while (pq.length > 0) {
        pq.sort((a, b) => a.distance - b.distance); // mimics a priority queue
        const u = pq.shift();
        current = u.vertex;
        let arc = current.arc;
        while (arc) {
            let alt = current.distance + arc.data;
            if (arc.destination.distance > alt) {
                arc.destination.distance = alt;
                pq.push({ vertex: arc.destination, distance: alt });
            }
            arc = arc.nextArc;
        }
    }
    
    let temp = this.first;
    while (temp) {
        console.log('%s to %s shortest distance is %d', startKey, temp.key, temp.distance);
        temp = temp.next;
    }
};

let graph = new Graph();
graph.insertVertex('A');
graph.insertVertex('B');
graph.insertVertex('C');
graph.insertVertex('D');
graph.insertVertex('E');
graph.insertVertex('F');

graph.insertArc(6, 'A', 'B');
graph.insertArc(6, 'B', 'A');
graph.insertArc(3, 'A', 'C');
graph.insertArc(3, 'C', 'A');
graph.insertArc(2, 'B', 'C');
graph.insertArc(2, 'C', 'B');
graph.insertArc(5, 'B', 'D');
graph.insertArc(5, 'D', 'B');
graph.insertArc(3, 'C', 'D');
graph.insertArc(3, 'D', 'C');
graph.insertArc(4, 'C', 'E');
graph.insertArc(4, 'E', 'C');
graph.insertArc(2, 'D', 'E');
graph.insertArc(2, 'E', 'D');
graph.insertArc(3, 'D', 'F');
graph.insertArc(3, 'F', 'D');
graph.insertArc(5, 'E', 'F');
graph.insertArc(5, 'F', 'E');

graph.shortest('A');