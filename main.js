$(document).ready(function(){

//quando clicco sull'icona appare il menà
  $( ".fa-bars" ).click(function() {

    $( ".hamburger-menu" ).addClass( "active" );
  });


//quando clicco sull'icona X il menù scompare
  $( ".fa-times" ).click(function() {

    $( ".hamburger-menu" ).removeClass( "active" );
  });
});
