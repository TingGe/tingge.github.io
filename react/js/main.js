// When the document loads do everything inside here ...
$(function() {
  // When a link is clicked
  $("a.tab").click(function() {

    // change the value of the HREF attribute of the BASE element
    if(!!$(this).attr("data-src")){
      $("base").attr("href", $(this).attr("data-src"));      
    }

    // switch all tabs off
    $(".active").removeClass("active");

    // switch this tab on
    $(this).addClass("active");

    // slide all content up
    $(".content").slideUp();

    // slide this content up
    var content_show = $(this).attr("title");
    $("#" + content_show).slideDown();
  });
});
