// ============== SOCIAL-MEDIA SHARE-BUTTONS =============

let postUrl = encodeURI(document.location.href);
let postTitle = encodeURI("Check out this 3D-Developer's art-works and useful Developer-Level-skills that I found: ");

const whatsappBtn1 = document.querySelector(".wa-btn1");
const facebookBtn1 = document.querySelector(".fb-btn1");
const linkedInBtn1 = document.querySelector(".li-btn1");

const whatsappBtn2 = document.querySelector(".wa-btn2");
const facebookBtn2 = document.querySelector(".fb-btn2");
const linkedInBtn2 = document.querySelector(".li-btn2");

const whatsappBtn3 = document.querySelector(".wa-btn3");
const facebookBtn3 = document.querySelector(".fb-btn3");
const linkedInBtn3 = document.querySelector(".li-btn3");

const whatsappBtn4 = document.querySelector(".wa-btn4");
const facebookBtn4 = document.querySelector(".fb-btn4");
const linkedInBtn4 = document.querySelector(".li-btn4");

const whatsappBtn5 = document.querySelector(".wa-btn5");
const facebookBtn5 = document.querySelector(".fb-btn5");
const linkedInBtn5 = document.querySelector(".li-btn5");

const whatsappBtn6 = document.querySelector(".wa-btn6");
const facebookBtn6 = document.querySelector(".fb-btn6");
const linkedInBtn6 = document.querySelector(".li-btn6");

function init() {

    facebookBtn2.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn2.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn2.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );


    facebookBtn1.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn1.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn1.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );

    facebookBtn3.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn3.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn3.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );


    facebookBtn4.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn4.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn4.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );

    facebookBtn5.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn5.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn5.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );


    facebookBtn6.setAttribute(
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
    linkedInBtn6.setAttribute(
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );

    whatsappBtn6.setAttribute(
        "href",
        `https://wa.me/?text=${postTitle} ${postUrl}`
    );
}

init();