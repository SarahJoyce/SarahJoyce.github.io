let changeTab = function(){
      $(".closed-tab").onClick(function(){
        $(this).addClass("open-tab").removeClass("closed-tab");
        $(".open-tab").addClass("closed-tab").removeClass("open-tab");
      });
}

$(".open-tab").on("click", changeTab);
