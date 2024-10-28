const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn?.querySelector("i");

// Handle navigation between pages and sections
const handleNavigation = () => {
    const navItems = document.querySelectorAll('.nav__links a');
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Get the current page
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            // Get the target section from href
            const href = item.getAttribute('href');
            
            // If we're on contact.html and trying to navigate to a section
            if (currentPage === 'contact.html' && href.startsWith('#')) {
                e.preventDefault();
                // Redirect to index.html with the section hash
                window.location.href = `index.html${href}`;
            }
        });
    });
};

// Handle mobile menu
if (menuBtn && navLinks && menuBtnIcon) {
    menuBtn.addEventListener("click", (e) => {
        navLinks.classList.toggle("open");
        const isOpen = navLinks.classList.contains("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
}

// Handle "Get Started" buttons navigation
const getStartedButtons = document.querySelectorAll('.about__btn, .header__btn, .nav__btns .btn, .banner__content a');
getStartedButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});

// Initialize ScrollReveal animations if we're on the index page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
    };
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".service__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".facility__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".facility__content p", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".mentor__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".banner__content h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__content p", {
  ...scrollRevealOption,
  delay: 500,
});
}

document.addEventListener('DOMContentLoaded', handleNavigation);