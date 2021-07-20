<?php

// Connect to database
$mysqli = new mysqli("localhost","1824199","a3yw48","db1824199");
if ($mysqli -> connect_errno) {
  echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
  exit();
}

// First, check requested data is present and fresh
include('data-import.php');


// Execute SQL query
$sql = "SELECT *
	FROM weather
	WHERE city = '{$_GET['city']}'
	AND weather_when >= DATE_SUB(NOW(), INTERVAL '10:0' MINUTE_SECOND)
	ORDER BY weather_when DESC limit 1";


$result = $mysqli -> query($sql);

// Get data, convert to JSON and print
$row = $result -> fetch_assoc();
print json_encode($row);

// Free result set and close connection
$result -> free_result();
$mysqli -> close();

?>
