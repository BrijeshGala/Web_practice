var d1=document.getElementById("d1");
function funClick(){
  var str= document.getElementById("txtName").value;
  d1.innerHTML+="Hello"+str;
  //document.bgColor=str;
  d1.style.backgroundColor=str;
}
function funChange(){
  var colorName=document.getElementById("selcolor").value;
  console.log(colorName);
  d1.style.backgroundColor=colorName;
}