$(document).ready(function () {
  $("body").addClass("bocconi");

  // AJOUT BANNER MAINTENANCE
  // var bannerMaintenance =
  //   "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Our platform is currently being updated, we apologise for the inconvenience.</p></div>";
  // $("#banner_section").before(bannerMaintenance);

  if (window.matchMedia("(min-width: 600px)").matches) {
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
    $("#show_title").wrap($("<div id='block-title' class='block-edit'></div>"));
    $("#block-title").append($("#form_title"));
    $("#block-title").append($("#edit_title"));
    $("#block-title").append($(".projet-head .group_edit_project"));

    $("#project_tabs").after($("#crowdfundind-tabs"));
    $("#project_tabs").prepend("<div class='project-details-custom'></div>");
    $(".project-details-custom").prepend("<div class='custom-first'></div>");
    console.log(!$(".project_content img:first-of-type"));

    if ($(".project_content img:first-of-type")) {
      $(".custom-first").prepend($(".project_content img:first-of-type"));
    }

    $(".custom-first").append(
      $("#projects-show section#project_tabs .row aside")
    );
    $("#crowdfundind-tabs").prepend(
      "<div class='project-custom-description'><h2></h2><div class='project-text'></div></div>"
    );
    $(".project-custom-description h2").html($("#tab-nav dd:first-of-type a"));
    // $(".project-custom-description").append($("#form_description"));
    // $(".project-custom-description h2").append($("#edit_description"));
    $(".project-text").html($(".project_inner"));
    $(".tabs-content").before($("#tab-nav"));
    $("#tab-nav dd:nth-of-type(2) a").click();
    $(".crowdfunding-detail-data").prepend(
      $(
        "<div class='data-custom'><div class='data-details-custom'></div></div>"
      )
    );
    $(".data-details-custom").prepend($(".current-amount"));
    $(".data-details-custom").append(
      $("<div id='block-desired-amount' class='block-edit'></div>")
    );
    $("#block-desired-amount").append($(".objectif-amount"));
    $("#block-desired-amount").append($("#form_desired_amount"));
    $("#block-desired-amount").append($("#edit_desired_amount"));
    $("#block-desired-amount").append($(".infos-money .group_edit_project"));

    $(".data-details-custom").append(
      $("<div id='block-days' class='block-edit'></div>")
    );
    $("#block-days").append($(".jours-restants"));
    $("#block-days").append($("#form_days"));
    $("#block-days").append($("#edit_days"));
    $("#block-days").append($(".jours-restants .group_edit_project"));
    $(".data-details-custom").append($(".contributeurs"));
    $(".data-details-custom").append($(".block-infos .new-gift-button"));
    // $(".data-details-custom").append($(".ask_edit_project"));
    $(".data-custom").append($(".chart-wrap"));
    $(".chart").data("color", "");
  }
});
