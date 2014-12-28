'use strict';

describe('marionette app', function() {
  var global = window;
  var assert = global.assert;
  var Application = global.Verbivore.Application;

  it('should instantiate app', function() {
    var app = new Application();
    assert.ok(app);
    assert.ok(app instanceof global.Backbone.Marionette.Application);
  })
});