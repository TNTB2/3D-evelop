// mobileNavigation.js

let currentMobileSection = null;

// Show the navigation for the selected brochure
function showNavigation(brochureNav) {
    brochureNav.style.display = "block";
}

// Hide the brochure cover if on mobile (using class only)
function hideBrochureCoverIfMobile(brochureSection) {
    const brochureCover = brochureSection.querySelector(".brochure-cover");
    if (brochureCover && window.innerWidth <= 768) {
        brochureCover.classList.add("hidden");
        console.log("Brochure cover hidden for mobile view.");
    }
}

// Main section switching logic
function showMobileSection(targetSection, navItem, brochureNav) {
    if (currentMobileSection && currentMobileSection !== targetSection) {
        currentMobileSection.classList.remove("show-content");

        setTimeout(() => {
            currentMobileSection.style.display = "none";

            targetSection.style.display = "block";
            setTimeout(() => {
                targetSection.classList.add("show-content");
                currentMobileSection = targetSection;
            }, 10);
        }, 500);
    } else {
        targetSection.style.display = "block";
        setTimeout(() => {
            targetSection.classList.add("show-content");
            currentMobileSection = targetSection;
        }, 10);
    }

    // Show nav for selected brochure
    showNavigation(brochureNav);

    // Hide brochure cover (if mobile)
    const brochureSection = targetSection.closest(".brochure-section");
    if (brochureSection) {
        hideBrochureCoverIfMobile(brochureSection);
    }

    // Highlight nav item
    document.querySelectorAll('.brochure-nav li').forEach(item => {
        item.classList.remove('active');
    });
    navItem.classList.add('active');
}

// View functions for Web Development
function viewIndex(navItem) {
    showMobileSection(webAboutContent, navItem, document.getElementById("web-nav"));
}

function viewInfo(navItem) {
    showMobileSection(webInfoContent, navItem, document.getElementById("web-nav"));
}

function viewGallery(navItem) {
    showMobileSection(webGalleryContent, navItem, document.getElementById("web-nav"));
}

// View functions for Sculpting
function viewSculptingIndex(navItem) {
    showMobileSection(sculptingAboutContent, navItem, document.getElementById("sculpting-nav"));
}

function viewSculptingInfo(navItem) {
    showMobileSection(sculptingInfoContent, navItem, document.getElementById("sculpting-nav"));
}

function viewSculptingGallery(navItem) {
    showMobileSection(sculptingGalleryContent, navItem, document.getElementById("sculpting-nav"));
}

// View functions for Design
function viewDesignIndex(navItem) {
    showMobileSection(designAboutContent, navItem, document.getElementById("design-nav"));
}

function viewDesignInfo(navItem) {
    showMobileSection(designInfoContent, navItem, document.getElementById("design-nav"));
}

function viewDesignGallery(navItem) {
    showMobileSection(designGalleryContent, navItem, document.getElementById("design-nav"));
}
