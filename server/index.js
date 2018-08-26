// modules
let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let fs = require('fs')
let fetch = require('node-fetch');

// connect to routes
let foxRoutes = require("./routes/Fox");
let messageRoutes = require("./routes/Message");
let orderRoutes = require("./routes/Order");
let taskRoutes = require("./routes/Task");
let ticketRoutes = require("./routes/Tickets");
let newOrderRoutes = require("./routes/Neworders");
let newCommentRoutes = require("./routes/Newcomments");
let newTaskRoutes = require("./routes/Newtasks");
let newDateRoutes = require("./routes/Date");

// database connection
let mongoose = require("mongoose");
mongoose.Promise =  global.Promise;
mongoose.connect("mongodb://admin:authentic01@ds227322.mlab.com:27322/checkpoint-1");

// static files to serve to front-end
app.use(express.static('public'))

// use body-parser to utilize requests
app.use(bodyParser.json());

// use routes
app.use(foxRoutes);
app.use(messageRoutes);
app.use(orderRoutes);
app.use(taskRoutes);
app.use(ticketRoutes);
app.use(newTaskRoutes);
app.use(newCommentRoutes);
app.use(newOrderRoutes);
app.use(newDateRoutes);

// // Read data spreadsheet
// let theData;
// fs.readFile("server/data.csv", 'utf8', function (err, data) {
//   // theData = data.split(/\r\n/);
//   console.log(data);
// })

// app.get('/tickets', function(req, res, next) {
//     res.send(theData);
//   })

app.listen(3001, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 3001");
});
