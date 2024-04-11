var str="apple";
var count=0;
var arr=[];
for(i=0;i<str.length;i++){
  count=1;
  for(j=i+1;j<str.length;j++){
    if(str[i]==str[j]){
      count++;
      arr[j]=-1;
    }
  }
  if(arr[i]!=-1){
    arr[i]=count;
  }
}
for(k=0;k<str.length;k++){
  if(arr[k]!=-1){
  document.write("<br>"+str[k]+"="+arr[k]);
}
}