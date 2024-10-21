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

    // Underline Animation for "My Projects" Title
    const projectTitle = document.querySelector('#projects h2');
    
    const titleObserverOptions = {
        root: null, // Use viewport
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const titleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectTitle.classList.add('underline-active'); // Add class to start underline animation
            } else {
                projectTitle.classList.remove('underline-active'); // Remove class to reset animation
            }
        });
    }, titleObserverOptions);

    // Observe the #projects section for underline animation
    titleObserver.observe(document.querySelector('#projects'));

    // Underline Animation for "Self Description" Title
    const descriptionTitle = document.querySelector('#description h2');

    const descriptionObserverOptions = {
        root: null, // Use viewport
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const descriptionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                descriptionTitle.classList.add('underline-active'); // Add class to start underline animation
            } else {
                descriptionTitle.classList.remove('underline-active'); // Remove class to reset animation
            }
        });
    }, descriptionObserverOptions);

    // Observe the #description section for underline animation
    descriptionObserver.observe(document.querySelector('#description'));

    // Dropdown Button Functionality
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dropdownContent = this.nextElementSibling; // Select the next sibling element (the dropdown content)
            dropdownContent.classList.toggle('active'); // Toggle active class for showing/hiding dropdown
        });
    });
});
