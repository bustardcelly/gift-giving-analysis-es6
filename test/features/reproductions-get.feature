Feature: Reproductions GET Request returns JSON list
  
  Scenario: Reproductions instructs Dispatcher
    Given I have 2 Reproductions in the DB
    When I request All Action for Reproductions
    Then The Dispatcher is notified of the Async Event