# Homework-3 - Password-Generator

My goal in this project was to create a password generator to show my understanding of javascript. This is the biggest task I have had to undertake so far in this course, and as such I found it particularly difficult and rewarding. I was guided by the following - 

# User Story:

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page.

# What I Did:

1. created constants for character choices as they will always stay the same
2. created lets for user choices, as they will differ. also defaulted them to false globally.
3. created various local variables.
4. utilised window.prompt and window.confirm to allow user input.
5. utilised the window.alert function to convey error message.
6. utilised built-in math object.
7. Made sure that final password would contain all character options selected by user, amd that the loop would stop when it reached the desired password length.

# Link to Deployed Application:

https://wizard-mate.github.io/Password-Generator/

# Screenshots:

1. Screenshot of my completed JS document.

![Screenshot of my completed JS document.](/assets/images/JS.png?raw=true "JS")

2. Screenshots of the Website deployed as a GitHub Page.

![Screenshot of the Website deployed as a GitHub Page.](/assets/images/Deployed-Website.png?raw=true "Deployed")

![Screenshot of the Website deployed as a GitHub Page 2.](/assets/images/Deployed-Website2.png?raw=true "Deployed 2")