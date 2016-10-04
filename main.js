var $tTextCont, $tCont, $tNavCont;

function startupStyling(){
	$tTextCont = $('.top-text-cont');
	$tCont = $('.top-container');
	$tNavCont = $('.nav-container');
	$( window ).resize(onResize);

	onResize();
	scrollSet();
}

function onResize(){
	$tTextCont.css('top', $tCont.height() / 2 - $tTextCont.height() / 2 /*- $tNavCont.height()*/ + 'px');
	$tCont.css('padding-top', 50 + $tNavCont.height() + 'px');
}

function scrollSet() {
	$('a[href$="#scroll"]').on('click', function() {
		var $scrollLoc = $($(this).data("scroll-to"));
		var scrollY = $scrollLoc.offset().top - $tNavCont.height() + 1/*- $(window).height() / 2 + $scrollLoc.outerHeight() / 2*/;
		console.log(scrollY + ', ' + $(window).height());
		var body = $("body");
		body.stop().animate({scrollTop:  scrollY}, '500', 'swing');
	});
}