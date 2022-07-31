new Swiper('.image-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
   },
   grabCursor: true,

   slideToClickedSlide: true,
   keyboard: {
      enabled: true,
      onlyInViewport: true,
   },
   speed:650,
   loop: true,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      650: {
         slidesPerView: 2,
      },
      1288: {
         slidesPerView: 3,
      },
   },
   centeredSlides: true,
});