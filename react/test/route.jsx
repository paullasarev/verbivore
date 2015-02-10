describe('router', function() {

  var assert = require('assert');
  var React = require('react/addons');
  // var Router = require('react-router');
  // var Route = Router.Route;
  var router = require('../app/scripts/router.jsx');
  var Login = require('../app/scripts/components/login.jsx');
  process.env.NODE_ENV = 'test';

  // var TestUtils = React.addons.TestUtils;
  // var $ = require('jquery');

  it('should handle login when /login path', function(done) {

    router.run('/login', function (Handler) {
      // console.log('Handler:' + Handler.toString())
      // console.log('Login:' + Login.toString())
      var str1 = React.renderToString(<Handler/>);
      var str2 = React.renderToString(<Login/>);
      console.log(str1)
      console.log(str2)
      assert.ok(str1.indexOf(str2) >= 0);
      done();
    });

  });
});