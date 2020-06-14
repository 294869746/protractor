var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter=require('jasmine-spec-reporter').SpecReporter;    //控制台报告

exports.config = {
    framework: 'jasmine',

    specs:[
        './page-specs/getProjectList.js'
    ],

    capabilities: {
        browserName: 'firefox',
    },

    onPrepare: function() {

        browser.waitForAngularEnabled(false);

        //html报告的配置
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath:'./reporter/html',
                takeScreenshots:true,
                takeScreenshotsOnlyOnFailures: true,
                filePrefix:'index',
                fileNameDateSuffix: true,
                cleanDestination:false
            }),

        );

        //控制台报告的配置
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayStacktrace: true
                }
            }));

    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
    }
}