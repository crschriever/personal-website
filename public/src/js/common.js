import 'jquery/dist/jquery.js';
import 'bootstrap-sass/assets/javascripts/bootstrap.js';

let $mobileDet;
export var mobile = false;

//initializes variables whenever the page is loaded
function startUp() {
    $mobileDet = $('.mobile-detection');
	mobile = $mobileDet.width() > 0;
    
    $( window ).resize(onResize);

	scrollSet();
	
	// Tooltip init;
	$('[data-toggle="tooltip"]').tooltip();
}

function onResize() { 
    mobile = $mobileDet.width() > 0;
}

// Sets up event listeners for navigation buttons
function scrollSet() {
	$('a[href$="#scroll"]').on('click', function(e){
		e.preventDefault();
		scroll(false, this);
	});
	$('a[href$="#scrollmiddle"]').on('click', function(e){
		e.preventDefault();
		scroll(true, this);
	});
}

// Scrolls page
function scroll(middle, t) {
	var $scrollLoc = $($(t).data("scroll-to"));
	console.log($scrollLoc);
	var scrollY = $scrollLoc.offset().top;
	if (middle) {
		scrollY += -$(window).height() / 2 + $scrollLoc.outerHeight() / 2;
	}
	
	$("html,body").animate({ scrollTop: scrollY }, 500, "swing");
}

// Lazy loading
function lazyLoad() {
	// font
	$('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">');
    $('head').append('<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Raleway:200,400,800">');

	// images
	let $lazyLoadImages = $('img.lazy-load').toArray();
	$lazyLoadImages.forEach(function(image) {
		let $image = $(image);
		$image.attr('src', $image.data('src'));
		$image.on('load', function() {
			$image.removeAttr('data-src');
			$image.css('background-color', 'rgba(0,0,0,0)');			
		});
	});

	let $lazyLoadBackgrounds = $('div.lazy-load').toArray();
	$lazyLoadBackgrounds.forEach(function(bg) {
		let $bg = $(bg);
		if (mobile && $bg.hasClass('small-img')) {
			$bg.css('background-image', 'url(' + $bg.data('src').split('.').join('-small.') + ')');			
		} else {
			$bg.css('background-image', 'url(' + $bg.data('src') + ')');
		}
		$bg.on('load', function() {
			$bg.removeAttr('data-src');
			$bg.css('background-color', 'rgba(0,0,0,0)');
		});
	});
}

$(startUp);
$(window).on("load", function() {startUp(); lazyLoad();});