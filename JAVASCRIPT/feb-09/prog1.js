function funSumDigits(){
  var num=parseInt(document.getElementById("txtStart").value);
  var rem=0;
  var sum=0;
  while(num>0){
    rem=num%10;
    sum+=rem;
    num=parseInt(num/10);
    console.log("sum="+sum+"num="+num);
  }
  console.log("Sum of digits="+sum);
}