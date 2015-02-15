var $ = window.jQuery;
var tdstyle = window.tdstyle;

function attachHtmlString(fixture) {
  var id = 'fixture-div';
  var idSel = '#' + id;
  var idDiv = '<div id="' + id + '"></div>';

  if (!$(idSel).length)
    $('body').append(idDiv);

  $(idSel).html(fixture);
}


describe('HomePage', function() {
  var assert = require('assert');
  var React = require('react/addons');
  var Login = require('../app/scripts/components/login.jsx');
  var TestUtils = React.addons.TestUtils;
  var $ = require('jquery');

  var width = 413;

  it('shows text', function() {

    // Render the home component
    var loginDoc = TestUtils.renderIntoDocument(
      <Login />
    );

    // Verify that the login is there
    var loginDom = TestUtils.findRenderedDOMComponentWithClass(loginDoc, 'login');
    assert.ok(TestUtils.isDOMComponent(loginDom));

    var userDom = TestUtils.findRenderedDOMComponentWithClass(loginDom, 'login__user');
    assert.ok(TestUtils.isDOMComponent(userDom));

    var passwordDom = TestUtils.findRenderedDOMComponentWithClass(loginDom, 'login__password');
    assert.ok(TestUtils.isDOMComponent(passwordDom));

    var submitDom = TestUtils.findRenderedDOMComponentWithClass(loginDom, 'login__submit');
    assert.ok(TestUtils.isDOMComponent(submitDom));
    assert.equal('Log in', submitDom.props.value);
    // console.log('submitDom', submitDom.props) 
  });

  it('should render login', function(){
    var html = React.renderToStaticMarkup(<Login />);
    // console.log('html', html)
    attachHtmlString(html);
    tdstyle.isCentered('body', '.login');
    tdstyle.isWidth('.login', width);
    tdstyle.isWidth('.login__user', width);
    tdstyle.isWidth('.login__password', width);
    tdstyle.isWidth('.login__submit', width);
    tdstyle.areInCol('.login__user', '.login__password', '.login__submit');
  })
});