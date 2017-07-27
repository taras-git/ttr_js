'use strict';

var fs = require('fs');

var collectAgentInfoPage = function() {

    var txtFile = "../results/agent_txt_info/agent_info.txt";

    var writer = function(fd){
        fs.writeFile(txtFile, fd, function (err) {
          if (err) return console.log(err);
          console.log('write info to file');
        });
    };


    var appender = function(fd){
        fs.appendFile(txtFile, "\r\n" + fd, function (err) {
          if (err) return console.log(err);
          console.log('appended info to file');
        });
    };


    this.writeToFile = function(element) {
            return element
                    .getText()
                    .then(function(text) {
                        writer(text);
                        });
            };


    this.appendToFile = function(element) {
            return element
                    .getText()
                    .then(function(text) {
                        appender(text);
                        });
            };


    this.appendHrefAttribute = function(element) {
            return element
                    .getAttribute("href")
                    .then(function(hrefValue) {
                        appender(hrefValue);
                        });
            };


    this.appendPhone = function(element) {
            return element
                    .getAttribute("data-phone")
                    .then(function(phone) {
                        appender(phone);
                        });
            };


    this.captureScreen = function(screenshotName){
        browser.takeScreenshot().then(function(screenShot) {
              fs.writeFile(screenshotName, screenShot, 'base64', function (err) {
                    if (err) throw err;
                    console.log('Screenshot saved.');
            });
        });
    }


    this.header                = element(by.id('header'));
    this.name                  = element(by.css('.user-name'));
    this.nationality           = element(by.css('.user-nationality'));
    this.languages             = element(by.css('.user-language'));
    this.license               = element(by.css('.user-rera-no > .content'));
    this.aboutMeTab            = element(by.css('button[data-tab="aboutMe"]'));
    this.aboutMeInfo           = element(by.css('.user-tab.user-tab-about-me'));
    this.callAgentButton       = element(by.css('.call-agent'));
    this.companyName           = element(by.css('.company-name'));
    this.experience            = element(by.css('.user-experience div.content'));
    this.myProperties          = element(by.css('.tab-button span'));
    this.linkedinProfile       = element(by.css('.user-linkedin  a'));

    this.changeToArabic        = element(by.css('.ar.change-language-link'));
    this.changeToEnglish       = element(by.css('.en.change-language-link'));
    
};

module.exports = collectAgentInfoPage;