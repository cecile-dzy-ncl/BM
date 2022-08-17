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
      const form = $("#form-departements select");
      const resultSection = $("#results-departement");

      const buildCard = function (event) {
        var eventAmountCollected = parseInt(event.amount_collected, 10) / 100;
        var eventAmountCollectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(eventAmountCollected);

        if (event.expected_amount != null) {
          var eventAmountExpected = parseInt(event.expected_amount, 10) / 100;
          var eventProgress =
            (eventAmountCollected / eventAmountExpected) * 100;
          var progressBar =
            "<div class='event-progressbar bg-lightgrey'><div class='event-progress-perc bg-red' style='width:" +
            eventProgress +
            "%'></div></div>";
          var classNoAmount = "";
          var eventAmountExpected = parseInt(event.expected_amount, 10) / 100;
          var eventAmountExpectedFormatted = new Intl.NumberFormat("fr-FR", {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            style: "currency",
            currency: "EUR",
          }).format(eventAmountExpected);
          var amountExpectedBlock =
            "<div class='line'></div><div class=''><h5 class='text-center'>" +
            eventAmountExpectedFormatted +
            "</h5><p class='text-center'><small>" +
            legendExpected +
            "</small></p></div>";
        } else {
          var classNoAmount = "no-amount";
          var amountExpectedBlock = "";
          var progressBar = "";
        }

        if (eventEndDate != null) {
          var eventEndDate = new Date(event.end);
          var remainingDays = Math.ceil(
            (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          );
          var remainingDaysBlock =
            "<div class='line'></div><div class=''><h5 class='text-center'>" +
            remainingDays +
            "j</h5><p class='text-center'><small>" +
            remainingDaysLegend +
            "</small></p></div>";
        } else {
          var remainingDays = "";
        }

        const card =
          "<div class='card card-event " +
          classNoAmount +
          "'><img src='" +
          event.banner_image +
          "'><div class='card-event-btns'><a href='" +
          event.url.fr +
          "' class='btn-bm bg-black white'>" +
          btnSee +
          "</a><a href='https://events.msf-azg.be/projects/new?event_id=" +
          event.id +
          "' class='btn-bm bg-red white'>" +
          btnCreerCard +
          "</a></div><div class='card-event-details'><h4><a href='" +
          event.url.fr +
          "'>" +
          event.title.fr +
          "</a></h4><p>" +
          event.description.fr +
          "</p><div>" +
          progressBar +
          "<div class='event-numbers d-flex mt-20'><div class=''><h5 class='text-center'>" +
          event.projects_count +
          "</h5><p class='text-center'><small>" +
          legendCollectes +
          "</small></p></div><div class='line'></div><div class=''><h5 class='text-center amount-collected-title'>" +
          eventAmountCollectedFormatted +
          "</h5><p class='text-center'><small>" +
          legendRecoltes +
          "</small></p></div>" +
          amountExpectedBlock +
          remainingDays +
          "</div></div>";
        return card;
        // injectCard(card, eventContainer);
      };

      const fetchUlEvents = async () => {
        return await fetch(
          "https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300"
        )
          .then((result) => result.json())
          .then((data) => {
            console.log("data", data);
            return data.events;
          });
      };

      console.log("test", fetchUlEvents());

      $.get(
        `https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
        function (response) {
          const eventsListFiltered = response.events.filter((ulEvent) =>
            ulEvent.title.fr.startsWith("Croix-Rouge ")
          );

          eventsListFiltered.map((ulEvent) => {
            form.append(
              `<option value=${ulEvent.id} data-url=${ulEvent.url.fr}>${ulEvent.title.fr}</option>`
            );
          });
          form.change(function () {
            var selected = $(this).find("option:selected");
            var url = selected.data("url");
            console.log("url", url);
            $.get(
              `https://macollecte.croix-rouge.fr/api/events/${this.value}/projects?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
              function (response) {
                console.log(response);
                const card = "";
                resultSection.html("");
                if (response.total === 0) {
                  resultSection.append(
                    `<div>
                      <h3>Aucun projet en cours dans ce département.</h3>
                      <a class="btn-bm" href="${url}">Créer une cagnotte</a>
                      </div>`
                  );
                } else {
                  resultSection.append("<div id='dt-projects-list'></div>");
                  response.projects.map((projet) => {
                    var card = buildCard(projet);
                    $("#dt-projects-list").append(card);
                  });
                  resultSection.append(
                    `<div>
                        <a class="btn-bm" href="${url}">Donner à mon UL</a>
                     </div>`
                  );
                }
              }
            );
          });
        }
      );
    }
  });
});
