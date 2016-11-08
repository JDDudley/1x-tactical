//smooth scroll
$(document).ready(function () {
  //smooth scroll
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
$(function () {
  //collapse mobile menu when item selected
  $('.nav a').on('click', function () {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
  //join submit button
  $('#submit-join').on('click', function () {
    console.log('submit-join clicked...');
    $('.signup-box').slideUp();
    setTimeout(function(){
      $('.signup-box').html('<h1>HELLO, WORLD!</h1>');
      $('.signup-box').slideDown(200);
    },1000);
  });
});