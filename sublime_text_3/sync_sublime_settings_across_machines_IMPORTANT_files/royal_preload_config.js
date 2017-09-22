Royal_Preloader.config({
    mode           : 'line', // progress, line, number
    background     : '#1cc3ca',
    showProgress   : true,
    showPercentage : true,
		timeout        : 2,
		onComplete: function() {
			/*if( window.screen.width <= 768 ) {
				// mobile menu showing
				jq('.image-block').addClass('slideInUp animated');
			} else {
				// mobile menu not showing
				jq('.image-block').addClass('slideInRight animated');
			}*/
    }
});