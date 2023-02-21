

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

 function goToHomePage() {
     aboutContent.style.display = "block";
     resumeContent.style.display = "none";
     projectContent.style.display = "none";
     contactContent.style.display = "none";
     navigationId.classList.add('hideIt');
     navLinks.classList.add('hide');

     activeNav1.classList.add('activeNav');
     if (activeNav1.classList.contains('activeNav')) {
         activeNav2.classList.remove('activeNav');
         activeNav3.classList.remove('activeNav');
         activeNav4.classList.remove('activeNav');
     }
 }
 function goToResumePage() {
     aboutContent.style.display = "none";
     resumeContent.style.display = "block";
     projectContent.style.display = "none";
     contactContent.style.display = "none";
     navigationId.classList.add('hideIt');
     navLinks.classList.add('hide');

     activeNav2.classList.add('activeNav');

     if (activeNav2.classList.contains('activeNav')) {
         activeNav1.classList.remove('activeNav');
         activeNav3.classList.remove('activeNav');
         activeNav4.classList.remove('activeNav');
     }
 }
 function goToProjectPage() {
     aboutContent.style.display = "none";
     resumeContent.style.display = "none";
     projectContent.style.display = "block";
     contactContent.style.display = "none";
     navigationId.classList.add('hideIt');
     navLinks.classList.add('hide');


     activeNav3.classList.add('activeNav');

     if (activeNav3.classList.contains('activeNav')) {
         activeNav1.classList.remove('activeNav');
         activeNav2.classList.remove('activeNav');
         activeNav4.classList.remove('activeNav');
     }
 }
 function goToContactPage() {
     aboutContent.style.display = "none";
     resumeContent.style.display = "none";
     projectContent.style.display = "none";
     contactContent.style.display = "block";
     navigationId.classList.add('hideIt');
     navLinks.classList.add('hide');

     activeNav4.classList.add('activeNav');

     if (activeNav4.classList.contains('activeNav')) {
         activeNav1.classList.remove('activeNav');
         activeNav2.classList.remove('activeNav');
         activeNav3.classList.remove('activeNav');
     }
 }