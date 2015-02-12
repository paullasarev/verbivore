
describe('HomePage', function() {
  var assert = require('assert');
  var React = require('react/addons');
  var Login = require('../app/scripts/components/login.jsx');
  var TestUtils = React.addons.TestUtils;
  var $ = require('jquery');

  it('shows text', function() {

    // Render the home component
    var loginDoc = TestUtils.renderIntoDocument(
      <Login />
    );

    // Verify that the login is there
    var loginDom = TestUtils.findRenderedDOMComponentWithClass(loginDoc, 'login');
    assert.ok(TestUtils.isDOMComponent(loginDom));

    var userDom = TestUtils.findRenderedDOMComponentWithClass(loginDom, 'user');
    assert.ok(TestUtils.isDOMComponent(userDom));

    var passwordDom = TestUtils.findRenderedDOMComponentWithClass(loginDom, 'password');
    assert.ok(TestUtils.isDOMComponent(passwordDom));
  });
});