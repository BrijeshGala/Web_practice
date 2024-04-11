//Attaching listeners through script
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
//DOM level 0
btn1.onclick=funAdd;
btn2.onclick=funRemove;


function funAdd(){
    alert("Handler attached!!");
}
function funRemove(){
    //DOM level 0
    btn1.onclick=null;
}
    