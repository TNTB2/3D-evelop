// Web Development Content
const webAboutContent = document.getElementById("web_index");
const webInfoContent = document.getElementById("web_info");
const webGalleryContent = document.getElementById("web_gallery");

// 3D Sculpting Content
const sculptingAboutContent = document.getElementById("sculpting_index");
const sculptingInfoContent = document.getElementById("sculpting_info");
const sculptingGalleryContent = document.getElementById("sculpting_gallery");

// Graphics Design Content
const designAboutContent = document.getElementById("design_index");
const designInfoContent = document.getElementById("design_info");
const designGalleryContent = document.getElementById("design_gallery");

let currentSection = null;

function showSection(targetSection, navItem) {
    if (currentSection && currentSection !== targetSection) {
        // Animate out the current section
        currentSection.classList.remove("show-content");

        // After the fade-out is done, hide it
        setTimeout(() => {
            currentSection.style.display = "none";

            // Now show the target section
            targetSection.style.display = "block";
            setTimeout(() => {
                targetSection.classList.add("show-content");
                currentSection = targetSection;
            }, 10); // tiny delay to allow DOM to apply display:block before animation
        }, 500); // Match the CSS transition time
    } else {
        // First load or same section
        targetSection.style.display = "block";
        setTimeout(() => {
            targetSection.classList.add("show-content");
            currentSection = targetSection;
        }, 10);
    }

    // Add 'active' class to the clicked navigation item and remove it from others
    document.querySelectorAll('.brochure-nav li').forEach(item => {
        item.classList.remove('active');
    });
    navItem.classList.add('active');
}

// Web Development Navigation
function viewIndex(navItem) {
    showSection(webAboutContent, navItem);
}

function viewInfo(navItem) {
    showSection(webInfoContent, navItem);
}

function viewGallery(navItem) {
    showSection(webGalleryContent, navItem);
}

// 3D Sculpting Navigation
function viewSculptingIndex(navItem) {
    showSection(sculptingAboutContent, navItem);
}

function viewSculptingInfo(navItem) {
    showSection(sculptingInfoContent, navItem);
}

function viewSculptingGallery(navItem) {
    showSection(sculptingGalleryContent, navItem);
}

// Graphics Design Navigation
function viewDesignIndex(navItem) {
    showSection(designAboutContent, navItem);
}

function viewDesignInfo(navItem) {
    showSection(designInfoContent, navItem);
}

function viewDesignGallery(navItem) {
    showSection(designGalleryContent, navItem);
}
