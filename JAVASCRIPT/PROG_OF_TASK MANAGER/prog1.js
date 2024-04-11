var taskArr=new Array(); //initializes an empty array named taskArr to store tasks.
function Task(sub, name, st, dt){
  this.taskSub=sub; //Assigns the value of the sub parameter to the taskSub property of the newly created task object.
  this.taskName=name;
  this.taskStatus=st;
  this.taskDt=dt;
}
var d1=document.getElementById("taskForm");

function funAdd(){
  d1.style.visibility="visible";
}
function funInsert(){
  var txtSub=document.getElementById("listSub").value;
  var txtName=document.getElementById("txtName").value;
  var arr=document.getElementsByName("status");
  var st="";
  for(i=0;i<arr.length;i++){ //Starts a for loop that iterates over each element of the arr array. The loop runs from i=0 to i<arr.length, incrementing i by 1 each time.
    if(arr[i].checked){ //Checks if the checked property of the current element in the array arr at index i is true.
      st=arr[i].value; //If the current checkbox is checked (arr[i].checked is true), it assigns the value of the checked checkbox to the variable st. This suggests that st will contain the value of the last checked checkbox in the array arr.
    }
  }
  var today=new Date().toLocaleDateString();
  console.log(txtSub,txtName,st,today);
  var obj=new Task(txtSub,txtName,st,today);
  taskArr.push(obj); // .push Appends new elements to the end of an array, and returns the new length of the array.

  document.getElementById("txtName").value="";
  for(i=0;i<arr.length;i++){
    arr[i].checked=false;
  }
  document.getElementById("listSub").value="";
  d1.style.visibility="hidden";
}

function funShow(){
  var s1="";
  var sub=document.getElementById("listSub").value;
  var str="<tr><td>Subject</td><td>Name</td><td>Status</td><td>Date</td><td>Action</td></tr>";
  for(i=0;i<taskArr.length;i++){
    if(taskArr[i].taskStatus=="Pending"){
      s1="background-color:red";
    }
    else if(taskArr[i].taskStatus=="Complete"){
      s1="background-color:yellowGreen";
    }
    if(sub==taskArr[i].taskSub){
      str+="<tr style="+s1+"><td>"+taskArr[i].taskSub+"</td><td>"+taskArr[i].taskName+"</td><td>"+taskArr[i].taskStatus+"</td><td>"+taskArr[i].taskDt+"</td><td><a href='' onclick=funEditDelete(event)>Edit</a>/<a href='' onclick=funEditDelete(event)>Delete</a></td></tr>";
    }
  }
  document.getElementById("tbl").innerHTML=str;
}
function funEditDelete(event){
  event.preventDefault();
 // console.log(event.currentTarget.textContent);

  var a=event.currentTarget;
  var td=a.parentNode;
  var tr=td.parentNode;
  var tdArr=tr.getElementsByTagName("td");

  var clickedName=tdArr[1].textContent;
  if(event.currentTarget.textContent=="Edit"){
 for(i=0;i<taskArr.length;i++){
    if(taskArr[i].taskName==clickedName){
      taskArr[i].taskStatus="Complete";
    }
 }
}
else if(event.currentTarget.textContent=="Delete"){
  for(i=0;i<taskArr.length;i++){
    if(taskArr[i].taskName==clickedName){
      taskArr.splice(i,1);
    }
 }
}
 funShow();

}
function funDelete(event){
  event.preventDefault();
  console.log("delete");
}




