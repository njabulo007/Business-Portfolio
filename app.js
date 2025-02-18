// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate cards on scroll
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".services",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});

// Animate portfolio items on scroll
gsap.from(".item", {
  scrollTrigger: {
    trigger: ".portfolio",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});