jQuery.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {
		callback.call(this, args);
	}
	return this;
};

(function($) {

	var wimplepro = {
		initAll: function() {
				this.loadSocialScript(document, 'script');
				if (typeof loadStyle != 'undefined') {
					if (loadStyle === 'infinite') {
						this.infiniteScroll();
					} else {
						this.infiniteLoading();	
					}
				}
				this.socialSaring();
				this.featureSlide();
				this.stickyMenu();
				this.scrollTop();
				this.toggledMenu();
				this.skipLinkFocusFix();
		},
		toggledMenu: function() {

			$('.sub-menu').parent().append('<span class="arrow-menu"><i class="fa fa-plus"></i></span>');	


			$('.toggle-menu').on( 'touchstart click', function(e) {
				e.preventDefault();
				if ( $(this).hasClass('toggle-menu-show') ) {
					$(this).removeClass('toggle-menu-show');
					$('.main-navigation .nav-menu').slideUp(400);
				} else {
					$('.main-navigation .nav-menu').slideDown(400);
					$(this).addClass('toggle-menu-show');
				}
			});


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
			
				$('#load-more-post').on('click', function(e) {

					if (pageNumber <= totalPages) {

						var data = {
							action: 'infinite_scroll',
							nonce: TC_AdminAjaxURL.nonce,
							page: pageNumber,
							query: TC_AdminAjaxURL.query,
							page_no: pageNumber
						};

						var that = this;
						e.preventDefault();

						$.ajax({
							url: TC_AdminAjaxURL.url,
								type:'POST',
								data: data,
								beforeSend : function() {
								jQuery(that).html(jQuery(that).data('loading'));
							}
						}).done(function(html) {
							$("#load-more-wrap").before(html); 
							$(that).html(jQuery(that).data('more'));
						});
						pageNumber++;

						if ( pageNumber > totalPages ) {
							$(this).parent().hide();
						}
					}
				});
			
		},
		infiniteScroll: function() {
			var pageNumber = 2;
			var isLoading = false;
			$(window).scroll(function(){

				if($(window).scrollTop() + $(window).height() > $('#main').height()) {

					if (pageNumber <= totalPages && isLoading === false) {

						var data = {
							action: 'infinite_scroll',
							nonce: TC_AdminAjaxURL.nonce,
							page: pageNumber,
							query: TC_AdminAjaxURL.query,
							page_no: pageNumber
						};


						$.ajax({
							url: TC_AdminAjaxURL.url,		
							type: 'POST',
							data: data,
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
		socialSaring: function() {
			var offsetTop = $('#content').offset();

			$('.wmpro-social-sharing.social-sharing-left').css('top', offsetTop.top + 130 );

			jQuery('.social-popup').on('click', function(e){
				var width = 580;
				var height = 470;

				var leftPosition, topPosition;

				leftPosition = (window.screen.width / 2) - ((width / 2) + 10);

				topPosition = (window.screen.height / 2) - ((height / 2) + 50);
				var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";

				var url = $(this).attr('href');
				window.open(url, 'socialSharer', windowFeatures);
				e.preventDefault();
			});

			//pinterest
			$('.social-pinterst').on("click", function(t) {
				t.preventDefault();

				try {
					var e = document.createElement('script');
					e.setAttribute('type', 'text/javascript');
					e.setAttribute('charset', 'UTF-8');
					e.setAttribute('src', '//assets.pinterest.com/js/pinmarklet.js?r=' + Math.random() * 99999999);
					document.body.appendChild(e);
				} catch (e) {

				}

				//record share
				Nova.Social.recordShare($(this).attr('data-socialsite'), $(this).attr('data-location'), Nova.System.articleId);
			});
		},
		featureSlide : function() {
			if($('.single-item-rtl').length) {
				$('.single-item-rtl').slick({
					autoplay: true
				});
			}
		},
		stickyMenu: function() {
			if ( $('.line-layout').hasClass('fixed-menu') ) {

			var nav = $('#site-navigation');
				var navOffset = nav.offset().top;

				$(window).scroll(function(){
					var winScroll = $(window).scrollTop();
					if (winScroll > navOffset) {
						$('#page').addClass('sticky');
					} else {
						$('#page').removeClass('sticky');
					}
				});
			} else if( $('#page').attr('class') != 'line-layout' && $('#page').hasClass('fixed-menu') ) {
				
				var nav = $('.site-header');
				var navOffset = $('.site-header').offset().top;

				$(window).scroll(function(){
					var winScroll = $(window).scrollTop();
					
					if (winScroll > navOffset) {
						$('.fixed-menu').addClass('sticky');
					} else {
						$('.fixed-menu').removeClass('sticky');
					}
					
					if (winScroll > navOffset) {
						$('.line-layout.sticky .site-header').hide();
						nav.css({ 
							position: 'fixed',
							top: '0',
							left: '0',
							zIndex: 999
						});
					} else {
						$('.line-layout.sticky .site-header').show();
						nav.css({ position: 'relative' });
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
		wimplepro.initAll();
	});

	$(window).resize(function() {
		var windowW = $(window).width();

		if (windowW >= 1024) {
			$('.menu-main-menu-container ul').removeAttr('style');
		}
	});

})(jQuery);