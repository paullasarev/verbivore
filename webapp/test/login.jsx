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


describe('Login page', function() {
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
  var login_text_size = 24;
  var login_text_padding = 15;
  var login_submit_color = '#ff8a0d';
  var login_submit_text_size = 40;
  var fill_height = 20;
  var login_details_background_color = '#f2f2f2';
  var login_details_text_color = '#fe1107';
  var login_details_border_color = '#ff8a0d';
  var login_details_text_size = 24;
  var login_submit_gap = 15;
  var login_input_gap = 2;

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

  describe('rendering', function() {
    var html = React.renderToStaticMarkup(<Login />);
    attachHtmlString(html);

    it('should render login', function() {

      tdstyle.isCentered('body', '.login');
      tdstyle.isWidth('.login', width);

      tdstyle.areInCol('.login__caption', '.login__user', '.login__password', 
        '.login__fill', '.login__details', '.login__submit');
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
      var sel = '.login__user';
      tdstyle.isWidth(sel, width);
      tdstyle.isHeight(sel, height);
      tdstyle.isBox(sel, {
        color:  login_color,
        padding: '0 ' + login_text_padding + "px 0 " + login_text_padding + "px",
      });
      tdstyle.isFont(sel, {
        color: login_text_color,
        size: login_text_size,
      });
      tdstyle.isAttribute(sel, 'placeholder', 'Email');
    });

    it('should render password', function() {
      var sel = '.login__password';
      tdstyle.isWidth(sel, width);
      tdstyle.isHeight(sel, height);
      tdstyle.isBox(sel, {
        color:  login_color,
        padding: '0 ' + login_text_padding + "px 0 " + login_text_padding + "px",
        // marginTop: login_input_gap,
      });
      tdstyle.isFont(sel, {
        color: login_text_color,
        size: login_text_size,
      });
      tdstyle.isAttribute(sel, 'placeholder', 'Password');
      tdstyle.isAttribute(sel, 'type', 'password');
    });

    it('should render submit', function() {
      var sel = '.login__submit';
      tdstyle.isWidth(sel, width);
      tdstyle.isHeight(sel, height);

      tdstyle.isBox(sel, {
        color:  login_submit_color,
        // marginTop: login_submit_gap,
      });

      tdstyle.isFont(sel, {
        color: login_text_color,
        size: login_submit_text_size,
      });
      tdstyle.isAttribute(sel, 'value', 'Log in');
    });

    it('should render fill', function() {
      var sel = '.login__fill';
      tdstyle.isBox(sel, {
        // marginTop: login_input_gap,
      });
      tdstyle.isWidth(sel, width);
      tdstyle.isHeight(sel, fill_height);
    });

    it('should render details', function() {
      var sel = '.login__details';
      tdstyle.isWidth(sel, width);
      tdstyle.isHeight(sel, height);
      tdstyle.isBox(sel, {
        color:  login_details_background_color,
        marginTop: login_submit_gap,
        border: 'solid 1px ' + login_details_border_color,
      });
      // tdstyle.isColor(sel, 'border-color', login_details_border_color);
      tdstyle.isFont(sel, {
        color: login_details_text_color,
        size: login_details_text_size,
      });
      tdstyle.isTextCentered(sel);
      tdstyle.isTextVCentered(sel);
      assert.equal('Your details were incorrect', tdstyle.getText(sel));
    });

  });

});