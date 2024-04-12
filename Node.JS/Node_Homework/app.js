var express = require("express");
var app = express();
var stud = require("./modules/myFile");

// GET request to fetch all student details in HTML format
app.get("/students/html", function (req, res) {
   var arr=stud.getallstudents();
   var jobj=JSON.stringify(arr);
   res.send(jobj);
});

// GET request to fetch individual student details in HTML format
app.get("/students/:rollno", function (req, res) {
    var rollno = req.params.rollno;
    var obj = stud.getstudent(rollno);
    res.json(obj);
    });

    
//  qurystring
app.get("./student",function (req,res){
    var rollno = req.params.rollno;
    var obj = stud.getstudent(rollno);
    res.json(obj);
})
 

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});