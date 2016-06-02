'use strict';

var express = require('express');

var PORT = (process.env.PORT || 8888);

var app = express();
app.get('/', function (req, res) {
	res.send('Hello world\nI am listening on ' + PORT);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
