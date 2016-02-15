var http = require('http')
var fs = require('fs')


var simpleServer = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'})
	response.end(fs.readFileSync('crowdSpar.html', 'utf-8')) //use fs. to stringify HTML into var
});

simpleServer.listen(8000)
