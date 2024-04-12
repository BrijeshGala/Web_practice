var express = require('express');
var app = express();
var bodyParser = require("body-parser");

var stud = require("./modules/Stud_record");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/students", function(req, res) {
    var arr = stud.getAllStudents();
    res.json(arr);
});

app.get("/student/:rno", function(req, res) {
    var rollno = req.params.rno;
    var obj = stud.getStudent(rollno);
    res.json(obj);
});

app.get("/student", function(req, res) {
    var rollno = req.query.rno;
    var obj = stud.getStudent(rollno);
    res.json(obj);
});

app.post("/newStudent", function(req, res) {
    var rollno = req.body.rno;
    var str = req.body.name;
    res.send(rollno + str);
});

app.put("/upStudent/:rno", function(req, res) {
    var rollno = req.params.rno;
    var mks = req.body.marks;
    var out = stud.upStudent(rollno, mks);
    if (out == true) {
        res.send("record updated!!");
    } else {
        res.send("record not found!!");
    }
});

app.delete("/deleteStudent/:rno", function(req, res) {
    var rollno = req.params.rno;
    var deleted = stud.delStudent(rollno); // Use delStudent instead of deleteStudent
    if (deleted) {
        res.send("Record deleted successfully");
    } else {
        res.send("Record not found");
    }
});

app.listen(3000, function() {
    console.log("server is listening at port 3000");
});
