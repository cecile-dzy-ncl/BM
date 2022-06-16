$(document).ready(function () {
  console.log("ready!");

  $("body").addClass("one-o-one");

  // ENLEVER LES DÉCIMALES ET AJOUTER LE SIGLE €
  $("#tag-amount").html($("#tag-amount").text().split(",")[0] + " €");

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://fundraise.one-o-one.eu/'>© ONE |O| ONE</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");
  $("a[href='https://one-o-one.eu/']").attr("target", "_blank");

  // $("html[lang='en'] img.image_banner").attr("src", "https://fundraise.one-o-one.eu/cdn.iraiser.eu/rl8pwcx7hCuvZ/l/h3S8jA9Z2sEml1JMSK1qpjRZk9KUV2PgEtFqjlkQ46bAQD7f/Cecile_Dezy/origin/101banneren2x.jpg");

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
    // $(".steps img").removeClass("ml-60");
    // $(".steps").removeClass("pt-150").removeClass("pb-100");
    // $(".a-propos .steps").removeClass("w-50");
    // $(".a-propos .w-80").removeClass("w-80");
    // $(".mobile.conseils .w-66").removeClass("w-66");
    // $(".card").removeClass("ml-130").removeClass("mr-130");
    // $(".mobile .h-360").removeClass("h-360");
    // $(".mobile .steps .mt-50").removeClass(".mt-50");
    // $(".mobile .projet-head .user").removeClass(".right");
    // $(".mobile .projet-head .team_by").removeClass(".left");
    // // $(".mobile img.mln-30").removeClass("mln-30");
    // $(".mobile .bx-viewport").css('height', "auto");
  }
});
