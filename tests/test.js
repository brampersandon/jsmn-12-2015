casper.test.begin("Emma Thomas is valid input", 1, {
    tearDown: function(){

        setTimeout(function(){
            phantom.exit();
        }, 10);

    },
    test: function(test){

        casper.start("http://localhost:5000", function() {
          this.capture('1.png');
          this.fill('form', {
              name: "Emma Thomas"
          }, false);
          this.capture('2.png');
        });

        casper.then(function() {
          this.click('input[type="submit"]');
          this.capture('3.png');
          test.assertSelectorHasText(".response", "success");
        });

        casper.run(function(){
          test.done();
          this.echo("Tests complete").exit();
        });
    }
});
