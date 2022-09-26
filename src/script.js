const menuBtn = document.querySelector('[data-toggle="menu"]');
      hamburgerMenu = document.querySelector('[data-type="hamburger"]')
      closeBtn = document.querySelector('[data-type="close"]')
      header = document.querySelector('header')
      navLinks = document.querySelectorAll('[data-type="nav-link"]')

menuBtn.addEventListener('pointerdown', () => {
    hamburgerMenu.classList.toggle('rotate-[720deg]');
    hamburgerMenu.classList.toggle('opacity-0')
    closeBtn.classList.toggle('opacity-0');
    closeBtn.classList.toggle('rotate-[720deg]'); 
    header.classList.toggle('show-nav');
})