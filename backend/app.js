const express = require("express");
require("./database");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);

app.post(
  "/sign-in",
  (req, res, next) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.json({ error: "email/password" });
    }
    next();
  },
  (req, res) => {
    res.send("<h1>Hello I am on a page!</h1>");
  }
);

app.listen(8000, () => {
  console.log("Listening port 8000");
});
