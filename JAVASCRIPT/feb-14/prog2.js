var colors=["red", "green", "yellow", "blue"];
var i=0;
var btn=document.getElementById("btn1");
function fun(){
  document.bgColor = colors[i];
  i++;
  if(i==colors.length){
    btn1.disabled=true;
    //i=0;
  }
} 