$(document).ready(function(){
    //button
    var hh=$(window).height();
    $("button").click(function(){
        var height=$("body").height();
        $("html, body").animate({"scrollTop":hh}, 400);
    });
    //icon
    $(".social").hover(
        function () {
        $(this).addClass("shake");
      },
      function () {
        $(this).removeClass("shake");
      }
    );

    $("header, .icons").css("height", hh);

});
