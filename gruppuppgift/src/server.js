const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/myapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
