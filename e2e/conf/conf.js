var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: '../results/screenshots',
    filename: 'my-report.html'
});

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized',
                // "--headless", 
                // "--disable-gpu"
            ]
        }
    },

    params: {
        url: {
            homeQA : 'http://propertyfinder.qa',
            homeAE : 'http://propertyfinder.ae'
        },
        wait: {
            fiveSec: 5000
        }
    },

    suites: {
        home:                 '../pages/homePage/*spec.js',
        findAgent:            '../pages/findAgentPage/*spec.js',
        collectAgentInfo:     '../pages/collectAgentInfoPage/*spec.js'
    },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        includeStackTrace: true
    },

    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function() {
        jasmine.getEnv().addReporter(reporter);
        // THESE SCRIPT IS FOR FIREFOX ONLY (maximize window) 
        // browser.driver.executeScript(function() {
        //     return {
        //         width: window.screen.availWidth,
        //         height: window.screen.availHeight
        //     };
        // }).then(function(result) {
        //     browser.driver.manage().window().setSize(result.width, result.height);
        // });
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};