$(window).scroll(function() {
  $('.about-us ').each(function() {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + $(window).height()) {
      $(this).addClass("show");
    }
  });
});



  const arrayHeight = document.getElementsByClassName('height-nav');
            const navHeight = document.getElementsByTagName('nav')[0].clientHeight;

            for (let navHeightObj of arrayHeight)
                navHeightObj.style.height = navHeight + 'px';

            function abrirMenu() {
                const botoesMenu = document.getElementById('botoesMenu');

                botoesMenu.className = botoesMenu.className.includes('responsivo') ? '' : 'responsivo'
            }