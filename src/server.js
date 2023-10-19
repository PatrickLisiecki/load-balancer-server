const express = require("express");
const app = express();

// Default port is 8081 unless specified
const port = process.env.PORT ? +process.env.PORT : 8081;

// Return message and port number
app.get("/", (req, res) => {
  console.log(req);
  res.send(`Backend server is up and running. Port ${port}.`);
});

// Endpoint for health checking
// Returns 200 status code if server is responsive
app.get("/_health", (req, res) => {
  res.status(200).send("");
});

// Listen on port
app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}...`);
});
