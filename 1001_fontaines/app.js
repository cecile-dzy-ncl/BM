$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("f1001");


  $(".infos-money .big").after("collectés");


  // CALCULS IMPACTS
  var nombreEnfants = Math.floor(parseInt($(".nb_enfants span").html().split('€')[0]) / 2);
  console.log(nombreEnfants);
  $('.nb_enfants span').html(nombreEnfants);

  var montantEcoleRegion = Math.floor(parseInt($(".nb_ecoles span").html().split('€')[0]) / 1000);
  console.log(montantEcoleRegion);
  $('.nb_ecoles span').html(montantEcoleRegion);

  var montantWaterKiosks = Math.floor(parseInt($(".nb_kiosks span").html().split('€')[0]) / 33000);
  console.log(montantWaterKiosks);
  $('.nb_kiosks span').html(montantWaterKiosks);

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#nb_kiosks').html( + " Water Kiosks")

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2>Exemples de campagnes en cours</h2>');

  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez dans quelle collecte vous souhaitez vous inscrire (ci-dessous), choisissez un titre, une photo et ça y est, vous êtes prête à commencer votre récolte de fonds pour financer la lutte contre le cancer. Nous vous avons même préparé des <a href='https://idonatefor.cancer.be/pages/conseils-outils' class='green'>conseils et outils pour vous aider à réussir votre projet.</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT INTRO PAGE PROJETS
  var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
  $('.projects .first-section').before(textIntroProjects);

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance = ("<div class='maintenance p-5 bg-blue'><p class='m-0 white'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  $("#banner_section").before(bannerMaintenance);


});
