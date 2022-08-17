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
      $.get(
        `https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91&count=300`,
        function (response) {
          const eventsList = response.events;
          const eventsListFiltered = eventsList.filter((ulEvent) =>
            ulEvent.title.fr.startsWith("Croix-Rouge ")
          );
          eventsListFiltered.map((ulEvent) => {
            form.append(
              `<option value=${ulEvent.id}>${ulEvent.title.fr}</option>`
            );
          });
          form.change(function () {
            console.log(this.value);
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
                      <a class="btn-bm" href="${response.}">Créer une cagnotte</a>
                    </div>`
                  );
                } else {
                  resultSection.append(
                    `<div>
                      <h3>afficher les vignettes des projets ici</h3>
                     </div>`
                      // <record
                      //   count="100"
                      //   event_id={this.value}
                      //   project_type="peer_to_peer"
                      //   select="top"
                      // >
                      //   ${$project}
                      // </record>
                  );
                }
              }
            );
          });
        }
      );
    }
  });

  // https://macollecte.croix-rouge.fr/api/events?api_id=995dcc6271d03903LODRUVKNHNDGRMXF&api_secret=e519ac404340b6fc322cf90dcf6d9d91
});
