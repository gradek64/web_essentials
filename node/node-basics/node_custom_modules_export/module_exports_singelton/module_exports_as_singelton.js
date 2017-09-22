function GreetMe(){
	this.lang = 'English';
	this.words = function(){
		return 'Hello out there';
	}
}

module.exports = new GreetMe();