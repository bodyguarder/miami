$(function () {
  $('.menu-button').on('click', function () {
    $('.menu-button').toggleClass('menu-button--active');
    $('.header__wrapper').toggleClass('header__wrapper--active');
    $('body').toggleClass('hidden');
  })
});