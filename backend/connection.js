const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/foodFactory", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on("error", function() {
  console.log("Error connecting to database");
});
db.once("open", function() {
  console.log("Connected to MongoDB");
});
mongoose.set("useCreateIndex", true);
