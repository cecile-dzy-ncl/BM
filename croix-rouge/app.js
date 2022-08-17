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
        if (event.expected_amount != null) {
          var eventAmountExpected = parseInt(event.expected_amount, 10) / 100;
          var eventProgress =
            (eventAmountCollected / eventAmountExpected) * 100;
        }

        if (eventEndDate != null) {
          var eventEndDate = new Date(event.end);
          var remainingDays = `${Math.ceil(
            (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          )}j`;
        } else {
          var remainingDays = "";
        }

        console.log("event", event);
        const card = `
        <li>
          <div class="panel radius">
            <div class="thumbnail">
              <a href="${event.url.fr}">
                <img alt="${
                  event.title.fr
                }" class="project-thumbnails" data-img-0="${
          event.project_images[0].image
        }" src="${event.project_images[0].image}">
              </a>
            </div>
            <div class="caption">
              <h3 class="text-center">
                <a href="${event.url.fr}">${event.title.fr}</a>
              </h3>
              <p class="link-to-user text-center truncate_html">
                  par&nbsp;${event.creator}
              </p>
            </div>
            <div class="caption infos-money">
                <div class="progress">
                  <span class="graph-barBack">
                    <span class="graph-bar" data-value="${
                      (event.current_amount / event.desired_amount) * 100
                    }" style="width: ${
          (event.current_amount / event.desired_amount) * 100
        }%;">
                      <span class="graph-legend"></span>
                    </span>
                  </span>
                </div>
              <div class="row infos-money-details">
                <div class="small-4 columns text-center">
                  <span class="info-money detail">
                    ${event.current_amount / 100} €
                  </span>
                  <small class="clearfix">
                    collectés
                  </small>
                </div>
                <div class="small-4 columns text-center">
                  <span class="info-money detail">
                    ${event.desired_amount / 100} €
                  </span>
                  <small class="clearfix">
                    attendus
                  </small>
                </div>
                <div class="small-4 columns text-center">
                  <span class="info-money detail">
                  ${remainingDays}
                  </span>
                  ${
                    remainingDays === ""
                      ? ""
                      : `<small class="clearfix">restants</small>`
                  }
                </div>
              </div>
            </div>
          </div>
        </li>`;

        return card;
        // injectCard(card, eventContainer);
      };

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

            $.get(
              `https://macollecte.croix-rouge.fr/api/events/${this.value}/projects?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
              function (response) {
                resultSection.html("");
                if (response.total === 0) {
                  resultSection.append(
                    `<div>
                      <h3>Aucun projet en cours dans ce département.</h3>
                      <a class="btn-bm" href="${url}">Créer une cagnotte</a>
                      </div>`
                  );
                } else {
                  resultSection.append("<ul class='projects-list'></ul>");
                  response.projects.map((projet) => {
                    var card = buildCard(projet);
                    $(".projects-list").append(card);
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
