const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.send("Backend is healthy");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});

