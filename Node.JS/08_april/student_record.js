var http=require('http');
var stud=require("./myFile");

http.createServer(function(req,res){
  if(req.method=="GET" && req.url==="/students"){
    var arr=stud.getAllStudents();

    var result=JSON.stringify(arr);
    res.write(result);
    res.end();
  }
  else if(req.method=="POST" && req.url==="/newStudent"){
    res.write("post method");
    res.end();
  }
}).listen(3000,function(){
  console.log("server is listening on port no 3000");
})