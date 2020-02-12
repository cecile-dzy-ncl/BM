$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("arc");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")


  $(".project_boutons_give").html("Faire un don");

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2 class="text-center mb-40 black">Exemples de campagnes en cours</h2>');

  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2 class='text-center'>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez ci-dessous dans quelle opération vous souhaitez vous inscrire, choisissez un titre pour votre projet, une photo et ça y’est, votre page de collecte est prête, vous pouvez commencer à collecter des dons au proft de la Fondation ARC pour la recherche sur le cancer.</p><p><strong>Une question ?</strong> N’hésitez pas à <a href="" class='blue'>nous contacter</a> et à profiter de nos <a href="" class='blue'>conseils et outils.</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT INTRO PAGE PROJETS
  // var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
  // $('.projects .first-section').before(textIntroProjects);

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance = ("<div class='maintenance text-center p-5 bg-blue'><p class='m-0 white'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  $("#banner_section").before(bannerMaintenance);

});




