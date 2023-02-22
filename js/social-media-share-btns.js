 // ============== SOCIAL-MEDIA SHARE-BUTTONS =============

 const whatsappBtn = document.querySelector(".wa-btn");
 const facebookBtn = document.querySelector(".fb-btn");
 const linkedInBtn = document.querySelector(".li-btn");

 function init() {

     let postUrl = encodeURI(document.location.href);
     let postTitle = encodeURI("Hi everyone, please check this out: ");

     facebookBtn.setAttribute(
         "href",
         `https://www.facebook.com/sharer.php?u=${"httpstntb2.github.ioTNTB2.github.io-#"}`
     );
     linkedInBtn.setAttribute(
         "href",
         `https://www.linkedin.com/shareArticle?url=${"httpstntb2.github.ioTNTB2.github.io-#"}&title=${"3d-Designer/Tiaan-Bezuidenhout"}`
     );

     whatsappBtn.setAttribute(
         "href",
         `https://wa.me/?text=${"3d-Designer/Tiaan-Bezuidenhout"} ${"httpstntb2.github.ioTNTB2.github.io-#"}`
     );
 }

 init();