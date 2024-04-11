var d1=document.getElementById("d1");
var list1=document.getElementById("list");
//arrays
var colors=["red", "green", "blue", "yellow"];
console.log(typeof(colors));
console.log(colors instanceof Array);
colors[4] = "white";
//document.write(colors);
var str="";
for(i=0;i<colors.length;i++){
  str+="<li>"+colors[i]+"---"+i+"</li>";
}
d1.innerHTML="<ul>"+str+"</ul>";
list1.innerHTML=str;