
jQuery(document).ready(function ($) {
	/* ------------------------------------ */
	if($(".site-header").length>0){
		var navTop = $('.site-header').offset().top;
		$(window).scroll(function(){
			if ($(window).scrollTop() > navTop && $(window).width() > 768 ) {
				$('.site-header').addClass('fixed');
			} else {
				$('.site-header').removeClass('fixed');
			}
		});
	}
});

/**
* Main menu
*/
(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        // $(this).find("#menu-button").on('click', function(){
        //   $(this).toggleClass('menu-opened');
        //   var mainmenu = $(this).next('ul');
        //   if (mainmenu.hasClass('open')) { 
        //     mainmenu.hide().removeClass('open');
        //   }
        //   else {
        //     mainmenu.show().addClass('open');
        //     if (settings.format === "dropdown") {
        //       mainmenu.find('ul').show();
        //     }
        //   }
        // });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            // if ($(this).siblings('ul').hasClass('open')) {
            //   $(this).siblings('ul').removeClass('open').hide();
            // }
            // else {
              $(this).siblings('ul').addClass('open').show();
            // }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
	$(document).ready(function() {
		$(".main-navigation ul").menumaker({
			breakpoint: 768,
			format: "multitoggle"
		});
	});

	var mobileItems = $( '.main-navigation' ).clone();
	$( '#slide-out #mobile-menu' ).append( mobileItems ); 

})(jQuery);

//Slide-out Sidebar
jQuery("#slide-out-open").click(function() {
	if( jQuery( this ).hasClass( "slide-out-open" ) ) {
		jQuery("#page").css({overflow:"hidden"});
		jQuery("body").addClass( 'js-nav' );
		jQuery( this ).removeClass('slide-out-open').addClass('slide-out-close');
		return false;
	}
	else if( jQuery( this ).hasClass( "slide-out-close" ) ) {
		jQuery("#page").css({overflow:"auto"});
		jQuery("body").removeClass( 'js-nav' );
		jQuery( this ).removeClass('slide-out-close').addClass('slide-out-open');
		return false;
	}
});

//if ( !Modernizr.csstransforms || !Modernizr.csstransitions || !Modernizr.csstransforms3d) {
	var wdpSlideOpenIE = false ;
	jQuery('#slide-out').hide();
	jQuery("#slide-out-open").click(function() {
		jQuery('#mobile-menu').show();
		jQuery('#slide-out').show();
		//jQuery(this).hide();
		jQuery('#wrapper').css({overflow:"hidden"});
		jQuery('#open-slide-overlay').remove();
		//jQuery('body').append('<div id="open-slide-overlay"></div>');
		wdpSlideOpenIE = true ;
	});

	jQuery(document).on("click", "#open-slide-overlay" , function(){
		if( wdpSlideOpenIE ){
			jQuery('#slide-out').hide();
			jQuery('#mobile-menu').hide();
			jQuery('#slide-out-open').show();
			jQuery('#wrapper').css({overflow:"auto"});
			jQuery(this).remove();
			wdpSlideOpenIE = false ;
		}
	});
//}
//Customer service
jQuery(document).ready(function($){

    /* ----- ???????????? ---- */
    $(document).on("mouseenter", ".customer-service .a", function(){
        var _this = $(this);
        var s = $(".customer-service");
        var isService = _this.hasClass("a-service");
        var isServicePhone = _this.hasClass("a-phone");
        var isQrcode = _this.hasClass("a-qrcode");
        if(isService){ s.find(".d-service").show().siblings(".d").hide();}
        if(isServicePhone){ s.find(".d-phone").show().siblings(".d").hide();}
        if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
    });
    $(document).on("mouseleave", ".customer-service, .customer-service .a-top", function(){
        $(".customer-service").find(".d").hide();
    });
    $(document).on("mouseenter", ".customer-service .a-top", function(){
        $(".customer-service").find(".d").hide(); 
    });
    $(document).on("click", ".customer-service .a-top", function(){
        $("html,body").animate({scrollTop: 0});
    });
    $(window).scroll(function(){
        var st = $(document).scrollTop();
        var $top = $(".customer-service .a-top");
        if(st > 400){
            $top.css({display: 'block'});
        }else{
            if ($top.is(":visible")) {
                $top.hide();
            }
        }
    });
    
}); 


