//Array initialization.
var booksArr=[{category:"History",bookName:"Khosla",bookPrice:100},
{category:"History",bookName:"Pawankhind",bookPrice:300},
{category:"History",bookName:"Mrityunjay",bookPrice:500},
{category:"Comic",bookName:"Chintoo",bookPrice:100},
{category:"Comic",bookName:"Chandoba",bookPrice:150},
{category:"Fiction",bookName:"HarryPotter",bookPrice:500},];

var op="<option></option>";
for(i=0;i<booksArr.length;i++){
  op+="<option>"+booksArr[i].category+"</option>";
}
document.getElementById("sel1").innerHTML=op;

//Below code defines a function funChange() that is triggered when the value of the select element (sel1) changes. It dynamically generates checkboxes based on the selected book category and displays them in the d1 element.
var d1=document.getElementById("d1");
function funChange(){
  var txtCategory=document.getElementById("sel1").value;
  console.log(txtCategory);
  var checkStr="";
  for(i=0;i<booksArr.length;i++){
    if(booksArr[i].category==txtCategory)[
      checkStr+="<input type=checkbox onchange=funCheck(event) value="+booksArr[i].bookPrice+">"+booksArr[i].bookName+"*"+booksArr[i].bookPrice+"<br>"
    ]
  }
  d1.innerHTML=checkStr;
}


//Below code defines a function funCheck() that is triggered when the state of a checkbox changes. It calculates the total price based on the selected checkboxes and updates the total variable accordingly.
var total=0;
function funCheck(event){
  if(event.currentTarget.checked){
    total=total+parseInt(event.currentTarget.value);
    console.log("Total="+total);
  }
  else if(!
    +event.currentTarget.checked){
    total=total-parseInt(event.currentTarget.value);
    console.log("Total="+total);
  }

}

//When to use JavaScript Arrays and Objects?
/*Arrays are used when we want element names to be numeric.
Objects are used when we want element names to be strings.*/
