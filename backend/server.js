const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// Port number
const port = 6060;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Connecting database
mongoose.connect("mongodb://localhost:27017/posts");

// Define schema
const userSchema = new mongoose.Schema({
  title: String,
  details: String,
  date: Date,
});

// Create a model based on the schema
const userModel = mongoose.model("allPosts", userSchema); //creating collection

app.post("/save", async (req, res) => {
  const title = req.body.title;
  const details = req.body.details;
  const date = req.body.date;
  console.log(req.body);

  try {
    // Create a new user document
    const newUser = new userModel({ title, details, date });

    // Save the user document to the database
    await newUser.save();

    console.log({ title, details, date });

    // Send a response
    res.status(200).sendFile(path.join(__dirname, "public", "Registered.html"));
    // res.send('Registered')
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    res.status(500).send("Error saving data to MongoDB");
  }
});

app.post("/update", async (req, res) => {
  const newTitle = req.body.title; // Use newTitle instead of title
  const newDetails = req.body.details; // Use newDetails instead of details
  const newDate = req.body.date; // Use newDate instead of date

  try {
    // Find and update the user document if it exists
    const updatedUser = await userModel.findOneAndUpdate(
      { title: newTitle }, // Assuming _id is used as the identifier
      {
        $set: { title: newTitle, details: newDetails, date: newDate },
        $currentDate: { lastModified: true },
      }
    );

    console.log({ newTitle, newDetails, newDate });

    // Send a response
    res.status(200).sendFile(path.join(__dirname, "public", "Registered.html"));
  } catch (error) {
    console.error("Error updating data in MongoDB:", error);
    res.status(500).send("Error updating data in MongoDB");
  }
});

app.listen(port, () => {
  console.log("listening on port " + port);
});
