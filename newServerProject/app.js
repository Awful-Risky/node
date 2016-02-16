// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

// Create Express App Object \\
var app = express();

app.use(logger('dev'));

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));

// Routes \\
// app.get('/', function(req, res){
// 	// var fileContents = fs.readFileSync('data.txt');  Synchronous way--BAD
// 	fs.readFile('data.txt', function(err, data) {
// 		res.header('Content-Type', 'text/html');  
// 		res.send(data);
// 	});

// });

app.get('/:filename', function(req, res){
	var input = (req.params.filename)
	fs.readFile(input, function(err, data) {
		res.header('Content-Type', 'text/html');  
		res.send(data);
	});

});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
	console.log('Server running on port ' + port);

})

