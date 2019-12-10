$( document ).ready(function() {
  if (location.pathname != '/') {
      // var page = location.pathname.split('/')[2]; // à remettre une fois qu'on passe sur iraiser
      var page = location.pathname.split('.')[0].split("/"); //à retirer une fois qu'on passe sur iraiser
      page = page[page.length-1]; //à retirer une fois qu'on passe sur iraiser
      console.log(page);
      $('body').addClass(page);
    } else {
   $('body').addClass('homepage');
  }

// --------- RESPONSIVE ---------

  var windowWidth= $(window).width();

  if(windowWidth < 500){
    $("body").addClass("mobile");
    $(".phone").removeClass("position-absolute");
    $(".mobile .h-360").removeClass("h-360");
    $(".mobile .steps .mt-50").removeClass(".mt-50");
    $(".mobile .projet-head .right").removeClass(".right");
    // $(".mobile img.mln-30").removeClass("mln-30");
    $(".mobile .bx-viewport").css('height', "auto");
  }





});
