$(function() {
  $('.top__slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: true
  })
  
  const $headerMenu = $('.header__nav-menu')
  $headerMenu.on('click', () => $('.header__nav-list').slideToggle(300))
  $headerMenu.on('click', () => $('.header__nav-menu--arrow').toggleClass('open'))
})