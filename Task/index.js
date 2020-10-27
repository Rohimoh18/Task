const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoose = require("mongoose");
const databse = "taskData";

mongoose.connect(
  "mongodb://localhost:27017/" + databse,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (db) => {
    console.log("Connected to DB");
  }
);

// add more controller for new like taskController

const taskController=require("./Controller/taskController")

// use controlle for new route

app.use("/Task",taskController)

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(1600, () => {
  console.log("Listening on 1600");
});
