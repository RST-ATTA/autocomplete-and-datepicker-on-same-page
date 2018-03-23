$(document).ready(function(){
$( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    
  } );
   $( function() {
    $( "#datepicker" ).datepicker();
  } );
});
