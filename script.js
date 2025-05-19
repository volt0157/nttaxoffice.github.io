/**
 * NT - TAXOFFICE Main JavaScript File
 * Contains functionality for both index.html and contact.html
 */

// Wait for DOM content to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            document.querySelector('.nav-menu').classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links (only on index.html)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    if (anchorLinks.length > 0) {
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Check if the href attribute points to an existing element
                const targetId = this.getAttribute('href');
                if (targetId !== '#' && document.querySelector(targetId)) {
                    e.preventDefault(); // Prevent default jump behavior
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth' // Enables smooth scrolling animation
                    });
                    // Close mobile menu after clicking a link for better UX
                    document.querySelector('.nav-menu').classList.remove('active');
                }
            });
        });
    }

    // Contact form handling (only on contact.html)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const formData = new FormData(this);
            const formValues = {};
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            // Form validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'subject', 'message'];
            
            // Check required fields
            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!input.value.trim()) {
                    input.classList.add('invalid');
                    isValid = false;
                } else {
                    input.classList.remove('invalid');
                }
            });
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailInput = document.getElementById('email');
            if (!emailPattern.test(emailInput.value)) {
                emailInput.classList.add('invalid');
                isValid = false;
            }
            
            // If form is valid, process submission
            if (isValid) {
                // In a real-world scenario, here you would send the data to a server
                console.log('Form submitted:', formValues);
                
                // Show success message
                document.getElementById('success-message').style.display = 'block';
                document.getElementById('error-message').style.display = 'none';
                
                // Reset form
                this.reset();
                
                // Scroll to success message
                document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });
            } else {
                // Show error message
                document.getElementById('error-message').style.display = 'block';
                document.getElementById('success-message').style.display = 'none';
            }
        });

        // Add input event listeners to remove error styling when user types
        const allInputs = contactForm.querySelectorAll('input, textarea, select');
        allInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.classList.remove('invalid');
                document.getElementById('error-message').style.display = 'none';
            });
        });
    }

    // Animation on scroll using Intersection Observer API
    const sections = document.querySelectorAll('section');
    
    if (sections.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, { threshold: 0.1 }); // Triggers when 10% of element is visible
        
        // Apply observer to all sections
        sections.forEach(section => {
            observer.observe(section);
        });
    }
});