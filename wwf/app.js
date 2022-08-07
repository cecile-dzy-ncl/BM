$(document).ready(function () {
  $("body").addClass("wwf");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $("#tag-amount").html($("#tag-amount").text().split(",")[0]);
  // $('#tag-amount').html($('#tag-amount').text().split(",")[0] + " €")

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.wwf.fr/'>© 2021 WWF</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  if (window.matchMedia("(min-width: 600px)").matches) {
    $("#main-nav section.top-bar-section li:last-of-type").addClass("btn-bm");
    $(".header-spacer .top-bar.left").append(
      $("#main-nav section.top-bar-section li:last-of-type")
    );
  }

  if ($("body").is("#events-index")) {
    var eventsList = $("#events .event-item");
    console.log(eventsList);
    eventsList.each(function () {
      const eventId = $(this).find(".page-create")[0].href.split("=")[1];
      console.log($(this).find(".page-see"));
      console.log($(this).find(".page-see")[0]);
      $(this)
        .find(".page-see")
        .attr(
          "href",
          `https://soutenir.wwf.fr/projects?search=&search_status=&search_event_id=${eventId}&search_scope=peer_to_peer`
        );
    });
  }

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance =
  // ("<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  // $("#banner_section").before(bannerMaintenance);

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    $(".pl-370").removeClass("pl-370");
    $(".banner-text h2").removeClass("white").addClass("black");
    $(".banner-text p").removeClass("white");
    $(".campagne > div").removeClass("w-50");
    $(".compteur .border-right")
      .removeClass("border-right")
      .removeClass("border-white");
    $(".conseils-et-outils .bg-black .container-small-bm > .d-flex").remove();
    $(".a-propos .wrapper .w-20").addClass("mb-15").removeClass("w-20");
    $(".a-propos .wrapper .w-30").addClass("mb-15").removeClass("w-30");
    $("#events-show .event-stat").removeClass("border-right");
    $("#indexs-index .compteur .border-right").removeClass("border-right");
  }
});
