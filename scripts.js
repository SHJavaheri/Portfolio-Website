document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-In Animation
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Use the viewport as the container
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remove 'visible' class when out of view
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    //Drop Down Buttons
    document.querySelectorAll('.dropdown-btn').forEach(button => {
        button.addEventListener('click', function () {
            const dropdown = this.parentElement;
            dropdown.classList.toggle('active');
        });
    });
    




});
