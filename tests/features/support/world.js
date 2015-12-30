// world.js
// Cucumber.js boilerplate, borrowed from https://github.com/cucumber/cucumber-js

var zombie = require('zombie');
function World() {
  this.browser = new zombie(); // this.browser will be available in step definitions

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };
}

module.exports = function() {
  this.World = World;
};
