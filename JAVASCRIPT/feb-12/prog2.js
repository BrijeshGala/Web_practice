var d1=document.getElementById("d1");
var list1=document.getElementById("list");
//arrays
var colors=["red", "green", "blue", "yellow", "black"];
document.write("<br>length="+colors.length);
document.write("<br>toString="+colors.toString());
document.write("<br>join="+colors.join("-"));
document.write("<br>reverse="+colors.reverse());
document.write("<br>sort="+colors.sort());






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


//Stack Lifo
var y=colors.push("newColor");
console.log("y="+y);//nre length
document.write("<br>push="+colors);
var y=colors.pop();
console.log("y="+y);//deleted element
document.write("<br>push="+)