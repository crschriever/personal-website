import 'jquery/dist/jquery.js';
import 'bootstrap-sass/assets/javascripts/bootstrap.js';
import '../css/main.scss';

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../res/', true, /\.(gif|png|jpe?g)$/i));

import {projectsArray} from './projects';

let $tTextCont, $tCont, $tNavCont, $slows, $modal, 
	$projectHeadT, $projectHeadCont,
	$mobileDet, $wrapper, $projectDesc, projectMoveable = true,
	$projects, selectedProject;


// var selectedProject = projectsArray.ER;
// console.log(selectedProject);

var mobile = false;

function startupStyling(){
	$mobileDet = $('.mobile-detection');

	$tTextCont = $('.top-text-cont');
	$tCont = $('.top-container');
	$tNavCont = $('.nav-container');
	$projectHeadCont = $('.project-head-container');
	$projectHeadT = $('.project-head-text');
	$wrapper = $('.wrapper');
	$modal = $('.modal');
	$modal.title = $modal.find('.modal-title');
	$modal.body = $modal.find('.modal-body>p');


	$( window ).resize(onResize);

	onResize();
	scrollSet();

	// Array of scrolling background
	$slows = [];
	$('.slow-scroll').each(function(){
		$slows.push($(this));
	});

	// Scrolling background images
	$(document).on('scroll', function(){
		for (var i = $slows.length - 1; i >= 0; i--) {
			var slow = $slows[i];
			var hOff = slow.offset().top - $(this).scrollTop() - slow.height() / 2;
			slow.css('background-position-y', 'calc(50% + ' + hOff / 5 + 'px)');
		};
	});

	// Clicking the project pics
	$('.project').on('click', function(e){

		var id = $(this).attr('id');
		if(id == "ER") {
			selectedProject = projectsArray.ER;
		} else if(id == "NEAT") {
			selectedProject = projectsArray.NEAT;
		} else if(id == "dSA") {
			selectedProject = projectsArray.dSA;
		} else if(id == "HH") {
			selectedProject = projectsArray.HH;
		} else if(id == "IGW") {
			selectedProject = projectsArray.IGW;
		} else if(id == "DS") {
			selectedProject = projectsArray.DSA;
		}

		$modal.title.html(selectedProject.title);
		console.log($modal.body);
		$modal.body.html(selectedProject.description);
		$modal.modal();
		
	});

}

function onResize(){

	if($mobileDet.width() > 0){
		$tCont.removeAttr('style');
		$tTextCont.removeAttr('style');
	} else {
		$tCont.css('padding-top', 50 + $tNavCont.height() + 'px');
		$tTextCont.css('top', $tCont.height() / 2 - $tTextCont.height() / 2 /*- $tNavCont.height()*/ + 'px');
	}

	$projectHeadT.css('top', $projectHeadCont.height() / 2 - $projectHeadT.height() / 2 + 'px');
	$wrapper.css('width', $(window).width() + 'px');
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
	var scrollY = $scrollLoc.offset().top - $tNavCont.height() + 1;
	if(middle) scrollY += -$(window).height() / 2 + $scrollLoc.outerHeight() / 2;
	var body = $("body");
	body.stop().animate({scrollTop:  scrollY}, '500', 'swing');
}

// Lazy loading
function lazyLoad() {
	// font
	$('head').append('<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">');

	// images
	let $lazyLoadImages = $('img.lazy-load').toArray();
	$lazyLoadImages.forEach(function(image) {
		let $image = $(image);
		$image.attr('src', $image.data('src'));
		$image.on('load', function() {
			console.log('yellow');
			$image.removeAttr('data-src');
			$image.css('background-color', 'rgba(0,0,0,0)');			
		});
	});

	let $lazyLoadBackgrounds = $('div.lazy-load').toArray();
	$lazyLoadBackgrounds.forEach(function(bg) {
		let $bg = $(bg);
		$bg.css('background-image', 'url(' + $bg.data('src') + ')');
		console.log('blue');
		$bg.on('load', function() {
			$bg.removeAttr('data-src');
			$bg.css('background-color', 'rgba(0,0,0,0)');
		});
	});
}

$(function() {startupStyling();});
$(window).on("load", function() {startupStyling(); lazyLoad();});