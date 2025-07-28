// ---------------------------------------------
// Cursor Reflections Setup
// ---------------------------------------------

const manualDelays = [0.3, 0.15, 0.1, 0.07, 0.05];

const reflections = [
  document.getElementById('cursor-1'),
  document.getElementById('cursor-2'),
  document.getElementById('cursor-3'),
  document.getElementById('cursor-4'),
  document.getElementById('cursor-5')
];

const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
document.body.appendChild(customCursor);

// Change hover target from '.infinity-mirror' to '.infinity-mirror-wrapper'
const section = document.querySelector('.infinity-mirror-wrapper');

const reflectionData = reflections.map((el, index) => ({
  el,
  x: 0,
  y: 0,
  delay: manualDelays[index]
}));

let targetX = 0;
let targetY = 0;
let isHovering = false;

function getRelativeCoords(e) {
  const rect = section.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

section.addEventListener('mouseenter', (e) => {
  const coords = getRelativeCoords(e);
  targetX = coords.x;
  targetY = coords.y;

  reflectionData.forEach(ref => {
    ref.x = targetX;
    ref.y = targetY;
    ref.el.style.display = 'block';
    ref.el.style.left = `${targetX}px`;
    ref.el.style.top = `${targetY}px`;
  });

  customCursor.classList.add('active');
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
  isHovering = true;
});

section.addEventListener('mousemove', (e) => {
  const coords = getRelativeCoords(e);
  targetX = coords.x;
  targetY = coords.y;

  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

section.addEventListener('mouseleave', () => {
  reflectionData.forEach(ref => {
    ref.el.style.display = 'none';
  });

  customCursor.classList.remove('active');
  isHovering = false;
});

function animateReflections() {
  if (isHovering) {
    reflectionData.forEach(ref => {
      ref.x += (targetX - ref.x) * ref.delay;
      ref.y += (targetY - ref.y) * ref.delay;
      ref.el.style.left = `${ref.x}px`;
      ref.el.style.top = `${ref.y}px`;
    });
  }
  requestAnimationFrame(animateReflections);
}

animateReflections();

// ---------------------------------------------
// Dynamically Size Mirror Blocks Proportionally
// ---------------------------------------------

function resizeMirrorBlocks() {
  const sectionRect = document.querySelector('.infinity-mirror').getBoundingClientRect();
  const baseWidth = sectionRect.width;
  const baseHeight = sectionRect.height;
  let scale = 1;

  const levels = [
    '.level-1',
    '.level-2',
    '.level-3',
    '.level-4',
    '.level-5'
  ];

  levels.forEach((selector) => {
    const el = document.querySelector(`.infinity-mirror ${selector}`);
    scale *= 0.85; // Scale down by 85% each level
    if (el) {
      el.style.width = `${baseWidth * scale}px`;
      el.style.height = `${baseHeight * scale}px`;
    }
  });
}

window.addEventListener('resize', resizeMirrorBlocks);
window.addEventListener('DOMContentLoaded', resizeMirrorBlocks);

// ---------------------------------------------
// Pulse Glow Animation
// ---------------------------------------------

const pulseElements = [
  document.querySelector('.infinity-mirror'),
  ...document.querySelectorAll('.mirror-block')
];

let pulseIndex = 0;
const pulseDuration = 430;

function pulseNext() {
  pulseElements.forEach(el => el.classList.remove('pulse'));
  pulseElements[pulseIndex].classList.add('pulse');
  pulseIndex = (pulseIndex + 1) % pulseElements.length;
  setTimeout(pulseNext, pulseDuration);
}

setTimeout(pulseNext, pulseDuration);
