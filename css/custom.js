$(function() {
	
	$('.main_nav li').find('a').append('<span class="hover" />').each(function () {
		
		var $span = $('> span.hover', this).css('opacity', 0);
                    
		$(this).hover(function () {
                        
			$span.stop().fadeTo(300, 1);
			
		}, function () {
                        
			$span.stop().fadeTo(300, 0);
			
		});
	});
	
	$('.hm_demo_cta').append('<span class="hover" />').each(function () {
		
		var $span = $('> span.hover', this).css('opacity', 0);
                    
		$(this).hover(function () {
                        
			$span.stop().fadeTo(300, 1);
			
		}, function () {
                        
			$span.stop().fadeTo(300, 0);
			
		});
	});
	
	$('.get_demo').append('<span class="hover" />').each(function () {
		
		var $span = $('> span.hover', this).css('opacity', 0);
                    
		$(this).hover(function () {
                        
			$span.stop().fadeTo(300, 1);
			
		}, function () {
                        
			$span.stop().fadeTo(300, 0);
			
		});
	});
	
	
	
	$('#slides').slides({
		preload: true,
		preloadImage: 'images/loading.gif',
		play: 4000,
		pause: 2500,
		hoverPause: true
	});
	
	
	
});

$(function() {
    var selectors = [
        '.demo',
        '.contact',
        '.hm_demo_cta',
        '.email_a_friend',
        '.gt',
        '.get_demo',
        '.demo_spin',
        '.open_ticket'
    ];
	$(selectors.join(', ')).fancybox();
});
		
(function() { //google plus one
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
		
function clearText(field) {
	if (field.defaultValue == field.value) field.value = '';
	else if (field.value == '') field.value = field.defaultValue;
    
}
