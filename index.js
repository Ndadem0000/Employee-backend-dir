const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
MONGODB_URI =
  "mongodb+srv://prod:product@product.8szgdhb.mongodb.net/?retryWrites=true&w=majority";
//require("dotenv").config();
const EmployeeRoute = require("./routes/Employee");
const cors = require("cors");

const app = express();

/** connecting our database with our app */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection is successful!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/Employee", EmployeeRoute);

/** setting up server */
app.listen(5000, () => {
  console.log("Our server is up and running on port 5000");
});
