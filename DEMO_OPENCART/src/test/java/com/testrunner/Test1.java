package com.testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
		features= {"src/test/resources/features/c.feature"},glue="com.stepdefination",
 plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
        "com.cucumber.listener.ExtentCucumberFormatter:reports/Extentreports/Extentreport.html"}
		)
public class Test1 extends AbstractTestNGCucumberTests {
   
   }