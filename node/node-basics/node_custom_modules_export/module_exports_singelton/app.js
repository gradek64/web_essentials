
		/* 
				§§2 require as singelton 

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


