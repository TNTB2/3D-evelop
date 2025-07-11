function showAllBrochures() {
    // Show all brochure sections
    document.querySelectorAll('.brochure-section').forEach(brochure => {
        brochure.classList.remove('hidden');
    });

    // Also show brochure covers
    document.querySelectorAll('.brochure-cover').forEach(cover => {
        cover.classList.remove('hidden');
    });

    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('hidden');
        section.style.display = 'none';
    });

    // Hide back button indicator
    document.body.classList.remove('show-back-button');

    // Clear any background styles
    document.body.classList.remove('web-bg', 'sculpting-bg', 'design-bg');

    // Reset icons
    resetMainIcons();
}

function initBackButtons() {
    const backButtons = document.querySelectorAll('.back-btn, .back-btn-nav-button');

    backButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation(); // ✅ Prevent click bubbling from brochure cover
            showAllBrochures();
        });
    });
}

// Ensure it runs after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBackButtons);
} else {
    initBackButtons();
}
