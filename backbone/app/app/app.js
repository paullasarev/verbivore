"use strict";
(function(global, Marionette){
  global.Verbivore = global.Verbivore || {};
  
  var app = global.Verbivore.Application = Marionette.Application.extend({
    regions: {
      contentRegion: '#content',
    },
  });


})(window, window.Backbone.Marionette);