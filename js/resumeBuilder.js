// create display methods
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

  if (education.onlineCourses.length > 0) {
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

