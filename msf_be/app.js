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

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  // $(".credits").appendTo("section#project_tabs + section .row");

  // $(
  //   "<li class='nodropdown footer-link-menu'><a href='https://www.fondation-abbe-pierre.fr/'>© FONDATION ABBÉ PIERRE</a></li>"
  // ).prependTo("footer .top-bar-section ul.left ul.center");

  // $(function () {
  //   if ($("body").is("#events-show")) {
  //     // ajout du bloc stats en début de page
  //     $("#events-show .habillage").prepend(
  //       '<div class="event-stats"><div class="event-stat projects_count border-right"><div class="stat-nb"><img src="https://cagnottes.fondation-abbe-pierre.fr/cdn.iraiser.eu/I39oA4rMH9qdybsOpBgq0iwzVt7FMRAsvHp9T9pmvz+9lRcfTzKeuu6wlx2lJCDc/Cecile_Dezy/origin/iconpagecollecte2x.png"><span class="orange"></span></div><p class="text-center mb-0"><strong>page de collecte créées</strong></p></div><div class="event-stat amount_collected"><div class="stat-nb"><img src="https://cagnottes.fondation-abbe-pierre.fr/cdn.iraiser.eu/I39oA4rMH9qdybsOpBgq0iwzVt7FMRAsvHp9T9pmvz+9lRcfTzKeuu6wlx2lJCDc/Cecile_Dezy/origin/iconmontantcollecte2x.png"><span class="orange"></span></div><p class="text-center mb-0"><strong>ont déjà été collectés</strong></p></div></div>'
  //     );

  //     var eventId = $("#events-show")[0]
  //       .classList.value.match(/event_\d/g)[0]
  //       .split("_")[1];

  //     $.get(
  //       `https://cagnottes.fondation-abbe-pierre.fr/api/events/${eventId}?api_id=48dae0f816515defTAHDFBPTZUKLDWVB&api_secret=da68652cbe796d3d79503c3df0619e18`,
  //       function (response) {
  //         console.log(response);
  //         var eventProjectsNb = response.projects_count;
  //         var eventAmountCollected =
  //           Number.parseInt(response.amount_collected, 10) / 100;
  //         var eventAmountExpected =
  //           Number.parseInt(response.expected_amount, 10) / 100;
  //         console.log("eventAmountCollected");
  //         console.log(eventAmountCollected);

  //         $(".projects_count .stat-nb span").html(eventProjectsNb);
  //         $(".amount_collected .stat-nb span").html(
  //           new Intl.NumberFormat("fr-FR", {
  //             maximumFractionDigits: 0,
  //             minimumFractionDigits: 0,
  //             style: "currency",
  //             currency: "EUR",
  //           }).format(eventAmountCollected)
  //         );
  //         if (response.expected_amount != null) {
  //           var eventProgress = Math.round(
  //             (eventAmountCollected / eventAmountExpected) * 100
  //           );
  //           console.log("eventProgress", eventProgress);
  //           var eventProgressBar = `
  //         <div class="container-xs-bm mt-50">
  //           <div class="event-progressbar bg-mediumgrey mb-20">
  //             <div class="event-progress-perc bg-orange" style="width: ${eventProgress}%"></div>
  //           </div>
  //           <div class="d-flex justify-between">
  //             <p>${eventProgress}%</p>
  //             <p>Objectif: ${new Intl.NumberFormat("fr-FR", {
  //               maximumFractionDigits: 0,
  //               minimumFractionDigits: 0,
  //               style: "currency",
  //               currency: "EUR",
  //             }).format(eventAmountExpected)}</p>
  //           </div>
  //         </div>`;
  //           $(".event-stats").after(eventProgressBar);
  //         }
  //       }
  //     );
  //   }
  // });

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

  // EVENT STARS S'ENGAGENT
  $(function () {
    if ($("body").is("#indexs-index")) {
      // $("#events-scroll .scrolling-wrapper").html("");
      // $("#urgences-scroll .scrolling-wrapper").html("");

      const injectCard = (eventCard, cardContainer) => {
        console.log(cardContainer);
        $(cardContainer).append(eventCard);
      };

      const buildCard = (event, eventContainer) => {
        console.log(event);
        var projectAmountCollected = parseInt(event.amount_collected, 10) / 100;
        var projectAmountCollectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(projectAmountCollected);
        var projectAmountExpected = parseInt(event.expected_amount, 10) / 100;
        var projectAmountExpectedFormatted = new Intl.NumberFormat("fr-FR", {
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
          style: "currency",
          currency: "EUR",
        }).format(projectAmountExpected);
        var projectEndDate = new Date(event.end);
        var today = new Date();
        if (projectEndDate != null) {
          var remaningDays = Math.ceil(
            (projectEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
          );
        } else {
          var remaningDays = "Pas de date de fin";
        }
        var projectProgress =
          (projectAmountCollected / projectAmountExpected) * 100;

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
          <div class='event-progress-perc bg-red' style='width: ${projectProgress}%'></div>
          </div> 
          <div class='d-flex justify-between'>
          <div class='w-20'>
          <h5 class='text-center'>${event.projects_count}</h5>
          <p class='text-center'><small>collectes</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${projectAmountCollectedFormatted}</h5>
          <p class='text-center'><small>recoltés</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${projectAmountExpectedFormatted}</h5>
          <p class='text-center'><small>attendus</small></p>
          </div>
          <div class='w-20'>
          <h5 class='text-center'>${remaningDays}j</h5>
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
      var events = [70, 66, 63];
      $("#events-scroll .scrolling-wrapper").html("");
      $.each(events, function (key, value) {
        fetchData(value, "#events-scroll .scrolling-wrapper");
        // injectCard("#events-scroll .scrolling-wrapper");
      });

      console.log("prout");
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
