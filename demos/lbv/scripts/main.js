var lbv = {
	debug: false,
	log: function(what)   { if(lbv.debug) { console.log(what); } },
	exists: function(el)  { if($(el).length > 0) { return true; } },

	init: function() {
		
		lbv.bigImage.init();

		lbv.menu.init();

		lbv.separators.init();

	},

	menu: {

		init: function() {

			lbv.menu.langs();
		},

		langs: function() {

			var $en = $('#en'),
				$pt = $('#pt');

			$en.hover(function() {

				$pt.fadeTo('fast',0.5);
			});

			$en.mouseleave(function() {

				$pt.fadeTo( 1, 1);
			});

			$pt.hover(function() {

				$en.fadeTo('fast',0.5);
			});

			$pt.mouseleave(function() {

				$en.fadeTo(1, 1);
			});

		}
	},

	bigImage: {

		init: function()  {

			lbv.bigImage.scroolDown(); // function to scrool down on click in arrow

		},

		scroolDown: function () {

				$('#down').click(function() {

				$('body, html').animate({scrollTop: $('.footer-rights-wraper').offset().top}, 1000,'swing');

				});
		}

	},

	separators: {

		init: function() {

			lbv.separators.open();
		},

		open: function() {

			var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;

			//open team-member bio
			$('.leading-wraper').find('.institution').on('click', function(event){

				var selected_member = $(this).data('type');

				$('.separator.'+selected_member+'').addClass('slide-in');
				$('.close').addClass('is-visible');
				$('.canvas-overlay').addClass('overlay-visible');

				// firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
				if( is_firefox ) {
					$('.page-wraper').addClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$('body').addClass('overflow-hidden');
					});
				} else {
					$('.page-wraper').addClass('slide-out');
					$('body').addClass('overflow-hidden');
				}

			});

			$(document).on('click', '.canvas-overlay, .close', function(event){
				event.preventDefault();
				$('.separator').removeClass('slide-in');
				$('.close').removeClass('is-visible');
				$('.canvas-overlay').removeClass('overlay-visible');

				if( is_firefox ) {
					$('.page-wraper').removeClass('slide-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$('body').removeClass('overflow-hidden');
					});
				} else {
					$('.page-wraper').removeClass('slide-out');
					$('body').removeClass('overflow-hidden');
				}
			});
		}
	}

} || {};

;(function ($, window, undefined) {
	'use strict';

	$(document).ready(function() {
		lbv.init();
	});

})(jQuery, this);