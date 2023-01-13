// Location API from Accuweather
function getAPI() {
      var searchCity = "san Francisco";
      var APIKey = "G7TFrvoMDfSH4fn8av5CZDJviR257GdG";
      var requestURL = "http://dataservice.accuweather.com/locations/v1/cities/search?apikey=" + APIKey + "&q=" + searchCity;
  
     fetch(requestURL)
     .then(function(response) {
      return response.json();
     })
     .then(function(data) {
      console.log(data);
      console.log(data[0].Key); //Logs the city key we need to make other requests using Accuweathers other APIs
      var cityKey = data[0].Key; // 347629 is the value of data[0].Key but console says its not defined.
      fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/" + cityKey + "?apikey=" + APIKey)
     .then(function(response) {
      return response.json();
     })
     .then(function(data) {
      console.log(data);
     });
  
     }); 
  
     
  }

  getAPI();