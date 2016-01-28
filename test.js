var easingsList = [
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElastic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
  var n = 0;
  var delay = parseInt($("#delay").val());
  var color = $("#endColor").val();
  var ease = easingsList[n];
  for(n=0; n < 30; n++){
    moveBoxRight(n, ease, color, delay);
    ease = easingsList[n];
  }
}

var moveLeft = function(){
  var n = 0;
  var delay = parseInt($("#delay").val());
  var color = $("#endColor").val();
  var ease = easingsList[n];
  for(n=0; n < 30; n++){
    moveBoxLeft(n, ease, color, delay);
    ease = easingsList[n];
  }
}

var moveBoxRight= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left":pageWidth-boxWidth + "px"}, duration, easing);
  colorChange(n, endcolor)
}

var moveBoxLeft= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left": "0px"}, duration, easing);
  colorChange(n, endcolor)
}


var colorChange= function(n, endcolor){
  var id = "#button" + n.toString();
  $(id).css({"backgroundColor": endcolor});
}

/*var moveBoxLeft= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
    $(id).animate({"margin-left" : "0px", "background-color": endcolor}, duration, easing); 
}

var moveBoxRight= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
    $(id).animate({"margin-left" : pageWidth - boxWidth + "px", "background-color" : endColor}, duration, easing); 
}*/
//include jquery ui for background-color