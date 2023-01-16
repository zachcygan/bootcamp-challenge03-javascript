// Assignment Code
var generateBtn = document.querySelector("#generate");

// all possible characters for the password
var characterLower = `abcdefghijklmnopqrstuvwxyz`
var characterUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var characterNumber = `0123456789`
var characterSpecialChar = `!@#$%^&*()-?[]"`

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var newPass = ``;

  var passLength = prompt(`Please input how long you would like your password to be. It must be between 8 and 128 characters long.`);
  passLength = parseInt(passLength)

  if (!(passLength >= 8 && passLength <= 128)) {
    return alert(`Error. Please enter a valid number. It must be between 8 and 128 characters long.`);
  } 
  
  // prompts the user if they would like lowercase, uppercase, numbers, and special characters in their password
  var passLowerCase = confirm(`Would you like your password to contain lowercase letters?`);
  var passUpperCase = confirm(`Would you like your password to contain uppcase letters?`);
  var passNumeric = confirm(`Would you like to have numeric values in your password?`);
  var passSpecChar = confirm(`Would you like special characters in your password.`);
  
  confirm('Your responses have been recorded and your password has been generated.');

  // empty string container to hold all of the users possible characters
  var stringContainer = ''

  // the if statements determine what the user wants in their password then stores possible strings inside stringContainer
  if (passLowerCase) {
    stringContainer += characterLower;
  } 

  if (passUpperCase) {
    stringContainer += characterUpper;
  }

  if (passNumeric) {
    stringContainer += characterNumber;
  }

  if (passSpecChar) {
    stringContainer += characterSpecialChar;
  }

  // Found on https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
  // Used as a template for generating a password. Used their layout and changed to my variables
  // charAt will select the character that is in the randomNumber location
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random()*stringContainer.length)
    newPass += stringContainer.charAt(randomNumber)
  }

  // if the user says no to all prompt, will let the user know they must select at least one criteria
  if (!passLowerCase && !passUpperCase && !passNumeric && !passSpecChar) {
    return alert(`Error: Please select at least 1 of the previous criteria.`)
  }

  // returns newPass
  return newPass;
}


