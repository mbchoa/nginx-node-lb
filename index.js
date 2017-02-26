const express = require('express');
const uuid = require('node-uuid');

const nodeId = uuid.v4();

const app = express();

app.get('/', function(req, res, next) {
    res.send(`Welcome to node server #${ nodeId }`);
});

app.listen(process.env.PORT || 8080, function() {
    console.log(`Started express server #${ nodeId } at port ${ this.address().port }`);
})