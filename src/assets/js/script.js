document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile nav after clicking a link
            if (navLinks && navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                burger?.classList.remove('toggle');
            }
        });
    });

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
          
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle'); // for burger animation
        });
    }

    // Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .skill-category, .portfolio-item, .contact-form');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';

            if (entry.target.classList.contains('skill-category')) {
                entry.target.style.animation = 'slideInLeft 0.8s forwards cubic-bezier(0.2, 0.8, 0.2, 1)';
            }

            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.transition = 'none';
        appearOnScroll.observe(fader);
    });

    // Adjusting for hero section initial animation
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
    if (heroImage) {
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1)';
    }
});
