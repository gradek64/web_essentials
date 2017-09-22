/*global module:false*/


/******** run this in order to exucute thhis custom grunt 
  
    grunt --gruntfile=gruntWebD.js

****/

var path = require("path");
var fs = require("fs");

module.exports = function(grunt) {


    grunt.config('greg', 'hello');

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        
        copy : {
            assets : {
                expand : true,
                cwd : 'src/WebD/',
                src : ['**/*.js', '**/*.css'],
                dest : 'src/WebD/codes/'
            }
        },
        replace: {
             replacePath:{
                src: 'src/WebD/indexConverting.html',
                overwrite: true,
                replacements: [{
                    from: "assets/",
                    to: "images/"
            }]

            },
            replaceSource:{
                src: 'src/WebD/indexConverting.html',
                overwrite: true,
                replacements: [{
                    from: /(data-source|src)=("|')([a-zA-Z0-9-_/.]+\.js)/g,  
                    to: '$1=$2codes/$3'
                    //to: '$1=$2codes/webd_concat_scripts.js'
                },
                {
                    from: /(href)=("|')([a-zA-Z0-9-_/.]+\.css)/g,  
                    to: '$1=$2codes/$3'
                }]
            },
            markContentHead:{
                src: 'src/WebD/indexConverting.html',
                overwrite: true,
                replacements: [
                    { from: /<head>/,  
                       to: '<head>\n<!--head-content-WebD-->\n'
                    },
                    {   from: /<\/head>/,  
                        to: '\n<!--head-content-WebD--><\/head>\n'
                    },
                    { from: /<body.+>/,  
                       to: '<body>\n<!--body-content-WebD-->'
                    },
                    {   from: /<\/body>/,  
                        to: '\n<!--body-content-WebD--><\/body>\n'
                    },
                    {  from: /<style/g,  
                        to: '<!-- build:remove:styles -->\n<style'
                    },
                    {   from: /<\/style>/g,  
                        to: '<\/style>\n<!--css--><!-- /build -->'
                    }
                    ]
                    

            }

        },
       concat: {
           options: {
             separator: '/**** scripts ***/',
           },
           dist: {
             src: ['WebD/codes/**.js'],
             dest: 'WebD/codes/webd_concat_scripts.js',
           },
         },
         // Remove files after copping;
        clean : {
            init : {
                src: ['src/WebD.html','src/images','src/codes','src/custom_code.js','src/matrix_extra_style.css'],
            },
            after: {
                 src: ['src/WebD/**/*.js', 'src/WebD/**/*.css','!src/WebD/codes/**/*.js', '!src/WebD/codes/**/*.css'],
            },
            removeWebDHTML: {
                 src: ['src/WebD.html'],
            }
        },
        shell : {
            //rename 
            changeNameFolder : {
                options: {
                    stdout : true
                },
                command : [
                    'echo "changing image folder"',
                    'cp -r src/WebD/assets src/WebD/images'
                ].join('&&')
            },
            copyWebDIndex: {
                options: {
                    stdout : true
                },
                command : [
                    'echo "copping index.html"',
                    'cp src/WebD/index.* src/WebD/indexConverting.html'
                ].join('&&')
            },
            changeNameIndex : {
                options: {
                    stdout : true
                },
                command : [
                    'echo "changing indexConverting.html to webD.html"',
                    'mv src/WebD/indexConverting.* src/WebD/webD.html'
                ].join('&&')
            },
            movingAssetstoSrc : {
                options: {
                    stdout : true
                },
                command : [
                    'echo "copping assets to src folder"',
                    'mv src/WebD/{webD.html,images,codes}  src/'
                ].join('&&')
            },
            removeWebD : {
                options: {
                    stdout : true
                },
                command : [
                    'echo "removing WebD folder"',
                    'rm -rf src/WebD/'
                ].join('&&')
            }
        },
        osdetect: {
        taskMap: {
            'linux': ['someCommonTask:linux'],
            'osx': ['someCommonTask:osx', 'someOtherTask:osx']
            }
        },
        processhtml: {
          
            styles: {
                  files: {
                    /*'index.html': ['index.html']*/ 
                    'src/webD/indexConverting.html': ['src/WebD/indexConverting.html']
                  }
            },
            initScript: { 
                  files: {
                    'src/webD/indexConverting.html': ['src/WebD/indexConverting.html']
                  }
            },
            importWebDMarkup: { //enviroment greg
                  options: {
                    data: {
                      headSection:'', //assign in importContentToIndex task
                      bodySection:'' //assign in importContentToIndex task
                    }
                  },
                  files: {
                    'src/index.html': ['src/index.html']
                  }
            }
         }


       
    });

     //change directory for npm modules 
    var cwd = process.cwd();
    process.chdir(('../../..'));
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
    process.chdir(cwd);

    
    //custom grunt task 
    grunt.task.registerTask('appendFileCSS', 'append style tags to exisisting css file', function() {

    var done = this.async() ;
    fs.readFile('src/WebD/indexConverting.html',"utf-8", function (err,data) {
               if (err) {
                   return console.error(err);
               }


               //change <style> tags into link tag

               var contentStyle = /<style.+>(.+)<\/style>/gm;
               var contentStyle4 = /<!--css--><!-- \/build -->/gm;
               var cssContent = data.match(contentStyle);
               var selectedContent="";
               var content=data;

               for(var i=0;i<cssContent.length;i++){
                    var contentStyle1 = /<style.+>(.+)<\/style>/gm;
                    var set = contentStyle1.exec(cssContent[i]);
                    selectedContent = selectedContent+';'+set[1];

                    if(i==cssContent.length-1){    
                      /*var stream = fs.createWriteStream("src/WebD/matrix_extra_style.css");
                       stream.once('open', function(fd) {
                         stream.write(selectedContent);
                         stream.end();
                       });*/
                         grunt.file.write('src/WebD/matrix_extra_style.css', selectedContent);


                      var cssContent4 = data.match(contentStyle4);
                       //mark the last </style> for proccess html later 
                       content = content.replace(cssContent4[0],'\n</style><!--css--><!-- \/build -->\n<style> html,body{width:100%;height:100%} </style>\n<!-- build:template:styles\n<link href="matrix_extra_style.css" rel="stylesheet">\n/build -->\n');

                    }

               };

               //find custom script and swap with script link;
               var customCode = /<script type="text\/javascript" gwd-events="handlers">([\n\s\w\W]+?)<\/script>/gm
               var customCodeContent = customCode.exec(data);
               var selectedCustomCode=customCodeContent[1];


               /* var streamCode = fs.createWriteStream("src/WebD/custom_code.js");
                         streamCode.write(selectedCustomCode);
                         streamCode.once('open', function(fd) {
                         streamCode.end();

                         THIS ONE SUCKS use grunt.file.write insted 
                });*/
                grunt.file.write('src/WebD/custom_code.js', selectedCustomCode);


                       //mark this ending script </script> for proccess html later 
                       content = content.replace(customCode,'<!-- build:template:initScript\n<script src="custom_code.js"></script>\n/build -->');
                       //write apendedContent
                       //fs.writeFile('src/WebD/index.html', content, 'utf8');
                       grunt.file.write('src/WebD/indexConverting.html', content)

             done();

            });


    });//grunt custom tag;


    //custom grunt task 
    grunt.task.registerTask('importContentToIndex', 'importing WebD content into index.html', function() {

      var done = this.async();
      fs.readFile('src/WebD.html',"utf-8", function (err,data) {

                //grab <head> content;
               var contentHead = /<!--head-content-WebD-->[\W\w]+<!--head-content-WebD-->/g;
               var contentHeadSelection = data.match(contentHead);
               headContentMarkUp = contentHeadSelection[0];


               //console.log('headContentMarkUp');
               //console.log(headContentMarkUp);


                //grab <body> content;
               var contentBody = /<!--body-content-WebD-->[\W\w]+<!--body-content-WebD-->/g;
               var contentBodySelection = data.match(contentBody);
               var mainContentMarkUp = contentBodySelection[0];


                var headSection = headContentMarkUp;
                var bodySection = mainContentMarkUp;

                grunt.config.set('processhtml.importWebDMarkup.options.data.headSection', headSection);
                grunt.config.set('processhtml.importWebDMarkup.options.data.bodySection', bodySection);
              
        done();
        })

    });


    //custom grunt task 
    grunt.task.registerTask('checkIndexMarkup', 'converting back to template for importContentToIndex task', function() {

      var done = this.async();
      fs.readFile('src/index.html',"utf-8", function (err,data) {

                //grab <head> content;
               var contentHead = /<!--head-content-WebD-->[\W\w]+<!--head-content-WebD-->/g;
               var contentHeadSelection = data.match(contentHead);

               //console.log('contentHeadSelection');
               //console.log(contentHeadSelection);


               if(contentHeadSelection){
                     headContentMarkUp = contentHeadSelection[0];
                     data = data.replace(headContentMarkUp ,'<!-- build:template:importWebDMarkup\n<%= headSection %>\n/build -->');
               }

                
              var contentBody = /<!--body-content-WebD-->[\W\w]+<!--body-content-WebD-->/g;
              var contentBodySelection = data.match(contentBody);
              if(contentBodySelection){
                    //grab <body> content;
                    var mainContentMarkUp = contentBodySelection[0];
                    data = data.replace(mainContentMarkUp ,'<!-- build:template:importWebDMarkup\n<%= bodySection %>\n/build -->');
              }



              //if selected content exists;
              if(contentHeadSelection && contentBodySelection){
                    grunt.file.write('src/index.html', data);
              }
              
        done();
        })

    });


   


    // Default task.
    grunt.registerTask('default', [
        'clean:init',
        'shell:copyWebDIndex',
        'replace:markContentHead',
        'appendFileCSS',
        'processhtml:styles',
        'processhtml:initScript',
        'copy',
        //'clean:after',
        'shell:changeNameFolder',
        'replace:replacePath',
        'replace:replaceSource',
        'shell:changeNameIndex',
        /*'concat',*/
        'shell:movingAssetstoSrc',
        //'shell:removeWebD',
        'checkIndexMarkup',
        'importContentToIndex',
        'processhtml:importWebDMarkup',
        'clean:removeWebDHTML', //optional to remove webD.html
        
        ]);

    



};
