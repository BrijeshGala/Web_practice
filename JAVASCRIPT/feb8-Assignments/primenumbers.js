function funPrime(){
  var st=document.getElementById("txtStart").value;
  var end=document.getElementById("txtEnd").value;
  var str="";
  for(i=st;i<=end;i++){
    for(j=2;j<=i;j++){
      if(i%j==0){
        if(i==j){
          str+="<br>"+i;
        }
        else{
          break;
        }
        d1.innerHTML=str;
      }
    }
  }
}
  
