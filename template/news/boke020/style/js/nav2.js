$(function () {
	function P (arg) {
		//console.log(arg);
	}
		/**
		 * ????????????
		 */
		(function () {
			if ($('.nav li') == "undefined") return;
			$('.nav li').hover(function(){
				$(this).addClass('selected');							  
			},function(){
				$(this).removeClass('selected');		
			})
			$('.userbar div').hover(function(){
				$(this).addClass('selected');							  
			},function(){
				$(this).removeClass('selected');		
			})
		})();
		
        

})
