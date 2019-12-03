var city = "Houston";

$.getJSON(
  `http://api.openweathermap.org/data/2.5/weather?q=${city},usa&units=imperial&APPID=50113ea6906fe686e5246c86b7565c2a`,
  function(data) {
    console.log(data);

    var icon =
      "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);
    var weather = data.weather[0].main;

    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
  }
);
