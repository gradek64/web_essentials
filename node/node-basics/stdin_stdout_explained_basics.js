

/** process is a GLOBAL so it is avaialable everywhere in node and got few nice featurs as:


		process.argv = array that conntains : [0] node itslef 
											  [1] path to the file you are executing yourslef 
											  [2] additional arguments you are passing in node index.js stdInValidate


		process.stdout = it will print any outcome back to console in simple example it coold be: 	
		
		var message = 'this is my message to U';
		process.stdout.write( message + '/n')	==  console.log(message);							  



/


pipeIntoFile = function(){

	var fs = require('fs');
	var createFile = fs.createWriteStream('pipingIntoFile.txt');

	process.stdin.pipe(createFile);
}

 if(process.argv[2]==='pipeIntoFile'){
    pipeIntoFile();
};

/* stdin with validation */

stdInValidate = function(){
	

function ask(question, format, callback) {

		 


		 var stdin = process.stdin, stdout = process.stdout;
		 
		 stdin.resume(); //resume with start the start the process.stdin and process.stdout ; by defautl is paused !
		 stdout.write(question + ": ");



		 //once there is data types in console;
		 stdin.once('data', function(data) {
		   data = data.toString().trim(); //converts to String and removes any empty lines and double spaces
		 
				   if (format.test(data)) { //check validation with regex test;
				     callback(data);
				   } else {
				     stdout.write("It should match: "+ format +"\n");
				     ask(question, format, callback);
				   }
		 	});
		}



		ask("Name", /.+/,   /*1*/ function(name) { //frist callback funciton once name is correct

							process.stdout.write('name validated as ' + name + '\n');

		  					/*2*/	ask("Email", /^.+@.+$/, function(email) {  //nested callback function to the next question;

		  					process.stdout.write('Email validated as ' + email + '\n');

		    			console.log("Your name is: ", name);
		    			console.log("Your email is:", email);
		 
		    process.exit();
		  });
		});

}


 if(process.argv[2]==='stdInValidate'){
    stdInValidate();
};

/*********

	read the file and show its content to (standard output) means console ;

*/
	/**first read the file**/
var fs = require('fs');
function pipeFileintoStream(){

	var fileContent = fs.createReadStream('./input.txt'); //__filename it reffers to the this file itselt so read the file you are in;
	/** then you need to pipe that file into standard output as:*/
	fileContent.pipe(process.stdout);


	process.on('exit',function(data){
			console.log('.....4444444.........');
			console.log(data);
	});
	process.on('messsage',function(data){
			console.log('.....message.........');
			console.log(data);
	});

}
 
if(process.argv[2]==='pipeFile'){
    pipeFileintoStream();
};


/* stdin EVENTS not working yet */
function stdEvents(data){
	process.stdin.setEncoding('utf8');
	process.stdin.resume();

	process.stdin.on('readable',function(data){
		var input = process.stdin.read();
		console.log(data);
		input !=='quiter' ? console.log(input+' :type quiter to exit') : process.stdin.paused();

	})
}

 if(process.argv[2]==='stdEvents'){
    stdEvents();
};
