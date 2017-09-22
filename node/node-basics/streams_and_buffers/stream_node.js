		


					/*

							Buffer is the size set for data to be transffered in one go its stores data as BINARY DATA (0 and 1) but it could be converted into string ad vice-versa
							it is part of c++ part of node and passed to V8 javascript engine; Buffer acts as the array;

					*/

					var fs = require('fs');
					var buf = new Buffer('hello');
					console.log(buf);

					//you can conber toString 

					console.log(buf.toString());

					//you can convert to JSON

					console.log(buf.toJSON());

					//you can write to buffer 
					buf.write('wo');

					console.log(buf.toString());

					//you can write buffer to writable stream;
					var writable = fs.createWriteStream(__dirname+'/greetDuplicate.txt');
					writable.write(buf);	





							/*
										Stream - it is a flow of information (data)  that is being passed to the receiver;
					
										Stream could be readable and writeable or both called duplex or transform ( allows you to change stream once passed to reciever) . Streams are Event emitters so they have access to event
										called on('exit') etc.


										Stream are abstract Class so it is a type of Constractor that is not defined as new Stream() they implement and iherits only without new Instance
							*/





		//1) defineing readable stram 

		//greet.txt file is been generated to have 100 bytes in size so the buffer should habe 4 loops to get it all
		var readable = fs.createReadStream(__dirname+'/greet.txt', {encoding:'utf8',highWaterMark: 2 * 1024});
		// when you specify option you can see text and highWaterMark = Buffer size at one go 
		// so if the buffer is smaller than the entire file then node will access the chunks of data specified in Buffer size this case 16mb;


		var writable = fs.createWriteStream(__dirname+'/greetDuplicate.txt');

		//all streams inherit from Event Emitter so you can assing on 'data' on readable streams 

		readable.on('data', (chunk)=> {
				//that will give U all buffer chunks split in th sized you set in readablle stream;
				console.log(chunk.length);
				//write into writable string from readable string;
				writable.write(chunk);


		});



		/*

				Pipe - is the way to convey data from readeable stream to writable stream;


		*/


		var readable1 = fs.createReadStream(__dirname+'/greet.txt', {encoding:'utf8',highWaterMark: 2 * 1024});
		var writable1 = fs.createWriteStream(__dirname+'/greetDuplicate13.txt');

		//U can pipe from one stream to another as long as one is at least readable and the other writable;
		//readable1.pipe(writable1);


		//stream from process.stdin it is a Duplex stream so both(readable and writable stream);

		process.stdin.setEncoding('utf8');

		process.stdin.on('readable', () => {
			console.log('works');
		  var chunk = process.stdin.read();
		  if (chunk !== null) {
		  	process.stdin.pipe(writable1);
		    process.stdout.write(`data: ${chunk}`);
		    
		  }
		});





