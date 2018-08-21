let express = require("express");
const app = express();
let mongoose = require("mongoose");
mongoose.Promise =  global.Promise;
mongoose.connect("mongodb://admin:authentic01@ds227322.mlab.com:27322/checkpoint-1");

app.use(express.static('public'))

app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
