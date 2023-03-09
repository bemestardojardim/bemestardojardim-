$(window).scroll(function() {
  $('.about-us ').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + $(window).height()) {
      $(this).addClass("show");
    }
  });
});