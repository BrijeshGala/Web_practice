var express = require('express');
var router = express.Router();

let stud=require('./modules/student');

var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
router.get("/students",function(req,res){
    var arr=stud.getAllStudents();
    //case 1
    var jObj=JSON.stringify(arr);
    res.send(jObj);

    //case 2
    //res.json(arr);

    //case 3
    // let str="";
    // for(let i=0;i<arr.length;i++){
    //     str+="<br>Rollno="+arr[i].rollno+"<br>Name="+arr[i].name+"<br>Marks="+arr[i].marks;
    // }
    // res.send(str);
})
//request parameter
router.get("/student/:rno",function(req,res){
    var rollno=req.params.rno;
    var obj=stud.getStudent(rollno);
    res.json(obj);
})
//query string
router.get("/student",function(req,res){
    var rollno=req.query.rno;
    var obj=stud.getStudent(rollno);
    res.json(obj);
})

router.post("/newStudent",function(req,res){
    var rollno=req.body.rno;
    var str=req.body.name;
    res.send(rollno+str);
})
router.put("/upStudent/:rno",function(req,res){
    var rollno=req.params.rno;
    var mks=req.body.marks;

    var out=stud.upStudent(rollno,mks);
    if(out==true){
        res.send("record updated!!");
    }
    else{
        res.send("record not found!!");
    }

})
//cookiedemo
let cookieParser=require('cookie-parser');
router.use(cookieParser());
//routes for cookies
router.post("/newCookie",function(req,res){
    var name=req.body.cookieName;
    var val=req.body.cookieValue;
    res.cookie(name,val,{"maxAge":10*60*1000});
    //res.cookie("color","red",{"maxAge":10*60*1000});
    res.send("cookie created!!");
})
router.get("/getCookie/:name",function(req,res){
    var str=req.params.name;
    var out=req.cookies[str];
    res.send(out);
})
router.delete("/delCookie/:name",function(req,res){
    res.clearCookie(req.params.name);
    res.send("cookie removed!!");
})
module.exports=router;