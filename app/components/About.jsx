var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h2>About Component</h2>
//     );
//   }
// });

// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        Here are some of the tools used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This is the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Used for
            API calls to search for weather data.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
