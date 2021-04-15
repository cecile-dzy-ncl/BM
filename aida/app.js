$(document).ready(function () {
  $("body").addClass("aida");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://associationaida.org/' target='_blank'>© Association Aïda</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // AJOUT INTRO PAGE EVENTS
  var textIntroEvents = `
    <div class='container-bm mt-50'>
      <h2 class='text-center red'>
        Deux minutes suffisent pour créer votre collecte.
      </h2>
      <p>
      Choisissez en dessous dans quelle rubrique vous souhaitez vous engager, puis mettez en place le projet qui vous correspond le mieux.
      </p>
      <p>
      Le principe est simple : s’engager par le sport et créer une page de collecte de fonds pour soutenir les jeunes touchés par un cancer.
      </p>
        <p>
          <strong>Une question ?</strong>
          N’hésitez pas à <a href='/contact_forms/new' class='blue'>nous contacter</a> et à profiter de nos <a href='/pages/conseils-outils' class='blue'>conseils et outils.</a>
        </p>
      </div>`;
  $(".events .first-section").before(textIntroEvents);

  // AJOUT WRAPPER OUTILS
  var wrapperOutils = `<!-- BLOC OUTILS -->
 <div class="wrapper wrapper-help bg-darkblue">
 <div class="container-small-bm">
 <img alt="" class="d-block mx-auto mb-30" src="https://collecter.fondation-arc.org/cdn.iraiser.eu/8v+/iZhRxdeu2BVNVycHEZ06vL2iKxpZId225sg6zFv3invHFgijE79b/k15iwJG/Simon_Romain/origin/arc-icondiscuss2x.png" style="height: 50px;">
 <h2 class="white text-center"><span class="font-300">BESOIN D'AIDE ? </span>NOS CONSEILS &amp; OUTILS</h2>
 <p class="white text-center">Parce que nous voulons que votre expérience soit une réussite, nous vous avons préparé une série de conseils et d’outils pour mener à bien votre projet : guide de collecte, goodies, vidéos, cover Facebook, etc.</p>
 <div class="btn-bm border w-50 my-30"><a class="white" href="https://collecter.fondation-arc.org/pages/conseils">DÉCOUVRIR NOS CONSEILS &amp; OUTILS</a></div>
 <p class="white">Vous pouvez également<a class="underline white" href="https://collecter.fondation-arc.org/contact_forms/new" target="blank"> nous contacter par email </a>ou nous téléphoner au 01 56 98 85 85.</p>
 </div></div>`;
  $("#events-index .section-events").after(wrapperOutils);

  // --------- RESPONSIVE ---------

  // var windowWidth = $(window).width();

  // if (windowWidth < 500) {
  //   $("body").addClass("mobile");
  //   $(".pl-370").removeClass("pl-370");
  //   $(".banner-text h2").removeClass("white").addClass("black");
  //   $(".banner-text p").removeClass("white");
  //   $(".campagne > div").removeClass("w-50");
  //   $(".compteur .border-right")
  //     .removeClass("border-right")
  //     .removeClass("border-white");
  //   $(".conseils-et-outils .bg-black .container-small-bm > .d-flex").remove();
  //   $(".a-propos .wrapper .w-20").addClass("mb-15").removeClass("w-20");
  //   $(".a-propos .wrapper .w-30").addClass("mb-15").removeClass("w-30");
  //   $("#events-show .event-stat").removeClass("border-right");
  //   $("#indexs-index .compteur .border-right").removeClass("border-right");
  // }
});
