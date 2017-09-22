//constructor for Emitter
function Emitter(){
	//collect events in objet literals;
	this.events = {};
}

//attach you events to prototype for Emmiter;
Emitter.prototype.on = function(type,listener){
	//check if property of [aray] on this.events Object exists if not create an array on property type from argument 
			/* eg.
					this.events['greet']
			   or 	this.events['run']				
			*/
	this.events[type] = this.events[type] || [];
	//once you create property for the object assing a listener to it by pushing it to the current pocket as value;
	this.events[type].push(listener);
}

/*
				now execute those listeners with emmit events;
*/	
Emitter.prototype.emit = function(type){
	if(this.events[type]){ //this is an array check if exists;
		//loop throuh the array and execute the content of methods;
		this.events[type].forEach(function(listener){
			listener();//this array consists of methods so you can invoke them here;
		});
	}
};

// lastly you need to exposed your custom Listener outside with module.exports 
module.exports = Emitter;