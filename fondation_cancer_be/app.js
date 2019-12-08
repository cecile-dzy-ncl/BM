$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("fcc-be");


  if ($("html").prop("lang") === ("fr")) {

    $(".infos-money .big").after("collectés");

    // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
    $('.section-home-projects').prepend('<h2>Exemples de collectes en cours</h2>');

    // AJOUT INTRO PAGE EVENTS
    var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez dans quelle collecte vous souhaitez vous inscrire (ci-dessous), choisissez un titre, une photo et ça y est, vous êtes prête à commencer votre récolte de fonds pour financer la lutte contre le cancer. Nous vous avons même préparé des <a href='https://idonatefor.cancer.be/pages/conseils-outils' class='green'>conseils et outils pour vous aider à réussir votre projet.</a></p></div>")
    $('.events .first-section').before(textIntroEvents);

    // AJOUT INTRO PAGE PROJETS
    var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
    $('.projects .first-section').before(textIntroProjects);

    // AJOUT BANNER MAINTENANCE
    var bannerMaintenance = ("<div class='maintenance p-5 bg-green'><p class='m-0 white'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
    $("#banner_section").before(bannerMaintenance);

  } else if ($("html").prop("lang") === ("nl")) {

    // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
    $('.section-home-projects').prepend('<h2>Voorbeelden</h2>');

    // AJOUT INTRO PAGE EVENTS
    var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Lanceer een project</h2></div>")
    $('.events .first-section').before(textIntroEvents);

    // AJOUT INTRO PAGE PROJETS
    var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Overloop</h2></div>")
    $('.projects .first-section').before(textIntroProjects);

    // AJOUT BANNER MAINTENANCE
    var bannerMaintenanceNL = ("<div class='maintenance p-5 bg-green'><p class='m-0 white'>We zijn bezig met een update van ons platform, gelieve ons te verontschuldigen voor eventuele ongemakken</p></div>");
    $("#banner_section").before(bannerMaintenanceNL);


  }


  // --------- RESPONSIVE ---------

  // var windowWidth= $(window).width();

  // if(windowWidth < 500){
  //   $(".cards-bm .mb-21").removeClass(".mb-21");
  // }

});
