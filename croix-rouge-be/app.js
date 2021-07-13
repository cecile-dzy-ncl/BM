$(document).ready(function () {
  $("body").addClass("hole-heroes");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  // $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://media.ifrc.org/ifrc/' target='_blank'>© Belgian Red Cross</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance =
  //   "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
  // $("#banner_section").before(bannerMaintenance);

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

  if ($("body").is(".event_7.main-event")) {
    $("#event_card_list").html("");
    $("#players_card_list").html("");
    fetchMainEvent();
  }

  // --------- RESPONSIVE ---------

  // var windowWidth = $(window).width();

  // if (windowWidth < 500) {
  // }
});

var lang = $("html").attr("lang");

switch (lang) {
  case "en":
    var btnSeeMore = "See more";
    var players = "registered players";
    var amount = "euros raised";
    var raised = "raised";
    break;
  case "nl":
    var btnSeeMore = "Bekijk meer";
    var players = "ingeschreven spelers";
    var amount = "euros verzameld";
    var raised = "verzameld";
    break;
  default:
    var btnSeeMore = "Voir plus";
    var players = "joueurs inscrits";
    var amount = "euros collectés";
    var raised = "collectés";
    break;
}

// var eventCardList = $("#event_card_list");
var playersCardList = $("#players_card_list");

const injectCard = (container, card) => {
  container.append(card);
};

const buildPlayerCard = async (index, player, eventsList) => {
  const playerAmountCollected = player.current_amount / 100;
  // prettier-ignore
  const clubName = player.event_id === 7 ? "Holes for Heroes" : eventsList.find((x) => x.id === player.event_id).title[lang];
  console.log("player", player);
  const playerCard = `
  <div class="playerCard ${
    index === 0 ? "winner top3" : index < 3 ? "top3" : ""
  }">
  <div class="player_RankImg">
    <span><span>#</span>${index + 1}</span>
    <img src="${
      player.users_of_team[0].avatar
        ? player.users_of_team[0].avatar
        : "https://help.redcross.be/cdn.iraiser.eu/ch/vdrzIM224J80PqBVfikjruyXvm+tWBQ7A0+NbdBKBS+g3U4N+XSKsN8JAO/Ig/Marie-Dominique_Remion/avatar/CRBHolesforHeroes-pictogolfeur.png"
    }" alt="player profile picture"/>
  </div>
  <div class="player_infos">
  <h3>${player.creator}</h3>
  <p class="player_club">${clubName}</p>
  ${
    index > 2
      ? `
      </div><div><p class='player_amount'>${playerAmountCollected}€ ${raised}</p>
      <a class="btn-bm ${index > 0 ? "btn-bm-border" : ""}" href="${
          player.url.fr
        }">${btnSeeMore}
      </a>
      </div>`
      : `
      <p class='player_amount'>${playerAmountCollected}€ ${raised}</p></div>
      <a class="btn-bm ${index > 0 ? "btn-bm-border" : ""}" href="${
          player.url.fr
        }">${btnSeeMore}
      </a>
      </div>`
  }
  </div>
  `;
  injectCard(playersCardList, playerCard);
};

const fetchBestPlayers = (eventsList) => {
  var url = `https://help.redcross.be/api/events/7/projects?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870&order=amount&limit=10`;
  $.get(url, function (response) {
    $.each(response.projects, (key, value) => {
      buildPlayerCard(key, value, eventsList);
    });
  });
};

const buildEventCard = (event, index) => {
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
  <p>${event.manifold_count} ${players}</p>
  <p>${eventAmountCollected} ${amount}</p>
  </div>
  <a class="btn-bm btn-bm-border" href="${event.url[lang]}">${btnSeeMore}
  </a>
  </div>
  `;

  injectCard($("#event_card_list"), eventCard);
};

const buildEvents = (events) => {
  events
    .sort((a, b) =>
      a.amount_collected > b.amount_collected
        ? 1
        : a.amount_collected === b.amount_collected
        ? a.id > b.id
          ? 1
          : -1
        : -1
    )
    .forEach((event, index) => {
      buildEventCard(event, index);
    });
};

const fetchSubEvents = (ids) => {
  // prettier-ignore
  const urls = ids.map(id => `https://help.redcross.be/api/events/${id}?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870`)

  const promises = urls.map((url) => fetch(url).then((res) => res.json()));
  Promise.all(promises).then((results) => {
    buildEvents(results);
    fetchBestPlayers(results);
    $("#club_nb").html(results.length);
  });
};

const getClubsNb = (subevents) => {
  var clubNb = subevents.length;
  console.log("clubNb", clubNb);
  document.querySelectorAll(".club_nb").forEach((nb) => {
    nb.innerText = clubNb;
  });
};

const fetchMainEvent = () => {
  var url = `https://help.redcross.be/api/events/7?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870`;
  $.get(url, function (response) {
    fetchSubEvents(response.subevents.slice(0, 10));
    getClubsNb(response.subevents);
  });
};
