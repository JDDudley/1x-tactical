// //smooth scroll
// $(document).ready(function () {
//   //smooth scroll
//   $("a").on('click', function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function () {
//         window.location.hash = hash;
//       });
//     }
//   });
// });



$(function () {
  const joinPg = 'components/join.html';
  //collapse mobile menu when item selected
  $('.nav a').on('click', function () {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });
  //subscribe button
  $('#newsletter-submit').on('click',function(){
    var newEmail = $('#newsletter-email').val();
    var result = validateEmail(newEmail);
    if (result){
      $.post('http://1xtactical.com/api/mailing-list', {"member":{"email": newEmail}});
      $('#newsletter-signup')[0].reset();
      $('#mailing-list-success').removeClass('hidden');
    } else {
      $('#mailing-list-danger').removeClass('hidden');
    }
  })
  function validateEmail(email) 
  {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }


  //join button
  // $('.join-btn').on('click', function () {
  //   $('.signup-box').load(joinPg);
  //   $('#membership-btn-div').addClass('hidden');
  //   $('.signup-box').removeClass('hidden');
  //   onJoinLoad('loadHandlers');
  //   setTimeout(function(){
  //     $('.signup-box').slideDown();
  //   },1000);
  // });
});