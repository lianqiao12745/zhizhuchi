jQuery.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {
		callback.call(this, args);
	}
	return this;
};
(function ($) {
	'use strict';

	var cleaneadproScript = {

		initReady: function() {
			this.stickyMenu();
			this.mobileMenu();
			this.scrollTop();
			this.socialSharer();
			if (typeof load_style != 'undefined') {
				if (load_style === 'paging-infinite') {
					this.infiniteScroll();
				} else {
					this.infiniteLoading();	
				}
			}
		},
		stickyMenu: function() {
			var self = this;

			var catcher = $('#catcher'),
				sticky  = $('#sticky'),
				bodyTop = $('body').offset().top;

			if ( sticky.length ) {
				$(window).scroll(function() {
					self.stickThatMenu(sticky,catcher,bodyTop);
				});
				$(window).resize(function() {
					self.stickThatMenu(sticky,catcher,bodyTop);
				});
			}
		},
		isScrolledTo: function(elem,top) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top - top;
			var elemBottom = elemTop + $(elem).height();

			return ((elemTop <= docViewTop));
		},
		stickThatMenu: function(sticky,catcher,top) {
			var self = this;

			if(self.isScrolledTo(sticky,top)) {
				sticky.addClass('sticky-nav');
				catcher.height(sticky.height());
			} 
			var stopHeight = catcher.offset().top;
			if ( stopHeight > sticky.offset().top) {
				sticky.removeClass('sticky-nav');
				catcher.height(0);
			}
		},
		mobileMenu: function() {
			var $top_menu = $('#top-menu');
			var $secondary_menu = $('#main-menu');
			var $first_menu = '';
			var $second_menu = '';

			$('.sub-menu').parent().append('<span class="arrow-menu"><i class="fa fa-plus-square-o"></i></span>');

			if ($top_menu.length == 0 && $secondary_menu.length == 0) {
				return;
			} else {
				if ($top_menu.length) {
					$first_menu = $top_menu;
					if($secondary_menu.length) {
						$second_menu = $secondary_menu;
					}
				} else {
					$first_menu = $secondary_menu;
				}
			}
			var menu_wrapper = $first_menu
			.clone().attr('class', 'top-menu')
			.wrap('<div id="mobile-menu-wrapper" class="mobile-only"></div>').parent()
			.appendTo('body');
			
			// Add items from the other menu
			if ($second_menu.length) {
				$second_menu.clone().appendTo('#mobile-menu-wrapper');
			}

			$('.menu-toggle').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('#mobile-menu-wrapper').show(); // only required once
				$('body').toggleClass('mobile-menu-active');
			});

			$('#page').click(function() {
				if ($('body').hasClass('mobile-menu-active')) {
					$('body').removeClass('mobile-menu-active');
				}
			});

			if($('#wpadminbar').length) {
				$('#mobile-menu-wrapper').addClass('wpadminbar-active');
			}


			$('.arrow-menu').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				var subMenuOpen = $(this).hasClass('sub-menu-open');

				if ( subMenuOpen ) {
					$(this).removeClass('sub-menu-open');
					$(this).find('i').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
					$(this).prev('ul.sub-menu').slideUp();
				} else {
					$(this).prev('ul.sub-menu').slideDown();
					$(this).addClass('sub-menu-open');
					$(this).find('i').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
				}

			});

		},
		socialSharer: function() {
			if( $('.tc-social-sharing').length ) {
				//Call jqSocialSharer
				$('.tc-social-sharing a').jqSocialSharer();

				$('.btn-hide').on('click', function(e) {
					e.preventDefault();
					var open = $(this).hasClass('active');
					if(!open) {
						$(this).addClass('active');
						$('.sticky-left').addClass('hide-social');
					} else {
						$(this).removeClass('active');
						$('.sticky-left').removeClass('hide-social');
					}
				});
			}
		},
		infiniteLoading: function() {
			var page_pumber = 2;
			var refresh_icon = '<i class="fa fa-refresh"></i> ';

			$('#load-more-post').on('click', function(e) {

				if (page_pumber <= total_pages) {
					var that = this;
					e.preventDefault();
					$.ajax({
						url: cleaneadproAjax.ajaxurl,
						type:'POST',
						data: 'action=infinite_scroll&page_no='+ page_pumber,
						beforeSend : function() {
							$(that).html(refresh_icon + $(that).data('loading'));
							$(that).addClass('active-loading');
						}
					}).done(function(html) {
						$('#main-post').append(html);
						$(that).html(refresh_icon + $(that).data('more'));
						$(that).removeAttr('class');
					});
					page_pumber++;

					console.log(page_pumber + '=== total_pages' + total_pages);

					if ( page_pumber > total_pages ) {
						$(this).parent().hide();
					}
				}
				e.preventDefault();
			});
		},
		infiniteScroll: function() {
			var page_pumber = 2;
			var is_loading = false;
			$(window).scroll(function(){
				
				if($(window).scrollTop() + $(window).height() > $('#main').height()) {

					if (page_pumber <= total_pages && is_loading === false) {
						$.ajax({
							url: cleaneadproAjax.ajaxurl,
							type: 'POST',
							data: 'action=infinite_scroll&page_no='+ page_pumber,
							beforeSend: function () {
								is_loading = true;
								$('.infinite-scroll').fadeIn();
							},
							success: function (data) {
								$('#main #main-post').append(data);
								is_loading = false;
								page_pumber++;
								$('.infinite-scroll').fadeOut();
							}
							
						});
					}
				}
			});
		},
		scrollTop: function() {
			var scroll_des = 'html,body';  
			// Opera does a strange thing if we use 'html' and 'body' together so my solution is to do the UA sniffing thing
			if(navigator.userAgent.match(/opera/i)){
				scroll_des = 'html';
			}
			// Show ,Hide
			$(window).scroll(function () {
				if ($(this).scrollTop() > 130) {
					$('.back-to-top').addClass('filling').removeClass('hiding');
				} else {
					$('.back-to-top').removeClass('filling').addClass('hiding');
				}
			});
			// Scroll to top when click
			$('.back-to-top').click(function () {
				$(scroll_des).animate({ 
					scrollTop: 0
				},{
					duration :500
				});

			});
		}
	}

	$(document).ready(function () {
		cleaneadproScript.initReady();
	});

	$(window).resize(function() {
		var winWidth = parseInt($(window).width());
		if(winWidth >= 1000) {
			$('body').removeClass('mobile-menu-active');
		}
	});

})(jQuery);