$(document).ready(function () {
  $("body").addClass("hole-heroes");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://media.ifrc.org/ifrc/' target='_blank'>© Belgian Red Cross</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // AJOUT CLASS MAIN-EVENT & SUB-EVENT
  if ($("body").is("#events-show.event_type_peer_to_peer")) {
    if ($("#events-show")[0].classList.value.match(/event_\d/g).length === 2) {
      console.log("sub-event");
      $("#events-show")[0].classList.add("sub-event");
    } else if (
      $("#events-show")[0].classList.value.match(/event_\d/g).length === 1
    ) {
      console.log("main-event");
      $("#events-show")[0].classList.add("main-event");
    }
  }

  var lang = $("html").attr("lang");

  switch (lang) {
    case "en":
      var btnSeeMore = "See more";
      break;
    case "nl":
      var btnSeeMore = "See more";
      break;
    default:
      var btnSeeMore = "Voir plus";
      break;
  }

  var eventCardList = $("#event_card_list");
  var playersCardList = $("#players_card_list");
  // let holesEventsList = [];
  let eventsList = [];
  let eventsSortedList = [];
  // console.log("holesEventsList", holesEventsList);
  console.log("eventsList", eventsList);
  console.log("eventsSortedList", eventsSortedList);

  const injectCard = (container, card) => {
    container.append(card);
  };

  const buildPlayerCard = (index, player) => {
    var playerAmountCollected = player.current_amount / 100;
    const playerCard = `
    <div class="playerCard ${
      index === 0 ? "winner top3" : index < 3 ? "top3" : ""
    }">
    <span>#${index + 1}</span>
    <img src="${
      player.avatar
        ? player.avatar
        : "https://help.redcross.be/cdn.iraiser.eu/ch/vdrzIM224J80PqBVfikjruyXvm+tWBQ7A0+NbdBKBS+g3U4N+XSKsN8JAO/Ig/Marie-Dominique_Remion/avatar/CRBHolesforHeroes-pictogolfeur.png"
    }" alt="club profile picture"/>
    <div>
    <h3>${player.creator}</h3>
    <!-- <p>${player.manifold_count}</p> nom du club -->
    <p>${playerAmountCollected} euros collectés</p>
    </div>
    <a class="btn-bm ${index > 1 ? "btn-bm-border" : ""}" href="${
      player.url[lang]
    }">${btnSeeMore}
    </a>
    
    </div>
    `;
    injectCard(playersCardList, playerCard);
  };

  const fetchBestPlayers = () => {
    var url = `https://help.redcross.be/api/events/7/projects?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870&order=amount&limit=10`;
    $.get(url, function (response) {
      $.each(response.projects, (key, value) => {
        buildPlayerCard(key, value);
      });
    });
  };

  const buildEventCard = (index, event) => {
    var eventAmountCollected = parseInt(event.amount_collected, 10) / 100;
    const eventCard = `
    <div class="eventCard ${
      index === 0 ? "winner top3" : index < 3 ? "top3" : ""
    }">
    <span>#${index + 1}</span>
    <img src="${
      event.avatar
        ? event.avatar
        : "https://help.redcross.be/cdn.iraiser.eu/ch/vdrzIM224J80PqBVfikjruyXvm+tWBQ7A0+NbdBKBS+g3U4N+XSKsN8JAO/Ig/Marie-Dominique_Remion/avatar/CRBHolesforHeroes-pictogolfeur.png"
    }" alt="club profile picture"/>
    <div>
    <h3>${event.title[lang]}</h3>
    <p>${event.manifold_count} joueurs inscrits</p>
    <p>${eventAmountCollected} euros collectés</p>
    </div>
    <a class="btn-bm btn-bm-border" href="${event.url[lang]}">${btnSeeMore}
    </a>
    </div>
    `;
    injectCard(eventCardList, eventCard);
  };

  const fetchSubEvent = (event) => {
    var url = `https://help.redcross.be/api/events/${event}?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870`;
    $.get(url, function (response) {
      eventsList.push(response);
      eventsSortedList = eventsList.sort((a, b) =>
        a.amount_collected > b.amount_collected
          ? 1
          : a.amount_collected === b.amount_collected
          ? a.id > b.id
            ? 1
            : -1
          : -1
      );
      console.log("eventsSortedList after sort", eventsSortedList);
      $.each(eventsSortedList, function (key, value) {
        buildEventCard(key, value);
      });
    });
  };

  const fetchMainEvent = () => {
    var url = `https://help.redcross.be/api/events/7?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870`;
    $.get(url, function (response) {
      $.each(response.subevents, (key, value) => {
        fetchSubEvent(value);
      });
    });
  };

  if ($("body").is(".event_7.main-event")) {
    $("#event_card_list").html("");
    console.log("eventsList before fetchMainEvent", eventsList);
    fetchMainEvent();
    console.log("eventsSortedList after fetchMainEvent", eventsSortedList);
    eventsSortedList.splice(0, eventsSortedList.length);
    console.log("eventsList spliced up", eventsSortedList);
    $("#players_card_list").html("");
    fetchBestPlayers();
  }

  // --------- RESPONSIVE ---------

  // var windowWidth = $(window).width();

  // if (windowWidth < 500) {
  //   $("body").addClass("mobile");
  //   $(".pl-370").removeClass("pl-370");
  //   $(".banner-text h2").removeClass("white").addClass("black");
  //   $(".banner-text p").removeClass("white");
  //   $(".campagne > div").removeClass("w-50");
  //   $(".compteur .border-right")
  //     .removeClass("border-right")
  //     .removeClass("border-white");
  //   $(".conseils-et-outils .bg-black .container-small-bm > .d-flex").remove();
  //   $(".a-propos .wrapper .w-20").addClass("mb-15").removeClass("w-20");
  //   $(".a-propos .wrapper .w-30").addClass("mb-15").removeClass("w-30");
  //   $("#events-show .event-stat").removeClass("border-right");
  //   $("#indexs-index .compteur .border-right").removeClass("border-right");
  // }
});
