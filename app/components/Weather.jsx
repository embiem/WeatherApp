var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getWeather(location).then(function (weather) {
      that.setState({
        isLoading: false,
        location: location,
        temp: weather.temp,
        temp_min: weather.temp_min,
        temp_max: weather.temp_max,
        weather_txt: weather.weather_txt
      });
    }, function (err) {
      that.setState({isLoading: false});
      alert(err);
    });
  },
  render: function () {
    var {isLoading, location,
      temp, temp_min, temp_max, weather_txt} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h4>Loading...</h4>;
      } else if (temp && location) {
        return (
          <WeatherMessage location={location} temp={temp}
            tempMin={temp_min} tempMax={temp_max}
            weatherTxt={weather_txt} />
        );
      }
    }

    return (
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
