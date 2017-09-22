/*
		it is allowed to use shorthand for module.exports which is exports 

		but ....
		you can only mutate exports so changing its nature by adding methods and properies 

		you can not use assiment as that 

		exports = function(...) is not equel to module.exports = function(...);

		but 
		exports.method = function is equal to module.export = function(...)
*/

	exports = function(){ //that will break a chain
		return 'this is from export assignment that breaks the chain with module.exports';
	}
	exports.methodExt = function(){
		return 'this method of exports.methodExt';
	}

	console.log(exports);
	console.log(module.exports);
