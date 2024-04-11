function funAdd(){
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let sum=parseInt(num1)+parseInt(num2);
  document.getElementById("result").value=sum;

}

function funSub(){
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let sub=parseInt(num1)-parseInt(num2);
  document.getElementById("result").value=sub;

}

function funMul(){
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let mul=parseInt(num1)*parseInt(num2);
  document.getElementById("result").value=mul;

}

function funDiv(){
  let num1=document.getElementById("num1").value;
  let num2=document.getElementById("num2").value;
  let div=parseInt(num1)/parseInt(num2);
  document.getElementById("result").value=div;

}

