module.exports = function () {
  this.Given(/^I am on the index page$/, function(cb){
    this.visit('http://localhost:5000', cb);
  });

  this.When(/^I enter "Emma Thomas" in the input field$/, function(cb){
    this.browser.fill('name', "Emma Thomas");
    cb();
  });

  this.When(/^I click "submit"$/, function(cb){
    this.browser.pressButton('input[type="submit"]');
    cb();
  });

  this.Then(/^I should be notified of a successful submission$/, function(cb) {
    this.browser.assert.text('p.response', "Form successfully submitted. Thanks, Emma!");
    cb();
  });
}
