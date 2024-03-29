
// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// enable CORS
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// API endpoint
app.get("/api/header", (req, res) => {
  res.json({ipaddress: req.ip, language: req.headers["accept-language"], software: req.headers["user-agent"]});
});



// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
