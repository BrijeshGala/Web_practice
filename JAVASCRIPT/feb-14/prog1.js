var arr=[1, 2, 10, 3, 30, 100];
function fun(){
  document.write("<br>Original:"+arr);
  arr.sort(function(a,b){
    return a-b;
  });

document.write("<br> sorted="+arr);
}