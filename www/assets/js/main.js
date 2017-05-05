// jQuery Stuff
$(document).ready(function(){

  // Project Preview Hover Interaction
  $(".project-list__item").mouseover(function() {
      if ($(this).data("project-name") === "hudlios") {
        $(".project-preview--hudlios").css("opacity", 100);
        console.log("mouseenter");
      }    
  });
  $(".project-list__item").mouseout(function(){
    if ($(this).data("project-name") === "hudlios") {
        $(".project-preview--hudlios").css("opacity", 0);
        console.log("mouseout");
      }  
  });


});