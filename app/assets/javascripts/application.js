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
//= require rails-ujs
//= require turbolinks
//= require_tree .




 // Bind the event.



$(document).ready(function(){

  function routes(url) {

    switch (url) {
      case "history":
        viewHistoryPage();
        break;
      default:
        viewHomepage();
    }

  }

  function hashchanged(){
    var hash = location.hash.replace( /^#/, '' );
    routes(hash);
  }


  function viewHistoryPage() {
    $('#sc-history').toggle('slide', {direction:'left'}, 700);
    $('.navcontact').toggle('slide', {direction:'down'}, 700);
    $('.navprojects').toggle('slide', {direction:'right'}, 700);
  }

  $(".navhistory").on('click touch', function () {
    window.location.replace("#history");
  });

  $(".navcontact").on('click touch', function () {
      $('#sc-contact').toggle('slide', {direction:'down'}, 700);
      $('.navhistory').toggle('slide', {direction:'left'}, 700);
      $('.navprojects').toggle('slide', {direction:'right'}, 700);
  });

  $(".navprojects").on('click touch', function () {
      $('#sc-projects').toggle('slide', {direction:'right'}, 700);
      $('.navcontact').toggle('slide', {direction:'down'}, 700);
      $('.navhistory').toggle('slide', {direction:'left'}, 700);
  });

  $(window).on('hashchange', function(){
    hashchanged();
  }).trigger('hashchange');

 });
