import  MenuMobile from './module/mobile-menu.js'
const mobileMenu = new MenuMobile('.mobile-menu', '.menu', '.bg-blur')
mobileMenu.init()


//SLIDE
document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('#splide', {
    type: 'fade',
    heightRatio: 0.4,
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 3000,
  });

  splide.mount();
});