const express = require("express");
const userRouter = require("./routes/user");

const app = express();
app.use('/api', userRouter);

app.get("/about", (req, res) => {
  res.send("<h1>Hello About</h1>");
});

app.listen(8000, () => {
  console.log("Listening port 8000");
});
