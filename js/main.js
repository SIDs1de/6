$(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
    $('body,html').animate({ scrollTop: 0 }, 0);
  });

  $('.reviews__wrapper-reviews').slick({
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
