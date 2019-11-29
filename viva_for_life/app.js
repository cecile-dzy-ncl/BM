$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("vfl");


  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Rejoignez dès maintenant un défi collectif RTBF et commencez à collecter des fonds pour les enfants.</h2><p>Que vous soyez plutôt sportif, danseur ou comédien dans l’âme, vous trouverez forcément un défi qui vous ressemble pour venir en aide aux enfants victimes de la pauvreté.</p><p>Une question sur les défis collectifs ?</br>Parlons-en au 02/737.44.52 ou par email : <a href='mailto:napu@rtbf.be' class='orange'>napu@rtbf.be</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

});


