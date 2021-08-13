const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require('fs');
require("dotenv").config();
const https = require("https");
const app = express();
const cors = require("cors");
const auth = require("./middlewares/auth");
const passport = require("passport");
app.use(express.json());
const path = require("path");
const users = require("./routes/users");
const posts = require("./routes/posts");
const blogs = require("./routes/blogs");
console.log("change");
app.use(cors());
app.use('/images/images', express.static(path.join(__dirname, '/images/images/')));

mongoose.connect(
  process.env.MONGO_URL2,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);





// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/v1/api/users", users);
app.use("/v1/api/posts", auth, posts);
app.use("/v1/api/blogs", blogs);

const PORT = process.env.PORT || 2718;

app.listen(PORT, "157.230.80.32", () => console.log(`The server has started on port: ${PORT}`));
//https.createServer(options, app).listen(443);
