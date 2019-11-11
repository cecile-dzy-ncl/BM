$( document ).ready(function() {
  if (location.pathname != '/') {
      var page = location.pathname.split('/')[2];
      console.log(page);
      $('body').addClass(page);
    } else {
   $('body').addClass('homepage');
  }
});
