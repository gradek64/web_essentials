function GreetMe(){
	this.lang = 'English';
	this.words = function(){
		return 'Hello out there';
	}
}
//we exposing only the GreetMe constructon but it is not initiated yet;
module.exports = GreetMe;