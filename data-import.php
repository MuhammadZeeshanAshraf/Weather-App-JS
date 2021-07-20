<?php

// Select weather data for given parameters
$sql = "SELECT *
	FROM weather
	WHERE city = '{$_GET['city']}'
	AND weather_when >= DATE_SUB(NOW(), INTERVAL '10:0' MINUTE_SECOND)
	ORDER BY weather_when DESC limit 1";

$result = $mysqli -> query($sql);

// If 0 record found
if ($result->num_rows == 0) {

    $url = 'https://api.openweathermap.org/data/2.5/weather?q=' . $_GET['city'] . '&units=metric&appid=7942cba4ea7be6e97e0d32f28242e099';
   
    // Get data from openweathermap and store in JSON object
    $data = file_get_contents($url);
    $json = json_decode($data, true);

    // Fetch required fields
    $weather_description = $json['weather'][0]['description'];
    $weather_temperature = $json['main']['temp'];
    $weather_humidity = $json['main']['humidity'];
    $weather_wind = $json['wind']['speed'];          
    $weather_when = date("Y-m-d H:i:s"); // now
    $city = $json['name'];          

    // Build INSERT SQL statement
    $sql = "INSERT INTO weather (`description`, `temperature`, `wind`, `weather_when`, `city`,`humidity`)
    VALUES('{$weather_description}', {$weather_temperature}, {$weather_wind}, '{$weather_when}', '{$city}', '{$weather_humidity}')";

    // Run SQL statement and report errors
    if (!$mysqli -> query($sql)) {
        echo("<h4>SQL error description: " . $mysqli -> error . "</h4>");
    }
}
?>
