var num1 = document.getElementById("num1");
//case 1
// if(num1.checkValidity()){
//   alert("valid");
// }
// else{
//   alert("invalid");
// }

//case 2
if(num1.validity.rangeUnderflow){
  alert("value is less than 10");
}
else if(num1.validity.rangeOverflow){
  alert("value is greater than 50");
}
else{
  alert("valid");
}