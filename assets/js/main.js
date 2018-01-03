// jQuery Stuff
$(document).ready(function(){

  // Project Preview Hover Interaction
  $(".project-list__item").mouseover(function() {
    if ($(this).data("project-name") === "hudl-ios") {
      $(".project-preview--hudl-ios").css("opacity", 1);
    } 
    else if ($(this).data("project-name") === "hudl-designsystem") {
     $(".project-preview--hudl-designsystem").css("opacity", 1);
    }  
    else if ($(this).data("project-name") === "hudl-ia-nav") {
     $(".project-preview--hudl-ia-nav").css("opacity", 1);
    } 
    else if ($(this).data("project-name") === "remotejobs") {
     $(".project-preview--remotejobs").css("opacity", 1);
    }   
  });
  $(".project-list__item").mouseout(function(){
    if ($(this).data("project-name") === "hudl-ios") {
      $(".project-preview--hudl-ios").css("opacity", 0);
    }
    else if ($(this).data("project-name") === "hudl-designsystem") {
      $(".project-preview--hudl-designsystem").css("opacity", 0);
    }
    else if ($(this).data("project-name") === "hudl-ia-nav") {
      $(".project-preview--hudl-ia-nav").css("opacity", 0);
    }
    else if ($(this).data("project-name") === "remotejobs") {
      $(".project-preview--remotejobs").css("opacity", 0);
    }  
  });
 

});