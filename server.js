//This part is the same as usual...
var express = require("express");
var app = express();

var http = require("http");

//We are getting an instance of a Node HTTP (web) server here.
//We are also telling it to connect up with our Express application,
//so it can handle requests.
var server = http.Server(app);

//On command prompt, we need to do "npm install socket.io"
var socketio = require("socket.io");

//instantiates our 'io' instance, and also connects it up with the HTTP
//server we already created.
var io = socketio(server);

//Just for static files (like usual).  Eg. index.html, client.js, etc.
app.use(express.static("pub"));


server.listen(80, function() {
	console.log("Server is listening on port 80");
});



