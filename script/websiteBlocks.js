document.querySelectorAll('.websiteBlock').forEach(block => {
  const iframeContainer = block.querySelector('.iframeContainer');

  block.addEventListener('mouseenter', () => {
    iframeContainer.style.transition = 'transform 3s ease-in-out';
    iframeContainer.style.transform = 'translateY(-50%)';
  });

  block.addEventListener('mouseleave', () => {
    iframeContainer.style.transition = 'transform 3s ease-in-out';
    iframeContainer.style.transform = 'translateY(0%)';
  });
});
