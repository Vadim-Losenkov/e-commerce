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
  
  $('.filter__item-link').on('click', function () {
    $('.filter__item-link.active').removeClass('active')
    $(this).toggleClass('active')
  })
})

const tabs = new Tabs('[data-menu="menu"]', '[data-menu="items"]')