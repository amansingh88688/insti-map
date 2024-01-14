const { Graph } = require('./graph_logic.js');
const location_name = require('../data/LocationData.js');

const myGraph = new Graph();

function initialise_graph () {
    
    location_name.forEach((val) => {
        myGraph.addNode(val);
    });
    
    myGraph.addEdge('prime_mart', 'pampa', 32);
    myGraph.addEdge('pampa', 'mandakini', 220);
    myGraph.addEdge('mandakini', 'jamuna', 81);
    myGraph.addEdge('jamuna', 'ganga', 22);
    myGraph.addEdge('prime_mart', 'ganga', 220);
    myGraph.addEdge('ganga', 'godavari', 220);
    myGraph.addEdge('prime_mart', 'godavari', 260);
    myGraph.addEdge('godavari', 'himalaya_mess', 160);
    myGraph.addEdge('alakananda', 'jamuna', 300);
    myGraph.addEdge('saraswathi', 'alakananda', 350);
    myGraph.addEdge('saraswathi', 'zaithoon', 56);
    myGraph.addEdge('himalaya_mess', 'zaithoon', 230);
    myGraph.addEdge('himalaya_mess', 'narmada', 150);
    myGraph.addEdge('himalaya_mess', 'cauvery', 280);
    myGraph.addEdge('bhadra', 'cauvery', 150);
    myGraph.addEdge('tunga', 'cauvery', 150);
    myGraph.addEdge('tunga', 'bhadra', 100);
    myGraph.addEdge('tunga', 'nilgiri_mess', 120);
    myGraph.addEdge('krishna', 'nilgiri_mess', 50);
    myGraph.addEdge('brahmaputra', 'krishna', 300);
    myGraph.addEdge('brahmaputra', 'zaithoon', 400);
    myGraph.addEdge('swimming_pool', 'prime_mart', 200);
    myGraph.addEdge('swimming_pool', 'sac', 60);
    myGraph.addEdge('watsa_stadium', 'sac', 300);
    myGraph.addEdge('taramani_guest_house', 'cauvery', 140);
    myGraph.addEdge('gym', 'cauvery', 100);

    
}

module.exports = { myGraph, initialise_graph }
