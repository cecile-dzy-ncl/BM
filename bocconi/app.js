$(document).ready(function () {
  $("body").addClass("bocconi");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Our platform is currently being updated, we apologise for the inconvenience.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  // $("nav#main-nav .top-bar-section").prepend($(".front-logo"));
  // $("nav#main-nav .top-bar-section ul.center").after($(".top-bar.left"));
  // $("nav#main-nav > .top-bar-section").append($(".navbar-search"));

  // document.querySelector(".icon-search").addEventListener("click", (event) => {
  //   document.querySelector(".navbar-search").classList.add("open");
  // });

  if ($("#project_tabs")) {
    $("#project_tabs").after($("#crowdfundind-tabs"));
    $(".block-infos").prepend("<div class='project-details-custom'></div>");

    $(".project-details-custom").prepend($(".current-amount"));
    $(".project-details-custom").append($(".objectif-amount"));
    $(".project-details-custom").append($(".jours-restants"));
    $(".project-details-custom").append($(".contributeurs"));
    $(".project-details-custom").append($(".new-gift-button"));
  }
});
