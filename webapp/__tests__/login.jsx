jest.dontMock('../app/scripts/components/login.jsx');

describe('LoginPage', function() {
  it('shows box', function() {
    var React = require('react/addons');
    var Login = require('../app/scripts/components/login.jsx');
    var TestUtils = React.addons.TestUtils;

    // Render the home component
    var home = TestUtils.renderIntoDocument(
      <Home />
    );

    // Verify that the title is there
    var title = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');
    expect(title.getDOMNode().textContent).toEqual('\'Allo, \'Allo!');
  });
});