// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var specialChar = "!@#$%^&*()-_=+[]{}|;:',.<>/`~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// function generatePassword() {
//   console.log("Hey! You clicked the button!");

// 1. Prompt the user for the password criteria
  //  a. Password length 8 < 128
  //  b. Lowercase, uppercase, numbers, special characters
// 2. Validate the input.
// 3. Generate the password based on criteria
// 4. Deploy the password to the page. 

//   return "Password coming";
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password function
function generatePassword() {
  var passwordLength = window.prompt("Please choose a password length between 8 & 128 characters long.");
  if (!passwordLength) {
    return
  }
  passwordLength = window.prompt("Please choose a password length between 8 & 128 characters long.");
}

