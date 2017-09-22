
//you can alson require JSON files just like .js files 
myJSONData = require('./greetings.json');

var to_export = function(lang){
	var pickLang = lang=='es' ? myJSONData.es : myJSONData.en;
	return pickLang;
}

function Person(name){
	this.name = name
	/*this._prototype.greet = function(){
		return 'Hi, '+this.name;
	}*/
};

var person = new Person('greg');


//you can decide what to export or expose to the other files out _export
//yoo can combine what needs to be return by constructing object;
module.exports = {
	greet:to_export,
	person:person
};