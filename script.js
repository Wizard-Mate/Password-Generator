// Assignment Code
var generateBtn = document.querySelector("#generate");

// constants for inclusion possibilities
const numbers = "0123456789";
const specialChar = "!@#$%^&*()-_=+[]{}|;:',.<>/`~";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// setting the default boolean values to false
let wantsLower = false;
let wantsUpper = false;
let wantsSpec = false;
let wantsNum = false;

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate Password function
// add prompt asking for password length input. if cancel is clicked, show "Cancelled" in the password field.
function generatePassword() {
  var passwordLength = window.prompt("Please choose a password length between 8 & 128 characters long.");
  console.log(passwordLength)
  console.log(typeof (passwordLength))
  if (!passwordLength) {
    return "Cancelled"
  }
  // if incorrect number is added, an alert will tell the user.
  else if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("Invalid entry - Password must be between 8 & 128 characters long!")
    // text area will show:
    return "Invalid Entry, Please Try Again."
  }
// asks the user which characters they want in their final password. console log from me confirming boolean response of window.confirm, troubleshooting from when code didnt work.
      var finalPassword = "";
      var charSet = "";
      wantsLower = window.confirm("Would you like to include lowercase characters?");
      wantsUpper = window.confirm("Would you like to include uppercase characters?");
      wantsSpec = window.confirm("Would you like to include special characters?");
      wantsNum = window.confirm("Would you like to include numbers characters?");
      console.log(typeof (wantsNum))
      console.log(wantsNum)
    // adding selections for inclusion in final password
        if (wantsLower) {
          charSet += lowerCase.concat(charSet);
        }
        if (wantsUpper) {
          charSet += upperCase.concat(charSet);
        }
        if (wantsSpec) {
          charSet += specialChar.concat(charSet);
        }
        if (wantsNum) {
          charSet += numbers.concat(charSet);
        }
  // creating the password. 
    while (finalPassword.length < passwordLength) {
      var doN = Math.floor(Math.random() * charSet.length);
      var doM = charSet.charAt(doN);
      finalPassword = finalPassword + doM;
    }

  return finalPassword;
  }