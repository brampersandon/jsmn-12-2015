Feature: Input field
  As a user of this fake form
  I want to submit values
  So that I can analyze form results for businessy purposes

  Scenario: Entering values
    Given I am on the index page
    When I enter "Emma Thomas" in the input field
      And I click "submit"
    Then I should be notified of a successful submission
