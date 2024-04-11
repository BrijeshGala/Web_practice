function funReverseDigits(){
  var num=parseInt(document.getElementById("txtStart").value);
  var rem=0;
  var temp=0;
  while(num>0){
    rem=num%10;
    temp=temp*10+rem;
    num=parseInt(num/10);
  }
  console.log("Reverse of digits="+temp);
}