var fs=require('fs');

//write op
fs.writeFile("test.txt","Hello World!!",function(err){
  if(err){
    console.log(err);
  }
  else{
    console.log("write op done!!");
  }
})
//read op
fs.readFile("test.txt",function(err,data){
  if(err){
    console.log("error occurred!!");
  }
  else{
    console.log(data.toString());
  }
})