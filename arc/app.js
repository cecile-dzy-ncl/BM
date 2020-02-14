$( document ).ready(function() {
  console.log( "ready!" );

  $("body").addClass("arc");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")


  $(".project_boutons_give").html("Faire un don");

  // AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
  $('.section-home-projects').prepend('<h2 class="text-center mb-40 black">Exemples de campagnes en cours</h2>');

  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = ("<div class='container-small-bm mt-50'><h2 class='text-center black'>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez ci-dessous dans quelle opération vous souhaitez vous inscrire, choisissez un titre pour votre projet, une photo et ça y’est, votre page de collecte est prête, vous pouvez commencer à collecter des dons au proft de la Fondation ARC pour la recherche sur le cancer.</p><p><strong>Une question ?</strong> N’hésitez pas à <a href='https://collecter.fondation-arc.org/pages/contact' class='blue'>nous contacter</a> et à profiter de nos <a href='https://collecter.fondation-arc.org/pages/conseils' class='blue'>conseils et outils.</a></p></div>")
  $('.events .first-section').before(textIntroEvents);

  // AJOUT INTRO PAGE PROJETS
  var textIntroProjects = ("<div class='container-small-bm text-center black mt-50'><h2>Retrouver et soutenir une collecte</h2></div>")
  $('.projects .first-section').before(textIntroProjects);

  // AJOUT WRAPPER OUTILS
  var bannerMaintenance = ("<div class='maintenance text-center p-5 bg-blue'><p class='m-0 white'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  $("#banner_section").before(bannerMaintenance);

  // AJOUT BANNER MAINTENANCE
  var wrapperOutils = (`<!-- BLOC OUTILS -->
    <div class="wrapper wrapper-help bg-darkblue">
    <div class="container-small-bm">
    <img alt="" class="d-block mx-auto mb-30" src="https://collecter.fondation-arc.org/cdn.iraiser.eu/8v+/iZhRxdeu2BVNVycHEZ06vL2iKxpZId225sg6zFv3invHFgijE79b/k15iwJG/Simon_Romain/origin/arc-icondiscuss2x.png" style="height: 50px;">
    <h2 class="white text-center"><span class="font-300">BESOIN D'AIDE ? </span>NOS CONSEILS &amp; OUTILS</h2>
    <p class="white text-center">Parce que nous voulons que votre expérience soit une réussite, nous vous avons préparé une série de conseils et d’outils pour mener à bien votre projet : guide de collecte, goodies, vidéos, cover Facebook, etc.</p>
    <div class="btn-bm border w-50 my-30"><a class="white" href="https://collecter.fondation-arc.org/pages/conseils">DÉCOUVRIR NOS CONSEILS &amp; OUTILS</a></div>
    <p class="white">Vous pouvez également<a class="underline white" href="" target="blank"> nous contacter par email </a>ou nous téléphoner au 01 56 98 85 85.</p>
    </div></div>`);
  $("#events-index .section-events").after(wrapperOutils);

  // AJOUT BOUTON NAVBAR
  // $("#header-header ul.left").after("<div class='uppercase btn-bm bg-pink p-8'><a class='white' href='https://collecter.fondation-arc.org/projects'>Soutenir une collecte</a></div>");



// --------- RESPONSIVE ---------

  var windowWidth= $(window).width();

  if(windowWidth < 500){
    $("body").addClass("mobile");
    $(".banner-text h2").removeClass("white");
    $(".banner-text p").removeClass("white");
    $(".steps img").removeClass("ml-60");
    $(".a-propos .steps").removeClass("w-50");
    $(".a-propos .w-80").removeClass("w-80");
    $(".card").removeClass("ml-130").removeClass("mr-130");
    $(".mobile .h-360").removeClass("h-360");
    $(".mobile .steps .mt-50").removeClass(".mt-50");
    $(".mobile .projet-head .user").removeClass(".right");
    $(".mobile .projet-head .team_by").removeClass(".left");
    // $(".mobile img.mln-30").removeClass("mln-30");
    $(".mobile .bx-viewport").css('height', "auto");
  }





  // $(function(){

    // if ($('body').is('#events-index')) {

    // $.get('https://collecter.fondation-arc.org', function(response) {
    //   console.log(response);
    //   console.log('coucou');

    //   var bloc = response.match(/<div class="wrapper wrapper-help bg-darkblue">\[ ([.*]) \]<\/div>/);
    //   console.log(bloc);
    //   $(".section-events").after(bloc);
    // });

      // $.ajax({
      //   url: "https://collecter.fondation-arc.org",
      //   // data: {
      //   //     txtsearch: $('#appendedInputButton').val()
      //   // },
      //   type: "GET",
      //   dataType: "html",
      //   success: function (data) {
      //     console.log(typeof(data));
      //     console.log(data);

      //     var wrapper = data.find($(".wrapper-help"));
      //     console.log(wrapper);
      //       // var result = $('<div />').append(data).find('#showresults').html();
      //       // $('#showresults').html(result);
      //   }
      // });

  //   }
  // });



});




