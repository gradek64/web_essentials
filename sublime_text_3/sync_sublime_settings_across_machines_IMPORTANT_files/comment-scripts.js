"use strict";
var jq = jQuery.noConflict();
(function(jq) {
    "use strict";
    jq(document).ready(function() {

        // Comment form wrap fields in bootstrap column
        jq('#commentform .comment-form-author, #commentform .comment-form-email, #commentform .comment-form-url').wrapAll('<div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 no-left-padding">');

        jq('#commentform').validator({
            'disable' : false
        });

        // Comment submit button and validation
        jq('#btn-post-comment').button();
        jq('#btn-post-comment').on('click', function(){
            var btn = jq(this).button('processing');
            jq('.form-submit').removeClass('recaptcha-prob-invalid');
            jq('#reCaptcha-help-block').text('');
        });

        // Comment form validation
        jq('#commentform').validator().on('submit', function (e) {
            var btn = jq('#btn-post-comment').button('processing');

            // Google ReCaptcha
            var widget_id = jq('#g-recaptcha-0').data('widget-id');
            if ( grecaptcha.getResponse( widget_id ) !== "" ) {
                // user possibly solved captcha
                jq('#reCaptcha-help-block').text('');
                jq('.form-submit').removeClass('recaptcha-prob-invalid');
                ga('send', 'event', 'comment', 'submit', 'blog_comment'); // Log event in Google Analytics
            } else {
                // user probably did not solve capcha
                e.preventDefault();
                btn.button('reset');
                btn.blur();
                jq('.form-submit').addClass('recaptcha-prob-invalid');
                jq('#reCaptcha-help-block').text('The captcha is not valid.');
            }

            if( e.isDefaultPrevented() ) {
              // handle the invalid form...
              btn.button('reset');
              btn.blur();
            }
        });



    });
})(jq);