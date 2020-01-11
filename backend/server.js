const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
var users = require("./models/users");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

/*app.use("*", (req, res, next) => {
  console.log("MIDDLEWARE IS CALLED ");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,Access-Control-Allow-Headers,Access-Control-Allow-Headers,Authorization,X-Request-With"
  );
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});
*/
app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
// const uri ="mongodb+srv://foodfactory:9784530761@foodfactory-8w1e0.mongodb.net/test?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/food";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
connection.on("error", err => {
  console.log("Error occurred");
});
app.post("/registerForm", (req, res) => {
  let user = req.body;
  users.find({ tel: req.body.tel }).then(docs => {
    if (docs.length !== 0) {
      res.send("found");
    } else {
      users.create(user);
      res.send("Submitted");
    }
  });
});
app.post("/loginForm", (req, res) => {
  users
    .find({
      tel: req.body.tel,
      password: req.body.password
    })
    .then(docs => {
      if (docs.length !== 0) {
        res.send("found");
      } else {
        res.send("notfound");
      }
    });
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
