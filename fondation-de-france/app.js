$(document).ready(function () {
  console.log("ready!");

  $("body").addClass("fondation-de-france");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $("#tag-amount").html($("#tag-amount").text().split(",")[0] + " €");

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.fondationdefrance.org/fr'>© Alliance Tous unis contre le Virus</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");
  $("a[href='https://one-o-one.eu/']").attr("target", "_blank");

  $("html[lang='en'] img.image_banner").attr(
    "src",
    "/cdn.iraiser.eu/rl8pwcx7hCuvZ/l/h3S8jA9Z2sEml1JMSK1qpjRZk9KUV2PgEtFqjlkQ46bAQD7f/Cecile_Dezy/origin/101banneren2x.jpg"
  );

  // AJOUT BANNER MAINTENANCE
  //var bannerMaintenance = ("<div class='maintenance p-5 bg-blue'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  //$("#banner_section").before(bannerMaintenance);

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    $(".pl-370").removeClass("pl-370");
    $(".banner-text h1.white").removeClass("white").addClass("black");
    $(".banner-text p.white").removeClass("white").addClass("black");
  }
});
