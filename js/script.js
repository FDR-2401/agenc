$('.slider').slick({
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  });

  $('.review-slider').slick({
    autoplay: true,
    autoplayspeed: 2000,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<i class="fa fa-angle-left left"></i>`,
    nextArrow: `<i class="fa fa-angle-right right"></i>`,
    centerMode: true,
    centerPadding: '0px',
});