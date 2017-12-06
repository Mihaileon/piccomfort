(function ($) {
	$ (function(){
		$('.menu__humburger').on('click',function(){			
			$(this).closest('.menu').toggleClass('menu_active');
		});
		$('.menu__item').on('click',function(){			
			$(this).closest('.menu').toggleClass('menu_active');
		});			
	});	
})(jQuery);	