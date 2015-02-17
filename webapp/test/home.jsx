require('./common.js');

describe('HomePage', function() {
  var assert = require('assert');
  var React = require('react/addons');
  var HomeFactory = require('../app/scripts/components/home.jsx');
  var TestUtils = React.addons.TestUtils;
  var Home = HomeFactory([]);

  it('shows text', function() {

    // Render the home component
    var home = TestUtils.renderIntoDocument(
      <Home />
    );

    // Verify that the title is there
    var title = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');
    assert.equal(title.getDOMNode().textContent, '\'Allo, \'Allo!');
  });
});