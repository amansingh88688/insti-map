const express = require('express');
const app = express();  
const port = process.env.PORT || 8000;

const location_name = require('./data/LocationData.js');
const { dijkstra } = require('./graph/graph_logic.js');
const { myGraph, initialise_graph } = require('./graph/graph_initialiser.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

initialise_graph();

app.get('/', (req, res)=>{ 
    res.render('home', { location_name });
});

app.post('/calculate', (req, res)=>{
    const {source, destination} = req.body;
    // console.log(source);
    // console.log(destination);
    const result = dijkstra(myGraph, source, destination);
    res.render('result', { source, destination, result });
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});