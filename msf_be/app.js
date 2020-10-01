console.log("hey hey");

// AJOUT BANNER MAINTENANCE
var bannerMaintenance =
  "<div class='maintenance p-5 bg-black'><p class='m-0 white text-center'>Notre plateforme est en cours d’actualisation, nous nous excusons pour le dérangement.</p></div>";
$("#banner_section").before(bannerMaintenance);

// ajouter une searchbar
var searchbar = `<form accept-charset="UTF-8" action="/search" class="navbar-search d-none" method="post"><div style="display:none"><input name="utf8" type="hidden" value="✓"><input name="authenticity_token" type="hidden" value="8EQYiIZaLS0yGUki1U3V4RGhjtMpTbAG88SIAz5i76c="></div>
  <div class="row">
    <div class="search-query">
      <input class="icon-search field-auto-search" name="search" type="text" data-old-search-value="" value="" placeholder="Rechercher">
    </div>
  </div>
</form>`;

console.log(searchbar);
$("#indexs-index intro").after(searchbar);
