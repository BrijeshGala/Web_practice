p1=document.getElementById('p1');
function funAdd(){
  var num1=document.getElementById("txtNum1").value;
  var num2=document.getElementById("txtNum2").value;
  var sum=parseInt(num1)+parseInt(num2);
  // console.log(sum);
  // document.write(sum);
  document.getElementById("txtResult").value=sum;
  // p1.innerHTML="<b>Sum=</b>"+sum;

}