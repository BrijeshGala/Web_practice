var ul2 = document.getElementById("list2");
ul2.addEventListener("click", funClick, false);
function funClick(event){
  var obj=event.target.id;
  switch(obj){
    case "li1":alert("hello");break;
    case "li2":ul2.style.backgroundColor = "blue";break;
    case "li3":ul2.style.color = "white";break;
    default:console.log("invalid click");
  }
}