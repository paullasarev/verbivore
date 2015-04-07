require('./common.js');
var $ = window.jQuery;
var tdstyle = window.tdstyle;

function attachHtmlString(fixture) {
  var id = 'fixture-div2';
  var idSel = '#' + id;
  var idDiv = '<div id="' + id + '"></div>';

  if (!$(idSel).length)
    $('body').append(idDiv);

  $(idSel).html(fixture);
}


describe('Register page', function() {
  var assert = require('assert');
  var React = require('react/addons');
  var Register = require('../app/scripts/components/register.jsx');
  var TestUtils = React.addons.TestUtils;
  // var $ = require('jquery');
  var width = 413;
  var height = 67;

  it('shows text', function() {

    // Render the home component
    var registerDoc = TestUtils.renderIntoDocument(
      <Register />
    );

    // Verify that the register is there
    var registerDom = TestUtils.findRenderedDOMComponentWithClass(registerDoc, 'register');
    assert.ok(TestUtils.isDOMComponent(registerDom));

    var userDom = TestUtils.findRenderedDOMComponentWithClass(registerDom, 'register__user');
    assert.ok(TestUtils.isDOMComponent(userDom));

    var passwordDom = TestUtils.findRenderedDOMComponentWithClass(registerDom, 'register__password');
    assert.ok(TestUtils.isDOMComponent(passwordDom));

    var submitDom = TestUtils.findRenderedDOMComponentWithClass(registerDom, 'register__submit');
    assert.ok(TestUtils.isDOMComponent(submitDom));
    assert.equal('Sign up', submitDom.props.value);
    // console.log('submitDom', submitDom.props) 
  });

  describe('rendering', function() {
    var html = React.renderToStaticMarkup(<Register />);
    attachHtmlString(html);

    it('should render register', function() {

      tdstyle.isCentered('body', '.register');
      tdstyle.isWidth('.register', width);

      tdstyle.areInCol(
        '.register__caption',
        '.register__first_name',
        '.register__surname',
        '.register__user',
        '.register__password', 
        '.register__fill',
        '.register__submit'
      );
    });

  });
});