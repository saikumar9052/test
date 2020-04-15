#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
#@tag
#Feature: Title of your feature
  #I want to use this template for my feature file
#
  #@tag1
  #Scenario: Title of your scenario
    #Given I want to write a step with precondition
    #And some other precondition
    #When I complete action
    #And some other action
    #And yet another action
    #Then I validate the outcomes
    #And check more outcomes
#
  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step
#
    #Examples: 
      #| name  | value | status  |
      #| name1 |     5 | success |
      #| name2 |     7 | Fail    |
      
     Feature: opencart
     
     
@TC01
Scenario: Login with invalid credentials
Given user is not logged in and is on the login page
When user enters invalid username
And user enters invalid password
And user clicks login button
Then a warning message is displayed
     #
@TC02
Scenario: Login with valid credentials
Given user is on the login page
When user enters valid username
And user enters valid password
And user clicks login button to login
Then account page is displayed


@TC03
Scenario: add product to wishlist
Given user is on account page and wants to add a product to wishlist
When user navigates to product page by selecting a product
And user clicks add to wishlist
Then product is added to wishlist


@TC04
Scenario: compare product in wishlist
Given user is on account page and wants to compare a product in the wishlist
And user clicks wishlist
When user compares product in wishlist
Then selected product is compared


@TC05
Scenario: user want to edit address
Given user is on account page and wants to edit address
And user navigates to my account page to edit address
When user clicks on address book
And user changes the address
And user clicks submit to apply changes
Then address of user is changed

@TC06
Scenario: enquiry
Given user is on account page to enquire
And user clicks contact us
When user enters queries
And user clicks submit
Then query is submitted

@TC07
Scenario: logout
Given user is on account page
When user clicks my account
And user clicks logout
And user clicks continue
Then user is logged out of his account
        
 
