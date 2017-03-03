var formattedName = HTMLheaderName.replace("%data%", "Drew Hanratty");
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedRole);

var bio = {
  "name": "Drew Hanratty",
  "role": "Web Developer",
  "contacts":
    {
      "mobile": "971-337-8690",
      "email": "drew.hanratty@gmail.com",
      "github": "andrewhanratty",
      "location": "Portland, OR"
    },
    "welcomeMessage": "Keep it creative.",
    "biopic": "images/underwater.jpg",
    "skills": ["HTML", "CSS", "JavaScript", "Microsoft Office", "Strong writing and presentation skills"]
};

var work = {
  "jobs": [
    {
      "employer": "PELA",
      "title": "Examiner Trainer",
      "location": "Portland, OR",
      "dates": "August 2016 to Present",
      "description": "Delivered training and recertification sessions for new and existing examiners, respectively. Monitored examiner performance and provided both face-to-face and written feedback."
    },
    {
      "employer": "British Council",
      "title": "Team Leader/Examiner Trainer",
      "location": "Beijing, China",
      "dates": "July 2009 to June 2016",
      "description": "Led a team of IELTS examiners, ensuring consistent performance to British Council standards through annual and semi-annual performance reviews. Delivered procedural workshops, conducted disciplinary meetings and took part in recruitment activities, including shortlisting and interviewing candidates."
    },
    {
      "employer": "Ying Han Da Publishing",
      "title": "Editor/Abridger",
      "location": "Beijing, China",
      "dates": "August 2001 to August 2009",
      "description": "Abridged classic novels as part of an extended book series, published nationwide, for English-language learners. This involved rewriting the classics within certain grammatical and lexical parameters."
    },
    {
      "employer": "Delter Business Institute",
      "title": "ESL Teacher",
      "location": "Beijing, China",
      "dates": "August 2001 to July 2003",
      "description": "Taught General English classes to adult learners, and acted as Materials Coordinator."
    },
    {
      "employer": "AHRC-NYC",
      "title": "Residential Services Wait List Coordinator",
      "location": "New York City, NY",
      "dates": "April 1997 to April 2001",
      "description": "Headed the Residential Placement Wait List Department and facilitated the completion of the 3-year New York Cares initiative by determining the number and type of residences for which the agency should bid, according to the housing needs of those on the waiting list. Recruited and trained the Residential Placement Wait List team. Delivered community presentations."
    },
    {
      "employer": "Arc of the Bluegrass",
      "title": "Group Home Manager",
      "location": "Lexington, KY",
      "dates": "August 1995 to March 1997",
      "description": "Managed group homes for the developmentally disabled. Recruited and trained residence staff, maintained financial records and supervised medication administration and direct care."
    }
  ]
};

var projects = {
	"projects": [{
		"title": "Nezha",
		"dates": "June 2015 to July 2015",
		"description": "Composed the score for this feature film by director Li Xiaofeng."
	}, {
		"title": "Romance Out of the Blue",
		"dates": "May 2015 to June 2015",
		"description": "Composed the score for this romantic comedy by director Ning Ying."
	}, {
		"title": "Portrait of a Migrant",
		"dates": "September 2014 to Octorber 2014",
		"description": "Composed the score for this hour-length for-TV documentary by director Fei Fan."
	}]
};

var education = {
	"schools": [{
		"name": "University of Kentucky",
		"location": "Lexington Ky",
		"degree": "BA (summa cum laude)",
		"major": "Psychology",
		"dates": "August 1991 to August 1995"
	}],
	"onlineCourse": [{
		"title": "Front-end Web Developer",
		"school": "Udacity",
		"dates": "January 2017 to May 2017",
    "url": "https://www.udacity.com"
	}]
};

$('#topContacts').insertAfter('hr');

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#footerContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#footerContacts").append(formattedEmail);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedGitHub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
};

work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedWorkDescription);

    var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").prepend(formattedWorkLocation);
  })
}

work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedDescription);
  })
}

projects.display();

education.display = function() {
    for (school = 0; school < education.schools.length; school++) {
      $("#education").append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
      $(".education-entry:last").append(formattedName);

      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
      $(".education-entry:last").append(formattedDates);

      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
      $(".education-entry:last").append(formattedLocation);

      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
      $(".education-entry:last").append(formattedDegree);

      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
      $(".education-entry:last").append(formattedMajor);
    }

      $(".education-entry:last").append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourse.length; i++) {

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourse[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourse[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourse[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourse[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
}

education.display();



$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x, y);
})

$("#main").append(internationalizeButton);
function inName(string) {
  var internationalName = string.split(" ");
  return internationalName[0] + " " + internationalName[1].toUpperCase();
}

$("#mapDiv").append(googleMap);
