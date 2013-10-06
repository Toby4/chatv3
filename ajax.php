<?php
$query = $_REQUEST["q"];

switch($query) {

	case "get":
	$chat = file("chat.txt");
	echo "<ul>";
	foreach($chat as $line) {
		if($line != "") {
			echo "<li>".$line."</li>";
		}
	}
	echo "</ul>";
	break;

	case "send":
	$chat = file_get_contents("chat.txt");
	$chat.= "\n\r".$_REQUEST["nick"]."@".$_SERVER["REMOTE_ADDR"].": ".$_REQUEST["msg"];
	file_put_contents("chat.txt", $chat);
	break;

}
?>