var App = require('./app.jsx');
var FakeAuth = require('../../test/fake_auth');

var app = new App(new FakeAuth());

app.start();
