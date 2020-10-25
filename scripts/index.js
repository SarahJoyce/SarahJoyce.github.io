$(document).ready(function(){

  $('.change-tab').click(function(){
    $(this).toggleClass('open-tab closed-tab');
  });

$('.closed-tab').click(function(){
    console.log("clicked");
    $('.open-tab').addClass('closed-tab').removeClass('open-tab');
    $(this).addClass('open-tab').removeClass('closed-tab');
});

});
