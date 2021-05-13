$(function() {
  let open = false;
  let btn = document.getElementById('menu');
  btn.addEventListener('click', () => {
    if (open === false) {
      $('.menu div').addClass('open').removeClass('close');
      $('.menu-nav').addClass('open').removeClass('close');
      // $('.menu div').removeClass('close');
    } else {
      $('.menu div').removeClass('open').addClass('close');
      $('.menu-nav').removeClass('open');
      // $('.menu div').addClass('close');
    }
    open =! open
  })
})
