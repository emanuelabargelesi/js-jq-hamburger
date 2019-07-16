$(document).ready(function(){

//quando clicco sull'icona appare il menà
  $( ".fa-bars" ).click(function() {

    $( ".hamburger-menu" ).show();
    $( ".header-right > ul" ).show();
  });


//quando clicco sull'icona X il menù scompare
  $( ".fa-times" ).click(function() {

    $( ".hamburger-menu" ).hide();
    $( ".header-right > ul" ).hide();
  });
});
