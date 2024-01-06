const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  // useCreateIndex: true, // no longer supported in the MongoDB Node.js driver version 4.0 and above
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useFindAndModify: false, // no longer supported in the MongoDB Node.js driver version 4.0 and above
});

const connection = mongoose.connection;

connection.once("open", () => console.log("MongoDB Connection Success! 👍"));

const studentRouter = require("./routes/students");

app.use("/student", studentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port number: ${PORT}`);
});
