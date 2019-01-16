$(document).ready(function(){
  $(".cats .btn").click(function(){
    $(".cats ul").prepend("<li>Meow!</li>");
  });

  $(".dogs .btn").click(function(){
    $(".dogs ul").prepend("<li>Bark!</li>");
  });
});
