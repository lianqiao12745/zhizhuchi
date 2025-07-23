/* Project	: ThemeCoutry
 * Files	: Main JS
 * Dev		: ThemeCountry Teams
 * Version 	: 2
 * Created	: 11 Nov 2015
 * Updated	: 06 Jan 2016
 * 
 ====================================*/

// Jquery Iframe Auto Height Plugin. Version 1.2.5 (09.10.2013)
(function($){var uuid=0;var iframeOptions={resizeMaxTry:4,resizeWaitTime:50,minimumHeight:200,defaultHeight:3000,heightOffset:0,exceptPages:"",debugMode:false,visibilitybeforeload:false,blockCrossDomain:false,externalHeightName:"bodyHeight",onMessageFunctionName:"getHeight",domainName:"*",watcher:false,watcherTime:400};$.iframeHeight=function(el,options){var base=this;$.iframeHeight.resizeTimeout=null;$.iframeHeight.resizeCount=0;base.$el=$(el);base.el=el;base.$el.before("<div id='iframeHeight-Container-"+uuid+"' style='padding: 0; margin: 0; border: none; background-color: transparent;'></div>");base.$el.appendTo("#iframeHeight-Container-"+uuid);base.$container=$("#iframeHeight-Container-"+uuid);base.$el.data("iframeHeight",base);base.watcher=null;base.debug={FirstTime:true,Init:function(){if(!('console'in window))console={};'log info warn error dir clear'.replace(/\w+/g,function(f){if(!(f in console))console[f]=console.log||new Function})},Log:function(message){if(this.FirstTime&&this.FirstTime===true){this.Init();this.FirstTime=false}if(base.options.debugMode&&base.options.debugMode===true&&console&&(message!==null||message!=="")){console["log"]("Iframe Plugin : "+message)}},GetBrowserInfo:(function(pub){var matched,browserObj;var uaMatch=function(ua){ua=ua.toLowerCase();if(/*@cc_on/*@if(@_jscript_version<=5.6)1@else@*/0/*@end@*/){ua="msie 6.0"}var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||[];return{browserObj:match[1]||"",version:match[2]||"0"}};matched=uaMatch(navigator.userAgent);browserObj={chrome:false,safari:false,mozilla:false,msie:false,webkit:false};if(matched.browserObj){browserObj[matched.browserObj]=true;browserObj.version=matched.version}if(browserObj.chrome){browserObj.webkit=true}else if(browserObj.webkit){browserObj.safari=true}pub=browserObj;return pub}(this.GetBrowserInfo||{}))};var isThisCDI=function(){try{var contentHtml;if(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0"){contentHtml=base.$el.get(0).contentWindow.location.href}else{contentHtml=base.$el.get(0).contentDocument.location.href}base.debug.Log("This page is non-Cross Domain - "+contentHtml);return false}catch(err){base.debug.Log("This page is Cross Domain");return true}};base.resetIframe=function(){if(base.options.visibilitybeforeload&&!(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0"))base.$el.css("visibility","hidden");base.debug.Log("Old Height is "+base.$el.height()+"px");base.$el.css("height","").removeAttr("height");base.debug.Log("Reset iframe");base.debug.Log("Height is "+base.$el.height()+"px after reset")};base.resizeFromOutside=function(event){if(base.options.blockCrossDomain){base.debug.Log("Blocked cross domain fix");return false}if(typeof event==="undefined")return false;if(typeof event.data=="string"){if(event.data=="reset"){base.$el.css("height","").removeAttr("height")}else{if(!/^ifh*/.test(event.data))return false;if(typeof parseInt(event.data.substring(3))!="number")return false;var frameHeightPx=parseInt(event.data.substring(3))+parseInt(base.options.heightOffset);base.resetIframe();base.setIframeHeight(frameHeightPx)}}else{return false}return true};base.checkMessageEvent=function(){if(base.options.blockCrossDomain||(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0")){base.debug.Log("Blocked cross domain fix");return false}base.resetIframe();if(base.options.visibilitybeforeload&&!(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0"))base.$el.css("visibility","visible");if(window.addEventListener){window.addEventListener('message',base.resizeFromOutside,false)}else if(window.attachEvent){window.attachEvent('onmessage',base.resizeFromOutside)}if(!base.$el.id){base.$el.id="iframe-id-"+(++uuid)}var frame=document.getElementById(base.$el.attr("id"));var message=base.options.onMessageFunctionName;if(frame.contentWindow.postMessage){frame.contentWindow.postMessage(message,"*")}else{base.debug.Log("Your browser does not support the postMessage method!");return false}base.debug.Log("Cross Domain Iframe started");return true};var tryFixIframe=function(){if($.iframeHeight.resizeCount<=base.options.resizeMaxTry){$.iframeHeight.resizeCount++;$.iframeHeight.resizeTimeout=setTimeout($.iframeHeight.resizeIframe,base.options.resizeWaitTime);base.debug.Log($.iframeHeight.resizeCount+" time(s) tried")}else{clearTimeout($.iframeHeight.resizeTimeout);$.iframeHeight.resizeCount=0;base.debug.Log("set default height for iframe");base.setIframeHeight(base.options.defaultHeight+base.options.heightOffset)}};base.sendInfotoTop=function(){if(top.length>0&&typeof JSON!="undefined"){var data={};data[base.options.externalHeightName].value=$(document).height();var domain='*';data=JSON.stringify(data);top.postMessage(data,domain);base.debug.Log("sent info to top page");return false}return true};base.setIframeHeight=function(_height){base.$el.height(_height).css("height",_height);if(base.$el.data("iframeheight")!=_height)base.$container.height(_height).css("height",_height);if(base.options.visibilitybeforeload&&!(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0"))base.$el.css("visibility","visible");base.debug.Log("Now iframe height is "+_height+"px");base.$el.data("iframeheight",_height)};$.iframeHeight.resizeIframe=function(){base.resetIframe();if(isThisCDI()){base.$el.height(base.options.defaultHeight+base.options.heightOffset).css("height",base.options.defaultHeight+base.options.heightOffset);if(base.options.visibilitybeforeload&&!(base.debug.GetBrowserInfo.msie&&base.debug.GetBrowserInfo.version=="7.0"))base.$el.css("visibility","visible");base.checkMessageEvent()}else{if(base.$el.css("height")===base.options.minimumHeight+"px"){base.resetIframe()}if(base.$el.get(0).contentWindow.document.body!==null){base.debug.Log("This page has body info");var _pageHeight=$(base.$el.get(0).contentWindow.document).height();var _pageName=base.$el.get(0).contentWindow.document.location.pathname.substring(base.$el.get(0).contentWindow.document.location.pathname.lastIndexOf('/')+1).toLowerCase();base.debug.Log("page height : "+_pageHeight+"px || page name : "+_pageName);if((_pageHeight<=base.options.minimumHeight&&base.options.exceptPages.indexOf(_pageName)==-1)){tryFixIframe()}else if(_pageHeight>base.options.minimumHeight&&base.options.exceptPages.indexOf(_pageName)==-1){base.setIframeHeight(_pageHeight+base.options.heightOffset)}}else{base.debug.Log("This page has not body info");tryFixIframe()}}};this.$el.bind("updateIframe",function(){$.iframeHeight.resizeIframe();base.debug.Log("Updated Iframe Manually")});this.$el.bind("killWatcher",function(){window.clearInterval(base.watcher);base.debug.Log("Killed Watcher")});base.init=function(){base.options=$.extend({},$.iframeHeight.defaultOptions,options);if(base.options.watcher==true)base.options.blockCrossDomain=true;base.debug.Log(base.options);if(base.$el.get(0).tagName===undefined||base.$el.get(0).tagName.toLowerCase()!=="iframe"){base.debug.Log("This element is not iframe!");return false}$.iframeHeight.resizeIframe();base.$el.load(function(){$.iframeHeight.resizeIframe()});if(base.options.watcher){base.watcher=setInterval(function(){$.iframeHeight.resizeIframe();base.debug.Log("Checked Iframe")},base.options.watcherTime)}return true};base.init()};$.iframeHeight.defaultOptions=iframeOptions;$.fn.iframeHeight=function(options){return this.each(function(){(new $.iframeHeight(this,options))})};$.iframeHeightExternal=function(){if(arguments.length===1){if($.isPlainObject(arguments[0])){iframeOptions=arguments[0]}}if(window.addEventListener){window.addEventListener("message",OnMessage,false)}else if(window.attachEvent){window.attachEvent("onmessage",OnMessage)}function OnMessage(event){var _domain;if('domain'in event){_domain=event.domain}if('origin'in event){_domain=event.origin}if(iframeOptions.domainName!=="*"){if(_domain!==iframeOptions.domainName){$.iframeHeight.debug.Log("It's not same domain. Blocked!");return}}if(event.data==iframeOptions.onMessageFunctionName){var message="ifh"+$(document).height();event.source.postMessage(message,event.origin)}}return{update:function(){this.reset();window.__domainname=iframeOptions.domainName;setTimeout(function(){var message="ifh"+$(document).height();parent.postMessage(message,window.__domainname)},90)},reset:function(){parent.postMessage("reset",iframeOptions.domainName)}}}})(jQuery);

(function($) {
	'use strict';

	var ThemeCountry = {
		initAll: function() {
			this.promotion();
			this.stickyMenu();
			this.loginUser();
			this.mobileMenu();
			this.ourThemes();
			this.testimonial();
			this.themes();
			this.themeInfo();
			this.showHideThemeSelect();
			this.bodyScroll();
			this.resizeScreen();
			this.changedLog();
			this.accordion();
			this.greatDeal();
			this.pinterest();
			this.footerWidget();
			this.moreTextTestimonials();
		},
		moreTextTestimonials: function() {
			$('.testimonials-list .testimonial-more-text a').on('click', function(e) {
				e.preventDefault();
				
				var tastimonialsClass = $(this).parents('.slider-item');
				var tastimonialsHieght = tastimonialsClass.find('.testimonial-desc p').height();
				$('.testimonial-desc').removeAttr('style');
				
				if ( $(this).parents('.slider-item').hasClass('testimonial-show') ) {
					$(this).parents('.slider-item').removeClass('testimonial-show');
				} else {
					$('.testimonial-desc').removeAttr('style');
					$('.slider-item').removeClass('testimonial-show');
					$(this).parents('.slider-item').addClass('testimonial-show');
					$(this).parents('.slider-item').find('.testimonial-desc').height( tastimonialsHieght + 50 );
				}

			});
		},
		stickyMenu: function() {
			if($('#price-box').length) {
				var topPriceBox = parseInt($('#price-box').offset().top);
			}
			var headerHeight = parseInt($('#masthead').outerHeight() + $('.promotion').outerHeight());
			$(document).scroll( function() {
				var topPositionScrollBar = $(document).scrollTop();
				var windowWidth = $(window).width();
				if (topPositionScrollBar && windowWidth > 980) {
					$('#masthead, body.home .site .site-content').addClass('fixed');
				} else if ($('#masthead').hasClass('fixed') && topPositionScrollBar < '50' ) {
					$('#masthead, body.home .site .site-content').removeClass('fixed');
				}
				if ( topPositionScrollBar < '150' ) {
					$('.back-to-top').hide();
				} else {
					$('.back-to-top').show();
				}

				if ($('#price-box').length) {
					if (topPriceBox <= (topPositionScrollBar + topPriceBox - headerHeight)) {
						$('#price-box').css({
							position	: 'fixed',
							top			: (topPriceBox / 2) + 'px'
						});
					} else {
						$('#price-box').css({
							position	: 'relative',
							top			: 0
						});
					}
				}
			});
		},
		mobileMenu: function() {
			$('.toggle-mobile-menu').on('click', function(e) {
				var hasActive = $(this).hasClass('active');
				var loginOpen = $('.login-user').hasClass('active');

				if(!loginOpen) {
					if (!hasActive) {
						$('#menu-main-menu').slideDown();
						$(this).addClass('active');
					} else {
						$('#menu-main-menu').slideUp();
						$(this).removeClass('active');
					}
				} else {
					$('.login-menu').slideUp();
					$('.login-user').removeClass('active');
					if (!hasActive) {
						$('#menu-main-menu').slideDown();
						$(this).addClass('active');
					} else {
						$('#menu-main-menu').slideUp();
						$(this).removeClass('active');
					}
				}
				e.preventDefault();
			});

			$('#site-navigation > .login-user').on('click', function(e) {
				var hasActive = $(this).hasClass('active');
				var menuOpen = $('.toggle-mobile-menu').hasClass('active')

				if(!menuOpen) {
					if (!hasActive) {
						$('.login-menu').slideDown();
						$(this).addClass('active');
					} else {
						$('.login-menu').slideUp();
						$(this).removeClass('active');
					}
				} else {
					$('#menu-main-menu').slideUp();
					$('.toggle-mobile-menu').removeClass('active');
					if (!hasActive) {
						$('.login-menu').slideDown();
						$(this).addClass('active');
					} else {
						$('.login-menu').slideUp();
						$(this).removeClass('active');
					}
				}

				e.preventDefault();
			});

		},
		promotion: function() {

			var promoHeight = parseInt($('.promotion').outerHeight());
			$('.header').css({'margin-top': promoHeight + 'px'});

			$('.promotion-btn').height(promoHeight);

			$('.promotion-btn').on('click', function(e) {
				e.preventDefault();
				var promotionActive = $(this).hasClass('active');
				var promoHeightInner = parseInt($('.promotion').outerHeight());

				if(!promotionActive) {
					$(this).addClass('active');
					$(this).find('i').attr('class', 'fa fa-chevron-down');
					$('#page').addClass('promotion-close');
					$('.header').removeAttr('style');
					$.cookie('promotionState', 'closed', { expires: 7 });
				} else {
					$(this).removeClass('active');
					$(this).find('i').attr('class','fa fa-chevron-up');
					$('#page').removeClass('promotion-close');

					$('.header').css({'margin-top': promoHeightInner + 'px'});
					$.removeCookie('promotionState');
				}
			});
		},
		loginUser : function() {
			var hasLogin = $('.login-menu').find('.login-success');
			if(hasLogin.length < 1) {
				$('.login-header .login-user').on('click', function(e) {
					e.stopPropagation();
					e.preventDefault();
					var loginActive = $(this).hasClass('active');
					if(!loginActive) {
						$('.login-user').addClass('active');
						$('.login-form').slideDown();
					} else {
						$('.login-form').slideUp();
						$('.login-user').removeClass('active');
					}
				});
			}
		},
		themes: function() {
			$('.themes-section .tab-menu a').on('click', function(e) {
				e.preventDefault();

				var windowWidth = $(window).width();
				var slideNum = 3;
				if(windowWidth <= 676) {
					slideNum = 1;
				}

				var thisId = $(this).attr('href');
				var activeTab = $(this).parent('li').hasClass('active');
				if( !activeTab ) {
					$('.themes-section .tab-item').hide();
					$('.themes-section .tab-menu li').removeClass('active');
					$(this).parent('li').addClass('active');
					$(thisId).show();
					if($('#popular-theme').length) {
						$('#popular-theme .theme-list').slick({
							slidesToShow	: slideNum,
							slidesToScroll	: 1,
							infinite		: true,
							autoplaySpeed	: 5000,
							prevArrow		: '<span class="slider-direction direction-prev">Prev</span>',
							nextArrow		: '<span class="slider-direction direction-next">Next</span>'
						});
					}
				} else {
					e.preventDefault();
				}
				return false;
			});
		},
		ourThemes: function() {
			var windowWidth = $(window).width();
			var slideNum = 3;
			if(windowWidth <= 676) {
				slideNum = 1;
			}

			if($('#lastest-theme').length) {
				$('#lastest-theme .theme-list').slick({
					slidesToShow	: slideNum,
					slidesToScroll	: 1,
					infinite		: true,
					autoplaySpeed	: 5000,
					prevArrow		: '<span class="slider-direction direction-prev">Prev</span>',
					nextArrow		: '<span class="slider-direction direction-next">Next</span>',
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			}
		},
		testimonial: function() {
			if($('.testimonials').length) {
				$('.testimonials .slider').slick({
					infinite		: true,
					speed			: 300,
					slidesToShow	: 3,
					prevArrow		: '<span class="slider-direction direction-prev">Prev</span>',
					nextArrow		: '<span class="slider-direction direction-next">Next</span>',
					adaptiveHeight	: true,
					responsive: [
						{
							breakpoint: 1024,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});
			}
		},
		resizeThemeFrame: function() {
			var elm = $('#switcher').height();
			if ( $('body').hasClass('switcher-hidden') ) {
				$('#iframe').attr('height', $(window).height() + 'px');
			} else {
				$('#iframe').attr('height', $(window).height() - elm + 'px');
			}
		},
		resizeScreen: function() {
			var _self = this;

			if ( $('#iframe').length ) {

				$.iframeHeightExternal('#iframe');

				_self.resizeThemeFrame();

				$(document).on('click', '.toggle', function(e) {
					e.preventDefault();
					if ( $('body').hasClass('switcher-hidden') ) {
						$('body').removeClass('switcher-hidden').addClass('switcher-visible');
						$('#iframe').attr('height', $(window).height() - 50 + 'px');
					} else {
						$('body').removeClass('switcher-visible').addClass('switcher-hidden');
						$('#iframe').attr('height', $(window).height() + 'px');
					}

				});

				var clicked = 'desktop';

				var t = { desktop:'100%',tabletlandscape:1040,tabletportrait:788,mobilelandscape:500,mobileportrait:340,placebo:0 };

				$('.sreen-size a').on('click',function(e){
					e.preventDefault();
					var elm = $(this);

					for(var device in t){
						// console.log(device);
						// console.log(t[device]);

						if(elm.hasClass(device)){
							clicked = device;
							$('#frameWrapper, #iframe').width(t[device]).attr('width', t[device]);
						}
					}
				});

				$('.sreen-size a').on('click', function (e) {
					e.preventDefault();

					$(this).parent().find('a').removeClass('active');
					if ($(this).hasClass('tabletlandscape')) {
						$(this).addClass('active');
						$('#iframe').width('1024');
					} else if ($(this).hasClass('tabletportrait')) {
						$(this).addClass('active');
						$('#iframe').width('768');
					} else if ($(this).hasClass('mobilelandscape')) {
						$(this).addClass('active');
						$('#iframe').width('480');
					} else if ($(this).hasClass('mobileportrait')) {
						$(this).addClass('active');
						$('#iframe').width('320');
					} else {
						$('.desktop').addClass('active');
						$('#iframe').removeAttr('style');
					}
					$('.theme-select').removeClass('active');
				});
			}
		},
		bodyScroll: function() {
			$('.back-to-top').click(function () {
				$('html, body').animate({scrollTop : 0},800);
				return false;
			});
		},
		showHideThemeSelect: function() {
			$('.theme-select').click(function(){
				if ( $(this).hasClass('active') ) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
				}
			});
			
			$('.theme-select ul a').click(function() {
				var themeName = $(this).text();
				$(this).parents('ul.theme-select').find('#tname').text(themeName);
			});
		},
		themeInfo: function() {
			$('.theme-short-info').clone().insertAfter('.theme-left .theme-short-desc');
		},
		changedLog: function() {
			if($('.changed-log').length) {
				$('.changed-log').on('click', function() {
					$('.changed-log-popup-wrapper').show();
					$('html').addClass('popup');
				});
				$('.popup-close').on('click', function() {
					$('.changed-log-popup-wrapper').hide();
					$('html').removeClass('popup');
				});
			}
		},
		accordion: function() {
			var allAccordion = $('.accordion > dd').hide();
			$('.accordion > dt').on('click', function(e) {
				var hasActive = $(this).hasClass('active');

				if (!hasActive) {
					allAccordion.slideUp();
					$(this).next().slideDown();
					$('.accordion > dt').removeClass('active');
					$(this).addClass('active');
				};

				e.preventDefault();
			});
		},
		greatDeal: function() {
			if($('#getting-started').length) {
				var endDate = $('#end-deal-date').text();
				$('#getting-started').countdown(endDate, function(event) {
					$(this).html(event.strftime('<span class="day">%-D</span>day%!D <span class="hours"a>%H</span>h <span class="minute">%M</span>min <span class="second">%S</span>sec'));
				});
			}
		},
		footerWidget: function() {
			var windowWidth = $(window).width();
			if(windowWidth <= 676) {
				$('.footer-widget h2.widget-title').next().hide();
				$('.footer-widget h2.widget-title').on('click', function(e) {
					var hasActive = $(this).hasClass('active');

					if (!hasActive) {
						$(this).next().show();
						$(this).addClass('active');
					} else {
						$(this).removeClass('active');
						$(this).next().hide();
					}
					e.preventDefault();
				});
			}
		},
		pinterest: function() {
			//pinterest
			$('.social-pinterst').on('click', function(e) {
				e.preventDefault();
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
		}
	}

	$(document).ready(function() {
		ThemeCountry.initAll();
	});

	$(window).resize(function() {
		var windowWidth = $(window).width();
		var promoHeight = parseInt($('.promotion').outerHeight());
		if (!$('.promotion-close').length) {
			$('.header').css({'margin-top': promoHeight + 'px'});
		}
		$('.promotion-btn').height(promoHeight);
		ThemeCountry.resizeThemeFrame();
	});

	



})(jQuery);