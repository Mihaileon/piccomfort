(function ($) {
	$ (function(){
		$('.menu__button').on('click',function(){			
			$(this).closest('.menu').toggleClass('menu_active');
		});			
	});	
})(jQuery);