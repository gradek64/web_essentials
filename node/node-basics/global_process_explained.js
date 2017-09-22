			
			/*
						The process object is a global that provides information about,
						 and control over, the current Node.js process. As a global, it is always available to Node.js applications without using require().
						 It is an instance of Event Emmmiter that means it inherits its properties and methods


			*/

		// 1 . most common process variables;


		// process.stdin it is a processs of retunring the stream from standard input which is whatever you type in terminal window;
		process.stdin.setEncoding('utf8');
		//process.stdin.resume();

		//listen for event when process is being exited;
		process.on('exit', () => {
			 process.stdout.write(`datafwefˆ`);	
		})

		process.stdin.on('readable', () => {
		  var chunk = process.stdin.read();
		  if (chunk !== null) {
		    process.stdout.write(`data: ${chunk}`);
		    //exit the process entirely
		    process.exit();
		  }
		});

		
		

	