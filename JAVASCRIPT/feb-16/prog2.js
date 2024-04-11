//Attaching listeners through script
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
//DOM level 2
btn1.addEventListener("click",funAdd,false);
btn2.addEventListener("click",funRemove,false);
function funAdd(){
  alert("Handler attached!!");
}
function funRemove(){
//DOM level 2
btn1.removeEventListener("click",funAdd,false);
  alert("Handler removed!!");
}

  
