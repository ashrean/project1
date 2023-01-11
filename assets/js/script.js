// API test
var location = "San Francisco";
var accuWeatherAPIKey = "G7TFrvoMDfSH4fn8av5CZDJviR257GdG";
var accuWeatherURL = "http://dataservice.accuweather.com/locations/v1/cities/search" + accuWeatherAPIKey + "&q=" + location;

$.ajax({
    url: accuWeatherURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})