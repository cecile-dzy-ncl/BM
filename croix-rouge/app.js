$(document).ready(function () {
  $("body").addClass("croix-rouge");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.croix-rouge.fr/' target='_blank'>© Croix-Rouge</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  $(function () {
    if ($("body").is("#events-show")) {
      var eventId = $("#widget-new-project a")[0].href.split("event_id=")[1];

      var amount = $("#events-show .current-amount").html().replace(/\s/g, "");

      var compteurDiv = `<div class="wrapper pt-0">
      <div class="container-bm">
      <div class="compteur">
      <div class="w-50 px-10 mx-auto">
      <h2 class="text-center  m-0"><span class="bitter red">${amount}</span></h2>
      <p class="text-center  m-0">ont déjà été collectés</p>
      </div>
      </div>
      </div>
      </div>`;
      $("#widget-new-project").before(compteurDiv);
    }
  });

  $(function () {
    if ($("body").is("#indexs-index")) {
      $("#fundraising-ex #exemples").html($(".section-home-projects"));
    }
  });

  $(function () {
    if ($("body").is(".projets-locaux")) {
      const fetchUlEvents = (event) => {
        $.get(
          `https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
          function (response) {
            return response.events;
          }
        );
      };
      const fetchSelectedEvent = (event) => {
        $.get(
          `https://macollecte.croix-rouge.fr/api/events/${event}?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91`,
          function (response) {
            return response;
          }
        );
      };
      const form = $("#form-departements select");
      const resultSection = $("#results-departement");
      const eventsList = fetchUlEvents();
      console.log("eventsList", eventsList);

      // $.get(
      //   `https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
      //   function (response) {
      //     const eventsListFiltered = eventsList.filter((ulEvent) =>
      //       ulEvent.title.fr.startsWith("Croix-Rouge ")
      //     );
      //     console.log("eventsList", eventsList);
      //     eventsListFiltered.map((ulEvent) => {
      //       form.append(
      //         `<option value=${ulEvent.id} data-url=${ulEvent.url.fr}>${ulEvent.title.fr}</option>`
      //       );
      //     });
      //     form.change(function () {
      //       var selected = $(this).find("option:selected");
      //       var url = selected.data("url");
      //       console.log("url", url);
      //       $.get(
      //         `https://macollecte.croix-rouge.fr/api/events/${this.value}/projects?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
      //         function (response) {
      //           console.log(response);
      //           const card = "";
      //           resultSection.html("");
      //           if (response.total === 0) {
      //             resultSection.append(
      //               `<div>
      //                 <h3>Aucun projet en cours dans ce département.</h3>
      //                 <a class="btn-bm" href="${url}">Créer une cagnotte</a>
      //                 </div>`
      //             );
      //           } else {
      //             resultSection.append("<div id='dt-projects-list'></div>");
      //             response.projects.map((projet) => {
      //               var card = ``;
      //               $("#dt-projects-list").append(card);
      //             });
      //             resultSection.append(
      //               `<div>
      //                   <a class="btn-bm" href="${url}">Donner à mon UL</a>
      //                </div>`
      //             );
      //           }
      //         }
      //       );
      //     });
      //   }
      // );
    }
  });

  // https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91
});
