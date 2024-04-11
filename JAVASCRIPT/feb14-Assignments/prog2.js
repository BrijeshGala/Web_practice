var i1=document.getElementById("i1");
var imgArr=["pic1.png", "pic2.png", "pic3.png"];
var index=0;
function funFirst(){
  ind=0;
  i1.src=imgArr[ind];
}
function funPrev(){
  if(ind==0) {
    console.log("this is first image");
    return;
  }
  else{
    ind--;
    i1.src=imgArr[ind];
  }
}
function funNext(){
  if(ind==imgArr.length-1) {
    console.log("this is last image");
    return;
  }
  else{
    ind++;
    i1.src=imgArr[ind];
  }
}
function funLast(){
  var n=imgArr.length-1;
  ind=n
  i1.src=imgArr[ind];
}