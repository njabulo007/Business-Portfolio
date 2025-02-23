// main.js
document.addEventListener('DOMContentLoaded', () => {
  // GSAP Scroll Animations
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.utils.toArray('.process-step').forEach((step, i) => {
      gsap.from(step, {
          scrollTrigger: {
              trigger: step,
              start: 'top center'
          },
          x: i % 2 ? 100 : -100,
          opacity: 0,
          duration: 0.8
      });
  });

  // Dynamic Background
  function updateTimeBasedBackground() {
      const hour = new Date().getHours();
      const angle = hour * 15; // 15 degrees per hour
      document.documentElement.style.setProperty('--time-gradient-angle', `${angle}deg`);
  }
  setInterval(updateTimeBasedBackground, 60000);

  // Live Preview System
  document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--preview-x', `${x}px`);
          card.style.setProperty('--preview-y', `${y}px`);
      });
  });
});

// three-init.js - 3D Scene Initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.webgl-canvas') });

// Add floating project mockups
const geometry = new THREE.SphereGeometry(1, 32, 16);
const material = new THREE.MeshPhongMaterial({ 
  color: 0xec4899,
  transparent: true,
  opacity: 0.8
});

const mockups = new THREE.Group();
for(let i = 0; i < 5; i++) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(Math.random() * 10 -5, Math.random() * 5 -2.5, Math.random() * -10);
  mockups.add(mesh);
}
scene.add(mockups);

function animate() {
  requestAnimationFrame(animate);
  mockups.rotation.y += 0.002;
  renderer.render(scene, camera);
}
animate();