$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/c.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    },
    {
      "line": 20,
      "value": "#Feature: Title of your feature"
    },
    {
      "line": 21,
      "value": "#I want to use this template for my feature file"
    },
    {
      "line": 22,
      "value": "#"
    },
    {
      "line": 23,
      "value": "#@tag1"
    },
    {
      "line": 24,
      "value": "#Scenario: Title of your scenario"
    },
    {
      "line": 25,
      "value": "#Given I want to write a step with precondition"
    },
    {
      "line": 26,
      "value": "#And some other precondition"
    },
    {
      "line": 27,
      "value": "#When I complete action"
    },
    {
      "line": 28,
      "value": "#And some other action"
    },
    {
      "line": 29,
      "value": "#And yet another action"
    },
    {
      "line": 30,
      "value": "#Then I validate the outcomes"
    },
    {
      "line": 31,
      "value": "#And check more outcomes"
    },
    {
      "line": 32,
      "value": "#"
    },
    {
      "line": 33,
      "value": "#@tag2"
    },
    {
      "line": 34,
      "value": "#Scenario Outline: Title of your scenario outline"
    },
    {
      "line": 35,
      "value": "#Given I want to write a step with \u003cname\u003e"
    },
    {
      "line": 36,
      "value": "#When I check for the \u003cvalue\u003e in step"
    },
    {
      "line": 37,
      "value": "#Then I verify the \u003cstatus\u003e in step"
    },
    {
      "line": 38,
      "value": "#"
    },
    {
      "line": 39,
      "value": "#Examples:"
    },
    {
      "line": 40,
      "value": "#| name  | value | status  |"
    },
    {
      "line": 41,
      "value": "#| name1 |     5 | success |"
    },
    {
      "line": 42,
      "value": "#| name2 |     7 | Fail    |"
    }
  ],
  "line": 44,
  "name": "opencart",
  "description": "",
  "id": "opencart",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 48,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "opencart;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@TC01"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "user is not logged in and is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "user enters invalid username",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "user enters invalid password",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "a warning message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "invalidlogin.user_is_not_logged_in_and_is_on_the_login_page()"
});
formatter.result({
  "duration": 20419757400,
  "status": "passed"
});
formatter.match({
  "location": "invalidlogin.user_enters_invalid_username()"
});
formatter.result({
  "duration": 328731300,
  "status": "passed"
});
formatter.match({
  "location": "invalidlogin.user_enters_invalid_password()"
});
formatter.result({
  "duration": 152328300,
  "status": "passed"
});
formatter.match({
  "location": "invalidlogin.user_clicks_login_button()"
});
formatter.result({
  "duration": 1713800000,
  "status": "passed"
});
formatter.match({
  "location": "invalidlogin.a_warning_message_is_displayed()"
});
formatter.result({
  "duration": 142941600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 54,
      "value": "#"
    }
  ],
  "line": 56,
  "name": "Login with valid credentials",
  "description": "",
  "id": "opencart;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@TC02"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user enters valid username",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "user enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user clicks login button to login",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "account page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "login.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 18502080400,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_valid_username()"
});
formatter.result({
  "duration": 650213100,
  "status": "passed"
});
formatter.match({
  "location": "login.user_enters_valid_password()"
});
formatter.result({
  "duration": 170251100,
  "status": "passed"
});
formatter.match({
  "location": "login.user_clicks_login_button_to_login()"
});
formatter.result({
  "duration": 2884025900,
  "status": "passed"
});
formatter.match({
  "location": "login.account_page_is_displayed()"
});
formatter.result({
  "duration": 550782100,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "add product to wishlist",
  "description": "",
  "id": "opencart;add-product-to-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@TC03"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "user is on account page and wants to add a product to wishlist",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "user navigates to product page by selecting a product",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "user clicks add to wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "product is added to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "addtowishlist.user_is_on_account_page_and_wants_to_add_a_product_to_wishlist()"
});
formatter.result({
  "duration": 21560358500,
  "status": "passed"
});
formatter.match({
  "location": "addtowishlist.user_navigates_to_product_page_by_selecting_a_product()"
});
formatter.result({
  "duration": 2400277000,
  "status": "passed"
});
formatter.match({
  "location": "addtowishlist.user_clicks_add_to_wishlist()"
});
formatter.result({
  "duration": 357878300,
  "status": "passed"
});
formatter.match({
  "location": "addtowishlist.product_is_added_to_wishlist()"
});
formatter.result({
  "duration": 453446400,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "compare product in wishlist",
  "description": "",
  "id": "opencart;compare-product-in-wishlist",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@TC04"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "user is on account page and wants to compare a product in the wishlist",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "user clicks wishlist",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "user compares product in wishlist",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "selected product is compared",
  "keyword": "Then "
});
formatter.match({
  "location": "comparewishlist.user_is_on_account_page_and_wants_to_compare_a_product_in_the_wishlist()"
});
formatter.result({
  "duration": 23555657400,
  "status": "passed"
});
formatter.match({
  "location": "comparewishlist.user_clicks_wishlist()"
});
formatter.result({
  "duration": 2776565200,
  "status": "passed"
});
formatter.match({
  "location": "comparewishlist.user_compares_product_in_wishlist()"
});
formatter.result({
  "duration": 3500041100,
  "status": "passed"
});
formatter.match({
  "location": "comparewishlist.selected_product_is_compared()"
});
formatter.result({
  "duration": 106000,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "user want to edit address",
  "description": "",
  "id": "opencart;user-want-to-edit-address",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 80,
      "name": "@TC05"
    }
  ]
});
formatter.step({
  "line": 82,
  "name": "user is on account page and wants to edit address",
  "keyword": "Given "
});
formatter.step({
  "line": 83,
  "name": "user navigates to my account page to edit address",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "user clicks on address book",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "user changes the address",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "user clicks submit to apply changes",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "address of user is changed",
  "keyword": "Then "
});
formatter.match({
  "location": "editaddress.user_is_on_account_page_and_wants_to_edit_address()"
});
formatter.result({
  "duration": 23494278500,
  "status": "passed"
});
formatter.match({
  "location": "editaddress.user_navigates_to_my_account_page_to_edit_address()"
});
formatter.result({
  "duration": 1978044000,
  "status": "passed"
});
formatter.match({
  "location": "editaddress.user_clicks_on_address_book()"
});
formatter.result({
  "duration": 3233554000,
  "status": "passed"
});
formatter.match({
  "location": "editaddress.user_changes_the_address()"
});
formatter.result({
  "duration": 4307849500,
  "status": "passed"
});
formatter.match({
  "location": "editaddress.user_clicks_submit_to_apply_changes()"
});
formatter.result({
  "duration": 3332170100,
  "status": "passed"
});
formatter.match({
  "location": "editaddress.address_of_user_is_changed()"
});
formatter.result({
  "duration": 56349300,
  "status": "passed"
});
formatter.scenario({
  "line": 90,
  "name": "enquiry",
  "description": "",
  "id": "opencart;enquiry",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 89,
      "name": "@TC06"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "user is on account page to enquire",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "user clicks contact us",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "user enters queries",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "user clicks submit",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "query is submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "enquiry.user_is_on_account_page_to_enquire()"
});
formatter.result({
  "duration": 25172951700,
  "status": "passed"
});
formatter.match({
  "location": "enquiry.user_clicks_contact_us()"
});
formatter.result({
  "duration": 2009280600,
  "status": "passed"
});
formatter.match({
  "location": "enquiry.user_enters_queries()"
});
formatter.result({
  "duration": 282232500,
  "status": "passed"
});
formatter.match({
  "location": "enquiry.user_clicks_submit()"
});
formatter.result({
  "duration": 6087859900,
  "status": "passed"
});
formatter.match({
  "location": "enquiry.query_is_submitted()"
});
formatter.result({
  "duration": 555552000,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "logout",
  "description": "",
  "id": "opencart;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@TC07"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "user is on account page",
  "keyword": "Given "
});
formatter.step({
  "line": 100,
  "name": "user clicks my account",
  "keyword": "When "
});
formatter.step({
  "line": 101,
  "name": "user clicks logout",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "user clicks continue",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "user is logged out of his account",
  "keyword": "Then "
});
formatter.match({
  "location": "logout.user_is_on_account_page()"
});
formatter.result({
  "duration": 29283439700,
  "status": "passed"
});
formatter.match({
  "location": "logout.user_clicks_my_account()"
});
formatter.result({
  "duration": 140559200,
  "status": "passed"
});
formatter.match({
  "location": "logout.user_clicks_logout()"
});
formatter.result({
  "duration": 3063877200,
  "status": "passed"
});
formatter.match({
  "location": "logout.user_clicks_continue()"
});
formatter.result({
  "duration": 2524450600,
  "status": "passed"
});
formatter.match({
  "location": "logout.user_is_logged_out_of_his_account()"
});
formatter.result({
  "duration": 92211000,
  "status": "passed"
});
});