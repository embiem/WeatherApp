var React = require('react');

var WeatherMessage = ({temp, location, weatherTxt, tempMin, tempMax}) => {
  return (
    <div>
      <h3>It's {temp}°C in {location} with {weatherTxt}.</h3>
      <h4>It will range today from {tempMin}°C to {tempMax}°C.</h4>
    </div>
  );
};

module.exports = WeatherMessage;
