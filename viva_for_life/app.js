$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("vfl");


  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Rejoignez dès maintenant un défi collectif RTBF et commencez à collecter des fonds pour les enfants.</h2><p>Que vous soyez plutôt sportif, danseur ou comédien dans l’âme, vous trouverez forcément un défi qui vous ressemble pour venir en aide aux enfants victimes de la pauvreté.</p><p class='font-bold'>Une question sur les défis collectifs ?</br>Parlons-en au 02/737.44.52 ou par email : <a href='mailto:napu@rtbf.be' class='orange'>napu@rtbf.be</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2 class="mt-60 mb-50">Exemples de défis en cours</h2>');

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")


// --------- BLOC OBJECTIFS/RÉSULTATS ET BARRE DE PROGRESSION ---------

//
var creaCollecte = $("#widget-new-project");
$('.intro-my-event').after(creaCollecte);

// recuperer id
var idCampaign = $("body").prop("classList")[1].split("_")[1];


//ajout du bloc en début de page
$('#events-show .habillage').prepend('<div class="stats-event"><div class="stats-event-1"><img src="https://agir.vivaforlife.be/cdn.iraiser.eu/6idKBeqjdjVcRtnL6A9qeBCllCI4cS9vXnl62IzT33g2GL6oGHWGvWlLOZdR4Xs7/Cecile_DEZY/origin/iconpeople2x.png" id="img-stat" alt=""><div class="stats-event-nb"><p>Déjà <span class="" style="font-size: 32px"><tag event_id='+ idCampaign +'></tag></span> collecteurs engagés</p></div></div><div class="line"></div><div class="stats-event-2"><div class="stats-event-montants"><div class="stats-event-m-1"><span>97 560 €</span> collectés</div><div class="stats-event-m-2">Objectif: <span>100 000 €</span></div></div><div class="progress"><span class="graph-barBack"><span class="graph-bar" data-value="10"></span></span></div></div></div></div>');

  // barre de progression
  var pourcentage = $('.chart').attr('data-percent');
  $('.stats-event .graph-bar').attr('data-value', pourcentage);
  $('.stats-event .graph-bar').css('width', pourcentage);

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
      console.log($('.current-amount'))
      if ($('.current-amount').html().split('     ')[1].split(' €')[0].length > 5) {
        $('.enfants').html(Math.floor(Number.parseInt($('.current-amount').html().split('     ')[1].split(' €')[0], 10)/12));
      } else {
        $('.enfants').html(0);
      };
    }
  });

  var windowWidth= $(window).width();

  if(windowWidth < 500){
    $("body").addClass("wInf600");
    console.log("prout");
    $("#indexs-index .position-absolute").removeClass("position-absolute");
    $("#indexs-index .h-360").removeClass("h-360");
  }







});
