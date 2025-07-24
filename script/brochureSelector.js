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

    // Show the back button (handled in backButton.js, this class triggers visibility)
    document.body.classList.add('show-back-button');

    // Show content sections for the selected brochure
    const contentSections = selectedBrochure.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.classList.remove('hidden');
        section.style.display = "block";
    });

    // Change background based on brochure
    document.body.classList.remove('web-bg', 'sculpting-bg', 'design-bg'); // Clear all first

    switch (selectedId) {
        case 'web-development':
            document.body.classList.add('web-bg');
            break;
        case 'sculpting':
            document.body.classList.add('sculpting-bg');
            break;
        case 'graphics-design':
            document.body.classList.add('design-bg');
            break;
        default:
            break;
    }

    // Update the main icon for the selected brochure (active state)
    updateMainIconState(selectedId);
}

// Function to update the main icon for the selected brochure
function updateMainIconState(selectedId) {
    // Reset main icons first
    resetMainIcons();

    // Get the main icon for the selected brochure
    const selectedBrochure = document.getElementById(selectedId);
    const mainIcon = selectedBrochure.querySelector('.brochure-cover h2 img');

    // Set the main icon to "selected"
    if (mainIcon) {
        mainIcon.src = mainIcon.getAttribute("data-selected");
    }
}

// Function to reset the main icons for all brochures
function resetMainIcons() {
    // Reset all main icons back to unselected state
    document.querySelectorAll('.brochure-cover h2 img').forEach(icon => {
        icon.src = icon.getAttribute("data-unselected");
    });
}

// Function to change main icon on hover
function updateMainIconOnHover(event, isHovered) {
    const mainIcon = event.querySelector('.brochure-cover h2 img');
    
    if (mainIcon) {
        if (isHovered) {
            mainIcon.src = mainIcon.getAttribute("data-hovered"); // Set to hovered state
        } else {
            mainIcon.src = mainIcon.getAttribute("data-unselected"); // Revert to unselected state
        }
    }
}

// Add event listeners to all brochure sections for click and hover
document.querySelectorAll('.brochure-section').forEach(section => {
    section.addEventListener('click', function () {
        // When clicked, show only the clicked brochure and hide others
        showBrochure(section.id);
    });

    // Add hover events to change the main icon
    section.addEventListener('mouseenter', function () {
        updateMainIconOnHover(section, true); // Hovered state
    });

    section.addEventListener('mouseleave', function () {
        updateMainIconOnHover(section, false); // Revert to unselected state
    });
});
