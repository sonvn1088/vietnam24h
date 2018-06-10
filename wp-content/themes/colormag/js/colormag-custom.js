// For Search Icon Toggle effect added at the top
jQuery(document).ready(function(){
   jQuery(".search-top").click(function(){
      jQuery("#masthead .search-form-top").toggle();
   });
});

jQuery(document).ready(function(){


	jQuery("#scroll-up").hide() ;
	jQuery(function () {
		jQuery(window).scroll(function () {
			var adsTop, adsMaxTop;
			if(jQuery('#secondary').length){
				var lastAside = jQuery('#secondary aside').last();
				if (lastAside.length && jQuery(window).scrollTop() >= lastAside.offset().top + lastAside.outerHeight()) {
					adsMaxTop = jQuery(document).height() - lastAside.offset().top - lastAside.outerHeight()
						- jQuery('#large-ads').height() - jQuery('#colophon').height();

					adsTop = jQuery(window).scrollTop()- lastAside.offset().top - lastAside.height();
					adsTop = adsTop > adsMaxTop?-(jQuery('#colophon').height()+30):0;
					jQuery('#large-ads').addClass('fix');
					jQuery('#large-ads').css({'top': adsTop + 'px'});
				}else{
					jQuery('#large-ads').removeClass('fix');
					jQuery('#large-ads').css({'top': '0px'});
				}
			}



			if (jQuery(window).scrollTop() >= jQuery('#primary').offset().top) {
				jQuery('#scroll-up').fadeIn();

				var verticalMaxTop = jQuery(document).height() - jQuery('#primary').offset().top
					- jQuery('#vertical').height() - jQuery('#colophon').height();

				var verticalTop = jQuery(window).scrollTop()- jQuery('#primary').offset().top;
				var verticalTop = (verticalTop > verticalMaxTop )?(verticalMaxTop-10):(verticalTop+10);

				jQuery('#vertical').addClass('fix');
				jQuery('#vertical').css({'top': verticalTop + 'px'});
			}else{
				jQuery('#scroll-up').fadeOut();
				jQuery('#vertical').removeClass('fix');
				jQuery('#vertical').css({'top': '0px'});
			}


		});
		jQuery('a#scroll-up').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

	console.log(jQuery('#primary').height());
	console.log(jQuery('#secondary').height());
	console.log(jQuery(window).width());

	/*if(jQuery(window).width() >= 768 && jQuery('#primary').height() > jQuery('#secondary').height()){
		jQuery('#large-ads').show();
		jQuery('.ads.desktop').hide();
	}else{
		jQuery('#large-ads').hide();
		jQuery('.ads.desktop').show();
	}*/
});
