$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/search_Restaurants.feature");
formatter.feature({
  "name": "Restaurants search action using post code",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "steps to be executed before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User lanches browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_lanches_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.just-eat.co.uk/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for restaurants using valid post code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter valid post code in search field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.enter_valid_post_code_in_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see list of restaurants",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_should_be_able_to_see_list_of_restaurants()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "steps to be executed before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User lanches browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_lanches_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.just-eat.co.uk/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for restaurants using invalid post code",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Enter invalid post code in search field",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.enter_invalid_post_code_in_search_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_should_get_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "steps to be executed before each scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User lanches browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_lanches_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"https://www.just-eat.co.uk/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_opens_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search for restaurants with post code field empty",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.user_should_get_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinitions.close_the_Browser()"
});
formatter.result({
  "status": "passed"
});
});