export let projectsArray = {
	GK: {
		title: "Gate Keeper",
		description:
			'<p>Gate Keeper is a project my time made at HackGSU. We wanted to make an easy, secure way for people to grant access to buildings and alleviate having to check in at the front desk everywhere you go.</p>'
			+ '<p>This solution provides a robust admin side database system to manage access based on asymmetric elliptic curve encryption to authentic access requests. Additionally, we built an intuitive client side app to make it easy to interface with the database side through NFC to easily gain access. Also, we wanted to make sure everything was secure, so we used private keys generated on the users\' devices to sign access requests, which are checked against a server side database of approved credentials. Finally, for added security, we designed the system to be able to work over LAN to allow clients to run the solution on an air-gapped system for extra security.</p>'
			+ '<h5 class="bold">GitHub server repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/bentemplin/gatekeeper-server" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>'
			+ '<h5 class="bold">GitHub client repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/bentemplin/gatekeeper-app" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>'
			+ '<h5 class="bold">Read more: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="https://devpost.com/software/gatekeeper-v43jwb" target="_blank"></a> Devpost</div>'
	},
	ER: {
		title: "ER Schedule", 
		description: 
			'<p>This is a PHP based web app that is still in development. It will create work schedules for Emergency Rooms, a task that normally takes an employee a full day to do.<p>'
			+ '<h5 class="bold">GitHub repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/crschriever/ER-Schedule" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>'
			+ '<h5 class="bold">Live Example: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://www.scheduleir.com" target="_blank"></a> Example</div>'
	},
	NEAT: {
		title: "NEAT", 
		description: 
			"<p>NEAT stands for Neuro-Evolution of Augmenting Topologies. It is a machine learning algorithm that creates and evolves neural networks to solve a task. I made my own implementation of this algorithm in Java.</p>",
		/*outcomes: 
			"I created a Java library that implemented the NEAT algorithm. I tested the library in various ways and found that my implementation tended to merely memorize the problem rather than gain a deeper understanding for it (if the task was varied even slightly the neural network would struggle). I plan to revisit the library and improve it in the future.",
		lessons:
			"From this project I learned the concepts of Machine Learning and Neural Networks."*/
	},
	dSA: {
		title: "deSchApps", 
		description:
			'<p>A support website for the iPhone Apps I created. The website has a CMS used for easy addition of new Apps. I wrote the CMS using php.</p>'
			+ '<h5 class="bold">Link to the website: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com" target="_blank"></a>deSchApps</div>'
	},
	HH: {
		title: "Homework Help", 
		description:
			'Homework Help combines scrap paper and a calculator into one app. It provides a means of sorting assignments inside the app. It was written in Objective C.'
			+ '<h5 class="bold">Link to support page: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com/app/HomeworkHelp" target="_blank"></a>Homework Help</div>'
	},
	IGW: {
		title: "Intergalactic Warfare", 
		description:
			'Intergalactic Warfare is an iPhone game that consists of firing missiles at your opponents. These missiles must travel through an obstacle course of planets that all have a gravitational pull that affects the path of the missile. It was written in Objective C.'
			+ '<h5 class="bold">Link to support page: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com/app/IntergalacticWarfare" target="_blank"></a>Intergalactic Warfare</div>'
	},
	DS: {
		title: "Darlington School App", 
		description:
			"This is an app created for my upper school. It displayed user's grades, assignments, announcements, schedules, etc. It was written with HTML, CSS, and Javascript.",
		/*outcomes:
			"I took an independent study at my high school and created this app using PhoneGap and HTML.",
		lessons:
			"I learned how to work with PhoneGap and JQuery. My Javascript, HTML, and CSS skills were also vastly improved."*/
	}

};