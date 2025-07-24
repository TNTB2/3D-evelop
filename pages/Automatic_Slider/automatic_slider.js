document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider-wrapper");

  sliders.forEach((wrapper, sliderIndex) => {
    const slides = wrapper.querySelectorAll(".slide");
    const indicatorsContainer = wrapper.querySelector(".indicators");
    const heading = wrapper.querySelector(".slider-heading");
    const prevBtn = wrapper.querySelector(".prev");
    const nextBtn = wrapper.querySelector(".next");

    let currentSlide = 0;
    let slideInterval;

    // Generate unique headings based on image filename
    slides.forEach((slide) => {
      const bgStyle = slide.style.backgroundImage;
      const match = bgStyle.match(/url\(['"]?\.?\/?([^'")]+)['"]?\)/);
      if (match && match[1]) {
        const filename = match[1].split('/').pop().split('.')[0]; // remove folder & extension
        const readableName = filename.replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2');
        slide.dataset.heading = readableName;
      }
    });

    // Create indicators
    slides.forEach((_, index) => {
      const dot = document.createElement("span");
      dot.dataset.index = index;
      dot.addEventListener("click", () => {
        showSlide(index);
        resetSlider();
      });
      indicatorsContainer.appendChild(dot);
    });

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      const dots = indicatorsContainer.querySelectorAll("span");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });

      heading.textContent = slides[index].dataset.heading || `Slide ${index + 1}`;
      currentSlide = index;
    }

    function nextSlide() {
      const next = (currentSlide + 1) % slides.length;
      showSlide(next);
    }

    function prevSlide() {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prev);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 5000);
    }

    function resetSlider() {
      clearInterval(slideInterval);
      startSlider();
    }

    if (prevBtn) prevBtn.addEventListener("click", () => {
      prevSlide();
      resetSlider();
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
      nextSlide();
      resetSlider();
    });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    wrapper.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    wrapper.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const threshold = 50;

      if (touchEndX < touchStartX - threshold) {
        nextSlide();
        resetSlider();
      }

      if (touchEndX > touchStartX + threshold) {
        prevSlide();
        resetSlider();
      }
    });

    // Initialise
    showSlide(0);
    startSlider();
  });
});
