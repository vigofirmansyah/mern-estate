import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log("service is running on port 3000");
});
