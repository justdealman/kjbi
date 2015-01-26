function content() {
	var mc = 69;
	var mb = 90;
	if ( $(window).height() < 900 ) {
		mb = 60;
	}
	if ( $(window).height() < 800 ) {
		mc = 49;
		mb = 30;
	}
	if ( $(window).height() < 700 ) {
		mc = 29;
		mb = 20;
	}
	var ch = $(window).height()-$('.header').height()-mc-mb-148-$('.content > ul').height();
	$('.content').css({
		'margin-top': mc+'px',
		'margin-bottom': mb+'px'
	});
	if ( $('.core').height() > ch ) {
		$('.content > div > div').css({
			'overflow-y': 'scroll'
		});
	}
	$('.content > div > div').css({
		'height': ch+'px'
	});
	$('.content > div > div').jScrollPane({
		autoReinitialise: true
	});
}
$(document).ready(function() {
	$('body').css({
		'background': 'url("'+$('img.bg').attr('src')+'") no-repeat center center'
	});
	$('.header > ul > li').has('ul').hover(
		function() {
			$(this).find('ul').stop(true,true).slideDown(250);
			$(this).addClass('current');
		},
		function() {
			$(this).find('ul').stop(true,true).slideUp(250);
			$(this).removeClass('current');
		}
	);
	$('.content > ul li').each(function() {
		$(this).css({
			'z-index': $('.content > ul li').size()-$(this).index()
		});
		if ($(this).index() >= 6 ) {
			$(this).hide();
		};
	});
	if ( $('.content').length > 0 ) {
		content();
	}
	if ( $('.contacts').length > 0 ) {
		$('.contacts > div').height($('.core').height());
	}
	$('.lab table tbody tr').each(function() {
		$(this).find('span[data-element]').each(function() {
			$(this).parents('tr').find('em[data-element="'+$(this).attr('data-element')+'"]').css({
				'bottom': $(this).parents('tr').outerHeight()-$(this).position().top-$(this).outerHeight()+'px'
			});
		});
	});
	$('.faq li h5 span').bind('click', function() {
		$(this).parents('li').children('div').slideToggle(500);
		return false;
	});
	$('.content > ul li').each(function() {
		if ( $(this).find('span').height() > 15 ) {
			$(this).find('span').css({
				'margin': '-7px 0 -8px'
			});
		}
	});
	if ( $('.catalog').length > 0 ) {
		for ( var i = 0; i<4; i++ ) {
			var max = 0;
			for ( var j = 1; j<=3; j++) {
				$('.catalog li:nth-child('+eval(i*3+j)+')').each(function() {
					var h = $(this).height(); 
					max = h > max ? h : max;
				});
			}
			for ( var j = 1; j<=3; j++) {
				$('.catalog li:nth-child('+eval(i*3+j)+')').each(function() {
					$(this).height(max);
				});
			}
		}
	}
	$('.catalog li:nth-child(3n)').css({
		'margin-right': '-3px'
	});
	$('.download ul li:nth-child(2n+1), .lab table tr:nth-child(2n+1), .product table tbody tr:nth-child(2n+1)').css({
		'background': 'url("./img/download_li.png") repeat'
	});
});