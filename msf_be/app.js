$(document).ready(function () {
  // console.log("hey hey");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // ajouter une searchbar
  var searchbar = `
  <form accept-charset="UTF-8" action="/search" class="navbar-search" method="post"><div style="display:none"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="8EQYiIZaLS0yGUki1U3V4RGhjtMpTbAG88SIAz5i76c="></div>
    <div class="row">
      <div class="search-query">
        <input class="icon-search field-auto-search" name="search" type="text" data-old-search-value="" value="" placeholder="Chercher une page de collecte">
      </div>
    </div>
  </form>`;

  // $("#indexs-index #bloc-cta .searchbar").html(searchbar);

  $("body").addClass("msf-be");

  var navButtons = $(".header-spacer nav[role='navigation']").html();
  // console.log(navButtons);
  $("#header-header").before(
    `<section id='first-header'><div class='row'></div></section>`
  );

  $("#first-header > div").html(navButtons);

  $("#header-header > .row > .columns:last-child").after(
    `<div class="btn-actions">
    <a class="bg-grey" href="https://events.msf-azg.be/projects"><strong class="white">Soutenir
    </strong>une collecte</a>
    <a class="bg-red" href=""><strong class="white">Créer
    </strong>une collecte</a>
    </div>`
  );

  $("#header-header > .row > .columns").removeClass(
    "small-12 medium-12 large-4 large-8 columns"
  );

  $(".header-spacer > div").removeClass(
    "small-12 medium-push-6 medium-pull-6 medium-6 large-reset-order large-6 columns"
  );

  $(".section-my-event > .row > .small-12.medium-9.columns")
    .removeClass("medium-9")
    .addClass("medium-12");

  $(".section-my-event .row > .medium-11.medium-offset-1")
    .removeClass("medium-11 medium-offset-1")
    .addClass("medium-12");

  $("#projects-index .first-section h2").after(
    "<p class='text-center'>La configuration de votre page de collecte de fonds ne prend que cinq minutes. Décidez quoi faire et choisissez dans quelle campagne mondiale vous souhaitez vous impliquer. Choisissez un nom, une photo et juste comme ça, vous serez prêt à commencer à collecter des fonds pour aider les personnes qui en ont le plus besoin.</p>"
  );

  $(function () {
    if ($("body").is("#events-show")) {
      // ajout du bloc stats en début de page
      var lang = $("html").attr("lang");

      $("section.event-head > .row > div:last-child").prepend(
        `
        <div class='event-recap'>
          <div class='event-recap_numbers'>
          <div class='w-25 collecte border-right'>
          <h5 class='text-center'></h5>
          <p class='text-center uppercase'><small>collectes</small></p>
          </div>
          <div class='w-50 recolte flex-grow-1'>
          <h5 class='text-center'></h5>
          <p class='text-center uppercase'><small>recoltés</small></p>
          </div>
          </div>
          <div class='event-recap_progress'></div>
          <div class='event-recap_share'></div>
        </div>
        `
      );

      if ($(".event-inscription")) {
        $(".event-recap_progress").after($(".event-inscription"));
      }

      $(".event-recap_numbers .recolte h5").html($(".current-amount").html());
      $(".event-recap_share").html($(".block-share-container"));

      var eventId = $("#events-show")[0]
        .classList.value.match(/event_\d+/g)[0]
        .split("_")[1];
      console.log(eventId);

      if (eventId === "79") {
        console.log("urgence");
      }
      $.get(
        `https://events.msf-azg.be/api/events/${eventId}?api_id=7b22e2a84173efacQFVJQBOHUISTHNNI&api_secret=b0d584cb2bba825cdaa6104c503883c8`,
        function (response) {
          console.log(response);

          $(".intro-my-event").before(`<h2>${response.title.fr}</h2>`);

          var eventProjectsNb = response.projects_count;
          $(".event-recap_numbers .collecte h5").html(eventProjectsNb);

          var eventAmountCollected =
            Number.parseInt(response.amount_collected, 10) / 100;
          var eventAmountExpected =
            Number.parseInt(response.expected_amount, 10) / 100;

          // $(".event-recap_numbers").html(eventProjectsNb);
          // $(".amount_collected .stat-nb span").html(
          //   new Intl.NumberFormat("fr-FR", {
          //     maximumFractionDigits: 0,
          //     minimumFractionDigits: 0,
          //     style: "currency",
          //     currency: "EUR",
          //   }).format(eventAmountCollected)
          // );

          $(".event-recap_share").before($("#widget-new-project"));
          $("#widget-new-project a").addClass(
            "btn-bm bg-red white uppercase w-100"
          );

          var today = new Date();

          if (response.end != null) {
            var eventEndDate = new Date(response.end);
            if (eventEndDate < today) {
              var remainingDays = 0;
              var remainingDaysLegend = "terminé";
            } else {
              var remainingDays = Math.ceil(
                (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
              );
              var remainingDaysLegend = "restants";
            }

            $(".event-recap .recolte").after(
              `
                <div class='w-25 days border-left'>
                  <h5 class='text-center'>${remainingDays}j</h5>
                  <p class='text-center uppercase'><small>${remainingDaysLegend}</small></p>
                </div>
              `
            );
          }

          if (response.expected_amount != null) {
            var eventProgress = Math.round(
              (eventAmountCollected / eventAmountExpected) * 100
            );
            console.log("eventProgress", eventProgress);
            var eventProgressBar = `
              <div class="event-progressbar bg-lightgrey">
                <div class="event-progress-perc bg-red" style="width: ${eventProgress}%"></div>
              </div>
              <div class="d-flex justify-between">
                <p class="uppercase">${eventProgress}% collectés</p>
                <p class="uppercase mediumgrey">Objectif: ${new Intl.NumberFormat(
                  "fr-FR",
                  {
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0,
                    style: "currency",
                    currency: "EUR",
                  }
                ).format(eventAmountExpected)}</p>
              </div>`;
            $(".event-recap_progress").html(eventProgressBar);
          }
        }
      );
    }
  });

  // if ($(".graph-bar")) {
  //   console.log($(".graph-bar"));
  //   $(".graph-bar").each(function () {
  //     console.log(this);
  //     this.css(
  //       "background",
  //       "linear-gradient(137deg, rgba(255,44,0,1) 0%, rgba(255,44,0,1) 50%, rgba(125,3,0,0.8561799719887955) 50%, rgba(0,0,0,0) 55%);"
  //     );
  //   });
  // }

  $(function () {
    if ($("body").is("#indexs-index")) {
      const injectCard = (eventCard, cardContainer) => {
        // console.log(cardContainer);
        $(cardContainer).append(eventCard);
      };

      const buildCard = (event, eventContainer) => {
        // console.log(event);
        var eventAmountCollected = parseInt(event.amount_collected, 10) / 100;
        var eventAmountCollectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(eventAmountCollected);

        if (event.expected_amount) {
          var eventAmountExpected = parseInt(event.expected_amount, 10) / 100;
          var eventAmountExpectedFormatted = new Intl.NumberFormat("fr-FR", {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
            style: "currency",
            currency: "EUR",
          }).format(eventAmountExpected);
          var amountExpectedBlock = `
          <div class=''>
          <h5 class='text-center'>${eventAmountExpectedFormatted}</h5>
          <p class='text-center'><small>attendus</small></p>
          </div>`;
        } else {
          var amountExpectedBlock = "";
        }
        // var today = new Date();
        if (eventEndDate != null) {
          var eventEndDate = new Date(event.end);
          var remainingDays = Math.ceil(
            (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          );
          var remainingDaysBlock = `
          <div class=''>
          <h5 class='text-center'>${remainingDays}j</h5>
          <p class='text-center'><small>restant</small></p>
          </div>
          `;
        } else {
          var remainingDays = "";
        }
        var eventProgress = (eventAmountCollected / eventAmountExpected) * 100;

        const card = `
          <div class="card card-event">
          <img src="${event.banner_image}">
          <div class="card-event-btns">
          <a href="${event.url.fr}" class="btn-bm bg-black white">Voir les collectes</a>
          <a href="https://events.msf-azg.be/projects/new?event_id=${event.id}" class="btn-bm bg-red white">Créer une collecte</a>
          </div>
          <div class="card-event-details">
          <h4>${event.title.fr}</h4>
          <p>${event.description.fr}</p>
          <div>
          <div class='event-progressbar bg-lightgrey'>
          <div class='event-progress-perc bg-red' style='width: ${eventProgress}%'></div>
          </div> 
          <div class='event-numbers d-flex mt-20'>
          <div class=''>
          <h5 class='text-center'>${event.projects_count}</h5>
          <p class='text-center'><small>collectes</small></p>
          </div>
          <div class=''>
          <h5 class='text-center'>${eventAmountCollectedFormatted}</h5>
          <p class='text-center'><small>collectés</small></p>
          </div>
          ${amountExpectedBlock}
          ${remainingDays}
          </div>
          </div>
          `;
        injectCard(card, eventContainer);
      };

      const fetchData = (event, eventContainer) => {
        $.get(
          `https://events.msf-azg.be/api/events/${event}?api_id=7b22e2a84173efacQFVJQBOHUISTHNNI&api_secret=b0d584cb2bba825cdaa6104c503883c8`,
          function (response) {
            buildCard(response, eventContainer);
          }
        );
      };

      // 8 - Naissance,
      // 10 - Mariage/Anniversaire de mariage,
      // 9 - Anniversaire,
      // 11 - In Memoriam,
      // 5 - Evènement Sportif,
      // Evènement Culturel
      var collectesEvents = [8, 9, 10, 11, 5];
      $("#collectes-scroll .scrolling-wrapper").html("");
      $.each(collectesEvents, function (key, value) {
        fetchData(value, "#collectes-scroll .scrolling-wrapper");
        // console.log(injectCard("#collectes-scroll .scrolling-wrapper"));
      });

      // 85 - 20km 2021
      // 86 - Ekiden 2021
      var events = [85, 86];
      $("#events-scroll .scrolling-wrapper").html("");
      $.each(events, function (key, value) {
        fetchData(value, "#events-scroll .scrolling-wrapper");
        // injectCard("#events-scroll .scrolling-wrapper");
      });

      // 88 - COVID
      var urgencesEvents = [88];
      $("#urgences-scroll .scrolling-wrapper").html("");
      $.each(urgencesEvents, function (key, value) {
        fetchData(value, "#urgences-scroll .scrolling-wrapper");
        // injectCard(value, "#urgences-scroll .scrolling-wrapper");
      });
    }
  });

  // custom blocs
  if ($("#events-show .event-head .custom-block")) {
    $(".event-head").after($(".custom-block"));
  }

  console.log("hello hi");
  $("#project-search").submit(function () {
    event.preventDefault();
    console.log($(this));
    console.log($(this).find("input"));
    sessionStorage.setItem("project_search", this.value);
    console.log(sessionStorage);
    // window.location.href;
  });

  // if (window.location.href === "https://donner.croix-rouge.fr/crowdfunding/home_Crowdfunding/page/projets_locaux") {

  // if (sessionStorage.category || sessionStorage.location) {
  //   sessionStorage.removeItem("location");
  //   sessionStorage.removeItem("category");
  // };

  // $(".project-cat a").each(function() {
  //     $(this).click(function () {
  //       sessionStorage.setItem("category", $(this)[0].parentNode.id);
  //     })
  // })
  // };

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    // $(".pl-370").removeClass("pl-370");
    // $(".banner-text h2").removeClass("white").addClass("black");
    // $(".banner-text p").removeClass("white");
    // $(".campagne > div").removeClass("w-50");
    // $(".compteur .border-right").removeClass("border-right").removeClass("border-white");
    // $(".conseils-et-outils .bg-black .container-small-bm > .d-flex").remove();
    // $(".a-propos .wrapper .w-20").addClass("mb-15").removeClass("w-20");
    // $(".a-propos .wrapper .w-30").addClass("mb-15").removeClass("w-30");
    // $("#events-show .event-stat").removeClass("border-right");
  }
});
