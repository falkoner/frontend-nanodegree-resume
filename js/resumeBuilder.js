var bio = {
  'name': 'Alex Fry',
  'role': 'Web Developer',
  'contacts': {
    'mobile': '650-555-5555',
    'email': 'afry@gmail.com',
    'github': 'afry',
    'twitter': '@afry',
    'location': 'San Jose'
  },
  'welcomeMessage': 'Back to the future of the past!',
  'skills': [
    'build things',
    'brake things',
    'debug things',
    'report and present things',
    'investigate',
    'be fun'
  ],
  'bioPic': 'images/fry.jpg'
};

bio.display = function () {
  var formattedName = HTMLheaderName.replace('%data%', bio.name);
  var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

  var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
  var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
  var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
  var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
  var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);

  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

  $('#topContacts').append(formattedMobile);
  $('#topContacts').append(formattedEmail);
  $('#topContacts').append(formattedGithub);
  $('#topContacts').append(formattedTwitter);
  $('#topContacts').append(formattedLocation);

  $('#header').append(formattedBioPic);
  $('#header').append(formattedWelcomeMsg);

  // build Skills section
  $('#header').append(HTMLskillsStart);
  bio.skills.forEach(function (skill) {
    $('#skills').append(HTMLskills.replace('%data%', skill));
  });

  // build Footer section
  $('#footerContacts').append(formattedMobile);
  $('#footerContacts').append(formattedEmail);
  $('#footerContacts').append(formattedGithub);
  $('#footerContacts').append(formattedTwitter);
  $('#footerContacts').append(formattedLocation);
};

var education = {
  'schools': [
    {
      'name': 'Nova Scotia State University',
      'location': 'Eureca, CA',
      'degree': 'Masters',
      'majors': [
        'CS', 'BioTech'
      ],
      'dates': 2013,
      'url': 'http://novascotia.edu'
    },
    {
      'name': 'San Pedro Community Academy',
      'location': 'Hometown, AZ',
      'degree': 'Bachelor',
      'majors': [
        'CS', 'Philosophy'
      ],
      'dates': 2011,
      'url': 'http://spcomacademy.edu'
    }
  ],
  'onlineCourses': [
    {
      'title': 'JavaScript Syntax',
      'school': 'Udacity',
      'dates': 2014,
      'url': 'http://www.udacity.com/course/ud804'
    },
    {
      'title': 'HTML and CSS for all',
      'school': 'EdX',
      'dates': 2014,
      'url': 'http://www.edx.org'
    }
  ]
};

education.display = function () {
  education.schools.forEach(function(school){
    $('#education').append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
    var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
    $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
    $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
    $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
    school.majors.forEach(function(major){
      $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
    });
  });

  if (education.onlineCourses.length) {
    $('#education').append(HTMLonlineClasses);
  }
  education.onlineCourses.forEach(function(course){
    $('#education').append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', course.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', course.school);
    $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
    $('.education-entry:last').append(HTMLonlineDates.replace('%data%',course.dates));
    $('.education-entry:last').append(HTMLonlineURL.replace('%data%',course.url));
  });
};

var work = {
  'jobs': [
    {
      'employer': "Sam's Long Hands Inc.",
      'title': 'Front End Developer',
      'location': 'San Jose, CA',
      'dates': '2014-present',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat dolor quis dolor ullamcorper, vel mollis ipsum accumsan. Sed sit amet lorem est. Quisque sed tempus libero. Duis sollicitudin fringilla suscipit. Curabitur interdum leo lacus, in lobortis tortor aliquam eget. Quisque sit amet metus tellus. Vivamus molestie scelerisque libero. Praesent.'
    },
    {
      'employer': 'Berry Cafe',
      'title': 'Barista',
      'location': 'Seattle, WA',
      'dates': '2009-2014',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat dolor quis dolor ullamcorper, vel mollis ipsum accumsan. Sed sit amet lorem est. Quisque sed tempus libero. Duis sollicitudin fringilla suscipit. Curabitur interdum leo lacus, in lobortis tortor aliquam eget. Quisque sit amet metus tellus. Vivamus molestie scelerisque libero. Praesent.'
    }
  ]
};

work.display = function () {
  work.jobs.forEach(function (job) {
     $('#workExperience').append(HTMLworkStart);

     var formattedEmployerWithTitle = HTMLworkEmployer.replace('%data%', job.employer) +
        HTMLworkTitle.replace('%data%', job.title);

     $('.work-entry:last').append(formattedEmployerWithTitle);
     $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
     $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
     $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
  });
};

var projects = {
  'projects': [
    {
      'title': 'Lorem Impsum',
      'dates': '2014',
      'description': 'An interective web book with infinite text placeholder compiled of random public text selections',
      'images': [
        'images/197x148.gif',
        'images/197x148.gif'
      ]
    },
    {
      'title': 'Food Portfolio',
      'dates': '2012-present',
      'description': 'Specialized portfolio site for cooks to showcase their masterpieces',
      'images': [
        'images/197x148.gif',
        'images/197x148.gif'
      ]

    },
    {
      'title': 'Dice web service',
      'dates': '2011',
      'description': 'Web service to return random result of dice through',
      'images': []
    }
  ]
};

projects.display = function() {
  projects.projects.forEach(function (project) {
    $('#projects').append(HTMLprojectStart);

    $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
    $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
    $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));

    for (var i = project.images.length - 1; i >= 0; i--) {
      $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.images[i]));
    }
  });
};

// build Header section
bio.display();

// build Work Experience section
work.display();

// build Projects section
projects.display();

// build Education section
education.display();

// build Map section
$('#mapDiv').append(googleMap);

$('#main').append(internationalizeButton);
function inName (fullName) {
  name = fullName.split(' ')[0];
  name = name[0].toUpperCase() + name.substr(1).toLowerCase();

  lastname = fullName.split(' ')[1];
  lastname = lastname.toUpperCase();
  return name + ' ' + lastname;
}

