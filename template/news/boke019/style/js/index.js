//????????
$(function(){	
    var cubuk_seviye = $(document).scrollTop();
    var header_yuksekligi = $('.header-web').outerHeight();

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();

        if (kaydirma_cubugu > header_yuksekligi){$('.header-web').addClass('gizle');} 
        else {$('.header-web').removeClass('gizle');}

        if (kaydirma_cubugu > cubuk_seviye){$('.header-web').removeClass('sabit');} 
        else {$('.header-web').addClass('sabit');}				

        cubuk_seviye = $(document).scrollTop();	
     });
});

// ????????????
(function($) {
	// Handle click on toggle search button
	
	
	$('#toggle-search').click(function() {
	$('#cover').css('display','block'); //??????????
    $('#cover').css('height',document.body.clientHeight+'px'); //????????????????????????????
		$('#search-form, #toggle-search').toggleClass('open');
		return false;
	
	}
	

	);
	
	// Clicking outside the search form closes it
	$(document).click(function(event) {
		var target = $(event.target);
  
		if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
			$('#search-form, #toggle-search').removeClass('open');
		}
	});
})(jQuery);

// ????????????????
$(document).ready(function() {
	$('.menu-item-has-children a').click(function(){
		if($(this).siblings('ul').css('display')=='none'){
			$(this).parent('li').siblings('li').removeClass('inactives a');
			$(this).addClass('inactives a');
			$(this).siblings('ul').slideDown(200).children('li');
			
		}else{
			
			$(this).removeClass('inactives a');
			$(this).siblings('ul').slideUp(200);
		

		}
	})
});
// ????????????????
	$(document).click(function(){
		$('.nav-list').removeClass('opend')
		   $('#cover').css('display','none');   //??????????
	})
	$('.nav-menu,.nav-list').click(function(e){e.stopPropagation()})
	$('nav').find('.nav-menu').click(function(e){
		$('.nav-list').toggleClass('opend')
		  $('#cover').css('display','block'); //??????????
    $('#cover').css('height',document.body.clientHeight+'px'); //??????????????????????????????
	})
	