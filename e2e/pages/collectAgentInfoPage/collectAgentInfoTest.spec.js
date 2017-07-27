'use strict';

var homePage = require('../homePage/homePage.po.js');
var homePage = new homePage()

var FindAgentPage = require('../findAgentPage/findAgentPage.po.js');
var findAgentPage = new FindAgentPage()

var CollectAgentInfoPage = require('../collectAgentInfoPage/collectAgentInfoPage.po.js');
var collectInfoPage = new CollectAgentInfoPage()

var params = browser.params;


describe('Collect Agent Info page', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });


    it('should collect data of first agent', function () {
        // open home page
        homePage.get(params.url.homeAE);
        // open Agent tab
        homePage.tabFindAgent.click();

        var EC = protractor.ExpectedConditions;
        var tagline = findAgentPage.tagLine;
        // assert that the correct message is displayed
        browser.wait(EC.visibilityOf(tagline), params.wait.fiveSec).then(function () {
            expect(tagline.getText()).toEqual('Great agents find great properties.');
        });

        // open details of first agent
        findAgentPage.firstAgent.click();

        // Waits for the URL to changed (contain 'agent')
        browser.wait(EC.urlContains('/agent/'), 5000);

        // collect info about first agent
        collectInfoPage.writeToFile(collectInfoPage.name);
        collectInfoPage.appendToFile(collectInfoPage.nationality);
        collectInfoPage.appendToFile(collectInfoPage.languages);
        collectInfoPage.appendToFile(collectInfoPage.license);

        // Expand AboutMe section
        collectInfoPage.aboutMeTab.click();
        collectInfoPage.appendToFile(collectInfoPage.aboutMeInfo);
        
        // Make phone number visible
        collectInfoPage.callAgentButton.click()
        collectInfoPage.appendToFile(collectInfoPage.callAgentButton);

        collectInfoPage.appendToFile(collectInfoPage.companyName);  
        collectInfoPage.appendToFile(collectInfoPage.experience);
        collectInfoPage.appendToFile(collectInfoPage.myProperties);
        collectInfoPage.appendHrefAttribute(collectInfoPage.linkedinProfile);

        // Capture screenshots in En and Ar localisation
        collectInfoPage.captureScreen("../results/agent_screenshot/scr_en");
        collectInfoPage.changeToArabic.click();
        collectInfoPage.captureScreen("../results/agent_screenshot/scr_ar");

    });

});