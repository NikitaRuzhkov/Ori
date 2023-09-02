$(function(){
  

  $('.technologies__star').rateYo({
    starWidth: "24px",
    ratedFill: "#06B25F",
    readOnly: true,
  });




  $('.about__items').slick({
    arrows: false,
    dots:true,
  })



  $('.header__link-service').on('click' , function () {
    $('.header__services').toggleClass('header__services--active')
    $('.header__link-service').toggleClass('header__link-service--active')
  })




});