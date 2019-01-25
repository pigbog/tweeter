$(".new-tweet textarea").on("input", function(){
  $(this).parent().children(".counter").text(140 - $(this).val().length);
  if ($(this).val().length > 140){
    $(this).parent().children(".counter").addClass("red");}

  if ($(this).val().length < 140){
    $(this).parent().children(".counter").removeClass("red")
    $(".error-message").slideUp();;
  }
});

