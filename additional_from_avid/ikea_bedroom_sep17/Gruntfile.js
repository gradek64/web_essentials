/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.

        // Concatinate all of the javascript files in lib and shared functions.
        // Shared functions is last as it has lib dependencies.
        createtag:{

        },
        concat: {

            dist: {
                src: ['src/js/lib/*.js', 'src/js/shared-functionsUncompressed.js'],
                dest: 'dist/js/<%= pkg.name %>.js',
            },
            adspandable : {
                src : 'src/js/adspandable_config.js',
                dest : 'dist/js/adspandable_config.js'
            },
        },

        // Minify the concatinated file.
        uglify: {
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            },
            adspandable: {
                src: '<%= concat.adspandable.dest %>',
                dest: 'dist/js/adspandable_config.js'
            }
        },

        // Check all our scripts for errors and monsters.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                node:true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: false,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    process: true
                }
            },

            all: ['Gruntfile.js', 'src/js/adspandable_config.js']
        },

        // Processhtml uses templating to remove script tags from the
        // unbuilt html file. It creates a new script tag with a source pointing
        // to the minified javascript file.
        processhtml: {
            final:{
                options: {
                    data: {
                        sourcemin: 'js/<%= pkg.name %>.min.js'
                    }
                },

                files: {

                    'dist/index.html': ['src/index.html']
                   /* src : 'src/index.html',
                    dest : 'dist/index.html'*/
                }
            }
        },

        // Copy task
        // Copys images and assets into their respective folders under the dist folder.

        copy : {
            assets : {
                expand : true,
                cwd : 'src/assets/',
                src : ['**/*', '!**/*.jpg'],
                dest : 'dist/assets/'
            },

            images : {
                expand : true,
                cwd : 'src/images/',
                src : '**/*',
                dest : 'dist/images/'
            },
            img : {
                expand : true,
                cwd : 'src/img/',
                src : '**/*',
                dest : 'dist/img/'
            },
            codes : {
                expand : true,
                cwd : 'src/codes/',
                src : ['**.js','**.css'],
                dest : 'dist/codes/'
            },

            posters : {
                expand : true,
                cwd : 'src/assets/',
                src : '**/*.jpg',
                dest : 'src/img/'
            },

            postersDist : {
                expand : true,
                cwd : 'src/assets/',
                src : '**/*.jpg',
                dest : 'dist/img/'
            },

            test : {
                src : 'src/test.html',
                dest : 'dist/test.html'
            },
            vpaid : {
                src : 'src/vpaid.php',
                dest : 'dist/vpaid.php'
            },
            edgeInclude : {
                expand : true,
                cwd : 'src/edge_includes/',
                src : '**/*',
                dest : 'dist/edge_includes/'
            },
            edgeAssets : {
                expand : true,
                cwd : 'src/edge_assets/',
                src : '**/*',
                dest : 'dist/_edge_assets/'
            },
            // glob any edge related files in the root over to the dist
            edgeFiles : {
                expand: true,
                cwd : 'src',
                src : '*edge*',
                dest : 'dist/'
            },
            css : {
                expand : true,
                cwd : 'src/css/',
                src : '**/*',
                dest : 'dist/css/'
            }
        },
        replace: {
            edgeReplace:{
                src: ['src/*edgePreload.js'],
                overwrite:true,
                replacements: [{
                    from: '4E3',
                    to: '20E3'
                }]
            },
            campaignNameReplace:{
                src: 'src/js/adspandable_config.js',
                overwrite: true,
                replacements: [{
                    from: "campaign : ''",
                    to: "campaign : '<%= pkg.name %>'"

                },{
                    from: "campaign: ''",
                    to: "campaign: '<%= pkg.name %>'"
                }]

            },
            campaignIndexReplace:{
                src: 'src/index.html',
                overwrite: true,
                replacements: [{
                    from: "var campaign = '';",
                    to: "var campaign = '<%= pkg.name %>';"

                }]

            },
            contentPlayReplace:{
                src: 'src/js/adspandable_config.js',
                overwrite: true,
                replacements: [{
                    from: /unitType: "Content-break",|unitType: \'Content-break\',/i,
                    to: function(){
                        var str = grunt.template.process('<%= pkg.name %>');

                        var rt = 'unitType: "Content-break",';
                        if(str.indexOf('-cp')>-1){
                            rt = 'unitType: "Content-play",'+"\n"+'    contentTeaserAlwaysOn:false,'+"\n"+'    contentPlay:true,'+"\n";
                        }
                        return rt;
                    }

                }]

            },

            collectiveCdn:{
                src: 'src/js/adspandable_config.js',
                overwrite: true,
                replacements: [{
                    from: /cdn: false,/i,
                    to: function(){
                        var str = grunt.template.process('<%= pkg.name %>');

                        var rt = 'cdn: false,';
                        if(str.indexOf('CLT-')>-1){
                            //rt = 'cdn: true,';
                        }
                        return rt;
                    }

                }]

            },

            //Replace empty videoOpen() function if there are any videos uploaded. Grabs the array of files from taskHelper
            videoReplace:{
                src: 'src/js/shared-functionsUncompressed.js',
                overwrite: true,
                replacements: [{
                    from: "openVideo('','intro',true)",
                    to: function() {
                        var src = grunt.template.process('<%= taskHelper.deploy.options.filesArray %>');
                        if (!src) {
                            return "openVideo('','intro',true)";
                        }
                        src = grunt.template.process('<%= taskHelper.deploy.options.filesArray[0].src %>');
                        var fileNameBegins = src.lastIndexOf("/") + 1;
                        var fileNameEnds = src.lastIndexOf(".");
                        var fileName = src.slice(fileNameBegins, fileNameEnds);
                        var fileNamePoster = src.slice(fileNameBegins);
                        return "openVideo('"+fileName+".mp4','intro',true,'"+fileNamePoster.replace('.mp4','')+".jpg')";
                    }
                }]
            }
        },

        //Used by videoReplace task to get an array of mp4s from /assets
        taskHelper: {
            deploy: {
                options: {
                    filesArray: []
                },
                src: 'src/assets/*.mp4'
            }
        },

        // Remove any stray un minified files from dist.
        clean : {
            min : {
                src: ['dist/**/*.js', '!dist/**/*min.js','!dist/codes/*.js', '!dist/js/adspandable_config.js','!dist/*edge*.js', 'src/assets/*.mp4', '!src/assets/*-640.mp4', 'dist/assets/*.mp4', '!dist/assets/*-640.mp4', 'src/assets/*.jpg']
            }
        },

        //This task uploads flash assets to Amazon server
        s3: {
            options: {
                key: 'AKIAIINYPRUELLD3YOBQ',
                secret: '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',
                bucket: 'campaigns-adspdbl-com',
                access: 'public-read',
                encodePaths: false,
                ACL: 'public-read',
                headers: {
                    "Cache-Control": "max-age=0, public",
                    "Expires": new Date(Date.now() + 0).toUTCString()
                }
            },
            campaignToS3img: {
                sync: [
                    {
                        options: { verify: true },
                        src: 'dist/img/*',
                        dest: '<%= pkg.name %>/img/'
                    }
                ]
            },
            campaignToS3assets: {
                sync: [
                    {
                        options: { verify: true },
                        src: 'dist/assets/*',
                        dest: '<%= pkg.name %>/assets/'
                    }
                ]
            },
            campaignToS3js: {
                sync: [
                    {
                        options: { verify: true },
                        src: 'dist/js/*',
                        dest: '<%= pkg.name %>/js/'
                    }
                ]
            },
            campaignToS3other: {
                sync: [
                    {
                        options: { verify: true },
                        src: 'dist/*',
                        dest: '<%= pkg.name %>/'
                    }
                ]
            }
        },

        responsive_videos: {
            encodeWebVideo: {
                options: {
                    sizes: [{
                        width: 640,
                        poster: true
                    }],
                    encodes:[{
                        webm: [
                            {'-vcodec': 'libvpx'},
                            {'-acodec': 'libvorbis'},
                            {'-crf': '25'},
                            {'-b:v': '500k',},
                            {'-q:a': '100'}
                        ],
                        mp4: [
                            {'-vcodec':'libx264'},
                            {'-acodec': 'libfaac'},
                            {'-pix_fmt': 'yuv420p'},
                            {'-q:v': '4'},
                            {'-q:a': '100'},
                            {'-threads': '0'}
                        ]
                    }]
                },
                files: [{
                    expand: true,
                    src: ['src/assets/*.mp4', '!src/assets/*-640.mp4'],
                    dest: ''
                }]
            }
        },

        // This task executes system commands via bash
        shell : {
            // Task to sync dist with the the staging area on the avid server.
            // Rsync is useful for this task as data that has already been sent
            // to the server will not be sent again.
            //
            // dist folder in the staging area will be given the name define in
            // package.json
            homebrewInstall : {
                options: {
                    stdout : true
                },
                command : [
                    'echo "Attempting to install Homebrew..."',
                    'ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"'
                ].join('&&')
            },

            ffmpegInstall : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Attempting to install FFmpeg..."',
                    'brew install ffmpeg --with-libvorbis --with-nonfree --with-gpl --with-libvpx --with-pthreads --with-libx264 --with-libfaac --with-theora --with-libogg'
                ].join('&&')
            },
            mpfourConvert : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Attempting to convert mp4 to mp4"',
                    'for f in $(ls -1 src/assets/*.mp4 | grep -v 640.mp4); do ffmpeg -i "$f" -crf 25 -b:v 500k -vf scale=640:360 -vcodec h264 -acodec aac -strict -2 ${f%.*}-640.mp4 -y; done'
                ].join('&&')
            },
            webmConvert : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Attempting to convert mp4 to webm"',
                    'for f in $(ls -1 src/assets/*.mp4 | grep -v 640.mp4); do ffmpeg -i "$f" -vf scale=640:360 -vcodec libvpx -acodec libvorbis -strict -2 -crf 25 -b:v 500k ${f%.*}-640.webm -y; done'
                ].join('&&')
            },
            hlsConvert : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Attempting to convert mp4 to m3u8"',
                    'for f in $(ls -1 src/assets/*.mp4 | grep -v 640.mp4); do ffmpeg -i "$f" -vcodec libx264 -acodec aac -hls_time 10 -hls_list_size 0 -strict -2 -crf 30 -b:v 500k ${f%.*}-640.m3u8 -y; done'
                ].join('&&')
            },
            createPoster : {
                options: {
                    stdout : true
                },
                command: [
                    'echo "Create poster image"',
                    'for f in src/assets/*.mp4; do ffmpeg -i "$f" -r 1 -t 00:00:05 -f image2 ${f%.*}.jpg -y; done'
                ].join('&&')
            },

            stage : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Syncing dist to avid:~/staging/campaigns/<%= pkg.name %>"',
                    'rsync -r -v -e ssh dist/ avid:~/staging/campaigns/<%= pkg.name %>'
                ].join('&&')
            },

            // Task to to sync dist with the production server
            production : {
                options : {
                    stdout : true
                },
                command : [
                    'echo "Syncing dist to Production"',
                    'rsync -r -v -e ssh dist/ avid:/var/www/sites/adbreak/campaigns/<%= pkg.name %>',
                    'ls'
                ].join('&&')
            }


        }
    });

    // These plugins provide necessary tasks.
    // load task from
    var cwd = process.cwd();
    process.chdir(('../../..'));
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-s3');
    //grunt.loadNpmTasks('grunt-responsive-videos');
    grunt.loadNpmTasks('grunt-task-helper');
    process.chdir(cwd);

    grunt.task.registerTask('createTag', 'Creates a wrapped vast tag if necessary', function() {
      // done tells grunt this task is async and wwaits for promise
      var done = this.async();
      var fileDetails=grunt.file.readJSON('package.json');

      var campaign = fileDetails.name;

      var fs = require('fs');
      fs.readFile('src/js/shared-functionsUncompressed.js',"utf-8", function (err,data) {
        if (err) {
          return console.log(err);
        }
        //data = data.replace("[timestamp]", "timestamp");
        var patt = /var source = ["|'](http.*?");(?!\/\/done)/;
        var source = patt.exec(data);
        if(source!== null){
          source = source[1];
          source = source.replace(/['|"].*?\+.*?\+.*?['|"]/g,'');
          source = source.replace(/['|"].*?\+.*?;/g,'');

          source = source.replace('"','');
          source = source.replace("'",'');


          source = encodeURIComponent(source);

          var appendTag=data;

          // set to hosted video true
          //var hostedVastVideo = true;
          var hostedPatt = /var hostedVastVideo = false/;
          var changeHosted = hostedPatt.exec(data);
          if(changeHosted!==null){
            changeHosted = changeHosted[0];
            appendTag = appendTag.replace(/var hostedVastVideo = false/g,'var hostedVastVideo = true');
          }

          appendTag = appendTag.replace(/var source = .*?";/,'var source = "https://reports.adspdbl.com/vast-tag-generator/?rdr='+source+'&domain="+completeDomain+"&audience="+window.aud+"&supplier=spartan-pmp&campaign="+campaign+"&path="+completeUrlformatted[1];//done');

          if(appendTag.length<20){
            appendTag=data;
          }
          fs.writeFile('src/js/shared-functionsUncompressed.js', appendTag, 'utf8');
        }
        done();
        //var result = data.replace(/string to be replaced/g, 'replacement');

      //  fs.writeFile('src/js/shared-functionsUncompressed.js', result, 'utf8', function (err) {
          // if (err) return console.log(err);
        //});
      });


    });

    //custom grunt task
    grunt.task.registerTask('checkTag', 'checking impression tag and cdn:true', function() {

      var done = this.async();
      var fs = require('fs');
      fs.readFile('src/js/adspandable_config.js',"utf-8", function (err,data) {


               var fileDetails=grunt.file.readJSON('package.json');
               var campaign = fileDetails.name;

                //check unit type;
               var contentPlayClick = /-cp|-cc/g;
               var isContentPlayOrClick = campaign.match(contentPlayClick);

               //check cdn content;
               var cdnTRUE = /cdn:\s?true/g;
               var isTRUE = data.match(cdnTRUE);


               if(isTRUE && !isContentPlayOrClick){

                                    //check actualViewClientTrack: false, /* no tracking provided */
                                    process.stdout.write('cdn:true then check imression tag\n');
                                    var noTrackingProvided = /\/* no tracking provided */;
                                    var noTrackingAllowed = data.match(noTrackingProvided);


                            if(noTrackingAllowed){ console.log("\x1b[32m", '\n*******  NO IMPRESSION ALLOWED - PROCESS PASSED  ********\n'); }
                            else {
                                 //check cdn content;
                                var noTracking = /actualViewClientTrack:\s?false/g;
                                var noTrackingCheck = data.match(noTracking);

                                if(noTrackingCheck){
                                    console.log("\x1b[31m", '\n*******  NO IMPRESSION SET - PROCESS ABORTED  ********\n');
                                    console.log("\x1b[37m","set : \nactualViewClientTrack: false, /* no tracking provided */\n");
                                    process.exit(1);

                                }
                            }

               }

        done();
        })

    });

    // Default task.
    grunt.registerTask('default', ['checkTag','jshint', 'concat', 'uglify','replace:edgeReplace','processhtml:final', /*'shell:homebrewInstall' , 'shell:ffmpegInstall',*/'shell:webmConvert','shell:mpfourConvert','shell:hlsConvert','shell:createPoster','copy', 'clean','taskHelper', 'replace:videoReplace','replace:campaignNameReplace','replace:campaignIndexReplace','replace:contentPlayReplace','replace:collectiveCdn','s3','createTag']);

    // Staging task -- running this task will deploy contents to ~/staging/campaigns/'adname'
    grunt.registerTask('stage', ['shell:stage']);

    // Deployment task -- running this task will deploy out dist to where we will do this.
    grunt.registerTask('production', ['shell:production']);

};
