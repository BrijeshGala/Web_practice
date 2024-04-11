p1=document.getElementById("p1");
function funEvenOdd(){
  var num=parseInt(document.getElementById("txtNum1").value);
  if(num%2==0){
    p1.innerHTML="even number";
  }
  else{
    p1.innerHTML="odd number";
  }
}