Feature: Inventary

    @demo @smoke
    Scenario Outline: Demo Inventary
        Given Login to inventary web app
        Then Inventary page list should <NumberofProducts>
        # Then validate all products have valid price
        

        Examples:
            | TestID     | NumberofProducts|
            | Web_TC002 | 6|
            