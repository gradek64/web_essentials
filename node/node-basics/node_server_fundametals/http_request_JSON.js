

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {


  if(request.url==='/'){
 	fs.createReadStream(__dirname+'/template1.html').pipe(response);
  }		
  else if(request.url==='/json'){
		  response.writeHead(200, {"Content-Type": "application/json"}); //you need to specifiy content-type so node will render this accordingly type/text ..type/html or apllication/json
		  var content = {
		            name:"Greg",
		            nickName:"GREGi"
		  }

		  response.end(JSON.stringify(content));
	}
  else {
  	response.writeHead(404);
  	response.end('404 error');
  }

 


});

// Listen on port 1337, IP defaults to 127.0.0.1
server.listen(1337);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:1337/");