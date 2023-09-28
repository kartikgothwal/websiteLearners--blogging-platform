require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const publicKey = process.env.PUBLIC_KEY;

//DATABASE Connection
main()
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error with database connection", error.message);
  });
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ejahxrh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  );
}

// Authentication - middleware
const auth = async (req, res, next) => {
  try {
    if (!req.get("Authorization")) {
      return res.status(401).json({ message: "Unauthorised User" });
    }
    const token = req.get("Authorization").split(" ")[1];
    const decode = jwt.verify(token, publicKey, { algorithms: "RS256" });
    if (decode) {
      req.body.decode = decode;
      next();
    } else {
      return res.status(401).json({ message: "Unauthorised User" });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorised User", error: error.message });
  }
};

//ROUTERS
const AuthRouter = require("./routes/auth");
const BlogRouter = require("./routes/blog");
const BlogCommentsRouter = require("./routes/blogcomments");
//MiddleWares
app.use(express.json());
app.use("/auth", AuthRouter.router);
app.use("/blog", auth, BlogRouter.router);
app.use("/blog/comments", auth, BlogCommentsRouter.router);

app.get("/", (req, res) => {
  res.send("<h1>Hello World!, file is running<h1>");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Listening to the server on http://localhost:${process.env.PORT}/`
  );
});
