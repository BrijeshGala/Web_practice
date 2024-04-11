function funClick(){
  var d1=document.getElementById("d1");
  //d1.innerHTML+="<p>This is new p</p>";
  var newDiv=document.createElement("div");
  var txt=document.createTextNode("This is new txt");
  newDiv.appendChild(txt);
  newDiv.setAttribute("class","A");
  d1.appendChild(newDiv);
  //Case 2
  var newBtn=document.createElement("input");
  newBtn.setAttribute("type","button");
  newBtn.setAttribute("value","DynBtn");

  document.body.appendChild(newBtn);
  console.log(d1.getAttribute("d1"));
  d1.removeAttribute("style");
}