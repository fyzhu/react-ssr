// server/index.js
import express from "express";
import { render } from "./utils";

const app = express();
app.use(express.static("public"));
//注意这里要换成*来匹配
app.get("*", function (req, res) {
  res.send(render(req));
});

app.listen(3001, () => {
  console.log("listen at http://localhost:3001");
});
