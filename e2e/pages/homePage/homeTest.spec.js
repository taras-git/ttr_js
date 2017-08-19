'use strict';

var homePage = require('./homePage.po.js');
var homePage = new homePage()

var params = browser.params;

describe('Time To Riot home page', function () {
    beforeEach(function () {
    });

    it('should be correctly displayed', function () {
         homePage.get(params.url.homeURL);
         expect(homePage.tab_jobs.getText()).toContain('Jobs');
    });


    it('should go to Jobs page and fill all the fields', function () {
        homePage.get(params.url.homeURL);
        homePage.tab_jobs.click();
        homePage.button_add.click();
        homePage.company_name.sendKeys("Mons");
        homePage.dropdown('Mons').click();
        homePage.email.sendKeys("brin@gmail.com");
        homePage.scroll_to(homePage.title);
        homePage.title.sendKeys("ceo");
        homePage.location.sendKeys("Palo-Alto");
        homePage.scroll_to(homePage.salary);
        homePage.salary.sendKeys("1000000");
        homePage.clear_and_send_keys(homePage.currency, "USD");
        homePage.dropdown('USD').click();
        homePage.scroll_to(homePage.publish_at);
        homePage.clear_and_send_keys(homePage.publish_at, "2017-20-12");
        homePage.clear_and_send_keys(homePage.apply_by, "2017-22-12");
        homePage.available.click();
        homePage.featured.click();
        homePage.description.sendKeys("Awsome");

        // wait to check if everything is ok
        browser.sleep(10000);
    });

});