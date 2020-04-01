$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("one-o-one");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $("<li class='nodropdown footer-link-menu'><a href='https://fundraise.one-o-one.eu/'>© ONE |O| ONE</a></li>").prependTo("footer .top-bar-section ul.left ul.center")

  $(document).ready(function() {
    $('.smoothScroll').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
    });
  });

  $("html[lang='en'] img.image_banner").attr("src", "https://fundraise.one-o-one.eu/cdn.iraiser.eu/rl8pwcx7hCuvZ/l/h3S8jA9Z2sEml1JMSK1qpjRZk9KUV2PgEtFqjlkQ46bAQD7f/Cecile_Dezy/origin/oneoonelogo2x.png");

  // $(".project_boutons_give").html("Faire un don");

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  // $('.section-home-projects').prepend('<h2 class="text-center mb-40 black">Exemples de campagnes en cours</h2>');

  // // AJOUT INTRO PAGE EVENTS
  // var textIntroEvents = ("<div class='container-small-bm mt-50'><h2 class='text-center black'>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez ci-dessous dans quelle opération vous souhaitez vous inscrire, choisissez un titre pour votre projet, une photo et ça y’est, votre page de collecte est prête, vous pouvez commencer à collecter des dons au profit de la Fondation ARC pour la recherche sur le cancer.</p><p><strong>Une question ?</strong> N’hésitez pas à <a href='https://collecter.fondation-arc.org/contact_forms/new' class='blue'>nous contacter</a> et à profiter de nos <a href='https://collecter.fondation-arc.org/pages/conseils' class='blue'>conseils et outils.</a></p></div>")
  // $('.events .first-section').before(textIntroEvents);

  // // AJOUT INTRO PAGE PROJETS
  // var textIntroProjects = ("<div class='container-small-bm text-center mt-50'><h2 class='black'>Retrouver et soutenir une collecte</h2></div>")
  // $('.projects .first-section').before(textIntroProjects);

  // // AJOUT INTRO PAGE CONTACT
  // var textIntroContact = ("Pour toute question sur votre collecte ou sur la Fondation ARC, n'hésitez pas à nous contacter via le formulaire ci-dessous ou par téléphone au 01 45 59 59 10.")
  //$('#contact_forms-new .first-section .small-11 p').html(textIntroContact);

  // AJOUT BANNER MAINTENANCE
  //var bannerMaintenance = ("<div class='maintenance p-5 bg-blue'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  //$("#banner_section").before(bannerMaintenance);

// --------- RESPONSIVE ---------

  var windowWidth= $(window).width();

  if(windowWidth < 500){
    $("body").addClass("mobile");
     $(".pl-370").removeClass("pl-370");
    $(".banner-text h2").removeClass("white").addClass("black");
    $(".banner-text p").removeClass("white");
    // $(".steps img").removeClass("ml-60");
    // $(".steps").removeClass("pt-150").removeClass("pb-100");
    // $(".a-propos .steps").removeClass("w-50");
    // $(".a-propos .w-80").removeClass("w-80");
    // $(".mobile.conseils .w-66").removeClass("w-66");
    // $(".card").removeClass("ml-130").removeClass("mr-130");
    // $(".mobile .h-360").removeClass("h-360");
    // $(".mobile .steps .mt-50").removeClass(".mt-50");
    // $(".mobile .projet-head .user").removeClass(".right");
    // $(".mobile .projet-head .team_by").removeClass(".left");
    // // $(".mobile img.mln-30").removeClass("mln-30");
    // $(".mobile .bx-viewport").css('height', "auto");
  }

});
