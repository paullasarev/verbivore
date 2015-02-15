describe('router', function() {

  var assert = require('assert');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var FakeAuth = require('./fake_auth');

  var App = require('../app/scripts/app.jsx');
  
  var auth = new FakeAuth();
  var app = new App(auth);

  process.env.NODE_ENV = 'test';

  it('should render login when /login path', function(done) {

    app.run('/login', function (Handler, state) {
      var doc = TestUtils.renderIntoDocument(<Handler />);
      var el = TestUtils.findRenderedDOMComponentWithClass(doc, 'login');
      assert.ok(TestUtils.isDOMComponent(el));
      done();
    });

  });

  it('should route to /login when not authorized', function(done) {
    auth.setLoggedIn(false);
    app.run('/', function (Handler, state) {
      assert.equal('/login', state.path);
      done();
    });
  });

});