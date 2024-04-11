function dragstartHandler(event){
  event.dataTransfer.setData("text/plain",event.target.textContent);
  event.dataTransfer.setData("text/data-mks",event.target.dataset.mks);
  console.log(event.target.dataset.mks);
  
}
function dragoverHandler(event){
  event.preventDefault();
}
function dropHandler(event){
  if(event.currentTarget.id=="ulName"){
  var x=event.dataTransfer.getData("text/plain");
 var li=document.createElement("li");
 var txt=document.createTextNode(x);
 li.appendChild(txt);

 event.currentTarget.appendChild(li);

 }
 else if(event.currentTarget.id=="ulMks"){
 var mks=event.dataTransfer.getData("text/data-mks");
 var liMks=document.createElement("li");
 var txtMks=document.createTextNode(mks);
 liMks.appendChild(txtMks);
 event.currentTarget.appendChild(liMks);
 }
}