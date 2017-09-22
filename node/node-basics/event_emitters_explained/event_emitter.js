// Import events module
var events = require('events');


// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
var customEvent = function(){

				/*

						The functions that listen to events act as Observers.

						 Whenever an event gets fired, its listener function starts executing.

				*/

//2 you need to listten for the event that have been emited;

eventEmitter.on('myCustomEvent',function(argument){
		//callback function recived signla from Event;
		console.log('fires with..'+argument);

});
//1 first you need to emit your event 
eventEmitter.emit('myCustomEvent','argument passed');

}// end of custom Event;


			if(process.argv[2]==='simple'){
			    customEvent();
			}



var passedArgument = function(){


		/*
			2 creating event handler;
		*/

		// Create an event handler as follows
		var connectHandler = function connected() {
		   console.log('connection succesful.');
		  
		   // Fire the data_received event 
		   eventEmitter.emit('data_received');
		}

		// 2 Bind the connection event with the handler so handle callbakck with the sepearte hanlder not anoumous function;
		eventEmitter.on('connection', connectHandler);
		 
		// Bind the data_received event with the anonymous function
		eventEmitter.on('data_received', function(){
		   console.log('data received succesfully.');
		});

		// 1 Fire the connection event 
		eventEmitter.emit('connection');

		console.log("Program Ended.");

	}//end of passedArgument;

 
			if(process.argv[2]==='argument'){
			    passedArgument();
			}


			//utils moduel allows you to combine 2 object so they both sharing the same properties and values by prototype inheritance;
			var util = require('util');

			/*
					3 Inheritance from Util class that allows U to combine to object and inherit from each other;
			*/

			var utilsInheritance = function(){

				//students singelton;
				var students = function(name){
					this.name = name;
				};

				//attach event to the students class Constructor;
				util.inherits(students,events.EventEmitter);

				//new student 
				var Max = new students('Max');

				Max.on('added',function(){
						console.log('student just added is' + this.name);
				});

				//emit event of adding students;
				Max.emit('added');

			};


			if(process.argv[2]==='util'){
			  		utilsInheritance();
			};	

			function hello(after,fn){
				console.log(after);
				fn();
			};

			hello('begin',function(){
				console.log('hi there');
			});	

			var customEmitterObject =function(){

					var custom_emitter = require('./custom_event_emitter_object');
					var newInstanceCustomEmitter = new custom_emitter();

					//set up event listeners;
					newInstanceCustomEmitter.on('greet',function(){
							console.log('this is from custom Event Emitter');
					});

					newInstanceCustomEmitter.on('runner',function(){
							console.log('this is from custom Event Emitter runner');
					});


					//trigger the event 
					newInstanceCustomEmitter.emit('greet');
					newInstanceCustomEmitter.emit('runner');






					//IMPORTANT and nice clue ! 
							/*
								to avoid misspeliing your event it is good practice to set up your events on top of you events Emitter 
								so you can access them by Object Literals not a string; 
								example below; 
							*/
					//import event name collection 
					var eventCollection = require('./events_name_collection');



					newInstanceCustomEmitter.on(eventCollection.event.RUN,function(){
						console.log('custom event run from name Collection RUN');
					});

					//fire event;
					newInstanceCustomEmitter.emit(eventCollection.event.RUN);

			};


			if(process.argv[2]==='customEmitter'){
			    customEmitterObject();
			}


