document.querySelectorAll('.websiteBlock').forEach(block => {
  const bg = block.querySelector('.backgroundImage');

  block.addEventListener('mouseleave', () => {
    bg.style.transition = 'transform 1.5s ease-in-out';
    bg.style.transform = 'translateY(0%)';
  });

  block.addEventListener('mouseenter', () => {
    bg.style.transition = 'transform 1.5s ease-in-out';
    bg.style.transform = 'translateY(-50%)';
  });
});
