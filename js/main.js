
  function toggleMenu(){
    var menuToggle = document.querySelector('.header-toggle');
    var menu = document.querySelector('.navbar');
    var body = document.querySelector('body');
    menuToggle.classList.toggle('header-toggle__active');
    menu.classList.toggle('navbar-active');
    body.classList.toggle('body-fixed');
    
};



$(document).ready(function () {

    $('.hero-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      fade: true,
      arrows: false,
      dots: true,
      dotsClass: 'hero-dots',
      fadeSpeed: 1000,
      lazyload: 'progressive'
      });


});


