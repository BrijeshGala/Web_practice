function dragstartHandler(event){
  event.dataTransfer.setData("text/plain", event.currentTarget.id)
}

function dragoverHandler(event){
  event.preventDefault();
}

function dropHandler(event){
  var x = event.dataTransfer.getData("text/plain");
  var obj = document.getElementById(x);
  event.currentTarget.appendChild(obj);
}