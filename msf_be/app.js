$(document).ready(function () {
  $("body").addClass("msf-be");

  var lang = $("html").attr("lang");

  switch (lang) {
    case "en":
      var remainingDaysLegend = "remaining";
      var btnSoutenir = "Support an event";
      var btnCreer = "Create a page";
      var btnSee = "See all projects";
      var projectIntro =
        "Do you want to support the fundraising of a family member, a close friend, a colleague or an enterprise? We thank you in advance! You will find all fundraising pages below.";
      var eventIntro =
        "Setting up your fundraising page takes only five minutes. Decide what you want to do and choose which campaign you want to get involved in. Choose a name, a photo, and you'll be ready to start raising money to help the people who need it most.";
      var legendCollectes = "projects";
      var legendRecoltes = "collected";
      var legendObjectif = "Goal";
      var legendExpected = "expected";
      var helpTitle = "Need help?";
      var helpContent =
        "We'll be happy to help you define and create your campaign. Contact us if you have any questions. You can also check out our fundraising tips and advice that we've created for you.";
      var helpBtn = "Tips & tricks";
      break;
    case "nl":
      var remainingDaysLegend = "resterende";
      var btnSoutenir = "Een crowdfunding steunen";
      var btnCreer = "Een crowdfunding creëren";
      var btnSee = "Bekijk alle projecten";
      var projectIntro =
        "Wilt u een inzamelactie van een familielid, een dierbare, een collega of een bedrijf steunen? Alvast heel hartelijk bedankt voor dit gebaar! Hieronder vindt u alle fondsenwervingspagina's.";
      var eventIntro =
        "Uw fondsenwervingspagina aanmaken neemt maar een paar minuten in beslag. Kies een naam, een foto, uw crowdfundingdoel en u kan meteen beginnen geld inzamelen voor de mensen die onze hulp het hardst nodig hebben.";

      var legendCollectes = "inzamelacties";
      var legendRecoltes = "ingezameld";
      var legendObjectif = "Doel";
      var legendExpected = "verwachte";
      var helpTitle = "Hulp nodig?";
      var helpContent =
        "Wij helpen u graag uw campagne te kiezen en te creëren. Contacteer ons met uw vragen. U kan ook de tips & tricks voor een geslaagde crowdfunding bekijken die we voor u hebben gebundeld.";
      var helpBtn = "Tips & tricks";
      break;
    default:
      var remainingDaysLegend = "restants";
      var btnSoutenir = "Soutenir une collecte";
      var btnCreer = "Créer une collecte";
      var btnSee = "Voir les collectes";
      var projectIntro =
        "Vous souhaitez soutenir la collecte d'un membre de votre famille, un proche, un collègue ou une entreprise ? Nous vous remercions d'orse et déjà pour ce geste ! Vous retrouverez toutes les pages de collectes ci-dessous.";
      var eventIntro =
        "La configuration de votre page de collecte de fonds ne prend que cinq minutes. Décidez quoi faire et choisissez dans quelle campagne mondiale vous souhaitez vous impliquer. Choisissez un nom, une photo et juste comme ça, vous serez prêt à commencer à collecter des fonds pour aider les personnes qui en ont le plus besoin.";

      var legendCollectes = "collectes";
      var legendRecoltes = "récoltés";
      var legendObjectif = "Objectif";
      var legendExpected = "attendus";
      var helpTitle = "Besoin d'un coup de main ?";
      var helpContent =
        "Nous serons ravis de vous aider à définir et créer votre campagne. Contactez-nous si vous avez des questions. Vous pouvez également consulter nos astuces et conseils de collecte de fonds que nous avons créés pour vous.";
      var helpBtn = "Trucs et astuces";
      break;
  }

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // AJOUT BANNER MAINTENANCE
  var helpWrapper = `
  <div class='container-small-bm my-80'>
  <div class='wrapper-help d-flex flex-column'>
  <h1 class='grey text-center mb-15'>${helpTitle}</h1>
  <p class='grey text-center'>${helpContent}</p>
  <a class='btn btn-bm bg-red white my-20' href="https://events.msf-azg.be/pages/107">${helpBtn}</a>
  </div>;
  </div>`;
  $("#events-index .section-events").after(helpWrapper);

  // AJOUT NAV BUTTONS

  if (window.matchMedia("(max-width: 600px)").matches) {
    $("nav#main-nav").append($("#first-header .top-bar-section"));
    $("nav#main-nav").append($(".header-spacer .top-bar-section"));
  }

  if (window.matchMedia("(min-width: 600px)").matches) {
    /* La largeur minimum de l'affichage est 600 px inclus */
    var navButtons = $(".header-spacer nav[role='navigation']").html();
    $("#header-header").before(
      "<section id='first-header'><div class='row'></div></section>"
    );

    $("#first-header > div").html(navButtons);

    $("#header-header > .row > .columns:last-child").after(
      `<div class="btn-actions">
              <a class="bg-grey" href="https://events.msf-azg.be/projects">${btnSoutenir}</a>
              <a class="bg-red" href="">${btnCreer}</a>
              </div>`
    );

    $("#header-header > .row > .columns").removeClass(
      "small-12 medium-12 large-4 large-8 columns"
    );

    $(".header-spacer > div").removeClass(
      "small-12 medium-push-6 medium-pull-6 medium-6 large-reset-order large-6 columns"
    );
  }

  $(".section-my-event > .row > .small-12.medium-9.columns")
    .removeClass("medium-9")
    .addClass("medium-12");

  $(".section-my-event .row > .medium-11.medium-offset-1")
    .removeClass("medium-11 medium-offset-1")
    .addClass("medium-12");

  if ($("#projects-index")) {
    $("#projects-index .first-section h2").after(
      `<p class='text-center'>${projectIntro}</p>`
    );
  }

  if ($("#events-index")) {
    $("#events-index .first-section h2").after(
      `<p class='text-center'>${eventIntro}</p>`
    );
  }

  $(function () {
    if ($("body").is("#events-show")) {
      // ajout du bloc stats en début de page

      $("section.event-head > .row > div:last-child").prepend(
        `
        <div class='event-recap'>
        <div class='event-recap_numbers'>
        <div class='collecte border-right'>
        <h5 class='text-center'></h5>
        <p class='text-center uppercase'><small>${legendCollectes}</small></p>
        </div>
        <div class='recolte'>
        <h5 class='text-center'></h5>
        <p class='text-center uppercase'><small>${legendRecoltes}</small></p>
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

      if (eventId === "88") {
        console.log("urgence");
      }
      $.get(
        `https://events.msf-azg.be/api/events/${eventId}?api_id=7b22e2a84173efacQFVJQBOHUISTHNNI&api_secret=b0d584cb2bba825cdaa6104c503883c8`,
        function (response) {
          console.log(response);

          switch (lang) {
            case "en":
              var eventTitle = response.title.en;
              break;
            case "nl":
              var eventTitle = response.title.nl;
              break;
            default:
              var eventTitle = response.title.fr;
              break;
          }
          $(".intro-my-event").before(`<h2>${eventTitle}</h2>`);

          var eventProjectsNb = response.projects_count;
          $(".event-recap_numbers .collecte h5").html(eventProjectsNb);

          var eventAmountCollected =
            Number.parseInt(response.amount_collected, 10) / 100;
          var eventAmountExpected =
            Number.parseInt(response.expected_amount, 10) / 100;

          $(".event-recap_share").before($("#widget-new-project"));
          $("#widget-new-project a").addClass(
            "btn-bm bg-red white uppercase w-100"
          );

          var today = new Date();

          if (response.end != null) {
            var eventEndDate = new Date(response.end);
            if (eventEndDate < today) {
              var remainingDays = 0;
              switch (lang) {
                case "en":
                  var remainingDaysLegend = "closed";
                  break;
                case "nl":
                  var remainingDaysLegend = "afgewerkt";
                  break;
                default:
                  var remainingDaysLegend = "terminé";
                  break;
              }
            } else {
              var remainingDays = Math.ceil(
                (eventEndDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
              );
              switch (lang) {
                case "en":
                  var remainingDaysLegend = "remaining";
                  break;
                case "nl":
                  var remainingDaysLegend = "resterende";
                  break;
                default:
                  var remainingDaysLegend = "restants";
                  break;
              }
            }

            $(".event-recap .recolte").after(
              `
                    <div class='days border-left'>
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
              <p class="uppercase">${eventProgress}% ${legendRecoltes}</p>
              <p class="uppercase mediumgrey">${legendObjectif}: ${new Intl.NumberFormat(
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

          if ($(".event-details .btn-donate")) {
            $("#widget-new-project").after($(".btn-donate"));
          }
        }
      );
    }
  });

  $(function () {
    if ($("body").is("#indexs-index") || $("body").is("#events-index")) {
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
                              <p class='text-center'><small>${legendExpected}</small></p>
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
                                <p class='text-center'><small>${remainingDaysLegend}</small></p>
                                </div>
                                `;
        } else {
          var remainingDays = "";
        }
        var eventProgress = (eventAmountCollected / eventAmountExpected) * 100;

        switch (lang) {
          case "en":
            var eventUrl = event.url.en;
            var eventTitle = event.title.en;
            var eventDescription = event.description.en;
            break;
          case "nl":
            var eventUrl = event.url.nl;
            var eventTitle = event.title.nl;
            var eventDescription = event.description.nl;
            break;
          default:
            var eventUrl = event.url.fr;
            var eventTitle = event.title.fr;
            var eventDescription = event.description.fr;
            break;
        }

        const card = `
          <div class="card card-event">
          <img src="${event.banner_image}">
          <div class="card-event-btns">
          <a href="${eventUrl}" class="btn-bm bg-black white">${btnSee}</a>
          <a href="https://events.msf-azg.be/projects/new?event_id=${event.id}" class="btn-bm bg-red white">${btnCreer}</a>
          </div>
          <div class="card-event-details">
          <h4>${eventTitle}</h4>
          <p>${eventDescription}</p>
          <div>
          <div class='event-progressbar bg-lightgrey'>
          <div class='event-progress-perc bg-red' style='width: ${eventProgress}%'></div>
          </div> 
          <div class='event-numbers d-flex mt-20'>
          <div class=''>
          <h5 class='text-center'>${event.projects_count}</h5>
          <p class='text-center'><small>${legendCollectes}</small></p>
          </div>
          <div class=''>
          <h5 class='text-center amount-collected-title'>${eventAmountCollectedFormatted}</h5>
          <p class='text-center'><small>${legendRecoltes}</small></p>
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

      var collectesEvents = [8, 9, 10, 11, 5];
      $("#collectes-scroll .scrolling-wrapper").html("");
      $.each(collectesEvents, function (key, value) {
        fetchData(value, $("#collectes-scroll .scrolling-wrapper"));
      });

      var events = [85, 86];
      $("#events-scroll .scrolling-wrapper").html("");
      $.each(events, function (key, value) {
        fetchData(value, "#events-scroll .scrolling-wrapper");
      });

      var urgencesEvents = [88];
      $("#urgences-scroll .scrolling-wrapper").html("");
      $.each(urgencesEvents, function (key, value) {
        fetchData(value, "#urgences-scroll .scrolling-wrapper");
      });

      const slickSettings = {
        accessibility: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        speed: 500,
        prevArrow:
          '<button id="prev" class="controls"><i class="fas fa-arrow-left"></i></button>',
        nextArrow:
          '<button id="next" class="controls"><i class="fas fa-arrow-right"></i></button>',
      };

      if (collectesEvents.length > 3) {
        setTimeout(function () {
          $("#collectes-scroll .scrolling-wrapper").slick(slickSettings);
        }, 300);
      }

      if (events.length > 3) {
        setTimeout(function () {
          $("#events-scroll .scrolling-wrapper").slick(slickSettings);
        }, 500);
      }

      if (urgencesEvents.length > 3) {
        setTimeout(function () {
          $("#urgences-scroll .scrolling-wrapper").slick(slickSettings);
        }, 500);
      }

      const fetchDataEvents = (eventContainer) => {
        console.log("fetchDataEvents");
        $.get(
          `https://events.msf-azg.be/api/events?api_id=7b22e2a84173efacQFVJQBOHUISTHNNI&api_secret=b0d584cb2bba825cdaa6104c503883c8`,
          function (response) {
            console.log(response.events);
            eventContainer.html("");
            $.each(response.events, function (key, value) {
              buildCard(value, eventContainer);
            });
          }
        );
      };

      const eventsContainer = $("#events-index #events");
      fetchDataEvents(eventsContainer);
    }
  });

  // custom blocs
  if ($("#events-show .event-head .custom-block")) {
    $(".event-head").after($(".custom-block"));
  }

  $("#project-search").submit(function () {
    event.preventDefault();
    var project_search = $(this).find("input")[0].value;
    sessionStorage.setItem("project_search", project_search);
    console.log(sessionStorage);
    window.location.href = `https://events.msf-azg.be/projects?search=${project_search}&search_lang=&search_status=&search_event_id=&search_scope=peer_to_peer`;
  });

  $("#event-search").submit(function () {
    event.preventDefault();
    var event_search = $(this).find("input")[0].value;
    sessionStorage.setItem("event_search", event_search);
    console.log(sessionStorage);
    window.location.href = `https://events.msf-azg.be/events?search=${event_search}&search_place=&search_status=`;
  });

  // function changeTitle(title) {
  //   var activeStepTitleContent = title.innerHTML.split("-")[1];
  //   $(".step-title").html(activeStepTitleContent);
  // }

  if ($("#projects-new")) {
    // $(".tab-content").prepend($("#step_tab"));
    // $("#step_tab").after($("#error-message + .row"));
    //   $("#projects-new .container-event").before(
    //     "<h1 class='step-title text-center'></h1>"
    //   );
    //   var activeStepTitle = $(
    //     "#projects-new #form-project #step_tab .active a.click_tabs"
    //   )[0];
    //   // if (activeStepTitle) {
    //   //   // var activeStepTitleContent = activeStepTitle.innerHTML.split("-")[1];
    //   //   // $(".step-title").html(activeStepTitleContent);
    //   //   changeTitle(activeStepTitle);
    //   // }
    //   // $("input#step").change(function () {
    //   //   var activeStepTitle = $(
    //   //     "#projects-new #form-project #step_tab .active a.click_tabs"
    //   //   )[0];
    //   //   changeTitle(activeStepTitle);
    //   //   var stepNumber = $("input#step")[0].value;
    //   //   console.log(stepNumber);
    //   // });
    //   $("form#new_project").change(function () {
    //     //   var activeStepTitle = $(
    //     //     "#projects-new #form-project #step_tab .active a.click_tabs"
    //     //   )[0];
    //     //   changeTitle(activeStepTitle);
    //     //   var stepNumber = $("input#step")[0].value;
    //     //   console.log("if form", stepNumber);
    //     //   console.log("if form activeStepTitle", activeStepTitle);
    //     if ($("input#step")[0].value === "1") {
    //       console.log("if 1", activeStepTitle);
    //       // var activeStepTitle = $(
    //       //   "#projects-new #form-project #step_tab .active a.click_tabs"
    //       // )[0];
    //       // changeTitle(activeStepTitle);
    //     }
    //     if ($("input#step")[0].value === "2") {
    //       // var activeStepTitle = $(
    //       //   "#projects-new #form-project #step_tab .active a.click_tabs"
    //       // )[0];
    //       // changeTitle(activeStepTitle);
    //       console.log("if 2", activeStepTitle);
    //     }
    //     if ($("input#step")[0].value === "3") {
    //       // var activeStepTitle = $(
    //       //   "#projects-new #form-project #step_tab .active a.click_tabs"
    //       // )[0];
    //       // changeTitle(activeStepTitle);
    //       console.log("if 3", activeStepTitle);
    //     }
    //   });
  }

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
