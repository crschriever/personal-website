var $tTextCont, $tCont, $tNavCont, $slows, 
	$projectHeadT, $projectHeadCont;

function startupStyling(){
	$tTextCont = $('.top-text-cont');
	$tCont = $('.top-container');
	$tNavCont = $('.nav-container');
	$projectHeadCont = $('.project-head-container');
	$projectHeadT = $('.project-head-text');

	$( window ).resize(onResize);
	onResize();
	scrollSet();

	$slows = [];
	$('.slow-scroll').each(function(){
		$slows.push($(this));
	});

	$(document).on('scroll', function(){
		for (var i = $slows.length - 1; i >= 0; i--) {
			var slow = $slows[i];
			var hOff = slow.offset().top - $(this).scrollTop() - slow.height() / 2;
			slow.css('background-position-y', 'calc(50% + ' + hOff / 10 + 'px)');
		};
	});

}

function onResize(){
	$tTextCont.css('top', $tCont.height() / 2 - $tTextCont.height() / 2 /*- $tNavCont.height()*/ + 'px');
	$tCont.css('padding-top', 50 + $tNavCont.height() + 'px');

	$projectHeadT.css('top', $projectHeadCont.height() / 2 - $projectHeadT.height() / 2 + 'px');
}

function scrollSet() {
	$('a[href$="#scroll"]').on('click', function() {
		var $scrollLoc = $($(this).data("scroll-to"));
		var scrollY = $scrollLoc.offset().top - $tNavCont.height() + 1/*- $(window).height() / 2 + $scrollLoc.outerHeight() / 2*/;
		var body = $("body");
		body.stop().animate({scrollTop:  scrollY}, '500', 'swing');
	});
}