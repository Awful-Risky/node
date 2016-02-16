var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

// Create an Express app object \\
var app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	console.log(req.query)
	res.sendFile('index.html', {root : './public/html'})
})

// app.post('/formsubmit', function(req, res){
// 	console.log(req.body)

// 	res.redirect('/users/' + req.body.username + '/' + req.body.password)
// })

// Listen for connections \\
app.listen(3000, function(){
	console.log('Server is 1Up')
})