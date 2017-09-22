/* Node.js has set of globals that could be accessed anywhere and in the project*/



                  /*



                        to run individual segemnets do as below:
                              
                              node filename.js bannana tree

                        process.argv[0] = node 
                        process.argv[1] = filename.js 
                        process.argv[2] = banana 
                        process.argv[3] = tree 

                        if(process.argv[2]==='fileSystem'){
                                fileSystem();
                            };



                  */

var path = require("path");
var fs = require("fs");

function showGlobals(){
    console.log(

        '__dirname: ' + __dirname + '\n' + 
        '__filename: '+ __filename

        );
}
//showGlobals();



/*********** Globals ******************/

          //Node ships with couple of globals that could be accessed anyweher in the project;

  //process

            /*The process object is a gl var processGlobal = function(){

      console.log(`This processor architecture is process.arch: ${process.arch}\n`);

              // print process.argv
          console.log('--------process.argv-------');
                   process.argv.forEach((val, index) => {
                     console.log(`process.argv value : ${index}: ${val}\n`);
                   });
          console.log('------end process.argv------');


          console.log(`Current directory: process.cwd(): ${process.cwd()}\n`);

          console.log('------memory usage------');
          const util = require('util');
          console.log(util.inspect(process.memoryUsage()));


          console.log('------platform is------');
          console.log(`This platform is ${process.platform}`);

          //Standard input - this is the file handle that your process reads to get information from you.
           process.stdout.write(`data: ${chunk}`);


          //Standard output - your process writes normal information to this file handle.

          //Standard error - your process writes error information here.

 } 
 if(process.argv[2]==='processGlobal'){
    processGlobal();
};obal that provides information about, and control over, the current Node.js process*/













/* you can get much more path modyfications in built in path module*/

path.basename('C:\\temp\\myfile.html');
  // returns 'C:\temp\myfile.html'

path.dirname('C:\\temp\\myfile.html');
  // returns 'C:\temp\'

path.basename('C:\\temp\\myfile.html','.html'); //skip the extension of basenmae file
  // returns 'C:\temp\myfile'

path.extname('C:\\temp\\myfile.html');
  // returns '.html'

path.normalize('/foo/bar//baz/asdf/quux/..') //it will clean and format path for you;
// returns '/foo/bar/baz/asdf'

path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') //it will join all array elemetns into path 
// returns '/foo/bar/baz/asdf'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif') //it will join the string in brackets with a home directory;
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'

path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb') //combine ans strips to shorten a path;
// returns '../../impl/bbb'

path.isAbsolute('/yes');
    //returs true
path.isAbsolute('yes');
    //returs false 
path.sep
    //returns the platform-specific path segment separator \ on Windows / on POSIX

/* Split paths into array based on operatin system spliter oparator*/
'this/is/file/woking/on.js'.split(path.sep);
    //returns ['this','is','file','woking','on.js']
    
path.parse('/greg/directory/file.js');    
    /*
    returns 

            { 
              root: '/',
              dir: '/greg/directory',
              base: 'file.js',
              ext: '.js',
              name: 'file' 
            }
    */
path.format({dir:'greg/is/cool', base:'newfile.js'});   //you can specify your own path by formating ti with abobe information (dont have to include them all);
    //returns greg/is/cool/newfile.js


/***********File System (fs)******************/

var fileSystem = function(){
    // Asynchronous read
    fs.readFile('input.txt', function (err, data) {
       if (err) {
           return console.error(err);
       }
       console.log("Asynchronous read: " + data.toString());
    });
/*
    console.log("Going to write into existing file");
    fs.writeFile('input.txt', 'Simply Easy Learning!',  function(err) {
       if (err) {
           return console.error(err);
       }
       console.log("Data written successfully!");
       console.log("Let's read newly written data");
       fs.readFile('input.txt', function (err, data) {
          if (err) {
             return console.error(err);
          }
          console.log("Asynchronous read: " + data.toString());
       });
    });*/
}

if(process.argv[2]==='fileSystem'){
    fileSystem();
};


//2. writing file synchronously (so node will wait until excuting the next line of the script);
var fileSystemWriteSync = function(){

  
                //save question everytime you ask a question; 
                fs.writeFileSync('synchronousFile.txt',`:::::\n\n`, encoding='utf8');

          function ask(question,format,callback) {
          


                /*
                      Saving this file is synchronous so the script it wont go any further until it save the file or 
                      throws the error , if you have many user it is not the best practice due to performance issues;
                
                */


                 var stdin = process.stdin, stdout = process.stdout;
                 
                 stdin.resume(); //resume with start the start the process.stdin and process.stdout ; by defautl is paused !
                 stdout.write(question + ": ");
                 
                 stdin.once('data', function(data) {
                        data = data.toString().trim(); //converts to String and removes any empty lines and double spaces

                 
                       if (format.test(data)) { //check validation with regex test;

                          console.log(data);

                        //append answer to the file 
                        fs.appendFile('synchronousFile.txt',`:::::${data}\n\n`,encoding='utf8');

                         callback(data);
                       } else {
                         stdout.write("It should match: "+ format +"\n");
                         ask(question, format, callback);
                       }
                 });
               }


                ask("Name", /.+/, function(name) {

                      //append file with the name in callback;

                      ask("Email", /^.+@.+$/, function(email) {

                                //append file with the name in callback;


                        console.log("Your name is: ", name);
                        console.log("Your email is:", email);
                     
                        process.exit(); //ctrl+c exit;
                      });
                  
                });
           


}

if(process.argv[2]==='fileSystemWriteSync'){
    fileSystemWriteSync();
};



/***********/



/*********** Events ******************/

var runEvents = function(){


        const Events = require('events');   //you need to require events module;

        class MyEmitter extends Events {} //you can create a new Class that extends events 

        //OR 

        var eventEmmiter = new Events.EventEmitter(); //or you can create new instance by extending shorcut Events.EventEmitter();

        const myEmitter = new MyEmitter();
        myEmitter.on('event', () => {
          console.log('an event occurred!');
        });
        myEmitter.emit('event');


        //event Emitter with parameters;
        eventEmmiter.on('new_event',function(message,status){
          console.log(`${status}: ${message}`);
        });
        eventEmmiter.emit('new_event','hello out there',200);


        var eventEmmiterExtended = require('events').EventEmitter; //you can access event emitter aslo like that;
        var util = require('util'); //utils modole enable to inherit and combine any object with other object 

        //javascript object;
        var Person = function(name){
          this.name=name;
        }
        //combines two object togheter so one inherits from the other one;
        util.inherits(Person,eventEmmiterExtended);

        var Ben = new Person('Ben Franklin');
        Ben.on('speak', function(said){
          console.log(`${this.name}: ${said}`); //just becuse we inherited from each other we can use this.name as well as EventEmitter properties 
        });

        Ben.emit('speak','you may delay,but time will not!');

}
if(process.argv[2]==='runEvents'){
    runEvents();
};

//**************** readline *************//

          //readline module allows us communicate with a terminal by making possible to ask question and save them and creates 
          //interface for procces.stdin and procces.stdout;
var readline = function(){

        var readline = require('readline');

        //javascript object 
        var dog = {
          name: '',
          saying:[]
        };

        //create interface from readline module;
        var rl_interface = readline.createInterface(process.stdin,process.stdout);

        rl_interface.question('What is your dog name ?',function(answer){
            dog.name = answer;

            rl_interface.setPrompt(`Dog ${dog.name} is saying:`)
            rl_interface.prompt()

            rl_interface.on('line',function(saying){ //event fired when the line is entered;

              //collect answers 
              dog.saying.push(saying);

              if(saying.toLowerCase()!=='exit'){
              //prompt another question;
                rl_interface.setPrompt(`what do you think ${dog.name} like to eat: --- say 'exit' to leave: `)
                rl_interface.prompt()
              } else {
                rl_interface.close();
              }

            })


            //onClose event 
            rl_interface.on('close',function(){
                  //%s percetage will take first parameter as string , %j will take second parameter as json format;
                  console.log("Dog %s like to eat -  %j", dog.name,dog.saying);
                  process.exit();
            })

        });

 }

if(process.argv[2]==='readline'){
    readline();
};



//**************** child_process *************//

                //child process is used to call other terminal commands in the event as : ls, open . etc ...any commands really 


var childProcess = function(){

  var  exec = require('child_process').exec;

  //find out the vesion of git 
  exec('git version is:',function(err,stdout){
    if(err){
      throw err;
    };
          console.log('git version is: '+stdout);

    });
} 

if(process.argv[2]==='childProcess'){
    childProcess();
};


//**************** child_process spawn *************//
                      
                  //spawn is used to run external files in your current files so run external file;

var spawn = function(){                        
  var  spawnFile = require('child_process').spawn;

  //run external file to be spawn it 
  var cp = spawnFile('node',['spawn_external_file']);

  cp.stdout.on('data',function(data){  //this will triger process.stdout.on('data',callback); so print out to terminal;
          console.log(`STDOUT: ${data.toString()} \n`);
    });

  cp.on('close',function(){
    console.log('child process has ended');
          process.exit();
    });


  setTimeout(function(){
      cp.stdin.write('stop'); //this will triger process.stdin.on('data',callback);
  },4000);



} 

if(process.argv[2]==='spawn'){
    spawn();
};





//**************** end child_process spawn *************//
