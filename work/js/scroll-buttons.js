$(document).ready(function() {
  $(".scroll-down").click(function() {
    $('html,body').animate({
      scrollTop: $("#projects-scroll").offset().top
    },
    'slow')
  });
  $(".scroll-up").click(function() {
    $('html,body').animate({
      scrollTop: $("#positions-scroll").offset().top
    },
    'slow')
  });
});
