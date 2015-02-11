describe('router', function() {

  var assert = require('assert');
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;

  var router = require('../app/scripts/router.jsx');
  // var Login = require('../app/scripts/components/login.jsx');
  process.env.NODE_ENV = 'test';

  it('should render login when /login path', function(done) {

    router.run('/login', function (Handler) {
      var doc = TestUtils.renderIntoDocument(<Handler />);
      var el = TestUtils.findRenderedDOMComponentWithClass(doc, 'login');
      assert.ok(TestUtils.isDOMComponent(el));
      // var str1 = React.renderToString(<Handler/>);
      done();
    });

  });
});