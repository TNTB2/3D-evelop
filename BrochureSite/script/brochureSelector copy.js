// Function to show a selected brochure and hide others
function showBrochure(selectedId) {
    // Hide all brochure sections
    document.querySelectorAll('.brochure-section').forEach(brochure => {
        brochure.classList.add('hidden');
    });

    // Show the selected brochure
    const selectedBrochure = document.getElementById(selectedId);
    if (selectedBrochure) {
        selectedBrochure.classList.remove('hidden');
    }

    // Show the back button
    document.body.classList.add('show-back-button');

    // ✅ Show content sections for the selected brochure
    const contentSections = selectedBrochure.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('hidden');
        section.style.display = "block";
    });

    
}

// Function to show all brochures again
function showAllBrochures() {
    // Show all brochure sections
    document.querySelectorAll('.brochure-section').forEach(brochure => {
        brochure.classList.remove('hidden');
    });

    // ✅ Also show all brochure covers
    document.querySelectorAll('.brochure-cover').forEach(cover => {
        cover.classList.remove('hidden');
    });

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
        section.style.display = "none";
    });

    // Hide the back button
    document.body.classList.remove('show-back-button');
}

// Add event listeners to all brochure sections for click
document.querySelectorAll('.brochure-section').forEach(section => {
    section.addEventListener('click', function () {
        // When clicked, show only the clicked brochure and hide others
        showBrochure(section.id);
    });
});
