// ========================================
// Navigation Scroll Effect
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollTop = document.getElementById('scrollTop');
    
    if (navbar && window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else if (navbar) {
        navbar.classList.remove('scrolled');
    }
    
    if (scrollTop && window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else if (scrollTop) {
        scrollTop.classList.remove('show');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

// ========================================
// Close Mobile Menu
// ========================================
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
}

// ========================================
// Scroll to Top Function
// ========================================
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

