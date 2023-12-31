// ye hai tumhara express application
// sab ka sab kam yahi se hota hai
// express app is all you need to know about

const express = require("express");
const path = require("path");
const app = express();

require("./db/conn.js");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "/..public"));
// app.use(express.static(static_path));

app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, (error, data) => {
  console.log(`server is running at port no ${port}`);
});
