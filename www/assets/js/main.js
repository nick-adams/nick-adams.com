$(document).ready(function(){

  // Study Preview Hover Interaction
  $(".studies-list__item").mouseover(function() {
    if ($(this).data("study-name") === "hudl-ios") {
      $(".study-preview--hudl-ios").css("opacity", 1);
    } 
    else if ($(this).data("study-name") === "hudl-designsystem") {
     $(".study-preview--hudl-designsystem").css("opacity", 1);
    }  
    else if ($(this).data("study-name") === "hudl-ia-nav") {
     $(".study-preview--hudl-ia-nav").css("opacity", 1);
    } 
    else if ($(this).data("study-name") === "remotejobs") {
     $(".study-preview--remotejobs").css("opacity", 1);
    }   
  });
  $(".studies-list__item").mouseout(function(){
    if ($(this).data("study-name") === "hudl-ios") {
      $(".study-preview--hudl-ios").css("opacity", 0);
    }
    else if ($(this).data("study-name") === "hudl-designsystem") {
      $(".study-preview--hudl-designsystem").css("opacity", 0);
    }
    else if ($(this).data("study-name") === "hudl-ia-nav") {
      $(".study-preview--hudl-ia-nav").css("opacity", 0);
    }
    else if ($(this).data("study-name") === "remotejobs") {
      $(".study-preview--remotejobs").css("opacity", 0);
    }  
  }); 

 // Fancybox Customizations
  $("[data-fancybox]").fancybox({
    loop: true,
    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: [
        "zoom",
        //"share",
        //"slideShow",
        //"fullScreen",
        //"download",
        // "thumbs",
        "close"
    ]
  });


});