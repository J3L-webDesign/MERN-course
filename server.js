const express = require("express"),
  mongoose = require("mongoose"),
  app = express(),
  users = require("./routes/api/users"),
  profile = require("./routes/api/profile"),
  posts = require("./routes/api/posts"),
  db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

// Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`server running on port ${port}`));
