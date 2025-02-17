// Enhanced Interactive Features

// 1. Floating Particles Animation (Improved Performance)
class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.velocity = Math.random() * 2 + 1;
        this.radius = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.3;
    }

    update() {
        this.y += this.velocity;
        if (this.y > this.canvas.height + 50) this.reset();
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;
        this.ctx.fill();
    }
}

// 2. Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.hero').style.backgroundPositionY = 
        `${scrolled * 0.3}px`;
});

// 3. Interactive Service Cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.transform = `
            perspective(1000px)
            rotateX(${(y - rect.height/2) / 15}deg)
            rotateY(${-(x - rect.width/2) / 15}deg)
            scale(1.05)
        `;
        
        card.querySelector('.shine').style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(255,255,255,0.5) 0%,
                rgba(255,255,255,0) 80%
            )
        `;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.querySelector('.shine').style.background = 'none';
    });
});

// 4. Portfolio Item Interactions
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if(!e.target.closest('.view-btn')) return;
        item.classList.toggle('expanded');
        document.body.classList.toggle('no-scroll');
    });
});

// 5. Form Input Animations
document.querySelectorAll('.input-group input').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentNode.querySelector('.input-focus').style.width = '100%';
    });
    
    input.addEventListener('blur', () => {
        if(!input.value) {
            input.parentNode.querySelector('.input-focus').style.width = '0';
        }
    });
});