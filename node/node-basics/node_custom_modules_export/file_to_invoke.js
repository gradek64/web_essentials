var imported = require('./file_to_import');

//run function from file_to_import function to_exoprt which is exposed in require('...');
console.log(imported.greet('en'));
console.log(imported.person.name);


//you can require module.export directly from root if you set it that way;
var moduleProperty = require('./module_export_direct').property;
var moduleMethod = require('./module_export_direct').methods();


console.log(moduleProperty +' and '+ moduleMethod);

	
		/* 
				§§2 require an singelton 

				Important 

					 even that require of the same file is called more that once , the first time is called then Node cashes 
					so it is efficeint this way and always points to the same cached object;
		*/

var singelton = require('./module_exports_as_singelton');

var lang = singelton.lang;

console.log(lang);

//update lang;
singelton.lang = 'es';
singelton.words = function(){ 
	return 'Hola';
};


console.log(singelton.lang +' is spanish Hello : '+singelton.words());


			/*
					3 module.exports as singelton but inititated one reqiring wiht the keyword new Object();
			
			*/

var singeltonInit = require('./singelton_not_initiated.js');

var newInstance = new singeltonInit();

console.log('from new Instance of singelton : lang is '+newInstance.lang);

			/*
					4 exports versus module.exports 

			*/
var exportRefference = require('./exports_v_module_exports');
		


			/*
					5 custom Event Emmiter;

			*/
var Emitter = require('../event_emitters_explained/custom_event_emitter_object');

//create new Instance of custom Ebent Emmiter;
var emitter = new Emitter();


emitter.on('greet',function(){
	console.log('custom event greet on customEmmiter');
});

emitter.on('runner',function(){
	console.log('custom event runner on customEmmiter');
});

//initiate emmiter with emit method;
emitter.emit('greet');
emitter.emit('runner');

			/*
					6 import variable  from diffrent module;
			*/

var exportedVar = require('./export_variable');

	console.log('exportedVar:'+exportedVar);






