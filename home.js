const navSlide = () => {
    const burger_menu = document.querySelector('.burger_menu');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

// toggle nav
    burger_menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

         // animate nav links

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else{
            link.style.animation = `navLinkFade 0.5s ease-in-out forwards ${index / 7 + 0.3}s`
        }
    });

    // burger_menu animation

    burger_menu.classList.toggle('toggle');

    });
   
}

navSlide();