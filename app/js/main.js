$(function () {


  $('.technologies__star,.blog__star').rateYo({
    starWidth: "24px",
    ratedFill: "#06B25F",
    normalFill: "#e1e1e1",
    readOnly: true,
  });




  $('.about__items').slick({
    arrows: false,
    dots: true,
  });

  $('.vr__projects-items').slick({
    slidesToShow: 3,
  });

  $('.faq__title').on('click', function () {
    $(this).siblings().slideToggle();    
    $(this).toggleClass('faq__text--active')
  });

  $('.header__link-service').on('click', function () {
    $('.header__services').toggleClass('header__services--active')
    $('.header__link-service').toggleClass('header__link-service--active')
  });
  $('.header__link-technologies').on('click', function () {
    $('.header__technologies').toggleClass('header__technologies--active')
    $('.header__link-technologies').toggleClass('header__link-technologies--active')
  });
  $('.header__link-about').on('click', function () {
    $('.header__about').toggleClass('header__about--active')
    $('.header__link-about').toggleClass('header__link-about--active')
  });




});