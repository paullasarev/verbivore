var React = require('react');

var HomeFactory = function(mixins) {

  return React.createClass({
    mixins: mixins,
    render: function() {

      return (
        <div className="hero-unit">
          <h1>'Allo, 'Allo!</h1>
          <p>You now have</p>
          <ul>
              <li>ReactJS Reflux Boilerplate</li>
              <li>Modernizr</li>
              <li>Sass with Compass</li>
              <li>Jest</li>
          </ul>
        </div>
      );
    }
  });
}

module.exports = HomeFactory;
