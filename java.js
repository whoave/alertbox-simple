$(function(){
   $("#alerter").click(function(){
    $("#modale").addClass("active");
   });
    $("#closed").click(function () {
        $("#modale").removeClass("active");
    });
});