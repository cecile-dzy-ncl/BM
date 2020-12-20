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
      var eventId = $("#events-show")[0]
        .classList.value.match(/event_\d/g)[0]
        .split("_")[1];

      $("#events-show .habillage .intro-my-event").prepend(
        `<div class="event-stats"><div class="event-stat projects_count border-right"><div class="stat-nb"><span class="blue"></span></div><p class="text-center mb-0"><strong>page de collecte créées</strong></p></div><div class="event-stat amount_collected"><div class="stat-nb"><span class="blue"></span></div><p class="text-center mb-0"><strong>ont déjà été collectés</strong></p></div></div>`
      );

      var amountTag = `<tag event_id='${eventId}'>$collected_amount</tag>`;
      var projectTag = `<tag event_id='${eventId}'>$project_count</tag>`;

      console.log(amountTag);
      console.log(projectTag);

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

          $("#events-show .event-head").prepend(
            `<h1 class="text-center">${response.title.fr}</h1>`
          );
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
                <div class="event-progress-perc bg-blue" style="width: ${eventProgress}%"></div>
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
