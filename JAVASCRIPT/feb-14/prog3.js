var img1=document.getElementById("i1");
var imgArr=["pic1.png", "pic2.png", "pic3.png"];
var j=0;

function funImg(){
  img1.src=imgArr[j];
  j++;
  if(j==imgArr.length){
   j=0;
  }
} 