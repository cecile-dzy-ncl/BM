$(document).ready(function () {
  $("body").addClass("gustave-roussy");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.gustaveroussy.fr/' target='_blank'>© Institut Gustave Roussy</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance =
  //   "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  // $("#banner_section").before(bannerMaintenance);

  // $(function () {
  //   if ($("body").is("#events-show")) {
  //     var eventProjectsNb = $("body#events-show").find("#projects li").length;
  //     var amountRaised = $("body#events-show").find(".current-amount").html();

  //     // just need to style the event-stats

  //     if (eventProjectsNb < 2) {
  //       $("#events-show .habillage .intro-my-event").prepend(
  //         `<div class="event-stats"><div class="event-stat projects_count"><div class="stat-nb"><span >${eventProjectsNb}</span></div><p class="text-center mb-0"><strong>page de collecte créée</strong></p></div><div class="event-stat amount_collected"><div class="stat-nb"><span >${amountRaised}</span></div><p class="text-center mb-0"><strong>ont déjà été collectés</strong></p></div></div>`
  //       );
  //     } else {
  //       $("#events-show .habillage .intro-my-event").prepend(
  //         `<div class="event-stats"><div class="event-stat projects_count"><div class="stat-nb"><span >${eventProjectsNb}</span></div><p class="text-center mb-0"><strong>pages de collecte créées</strong></p></div><div class="event-stat amount_collected"><div class="stat-nb"><span >${amountRaised}</span></div><p class="text-center mb-0"><strong>ont déjà été collectés</strong></p></div></div>`
  //       );
  //     }
  //   }
  // });

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
