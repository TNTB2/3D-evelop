

// ...NAVIGATION FOR TABLET MODE && SHOW/HIDE ANIMATION FOR THE DISPLAY/BURGER MENU...>>>!

let navLinks = document.getElementById("bodyBox");
let navigationId = document.getElementById("navBox");
let activeNav1 = document.getElementById("home-btn");
let activeNav2 = document.getElementById("resume-btn");
let activeNav3 = document.getElementById("project-btn");
let activeNav4 = document.getElementById("contact-btn");
//let imageText = document.getElementById("imageBox");

function burgerFunction() {

    //var tabNav = navLinks.style.display;
    //navLinks.style.display = "block";


    if (navLinks.classList.contains('hide') && navigationId.classList.contains('hideIt')) {  //&& imageText.classList.contains('hideIt')
        navLinks.classList.remove('hide');
        navigationId.classList.remove('hideIt');
        //imageText.classList.remove('hideIt');
    } else {
        navLinks.classList.add('hide');
        navigationId.classList.add('hideIt');
        //imageText.classList.add('hideIt');
    };
}



let aboutContent = document.getElementById("about");
let resumeContent = document.getElementById("resumeSkillset");
let projectContent = document.getElementById("projects");
let contactContent = document.getElementById("contact");

var xAbout = aboutContent.style.display;
var xSkill = resumeContent.style.display;
var xProject = projectContent.style.display;
var xContact = contactContent.style.display;

let informationContent = document.getElementById("informationContent");
//var infoCont = informationContent.style.width;
//var infoCont = informationContent.style.transition;


let myVar = 0;

if (resumeContent.style.display === "block" && aboutContent.style.display === "block") {

    myVar = 1;
    console.log("res-about");

} else if (projectContent.style.display === "block" && aboutContent.style.display === "block") {

    console.log("proj-about");

} else if (contactContent.style.display === "block" && aboutContent.style.display === "block") {

    console.log("cont-about");
}

function goToHomePage() {
    aboutContent.style.display = "block";
    resumeContent.style.display = "none";
    projectContent.style.display = "none";
    contactContent.style.display = "none";
    navigationId.classList.add('hideIt');
    navLinks.classList.add('hide');

    activeNav1.classList.add('activeNav');

    if (activeNav1.classList.contains('activeNav')) {

        if (informationContent.classList.contains('toggleInfoDefault')) {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("toggleInfoDefault removed");
            informationContent.style.width = "70%";
            aboutContent.style.display = "block";

        } else {
            informationContent.classList.add('toggleInfoDefault');
            console.log("toggleInfoDefault added");
            informationContent.style.width = "1%";
            aboutContent.style.display = "none";
        };
    };

    if (activeNav2.classList.contains('activeNav') || activeNav3.classList.contains('activeNav') || activeNav4.classList.contains('activeNav')) {
        console.log("*********");
        informationContent.classList.add('toggleInfoDefault');
        informationContent.style.width = "1%";
        aboutContent.style.display = "none";

        setTimeout(() => {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("***SetTimeout***");
            informationContent.style.width = "70%";
            aboutContent.style.display = "block";
        }
            , 1000);
    }

    activeNav2.classList.remove('activeNav');
    activeNav3.classList.remove('activeNav');
    activeNav4.classList.remove('activeNav');

};

function goToResumePage() {
    aboutContent.style.display = "none";
    resumeContent.style.display = "block";
    projectContent.style.display = "none";
    contactContent.style.display = "none";
    navigationId.classList.add('hideIt');
    navLinks.classList.add('hide');

    activeNav2.classList.add('activeNav');

    if (activeNav2.classList.contains('activeNav')) {

        if (informationContent.classList.contains('toggleInfoDefault')) {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("toggleInfoDefault removed resume");
            informationContent.style.width = "70%";
            resumeContent.style.display = "block";
        } else {
            informationContent.classList.add('toggleInfoDefault');
            console.log("toggleInfoDefault added resume");
            informationContent.style.width = "1%";
            resumeContent.style.display = "none";
        };
    };

    if (activeNav1.classList.contains('activeNav') || activeNav3.classList.contains('activeNav') || activeNav4.classList.contains('activeNav')) {
        console.log("*********");
        informationContent.classList.add('toggleInfoDefault');
        informationContent.style.width = "1%";
        resumeContent.style.display = "none";

        setTimeout(() => {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("***SetTimeout***");
            informationContent.style.width = "70%";
            resumeContent.style.display = "block";
        }
            , 1000);
    }

    activeNav1.classList.remove('activeNav');
    activeNav3.classList.remove('activeNav');
    activeNav4.classList.remove('activeNav');

};

function goToProjectPage() {
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
    projectContent.style.display = "block";
    contactContent.style.display = "none";
    navigationId.classList.add('hideIt');
    navLinks.classList.add('hide');


    activeNav3.classList.add('activeNav');

    if (activeNav3.classList.contains('activeNav')) {

        if (informationContent.classList.contains('toggleInfoDefault')) {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("toggleInfoDefault removed proj");
            informationContent.style.width = "70%";
            projectContent.style.display = "block";
        } else {
            informationContent.classList.add('toggleInfoDefault');
            console.log("toggleInfoDefault added proj");
            informationContent.style.width = "1%";
            projectContent.style.display = "none";
        };
    };

    if (activeNav2.classList.contains('activeNav') || activeNav1.classList.contains('activeNav') || activeNav4.classList.contains('activeNav')) {
        console.log("*********");
        informationContent.classList.add('toggleInfoDefault');
        informationContent.style.width = "1%";
        projectContent.style.display = "none";

        setTimeout(() => {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("***SetTimeout***");
            informationContent.style.width = "70%";
            projectContent.style.display = "block";
        }
            , 1000);
    }

    activeNav2.classList.remove('activeNav');
    activeNav1.classList.remove('activeNav');
    activeNav4.classList.remove('activeNav');
};

function goToContactPage() {
    aboutContent.style.display = "none";
    resumeContent.style.display = "none";
    projectContent.style.display = "none";
    contactContent.style.display = "block";
    navigationId.classList.add('hideIt');
    navLinks.classList.add('hide');

    activeNav4.classList.add('activeNav');

    if (activeNav4.classList.contains('activeNav')) {

        if (informationContent.classList.contains('toggleInfoDefault')) {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("toggleInfoDefault removed contact");
            informationContent.style.width = "70%";
            contactContent.style.display = "block";
        } else {
            informationContent.classList.add('toggleInfoDefault');
            console.log("toggleInfoDefault added contact");
            informationContent.style.width = "1%";
            contactContent.style.display = "none";
        };
    };

    if (activeNav2.classList.contains('activeNav') || activeNav3.classList.contains('activeNav') || activeNav1.classList.contains('activeNav')) {
        console.log("*********");
        informationContent.classList.add('toggleInfoDefault');
        informationContent.style.width = "1%";
        contactContent.style.display = "none";

        setTimeout(() => {
            informationContent.classList.remove('toggleInfoDefault');
            console.log("***SetTimeout***");
            informationContent.style.width = "70%";
            contactContent.style.display = "block";
        }
            , 1000);
    }

    activeNav2.classList.remove('activeNav');
    activeNav3.classList.remove('activeNav');
    activeNav1.classList.remove('activeNav');
};