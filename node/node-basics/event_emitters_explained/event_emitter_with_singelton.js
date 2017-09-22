/*
			This file is for explaing how to assign event to singlelton object that is carried with every new Instnance of the constuctor;

*/

//node core modules;
var events = require('events');
var util = require('util');

				// 1. Construct the object;

				function Person(job,hobby) {
					this.job = job,
					this.hobby = hobby
				}

				//combine ebents Emmiter with Person using util core module;

				util.inherits(Person,events);//that means every single of instance 


				//2 add method to Person prototype

				Person.prototype.play = function(who){
					console.log('play with: '+ this.hobby);
					//start event from EventListener class inherited from events module;
					this.emit('start',who);
				};

				//3 start new Instance of Person
				var person1 = new Person('front-end','bikes and snowboards');
				var person2 = new Person('back-end','games');

				//4 attach event to prototype so it will be with every Instance;

						//Node event Emmitter allows you to pass argument as well

				Person.prototype.on('start',function(arg){
					console.log('Hi I am ' + this.job + 'said from:'+ arg);
				});

				//call play method 
				person1.play('Greg');
				person2.play('Mike');

				

