// Generate animated stars
function createStars() {
    const starsContainer = document.getElementById('starsContainer');
    const numStars = 150;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        starsContainer.appendChild(star);
    }
}

// Opening animation
function showMainContent() {
    const openingScreen = document.getElementById('openingScreen');
    const mainContent = document.getElementById('mainContent');
    
    setTimeout(() => {
        openingScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    }, 3000);
}

// Birthday button celebration
function celebrateBirthday() {
    const button = document.getElementById('birthdayButton');
    button.classList.add('playing');
    
    // Create floating hearts
    for (let i = 0; i < 10; i++) {
        createFloatingHeart();
    }
    
    setTimeout(() => {
        button.classList.remove('playing');
    }, 2000);
}

// Create floating hearts animation
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = '1.5rem';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '100';
    heart.style.animation = 'float-up 3s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Parallax effect for stars
function addParallaxEffect() {
    document.addEventListener('mousemove', (e) => {
        const stars = document.querySelectorAll('.star');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        stars.forEach((star, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            star.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

// Add floating hearts animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float-up {
        0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    showMainContent();
    addParallaxEffect();
    
    // Add event listener to birthday button
    const birthdayButton = document.getElementById('birthdayButton');
    birthdayButton.addEventListener('click', celebrateBirthday);
});