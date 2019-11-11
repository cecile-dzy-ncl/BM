$( document ).ready(function() {
  if (location.pathname != '/') {
      var page = location.pathname.split('/')[2];
      $('body').addClass(page);
    } else {
   $('body').addClass('homepage');
  }
});
