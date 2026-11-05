// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LIGHT / DARK MODE TOGGLE (with localStorage) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateButtonText(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonText(newTheme);
    });

    function updateButtonText(theme) {
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
        } else {
            themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
        }
    }

    // --- 2. RESPONSIVE MOBILE NAVIGATION MENU ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu automatically when clicking nav links on mobile
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. ACTIVE NAV LINK HIGHLIGHT ON SCROLL ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active');
            }
        });
    });

    // --- 4. BACK-TO-TOP BUTTON FUNCTIONALITY ---
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 5. CONTACT FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Name validation check
        if (nameInput.value.trim() === '') {
            showError('name-error');
            isValid = false;
        } else {
            hideError('name-error');
        }

        // Email validation check
        if (!validateEmail(emailInput.value.trim())) {
            showError('email-error');
            isValid = false;
        } else {
            hideError('email-error');
        }

        // Message validation check
        if (messageInput.value.trim() === '') {
            showError('message-error');
            isValid = false;
        } else {
            hideError('message-error');
        }

        // If form fields are completely valid
        if (isValid) {
            alert('Thank you for your message, Saliya! Form submitted successfully.');
            contactForm.reset();
        }
    });

    function showError(elementId) {
        document.getElementById(elementId).style.display = 'block';
    }

    function hideError(elementId) {
        document.getElementById(elementId).style.display = 'none';
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
