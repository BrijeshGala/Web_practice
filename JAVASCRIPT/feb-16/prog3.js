var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", funHandler, false);
btn1.addEventListener("mouseover", funHandler, false);
btn1.addEventListener("mouseout", funHandler, false);
function funHandler(event){
  if(event.type=="mouseover"){
    btn1.style.backgroundColor = "blue";
  }
  else if(event.type=="mouseout"){
    btn1.style.backgroundColor = "yellow";
  }
  else if(event.type=="click"){
   console.log("its clicked!!");
  }
  
}