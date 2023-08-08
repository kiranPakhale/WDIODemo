Feature: Demo feature

   @smoke
    Scenario Outline: Run first demo feature
        Given Google page is opend
        When Search with <searchItem>
        Then Click on the first search result
        Then URL should  match <ExpectedURL>

        Examples:
            | TestID     | searchItem | ExpectedURL         |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |