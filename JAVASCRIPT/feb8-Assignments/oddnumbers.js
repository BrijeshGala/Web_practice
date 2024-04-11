var d1=document.getElementById("d1");
function funOdd(){
  var st=document.getElementById("txtStart").value;
  var end=document.getElementById("txtEnd").value;
  var str="";
  for(i=st;i<=end;i++){
    if(i%2!=0){
      str+="<br>"+i;
    }
  }
  d1.innerHTML=str;
  
}