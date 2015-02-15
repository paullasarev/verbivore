var React = require('react');

var Login = React.createClass({

  render: function() {

    return (
      <div className="login">
        <input className="login__user" />
        <input className="login__password" />
        <input type="button" className="login__submit" value="Log in"/>
      </div>
    );
  }
});

module.exports = Login;
