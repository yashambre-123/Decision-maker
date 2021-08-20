var variable1=Math.random();
variable1=variable1*6;
variable1=Math.floor(variable1)+1;
var p1_image="dice"+variable1+".png";
document.querySelector("#d1").setAttribute("src",p1_image);

var variable2=Math.random();
variable2=variable2*6;
variable2=Math.floor(variable2)+1;
var p2_image="dice"+variable2+".png";
document.querySelector("#d2").setAttribute("src",p2_image);

if (variable1>variable2) {
  document.querySelector(".Refresh").innerHTML="Player 1 wins 💥";
}
else if (variable1<variable2) {
  document.querySelector(".Refresh").innerHTML="Player 2 wins 💥";
}
else {
  document.querySelector(".Refresh").innerHTML="Match Tied!";
}
