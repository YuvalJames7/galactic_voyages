// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Form validation and enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation to form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = form.querySelector('input[type="submit"], button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<span class="loading"></span> Processing...';
                submitBtn.disabled = true;
            }
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add typing effect to hero title (if on home page)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && heroTitle.textContent.includes('Welcome to Galactic Voyages')) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }

    // Add countdown timer for next launch (example)
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        const launchDate = new Date('2024-12-31T00:00:00').getTime();
        
        const countdown = setInterval(function() {
            const now = new Date().getTime();
            const distance = launchDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            
            if (distance < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "LAUNCHED!";
            }
        }, 1000);
    }

    // Add interactive star field background
    createStarField();
});

// Create animated star field
function createStarField() {
    const starField = document.createElement('div');
    starField.style.position = 'fixed';
    starField.style.top = '0';
    starField.style.left = '0';
    starField.style.width = '100%';
    starField.style.height = '100%';
    starField.style.pointerEvents = 'none';
    starField.style.zIndex = '-1';
    
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite`;
        
        starField.appendChild(star);
    }
    
    document.body.appendChild(starField);
}

// Add CSS for star animation
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
    }
`;
document.head.appendChild(style);

// Add interactive elements
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.position = 'fixed';
        newCursor.style.width = '20px';
        newCursor.style.height = '20px';
        newCursor.style.borderRadius = '50%';
        newCursor.style.background = 'rgba(0, 212, 255, 0.5)';
        newCursor.style.pointerEvents = 'none';
        newCursor.style.zIndex = '9999';
        newCursor.style.transition = 'transform 0.1s ease';
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Add sound effects (optional - requires audio files)
function playSound(soundName) {
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.volume = 0.3;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

// Add click sound to buttons
document.querySelectorAll('button, .cta-button').forEach(button => {
    button.addEventListener('click', () => {
        // playSound('click'); // Uncomment if you add sound files
    });
});