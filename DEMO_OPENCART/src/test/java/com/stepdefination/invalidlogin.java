package com.stepdefination;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.pages.homepage;
import com.pages.loginpage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class invalidlogin {
	
	WebDriver driver;
	homepage home;
	loginpage login;

	@Given("^user is not logged in and is on the login page$")
	public void user_is_not_logged_in_and_is_on_the_login_page() throws Throwable {
	// launch_browser("chrome", "https://demo.opencart.com/");
	// driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/a")).click();
	 
	System.setProperty("webdriver.chrome.driver","chromedriver.exe" );
	   driver= new ChromeDriver();
	   driver.get("https://demo.opencart.com/");
	   driver.manage().window().maximize();
	   home = new homepage(driver);
	   home.DEMO_OPENCART_Myaccount();
	   home.DEMO_OPENCART_Login_option();
	   //throw new PendingException();
	}

	@When("^user enters invalid username$")
	public void user_enters_invalid_username() throws Throwable {
	   login = new loginpage(driver);
	   login.enter_emailid("saikunchala@gmail.com");
	   //throw new PendingException();
	}

	@When("^user enters invalid password$")
	public void user_enters_invalid_password() throws Throwable {
	login = new loginpage(driver);
	   login.enter_password("Sai@11");
	   //throw new PendingException();
	}

	@When("^user clicks login button$")
	public void user_clicks_login_button() throws Throwable {
	login = new loginpage(driver);
	   login.click_loginbtn();
	   //throw new PendingException();
	}

	@Then("^a warning message is displayed$")
	public void a_warning_message_is_displayed() throws Throwable {
	String actwarning = driver.findElement(By.xpath("//*[@id=\"account-login\"]/div[1]")).getText();
	String expwarning = "Warning: No match for E-Mail Address and/or Password.";
	assertEquals(expwarning, actwarning);
	{
	System.out.println("warning message is displayed");
	}
	   //throw new PendingException();
	}
	
}
	
	
