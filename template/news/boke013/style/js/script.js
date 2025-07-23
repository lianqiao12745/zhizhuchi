jQuery.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {
		callback.call(this, args);
	}
	return this;
};

(function($) {

	var makanewsLite = {
		initAll: function() {
			this.scrollTop();
			this.toggledMenu();
			this.searchShow();
			this.stickyMenu();
			this.socialSharer();
			this.ajaxSendMail();
			this.loadSocialScript(document, 'script');
			if (typeof loadStyle != 'undefined') {
				if (loadStyle === 'infinite') {
					this.infiniteScroll();
				} else {
					this.infiniteLoading();	
				}
			}
		},
		ajaxSendMail: function() {
        	$( "#tc_cotact_form" ).on( "submit", function( event ) {

        		var frmData = $(this).serialize();
        		var that = this;
        		$.ajax({
					url: AdminAjaxURL.ajaxurl,
					type: 'POST',
					data: frmData,
					success: function (data) {
						if ( $('#tc_cotact_form .msg').length == '0' ) {
							$(that).append('<div class="msg">' + data + '</div>')
						}
					}
				});

				event.preventDefault();
			});
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
		searchShow: function() {
			$('#trigger-overlay').on('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.overlay-slideleft').toggleClass('show');
				$('.search-row').find('input').focus();
			});
			$('.overlay-close').on('click', function(e){
				e.preventDefault();
				e.stopPropagation();
				$('.overlay-slideleft').removeClass('show');
			});
			$(document).on('click', function(e){
				$('.overlay-slideleft').removeClass('show');
			});
			$('.overlay-slideleft').click(function(e){
				e.preventDefault();
				e.stopPropagation();
			});

		},
		toggledMenu: function() {
			var $top_menu = $('#top-menu');
			var $secondary_menu = $('#menu-main-menu');
			var $first_menu = '';
			var $second_menu = '';

			$('.sub-menu').parent().append('<span class="arrow-menu"><i class="fa fa-plus"></i></span>');

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
					$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
					$(this).prev('ul.sub-menu').slideUp();
				} else {
					$(this).prev('ul.sub-menu').slideDown();
					$(this).addClass('sub-menu-open');
					$(this).find('i').removeClass('fa-plus').addClass('fa-minus');
				}

			});

		},
		scrollTop : function() {
			$(".back-to-top").click(function () {
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});

			$(document).scroll ( function() {
				var topPositionScrollBar = $(document).scrollTop();
				if ( topPositionScrollBar < "150" ) {
					$(".back-to-top").fadeOut();
				} else {
					$(".back-to-top").fadeIn();
				}
			});
		},
		infiniteLoading: function() {
    	var pageNumber = 2;
    	
			jQuery("#load-more-post").on('click', function(e) {

				if ( pageNumber <= totalPages ) {
					var that = this;
					e.preventDefault();
					jQuery.ajax({
				        url: AdminAjaxURL.ajaxurl,
				        type:'POST',
				        data: "action=infinite_scroll&page_no="+ pageNumber + '&loop_file=content',
				        beforeSend : function() {
				        	jQuery(that).html(jQuery(that).data('loading'));
				        }
				        
				    }).done(function(html) {
				    	jQuery("#load-more-wrap").before(html); 
				        jQuery(that).html(jQuery(that).data('more'));
				    });
					pageNumber++;

					if ( pageNumber > totalPages ) {
						jQuery(this).parent().hide();
					}
				}

				e.preventDefault();
			});
		
    },

    infiniteScroll: function() {
    	var pageNumber = 2;
    	var isLoading = false;
    	jQuery(window).scroll(function(){
    		
            if($(window).scrollTop() + $(window).height() > $('#main').height()) {

            	if (pageNumber <= totalPages && isLoading === false) {
                 	jQuery.ajax({
			            url: AdminAjaxURL.ajaxurl,
			            type: 'POST',
			            data: "action=infinite_scroll&page_no="+ pageNumber + '&loop_file=content',
			            beforeSend: function () {
				        	isLoading = true;
				        	$('.scroll-loading').show();
			            },
			            success: function (data) {
			                jQuery("#main").append(data); 
					    	isLoading = false;
					    	pageNumber++;
					   		$('.scroll-loading').removeAttr('style');
			            }
			            
			        });
			        
                }
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
		loadSocialScript: function(d,s) {
			var js, fjs = d.getElementsByTagName(s)[0],
			load = function(url, id) {
				if (d.getElementById(id)) {
					return;
				}
				js = d.createElement(s);
				js.src = url;
				js.id = id;
				fjs.parentNode.insertBefore(js, fjs);
			};
			$('span.facebookbtn, .fb-like-box').exists(function() {
				load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
			});
			$('span.gplusbtn').exists(function() {
				load('https://apis.google.com/js/plusone.js', 'gplus1js');
			});
			$('span.twitterbtn').exists(function() {
				load('//platform.twitter.com/widgets.js', 'tweetjs');
			});
			$('span.linkedinbtn').exists(function() {
				load('//platform.linkedin.com/in.js', 'linkedinjs');
			});
			$('span.pinbtn, .tc-pinterest-profile').exists(function() {
				load('//assets.pinterest.com/js/pinit.js', 'pinterestjs');
			});
			$('span.stumblebtn').exists(function() {
				load('//platform.stumbleupon.com/1/widgets.js', 'stumbleuponjs');
			});
		},
		skipLinkFocusFix: function() {
			var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
			is_opera	= navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
			is_ie		= navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

			if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
				window.addEventListener( 'hashchange', function() {
					var element = document.getElementById( location.hash.substring( 1 ) );

					if ( element ) {
						if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
							element.tabIndex = -1;

						element.focus();
					}
				}, false );
			}
		}
	};

	$(document).ready(function() {
		makanewsLite.initAll();
	});	

	$(window).load(function(){
		var $items = 5;
		if ($('body.home.blog').hasClass('no-sidebar-post')) {
			$items = 7;
		}

		var sync1 = $('#slider');
  		var sync2 = $('#controlNav');
  		$('.section-slide').removeClass('loading');
		
 
  		sync1.owlCarousel({					
			loop: true,
			autoplay: true,
			singleItem : true,
			slideSpeed : 500,
			navigation: true,
			pagination: false,
			afterAction : syncPosition,
			responsiveRefreshRate : 200,
  		});
 
  		sync2.owlCarousel({
			items : $items,
			itemsDesktop      : [1199,5],
			itemsDesktopSmall     : [979,5],
			itemsTablet       : [768,5],
			itemsMobile       : [479,3],
			pagination:false,
			responsiveRefreshRate : 100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("synced");
			}
			});
 
		function syncPosition(el){
			var current = this.currentItem;
				$("#controlNav")
					.find(".owl-item")
					.removeClass("synced")
					.eq(current)
					.addClass("synced")
					if($("#controlNav").data("owlCarousel") !== undefined){
					center(current)
				}
  		}		
 
		$("#controlNav").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = $(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
 
		function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
				if(num === sync2visible[i]){
					var found = true;
				}
		}
 
		if(found===false){
			if(num>sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", num - sync2visible.length+2)
			}else{
				if(num - 1 === -1){
		  			num = 0;
				}
				sync2.trigger("owl.goTo", num);
			}
		} else if(num === sync2visible[sync2visible.length-1]){
			sync2.trigger("owl.goTo", sync2visible[1])
		} else if(num === sync2visible[0]){
			sync2.trigger("owl.goTo", num-1)
		}

	}
	});

})(jQuery);