// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3010;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var bookingList = [
  {
    name: "Abc",
    phoneNumber: "123-456-7890",
    email: "abc@gmail.com",
    uniqueId: 1
  },
  {
    name: "xyz",
    phoneNumber: "012-345-6789",
    email: "xyz@gmail.com",
    uniqueId: 2
  },
  {
    name: "pqr",
    phoneNumber: "111-111-1333",
    email: "pqr@gmail.com",
    uniqueId: 3
  }
];

var waitList=[];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "makeReservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/tables", function(req, res) {
    res.json(bookingList);
  });

app.get("/api/waitlist", function(req, res){
    res.json(waitList);
}
);

app.post("/add",function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var reserve = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    if(bookingList.length===5){
        waitList.push(reserve);
    }else{
        bookingList.push(reserve);
    }
    console.log(reserve);
  
    res.sendFile(path.join(__dirname, "view.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
