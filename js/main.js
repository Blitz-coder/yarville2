
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
        
      //  Map load
        YaMapsShown = false;
        $(window).scroll(function() {
          if (!YaMapsShown){
           if($(window).scrollTop() + $(window).height() > $(document).height() - 1500) {      
            showYaMaps();
            YaMapsShown = true;
           }
          }
       });
       function showYaMaps(){
        var script1   = document.createElement("script");
        script1.type  = "text/javascript";
        script1.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab0f817a0a68f03c25c388c781a0fd54a849d5a8dd0ff8aee7dcd4a132a0520b0&amp;width=100%;height=300&amp;lang=ru_RU&amp;scroll=false";
        document.querySelector(".maps-card--1").appendChild(script1);
        
        var script2   = document.createElement("script");
        script2.type  = "text/javascript";
        script2.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9cf4c2ea469759abbb634c1bb68dcfb9f62fd10a1eb82be617a8b1bd4ed5019b&amp;width=100%;height=300&amp;lang=ru_RU&amp;scroll=false";
        document.querySelector(".maps-card--2").appendChild(script2);
        
        var script3   = document.createElement("script");
        script3.type  = "text/javascript";
        script3.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ab2b930ea2124278698b67f9f7f6ac6d4273641248f1c55ea137c202b3d4ccf32&amp;width=100%;height=300&amp;lang=ru_RU&amp;scroll=false";
        document.querySelector(".maps-card--3").appendChild(script3);

       }

       var modalButton = $("[data-toggle=modal]");
       var closeModalButton = $(".modal-form__close");
       var closeModalOverlay = $(".modal");
       modalButton.on('click', openModal);
       closeModalButton.on('click', closeModal);

       function openModal() {
        var modalWindow = $('.modal');
        modalWindow.addClass('modal-active');
        $("body").addClass("body-fixed");
      }

      function closeModal(event) {
        event.preventDefault();
        var modalWindow = $('.modal');
        modalWindow.removeClass('modal-active');
        $("body").removeClass("body-fixed");
      }

          //  Убрать модальное окно клавишей Esc
      $(document).keydown(function (eventObject) {
        if (eventObject.which == 27) {
           closeModal(event);
        };
      });

// Обработка форм
$('.modal-form').validate({
  errorClass: "invalid",
  messages: {
    name: "Пожалуйста, укажите своё имя",
    phone: {
      required: "Укажите свой телефон",
      minlength: "Слишком короткий номер",
    }
  }
});

$('.hero-form').validate({
  errorClass: "invalid",
  messages: {
    name: "Пожалуйста, укажите своё имя",
    phone: {
      required: "Укажите свой телефон",
      minlength: "Слишком короткий номер",
    }
  }
});

$('#phone').mask('+7(000)-000-0000');
$('#modal-phone').mask('+7(000)-000-0000');

});


