// RND number - GLOBAL
//avidmedGlobaRand = Math.floor(Math.random()*2)+1;

/* //random number - demotest
avidmedGlobaRand = Math.floor(Math.random()*2);
if(location.hash.indexOf('demotest')>-1){
    avidmediaLocHash = location.hash;
    avidmediaLocHash = avidmediaLocHash.replace('demotest','');
    avidmediaLocHash = avidmediaLocHash.replace(/#/g,'');
    console.log(avidmediaLocHash);
    avidmedGlobaRand = avidmediaLocHash;
}*/
avidmedGlobaRand = '';
window.ADSPANDABLE_CONFIG_EXT = {};
window.ADSPANDABLE_CONFIG = {
    // Name of directory/creative
    campaign: 'ikea_bedroom_sep17',
    width: '700px',
    height: '400px',
    // mobile
    mobileVersion: false,
    mobileWidth: false,
    mobileHeight: false,
    contentClick: false,
    contentPlay: false,
    contentTeaserAlwaysOn: true,
    scrollDownDelay: 100,
    unitType: "Content-break",
    iphoneVideoEnabled:true,
    // end mobile

    /* //use this only if there is more than one teaser copy
    text: (function(){
        var textSet;

     var textArray = [
            "<strong></strong>"+
            "</br></br>",

            "<strong></strong>"+
            "</br></br>",
        ];

        textSet = textArray[avidmedGlobaRand];
        return textSet;

    }()),*/
    text: "<strong>New IKEA catalogue out now</strong></br></br>"+
    "The new IKEA catalogue is full of ideas to help you improve everyday life at home. Click to discover our newest Bedroom products.",
    // put percentage random number calculation below

    /* teaser in middle
    text: "<img src='https://files.adspdbl.com/campaign-name/img/teaser.jpg' /><style>#teaser-img-wrap {display: none;} p.tteaserText > img {margin:0 auto !important; max-width: 100%; clear: both; display: block; border:1px solid red;}</style>",
    // put percentage random number calculation below */

    addedValue: (function () {
        var rt = false;
        return rt;

    })(),

    /* //use this only if there is more than one teaser image
    additionalData: ''+avidmedGlobaRand,
    teaserImg: (function(){
        var imageArray= [
            "img/teaser01.png",
            "img/teaser02.png",
        ];

        return imageArray[avidmedGlobaRand];
    }()),*/

    additionalData: avidmedGlobaRand,
    teaserImg: 'img/teaser.png',
    teaserHiddenOnClose: false,
    teaserImgMaxWidth: '200px',
    randomNumber: (function () {
        var rn = Math.floor(Math.random() * 10000000);
        return rn;
    })(),
    bottomOfTemplate: false,
    // auto scroll down?
    autoScrollDown: true,
    frequencyCap: 4,
    // use cookie frequency capping (defaults to using the window.name session variable if not)
    cookieCap: true,
    iasViewabilityJavascriptSource: 'https://pixel.adsafeprotected.com/rjss/st/111571/18449473/skeleton.js',
    clickTag: 'https://ad.doubleclick.net/ddm/trackclk/N4419.1312838AVID.COM/B20291798.205299693;dc_trk_aid=405107054;dc_trk_cid=92840477;dc_lat=;dc_rdid=;tag_for_child_directed_treatment='+Math.floor(Math.random()*1e7),
    /* //use this only if there is more than one teaser click tracker
    clickTag:  (function(){
        var linkSet;
        var linkArray = [
        "",
        "",
        ];

        linkSet = linkArray[avidmedGlobaRand];
        return linkSet;

    }()),*/
    vastContentCard:false,

    /*  Function will match an array of keywords against the first 4000 characters in the page.

     Only use a maximum of 300 keywords with it to be on the safe side.

     Returns an array with the key 'matches' true or false and a json string under
     the key 'wordsMatched'.

     To use this from with in this conficg file, call this.kwrd(theArray);
     theArray is teh array of words to find
     */
    kwrd: function (iframe, keywordsArr) {


    },
    // spartan unit id
    spartanUnitId: '3945',
    win_price: '',

    // This function is a callback for Adspandable:init. Function MUST return Boolean.
    // if return type is false Adspandable:init will return false;
    customCode: function () {
        var rt = true;
        var lh = location.href;
        // exclude homepage of newstreet
        if (lh === 'https://www.newstreet.it/') {
            rt = false;
        }

        // no ie9 on content play
        if (document.all && !window.atob && window.ADSPANDABLE_CONFIG.campaign.indexOf('-cp') > -1) {
            rt = false;
        }


        // Make teaser clickable
        var $;
        if (window.top != window.self && document.domain.indexOf('campaigns.adspd') < 0) {

            $ = function (element) {
                return window.ADSPDBLjQuery(element, window.parent.document);
            };
        }
        else {
            $ = window.ADSPDBLjQuery;
        }
        var avidTimeCustom = '';
        var rt = true;
        var lh = location.href;
        // exclude homepage of newstreet
        if (lh === 'https://www.newstreet.it/') {
            rt = false;
        }
        // wrap teaser in link
        var avidTo = function () {
            if ($('#contentTeaser').length > 0) {
                $('#contentTeaser').wrap('<a href="https://reports.adspdbl.com/external-tracking/track.php?redirectAdsp=' + encodeURIComponent(window.ADSPANDABLE_CONFIG.clickTag) + '&ran='+Math.floor(Math.random() * 10000000)+'&supplier=spartan-pmp&spartan_udo_id='+ window.ADSPANDABLE_CONFIG.spartanUnitId +'&prc='+ window.ADSPANDABLE_CONFIG.win_price +'&type=event&state=click&audience=' + window.ADSPANDABLE_CONFIG.additionalData + '&campaign=' + window.ADSPANDABLE_CONFIG.campaign + '&general=&click_title=Teaser Click&resolution=&keyword_data=&domain=' + document.domain + '&path=' + window.location.href + '" target="_blank" />');
                clearTimeout(avidTimeCustom);
            }
            else {
                avidTimeCustom = setTimeout(function () {
                    avidTo();
                }, 800);
            }
        };
        avidTo();


        return rt;
    },
    // The custom filter javascript is for targetting campaigns by either keywords or section. For example if a campaign should only appear on 'mysite/motoring' then you don't want it in the
    // list of campaigns that can be served to a page that's not the 'mysite/motoring' section as its a wasted impression. Equally if the campaign is keyword targetted yet none of the words
    // on the page then the campaign should be removed fron the list of campaigns for that page. The function just needs to contain the logic and return 'true' if the conditions are met and
    // the campaign can appear on that age. Or 'false' for it should not be on that page.
    cdn: true, // true if you want adspandable to load the campaign from the cdn,
    // set this to true to only appear if keywords in page
    keywordMatching: false,
    // client actual view expand tracking
    actualViewClientTrack: 'https://ad.doubleclick.net/ddm/trackimp/N4419.1312838AVID.COM/B20291798.205299693;dc_trk_aid=405107054;dc_trk_cid=92840477;ord='+Math.floor(Math.random()*1e7)+';dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?',
    // client expand tracking
    expandClientTrack: false,
    // client banner tracking
    bannerClientTrack: false,
    // collective teaser tracking ifr teaser is visible
    collectiveLeaveBehindTrack: false,
    // client teaserinview tracking
    teaserInViewTrack: false,
    // paragraph to insert
    paraToInsert: 2,
    // keyword threshold
    keywordThreshold: 1,
    // does publisher use iframeTags?
    iframeTags: false,
    keywords: [],
    customFilterJs: (function () {
        // whatever you place in here gets reg exped pot and is executed independently of this class. It should return true or false as to whether this ad should appear.
        var dd = document.domain;
        var lh = window.location.href;
        var rt = true;
        var head = window.ADSPDBLjQuery("head").html();
        // iframe head for timeout (because their adtags are inside an iframe)
        var ifrHead = window.ADSPDBLjQuery("head", window.parent.document).html();
        var $ = window.ADSPDBLjQuery;



        /* // MOBILE DETECTION


         var ADSPDBLMobile={};
         (function(e){var t=/iPhone/i,n=/iPod/i,r=/iPad/i,i=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,s=/Android/i,o=/IEMobile/i,u=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,a=/BlackBerry/i,f=/Opera Mini/i,l=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,c=new RegExp("(?:"+"Nexus 7"+"|"+"BNTV250"+"|"+"Kindle Fire"+"|"+"Silk"+"|"+"GT-P1000"+")","i");var h=function(e,t){return e.test(t)};var p=function(e){var p=e||navigator.userAgent;this.apple={phone:h(t,p),ipod:h(n,p),tablet:h(r,p),device:h(t,p)||h(n,p)||h(r,p)};this.android={phone:h(i,p),tablet:!h(i,p)&&h(s,p),device:h(i,p)||h(s,p)};this.windows={phone:h(o,p),tablet:h(u,p),device:h(o,p)||h(u,p)};this.other={blackberry:h(a,p),opera:h(f,p),firefox:h(l,p),device:h(a,p)||h(f,p)||h(l,p)};this.seven_inch=h(c,p);this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch;this.phone=this.apple.phone||this.android.phone||this.windows.phone;this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet};var d=new p;d.Class=p;e.isMobile=d})(ADSPDBLMobile);

         // BROWSER DETECTION
         var bowser=function(){function e(e){function o(i){var o=e.match(i);return o&&o.length>1&&o[1]||""}var s,r=o(/(ipod|iphone|ipad)/i).toLowerCase(),n=/like android/i.test(e),a=!n&&/android/i.test(e),t=o(/version\/(\d+(\.\d+)?)/i),d=/tablet/i.test(e),m=!d&&/[^-]mobi/i.test(e);/opera|opr/i.test(e)?s={name:"Opera",opera:i,version:t||o(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)}:/windows phone/i.test(e)?s={name:"Windows Phone",windowsphone:i,msie:i,version:o(/iemobile\/(\d+(\.\d+)?)/i)}:/msie|trident/i.test(e)?s={name:"Internet Explorer",msie:i,version:o(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/chrome|crios|crmo/i.test(e)?s={name:"Chrome",chrome:i,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:r?(s={name:"iphone"==r?"iPhone":"ipad"==r?"iPad":"iPod"},t&&(s.version=t)):/sailfish/i.test(e)?s={name:"Sailfish",sailfish:i,version:o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(e)?s={name:"SeaMonkey",seamonkey:i,version:o(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel/i.test(e)?(s={name:"Firefox",firefox:i,version:o(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e)&&(s.firefoxos=i)):/silk/i.test(e)?s={name:"Amazon Silk",silk:i,version:o(/silk\/(\d+(\.\d+)?)/i)}:a?s={name:"Android",version:t}:/phantom/i.test(e)?s={name:"PhantomJS",phantom:i,version:o(/phantomjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(e)||/rim\stablet/i.test(e)?s={name:"BlackBerry",blackberry:i,version:t||o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:/(web|hpw)os/i.test(e)?(s={name:"WebOS",webos:i,version:t||o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(e)&&(s.touchpad=i)):s=/bada/i.test(e)?{name:"Bada",bada:i,version:o(/dolfin\/(\d+(\.\d+)?)/i)}:/tizen/i.test(e)?{name:"Tizen",tizen:i,version:o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||t}:/safari/i.test(e)?{name:"Safari",safari:i,version:t}:{},/(apple)?webkit/i.test(e)?(s.name=s.name||"Webkit",s.webkit=i,!s.version&&t&&(s.version=t)):!s.opera&&/gecko\//i.test(e)&&(s.name=s.name||"Gecko",s.gecko=i,s.version=s.version||o(/gecko\/(\d+(\.\d+)?)/i)),a||s.silk?s.android=i:r&&(s[r]=i,s.ios=i);var v="";r?(v=o(/os (\d+([_\s]\d+)*) like mac os x/i),v=v.replace(/[_\s]/g,".")):a?v=o(/android[ \/-](\d+(\.\d+)*)/i):s.windowsphone?v=o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):s.webos?v=o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):s.blackberry?v=o(/rim\stablet\sos\s(\d+(\.\d+)*)/i):s.bada?v=o(/bada\/(\d+(\.\d+)*)/i):s.tizen&&(v=o(/tizen[\/\s](\d+(\.\d+)*)/i)),v&&(s.osversion=v);var b=v.split(".")[0];return d||"ipad"==r||a&&(3==b||4==b&&!m)||s.silk?s.tablet=i:(m||"iphone"==r||"ipod"==r||a||s.blackberry||s.webos||s.bada)&&(s.mobile=i),s.msie&&s.version>=10||s.chrome&&s.version>=20||s.firefox&&s.version>=20||s.safari&&s.version>=6||s.opera&&s.version>=10||s.ios&&s.osversion&&s.osversion.split(".")[0]>=6||s.blackberry&&s.version>=10.1?s.a=i:s.msie&&s.version<10||s.chrome&&s.version<20||s.firefox&&s.version<20||s.safari&&s.version<6||s.opera&&s.version<10||s.ios&&s.osversion&&s.osversion.split(".")[0]<6?s.c=i:s.x=i,s}var i=!0,o=e("undefined"!=typeof navigator?navigator.userAgent:"");return o._detect=e,o}();


         //if(ADSPDBLMobile.isMobile.phone)
         //if(ADSPDBLMobile.isMobile.any)
         //if(ADSPDBLMobile.isMobile.tablet)
         //if(ADSPDBLMobile.isMobile.seven_inch)



        // if collective no iphones or windows phones

        if(ADSPDBLMobile.isMobile.any){
            rt = false;
        }

        //****** IF ITS NOT MEANT TO RUN ON DESKTOP THEN UNCOMMENT THIS BELOW ie if(NOT ADSPDBLMobile.isMobile.any) then return false ******
        //if(!ADSPDBLMobile.isMobile.any){
          //  rt = false;
        //}

        if(ADSPDBLMobile.isMobile.android.device && bowser.chrome){
            rt = true;
        }

        if(bowser.opera){
            rt = false;
        }

        // iPAD only for apple
        if(ADSPDBLMobile.isMobile.apple.tablet && bowser.ios){
            rt = true;
        }

        var iOS = parseFloat(('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1]).replace('undefined', '3_2').replace('_', '.').replace('_', '')) || false;

        // iphone ios 10
        if(ADSPDBLMobile.isMobile.apple.phone && bowser.ios && iOS>=10){
            rt = true;
        }

        if (bowser.msie && bowser.version < 10) {
            rt = false;
        }
        */// end if collective

        /* uncomment this for time sensitive targetting - currently only after 6pm here
         var d = new Date();
         var n = d.getHours();
         if (n<18){
         rt = false;
         }
         */


        return rt;
    })(),
    antiKeywordsMatching: false,
    antiKeywords: []


};
