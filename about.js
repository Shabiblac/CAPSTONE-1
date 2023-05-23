const body = document.querySelector('body');
const coverMenu = document.querySelector('.nav-cover');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobile = document.querySelector('.cancle-mobile');
const menuIcon = document.querySelector('.menu-icon');

function toggleMenu() {
  coverMenu.classList.toggle('mobile-menu');
  mobileMenu.classList.toggle('hide');
  closeMobile.classList.toggle('hide');
  body.classList.add('no-scroll');
}
menuIcon.addEventListener('click', toggleMenu);

function closeMenu() {
  closeMobile.classList.toggle('hide');
  coverMenu.classList.toggle('hide');
  mobileMenu.classList.toggle('.hide');
  body.classList.remove('no-scroll');
}
closeMobile.addEventListener('click', closeMenu);

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    coverMenu.classList.toggle('hide');
    mobileMenu.classList.remove('hide');
    closeMobile.classList.toggle('hide');
    body.classList.remove('no-scroll');
  });
});