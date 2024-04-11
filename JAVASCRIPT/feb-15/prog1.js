var today=new Date();
document.write("<br>TOday="+today);
var month=parseInt(today.getMonth())+1;
  document.write("<br>Formatted:"+today.getDate()+"/"+month+"/"+today.getFullYear());
  document.write("<br>day="+today.getDay());//sunday is 0
  document.write("<br>Timestamp:"+today.getTime());
  document.write("<br>------------------------------------");
  document.write("<br>max()="+Math.max(2,3));
  document.write("<br>abs()="+Math.abs(2));
  document.write("<br>abs()="+Math.abs(-2));
  document.write("<br>round()="+Math.round(3.56));
  document.write("<br>floor()="+Math.floor(3.56));
  document.write("<br>ceil()="+Math.ceil(3.56));
  document.write("<br>random="+Math.round(Math.random().toFixed(2))*4);