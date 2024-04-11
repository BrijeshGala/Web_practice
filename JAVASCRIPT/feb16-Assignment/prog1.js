var arr = document.getElementsByTagName("div");
for(i=0;i<arr.length;i++){
  arr[i].addEventListener("mouseover", funDiv, false);
  arr[i].addEventListener("mouseout", funDiv, false);

}
function funDiv(event){
  if(event.type=="mouseover"){
    document.bgColor=event.currentTarget.style.backgroundColor;
  } 
  else if(event.type=="mouseout"){
    document.bgColor="transparent";
  }
}