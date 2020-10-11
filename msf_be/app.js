$(document).ready(function () {
  console.log("hey hey");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // ajouter une searchbar
  var searchbar = `<form accept-charset="UTF-8" action="/search" class="navbar-search" method="post"><div style="display:none"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="8EQYiIZaLS0yGUki1U3V4RGhjtMpTbAG88SIAz5i76c="></div>
  <div class="row">
    <div class="search-query">
      <input class="icon-search field-auto-search" name="search" type="text" data-old-search-value="" value="" placeholder="Chercher une page de collecte">
    </div>
  </div>
</form>`;

  $("#indexs-index #bloc-cta .searchbar").html(searchbar);

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

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  // $(".credits").appendTo("section#project_tabs + section .row");

  // $(
  //   "<li class='nodropdown footer-link-menu'><a href='https://www.fondation-abbe-pierre.fr/'>© FONDATION ABBÉ PIERRE</a></li>"
  // ).prependTo("footer .top-bar-section ul.left ul.center");

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

          $(".intro-my-event").prepend(response.title.lang);

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
        console.log(cardContainer);
        $(cardContainer).append(eventCard);
      };

      const buildCard = (event, eventContainer) => {
        console.log(event);
        var eventAmountCollected = parseInt(event.amount_collected, 10) / 100;
        var eventAmountCollectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(eventAmountCollected);
        var eventAmountExpected = parseInt(event.expected_amount, 10) / 100;
        var eventAmountExpectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(eventAmountExpected);
        // var today = new Date();
        if (eventEndDate != null) {
          var eventEndDate = new Date(event.end);
          var remainingDays = Math.ceil(
            (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          );
        } else {
          var remainingDays = "Pas de date de fin";
        }
        var eventProgress = (eventAmountCollected / eventAmountExpected) * 100;

        // const daysColumn =
        // if (condition) {

        // }`

        // `;

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
          <div class='d-flex justify-between mt-10'>
          <div class='w-20'>
          <h5 class='text-center'>${event.projects_count}</h5>
          <p class='text-center'><small>collectes</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${eventAmountCollectedFormatted}</h5>
          <p class='text-center'><small>recoltés</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${eventAmountExpectedFormatted}</h5>
          <p class='text-center'><small>attendus</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${remainingDays}j</h5>
          <p class='text-center'><small>restant</small></p>
          </div>
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
      var collectesEvents = [8, 10, 9, 11, 5];
      $("#collectes-scroll .scrolling-wrapper").html("");
      $.each(collectesEvents, function (key, value) {
        fetchData(value, "#collectes-scroll .scrolling-wrapper");
        // console.log(injectCard("#collectes-scroll .scrolling-wrapper"));
      });

      // 70 - 20km,
      // 63 - 20km 2019
      // 66 - Ekiden,
      var events = [70, 66];
      $("#events-scroll .scrolling-wrapper").html("");
      $.each(events, function (key, value) {
        fetchData(value, "#events-scroll .scrolling-wrapper");
        // injectCard("#events-scroll .scrolling-wrapper");
      });

      //
      //
      //
      // var urgencesEvents = [];
      // $("#urgences-scroll .scrolling-wrapper").html("");
      // $.each(urgencesEvents, function (key, value) {
      //   fetchData(value);
      //   injectCard("#urgences-scroll .scrolling-wrapper");
      // });

      // var starProjects = response.projects;
      // $.each(starProjects, function (key, value) {
      //   var projectTitle = value.title.fr;
      //   var projectAmountCollected =
      //     parseInt(value.current_amount, 10) / 100;
      //   var projectAmountCollectedFormatted = new Intl.NumberFormat(
      //     "fr-FR",
      //     {
      //       maximumFractionDigits: 0,
      //       minimumFractionDigits: 0,
      //       style: "currency",
      //       currency: "EUR",
      //     }
      //   ).format(projectAmountCollected);
      //   var projectAmountExpected =
      //     parseInt(value.desired_amount, 10) / 100;
      //   var projectAmountExpectedFormatted = new Intl.NumberFormat(
      //     "fr-FR",
      //     {
      //       maximumFractionDigits: 0,
      //       minimumFractionDigits: 0,
      //       style: "currency",
      //       currency: "EUR",
      //     }
      //   ).format(projectAmountExpected);
      //   var projectEndDate = new Date(value.end);
      //   var today = new Date();
      //   var remaningDays = Math.ceil(
      //     (projectEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
      //   );
      //   var projectProgress =
      //     (projectAmountCollected / projectAmountExpected) * 100;
      //   var projectUrl = value.url.fr;
      //   var projectImg = value.project_images[0].original;
      //   var projectCard = `
      // <div class='project-card'>
      //   <img src='${projectImg}' alt='photo du projet'>
      //   <div class='project-details d-flex flex-column p-50 h-50'>
      //     <h4 class='h-25 text-center d-flex align-items-center justify-center'>${projectTitle}</h4>
      //     <div class='h-75'>
      //       <div class='progress-bar bg-white'>
      //         <div class='progress-perc bg-orange' style='width: ${projectProgress}%'></div>
      //       </div>
      //       <div class='d-flex justify-between'>
      //         <div class='w-33'>
      //           <h4 class='text-center'>${projectAmountCollectedFormatted}</h4>
      //           <p class='text-center'>collectés</p>
      //         </div>
      //         <div class='w-33'>
      //           <h4 class='text-center'>${projectAmountExpectedFormatted}</h4>
      //           <p class='text-center'>attendus</p>
      //         </div>
      //         <div class='w-33'>
      //           <h4 class='text-center'>${remaningDays}j</h4>
      //           <p class='text-center'>restant</p>
      //         </div>
      //       </div>
      //       <a href='${projectUrl}' target='_blank' class='uppercase btn btn-bm btn-bm-border btn-bm-large'>Voir la page de collecte</a>
      //     </div>
      //   </div>
      // </div>`;
      //   $(".stars-projects").prepend(projectCard);
      // });

      // récupérer les infos des pages de collectes des stars
    }
  });

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
