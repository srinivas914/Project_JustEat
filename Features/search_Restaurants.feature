Feature: Restaurants search action using post code

Background: steps to be executed before each scenario
			Given User lanches browser
			When User opens URL "https://www.just-eat.co.uk/"
			
Scenario: Search for restaurants using valid post code
			And Enter valid post code in search field
			And Click on search button
			Then User should be able to see list of restaurants
			Then Close the Browser

Scenario: Search for restaurants using invalid post code
			And Enter invalid post code in search field
			And Click on search button
			Then User should get error message
			Then Close the Browser
			
Scenario: Search for restaurants with post code field empty
			And Click on search button
			Then User should get error message
			Then Close the Browser			