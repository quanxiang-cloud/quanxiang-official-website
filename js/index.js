
(function () {
  window.scrollReveal = new scrollReveal({
    reset: false,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  });
  const mobileMenuBtn =  $('.home-burger-menu');
  const mobileMenuCloseBtn =  $('.home-close-mobile-menu');
  mobileMenuBtn.click(function() {
    $('.header-mobile-menu').show()
  })
  mobileMenuCloseBtn.click(function() {
    $('.header-mobile-menu').hide()
  })
})();