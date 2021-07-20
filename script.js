let weather = {
  apiKey: "7942cba4ea7be6e97e0d32f28242e099",
  fetchWeather: function (city) {
    fetch("https://mi-linux.wlv.ac.uk/~1824199/weater-api.php?city=" + city)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    console.log(data);
    const { city } = data;
    const { description } = data;
    const { temperature } = data;
    const { humidity } = data;
    const { wind } = data;
    // const { icon } = data.city;
    document.querySelector(".city").innerText = "Weather in " + city;
    // document.querySelector(".icon").src =
    //   "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temperature + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + wind + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city + "')";

    localStorage.city = "Weather in " + city;
    localStorage.description = description;
    localStorage.temperature = temperature + "°C";
    localStorage.humidity = "Humidity: " + humidity + "%";
    localStorage.wind = "Wind speed: " + wind + " km/h";
    localStorage.when = Date.now();
    // localStorage.icon = "https://openweathermap.org/img/wn/" + icon + ".png";
    localStorage.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

if (
  localStorage.when != null &&
  parseInt(localStorage.when) + 10000 > Date.now()
) {
  let freshness =
    Math.round((Date.now() - localStorage.when) / 1000) + " second(s)";
  document.getElementById("description").innerHTML = localStorage.description;
  document.getElementById("temp").innerHTML = localStorage.temperature;
  document.getElementById("humidity").innerHTML = localStorage.humidity;
  document.getElementById("wind").innerHTML = localStorage.wind;

  document.getElementById("city").innerHTML = localStorage.city;
  document.getElementById("icon").innerHTML = localStorage.icon;
  document.getElementById("backgroundImage").innerHTML =
    localStorage.backgroundImage;
} else {
  weather.fetchWeather("Wolverhampton");
}
