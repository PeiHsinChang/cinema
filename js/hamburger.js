$(document).ready(function(){
  let $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $("#panel").slideToggle("slow");
    // Do something else, like open/close menu
  });
  
}
)
