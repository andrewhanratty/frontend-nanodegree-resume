var bio = {
    "name": "Drew Hanratty",
    "role": "Web Developer",
    "contacts": {
        "mobile": "971-337-8690",
        "email": "drew.hanratty@gmail.com",
        "github": "andrewhanratty",
        "location": "Portland, OR"
    },
    "welcomeMessage": "Keep it creative.",
    "biopic": "images/underwater.jpg",
    "skills": ["HTML", "CSS", "JavaScript", "Python"]
};

var work = {
    "jobs": [{
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
        "description": "Composed the score for this feature film by Li Xiaofeng.",
        "images": ["images/nezhaPoster2.jpg"]
    }, {
        "title": "Romance Out of the Blue",
        "dates": "May 2015 to June 2015",
        "description": "Composed the score for this romantic comedy by Ning Ying.",
        "images": ["images/Romance_Out_of_the_Blue_poster (1).jpg"]
    }, {
        "title": "Neo-Lounge",
        "dates": "September 2014 to October 2014",
        "description": "Composed the score for this feature-length documentary by Joanna Arong.",
        "images": ["images/neoLounge1.jpg"]
    }]
};

var education = {
    "schools": [{
            "name": "University of Kentucky",
            "location": "Lexington Ky",
            "degree": "BA (summa cum laude)",
            "majors": ["Psychology"],
            "dates": "August 1991 to August 1995"
        },
        {
            "name": "International House",
            "location": "Prague, Czech Republic",
            "degree": "Cambridge/RSA CELTA",
            "majors": ["TESL certification"],
            "dates": "May 2001 to June 2001"
        }
    ],
    "onlineCourses": {
        "title": "Front-end Web Developer",
        "school": "Udacity",
        "dates": "January 2017 to May 2017",
        "url": "https://www.udacity.com"
    }
};


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", "Drew Hanratty");
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
    $("#header").append(formattedRole);

    //Places the contact info after the horizontal rule
    $('#topContacts').insertAfter('hr');

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedLocation);

    //Causes contact info to appear on screen when 'Contact' menu button is moused over.
    $('#header .orange-text').css('opacity', '0');
    $('#header .white-text').css('opacity', '0');

    $('.contactMe').mouseenter(function() {
        $('#header .orange-text').css('opacity', '1');
        $('#header .white-text').css('opacity', '1');
        $('#header .orange-text').css('transition-duration', '.5s');
        $('#header .white-text').css('transition-duration', '.5s');
    });
    //Causes the contact info to disappear from the screen when the mouse leaves 'Contact' menu butoon.
    $('.contactMe').mouseleave(function() {
        $('#header .orange-text').css('opacity', '0');
        $('#header .white-text').css('opacity', '0');
        $('#header .orange-text').css('transition-duration', '.5s');
        $('#header .white-text').css('transition-duration', '.5s');
    });
    //Causes skills to appear on screen when 'Skills' menut button is moused over.
    $('.mySkills').mouseenter(function() {
        $('#skills-h3').css('opacity', '1');
        $('#header .skillset').css('opacity', '1');
        $('#skills-h3').css('transition-duration', '.5s');
        $('#header .skillset').css('transition-duration', '.5s');
    });
    //Causes skills to disappear from screen when the mouse leaves 'Skills' menu button.
    $('.mySkills').mouseleave(function() {
        $('#skills-h3').css('opacity', '0');
        $('#header .skillset').css('opacity', '0');
        $('#skills-h3').css('transition-duration', '.5s');
        $('#header .skillset').css('transition-duration', '.5s');
    });
    //var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    //$("#header").append(formattedBioPic);
    bio.skills.forEach(function(skill) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });
};

bio.display();


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
    });
};

work.display();


projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#films").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        for (image = 0; image < project.images.length; image++) {
            var formattedImage = HTMLprojectImage.replace("%data%", project.images);
            $(".project-entry:last").append(formattedImage);
        }
    });
};

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

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedOnlineSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        $(".education-entry:last").append(formattedOnlineTitle);

        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        $(".education-entry:last").append(formattedOnlineURL);
    }
};

education.display();


//I have no idea why this is here or how it's useful to me.
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


//Creates a button that makes all of my surname uppercase
$("#main").append(internationalizeButton);

function inName(string) {
    var internationalName = string.split(" ");
    return internationalName[0] + " " + internationalName[1].toUpperCase();
}


//Puts googleMaps on the page.
$("#mapDiv").append(googleMap);


//Assists in the operation of the nav menu.
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
