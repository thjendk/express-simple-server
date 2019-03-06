const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(port);
console.log("Server listening on port " + port);
