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

  const holesEvents = [9, 10, 11];
  const holesEventsList = [];
  const holesPodiumEventsList = [];

  const buildEventCard = (event) => {
    var eventAmountCollected = parseInt(event.amount_collected, 10) / 100;
  };

  const fetchData = (event) => {
    var url = `https://help.redcross.be/api/events/${event}?api_id=d1e5432ae7ad6e34WDIDLZYKXTKQUKAD&api_secret=a35d14f0b5371808e6c19236cf7ec870`;
    $.get(url, function (response) {
      console.log(response);
      console.log(response.amount_collected);
      holesEventsList.push(response);
      console.log("holesEventsList 1", holesEventsList);
      holesEventsList.sort((a, b) =>
        a.parseInt(a.amount_collected, 10) > b.parseInt(b.amount_collected, 10)
          ? 1
          : a.parseInt(a.amount_collected, 10) ===
            b.parseInt(b.amount_collected, 10)
          ? a.id > b.id
            ? 1
            : -1
          : -1
      );
      console.log("holesEventsList sorted", holesEventsList);
    });
  };
  if ($("body").is(".event_7.main-event")) {
    $.each(holesEvents, function (key, value) {
      fetchData(value);
    });
  }

  // const cardClub =
  //   "<div class='card card-club'><img src='" +
  //   event.banner_image +
  //   "'><div class='card-event-btns'><a href='" +
  //   eventUrl +
  //   "' class='btn-bm'>" +
  //   btnSeeMore +
  //   "</a><a href='https://events.msf-azg.be/projects/new?event_id=" +
  //   event.id +
  //   "' class='btn-bm bg-red white'>" +
  //   btnCreerCard +
  //   "</a></div><div class='card-event-details'><h4><a href='" +
  //   eventUrl +
  //   "'>" +
  //   eventTitle +
  //   "</a></h4><p>" +
  //   eventDescription +
  //   "</p><div>" +
  //   progressBar +
  //   "<div class='event-numbers d-flex mt-20'><div class=''><h5 class='text-center'>" +
  //   event.projects_count +
  //   "</h5><p class='text-center'><small>" +
  //   legendCollectes +
  //   "</small></p></div><div class='line'></div><div class=''><h5 class='text-center amount-collected-title'>" +
  //   eventAmountCollectedFormatted +
  //   "</h5><p class='text-center'><small>" +
  //   legendRecoltes +
  //   "</small></p></div>" +
  //   amountExpectedBlock +
  //   remainingDays +
  //   "</div></div>";

  // $("#events .event-item:first-of-type").before(challengeInf);

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
