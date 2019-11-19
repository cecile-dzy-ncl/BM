$( document ).ready(function() {
  console.log( "ready!" );
  $("body").addClass("fcc-be");


  $(".infos-money .big").after("collectés");

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2>Exemples de collectes en cours</h2>');

});
