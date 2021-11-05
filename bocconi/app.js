$(document).ready(function () {
  $("body").addClass("bocconi");

  // AJOUT BANNER MAINTENANCE
  var bannerMaintenance =
    "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Our platform is currently being updated, we apologise for the inconvenience.</p></div>";
  $("#banner_section").before(bannerMaintenance);

  if (window.matchMedia("(min-width: 600px)").matches) {
    console.log("moins de 600");
    $("nav#main-nav").append($(".admin_button"));
    $("nav#main-nav .top-bar-section").prepend($(".front-logo"));
    $("nav#main-nav .top-bar-section ul.center").after($(".top-bar.left"));
    $("nav#main-nav > .top-bar-section").append($(".navbar-search"));

    if (document.querySelector(".navbar-search")) {
      const navbar = document.querySelector(".navbar-search");

      navbar.addEventListener("click", (event) => {
        if (navbar.classList.contains("open")) {
          navbar.classList.remove("open");
        } else {
          navbar.classList.add("open");
        }
      });
    }
  }

  if ($("#project_tabs")) {
    $("#project_tabs").after($("#crowdfundind-tabs"));
    $("#project_tabs").prepend("<div class='project-details-custom'></div>");
    $(".project-details-custom").prepend("<div class='custom-first'></div>");
    $(".custom-first").prepend($(".project_content img:first-of-type"));
    $(".custom-first").append(
      $("#projects-show section#project_tabs .row aside")
    );
    $("#crowdfundind-tabs").prepend(
      "<div class='project-custom-description'><h2></h2><div class='project-text'></div></div>"
    );
    $(".project-custom-description h2").html($("#tab-nav dd:first-of-type a"));
    // $(".project-details-custom").prepend($(".current-amount"));
    // $(".project-details-custom").append($(".objectif-amount"));
    // $(".project-details-custom").append($(".jours-restants"));
    // $(".project-details-custom").append($(".contributeurs"));
    // $(".project-details-custom").append($(".new-gift-button"));
  }
});
