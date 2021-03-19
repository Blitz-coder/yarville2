
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

      $('.about-slider').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        pauseOnHover: false,
        fade: true,
        arrows: false,
        dots: true,
        dotsClass: 'about-dots',
        fadeSpeed: 1000,
        lazyload: 'progressive'
        });

        
        var details = document.querySelectorAll("details");
        for(i=0;i<details.length;i++) {
          details[i].addEventListener("toggle", accordion);
        }
        function accordion(event) {
          if (!event.target.open) return;
            var details = event.target.parentNode.children;
            for(i=0;i<details.length;i++) {
              if (details[i].tagName != "DETAILS" || 
                 !details[i].hasAttribute('open') || 
                 event.target == details[i]) {
                 continue;
              }
              details[i].removeAttribute("open");
            }
        }        

});


