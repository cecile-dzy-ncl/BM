$(document).ready(function () {
  console.log("ready!");

  $("body").addClass("action-enfance");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(".credits").appendTo("section#project_tabs + section .row");

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.actionenfance.org//'>© ACTION ENFANCE</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  //   var bannerMaintenance =
  //     "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  //   $("#banner_section").before(bannerMaintenance);

  $(function () {
    if ($("body").is("#events-show")) {
      // ajout du bloc stats en début de page
      $("#events-show .habillage .intro-my-event").prepend(
        '<div class="event-stats"><div class="event-stat projects_count border-right"><div class="stat-nb"><img src="https://cagnottes.fondation-abbe-pierre.fr/cdn.iraiser.eu/I39oA4rMH9qdybsOpBgq0iwzVt7FMRAsvHp9T9pmvz+9lRcfTzKeuu6wlx2lJCDc/Cecile_Dezy/origin/iconpagecollecte2x.png"><span class="orange"></span></div><p class="text-center mb-0"><strong>page de collecte créées</strong></p></div><div class="event-stat amount_collected"><div class="stat-nb"><img src="https://cagnottes.fondation-abbe-pierre.fr/cdn.iraiser.eu/I39oA4rMH9qdybsOpBgq0iwzVt7FMRAsvHp9T9pmvz+9lRcfTzKeuu6wlx2lJCDc/Cecile_Dezy/origin/iconmontantcollecte2x.png"><span class="orange"></span></div><p class="text-center mb-0"><strong>ont déjà été collectés</strong></p></div></div>'
      );

      var eventId = $("#events-show")[0]
        .classList.value.match(/event_\d/g)[0]
        .split("_")[1];

      $.get(
        `https://cagnottes.fondation-abbe-pierre.fr/api/events/${eventId}?api_id=48dae0f816515defTAHDFBPTZUKLDWVB&api_secret=da68652cbe796d3d79503c3df0619e18`,
        function (response) {
          console.log(response);
          var eventProjectsNb = response.projects_count;
          var eventAmountCollected =
            Number.parseInt(response.amount_collected, 10) / 100;
          var eventAmountExpected =
            Number.parseInt(response.expected_amount, 10) / 100;
          console.log("eventAmountCollected");
          console.log(eventAmountCollected);

          $(".projects_count .stat-nb span").html(eventProjectsNb);
          $(".amount_collected .stat-nb span").html(
            new Intl.NumberFormat("fr-FR", {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
              style: "currency",
              currency: "EUR",
            }).format(eventAmountCollected)
          );
          if (response.expected_amount != null) {
            var eventProgress = Math.round(
              (eventAmountCollected / eventAmountExpected) * 100
            );
            console.log("eventProgress", eventProgress);
            var eventProgressBar = `
            <div class="container-xs-bm mt-50">
              <div class="event-progressbar bg-mediumgrey mb-20">
                <div class="event-progress-perc bg-orange" style="width: ${eventProgress}%"></div>
              </div>
              <div class="d-flex justify-between">
                <p>${eventProgress}%</p>
                <p>Objectif: ${new Intl.NumberFormat("fr-FR", {
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0,
                  style: "currency",
                  currency: "EUR",
                }).format(eventAmountExpected)}</p>
              </div>
            </div>`;
            $(".event-stats").after(eventProgressBar);
          }
        }
      );
    }
  });

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    $(".pl-370").removeClass("pl-370");
    $(".banner-text h2").removeClass("white").addClass("black");
    $(".banner-text p").removeClass("white");
    $(".campagne > div").removeClass("w-50");
    $(".compteur .border-right")
      .removeClass("border-right")
      .removeClass("border-white");
    $(".conseils-et-outils .bg-black .container-small-bm > .d-flex").remove();
    $(".a-propos .wrapper .w-20").addClass("mb-15").removeClass("w-20");
    $(".a-propos .wrapper .w-30").addClass("mb-15").removeClass("w-30");
    $("#events-show .event-stat").removeClass("border-right");
  }
});

// AJOUT TITRE "COLLECTES EN COURS" EN BAS DE PAGE
// $('.section-home-projects').prepend('<h2 class="text-center mb-40 black">Exemples de campagnes en cours</h2>');

// // AJOUT INTRO PAGE EVENTS
// var textIntroEvents = ("<div class='container-small-bm mt-50'><h2 class='text-center black'>Deux minutes suffisent pour créer votre collecte.</h2><p>Choisissez ci-dessous dans quelle opération vous souhaitez vous inscrire, choisissez un titre pour votre projet, une photo et ça y’est, votre page de collecte est prête, vous pouvez commencer à collecter des dons au profit de la Fondation ARC pour la recherche sur le cancer.</p><p><strong>Une question ?</strong> N’hésitez pas à <a href='https://collecter.fondation-arc.org/contact_forms/new' class='blue'>nous contacter</a> et à profiter de nos <a href='https://collecter.fondation-arc.org/pages/conseils' class='blue'>conseils et outils.</a></p></div>")
// $('.events .first-section').before(textIntroEvents);

// // AJOUT INTRO PAGE PROJETS
// var textIntroProjects = ("<div class='container-small-bm text-center mt-50'><h2 class='black'>Retrouver et soutenir une collecte</h2></div>")
// $('.projects .first-section').before(textIntroProjects);

// // AJOUT INTRO PAGE CONTACT
// var textIntroContact = ("Pour toute question sur votre collecte ou sur la Fondation ARC, n'hésitez pas à nous contacter via le formulaire ci-dessous ou par téléphone au 01 45 59 59 10.")
//$('#contact_forms-new .first-section .small-11 p').html(textIntroContact);
