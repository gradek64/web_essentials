var childProcess = require('child_process')
/* child process is seperate stream than runs as second chanel and can comumnicate with main process with events*/

/*child process methods*/
function child_process_exec(){
		childProcess.exec('ls .',function(err,stdout,stderr){
				console.log('list files in current directory:'+'\n', stdout);
		})
}
if(process.argv[2]=='exec'){
	child_process_exec()
}


/*child process methods spawn*/

		/*
				spawn(command [array arguments],{options object})
		*/
function child_process_spawn(){

		//run node comand as for this file as it would like : node child_process_and_events spawn 
		// node for this file is the path to it: ---- process.execPath ----
		// current file = ---- __filename ----

	
			var child = childProcess.spawn( process.execPath, [__filename,'spawn','child'] ) 
				
				//now we can listen for that stream in the standard output beacuse it is a stream just like process.stdout
				child.stdout.on('data',function(data){
						console.log('from child', data.toString() );
						//stop child process 
						child.kill();
				})

				child.on('exit',function(data){
						console.log('from child left process');	
				});

				child.on('close',function(data){
						console.log('from child closed process ');
				});

		
		
};

if(process.argv[2]=='spawn'){
	child_process_spawn()
}

			/*
				spawn(command [array arguments],{options object})
		*/

function child_process_spawn_pipe(){

		//run node comand as for this file as it would like : node child_process_and_events spawn 
		// node for this file is the path to it: ---- process.execPath ----
		// current file = ---- __filename ----

	
			var child = childProcess.spawn( process.execPath, ['./run_child.js','spawn_pipe'] ) 
				
				
				//you can pipe any outcome from child process including external file code to the main process using .pipe();
				child.stdout.pipe(process.stdout);

				process.on('exit',function(){
						console.log('main process exit');
				});

		
		
};

if(process.argv[2]=='spawn_pipe'){
	child_process_spawn_pipe()
}

function child_process_spawn_inherit(){

		//run node comand as for this file as it would like : node child_process_and_events spawn 
		// node for this file is the path to it: ---- process.execPath ----
		// current file = ---- __filename ----

			//by inherit all process in child process is passed to main process so you dont need to pipe it ! 
			var child = childProcess.spawn( process.execPath, ['./run_child.js','spawn_pipe'],{ stdio: 'inherit'} ) 
				
				
				//you can pipe any outcome from child process including external file code to the main process using .pipe();
				//child.stdout.pipe(process.stdout);

				process.on('exit',function(){
						console.log('main process exit');
				});

		
		
};

if(process.argv[2]=='spawn_inherit'){
	child_process_spawn_inherit()
}



