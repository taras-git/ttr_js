'use strict';

var homePage = require('../homePage/homePage.po.js');
var homePage = new homePage()

var FindAgentPage = require('../findAgentPage/findAgentPage.po.js');
var findAgentPage = new FindAgentPage()

var params = browser.params;


describe('Property Finder Find Agent page', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });


    it('should compare agents count', function () {
        // Open Home page
        homePage.get(params.url.homeAE);
        // Clic on Agent tab
        homePage.tabFindAgent.click();

        var EC = protractor.ExpectedConditions;
        var tagline = findAgentPage.tagLine;

        // assert that the correct message is displayed
        browser.wait(EC.visibilityOf(tagline), params.wait.fiveSec).then(function () {
            expect(tagline.getText()).toEqual('Great agents find great properties.');
        });

        // choose agents with English, Arabic and French languages
        findAgentPage.languagesDropDown.click();
        findAgentPage.languageArabic.click();
        findAgentPage.languageEnglish.click();
        findAgentPage.languageFrench.click();
        findAgentPage.buttonFind.click();

        // get agents count with Arabic, English and French
        var agentsArEnFr = findAgentPage.getAgentsCount(findAgentPage.agentsFound);

        // choose agents with Hindi language
        findAgentPage.buttonReset.click()
        findAgentPage.languagesDropDown.click();
        findAgentPage.languageHindi.click();

        // Waits for the URL to changed (contain 'languages_ids')
        browser.wait(EC.urlContains('languages_ids'), 5000);

        // get agents count with Indian language
        var agentsIn = findAgentPage.getAgentsCount(findAgentPage.agentsFound);
        
        // compare two values for agents
        expect(agentsArEnFr).toBeGreaterThan(agentsIn);
    
    });

});