document.addEventListener("DOMContentLoaded", () => {
    const allIcons = document.querySelectorAll("img[data-unselected][data-hovered][data-selected]");

    // Reset all icons to unselected
    function resetIcons(group) {
        group.forEach(img => {
            const li = img.closest("li");
            if (li) li.classList.remove("icon-selected");
            img.src = img.getAttribute("data-unselected");
        });
    }

    // Handle hover
    allIcons.forEach((img) => {
        const li = img.closest("li");

        img.addEventListener("mouseenter", () => {
            if (!li || !li.classList.contains("icon-selected")) {
                img.src = img.getAttribute("data-hovered");
            }
        });

        img.addEventListener("mouseleave", () => {
            if (!li || !li.classList.contains("icon-selected")) {
                img.src = img.getAttribute("data-unselected");
            }
        });

        // Click = mark selected (only for <li>-based nav items)
        if (li) {
            li.addEventListener("click", () => {
                const section = li.closest(".brochure-section");
                if (!section) return;

                // Reset icons in this section only (nav + main)
                const sectionIcons = section.querySelectorAll("img[data-unselected][data-hovered][data-selected]");
                resetIcons(sectionIcons);

                // Mark this one selected
                li.classList.add("icon-selected");
                img.src = img.getAttribute("data-selected");

                // Update the big main icon too
                const mainIcon = section.querySelector(".brochure-cover h2 img");
                if (mainIcon) {
                    mainIcon.src = mainIcon.getAttribute("data-selected");
                }
            });
        }

        // Main icons also get hover effects
        if (!li) {
            img.addEventListener("mouseenter", () => {
                img.src = img.getAttribute("data-hovered");
            });
            img.addEventListener("mouseleave", () => {
                img.src = img.getAttribute("data-unselected");
            });
        }
    });
});
