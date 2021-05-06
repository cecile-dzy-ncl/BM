$(document).ready(function () {
  console.log("ready!");

  $("body").addClass("thsn");

  // AJOUT BANNER MAINTENANCE
  //var bannerMaintenance = ("<div class='maintenance p-5 bg-orange'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>");
  //$("#banner_section").before(bannerMaintenance);

  $(
    "<li class='nodropdown footer-link-menu'><a href='https://www.thehumansafetynet.org/fr/'>© THE HUMAN SAFETY NET</a></li>"
  ).prependTo("footer .top-bar-section ul.left ul.center");

  // AJOUT CLASS MAIN-EVENT & SUB-EVENT
  if ($("body#events-show.event_type_peer_to_peer")[0] != undefined) {
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

  // AJOUT wrapper outils sur main event
  if ($(".main-event")) {
    $(".wrapper-help").appendTo(".habillage");
  }

  // AJOUT DIV AVEC LE PARTAGE

  var pageUrl = window.location.href;
  var lang = $("html")[0].lang;
  var cta = "COPIER LE LIEN";
  switch (lang) {
    case "bg":
      var cta = "копирайте връзката";
      break;
    case "cs":
      var cta = "zkopírujte odkaz";
      break;
    case "de":
      var cta = "Kopieren Sie den Link";
      break;
    case "en":
      var cta = "COPY THE LINK";
      break;
    case "es":
      var cta = "COPIA EL ENLACE";
      break;
    case "fr":
      var cta = "COPIER LE LIEN";
      break;
    case "hk":
      var cta = "复制链接";
      break;
    case "hu":
      var cta = "másolja a linket";
      break;
    case "it":
      var cta = "copia il link";
      break;
    case "lat":
      var cta = "copia el enlace";
      break;
    case "sk":
      var cta = "skopírujte odkaz";
      break;
    case "sr":
      var cta = "kopirajte vezu";
      break;
    case "tr":
      var cta = "bağlantıyı kopyala";
      break;
    default:
      var cta = "COPY THE LINK";
      break;
  }
  var shareDiv = `<div class="d-flex mobile_flex-column justify-center align-items-center w-100 share-wrapper">\
  <input class="url-link" type="text" value="${pageUrl}"> \
  <div class='url-btn uppercase' id="copy">${cta}</div> \
  </div>`;

  if ($("html[lang='es'] #projects-index")) {
    var checkbox = $("#search_status option[value='ended']")[0];
    if (checkbox) {
      checkbox.label = "Cerrados";
    }
  }

  $(".social-btns").html(shareDiv);

  if ($(".share-wrapper")[0]) {
    function copy() {
      event.preventDefault();
      var copyText = document.querySelector(".url-link");
      console.log(copyText);
      copyText.select();
      document.execCommand("copy");

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
        $(".url-btn").html("LIEN COPIÉ");
        setTimeout(function () {
          $(".url-btn").html("COPIER LE LIEN");
        }, 700);
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
    }

    document.querySelector("#copy").addEventListener("click", copy);
  }

  // if ($(".main-event .image_banner")[0]) {
  //   var bannerImg = $(".image_banner")[0].src;
  //   $(".main-event-banner")[0].style.background = `url(${bannerImg})`;
  //   $("#banner_section").before($(".main-event-banner"));
  //   // $("#event-banner")[0].style.background = `url(${bannerImg})`;
  //   // $("#banner_section").before($("#event-banner"));
  // }

  // --------- RESPONSIVE ---------

  var windowWidth = $(window).width();

  if (windowWidth < 500) {
    $("body").addClass("mobile");
    $(".stats .d-flex").removeClass("align-items-start");
    $("#pages-show.conseils-outils .bg-red_pastel").removeClass("p-70");
    $("#pages-show.conseils-outils .bg-red_pastel").addClass("p-20");
  }
});
