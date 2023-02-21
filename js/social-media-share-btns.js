 // ============== SOCIAL-MEDIA SHARE-BUTTONS =============

 const whatsappBtn = document.querySelector(".wa-btn");
 const facebookBtn = document.querySelector(".fb-btn");
 const linkedInBtn = document.querySelector(".li-btn");

 function init() {

     let postUrl = encodeURI(document.location.href);
     let postTitle = encodeURI("Hi everyone, please check this out: ");

     facebookBtn.setAttribute(
         "href",
         `https://www.facebook.com/sharer.php?u=${postUrl}`
     );
     linkedInBtn.setAttribute(
         "href",
         `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
     );

     whatsappBtn.setAttribute(
         "href",
         `https://wa.me/?text=${postTitle} ${postUrl}`
     );
 }

 init();