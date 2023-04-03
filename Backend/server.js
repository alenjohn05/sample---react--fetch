const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
app.use(cors())


app.get("/blogs", (req, res) => {

  var someObject = require("./database.json");
  res.status(200).json({
    success: true,
    data: someObject,
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
