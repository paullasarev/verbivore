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

    tdstyle.isWidth('.login__caption', width);
    tdstyle.isHeight('.login__caption', height);
    // tdstyle.isTextCentered('.login__caption');
    // tdstyle.isTextVCentered('.login__caption');
    // assert.equal('VERBIVORE', tdstyle.getText('.login__caption'));
    // tdstyle.isFont('.login__caption', {
    //   size: caption_font_size,
    //   weight: 'bold',
    //   color: color_main,
    // });
    
    tdstyle.isWidth('.login__user', width);
    tdstyle.isHeight('.login__user', height);
    tdstyle.isBox('.login__user', {
      color:  '#fe1107',
    });
    tdstyle.isFont('.login__user', {
      color:  '#fdfbfa',
      size: 30,
    });
    tdstyle.isAttribute('.login__user', 'placeholder', 'Email');


    tdstyle.isWidth('.login__password', width);
    tdstyle.isHeight('.login__password', height);

    tdstyle.isWidth('.login__submit', width);
    tdstyle.isHeight('.login__submit', height);
    
    tdstyle.areInCol('.login__caption', '.login__user', '.login__password', '.login__submit');

  })
});