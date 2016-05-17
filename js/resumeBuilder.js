
 var bio = {
 	"name" : "Aaron Juarez",
 	"role" : "Software Developer",
 	"contacts" : {
 		"mobile" : "5529484322",
 		"email" : "aarjuamtz@gmail.com",
 		"github" : "AaronJuarez",
 		"twitter" : "@john doe",
 		"facebook" : "https://www.facebook.com/aaron.juarez.52",
 		"linkedin" : "https://www.linkedin.com/in/aar%C3%B3n-ju%C3%A1rez-" +
 					 "0836ab94?trk=nav_responsive_tab_profile",
 		"location" : "Mexico City, Mexico"
 	},
 	"welcomeMessage" : "I have two years of experience as a web developer " +
 					   "with strong programming skills, strong analytical " +
 					   "and problem solving as well as strong communications " +
 					   "skills. Accustomed to work well under pressure to " +
 					   "provide timely and accurate solutions with strong " +
 					   "sense of meeting deadlines.",
 	"skills" : [
 		"Awesomeness", "Java", "Programming", "JEE", "Hibernate", "Spring",
 		"JavaScript", "HTML", "CSS"
 	],
 	"biopic" : "images/my-picture.jpg"
 };


 var education = {
 	"schools" : [
 		{
 			"name" : "UNAM, FES Aragon",
 			"location" : "Mexico City, Mexico",
 			"degree" : "Bachelors Degree",
 			"majors" : ["Computer Engineering"],
 			"dates" : "2010 - 2014",
 			"url" : "http://www.aragon.unam.mx/unam/index.html"
 		},
 		{
 			"name" : "UNAM, CEM Polanco",
 			"location" : "Mexico City, Mexico",
 			"degree" : "Diploma",
 			"majors" : ["Information Security"],
 			"dates" : "2013",
 			"url" : "http://www.cempolanco.unam.mx/"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title" : "Front-End Nanodegree",
 			"school" : "Udacity",
 			"date" : "2016",
 			"url" : "https://www.udacity.com",
 			"titleUrl" : "https://www.udacity.com/course/front-end-web-" +
 						 "developer-nanodegree--nd001"
 		}
 	]
 };


  var work = {
 	"jobs" : [
 		{
 			"employer" : "Hexaware Technologies",
 			"title" : "Software Developer",
 			"dates" : "March 2016 - April 2016",
 			"location" : "Saltillo, Coahuila, Mexico",
 			"description" : "Participated in BPM Training"
 		},
 		{
 			"employer" : "Avon Mexico",
 			"title" : "Java Developer",
 			"dates" : "March 2015 - March 2016",
 			"location" : "Mexico City, Mexico",
 			"description" : "Involved in several projects, such as giving " +
 				"maintenance and deploying new changes to Avon’s Incentives " +
 				"Products Web Site and Avon’s promotional material " +
 				"application. Participated in the development of Web Services "+
 				"to check the representative pending balance vía SMS. " +
 				"Provided application’s support."
 		}
 	]

 };

 var projects = {
 	"projects" : [
 		{
 			"title" : "Norns website",
 			"dates" : "2014",
 			"description" : "Online site for a ecologic items store",
 			"images" : [
 					"images/nature.jpg"
 			]
 		},
 		{
 			"title" : "SMS 2 vias",
 			"dates" : "2016",
 			"description" : "Avon Web Service to request account pending " +
 							"balance",
 			"images" : [
 					"images/abstract.jpg"
 			]
 		}
 	]
 };

bio.display = function() {
	 var formattedName = HTMLheaderName.replace("%data%", bio.name);
	 $("header").prepend(formattedName);

	 var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
	 $(".aaron").append(formattedPic);

	 var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	 $("header").prepend(formattedRole);

	 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	 $("#topContacts").append(formattedMobile);

	 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	 $("#topContacts").append(formattedEmail);

	 var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	 $("#topContacts").append(formattedGitHub);

	 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	 $("#topContacts").append(formattedLocation);

	 var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	 $(".summary").append(formattedWelcomeMessage);

	 if (bio.skills.length > 0) {
	 	$("#skillsDiv").append(HTMLskillsStart);

	 	bio.skills.forEach(function(skill){
	 		var formattedSkill = HTMLskills.replace("%data%", skill);
		 	$("#skills").append(formattedSkill);
	 	});

	 }

	 var formattedLinkMail = contactLinkMail.replace("%data%", bio.contacts.email);
	 formattedLinkMail = formattedLinkMail.replace("%name%", bio.name.split(" ")[0]);
	 $("footer").append(formattedLinkMail);

	 var formattedLinkFacebook = contactLinkFacebook.replace("%data%", bio.contacts.facebook);
	 $("footer").append(formattedLinkFacebook);

	 var formattedLinkLinkedin = contactLinkLinkedin.replace("%data%", bio.contacts.linkedin);
	 $("footer").append(formattedLinkLinkedin);

	 var formattedLinkGithub = contactLinkGithub.replace("%data%", bio.contacts.github);
	 $("footer").append(formattedLinkGithub);

	 var formattedfooterLocation = footerLocation.replace("%data%", bio.contacts.location);
	 $("footer").append(formattedfooterLocation);
};


education.display = function() {

	education.schools.forEach(function(school){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
		formattedSchoolName = formattedSchoolName.replace("#", school.url);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
		$(".education-entry:last").append(formattedMajor);

	});

	$("#education").append(HTMLonlineClasses);

	education.onlineCourses.forEach(function(onlineCourse){
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
		formattedOnlineSchool = formattedOnlineSchool.replace("#", onlineCourse.titleUrl);
		var formattedOnlineTitleSchool = formattedOnlineSchool + formattedOnlineTitle;
		$(".education-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.date);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
		formattedOnlineUrl = formattedOnlineUrl.replace("#", onlineCourse.url);
		$(".education-entry:last").append(formattedOnlineUrl);

	});
};


 work.display = function() {

 	work.jobs.forEach(function (job){
	 	$("#workExperience").append(HTMLworkStart);

	 	var formattedJobEmployer = HTMLworkEmployer.replace("%data%", job.employer);
	 	var formattedJobTitle = HTMLworkTitle.replace("%data%", job.title);
	 	var formattedEmployerTitle = formattedJobEmployer + formattedJobTitle;
	 	$(".work-entry:last").append(formattedEmployerTitle);

	 	var formattedJobDates = HTMLworkDates.replace("%data%", job.dates);
	 	$(".work-entry:last").append(formattedJobDates);

	 	var formattedJobLoc = HTMLworkLocation.replace("%data%", job.location);
	 	$(".work-entry:last").append(formattedJobLoc);

	 	var formattedJobDescription = HTMLworkDescription.replace("%data%", job.description);
	 	$(".work-entry:last").append(formattedJobDescription);
 	});
 };

 function inName(name){
 	name = name.trim().split(" ");
 	name[1] = name[1].toUpperCase();
 	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
 	name = name[0] + " " + name[1];
 	return name;
 }

 projects.display = function() {

 	projects.projects.forEach(function (project){

 		$("#projects").append(HTMLprojectStart);

 		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
 		$(".project-entry:last").append(formattedProjectTitle);

 		var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
 		$(".project-entry:last").append(formattedProjectDates);

 		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", project.description);
 		$(".project-entry:last").append(formattedProjectDesc);

 		if (project.images.length > 0) {

 			project.images.forEach(function(image){
 				var formattedImage = HTMLprojectImage.replace("%data%", image);
 				$(".project-entry:last").append(formattedImage);
 			});
 		}
 	});
 };

 bio.display();
 work.display();
 projects.display();
 education.display();

 $("#mapDiv").append(googleMap);

