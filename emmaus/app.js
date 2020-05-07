$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("emmaus");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#tag-amount').html($('#tag-amount').text().split(",")[0])
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(".credits").appendTo("section#project_tabs + section .row")

  $("<li class='nodropdown footer-link-menu'><a href='https://emmaus-france.org/'>© EMMAÜS</a></li>").prependTo("footer .top-bar-section ul.left ul.center")

  $(document).ready(function() {
    $('.smoothScroll').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });
  });

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance = ("<div class='maintenance p-5 bg-blue'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  // $("#banner_section").before(bannerMaintenance);



// --------- RESPONSIVE ---------

  var windowWidth= $(window).width();

  if(windowWidth < 500){
    $("body").addClass("mobile");
     $(".pl-370").removeClass("pl-370");
    $(".banner-text h2").removeClass("white").addClass("black");
    $(".banner-text p").removeClass("white");

  }

});
