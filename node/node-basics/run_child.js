var timeout = setTimeout(function(){
	clearTimeout(timeout);
	console.log('child detected');
	console.log('child detected');
	console.log('child detected');
},3000);
