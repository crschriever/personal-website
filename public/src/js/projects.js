export let projectsArray = {
    CI: {
        title: "Cicerone",
        description: `
			<p>Cicerone is an android app that tells you about any interesting location you happen to pass by, whether you're walking, driving, or flying. The core idea is to let the user explore while the application highlights what is nearby. It will automatically detect nearby interesting locations and tell you about them using text-to-speech even if the app is in the background or your phone is closed. Go into silent mode and receive push notifications instead of voice.</p>
			<p>Cicerone is built for Android, making use of Java, Google Maps API, and mobile text-to-speech. The app itself makes use of map data and wiki information in order to describe locations in a way the user will understand.</p>
			<h5 class="bold">GitHub client repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/crschriever/Cicerone" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>'
			<h5 class="bold">Read more: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="https://devpost.com/software/cicerone" target="_blank"></a> Devpost</div>
		`
    },
    GH: {
        title: "Google Home Visual Response",
        description: `
			I wanted to create a tool that provides visual responses to queries on the Google Home. Queries for weather, todo list, cheat sheets, calendar, agenda, and time are supported.
			<h3>Tools</h3>
			<ul>
				<li>Node.js</li>
				<li>Express.js</li>
				<li>MongoDB</li>
				<li>Socket.io</li>
				<li>API.AI (now dialogflow)</li>
			</ul>
			<br>
			<h5 class="bold">GitHub repo: </h5>
			<div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/crschriever/HomeControl" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>
			<h5 class="bold">See more: </h5>			
			<div class="btn btn-youtube contact-button"><a class="contact-a" href="https://www.youtube.com/watch?v=0VP26myo0-Q" target="_blank"></a><i class="fa fa-youtube"></i> Watch</div>
			<div class="btn btn-default contact-button"><a class="contact-a" href="/info/GoogleHomeVisual"></a>Read</div>
		`
    },
    GK: {
        title: "Gate Keeper",
        description:
            "<p>Gate Keeper is a project my team made at HackGSU. We wanted to make an easy, secure way for people to grant access to buildings and alleviate having to check in at the front desk everywhere you go.</p>" +
            "<p>This solution provides a robust admin side database system to manage access based on asymmetric elliptic curve encryption to authentic access requests. Additionally, we built an intuitive client side app to make it easy to interface with the database side through NFC to easily gain access. Also, we wanted to make sure everything was secure, so we used private keys generated on the users' devices to sign access requests, which are checked against a server side database of approved credentials. Finally, for added security, we designed the system to be able to work over LAN to allow clients to run the solution on an air-gapped system for extra security.</p>" +
            '<h5 class="bold">GitHub server repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/bentemplin/gatekeeper-server" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>' +
            '<h5 class="bold">GitHub client repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/bentemplin/gatekeeper-app" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>' +
            '<h5 class="bold">Read more: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="https://devpost.com/software/gatekeeper-v43jwb" target="_blank"></a> Devpost</div>'
    },
    ER: {
        title: "ER Schedule",
        description:
            "<p>This is a PHP based web app. It creates work schedules for Emergency Rooms, a task that normally takes an employee a full day to do. I surveyed local Emergency Room for the required features such an app would need. App accounted for preferred days off, preferred number of shifts, number of shifts worked in a row, number of weekends worked in a row, number of holidays worked, etc.<p>" +
            '<h5 class="bold">GitHub repo: </h5><div class="btn btn-warning contact-button"><a class="contact-a" href="https://github.com/crschriever/ER-Schedule" target="_blank"></a><i class="fa fa-github"></i> GitHub</div>' +
            '<h5 class="bold">Live Example: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://www.scheduleir.com" target="_blank"></a> Example</div>'
    },
    NEAT: {
        title: "NEAT",
        description:
            "<p>NEAT stands for Neuro-Evolution of Augmenting Topologies. It is a machine learning algorithm that creates and evolves neural networks to solve a task. I made my own implementation of this algorithm in Java. It was my first taste of Machine Learning and won't be my last.</p>"
    },
    dSA: {
        title: "deSchApps",
        description:
            "<p>A support website for the iPhone Apps I created. The website has a CMS used for easy addition of new Apps. I created an Admin Dashboard that displayed current apps and allowed you to add new apps using php.</p>"
    },
    HH: {
        title: "Homework Help",
        description:
            "Homework Help combines scrap paper and a calculator into one app. It provides a means of sorting assignments inside the app. Through this project I learned Xcode and Objective C. I collaborated with a graphic design artist and won a congressional STEM competition."
    },
    IGW: {
        title: "Intergalactic Warfare",
        description:
            "Intergalactic Warfare is an iPhone game that consists of firing missiles at your opponents. These missiles must travel through an obstacle course of planets that all have a gravitational pull that affects the path of the missile. It was written in Objective C."
    },
    DS: {
        title: "Darlington School App",
        description:
            "This is an app created for my high school to display students' grades, assignments, announcements, schedules, etc. It was written with HTML, CSS, and JavaScript all through PhoneGap. This is the project I used to learn JQuery. I worked closely with IT staff to gain access to high school’s data."
    }
};
// '<h5 class="bold">Link to the website: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com" target="_blank"></a>deSchApps</div>'
//+ '<h5 class="bold">Link to support page: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com/app/HomeworkHelp" target="_blank"></a>Homework Help</div>'
//+ '<h5 class="bold">Link to support page: </h5><div class="btn btn-default contact-button"><a class="contact-a" href="http://deschapps.com/app/IntergalacticWarfare" target="_blank"></a>Intergalactic Warfare</div>'
