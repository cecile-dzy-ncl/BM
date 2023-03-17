$(document).ready(function () {
  $("body").addClass("secours-catholique");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='http://www.secours-catholique.org/' target='_blank'>© Secours Catholique</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  $(
    "<img src='https://mondonadusens.secours-catholique.org/cdn.iraiser.eu/3wtabg1WeyD1S6O+ZmbFHFO3CVY1Rc/4AiyrEIZsnn5DOl2AgKKJG9hDgIlAYsIA/Victoire_Bador/origin/label-don-confiance.png' width='100px'/>"
  ).appendTo("footer .top-bar-section ul.left ul.center");

  $("#main-nav .top-bar-section li:nth-last-child(-n+1) a").attr(
    "target",
    "_blank"
  );

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance =
  //   "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  // $("#banner_section").before(bannerMaintenance);

  $(function () {
    if ($("body").is("#events-show")) {
      var eventId = $("#widget-new-project a")[0].href.split("event_id=")[1];

      var amount = $("#events-show .current-amount").html().replace(/\s/g, "");

      var compteurDiv = `<div class="wrapper p-0">
      <div class="container-bm">
      <div class="compteur">
      <div class="w-50 px-10 mx-auto">
      <h2 class="text-center m-0"><span class="orange">${amount}</span></h2>
      <p class="text-center m-0">ont déjà été collectés</p>
      </div>
      </div>
      </div>
      </div>`;
      $("#widget-new-project").before(compteurDiv);
    }
  });

  $(function () {
    if ($("body").is("#events-index")) {
      var eventsList = $("#events .event-item");
      console.log(eventsList);
      eventsList.each(function () {
        const eventId = $(this).find(".page-create")[0].href.split("=")[1];
        console.log("this", $(this));
        $(this).attr("id", `event_${eventId}`);
      });
    }
  });
});
