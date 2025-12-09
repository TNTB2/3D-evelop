// -------------------------------------------
// 1. Dynamically create IMAGE elements
//    Skip this step for video projects
// -------------------------------------------
document.querySelectorAll('.project').forEach(project => {
    if (project.classList.contains('project-video')) return; // <-- skip videos

    const imageContainer = project.querySelector('.project-images');
    const images = project.dataset.images.split(',').map(src => src.trim());

    images.forEach((src, i) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `${project.querySelector('h2').textContent} Image ${i + 1}`;
        if (i === 0) img.classList.add('active');

        // If project uses contain-mode, add special class
        if (project.classList.contains('image-contain')) {
            img.classList.add('contain-mode');
        }

        imageContainer.appendChild(img);
    });
});



// -------------------------------------------
// 2. Slider logic (ONLY for image projects)
// -------------------------------------------
function initSliders() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    document.querySelectorAll('.project').forEach(project => {

        // Skip video slider content entirely
        if (project.classList.contains('project-video')) return;

        const images = Array.from(project.querySelectorAll('img'));
        if (images.length === 0) return; // safety check

        let index = 0;
        let interval;

        function showImage(i) {
            images.forEach(img => img.classList.remove('active'));
            if (images[i]) images[i].classList.add('active');
        }

        function startSlide() {
            interval = setInterval(() => {
                index = (index + 1) % images.length;
                showImage(index);
            }, 2000);
        }

        if (isMobile) {
            startSlide();
        } else {
            project.addEventListener('mouseenter', () => startSlide());
            project.addEventListener('mouseleave', () => {
                clearInterval(interval);
                index = 0;
                showImage(0);
            });
        }
    });
}

initSliders();



// -------------------------------------------
// 3. Filtering logic (unchanged)
// -------------------------------------------
const categorySelect = document.getElementById('categorySelect');
const projects = Array.from(document.querySelectorAll('.project'));

function filterProjects() {
    const selectedTag = categorySelect.value.toLowerCase();

    projects.forEach(project => {
        const projectTags = Array.from(project.querySelectorAll('.tag'))
            .map(t => t.textContent.toLowerCase());

        if (!selectedTag || projectTags.includes(selectedTag)) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
}

categorySelect.addEventListener('change', filterProjects);
