var express = require('express');
var router = express.Router();
var user = require('../modules/user'); 
var bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

//db connectivity using mongoose

//mongoose.Promise = global.Promise;
const mongoose=require('mongoose');
const db = {};
db.mongoose = mongoose;
db.url ='mongodb://localhost:27017/nodeDemo' ;
db.user = user;
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

  const User=db.user;
router.get("/home",function(req,res){
    res.send("its home page!!");
});
router.post("/newUser", async function (req,res){
    var data=req.body;
    var obj=new User(data);

    var out=await User.insertMany(obj);
    res.send(out);
})
router.get("/allUsers",async function (req,res){
    var out=await User.find();
    var obj={msg:"Data found",data:out};
    res.json(obj);
})
//request parameter
router.get("/user/:id",async function(req,res){
    let uid=req.params.id;
    var out=await User.findOne({"uId":uid});
    if(out){
        var obj={msg:"Data found",data:out};
    }
    else{
        var obj={msg:"No records"};
    }
    res.json(obj);
})
//query string
router.get("/user",async function(req,res){
    let id=req.query.id;
    var out=await User.findOne({"uId":id});
    res.json(out);
})
router.put("/upUser/:id",async function(req,res){
    let id=req.params.id;
    var city=req.body.uCity;
    var name=req.body.uName; 

    var out = await User.findOneAndUpdate({"uId":id},{"uCity":city,"uName":name})
    res.json(out);
})
router.delete("/delUser/:id",async function(req,res){
    let id=req.params.id;
    var out = await User.deleteOne({"uId":id});
    res.json(out);
})

//Pagination//limit//skip
router.get("/users/:limit/:skip",async function(req,res){
    var lm=req.params.limit;
    var sk=req.params.skip;
    var out=await User.find().limit(lm).skip(sk);
    res.json(out);
})

//sorting
router.get("/users/:name",async function(req,res){
    var str=req.params.name;
    if(str=='name'){
        var out=await User.find().sort({uName:1});
    }
    else if(str=="namen1"){
        var out=await User.find().sort({uName:-1});
    }
    res.json(out);
})

module.exports = router;
