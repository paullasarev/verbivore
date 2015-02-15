describe('router', function() {

  var assert = require('assert');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var FakeAuth = require('./fake_auth');
  var Navigation = require('react-router').Navigation;

  var App = require('../app/scripts/app.jsx');
  
  var auth = new FakeAuth();
  var app = new App(auth);
  process.env.NODE_ENV = 'test';

  after(function(){
    App.onHandleAbort = null;
  })

  it('should render login when /login path', function(done) {
    auth.setLoggedIn(true);

    var router = app.run('/login', function (Handler, state) {
      var doc = TestUtils.renderIntoDocument(<Handler />);
      var el = TestUtils.findRenderedDOMComponentWithClass(doc, 'login');
      assert.ok(TestUtils.isDOMComponent(el));
      done();
    });
  });

  it('should route to /login when not authorized', function(done) {
    auth.setLoggedIn(false);
    App.onHandleAbort = function(reason, location) {
      assert.equal('Redirect', reason.constructor.name);
      assert.equal('login', reason.to);
      done();

    }
    var router = app.run('/', function (Handler, state) {
      assert.fail();
    });
  });

  it('should route to / when authorized', function(done) {
    auth.setLoggedIn(true);

    var router = app.run('/', function (Handler, state) {
      // var str = React.renderToString(<Handler />)
      // console.log('render2 ', str) 
      assert.equal('/', state.path);
      done();
    });
  });

  it('unknown route should redirect to / when authorized', function(done) {
    auth.setLoggedIn(true);

    App.onHandleAbort = function(reason, location) {
      assert.equal('Redirect', reason.constructor.name);
      assert.equal('/', reason.to);
      done();
    }

    var router = app.run('/asdf', function (Handler, state) {
      assert.fail();
    });
  });

  it('unknown route should redirect to / when not authorized', function(done) {
    auth.setLoggedIn(false);
    App.onHandleAbort = function(reason, location) {
      assert.equal('Redirect', reason.constructor.name);
      assert.equal('/', reason.to);
      done();

    }
    var router = app.run('/asdf', function (Handler, state) {
      assert.fail();
    });
  });


});