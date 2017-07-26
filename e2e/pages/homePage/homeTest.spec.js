'use strict';

var homePage = require('./homePage.po.js');
var homePage = new homePage()

var FindAgentPage = require('../findAgentPage/findAgentPage.po.js');
var findAgentPage = new FindAgentPage()

var params = browser.params;


describe('Property Finder AE home page', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });


    it('should be correctly displayed', function () {
        homePage.get(params.url.homeAE);
        expect(homePage.header.getText()).toContain('BUY\nRENT\nCOMMERCIAL\nFIND AGENT\nNEW PROJECTS\nMORE\nUAE\nعربي');
    });


    it('should go to Find Agent page after press tab Find Agent', function () {
        homePage.get(params.url.homeAE);
        homePage.tabFindAgent.click();

        var EC = protractor.ExpectedConditions;
        var url = findAgentPage.getUrl();
        var tagline = findAgentPage.tagLine;

        browser.wait(EC.visibilityOf(tagline), params.wait.fiveSec).then(function () {
            expect(tagline.getText()).toEqual('Great agents find great properties.');
        });
    });

});