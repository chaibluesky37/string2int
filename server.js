const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});
var onlyInt = (str) => {
  return new Promise(function (resolve, reject) {
    let newInt = "";
    for (let i = 0; i < str.length; i++) {
      newInt += str[i] >= 0 && str[i] <= 9 ? str[i] : "";
    }
    resolve(newInt * 1);
  });
};
app.post("/string", (req, res) => {
  let str = req.body.string;
  onlyInt(str).then(function (value) {
    res.send({ int: value });
  });
});

app.listen(5000, () => {
  console.log("Start server at port 5000");
});
