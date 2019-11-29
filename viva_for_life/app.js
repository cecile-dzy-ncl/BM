$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("vfl");


  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Rejoignez dès maintenant un défi collectif RTBF et commencez à collecter des fonds pour les enfants.</h2><p>Que vous soyez plutôt sportif, danseur ou comédien dans l’âme, vous trouverez forcément un défi qui vous ressemble pour venir en aide aux enfants victimes de la pauvreté.</p><p class='font-bold'>Une question sur les défis collectifs ?</br>Parlons-en au 02/737.44.52 ou par email : <a href='mailto:napu@rtbf.be' class='orange'>napu@rtbf.be</a></p></div>")
  $('.events .first-section').before(textIntroEvents);


  // barre de progression
  var pourcentage = $('.chart').attr('data-percent');
  $('.stats-event .graph-bar').attr('data-value', pourcentage);

  $(function(){
    if ($('body').is('#events-show')) {

      var collecte = $('.current-amount').html();
      $('.stats-event-m-1 span').html(collecte);
      console.log(collecte);

      var objectif = $('.objectif-amount').html().split('Objectif')[1];
      $('.stats-event-m-2 span').html(objectif);
      console.log($('.stats-event-m-2 span'));
      console.log(objectif);

      // calcul de l'obj
      $('.objectif-enfants').html(Math.floor(Number.parseInt($('.objectif-amount').html().split('Objectif ')[1].split(' €')[0], 10)/12));

      // calcul du résultat
      if ($('.current-amount').html().split('     ')[1].split(' €')[0].length > 5) {
        $('.enfants').html(Math.floor(Number.parseInt($('.current-amount').html().split('     ')[1].split(' €')[0], 10)/12));
      } else {
        $('.enfants').html(0);
      };
    }
  });
});


