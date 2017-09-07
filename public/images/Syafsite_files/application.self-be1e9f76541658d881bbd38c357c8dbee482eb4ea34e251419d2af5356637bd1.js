// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//







 // Bind the event.



$(document).ready(function(){

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




  $('.back').on('click touch', function(){
    $(this).removeClass('back');
    window.location.replace( /^#/, '' );
  })


  $(".navhistory:not(back)").on('click touch', function () {
    window.location.replace("#history");

  });

  $(".navcontact:not(back)").on('click touch', function () {
    window.location.replace("#contact");
  });

  $(".navprojects:not(back)").on('click touch', function () {
    window.location.replace("#projects");
  });

  $(window).on('hashchange', function(){
    hashchanged();
  }).trigger('hashchange');

 });
