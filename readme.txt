INFO AND PREREQUISITES


Testing framework was developed on Ubuntu 16.04 LTS (64-bit),
Chrome Version 59.0.3071.115 (Official Build) (64-bit),
Firefox Version 54.0



PROTRACTOR (Javascript end-to-end /e2e/ testing framework) 
with JASMINE (behavior-driven development framework) 
were chosen to create project for testing PropertyFinder web application.

Protractor home : http://www.protractortest.org/#/
Jasmine home    : https://jasmine.github.io/



Protractor is a Node.js program (please check guide https://nodejs.org/en/)
Download Protractor package using npm 

NOTE:
1. To run the protracor test suite, Node v.6 is required:
    $curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    $sudo apt-get install -y nodejs

2. Download and install jasmine-reporter tool :
    $npm install protractor-jasmine2-html-reporter --save-dev

Protractor offers out-of-box capabilities of configuring browser, suites and other parameters.
Although it is designed originally for testing Angular applications, it is possible to test
non-Angular as well



TESTFRAMEWORK PAGE OBJECT PATTERN

For the test the Page Object (PO) pattern was chosen. 

Each screen is described in its own class(page), including: 
	- all elemets (buttons, links ets) that are used in the testcase;
	- all functions that are used in the testcase

Testcases are described in separate classes(i.e: CollectAgentInfoTest.spec.js)
Testcases use pages (i.e: CollectAgentInfoPage.po.js) to communicate with corresponded page/element



SETUP

Use npm to install Protractor globally with: $npm install -g protractor

webdriver-manager is a helper tool included in protractor.
Download the necessary binaries with: $webdriver-manager update



CONGIGURE THE TESTS


Test are configured using conf.js file (e2e/conf/conf.js)


 - Browser configuration: change name in 'browserName' field:
 	for CHROME:  'browserName': 'chrome'

 	for FIREFOX: 'browserName': 'firefox'


 	CHROME has additional options for running in headless mode:
        chromeOptions: {
            args: [
                '--start-maximized',
                "--headless", 
                "--disable-gpu"
            ]
        }


  - Maximized screen while running the tests:
    For CHROME : use option '--start-maximized'

    FOR FIREFOX : as there is an issue with default method, workaround is used.
    There is a Javascript code in "onPrepare" section that sets browser screen maximised.
    For CHROME tests this script has to be commented out.


    URL can be configured in "params" section:
	    params: {
        	url: {
            	homeAE : 'http://propertyfinder.ae'
        	}    
        }

    
    Test suites are described in section "suites".




RUNNING THE TESTS

- Open a new console. 
Start up a server with: $webdriver-manager start
(Hint: you may need to run $webdriver-manager update, in oder to obtain the last version of driver)

- Open another console and navigate to folder where the current project conf.js file is,
i.e. PropertyFinderTestProject/e2e/conf
Run the tests : $protractor conf.js --suite home,findAgent,collectAgentInfo




TEST RESULTS

Test reports and screenshot are generated with Jasmine plugin "jasmine-reporter"
(See INFO AND PREEQUISITES)

Test results are stored in e2e/results/ folder:

e2e/results/screenshots holds both HTML-report of passed/failed test,
and screenshots of all test (passed and failed)

e2e/results/agent_screenshots holds screenshots (agent info in English and Arabic)
of testcase CollectAgentInfoTest

e2e/results/agent_txt_info holds text file (collected info about agent)
of testcase CollectAgentInfoTest


Every new test run rewrites the old reports.
