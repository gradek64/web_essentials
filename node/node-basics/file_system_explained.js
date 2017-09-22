var fs = require("fs");
var path = require("path");
var fileName = "input.txt";


    /*****
            1. check if file exists ?

             fs.exists(fileName, function(exists) {})
              
    *******/

 var fileExists = function(){
      fs.exists(fileName, function(exists) {

            if (exists) { console.log(' fileExists ? ', exists);}

      });

 };

 if(process.argv[2]==='fileExists' || process.argv[2]==='1'){
    fileExists();
};
  //run  run : node file_system_explained.js fileExists or node  file_system_explained.js 1;


    /*****
            2. check type of the file 

                  fs.stat(fileName, function (err, stats) {});
                        //gives away basic information about the file;
              
    *******/

 var checkFileType = function(stats){
       fs.stat(fileName, function (err, filestats) {



              if(!stats){
                  console.log('is file', filestats.isFile() );
                  console.log('------------');
                  console.log('stats.isDirectory()', filestats.isDirectory() );
                  console.log('------------');
                  console.log('stats.isBlockDevice()', filestats.isBlockDevice() );
                  console.log('------------');
                  console.log('stats.isCharacterDevice()', filestats.isCharacterDevice() );
                  console.log('------------'); 
                  console.log('stats.isSocket()', filestats.isSocket() );
                  console.log('------------');
                  console.log('stats.size', filestats.size );
                  console.log('------------');
                  console.log('stats.birthtime', filestats.birthtime );
                  console.log('------------');
                }
                if(stats){
                    console.log('------------');
                    console.log('all stats', filestats );
                    console.log('------------');
                };


       });

 };

if(process.argv[2]==='stats' || process.argv[2]==='2' ){
    checkFileType();
}
  //run  run : node file_system_explained.js stats or node  file_system_explained.js 2

if( (process.argv[2]==='stats-all' || process.argv[2]==='2-all') ){
    console.log('agaga');
    checkFileType(true);
}
  //run  run : node file_system_explained.js stats-all or node  file_system_explained.js 2-all


    /*****
            3. open file;

             fs.open(fileName, "r", function(error, fd) {
              
    *******/

 var openFile = function(buffer){

    if(!buffer){
      
      fs.open(fileName, "r", function(error, fd) {

            console.log(' opened file has ? ',fd);
            console.log('------------');

            //once open read file;
                fs.readFile(fileName, "utf8", function(error, data) {

                    console.log(' file content: ',data);
                    console.log('------------');

                });

      });
    }

    if(buffer){

        fs.stat(fileName, function (err, filestats) {

              console.log('------------');
               fs.open(fileName, "r", function(error, fd) {

                      var buffer = new Buffer(filestats.size);

                    //once open read file;
                       fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {

                                var data = buffer.toString("utf8", 0, buffer.length);

                                console.log(' file content from Buffer: ',data);
                                console.log('------------');

                                console.log(' close file method ',data);
                                console.log('------------');
                                fs.close(fd);
                        });
                });

        });
    }

};

 if(process.argv[2]==='open' || process.argv[2]==='3'){
    openFile();
}
if(process.argv[2]==='open-buffer' || process.argv[2]==='3-buffer'){
    openFile(true);
}
  //run  run : node file_system_explained.js fileExists or node  file_system_explained.js 3;
   /*****
            4. write file;

             fs.writefile(fileName, function(err) {})
                    //allows you to create file;
    *******/

 var writeFile = function(stream){

  if(!stream){
      var text = 'this is a new file';
      fs.writeFile('newFile.txt', text,function(err) {
              console.log('file created');
             console.log('------------');
      });

    }


    if(stream){
      //using stream 
      // Create a writable stream
      text = 'this is a new file from Stream';
      var writerStream = fs.createWriteStream('newFile.txt');

      // Write the data to stream with encoding to be utf8
      writerStream.write(text,'UTF8');

      // Mark the end of file
      writerStream.end();

      // Handle stream events --> finish, and error
      writerStream.on('finish', function() {
          console.log("Write completed.");
      });

      writerStream.on('error', function(err){
         console.log(err.stack);
      });

      console.log("Program Ended");

    }

 };

 if(process.argv[2]==='writeFile' || process.argv[2]==='4'){
    writeFile();
}if(process.argv[2]==='writeFile-stream' || process.argv[2]==='4-stream'){
    writeFile(true);
}
 /*****
            5. read file;

             fs.readfile(fileName, function(err,data) {})
                    //allows you to read file file there is no need to open it;
    *******/

 var readFile = function(stream){

  if(!stream){
      // Asynchronous read
        fs.readFile('input.txt', function (err, data) {
           if (err) {
               return console.error(err);
           }
           console.log("Asynchronous read: " + data.toString());
        });

    }


    if(stream && stream.stream){
      //using stream 
      // Create a writable stream
      var data = ''; //it has to 

      // Create a readable stream
      var readerStream = fs.createReadStream('input.txt');

      // Set the encoding to be utf8. 
      readerStream.setEncoding('UTF8');

      // Handle stream events --> data, end, and error
      readerStream.on('data', function(chunk) {
         data += chunk;
      });

      readerStream.on('end',function(){
         console.log(data);
      });

      readerStream.on('error', function(err){
         console.log(err.stack);
      });

      console.log("Program Ended");

    }

    if(stream && stream.pipe){
     // Create a readable stream
     var readerStream = fs.createReadStream('input.txt');

     // Create a writable stream
     var writerStream = fs.createWriteStream('output.txt');

     // Pipe the read and write operations
     // read input.txt and write data to output.txt
     readerStream.pipe(writerStream);


     fs.readFile('output.txt', function (err, data) {
           if (err) {
               return console.error(err);
           }
           console.log("Asynchronous read from pipe: " + data.toString());
        });

    }

 };

 
if(process.argv[2]==='readFile' || process.argv[2]==='5'){
    readFile();
}
if(process.argv[2]==='readFile-stream' || process.argv[2]==='5-stream'){
     readFile( {'stream':"stream"} );
}
if(process.argv[2]==='readFile-pipe' || process.argv[2]==='5-pipe'){
    readFile( {'pipe':"pipe"} );
}
