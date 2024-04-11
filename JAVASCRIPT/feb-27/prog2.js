var colors=["red", "green", "yellow", "blue"];
var i=0;
function funColor(){
  document.bgColor=colors[i];
  i++;
  if(i==colors.length){
    i=0;
  }
}
function funStart(){
  sI=setInterval("funColor()",1000);
}
function funStop(){
  clearInterval(sI);
}


