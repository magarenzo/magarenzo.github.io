$(document).ready(function() {
  $(".scroll-down").click(function() {
    $('html,body').animate({
      scrollTop: $("#volunteer-scroll").offset().top
    },
    'slow')
  });
  $(".scroll-down-2").click(function() {
    $('html,body').animate({
      scrollTop: $("#ultimate-scroll").offset().top
    },
    'slow')
  });
  $(".scroll-up").click(function() {
    $('html,body').animate({
      scrollTop: $("#leadership-scroll").offset().top
    },
    'slow')
  });
});
