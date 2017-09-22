/*
			module.export = {} it is an epty object by default 
			that is why you can easily extent it with custom methods and properties 

			but you can also extend it from the roots 

			as:
*/
			module.exports.property =  'object extended by property';
			module.exports.methods = function(){
				return 'this is extende method from module.export';
			};

