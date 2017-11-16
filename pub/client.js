
var socket = io();

function moveToPostition(pos) {
	$("#foreground").css("left", pos+"px");
}

socket.on("updatePosition", function(position) {
	moveToPostition(position);
});

socket.on("leftVictory", function() {
	alert("Left dog wins!");
	moveToPostition(0);
});

socket.on("rightVictory", function() {
	alert("Right dog wins!");
	moveToPostition(0);
});

function load() {
	$("#left").click(function() {
		socket.emit("left");
	});
	$("#right").click(function() {
		socket.emit("right");
	});
}


$(load);

