var React = require('react');

var Login = React.createClass({

  render: function() {

    return (
      <div className="login">
        <input className="user" />
        <input className="password" />
      </div>
    );
  }
});

module.exports = Login;
