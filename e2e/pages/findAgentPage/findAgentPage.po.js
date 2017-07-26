'use strict';

var findAgentPage = function() {
    
    this.getUrl = function() {
        return browser.getCurrentUrl();
    	};


	this.getAgentsCount = function(element) {
            return element
            		.getText()
            		.then(function(text) {
                		return parseInt(text);
            			});
     		};


	this.urlChanged = function() {
	    	return browser
	    			.getCurrentUrl()
	    			.then(function(url) {
	      				return url
	      						.toContain('languages_ids%5B0%5D=7');
	    				});
	  		};


    this.header                = element(by.id('header'));
    this.tagLine		 	   = element(by.css('.tag-line'));

    // filter section
    this.buttonReset	 	   = element(by.css('.reset-btn'));
    this.buttonFind            = element(by.buttonText('Find'))
    this.languagesDropDown	   = element(by.cssContainingText('span', 'Languages'))
    this.selectedLanguagesDropDown = element(by.cssContainingText('span', 'Selected'))

    // language section
    this.languageArabic	   	   = element(by.cssContainingText('li', 'Arabic'))
    this.languageEnglish   	   = element(by.cssContainingText('li', 'English'))
    this.languageFrench	   	   = element(by.cssContainingText('li', 'French'))
    this.languageHindi	   	   = element(by.cssContainingText('li', 'Hindi'))

    // filter results
    this.agentsFound	       = element(by.css('.serp-h1'));

    this.firstAgent			   = element(by.css('.tile-block-container:nth-child(1)'));
};

module.exports = findAgentPage;