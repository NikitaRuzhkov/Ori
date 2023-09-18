$(function () {


  $('.technologies__star,.blog__star').rateYo({
    starWidth: "24px",
    ratedFill: "#06B25F",
    normalFill: "#e1e1e1",
    readOnly: true,
  });


  $('.blog-one__star').rateYo({
    starWidth: "24px",
    ratedFill: "#06B25F",
    normalFill: "#e1e1e1",
    starSvg: ' <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="22" viewBox="0 0 24 22" fill="none" ><path d="M12 1.61804L14.2186 8.4463L14.3309 8.7918H14.6942H21.8738L16.0654 13.0119L15.7715 13.2254L15.8837 13.5709L18.1024 20.3992L12.2939 16.1791L12 15.9656L11.7061 16.1791L5.89763 20.3992L8.11627 13.5709L8.22853 13.2254L7.93464 13.0119L2.12616 8.7918H9.30583H9.6691L9.78136 8.4463L12 1.61804Z" stroke="#717171"</g> </svg> '

  });

 


  $('.about__items').slick({
    arrows: false,
    dots: true,
  });

  $('.vr__projects-items,.recent__items').slick({
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
  $('.join__item-top').on('click', function () {
    $(this).siblings().slideToggle()
    $('.join__item-link').toggleClass('join__item-link--active')
  });


 



});