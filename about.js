const body = document.querySelector('body');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.cancle-mobile');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  mobileMenu.classList.toggle('hide');
  closeMobile.classList.toggle('hide');
  body.classList.add('no-scroll');
}
menuIcon.addEventListener('click', toggleMenu);

function closeMenu() {
  closeMobile.classList.toggle('hide');
  mobileMenu.classList.toggle('hide');
  body.classList.remove('no-scroll');
}
closeMobile.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
    closeMobile.classList.toggle('hide');
    body.classList.remove('no-scroll');
  });
});
