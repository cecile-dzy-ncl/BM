// AJOUT NAV BUTTONS

function updateNavbar() {
  var navButtons = $(".header-spacer nav[role='navigation']").html();
  // console.log(navButtons);
  $("#header-header").before(
    `<section id='first-header'><div class='row'></div></section>`
  );

  $("#first-header > div").html(navButtons);

  $("#header-header > .row > .columns:last-child").after(
    `<div class="btn-actions">
            <a class="bg-grey" href="https://events.msf-azg.be/projects"><strong class="white">Soutenir
            </strong>une collecte</a>
            <a class="bg-red" href=""><strong class="white">Créer
            </strong>une collecte</a>
            </div>`
  );

  $("#header-header > .row > .columns").removeClass(
    "small-12 medium-12 large-4 large-8 columns"
  );

  $(".header-spacer > div").removeClass(
    "small-12 medium-push-6 medium-pull-6 medium-6 large-reset-order large-6 columns"
  );
}

export default updateNavbar;
