p1=document.getElementById("p1");
function funEvenOdd(){
  var num=parseInt(document.getElementById("txtNum1").value);
  if(num%2==0){
    p1.innerHTML="even number";
  }
  else{
    p1.innerHTML="odd number";
  }
  }

  function funPerClass(){
    var per=parseInt(document.getElementById("txtNum1").value);
    if(per>=75){
      p1.innerHTML="distinction";
    }
    else if(per<75 && per>=58){
      p1.innerHTML="first class";
    }
    else if(per<58 && per>=50){
      p1.innerHTML="Second class";
    }
    else if(per<50 && per>=40){
      p1.innerHTML="pass class";
    }
    else {
      p1.innerHTML="fail";
    }

  }