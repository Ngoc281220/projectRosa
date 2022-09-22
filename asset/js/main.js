jQuery (function($){
    $(".menu-btn .fa-bars").click(function(){
         $(this).toggleClass("fa-xmark");
         $(".header-menu").slideToggle();
         $(".btn-search").slideToggle();
      });
    $(".btn-search .fa-search").click(function(){
        $(".single-search").slideToggle();
    });
    $(".search-delete").click(function(){
        $(".single-search").slideToggle();
    });
    click_slide();
   
    
});

function click_slide(){
   $("#btn-next").click(function(){
      var active = $(".img-active");
      var next = active.next();
      if(next.length == 1){  
        $(".img-active").removeClass("img-active");
        next.addClass("img-active");
      }
      else {
        $(".item-img:first-child").addClass('img-active');
        $(".item-img:last-child").removeClass("img-active");
      }
   })
   $("#btn-prev").click(function(){
    var prev_active = $(".img-active");
    var prev = prev_active.prev();
    if(prev.length == 1){
        $(".img-active").removeClass("img-active");
        prev.addClass("img-active");  
    }
    else{
        $(".item-img:first-child").removeClass('img-active');
        $(".item-img:last-child").addClass("img-active");
        console.log("ngoc: ",prev.length);
    }
    
})
 
}
