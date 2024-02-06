 // ...PROJECT DETAILS SLIDER AND CLOSE BUTTON...>>>!

 let triggerClose1 = document.getElementById("nhbrcDepth");
 let triggerClose2 = document.getElementById("homeProjectDepth");
 let triggerClose3 = document.getElementById("configuratorDepth");
 let triggerClose4 = document.getElementById("showcaseHomeDepth");
 let triggerClose5 = document.getElementById("productDepth");
 let triggerClose6 = document.getElementById("producyDisplayDepth");

 function showProjectDetails1() {
     triggerClose1.style.display = "table";
 }
 function showProjectDetails2() {
     triggerClose2.style.display = "table";
 }
 function showProjectDetails3() {
     triggerClose3.style.display = "table";
 }
 function showProjectDetails4() {
     triggerClose4.style.display = "table";
 }
 function showProjectDetails5() {
     triggerClose5.style.display = "table";
 }
 function showProjectDetails6() {
     triggerClose6.style.display = "table";
 }

 let slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
     showSlides(slideIndex += n);
 }

 function currentSlide(n) {
     showSlides(slideIndex = n);
 }

 function showSlides(n) {
     let i;
     let slides1 = document.getElementsByClassName("mySlides1");
     let slides2 = document.getElementsByClassName("mySlides2");
     let slides3 = document.getElementsByClassName("mySlides3");
     let slides4 = document.getElementsByClassName("mySlides4");
     let slides5 = document.getElementsByClassName("mySlides5");
     let slides6 = document.getElementsByClassName("mySlides6");

     let dots = document.getElementsByClassName("dot");
     if (n > slides1.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides1.length }
     for (i = 0; i < slides1.length; i++) {
         slides1[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides1[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

     if (n > slides2.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides2.length }
     for (i = 0; i < slides2.length; i++) {
         slides2[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides2[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

     if (n > slides3.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides3.length }
     for (i = 0; i < slides3.length; i++) {
         slides3[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides3[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

     if (n > slides4.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides4.length }
     for (i = 0; i < slides4.length; i++) {
         slides4[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides4[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

     if (n > slides5.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides5.length }
     for (i = 0; i < slides5.length; i++) {
         slides5[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides5[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";

     if (n > slides6.length) { slideIndex = 1 }
     if (n < 1) { slideIndex = slides6.length }
     for (i = 0; i < slides6.length; i++) {
         slides6[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides6[slideIndex - 1].style.display = "block";
     dots[slideIndex - 1].className += " active";
 }

 function closeProject() {
     triggerClose1.style.display = "none";
     triggerClose2.style.display = "none";
     triggerClose3.style.display = "none";
     triggerClose4.style.display = "none";
     triggerClose5.style.display = "none";
     triggerClose6.style.display = "none";
 }