var d1=document.getElementById("d1");
alert(d1.nodeType);
function funClick(){
  var d1=document.getElementById("d1");
  var p2=d1.firstElementChild;
  var p4=d1.firstElementChild;
  p4.parentNode.removeChild(p4);
}