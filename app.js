// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Portfolio Projects Data
const projects = [
    {
        title: "E-commerce Website",
        image: "path-to-image-1.jpg",
        description: "Modern e-commerce platform built with React and Node.js",
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        link: "#"
    },
    {
        title: "Photography Portfolio",
        image: "path-to-image-2.jpg",
        description: "Responsive photography portfolio with gallery features",
        technologies: ["HTML", "CSS", "JavaScript", "Lightbox"],
        link: "#"
    },
    // Add more projects as needed
];

// Hero Section Animations
document.addEventListener('DOMContentLoaded', () => {
    // Hero animations
    const timeline = gsap.timeline();
    timeline.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .to('.weather-widget', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5');

    // Scroll button animation
    gsap.to('.scroll-btn', {
        y: 20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });

    // Initialize portfolio cards
    initializePortfolio();

    // Initialize weather widget
    initializeWeather();

    // Initialize particle system
    initializeParticles();

    // Initialize form animations
    initializeForm();
});

// Portfolio Cards Initialization
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    projects.forEach(project => {
        const card = createPortfolioCard(project);
        portfolioGrid.appendChild(card);
    });

    // Add scroll animations
    gsap.from('.portfolio-card', {
        scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top center',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    });
}

function createPortfolioCard(project) {
    const card = document.createElement('div');
    card.className = 'portfolio-card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="card-back">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        </div>
    `;
    return card;
}

// Weather API Integration
async function initializeWeather() {