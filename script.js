document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Light / Dark Mode Toggle ---
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

    // --- 2. Mobile Responsive Menu Toggle ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // --- 3. Contact Form Submission Demo ---
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! Module 02 form validation successful.');
        contactForm.reset();
    });
});
