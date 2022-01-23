$(document).ready(function () {
  $("body").addClass("msf-be");

  var lang = $("html").attr("lang");

  switch (lang) {
    case "en":
      var remainingDaysLegend = "remaining";
      var btnSoutenir = "<strong>Support</strong> an event";
      var btnCreer = "<strong>Create</strong> a page";
      var btnCreerCard = "Create a page";
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
      var btnSoutenir = "<strong>Steun een</strong>inzamelactie";
      var btnCreer = "<strong>Creëer een</strong>inzamelactie";
      var btnCreerCard = "Een inzamelactie creëren";
      var btnSee = "Bekijk alle projecten";
      var projectIntro =
        "Wilt u een inzamelactie van een familielid, een dierbare, een collega of een bedrijf steunen? Alvast heel hartelijk bedankt voor dit gebaar! Hieronder vindt u alle fondsenwervingspagina's.";
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
      var btnSoutenir = "<strong>Soutenir</strong> une collecte";
      var btnCreer = "<strong>Créer</strong> une collecte";
      var btnCreerCard = "Créer une collecte";
      var btnSee = "Voir les collectes";
      var projectIntro =
        "Vous souhaitez soutenir la collecte d'un membre de votre famille, un proche, un.e collègue ou une entreprise ? Nous vous remercions d'ores et déjà pour ce geste ! Vous retrouverez toutes les pages de collectes ci-dessous.";
      var eventIntro =
        "La configuration de votre page de collecte de fonds ne prend que cinq minutes. Décidez quoi faire et choisissez dans quelle campagne mondiale vous souhaitez vous impliquer. Choisissez un nom, une photo et juste comme ça, vous serez prêts à commencer à collecter des fonds pour aider les personnes qui en ont le plus besoin.";
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
  // var bannerMaintenance =
  //   "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  // $("#banner_section").before(bannerMaintenance);

  // AJOUT HELP WRAPPER
  var helpWrapper =
    "<div class='container-small-bm my-80'><div class='wrapper-help d-flex flex-column'><h1 class='grey text-center mb-15'>" +
    helpTitle +
    "</h1><p class='grey text-center'>" +
    helpContent +
    "</p><div class='block_button_see_all'><a class='btn btn-bm bg-red white my-20' href='https://events.msf-azg.be/pages/107'>" +
    helpBtn +
    "</a></div></div></div>";
  $("#events-index .section-events").after(helpWrapper);

  $("#events-widget .event-image").append($("#events-widget .chart-wrap"));

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
    var btnMenuToAppend =
      "<div class='btn-actions'><a class='bg-grey' href='https://events.msf-azg.be/projects'>" +
      btnSoutenir +
      "</a><a class='bg-red' href='https://events.msf-azg.be/events'>" +
      btnCreer +
      "</a></div>";
    $("#header-header > .row > .columns:last-child").after(btnMenuToAppend);

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
    var projectsIndexToAppend =
      "<p class='text-center'>" + projectIntro + "</p>";
    $("#projects-index .first-section h2").after(projectsIndexToAppend);
  }

  if ($("#events-index")) {
    var eventIndexToAppend = "<p class='text-center'>" + eventIntro + "</p>";
    $("#events-index .first-section h2").after(eventIndexToAppend);
  }

  $(function () {
    if ($("body").is("#events-show")) {
      var blockStats =
        "<div class='event-recap'><div class='event-recap_numbers'><div class='collecte border-right'><h5 class='text-center'></h5><p class='text-center uppercase'><small>" +
        legendCollectes +
        "</small></p></div><div class='recolte'><h5 class='text-center'></h5><p class='text-center uppercase'><small>" +
        legendRecoltes +
        "</small></p></div></div><div class='event-recap_progress'></div><div class='event-recap_share'></div></div>";
      $("section.event-head > .row > div:last-child").prepend(blockStats);

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
      var linkToGetInfo =
        "https://www.msf-azg.be/call_api.php?eventID=" + eventId;
      $.get(linkToGetInfo, function (response) {
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
        var titleToAdd = "<h2>" + eventTitle + "</h2>";
        $(".intro-my-event").before(titleToAdd);

        var eventProjectsNb = response.projects_count;
        $(".event-recap_numbers .collecte h5").html(eventProjectsNb);

        var eventAmountCollected =
          Number.parseInt(response.amount_collected, 10) / 100;

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
          var recolteToAppend =
            "<div class='days border-left'><h5 class='text-center'>" +
            remainingDays +
            "j</h5><p class='text-center uppercase'><small>" +
            remainingDaysLegend +
            "</small></p></div>";
          $(".event-recap .recolte").after(recolteToAppend);
        }

        console.log(response.expected_amount);
        if (response.expected_amount != null) {
          var eventAmountExpected =
            Number.parseInt(response.expected_amount, 10) / 100;
          var eventProgress = Math.round(
            (eventAmountCollected / eventAmountExpected) * 100
          );
          console.log("eventProgress", eventProgress);
          var eventProgressBar =
            "<div class='event-progressbar bg-lightgrey'><div class='event-progress-perc bg-red' style='width: " +
            eventProgress +
            "%'></div></div><div class='d-flex justify-between'><p class='uppercase'>" +
            eventProgress +
            "% " +
            legendRecoltes +
            "</p><p class='uppercase mediumgrey'>" +
            legendObjectif +
            ": " +
            new Intl.NumberFormat("fr-FR", {
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
              style: "currency",
              currency: "EUR",
            }).format(eventAmountExpected) +
            "</p></div>";
          $(".event-recap_progress").html(eventProgressBar);
        }

        if ($(".event-details .btn-donate")) {
          $("#widget-new-project").after($(".btn-donate"));
        }
      });
    }
  });

  $(function () {
    if ($("body").is("#indexs-index") || $("body").is("#events-index")) {
      const injectCard = function (eventCard, cardContainer) {
        $(cardContainer).append(eventCard);
      };

      const buildCard = function (event, eventContainer) {
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
        // var today = new Date();
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
        // var eventProgress = (eventAmountCollected / eventAmountExpected) * 100;

        switch (lang) {
          case "en":
            var eventUrl = event.url.en || url.en;
            var eventTitle = event.title.en || title.en;
            var eventDescription = event.description.en || description.en;
            break;
          case "nl":
            var eventUrl = event.url.nl || url.nl;
            var eventTitle = event.title.nl || title.nl;
            var eventDescription = event.description.nl || description.nl;
            break;
          default:
            var eventUrl = event.url.fr || url.fr;
            var eventTitle = event.title.fr || title.fr;
            var eventDescription = event.description.fr || description.fr;
            break;
        }

        const card =
          "<div class='card card-event " +
          classNoAmount +
          "'><img src='" +
          event.banner_image +
          "'><div class='card-event-btns'><a href='" +
          eventUrl +
          "' class='btn-bm bg-black white'>" +
          btnSee +
          "</a><a href='https://events.msf-azg.be/projects/new?event_id=" +
          event.id +
          "' class='btn-bm bg-red white'>" +
          btnCreerCard +
          "</a></div><div class='card-event-details'><h4><a href='" +
          eventUrl +
          "'>" +
          eventTitle +
          "</a></h4><p>" +
          eventDescription +
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
        injectCard(card, eventContainer);
      };

      const fetchData = function (event, eventContainer) {
        var UrlToGetInfo =
          "https://www.msf-azg.be/call_api.php?eventID=" + event;
        $.get(UrlToGetInfo, function (response) {
          buildCard(response, eventContainer);
        });
      };

      var collectesEvents = [8, 9, 10, 11, 4, 5];
      $("#collectes-scroll .scrolling-wrapper").html("");
      $.each(collectesEvents, function (key, value) {
        fetchData(value, $("#collectes-scroll .scrolling-wrapper"));
      });

      // var events = [85, 86];
      var events = [100];
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
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

      if (window.matchMedia("(min-width: 600px)").matches) {
        if (collectesEvents.length > 3) {
          setTimeout(function () {
            $("#collectes-scroll .scrolling-wrapper").slick(slickSettings);
          }, 2000);
        }

        if (events.length > 3) {
          setTimeout(function () {
            $("#events-scroll .scrolling-wrapper").slick(slickSettings);
          }, 2000);
        }

        if (urgencesEvents.length > 3) {
          setTimeout(function () {
            $("#urgences-scroll .scrolling-wrapper").slick(slickSettings);
          }, 2000);
        }
      }

      if (window.matchMedia("(max-width: 600px)").matches) {
        if (collectesEvents.length > 1) {
          setTimeout(function () {
            $("#collectes-scroll .scrolling-wrapper").slick(slickSettings);
          }, 1000);
        }

        if (events.length > 1) {
          setTimeout(function () {
            $("#events-scroll .scrolling-wrapper").slick(slickSettings);
          }, 1000);
        }

        if (urgencesEvents.length > 1) {
          setTimeout(function () {
            $("#urgences-scroll .scrolling-wrapper").slick(slickSettings);
          }, 1000);
        }
      }
    }
    if ($("body").is("#events-index")) {
      console.log("separé");
      $.each($("#events .panel .percent"), function (key, value) {
        const percent = value.innerHTML.split("<small>")[0];
        console.log(percent);
        var progressBarEvent =
          "<div class='event-progressbar bg-lightgrey'><div class='event-progress-perc bg-red' style='width: " +
          percent +
          "%'></div></div>";
        $(this)
          .closest(".panel .wrap")
          .find(".event-description")
          .append(progressBarEvent);
      });
    }
  });

  if ($("#events-show .event-head .custom-block")) {
    $(".event-head").after($(".custom-block"));
  }

  $("#project-search").submit(function () {
    event.preventDefault();
    var project_search = $(this).find("input")[0].value;
    sessionStorage.setItem("project_search", project_search);
    console.log(sessionStorage);
    window.location.href =
      "https://events.msf-azg.be/projects?search=" +
      project_search +
      "&search_lang=&search_status=&search_event_id=&search_scope=peer_to_peer";
  });

  $("#event-search").submit(function () {
    event.preventDefault();
    var event_search = $(this).find("input")[0].value;
    sessionStorage.setItem("event_search", event_search);
    console.log(sessionStorage);
    window.location.href =
      "https://events.msf-azg.be/events?search=" +
      event_search +
      "&search_place=&search_status=";
  });

  if ($(".slick-initialized")) {
    $(".slick-initialized").removeClass("slick-initialized");
  }
  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
  }
});

$(document).ready(function () {
  var events = $("ul#events");
  if (events.length) {
    var lang_choosed = $("html").attr("lang");
    if (lang_choosed == "nl") {
      var texte = {
        collectes: "inzamelacties",
        recolte: "ingezameld",
        objectif: "verwachte",
        to_split_objectif: "ingezameld",
      };
    } else if (lang_choosed == "fr") {
      var texte = {
        collectes: "collectes",
        recolte: "récoltés",
        objectif: "attendus",
        to_split_objectif: "Objectif",
      };
    } else {
      var texte = {
        collectes: "projects",
        recolte: "collected",
        objectif: "expected",
        to_split_objectif: "Goal",
      };
    }

    $("li.event-item").each(function () {
      //projet
      var teamcount = $(this).find(".teamcount").html();
      var testTeamCount = $.trim(teamcount);
      if (testTeamCount == "") {
        var projectLine = "";
      } else {
        teamcount = teamcount.split("</i>");
        teamcount = teamcount[1].split("\n");
        var nbr_projet = $.trim(teamcount[1]);
        var projectLine =
          "<div><h5 class='text-center'>" +
          nbr_projet +
          "</h5><p class='text-center'><small>" +
          texte["collectes"] +
          "</small></p></div><div class='line'></div>";
      }

      // récolte
      var amount = $(this).find(".infos-money .amount .big").html();
      // objectif
      var objectif = $(this).find(".infos-money .projets").html();
      objectif = objectif.split("€");
      var amount_objectif = $.trim(objectif[0]);
      if (amount_objectif == "") {
        var amount_objectif = "";
        $(this).addClass("no-amount");
      } else {
        if (lang_choosed == "nl") {
          amount_objectif = objectif[1].split(texte["to_split_objectif"]);
          amount_objectif = $.trim(amount_objectif[0]);
          amount_objectif =
            "<div class='line'></div><div class=''><h5 class='text-center'>" +
            amount_objectif +
            " €</h5><p class='text-center'><small>" +
            texte["objectif"] +
            "</small></p></div></div>";
        } else {
          amount_objectif = amount_objectif.split(texte["to_split_objectif"]);
          amount_objectif = $.trim(amount_objectif[1]);
          amount_objectif =
            "<div class='line'></div><div class=''><h5 class='text-center'>" +
            amount_objectif +
            " €</h5><p class='text-center'><small>" +
            texte["objectif"] +
            "</small></p></div></div>";
        }
      }

      //build the line
      var line = "<div class='event-numbers d-flex mt-20'>" + projectLine;
      line =
        line +
        "<div class=''><h5 class='text-center amount-collected-title'>" +
        amount;
      line =
        line +
        "</h5><p class='text-center'><small>" +
        texte["recolte"] +
        "</small></p></div>";
      line = line + amount_objectif;
      $(this).find(".infos-money").css("display", "none");
      $(this).find(".infos-money").after(line);
    });
  } else {
  }
});
