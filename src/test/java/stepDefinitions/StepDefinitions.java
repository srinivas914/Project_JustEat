package stepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;





import pageObjects.HomePage;
import io.cucumber.java.en.*;

public class StepDefinitions {
	
	public WebDriver driver;
	public HomePage hp;
	
	@Given("User lanches browser")
	public void user_lanches_browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+ "//drivers//chromedriver.exe");
		driver = new ChromeDriver();
		System.out.println("Browser lanched");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		hp = new HomePage(driver);
	    
	}

	@When("User opens URL {string}")
	public void user_opens_URL(String string) {
		driver.get(string);
	}

	@When("Enter valid post code in search field")
	public void enter_valid_post_code_in_search_field() {
		hp.enter_post_code().sendKeys("AR51 1AA");
		System.out.println("Valid post code is entered in search box");
	}

	@When("Click on search button")
	public void click_on_search_button() {
		hp.click_search_button().click();
	}

	@Then("User should be able to see list of restaurants")
	public void user_should_be_able_to_see_list_of_restaurants() {
		String Expected_title = "Restaurants and takeaways in Area51, AR51 | Just Eat";
		String Actual_title = driver.getTitle();
		if (Expected_title.equalsIgnoreCase(Actual_title)){
			System.out.println("Results page title is matching");
		}else{
			System.out.println("Results page title is not matching");
		}
	}

	@Then("Close the Browser")
	public void close_the_Browser() {
		driver.quit();
		driver =null;
		System.out.println("Browser is closed");
	}

	@When("Enter invalid post code in search field")
	public void enter_invalid_post_code_in_search_field() {
		hp.enter_post_code().sendKeys("AR51");
		System.out.println("Invalid post code is entered in the search box");
	}

	@Then("User should get error message")
	public void user_should_get_error_message() {
		 String Act_error_msg = hp.display_error_msg().getText();
		 String Exp_error_msg_1 = "Please enter a full, valid postcode";
		 String Exp_error_msg_2 = "Please enter a postcode";
		 if (Act_error_msg.equalsIgnoreCase(Exp_error_msg_1)){
			 System.out.println("test case with invalid post code is passed");
		 }else if (Act_error_msg.equalsIgnoreCase(Exp_error_msg_2)) {
			 System.out.println("Test case with empty post code is passed");
		}else{
			System.out.println("Proper error message is not displayed");
		}

	}


}
