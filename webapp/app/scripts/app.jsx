var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


var Layout = require('./components/layout.jsx');
var HomeFactory = require('./components/home.jsx');
var Login = require('./components/login.jsx');

var AuthMixin = function(auth) {
  this.statics = {
    willTransitionTo: function (transition) {
      if (!auth.isLoggedIn()) {
        transition.redirect('login');
      }
    }
  };
};

//fix the default abort handler for wrong behaviour on server
//see https://github.com/rackt/react-router/issues/612
var handleAbort = function (abortReason, location) {
  if (typeof location === 'string')
    throw new Error('Unhandled aborted transition! Reason: ' + abortReason);

  if (abortReason.constructor.name ===  'Cancellation') {
    return;
  } else if (abortReason.constructor.name === 'Redirect') {
    location.replace(this.makePath(abortReason.to, abortReason.params, abortReason.query));
  } else {
    location.pop();
  }
};

function App(auth) {
  var Home = HomeFactory([new AuthMixin(auth)]);
  this.routes = (
    <Route name="layout" path="/" handler={Layout}>
      <Route name="login" handler={Login}/>
      <DefaultRoute handler={Home} />
    </Route>
  );
}

App.prototype.run = function() {
  var cb;

  var router = Router.create({
    routes: this.routes,
    onAbort: handleAbort,
  });

  if (arguments.length>1) {
    router.location = arguments[0];
    cb = arguments[1];
  }  else {
    cb = arguments[0];
  }

  router.run(cb);
}

App.prototype.start = function() {
  this.run(function (Handler, state) {
    React.render(<Handler />, document.getElementById('content'));
  });
}

module.exports = App;
