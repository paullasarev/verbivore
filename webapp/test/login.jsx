require('./common.js');
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
  var height = 67;
  var caption_font_size = 65;
  var color_main = '#fe1107';
  var login_color = '#fe1107';
  var login_text_color = '#fdfbfa';
  var login_placeholder_color = '#fdfbfa';
  var login_text_size = 30;
  var login_text_padding = 15;

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

  describe('login rendering', function() {
    var html = React.renderToStaticMarkup(<Login />);
    attachHtmlString(html);

    it('should render login', function() {

      tdstyle.isCentered('body', '.login');
      tdstyle.isWidth('.login', width);

      tdstyle.areInCol('.login__caption', '.login__user', '.login__password', '.login__submit');
    });

    it('should render caption', function() {

      tdstyle.isWidth('.login__caption', width);
      tdstyle.isHeight('.login__caption', height);

      // for text version:
      // tdstyle.isTextCentered('.login__caption');
      // tdstyle.isTextVCentered('.login__caption');
      // assert.equal('VERBIVORE', tdstyle.getText('.login__caption'));
      // tdstyle.isFont('.login__caption', {
      //   size: caption_font_size,
      //   weight: 'bold',
      //   color: color_main,
      // });
    });

    it('should render user', function() {
      tdstyle.isWidth('.login__user', width);
      tdstyle.isHeight('.login__user', height);
      tdstyle.isBox('.login__user', {
        color:  login_color,
        padding: '0 ' + login_text_padding + "px 0 " + login_text_padding + "px",
        'padding-left': login_text_padding,
        'padding-right': login_text_padding,
      });
      tdstyle.isFont('.login__user', {
        color: login_text_color,
        size: login_text_size,
      });
      tdstyle.isAttribute('.login__user', 'placeholder', 'Email');
    });

    it('should render password', function() {
      tdstyle.isWidth('.login__password', width);
      tdstyle.isHeight('.login__password', height);
    });

    it('should render submit', function() {
      tdstyle.isWidth('.login__submit', width);
      tdstyle.isHeight('.login__submit', height);
    });

  });

});