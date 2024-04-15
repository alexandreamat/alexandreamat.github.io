// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Alexandre",
  middleName: "",
  lastName: "Amat",
  message: "Senior Software Enginer",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/alexandreamat",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/amatalexandre/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/headshot.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message: `
    Greetings! I'm Alexandre Amat, a versatile Software Engineer driven by a
    passion for technical innovation and continuous learning.
    With a diverse background spanning multiple countries, cultures, and roles,
    I bring a unique perspective to every project I undertake.`,
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "alexandreamat", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/headshot.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: require("../editable-stuff/headshot.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
  ],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 95 },
    { name: "C", value: 95 },
    { name: "React", value: 85 },
    { name: "C++", value: 80 },
    { name: "JavaScript/TypeScript", value: 80 },
    { name: "SQL", value: 70 },
  ],
  softSkills: [
    { name: "English", value: 98 },
    { name: "Spanish", value: 98 },
    { name: "Chinese", value: 85 },
    { name: "French", value: 60 },
    { name: "Japanese", value: 5 },
    { name: "Catalan", value: 100 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Contact",
  message: `
  Currently based in San Francisco, California, and actively seeking challenging opportunities 
  in innovative tech environments within the San Francisco Bay Area.
  Eligible for CPT and OPT work permits.
  Feel free to reach me at`,
  email: "alexandreamat@icloud.com",
};

const experiences = {
  show: true,
  heading: "Work Experience",
  data: [
    {
      role: "Senior Software Engineer",
      companylogo: require("../assets/img/idrc.jpeg"),
      date: "Sep 2019 – Jun 2022",
      url: "https://gaiamesh.com",
    },
    {
      role: "Founding Software Engineer",
      companylogo: require("../assets/img/idrc.jpeg"),
      date: "Jan 2018 – Sep 2019",
      url: "https://gaiamesh.com",
    },
    {
      role: "Analyst",
      companylogo: require("../assets/img/alg.jpeg"),
      date: "Dec 2016 – Aug Jul",
      url: "https://www.alg-global.com",
    },
    {
      role: "Research Intern",
      companylogo: require("../assets/img/disney.jpeg"),
      date: "Summers 2015 and 206",
      url: "https://la.disneyresearch.com/labs/",
    },
  ],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
