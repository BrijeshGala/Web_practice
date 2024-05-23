const express = require("express");
const path = require("path");
var router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const multer = require("multer");

// app.use(express.static('public'));
// //Serves all the request which includes /images in the url from Images folder
// app.use('/images', express.static(__dirname + '/images'));


//database connection
const mongoose = require("mongoose");
const stud = require("../modules/student.js");

//using mongoose
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url ='mongodb://localhost:27017/nodeDemo' ;
db.stud = stud;
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

  const student=db.stud;

  //Set up multer to handle file uploads
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images/'); 
    },
    filename: (req, file, cb) => {
      const fileName = `${file.originalname}`;
      cb(null, fileName);
    }
  });

  const upload = multer({ storage: storage });

// Serve HTML form for file upload
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle file upload
router.post('/upload', upload.single('image'), async (req, res) => {
  // Access the uploaded file through req.file
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // File has been uploaded. You can access file details via req.file
 // const filePath = req.file.path;

  // Do something with the file path (e.g., save to a database,
  //process it further)
  // For now, just send a response with the file information
  //fName=req.body.txtName+"."+path.extname;
  let url="http://localhost:3000/images/"+req.file.originalname;
  //insert into database
  var obj={"rollno":parseInt(req.body.txtRollno),
           "name":req.body.txtName,
            "marks":req.body.txtMarks,
            "url":url
          }
  const user = new student(obj);
 
  try {
    await student.insertMany(user);
   
    res.send({
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
      path: req.file.filePath,
    });
  }
  catch(err){

  }
 
});
router.get("/getStudent",async(req,res)=>{
  var rno=req.query.rollno;
  try{
      s1=await student.find({"rollno":rno});

      //var out="<br>Rollno="+s1[0].rollno+"<br>Name="+s1[0].name+"<br>Marks="+s1[0].marks+"<br>Photo:<img src="+s1[0].url+">";
    res.json(s1);
     //res.send(out);
  }
  catch(err){
    console.log(err);
  }
});

module.exports=router;