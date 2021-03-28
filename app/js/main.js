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
  
  $('.filter__item-link').on('click', function (event) {
    event.preventDefault()
    $('.filter__item-link.active').removeClass('active')
    $(this).toggleClass('active')
  })

  const $itemLike = $('.catalog__item-like')
  $itemLike.on('click', function() {
    $(this).toggleClass('active')
  })

  $('.faq__name').on('click', function() {
    $(this).toggleClass('open')
    $(this).siblings().slideToggle(300)
  })
})

new Tabs('[data-menu="menu"]', '[data-menu="items"]')
new Tabs('[data-menu="product-menu-img"]', '[data-menu="product-items-img"]')
new Tabs('[data-menu="product-menu-tabs"]', '[data-menu="product-items-tabs"]')