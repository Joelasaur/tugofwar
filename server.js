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

var position = 0;

//Every time a client connects (visits the page) this function(socket) {...} gets executed.
//The socket is a different object each time a new client connects.
io.on("connection", function(socket) {
	console.log("Somebody connected.");
	socket.emit("updatePosition", position);


	socket.on("left", function() {
		position -= 20;
		if(position <= -496) {
			io.emit("leftVictory");
			position = 0;
		}
		else {
			io.emit("updatePosition", position);
		}
		
	});
	socket.on("right", function() {
		position += 20;
		if(position >= 496) {
			io.emit("rightVictory");
			position = 0;
		}
		else {
			io.emit("updatePosition", position);
		}
	});
});



server.listen(80, function() {
	console.log("Server is listening on port 80");
});



