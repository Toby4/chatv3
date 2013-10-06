function get() {
	var xhReq;
	xhReq = new XMLHttpRequest();
	xhReq.open("GET", "ajax.php?q=get", false);

	xhReq.addEventListener("load", function() {

		var msgbox;
		msgbox = document.querySelector("#msgbox");
		msgbox.innerHTML = xhReq.responseText;

		setTimeout(get, 1000);

	});

	xhReq.send(null);
}

function send(msg, nick) {
	var xhReq;
	xhReq = new XMLHttpRequest();
	xhReq.open("GET", "ajax.php?q=send&msg=" + msg + "&nick=" + nick, false);

	xhReq.addEventListener("load", function() {
		console.log(xhReq.responseText);
	});

	xhReq.send(null);
}


function init() {

	var button;
	button = document.querySelector("#send");

	button.addEventListener("click", function() {
		var msg;
		msg = document.querySelector("#msg").value;
		
		var nick;
		nick = document.querySelector("#nick").value;
		
		send(msg, nick);
	});

	get();

}

document.addEventListener("DOMContentLoaded", function() {

	init();

});