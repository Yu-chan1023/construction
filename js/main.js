$(function() {
  let open = false;
  let menuNav
  let btn = document.getElementById('menu');
  btn.addEventListener('click', () => {
    if (open === false) {
      $('.menu div').addClass('open').removeClass('close');
      menuNav = new TimelineMax();
      menuNav.addLabel('nav')
             .to('.menu-nav', 0.5, {opacity: 1, pointerEvents: 'auto', ease: Power2.easeOut}, 'nav')
             .staggerTo('.menu-nav ul li', 1.6, {opacity: 1, x: 0, ease: Power2.easeOut}, 0.2, 'nav+=.7')
    } else {
      $('.menu div').removeClass('open').addClass('close');
      menuNav.addLabel('nav')
             .to('.menu-nav', 0.5, {opacity: 0, pointerEvents: 'none', ease: Power2.easeOut}, 'nav')
    }
    open =! open
  }) 

})
