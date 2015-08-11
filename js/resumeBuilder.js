var bio = {
  "name": "Alex Fry",
  "role": "Web Developer",
  "contacts": {
    "mobile": "650-555-5555",
    "email": "afry@gmail.com",
    "github": "afry",
    "twitter": "@afry",
    "location": "San Jose"
  },
  "welcomeMessage": "Back to the future of the past!",
  "skills": [
    "build things",
    "brake things",
    "debug things",
    "report and present things",
    "investigate",
    "be fun"
  ],
  "bioPic": "images/fry.jpg"
};

var education = {
  "schools": [
    {
      "name": "Nova Scotia State University",
      "location": "Eureca, CA",
      "degree": "Masters",
      "majors": [
        "CS", "BioTech"
      ],
      "dates": 2013,
      "url": "http://novascotia.edu"
    },
    {
      "name": "San Pedro Community Academy",
      "location": "Hometown, AZ",
      "degree": "Bachelor",
      "majors": [
        "CS", "Philosophy"
      ],
      "dates": 2011,
      "url": "http://spcomacademy.edu"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Syntax",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com/course/ud804"
    },
    {
      "title": "HTML and CSS for all",
      "school": "EdX",
      "data": 2014,
      "url": "http://www.edx.org"
    }
  ]
};

var work = {
  "jobs": [
    {
      "employer": "Sam's Long Hands Inc.",
      "title": "Front End Developer",
      "location": "San Jose, CA",
      "dates": "2014-present",
      "description": "n/a"
    },
    {
      "employer": "Berry Cafe",
      "title": "Barista",
      "location": "Seattle, WA",
      "dates": "2009-2014",
      "description": "n/a"
    }
  ]
};

var projects = [
  {
    "title": "Lorem Impsum",
    "dates": "2014",
    "description": "An interective web book with infinite text placeholder compiled of random public text selections",
    "images": [
      "images/197x148.gif",
      "images/197x148.gif"
    ]
  },
  {
    "title": "Food Portfolio",
    "dates": "2012-present",
    "description": "Specialized portfolio site for cooks to showcase their masterpieces",
    "images": [
      "images/197x148.gif",
      "images/197x148.gif"
    ]

  }
];

// build Header section
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(HTMLskillsStart);

for (skill in bio.skills) {
  $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
}

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedLocation);


// build Work Experience section


// build Projects section

// build Education section

// build Map section


// build Footer section


