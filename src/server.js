const express = require("express");
const app = express();
const port = process.env.PORT ? +process.env.PORT : 8081;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Server is up and running.");
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}...`);
});
