/* BIOGRAPHY */

var bio = {
    "name": "David Nalesnik",
    "role": "Web Developer",
    "contacts": {
        "mobile": "314-315-0211",
        "email": "david.nalesnik@gmail.com",
        "github": "davidnalesnik",
        "location": "St. Louis, MO"
    },
    "welcomeMessage": "Welcome to my page!",
    "skills": [
        "HTML",
        "CSS",
        "JavaScript",
        "C++",
        "Scheme",
        "pianist",
        "composer"
    ],
    "bioPic": "./images/fry.jpg"
};

bio.display = function() {
    // header
    var formattedHeaderRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedHeaderRole);
    var formattedHTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedHTMLheaderName);
    // contacts
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var contactEntries = [
        formattedMobile, formattedEmail, formattedGithub, formattedLocation
    ];
    // Add contacts to header and footer.
    contactEntries.forEach(function(entry) {
        $('#topContacts:last').append(entry);
        $('#footerContacts:last').append(entry);
    });
    // picture and welcome
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $('#header:last').append(formattedBioPic + formattedWelcomeMsg);
    // skills
    if (bio.skills.length > 0) {
        $('#header:last').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedHTMLskills = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedHTMLskills);
        });
    }
};


/* EMPLOYMENT */

var work = {
    "jobs": [
        {
            "employer": "Eliot Unitarian Chapel",
            "title": "pianist",
            "location": "Kirkwood, MO",
            "dates": "2012 - present",
            "description": "I provide music for services, and rehearse/perform with several choirs.",
            "url": "http://www.eliotchapel.org"
        },
        {
            "employer": "Webster University Community Music School",
            "title": "pianist",
            "location": "Webster Groves, MO",
            "dates": "2010 - present",
            "description": "I accompany rehearsals and performances of a youth string orchestra.",
            "url": "http://www.webster.edu/community-music-school/"
        },
        {
            "employer": "Webster University Community Music School",
            "title": "Faculty, Summer Composition Intensive",
            "location": "Webster Groves, MO",
            "dates": "2012 - 2015",
            "description": "I lead a composition camp for middle-school and high-school age children.",
            "url": "http://www.webster.edu/community-music-school/"
        },
        {
            "employer": "Webster University",
            "title": "Adjunct Associate Professor",
            "location": "Webster Groves, MO",
            "dates": "2010 - 2014",
            "description": "I taught a variety of Music Theory courses in the Department of Music.",
            "url": "http://www.webster.edu/fine-arts/departments/music/"
        },
        {
            "employer": "Maryville University",
            "title": "Adjunct Faculty",
            "location": "St. Louis, MO",
            "dates": "2010",
            "description": "I taught an undergraduate course in music theory during the Fall semester.",
            "url": "https://www.maryville.edu/"
        },
        {
            "employer": "University of Missouri-St. Louis",
            "title": "Lecturer",
            "location": "St. Louis, MO",
            "dates": "2010",
            "description": "I taught an undergraduate course in music theory during the Spring semester.",
            "url": "http://music.umsl.edu/"
        },
        {
            "employer": "Indiana University Jacobs School of Music",
            "title": "Associate Instructor, Department of Music Theory",
            "location": "Bloomington, IN",
            "dates": "1996 - 1998, 2001 - 2004",
            "description": "As a graduate student, I taught music theory classes for 11 semesters.",
            "url": "http://www.music.indiana.edu/"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace('#', job.url).replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        $('.work-entry:last').append(formattedDates);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        $('.work-entry:last').append(formattedLocation);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        $('.work-entry:last').append(formattedDescription);
    });
};


/* PROJECTS */

var projects = {
    "projects": [
        {
            "title": "Programming contributor, LilyPond",
            "dates": "2012 - present",
            "description": "<a class='inline-anchor' href='http://git.savannah.gnu.org/gitweb/?p=lilypond.git&a=search&h=HEAD&st=author&s=David+Nalesnik'>Contributed</a> (Scheme, C++, Texinfo) to the codebase of this open-source music notation application.",
            "images": [
                "./images/lilypond-small.jpg"
            ]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title).replace('#', 'http://lilypond.org');
        $('.project-entry:last').append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedProjectDescription);
        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
            $('.project-entry:last').append(formattedProjectImage);
        });
    });
};


/* EDUCATION */

var education = {
    "schools": [
        {
            "name": "Indiana University",
            "location": "Bloomington, IN",
            "degree": "DM",
            "majors": [
                "Music Composition"
            ],
            "dates": 2009,
            "url": "https://www.indiana.edu/"
        },
        {
            "name": "Indiana University",
            "location": "Bloomington, IN",
            "degree": "MM",
            "majors": [
                "Music Composition"
            ],
            "dates": 2001,
            "url": "https://www.indiana.edu/"
        },
        {
            "name": "Oberlin College",
            "location": "Oberlin, Ohio",
            "degree": "BA",
            "majors": [
                "Religion"
            ],
            "dates": 1992,
            "url": "https://home.oberlin.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "2015 (in progress)",
            "url": "https://www.udacity.com/"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        $('.education-entry:last').append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedSchoolLocation);
        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', major);
            $('.education-entry:last').append(formattedSchoolMajor);
        });
    });
    // online
    $('.education-entry:last').append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {
        var formattedOnlineTitle = HTMLonlineTitle.replace('#', course.url).replace('%data%', course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
        $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', course.date);
        $('.education-entry:last').append(formattedOnlineDates);
        var formattedOnlineURL = HTMLonlineURL.replace('#', course.url).replace('%data%', course.url);
        $('.education-entry:last').append(formattedOnlineURL);
    });
};

/* INVOKE FUNCTIONS TO MAKE PAGE */

bio.display();

work.display();

projects.display();

education.display();

// add map
$('#mapDiv').append(googleMap);

// internationalize button
$('#main').append(internationalizeButton);
