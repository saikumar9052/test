package com.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class accountpage {
	
	WebDriver driver;
	public accountpage(WebDriver driver) {
	this.driver=driver;}
	public void currency() {
	driver.findElement(By.xpath("*//[@id=\"form-currency\"]/div/button/i")).click();
	}
	public void contactus() {
	driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[1]/a/i")).click();
	}
	public void myaccount() {
	driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[2]/a/span[1]")).click();
	}
	public void wishlist() {
	driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[3]/a/span")).click();
	}
	public void shoppingcart() {
	driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[4]/a/span")).click();
	}
	public void checkout() {
	driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[5]/a/span")).click();
	}
	public void items() {
	driver.findElement(By.xpath("//*[@id=\"cart-total\"]")).click();
	}
	public void euro() {
	driver.findElement(By.xpath("//*[@id=\"form-currency\"]/div/ul/li[1]/button")).click();
	}
	    public void Myaccount() {
	    driver.findElement(By.xpath("/html/body/nav/div/div[2]/ul/li[2]/ul/li[1]/a")).click();
	    }
	    public void logout() {
	    driver.findElement(By.xpath("//*[@id=\"top-links\"]/ul/li[2]/ul/li[5]/a")).click();
	    }
	    public void search(String product) {
	    driver.findElement(By.xpath("/html/body/header/div/div/div[2]/div/input")).sendKeys(product);
	    }
	    public void search_click() {
	    driver.findElement(By.xpath("/html/body/header/div/div/div[2]/div/span/button/i")).click();
	    }
	    public void showlaptops() {
	    driver.findElement(By.xpath("//*[@id=\"menu\"]/div[2]/ul/li[2]/div/a")).click();
	    }
	    public void laptops() {
	    driver.findElement(By.xpath("//*[@id=\"menu\"]/div[2]/ul/li[2]/a")).click();
	    }
	    public void home_btn() {
	    	driver.findElement(By.xpath("/html/body/div[2]/ul/li[1]/a/i")).click();
	    }

}
