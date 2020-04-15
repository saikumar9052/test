package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class enquirypage {

	 
		 WebDriver driver;
		 By enquiry =By.id("input-enquiry");
		 By submit = By.xpath("/html/body/div[2]/div/div/form/div/div/input");
		 By click_enquirycontinue = By.xpath("/html/body/div[2]/div/div/div/div/a");
		 
		 public enquirypage (WebDriver driver)
		 {
		this.driver=driver;
		 }
		 public void enter_enq(String enquiry1)
		 {
		driver.findElement(enquiry).sendKeys(enquiry1);
		 }
		   
		   public void click_enquirysubmit()
		      {
		          driver.findElement(submit).click();
		      }
		   public void click_enquirycontinue() {
			   
		   driver.findElement(click_enquirycontinue).click();
		 
		    }}

