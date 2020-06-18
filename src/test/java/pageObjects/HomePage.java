package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
	
	public WebDriver driver;
	
	//Constructor for HomePage
	public HomePage(WebDriver driver){
		this.driver = driver;
	}

	// Elements
	By post_code_text = By.xpath("//input[@name='postcode']");
	By search_button = By.xpath("//button[@type='submit']");
	By error_message = By.xpath("//div[@id='errorMessage']");
	
	// Method: To enter post code in search box
	public WebElement enter_post_code(){
		return driver.findElement(post_code_text);
	}
	
	//Method: To click on search button
	public WebElement click_search_button(){
		return driver.findElement(search_button);
	}
	
	// Method: To display error message
	public WebElement display_error_msg(){
		return driver.findElement(error_message);
	}
	
}
