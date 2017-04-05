var $tTextCont, $tCont, $tNavCont, $slows, 
	$projectHeadT, $projectHeadCont,
	$mobileDet, $wrapper, $projectDesc, projectMoveable = true,
	$projects;

var projectsArray = {

	ER: {
		title: "ER Schedule", 
		description: 
			'<p>This is a PHP based web app that is still in development. It will create work schedules for Emergency Rooms, a task that normally takes an employee a full day to do.<p>'
			+ '<p>GitHub repo: <div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/crschriever/ER-Schedule" target="_blank"></a><i class="fa fa-github"> GitHub</i></div></p>'
	},
	NEAT: {
		title: "NEAT", 
		description: 
			"NEAT stands for Neuro-Evolution of Augmenting Topologies. It is a machine learning algorithm that creates and evolves neural networks to solve a task.",
		/*outcomes: 
			"I created a Java library that implemented the NEAT algorithm. I tested the library in various ways and found that my implementation tended to merely memorize the problem rather than gain a deeper understanding for it (if the task was varied even slightly the neural network would struggle). I plan to revisit the library and improve it in the future.",
		lessons:
			"From this project I learned the concepts of Machine Learning and Neural Networks."*/
	},
	dSA: {
		title: "deSchApps", 
		description:
			"A support website for the iPhone Apps i created. The website has a CMS used for easy addition of new Apps.",
		/*outcomes:
			"A website with details on each of the apps I've worked on. I hope to improve the website's mobile version for I created if before I knew BootStrap.",
		lessons:
			"I learned HTML, CSS, JavaScript, PHP, and SQL through this project. I also learned the process for publishing a website through HostGator."*/
	},
	HH: {
		title: "Homework Help", 
		description:
			"Homework Help combines scrap paper and a calculator into one app. It provides a means of sorting assignments through the app.",
		/*outcomes:
			"This was submitted to a Congressional STEM competition and won. It was also on the App Store but has since been removed for monetary reasons.",
		lessons:
			"I learned Objective C, how to navigate XCode, and the process of submitting an app to the app store."*/
	},
	IGW: {
		title: "Intergalactic Warfare", 
		description:
			"Intergalactic Warfare is an iPhone game that consists of firing missiles at your opponents. These missiles must travel through an obstacle course of planets that all have a gravitational pull that affects the path of the missile",
		/*outcomes:
			"This app was on the app store but has since been removed for monetary reasons.",
		lessons:
			"Through the creation of this app I learned how to use XCode's SpriteKit library."*/
	},
	DSA: {
		title: "Darlington School App", 
		description:
			"This is an app created for my upper school. It displayed to user's grades, assignments, announcements, schedules, etc.",
		/*outcomes:
			"I took an independent study at my high school and created this app using PhoneGap and HTML.",
		lessons:
			"I learned how to work with PhoneGap and JQuery. My Javascript, HTML, and CSS skills were also vastly improved."*/
	}

};

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

	//Array of scrolling background
	$slows = [];
	$('.slow-scroSll').each(function(){
		$slows.push($(this));
	});

	//Scrolling background
	$(document).on('scroll', function(){
		for (var i = $slows.length - 1; i >= 0; i--) {
			var slow = $slows[i];
			var hOff = slow.offset().top - $(this).scrollTop() - slow.height() / 2;
			slow.css('background-position-y', 'calc(50% + ' + hOff / 5 + 'px)');
		};
	});

	//Clicking the project pics
	$('.project').on('click', function(e){

		console.log("Hi");	

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

function scroll(middle, t) {
	var $scrollLoc = $($(t).data("scroll-to"));
	var scrollY = $scrollLoc.offset().top - $tNavCont.height() + 1;
	if(middle) scrollY += -$(window).height() / 2 + $scrollLoc.outerHeight() / 2;
	var body = $("body");
	body.stop().animate({scrollTop:  scrollY}, '500', 'swing');
}
