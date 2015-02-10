'use strict';

describe('marionette app', function() {
  var global = window;
  var assert = global.assert;

  beforeEach(function(){
    delete global.Verbivore.application;
  });

  it('should instantiate app', function() {
    var app = new global.Verbivore.Application();
    assert.ok(app);
    assert.ok(app instanceof global.Backbone.Marionette.Application);
  });

  it('startApp should instance app', function() {
    assert.ifError(global.Verbivore.application);
    startApp();
    assert.ok(global.Verbivore.application);
    assert.ok(global.Verbivore.application instanceof global.Verbivore.Application);
  });

  it('startApp should start app', function() {
    assert.ifError(global.Verbivore.application);
    var started = false;
    startApp(function(options) {
        started = true;
    });
    assert.ok(started);
  });

  it('should have content region', function() {
    var app = new global.Verbivore.Application();
    assert.ok(app.contentRegion);
    var region = app.getRegion('contentRegion');
    assert.ok(region);
    assert.ok(region instanceof global.Backbone.Marionette.Region);
    assert.equal(region.el, '#content');
  });

  it('should have header region', function() {
    var app = new global.Verbivore.Application();
    assert.ok(app.headerRegion);
    var region = app.getRegion('headerRegion');
    assert.ok(region);
    assert.ok(region instanceof global.Backbone.Marionette.Region);
    assert.equal(region.el, '#header');
  });

});