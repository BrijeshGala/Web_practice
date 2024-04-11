var tbl1=document.querySelector("table");
var d1=document.getElementById("d1");
//tbl1.addEventListener("click",funClick,false);
var trArr=document.querySelectorAll("tr");
for(i=1;i<trArr.length;i++){
  trArr[i].addEventListener("click",funClick,false);
}
function funClick(event){
  td=event.target;
  tr=td.parentNode;
  arr=tr.getElementsByTagName("td");
  d1.innerHTML+="<br>Rollno="+arr[0].textContent+"<br>Name="+arr[1].textContent+"<br>Marks="+arr[2].textContent;
}