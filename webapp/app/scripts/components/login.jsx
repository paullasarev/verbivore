var React = require('react');

var Login = React.createClass({

  render: function() {

    return (
      <div className="login">
        <div className="login__caption"/>
        <input className="login__user" placeholder="Email"/>
        <input className="login__password" placeholder="Password" type="password"/>
        <input type="button" className="login__submit" value="Log in"/>
      </div>
    );
  }
});

module.exports = Login;
