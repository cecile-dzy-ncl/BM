$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("f1001");


  $(".infos-money .big").after("collectés");


  // CALCULS IMPACTS

  if ($("body").hasClass("homepage")) {

    var nombreEnfants = Math.floor(parseInt($(".nb_enfants span").html().split('€')[0]) / 2);
    console.log(nombreEnfants);
    $('.nb_enfants span').html(nombreEnfants);

    var montantEcoleRegion = Math.floor(parseInt($(".nb_ecoles span").html().split('€')[0]) / 1000);
    console.log(montantEcoleRegion);
    $('.nb_ecoles span').html(montantEcoleRegion);

    var montantWaterKiosks = Math.floor(parseInt($(".nb_kiosks span").html().split('€')[0]) / 33000);
    console.log(montantWaterKiosks);
    $('.nb_kiosks span').html(montantWaterKiosks);

  }

  $(".project_boutons_give").html("Faire un don");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#nb_kiosks').html( + " Water Kiosks")

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2>Exemples de campagnes en cours</h2>');

  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2>Deux minutes suffisent pour créer votre collecte.</h2></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT INTRO PAGE PROJETS
  var textIntroProjects = ("<div class='container-small-bm mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
  $('.projects .first-section').before(textIntroProjects);

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance = ("<div class='maintenance p-5 bg-blue'><p class='m-0 white'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  $("#banner_section").before(bannerMaintenance);


  // if((0,a["default"])(".magnificvideo").length>0&&(0,a["default"])(".magnificvideo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})

  //Magnific-video(youtube)
  $('a.popup-video').magnificPopup({
    items: {
      src: 'http://www.youtube.com/watch?v=oakFyL63qss'
    },
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
           '<div class="mfp-close"></div>'+
           '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
           '</div>',
      patterns: {
        youtube: {
        index: 'youtube.com/',
        id: 'v=',
        src: '//www.youtube.com/embed/%id%?autoplay=1'
        }
      },
      srcAction: 'iframe_src',
    }
  });




});
