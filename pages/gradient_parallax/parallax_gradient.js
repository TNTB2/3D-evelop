document.addEventListener("DOMContentLoaded", () => {
  const gradient = document.querySelector(".gradient-layer");

  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  let isInteracting = false;
  let animationId;
  let idleX = 0;
  let direction = 1;

  let targetX = 50;
  let targetY = 50;
  let currentX = 50;
  let currentY = 50;

  // Update the gradient background based on current values
  const updateGradient = () => {
    gradient.style.background = `radial-gradient(circle at ${currentX}% ${currentY}%, #00f2fe, #4facfe, #2a2a72)`;
  };

  // Animation loop that handles interaction and idle motion
  const animate = () => {
    if (!isInteracting || isMobile) {
      idleX += 0.2 * direction;
      if (idleX >= 100 || idleX <= 0) direction *= -1;
      targetX = idleX;
      targetY = 50;
    }

    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    updateGradient();
    animationId = requestAnimationFrame(animate);
  };

  // Start the animation
  animate();

  if (!isMobile) {
    const onMove = (x, y) => {
      isInteracting = true;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      targetX = (x / vw) * 100;
      targetY = (y / vh) * 100;
    };

    // Track mouse movement across the whole window
    window.addEventListener("mousemove", (e) => {
      onMove(e.clientX, e.clientY);
    });

    // Track finger movement for touchscreens
    window.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];
      onMove(touch.clientX, touch.clientY);
    });

    // When user leaves the page area, revert to idle
    document.addEventListener("mouseleave", () => {
      isInteracting = false;
    });

    // Optional: Resume interaction when mouse re-enters page
    document.addEventListener("mouseenter", () => {
      isInteracting = true;
    });

    // Stop interaction after a touch ends
    window.addEventListener("touchend", () => {
      isInteracting = false;
    });
  }
});
