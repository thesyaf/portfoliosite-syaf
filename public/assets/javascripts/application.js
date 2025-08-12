$(document).ready(function(){

  // change the views based on url parameter
  function routes(url) {
    switch (url) {
      case "history":
        viewHistoryPage();
        break;
      case "contact":
        viewContactPage();
        break;
      case "projects":
        viewProjectsPage();
        break;
      default:
        viewHomepage();
    }
  }

  function hashchanged(){
    var hash = location.hash.replace( /^#/, '' );
    routes(hash);
  }

  function viewHomepage() {
    // Hide all sections and show main content
    $('.containery, .containerz').hide();
    $('.containerx').show();
    $('.navhistory, .navcontact, .navprojects').removeClass('back');
  }

  function viewHistoryPage() {
    $('#sc-history').toggle('slide', {direction:'left'}, 700);
    $('.navcontact').toggle('slide', {direction:'down'}, 700);
    $('.navprojects').toggle('slide', {direction:'right'}, 700);
    $('.navhistory').addClass('back');
  }

  function viewContactPage() {
    $('#sc-contact').toggle('slide', {direction:'down'}, 700);
    $('.navhistory').toggle('slide', {direction:'left'}, 700);
    $('.navprojects').toggle('slide', {direction:'right'}, 700);
    $('.navcontact').addClass('back');
  }

  function viewProjectsPage() {
    $('#sc-projects').toggle('slide', {direction:'right'}, 700);
    $('.navcontact').toggle('slide', {direction:'down'}, 700);
    $('.navhistory').toggle('slide', {direction:'left'}, 700);
    $('.navprojects').addClass('back');
  }

  // Profile image toggle functionality
  $('.g').on('click touch', function () {
    $('.b').toggle();
    $('.s').toggle();
  });

  $('.h').on('click touch', function () {
    $('.j').toggle();
    $('.s').toggle();
  });

  // Back navigation functionality
  $('.back').on('click touch', function(){
    $(this).removeClass('back');
    window.location.replace( /^#/, '' );
  });

  // Navigation click handlers
  $(".navhistory:not(.back)").on('click touch', function () {
    window.location.replace("#history");
  });

  $(".navcontact:not(.back)").on('click touch', function () {
    window.location.replace("#contact");
  });

  $(".navprojects:not(.back)").on('click touch', function () {
    window.location.replace("#projects");
  });

  // Listen for url changes and fire the hash change function
  $(window).on('hashchange', function(){
    hashchanged();
  }).trigger('hashchange');

  // Initialize the page
  viewHomepage();
});