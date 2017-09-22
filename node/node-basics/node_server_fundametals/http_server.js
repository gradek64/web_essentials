

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {


  // responsone - is a readable stream;

   //but you can use read file to insert file into the conent of html 


  //1 this is goint to return Buffer so needs to be converted to String by file.toString();
  var template1 = fs.readFileSync(__dirname+'/template1.html');


  //but more efficient way would be to create readable stream (much faster);

  /*
    		response is a readable HTTP stream ! so it could recive other strams by template2.pipe(response);
			
  */

  var template2 = fs.createReadStream(__dirname+'/template2.html');

  //template2.pipe(response);



  response.writeHead(200, {"Content-Type": "text/html"}); //you need to specifiy content-type so node will render this accordingly type/text ..type/html
  var content = '<html><head></head><body><h1>this is first text</p>{{message}}</body></html>'.replace('{{message}}',template1.toString());

  //content += template2+'</body></html>';
  response.end(content);


 


});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");