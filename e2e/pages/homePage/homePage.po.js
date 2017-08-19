'use strict';

var params = browser.params;

var Homepage = function() {
    this.get = function(url) {
        browser.driver.get(url);
    };

    this.tab_jobs              = element(by.id('menu-jobs'));
    this.button_add            = element(by.id('add'));
    this.company_name          = element(by.id('company'));
    this.email                 = element(by.id('email'));
    this.title                 = element(by.id('title'));
    this.location              = element(by.id('location'));
    this.salary                = element(by.id('salary'));
    this.currency              = element(by.id('currency'));
    this.publish_at            = element(by.id('publish-at'));
    this.apply_by              = element(by.id('apply-by'));
    this.available             = element(by.css('[for="available"]'));
    this.featured              = element(by.css('[for="featured"]'));
    this.description           = element(by.css('div.fr-wrapper'));
    this.post                  = element(by.id('save'));

    this.dropdown = function(text) {
        return element(by.cssContainingText('span', text));
    };

    this.scroll_to = function(element){
        browser.executeScript("arguments[0].scrollIntoView();", element);
    };

    this.clear_and_send_keys = function(element, text){
        element.clear().then(function() {
            element.sendKeys(text);
        })
    };
};

module.exports = Homepage;