const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/error");
const cors = require("cors");

require("dotenv").config();
require("./database");
const userRouter = require("./routes/user");
const actorRouter = require("./routes/actor");
const { handleNotFound } = require("./utils/helper");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/user", userRouter);
app.use("/api/actor", actorRouter);
app.use('/*', handleNotFound)

app.use(errorHandler);

// app.post(
//   "/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.json({ error: "email/password" });
//     }
//     next();
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am on a page!</h1>");
//   }
// );

app.listen(8000, () => {
  console.log("Listening port 8000");
});
