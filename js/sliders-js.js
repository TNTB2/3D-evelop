

// ... SLIDER ...>>>!
let textSlideIndex = 1;
showTextSlides(textSlideIndex);

function plusTextSlides(n) {
    showTextSlides(textSlideIndex += n);
}

function showTextSlides(n) {
    let i;
    let slideText = document.getElementsByClassName("textSlider");
    if (n > slideText.length) {
        textSlideIndex = 1
    }
    if (n < 1) {
        textSlideIndex = slideText.length
    }
    for (i = 0; i < slideText.length; i++) {
        slideText[i].style.display = "none";
    }
    slideText[textSlideIndex - 1].style.display = "block";
}






// ...SLIDER TEXT DISPLAY FOR TABLET MODE AND ALL THE TEXT BLOCK INFORMATION...>>>!
let tabTextSlideIndex = 1;
showTabTextSlides(tabTextSlideIndex);


let tabSliderText1 = document.getElementById("tabResumeTxt1");
let tabSliderText2 = document.getElementById("tabResumeTxt2");
let tabSliderText3 = document.getElementById("tabResumeTxt3");

function plusTabTextSlides(n) {
    showTabTextSlides(tabTextSlideIndex += n);
    tabSliderText1.style.display = "none";
    tabSliderText2.style.display = "none";
    tabSliderText3.style.display = "none";
}

function showTabTextSlides(n) {
    let i;
    let tabSlideText = document.getElementsByClassName("textBtn");
    if (n > tabSlideText.length) {
        tabTextSlideIndex = 1
    }
    if (n < 1) {
        tabTextSlideIndex = tabSlideText.length
    }
    for (i = 0; i < tabSlideText.length; i++) {
        tabSlideText[i].style.display = "none";
    }
    tabSlideText[tabTextSlideIndex - 1].style.display = "block";
}

function showSliderText1() {

    if (tabSliderText1.style.display === "none") {
        tabSliderText1.style.display = "block";
        tabSliderText2.style.display = "none";
        tabSliderText3.style.display = "none";
    } else {
        tabSliderText1.style.display = "none";
    }

}
function showSliderText2() {
    if (tabSliderText2.style.display === "none") {
        tabSliderText1.style.display = "none";
        tabSliderText2.style.display = "block";
        tabSliderText3.style.display = "none";
    } else {
        tabSliderText2.style.display = "none";
    }

}
function showSliderText3() {
    if (tabSliderText3.style.display === "none") {
        tabSliderText1.style.display = "none";
        tabSliderText2.style.display = "none";
        tabSliderText3.style.display = "block";
    } else {
        tabSliderText3.style.display = "none";
    }

}