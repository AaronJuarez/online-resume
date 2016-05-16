
 var bio = {
 	"name" : "Aaron Juarez",
 	"role" : "Software Developer",
 	"contacts" : {
 		"mobile" : "5529484322",
 		"email" : "aarjuamtz@gmail.com",
 		"github" : "AaronJuarez",
 		"twitter" : "@john doe",
 		"location" : "Mexico City, Mexico"
 	},
 	"welcomeMessage" : "Please, have a look at my resume",
 	"skills" : [
 		"Awesomeness", "Java", "Programming", "JEE", "Hibernate", "Spring", "JavaScript", "HTML", "CSS"
 	],
 	"biopic" : "images/my-picture.jpg"
 };


 var education = {
 	"schools" : [
 		{
 			"name" : "UNAM, FES Aragon",
 			"location" : "Mexico City, Mexico",
 			"degree" : "Bachelors Degree",
 			"majors" : "Computer Engineering",
 			"dates" : "2010 - 2014",
 			"url" : "http://www.aragon.unam.mx/unam/index.html"
 		},
 		{
 			"name" : "UNAM, CEM Polanco",
 			"location" : "Mexico City, Mexico",
 			"degree" : "Diploma",
 			"majors" : "Information Security",
 			"dates" : "2013",
 			"url" : "http://www.cempolanco.unam.mx/"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title" : "Front-End Nanodegree",
 			"school" : "Udacity",
 			"date" : "2016",
 			"url" : "https://www.udacity.com"
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
 			"description" : "Involved in several projects, such as giving maintenance and deploying new changes to Avon’s Incentives Products Web Site and Avon’s promotional material application. Participated in the development of Web Services to check the representative pending balance vía SMS. Provided application’s support."
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
 				/*{
 					"image" : ""
 				}*/
 			]
 		},
 		{
 			"title" : "SMS 2 vías",
 			"dates" : "2016",
 			"description" : "Avon Web Service to request account pending balance",
 			"images" : [
 				/*{
 					"image" : ""
 				}*/
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


	 if (bio.skills.length > 0) {
	 	$("#skillsDiv").append(HTMLskillsStart);

	 	for (var skill in bio.skills) {
	 		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		 	$("#skills").append(formattedSkill);

	 	}

	 }
};


education.display = function() {
	for(var school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);

	}

	for(var onlineCourse in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleSchool = formattedOnlineSchool + formattedOnlineTitle;
		$(".education-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		formattedOnlineUrl = formattedOnlineUrl.replace("#", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineUrl);

	}
};


 work.display = function() {

 	for(var job in work.jobs){
	 	$("#workExperience").append(HTMLworkStart);

	 	var formattedJobEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var formattedJobTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 	var formattedEmployerTitle = formattedJobEmployer + formattedJobTitle;
	 	$(".work-entry:last").append(formattedEmployerTitle);

	 	var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	 	$(".work-entry:last").append(formattedJobDates);

	 	var formattedJobLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	 	$(".work-entry:last").append(formattedJobLoc);

	 	var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	 	$(".work-entry:last").append(formattedJobDescription);
 	}
 };

 function inName(name){
 	name = name.trim().split(" ");
 	name[1] = name[1].toUpperCase();
 	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
 	name = name[0] + " " + name[1];
 	return name;
 }

 projects.display = function() {

 	for(var projectEntry in projects.projects){

 		$("#projects").append(HTMLprojectStart);

 		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectEntry].title);
 		$(".project-entry:last").append(formattedProjectTitle);

 		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projectEntry].dates);
 		$(".project-entry:last").append(formattedProjectDates);

 		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[projectEntry].description);
 		$(".project-entry:last").append(formattedProjectDesc);

 		if (projects.projects[projectEntry].images.length > 0) {
 			for(var image in projects.projects[projectEntry].images){
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectEntry].images[image].image);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}
 	}
 };

 bio.display();
 work.display();
 projects.display();
 education.display();

 $("#mapDiv").append(googleMap);

