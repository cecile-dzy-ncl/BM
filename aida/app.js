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
 <h2 class="white text-center"><span class="font-300">BESOIN D'AIDE ? </span>Contactez-nous !</h2>
 <p><a class="white text-center" href="mailto:allezleschampions@associationaida.org">allezleschampions@associationaida.org</a></p>
 <p class="white text-center">Vous pouvez également nous contacter par téléphone au 06 32 71 00 10</p>
 </div></div>`;
  $("#events-index .section-events").after(wrapperOutils);

  var challengeInf = `
  <li class="event-item">
  <div class="row small-collapse panel">
    <div class="large-4 columns event-image">
      <div class="wrap">
        <a href="/events/challenge-individuel" class="active"><img alt="Capturedecran2021 04 02a11.04.48" class="image_avatar_event" src="https://collecter.associationaida.org/cdn.iraiser.eu/rVU1rvKtygDFflUNVfq+j05p2W0rrZgK5cZXqrMvdMGtRxbkuISsZl8iv4eUec/g/Cecile_Dezy/thumbnail/Capturedecran2021-04-02a11.04.48.png"></a>
      </div>
    </div>
    <div class="large-8 columns event-details">
      <div class="wrap">
        <div class="row">
          <div class="medium-7 columns">
            <div class="event-description">
              <h3>
                <a href="/events/challenge-individuel" class="active">Challenge individuel ou entre amis</a>
              </h3>
              <p>
                </p><p>Seul, entre amis, ou avec vos proches, lancez-vous un challenge, un défi à réaliser, et partagez votre page de collecte. Créez votre page de collecte ou associez vous à une collecte existante en cliquant ci-dessous.</p>
              <p></p>
              <div class="row collapse infos">
                <div class="small-4 columns text-center daysleft">
                </div>
                <div class="small-4 columns text-center location">
                </div>
                <div class="small-4 columns text-center teamcount">
                  <i class="fa fa-file-text-o fa-3x secondary-color"></i>
                  1
                  projet
                </div>
              </div>
            </div>
          </div>
          <div class="medium-4 columns text-center">
            <div class="infos-money">

              <p class="amount text-center">
                <span class="big">0 €</span>
              </p>
              <p class="projets text-center">
              </p>
            </div>
          </div>
        </div>
      </div>
      <ul class="button-group radius event-goup-btn">
        <li>
            <a class="button page-create" href="/projects/new?event_id=5">Créer ma page</a>
        </li>
        <li>
          <a class="button page-see active" href="/events/challenge-individuel">Voir les pages</a>
        </li>
      </ul>
    </div>
  </div>
</li>
`;
  $("#events .event-item:first-of-type").before(challengeInf);

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
