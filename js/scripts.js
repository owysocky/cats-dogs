$(document).ready(function(){
  $(".cats .btn").click(function(){
    $(".cats ul").prepend("<li>Meow!</li>");
    $(".cats ul").children("li").first().click(function(){
      $(this).after("<img src='img/cats.jpg'>");
    });
  });

  $(".dogs .btn").click(function(){
    $(".dogs ul").prepend("<li>Bark!</li>");
    $(".dogs ul").children("li").first().click(function(){
      $(this).after("<img src='img/dogs.jpg'>");
    });
  });

});
