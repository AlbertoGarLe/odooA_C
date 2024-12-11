
window.addEventListener('DOMContentLoaded', () => {
    const navbarCollapsible = document.querySelector('#mainNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

    // Navbar shrink function
    const handleNavbarShrink = () => {
        if (navbarCollapsible) {
            navbarCollapsible.classList.toggle('navbar-shrink', window.scrollY > 0);
        }
    };

    // Initialize navbar shrink and add scroll event listener
    handleNavbarShrink();
    document.addEventListener('scroll', handleNavbarShrink);

    // Activate Bootstrap scrollspy if navbar exists
    if (navbarCollapsible) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%'
        });
    }

    // Collapse responsive navbar on link click if toggler is visible
    if (navbarToggler && responsiveNavItems.length > 0) {
        responsiveNavItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                if (getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }
});
