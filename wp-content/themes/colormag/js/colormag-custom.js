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
			//right scroll
			var lastAside = jQuery('#secondary aside').last();
			var minRightS = lastAside.offset().top + lastAside.outerHeight();
			var maxRightS = jQuery(document).height() - jQuery(window).height() - jQuery('#colophon').height();

			if ( jQuery(window).scrollTop() >= minRightS) {
			    jQuery('#large-ads').addClass('fix');
			    jQuery('#large-ads').css({'top': '0px'});

			    if(jQuery(window).scrollTop() >= maxRightS){
				jQuery('#large-ads').css({'top': -(jQuery(window).scrollTop() - maxRightS)+'px'});
			    }else{
				jQuery('#large-ads').css({'top': '0px'});
			    }
			}else{
			    jQuery('#large-ads').removeClass('fix');
			    jQuery('#large-ads').css({'top': '0px'});
			}

		       /* //left scroll
			var lastIns = jQuery('#vertical ins').last();
			var beforeLastIns = lastIns.prev();

			var minLeftS = beforeLastIns.offset().top + beforeLastIns.outerHeight();
			var maxLeftS = jQuery(document).height() - jQuery(window).height() - jQuery('#colophon').height();

			if ( jQuery(window).scrollTop() >= minLeftS) {
			    beforeLastIns.addClass('fix');
			    beforeLastIns.css({'top': '0px'});

			    if(jQuery(window).scrollTop() >= maxLeftS){
				beforeLastIns.css({'top': -(jQuery(window).scrollTop() - maxLeftS)+'px'});
			    }else{
				beforeLastIns.css({'top': '0px'});
			    }
			}else{
			    beforeLastIns.removeClass('fix');
			    beforeLastIns.css({'top': '0px'});
			}*/
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
