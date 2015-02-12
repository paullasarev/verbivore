var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Layout = require('./components/layout.jsx');
var Home = require('./components/home.jsx');
var Login = require('./components/login.jsx');

var routes = (
	<Route name="layout" path="/" handler={Layout}>
    <Route name="login" handler={Login}/>
		<DefaultRoute handler={Home} />
	</Route>
);

module.exports =  {
  routes: routes,
  run: function(location, cb) {
    if (location) {
      Router.run(routes, location, cb);
    } else {
      Router.run(routes, cb);
    }
  },
  start: function() {
    this.run(function (Handler, state) {
    	React.render(<Handler />, document.getElementById('content'));
  	});
  },
}
