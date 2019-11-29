$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("fcc-be");


  $(".infos-money .big").after("collectés");

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2>Exemples de collectes en cours</h2>');


  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez dans quelle collecte vous souhaitez vous inscrire (ci-dessous), choisissez un titre, une photo et ça y est, vous êtes prête à commencer votre récolte de fonds pour financer la lutte contre le cancer. Nous vous avons même préparé des <a href='https://idonatefor.cancer.be/pages/conseils-outils' class='green'>conseils et outils pour vous aider à réussir votre projet.</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT INTRO PAGE PROJETS
  var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
  $('.projects .first-section').before(textIntroProjects);

});
