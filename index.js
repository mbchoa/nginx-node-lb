var express = require('express');

var node1 = express();
var node2 = express();

node1.get('/', function (req, res) {
    res.send('Hello World from Node Server #1');
});

node2.get('/', function (req, res) {
    res.send('Hello World from Node Server #2');
});

node1.listen(8080, function() {
    console.log('Started node server 1');
});

node2.listen(8081, function() {
    console.log('Started node server 2');
});
