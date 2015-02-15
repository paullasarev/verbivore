function Auth() {
  this.loggedIn = false;
}

Auth.prototype.isLoggedIn = function () {
  return this.loggedIn;
}

Auth.prototype.setLoggedIn = function(value) {
  this.loggedIn = value;
}

module.exports = Auth;