// Global variables
let currentUser = null;
let isFlipped = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    setupFormHandlers();
    setupAnimations();
});

// Setup form handlers
function setupFormHandlers() {
    // Login form
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    
    // Signup form
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
}

// Setup animations
function setupAnimations() {
    // Add entrance animation to book
    setTimeout(() => {
        document.querySelector('.book').style.opacity = '1';
        document.querySelector('.book').style.transform = 'translateY(0) scale(1)';
    }, 300);
}

// Handle login
async function handleLogin(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.auth-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.loading-spinner');
    
    // Show loading state
    submitBtn.classList.add('loading');
    btnText.style.display = 'none';
    spinner.style.display = 'block';
    
    // Add page turning animation
    addPageTurnEffect();
    
    const formData = new FormData(form);
    const loginData = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            currentUser = result.user;
            showSuccessAnimation('Welcome back!', 'Redirecting to your dashboard...');
            
            // Store token
            localStorage.setItem('authToken', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            
            // Redirect after animation
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2500);
            
        } else {
            showToast(result.message || 'Login failed', 'error');
            resetButton(submitBtn, btnText, spinner);
        }
    } catch (error) {
        console.error('Login error:', error);
        showToast('Network error. Please try again.', 'error');
        resetButton(submitBtn, btnText, spinner);
    }
}

// Handle signup
async function handleSignup(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.auth-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const spinner = submitBtn.querySelector('.loading-spinner');
    
    const formData = new FormData(form);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Validate passwords match
    if (password !== confirmPassword) {
        showToast('Passwords do not match!', 'error');
        return;
    }
    
    // Show loading state
    submitBtn.classList.add('loading');
    btnText.style.display = 'none';
    spinner.style.display = 'block';
    
    // Add page turning animation
    addPageTurnEffect();
    
    const signupData = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: password
    };
    
    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData)
        });
        
        const result = await response.json();
        
        if (response.ok) {
            showSuccessAnimation('Account Created!', 'Welcome to CodeRoadmaps!');
            
            // Auto login after signup
            setTimeout(async () => {
                try {
                    const loginResponse = await fetch('/api/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: signupData.email,
                            password: signupData.password
                        })
                    });
                    
                    const loginResult = await loginResponse.json();
                    
                    if (loginResponse.ok) {
                        localStorage.setItem('authToken', loginResult.token);
                        localStorage.setItem('user', JSON.stringify(loginResult.user));
                        window.location.href = 'index.html';
                    }
                } catch (error) {
                    console.error('Auto-login error:', error);
                    window.location.href = 'index.html';
                }
            }, 2500);
            
        } else {
            showToast(result.message || 'Signup failed', 'error');
            resetButton(submitBtn, btnText, spinner);
        }
    } catch (error) {
        console.error('Signup error:', error);
        showToast('Network error. Please try again.', 'error');
        resetButton(submitBtn, btnText, spinner);
    }
}

// Reset button state
function resetButton(submitBtn, btnText, spinner) {
    submitBtn.classList.remove('loading');
    btnText.style.display = 'block';
    spinner.style.display = 'none';
}

// Add page turning effect
function addPageTurnEffect() {
    const book = document.getElementById('authBook');
    const pages = document.querySelectorAll('.page');
    
    // Add turning animation class
    pages.forEach(page => {
        page.classList.add('page-turning');
    });
    
    // Remove animation class after animation completes
    setTimeout(() => {
        pages.forEach(page => {
            page.classList.remove('page-turning');
        });
    }, 800);
}

// Flip to signup page
function flipToSignup() {
    const book = document.getElementById('authBook');
    book.classList.add('flipped');
    isFlipped = true;
    
    // Add page turn sound effect (optional)
    playPageTurnSound();
}

// Flip to login page
function flipToLogin() {
    const book = document.getElementById('authBook');
    book.classList.remove('flipped');
    isFlipped = false;
    
    // Add page turn sound effect (optional)
    playPageTurnSound();
}

// Play page turn sound (optional - you can add actual sound file)
function playPageTurnSound() {
    // Create a subtle audio feedback
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.toggle-password i');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.classList.remove('fa-eye');
        button.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.remove('fa-eye-slash');
        button.classList.add('fa-eye');
    }
}

// Show success animation
function showSuccessAnimation(title, message) {
    const animation = document.getElementById('successAnimation');
    const titleEl = document.getElementById('successTitle');
    const messageEl = document.getElementById('successMessage');
    
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    animation.style.display = 'flex';
    
    // Hide after 3 seconds
    setTimeout(() => {
        animation.style.display = 'none';
    }, 3000);
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.classList.add('show');
    
    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Flip pages with arrow keys
    if (e.key === 'ArrowLeft' && isFlipped) {
        flipToLogin();
    } else if (e.key === 'ArrowRight' && !isFlipped) {
        flipToSignup();
    }
    
    // Submit forms with Enter
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Add floating animation to form elements
function addFloatingAnimation() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.2)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            this.parentElement.style.boxShadow = 'none';
        });
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', addFloatingAnimation);

// Add parallax effect to floating elements
function addParallaxEffect() {
    document.addEventListener('mousemove', function(e) {
        const floatingElements = document.querySelectorAll('.floating-code');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = (x - 0.5) * speed * 50;
            const yPos = (y - 0.5) * speed * 50;
            
            element.style.transform = `translate(${xPos}px, ${yPos}px) rotate(${xPos * 0.1}deg)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', addParallaxEffect);

// Auto-resize book for different screen sizes
function handleResize() {
    const book = document.querySelector('.book');
    const container = document.querySelector('.auth-container');
    
    if (window.innerWidth < 768) {
        book.style.transform = 'scale(0.8)';
    } else if (window.innerWidth < 480) {
        book.style.transform = 'scale(0.7)';
    } else {
        book.style.transform = 'scale(1)';
    }
}

window.addEventListener('resize', handleResize);
document.addEventListener('DOMContentLoaded', handleResize);

// Add book opening animation on page load
document.addEventListener('DOMContentLoaded', function() {
    const book = document.querySelector('.book');
    book.style.opacity = '0';
    book.style.transform = 'translateY(50px) scale(0.8)';
    
    setTimeout(() => {
        book.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
        book.style.opacity = '1';
        book.style.transform = 'translateY(0) scale(1)';
    }, 200);
});
