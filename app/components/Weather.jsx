var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      temp_min: undefined,
      temp_max: undefined,
      weather_txt: undefined
    });

    openWeatherMap.getWeather(location).then(function (weather) {
      that.setState({
        isLoading: false,
        location: location,
        temp: weather.temp,
        temp_min: weather.temp_min,
        temp_max: weather.temp_max,
        weather_txt: weather.weather_txt
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      // remove location query string
      window.location.hash = '#/';
    }
  },
  // let react's router listen to a url change to change the props of this comp
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      // remove location query string
      window.location.hash = '#/';
    }
  },
  render: function () {
    var {isLoading, location, errorMessage,
      temp, temp_min, temp_max, weather_txt} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Loading...</h3>;
      } else if (temp && location) {
        return (
          <WeatherMessage location={location} temp={temp}
            tempMin={temp_min} tempMax={temp_max}
            weatherTxt={weather_txt} />
        );
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
