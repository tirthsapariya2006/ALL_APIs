const express = require("express");
const todoRouter = require("./router/todoRouter");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).send("hello");
});
app.use("/api", todoRouter);

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
