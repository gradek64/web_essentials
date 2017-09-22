
							/***   Javascripts callbacks ***/
							console.log('gaga');



				var callmeBack = function(param1,param2,callback){

					var total = param1 + param2;

					callback(total);

				};


				callmeBack(3,5,function(data){
					console.log('data callback from callmeBack');
					console.log(data);
					console.log('data callback from callmeBack');
				});


				/***   Singeleton ***/
								//it is an Object that returns object in self executing function it doent not requre new Object contructor;

				var Singeleton = (function(){


						//public method accessable anywhere in the return obejct;
						function init(){
						  	return 'this init sepetarated';
						  }
						 
						 var publicProperty = 'I am public property'

						return {
							method:function(){
								return 'I am singeleton method  ' + publicProperty;
								},
							property: "I am object property",
						    getRandomNumber: function() {
						        return this.publicProperty + init();
						      },
						    inits:function(){	
						    	return init();	
						    }
						  };



				})();


				//get Singeleton properties and methods;
				var method = Singeleton.method();
				var property = Singeleton.property;
				var randomNumber = Singeleton.getRandomNumber();

				console.log('\n' + 'Singeleton methods and properties');

				console.log(   method  );
				console.log(	property  );
				console.log(	randomNumber );
				console.log(	Singeleton.inits() );

				console.log('Singeleton methods and properties');


				/*prototype and inheritance*/


				//Every object when is declared it creates an prototype object that is chained to the main object so inherits them;

				/******constuctor type Object *******/
				function Greg(){
					this.property="It is me"
				};


				//attach to top Constructor only allowed
				Greg.prototype.callMe = function(){
					console.log(this.property);
				}


				var greg = new Greg();
				console.log('greg');
				console.log(greg);

				/*****************/


				/*******object literal *******/

				var names = {};
				names.propa = "It is me";

				//you can chain anyting to prototype 
				names.__proto__.hello = function(){
					return 'Greg'+names.propa;
				}

				console.log('name');
				console.log(names);
				console.log(names.hello());

				/****************/



				/* object refference */

						/*
									Important concept is the Object refference in  javascript that is passed to the function and the Variable 
									see below for details:
						*/


				//singelton with passed object and string;

				//1 initial object 
				var passedObject = {
					property:'this is initial property'
				};
				var passedString = 'this is initial String';


				//constructor 
				function myObject(passedObjectARG,passedStringARG){
					this.changed ='this is a changed value',
					this.changeValue = function(){
						passedObjectARG.property = this.changed;
						passedStringARG = this.changed + 'String';
					}
				}

				var myObject = new myObject(passedObject,passedString);
				console.log(passedObject);
				console.log(passedString);
				//change the value
				console.log('after changing');
				myObject.changeValue();
				console.log(passedObject);
				console.log(passedString);

				/*
							so the passedObject has changed its value once passed to the Constructor just as refference becuse it is the same object event diffrent name is used
							but string stays the same cause we passing a value that is assign now to the diffrent String not the same as passed one.

				*/




				/*
							
							5 call() and apply() - the way to call method on singelton and changing refference to this keyword;

				*/

				function Pet(names){
					this.names = names,
					this.play = function(greet){
 							//console.log(` Pet says ${ this.name }`)
 							console.log('hi' + greet + this.names);
					}
				}

				var dog = new Pet('Reksio');
				dog.play();
				dog.play.call({names:"Gerard"},'hello');
				dog.play.apply({names:"Filemon"},['hello 4']);



				/*
							
							6 call() and apply() - for super Consturctor with util Node Core module,

									if you want your object to have access to properties and methods of diffrent object then you can set call methods to inherit from main object not a prototype;

				*/
				var utils = require('util');


				//constructor Person 
				function Deparment(){
					//this reffers to this Deparment object whihc 
					//is empthy by defautl untill you add methods and properteis to it

					this.city = 'New York',
					this.district = 'New York Province'

				};



				function Policeman(){
					//initiate Depeartment first so it will be added to Policeman object 
					Deparment.call(this);
					//this is now reffering to Depearment;
					this.badgeNumber = badgeNumber,
					this.name = name
				}

				//combine Deparment and Policman object toghether in Node;
				utils.inherits(Deparment,Policeman);

				//init Policeman object 
				var officer = new Policeman('Phil','2424224');

				console.log('inherit from Main object ');
				console.log(officer);


