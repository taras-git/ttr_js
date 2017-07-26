'use strict';

var params = browser.params;

var Homepage = function() {
    this.get = function(url) {
    	browser.waitForAngularEnabled(false);
        browser.driver.get(url);
    };

    this.header                 = element(by.id('header'));
    this.inputSearchField       = element(by.name('q'));
    this.buttonFind				= element(by.css('[type="submit"]'));
    this.tabFindAgent			= element(by.css('.js-find-agent'));


};

module.exports = Homepage;