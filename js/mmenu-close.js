$(document).ready(function() {
    $("#menu").mmenu({
       // Options
    });
    var API = $("#menu").data( "mmenu" );

    $(".option").click(function() {
       API.close();
    });
 });