$( document ).ready(function() {
  if (location.pathname != '/') {
      // var page = location.pathname.split('/')[2]; // à remettre une fois qu'on passe sur iraiser
      var page = location.pathname.split('.')[0].split("/"); //à retirer une fois qu'on passe sur iraiser
      page = page[page.length-1]; //à retirer une fois qu'on passe sur iraiser
      console.log(page);
      $('body').addClass(page);
    } else {
   $('body').addClass('homepage');
  }
});
