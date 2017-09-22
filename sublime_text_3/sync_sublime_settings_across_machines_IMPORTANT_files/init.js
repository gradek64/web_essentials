"use strict";
var jq = jQuery.noConflict();
(function(jq) {
    "use strict";
    jq(document).ready(function() {

        /* Get screen width for functions */
        var jqWindow = jq(window);
        var userScreenWidth = jqWindow.width();

        jqWindow.resize(function() {
            userScreenWidth = jqWindow.width();
        });

        /* jQuery Mobile Menu Detection */
        function isMobileMenuShowing(){
            if(userScreenWidth <= 768) {
                // mobile menu showing
                return true;
            } else {
                return false;
            }
        }

        var docRoot = jq('html, body');

        jq('.team-members,.team-members-details').cycle();
        jq('.testimonial-slideshow').cycle();

        jq('.hero-section').each(function() {
            var secBgImg = jq(this).data('src');
            if (secBgImg) {
                jq(this).css({
                    'background-image': 'url(' + secBgImg + ')'
                });
            }

        });

        jq('.hero-profile-img').each(function() {
            var secBgImg = jq(this).data('src');
            if (secBgImg) {
                jq(this).css({

                    'background-image': 'url(' + secBgImg + ')'
                });
            }

        });


        var hHero = {
            heroBuild: function() {
                var navH = jq('.nav-wrapper').height(),
                    wHeight = jq(window).height(),
                    calHeight = wHeight;
                jq('.hero-section').each(function() {
                    jq(this).css({
                        'height': calHeight + 'px'
                    });
                });

                jq('.herosection-full-height').each(function() {
                    jq(this).css({
                        'height': calHeight + 'px'
                    });
                });
            },
            heroDestroy: function() {
                jq('.hero-section').each(function() {
                    jq(this).css('height', '');
                });
                jq('.herosection-full-height').each(function() {
                    jq(this).css('height', '');
                });
            }
        }

        var sectionFullH = {
            buildHeight: function() {

                jq('.section-full-height').each(function() {
                    var wh = jq(window).height(),
                        secBgImg = jq(this).data('src'),
                        secBgColor = jq(this).data('backcolor');
                    jq(this).css({
                        'height': wh + 'px',
                        'background-color': secBgColor

                    });
                    if (secBgImg) {
                        jq(this).css({

                            'background-image': 'url(' + secBgImg + ')'
                        });
                    }

                    jq(this).children('.map-container').children('.location-map').css({
                        'height': wh + 'px'
                    });
                });


            },
            destroyHeight: function() {
                jq('.section-full-height').each(function() {
                    jq(this).css('height', '');
                });
            }
        }


        jq('.section-header').each(function() {
            var altBgColor = jq(this).parents('.section-full-height').data('backcolor');
            var icoBack = jq(this).children('.header-icon').data('backcolor');
            var icoColor = jq(this).children('.header-icon').data('color');
            var hCheck = jq(this).parents('.section-wrapper').hasClass('dbl-col');
            if (hCheck) {
                jq(this).children('h2').css({
                    'background-color': altBgColor
                });

            }
            jq(this).children('.header-icon').css({
                'background-color': icoBack
            });
            jq(this).children('.header-icon').children('i').css({
                'color': icoColor
            });
        });


        /**===================
         * MObile
         * ===================*/

        // call jRespond and add breakpoints
        var jRes = jRespond([{
            label: 'tablet',
            enter: 0,
            exit: 979
        }, {
            label: 'laptop',
            enter: 980,
            exit: 1199
        }, {
            label: 'desktop',
            enter: 1200,
            exit: 100000
        }]);

        jRes.addFunc({
            breakpoint: 'tablet',
            enter: function() {
                jq('.section-full-height').each(function() {
                    var wh = jq(window).height(),
                        secBgColor = jq(this).data('backcolor');
                    jq(this).css({
                        'background-color': secBgColor
                    });
                });
            },
            exit: function() {

            }
        });
        jRes.addFunc({
            breakpoint: ['desktop', 'laptop'],
            enter: function() {

                hHero.heroBuild();
                sectionFullH.buildHeight();
                jq(window).on('resize', function() {
                    hHero.heroBuild();
                    sectionFullH.buildHeight();
                });

            },
            exit: function() {
                hHero.heroDestroy();
                sectionFullH.destroyHeight();
                jq(window).on('resize', function() {
                    hHero.heroDestroy();
                    sectionFullH.destroyHeight();
                });

            }
        });



        jq('.one-page-nav li a[href*="http"]').each(function() {
            jq(this).addClass("external-link");
        });

        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();

        try {
            jq('.sf-menu').slicknav({
                label: '<span class="menu-closed">MENU</span><span class="menu-open">CLOSE <i class="fa fa-times-circle"></i> </span>',
                duration: 200,
                prependTo: '#mobile-menu',
                                easingOpen: 'easeInOutQuart',
                                closedSymbol: '&#xf10c;',
                openedSymbol: '&#xf192;',
                                closeOnClick: true
            });
        } catch (err) {
            console.log('slicknav is not found')
        }

        try {
            jq.scrollUp({
                scrollName: 'scrollTop', // Element ID
                topDistance: '300', // Distance from top before showing element (px)
                topSpeed: 300, // Speed back to top (ms)
                animation: 'fade',
                animationInSpeed: 200, // Animation in speed (ms)
                animationOutSpeed: 200, // Animation out speed (ms)
                scrollText: '<i class="fa fa-angle-up pulse"></i>', // Text for element
                activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            });
        } catch (err) {
            console.log('scrollTop is not found')
        }

        /**================
         SUPERFISH DROPDOWN
         * ================*/

        if (jq.fn.superfish) {
            jq('.main-nav').superfish({
                hoverClass: 'sfHover', // the class applied to hovered list items
                delay: 100, // the delay in milliseconds that the mouse can remain outside a submenu without it closing
                speed: 'normal', // speed of the opening animation. Equivalent to second parameter of jQuery’s .animate() method
                speedOut: 'fast', // speed of the closing animation. Equivalent to second parameter of jQuery’s .animate() method
                cssArrows: true // set to false if you want to remove the CSS-based arrow triangles
            });
        }


        if (jq.fn.onePageNav) {
            jq('.one-page-nav, .slicknav_menu').onePageNav({
                scrollOffset: 0, // Height of Navigation Bar
                currentClass: 'nav-active',
                easing: 'easeInExpo',
                filter: ':not(.external-link)',
                                changeHash: true
            });
        }

                jq('.scroll-link').on('click', function() {
                    var anchorLink = jq.attr(this, 'href').replace('https://adamdehaven.com/', '');
                    var windowWidth = jq(window).width();
                    var scrollDownPx;
                    if (windowWidth < 768) {
                        scrollDownPx = 40;
                    } else {
                        scrollDownPx = 90;
                    }
                    jq(docRoot).animate({
                        scrollTop: jq(anchorLink).offset().top - scrollDownPx
                    }, 750, 'easeInExpo');
                    return false;
                });

        try {
            jq(".sticky-nav").autofix_anything();
        } catch (err) {

        }

        jq('.profileSelector').each(function(){
            jq(this).socialProfiles({
                animation: 'chain',
                blur: false,
                twitter: jq(this).data('twitter'),
                                facebook: jq(this).data('facebook'),
                pinterest: jq(this).data('pinterest'),
                google: jq(this).data('google'),
                stumbleupon: jq(this).data('stumbleupon'),
                digg: jq(this).data('digg'),
                linkedin: jq(this).data('linkedin'),
                behance: jq(this).data('behance'),
                reddit: jq(this).data('reddit'),
                dribbble: jq(this).data('dribbble'),
                instagram: jq(this).data('instagram'),
                tumblr: jq(this).data('tumblr'),
                apple: jq(this).data('apple'),
                github: jq(this).data('github'),
                mediumblog: jq(this).data('mediumblog')
            });
        });

        jq('.profileSelector').mouseenter(function() {

            jq(this).children('.profile-img-overlay').stop(false, true).fadeIn(300);

            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: false // act on asynchronously loaded content (default is true)
            });
            wow.init();

        }).mouseleave(function(e) {
                        jq(this).children('.profile-img-overlay').stop(false, true).fadeOut(300);
                });

        jq(".s-tabs").on('click', 'a', function(event) {
            event.preventDefault();
            jq(this).parent().addClass("current");
            jq(this).parent().siblings().removeClass("current");
            var tab = jq(this).attr("href");
            jq(".s-tab-content").not(tab).css("display", "none");
            jq(tab).fadeIn('fast');
        });


        /**
         * Animated Number
         */
        jq.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = jq(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                jq({
                    value: start
                }).animate({
                        value: stop
                    }, {
                        duration: duration == undefined ? 500 : duration,
                        easing: ease == undefined ? "swing" : ease,
                        step: function() {
                            $this.text(Math.floor(this.value));
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        },
                        complete: function() {
                            if (parseInt($this.text()) !== stop) {
                                $this.text(stop);
                                if (commas) {
                                    $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                                }
                            }
                        }
                    });
            });
        };


        jq('.animated-number').appear();
        jq(document.body).on('appear', '.numbers-rotate', function() {
            jq('.animated-number').each(function() {
                jq(this).animateNumbers(jq(this).attr("data-value"), true, parseInt(jq(this).attr("data-animate-duration")));
            });
        });

        jq('.skill-sets-list').appear();
        jq(document.body).on('appear', '.skill-sets-list', function() {
            jq('.skill-bar').each(function() {
                jq(this).find('.bar-progressed,.skill-line-mask').animate({
                    width: jq(this).attr('data-percent')
                }, 3000);
            });

            jq('.skill-percent').each(function() {
                var sPer = jq(this).parents('.skill-graph-item').children('.skill-bar').data('percent')
                jq(this).text(sPer);
            });
        });

        /*Animated NUmbers*/

        /*===Appear===*/
        jq('.numeric-stats-wrap').appear();
        jq(document.body).on('appear', '.numeric-stats-wrap', function() {
            jq('.number-rotate').each(function() {
                jq(this).animateNumbers(jq(this).attr("data-value"), true, parseInt(jq(this).attr("data-animation-duration")));
            });

        });

                /*
                 * Slide in/add effects to elements based on http://daneden.me/animate (animate.css)
                 * --------
                 * Possible effects:    anything from stain/css/animate.css
                */
                function slideInObject(element, topOffset, normalDirection, mobileDirection){
                    // If no effects, set defaults
                    topOffset = topOffset || '0'; // Positive # to preload, negative to wait until more scroll
                    normalDirection = normalDirection || 'slideInRight'; // default normal effect
                    mobileDirection = mobileDirection || 'slideInUp'; // default mobile effect
                    /*===Appear===*/
                    jq(element).appear();
                    jq(element).each(function() {
                            jq(this).css({'visibility':'hidden'}).data('appear-top-offset', topOffset);
                            jq(document.body).on('appear', element, function() {
                                if( isMobileMenuShowing() ) {
                                    // mobile menu showing
                                    jq(this).addClass(mobileDirection + ' animated');
                                } else {
                                    // mobile menu not showing
                                    jq(this).addClass(normalDirection + ' animated');
                                }
                                jq(this).css({'visibility':'visible'});
                            });
                    });
                }

                // slide in #experience objects - enable to animate in objects
                // slideInObject('.job-description', '-150');



        /**
         * ANIMATED PROGRESS BAR====*/
        jq('.animated-bar').each(function() {
            var barPer = jq(this).attr('data-percent');
            var bars = jq(this).find('.number-pb').NumberProgressBar({
                duration: 8000


            });
            jq(this).find('.number-pb').css("background-color", jq(this).attr('data-progress-color'));
            jq(this).find('.number-pb-shown').css("background-color", jq(this).attr('data-bar-color'));

            bars.reach(barPer);

        });

        jq('#blog-grid').imagesLoaded(function() {

            var userScreenWidth = jqWindow.width();
            var theItemWidth = 345;
            var theFlexibleWidth = '50%';

            if(userScreenWidth < 992) {
                theItemWidth = 284;
                theFlexibleWidth = '100%';
            } else {
                theItemWidth = 345;
                theFlexibleWidth = '50%';
            }

            // Prepare layout options.
            var options = {
                itemWidth: theItemWidth, // Optional min width of a grid item
                autoResize: true, // This will auto-update the layout when the browser window is resized.
                container: jq('#blog-grid'), // Optional, used for some extra CSS styling
                offset: 20, // Optional, the distance between grid items
                outerOffset: 0, // Optional the distance from grid to parent
                flexibleWidth: theFlexibleWidth // Optional, the maximum width of a grid item
            };
            // Get a reference to your grid items.
            var handler = jq('#blog-grid li');
            var $window = jq(window);
            $window.resize(function() {
                var windowWidth = $window.width(),
                    newOptions = {
                        flexibleWidth: '48%'
                    };
                // Breakpoint
                if (windowWidth < 992) {
                    newOptions.itemWidth = 284;
                    newOptions.flexibleWidth = '100%';
                }
                handler.wookmark(newOptions);
            });
            // Call the layout function.
            handler.wookmark(options);
        });



        jq('.share-this-page').socialShare({
            social: 'facebook,google,linkedin,pinterest,tumblr,twitter',
            whenSelect: true,
            animation: 'launchpadReverse', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
            selectContainer: '.share-this-page'
        });
        jq('.share-this-post').socialShare({
            social: 'facebook,google,linkedin,pinterest,tumblr,twitter',
            whenSelect: true,
            animation: 'launchpadReverse', // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
            selectContainer: '.share-this-post'
        });


        jq('.share-this-page, .profileSelector, .share-this-post').on('click', function(e) {
            e.preventDefault();
        });

                jq('.launchProfileSelector').parent().on('click', function(e){
                    e.preventDefault();
                    jq('#connectOverlay').trigger('click');
                });

        jq('.instagram-stream').each(function(){
            var instUser = jq(this).data('user');
            var clientId = jq(this).data('id');
            jq(this).instagramLite({
                username: instUser,
                clientID: clientId,
                limit: 6,
                urls: true,
                error: function(errorCode, errorMessage) {

                    console.log('There was an error');

                    if (errorCode && errorMessage) {
                        alert(errorCode + ': ' + errorMessage);
                    }
                },
                success: function() {
                    console.log('The request was successful!');
                }
            });

        });

        /*==Twitter Feed==*/
        var item = jq('.widget_twitter').find('ul').addClass('tweet-slide');
        jq('.tweet-slide').owlCarousel({

            navigation: true, // Show next and prev buttons
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoHeight: true,
            transitionStyle: "fade",
            navigationText: ["<i class='fa fa-angle-left'></i> Prev", "Next <i class='fa fa-angle-right'></i>"]

            // "singleItem:true" is a shortcut for:
            // items : 1,
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false

        });

        /* Navbar Search */
        jq('#menu-landing-page-menu, #menu-blog-menu').append(
            '<form class="navbar-form navbar-right navbar-search" role="search" action="https://adamdehaven.com/" method="get">' +
                '<div class="form-group has-feedback">' +
                    '<input type="search" class="form-control" placeholder="SEARCH..." name="s">' +
                    '<button type="submit" class="fa fa-search form-control-feedback"></button>' +
                '</div>' +
            '</form>'
        );
        /* Mobile Search */
        jq('ul.slicknav_nav').prepend(
            '<li><form class="mobile-navbar-search" role="search" action="https://adamdehaven.com/" method="get">' +
                '<div class="form-group">' +
                    '<input type="search" class="form-control" placeholder="Search..." name="s">' +
                '</div>' +
            '</form></li>'
        );



        jq(".justified-post-grid").justifiedGallery({
            sizeRangeSuffixes: {
                lt100: '',
                lt240: '',
                lt320: '',
                lt500: '',
                lt640: '',
                lt1024: ''
            },
            rowHeight: 350,
            fixedHeight: false,
            lastRow: 'justify',
            margins: 3,
            randomize: false,
            captionSettings: {
                animationDuration: 300,
                visibleOpacity: 1,
                nonVisibleOpacity: 0.0
            }
        });

        if(jq.fn.lightGallery){
            jq(".justified-post-grid").lightGallery({
                mode:"fade",
                thumbnail:false
            });
        }

        // Popover
        jq('[data-toggle="popover"]').popover();

        jq('.comment-reply-link').on('click', function(){
            jq(this).addClass('hidden');
            jq('#btn-post-comment').html('<i class="fa fa-reply fa-lg fa-fw"></i> Post Reply');
        });

        jq('body').on('click', '#cancel-comment-reply-link', function(){
            jq('.comment-reply-link.hidden').removeClass('hidden');
            jq('#btn-post-comment').html('<i class="fa fa-comment fa-lg fa-fw"></i> Post Comment');
        });

        // comments collapse
        jq('#respond').appear();
        jq(document.body).on('appear', '#respond', function() {
            jq('#load-comments-button').remove();
            jq('#comments-collapse').collapse('show');
        });

        jq('#load-comments-button').on('click', function() {
            jq(this).remove();
        });

    });
})(jq);
