var http = require('http');
var ejs = require('ejs');


// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {


	 var title = 'tutorial';
	 var people = ['geddy', 'neil', 'alex'];

	 var html = ejs.render(`<h1><%= title %></h1>
	 <input class="target" type="text"></input><button id="execute_search" onclick="click123(this);">search</button>
	 <ul>
	     <% for(var i=0; i<people.length; i++) { %>
	         <li>
	             <a href='people/<%= people[i] %>'>
	                 <%= people[i] %>
	             </a>
	         </li>
	     <% } %>
	 </ul>
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script>
		document.getElementById('execute_search').onclick =function(e){

			$.get( "http://localhost:9200/twitter/tweet/_search", function( data ) {
  
							document.write(JSON.stringify(data));
			});

		}


		$( ".target" ).keypress(function() {
  					console.log( "Handler for .keypress() called." );
		});
	</script>

	 `,{title: title,people: people});

  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  response.writeHead(200, {"Content-Type": "text/html"}); //you need to specifiy content-type so node will render this accordingly type/text ..type/html

  //content += template2+'</body></html>';
  response.end(html);


 


});


// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");