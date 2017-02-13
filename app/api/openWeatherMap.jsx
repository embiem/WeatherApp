var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=06c3cd07910637847838c3ab9e8e2a7c&units=metric';

module.exports = {
  getWeather: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (response) {
      if (response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return {
          temp:  response.data.main.temp,
          temp_min:  response.data.main.temp_min,
          temp_max:  response.data.main.temp_max,
          weather_txt:  response.data.weather[0].main
        };
      }
    }, function (response) {
      throw new Error(response.data.message);
    });
  }
}
