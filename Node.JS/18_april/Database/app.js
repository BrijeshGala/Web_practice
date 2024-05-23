var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./routes/routes");

var app = express();

// Connect to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/your_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/userApp", routes);

var cors=require('cors');
app.use(cors());


app.listen(3000, function () {
  console.log("server is listening at port 3000");
});
