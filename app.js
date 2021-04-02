$(document).ready(function () {
  if (location.pathname != "/") {
    // var page = location.pathname.split('/')[2]; // à remettre une fois qu'on passe sur iraiser
    var page = location.pathname.split(".")[0].split("/"); //à retirer une fois qu'on passe sur iraiser
    page = page[page.length - 1]; //à retirer une fois qu'on passe sur iraiser
    console.log(page);
    $("body").addClass(page);
  } else {
    $("body").addClass("homepage");
  }

  if (location.pathname != "/") {
    $('a[href^="' + location.pathname + '"]').addClass("active");
  } else {
    $('a[href="/"]').addClass("active");
  }

  // $("footer ul.right img").attr("src", "https://agir.vivaforlife.be/cdn.iraiser.eu/6idKBeqjdjVcRtnL6A9qeBCllCI4cS9vXnl62IzT33g2GL6oGHWGvWlLOZdR4Xs7/Cecile_DEZY/origin/poweredbyiraiser2x.png")
  $("footer ul.right img").attr(
    "src",
    "/cdn.iraiser.eu/6idKBeqjdjVcRtnL6A9qeBCllCI4cS9vXnl62IzT33g2GL6oGHWGvWlLOZdR4Xs7/Cecile_DEZY/origin/poweredbyiraiser2x.png"
  );

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    $(".phone").removeClass("position-absolute");
    $(".mobile .h-360").removeClass("h-360");
    $(".mobile .steps .mt-50").removeClass(".mt-50");
    $(".mobile .projet-head .user").removeClass(".right");
    $(".mobile .projet-head .team_by").removeClass(".left");
    // $(".mobile img.mln-30").removeClass("mln-30");
    $(".mobile .bx-viewport").css("height", "auto");
  }
});
