// var express=require('express');
// var app=express();

// //routes
// app.get("/students",function(req,res){
//   res.send("get method");
// })

// app.post("/newStudent",function(req,res){
//   res.send("post method");
// })

// app.listen(3000,function(){
//   console.log("server is listening at port 3000");
// })

var express=require('express');
var app=express();

app.use(express.static("public"));
//routes
app.use("/images",express.static(__dirname+"/images"));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})

app.get("/students",function(req,res){
  res.send("get method");
})

//request parameter
app.get("/student/:rno",function(req,res){
  var rollno=req.params.rno;
  res.send("rollno is="+rollno);
})

//query string
app.get("/student",function(req,res){
  var rollno=req.query.rno;
  res.send("rollno is="+rollno);
})

app.post("/newStudent",function(req,res){
  res.send("post method");
})

app.listen(3000,function(){
  console.log("server is listening at port 3000");
})

//routes:whatever url we give ang what functionality is getting executed.