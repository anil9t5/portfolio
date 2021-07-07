$(window).scroll(function () {
  if ($(document).scrollTop() > 30) {
    $("#mainNav").addClass("animated slideInDown nav-bg hide-nav")

    $("#banner-section-home").addClass("animated curve-border")
  } else {
    $("#mainNav").removeClass("animated slideInDown nav-bg hide-nav")
    $("#mainNav").addClass("animated navbar-transition")
    $("#banner-section-home").removeClass("animated curve-border")
  }
})
