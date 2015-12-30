casper.test.begin('Emma Thomas is valid input ', function suite(test) {
    casper.start("http://localhost:5000", function() {
        this.fill('form', {
            name: "Emma Thomas"
        }, true);
        this.click('input[type="submit"]');
        var response = document.querySelector('.response');
        test.assert(response.classList.contains('success'));
    });

    casper.run(function() {
        test.done();
    });
});
