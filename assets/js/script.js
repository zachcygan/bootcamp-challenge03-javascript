// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  confirm('Your response has been recorded.');
  
  var passLowerCase = confirm(`Would you like your password to contain lowercase letters?`);
  confirm('Your response has been recorded.');
  
  var passUpperCase = confirm(`Would you like your password to contain uppcase letters?`);
  confirm('Your response has been recorded.');
  
  var passNumeric = confirm(`Would you like to have numeric values in your password?`);
  confirm('Your response has been recorded.');

  var passSpecChar = confirm(`Would you like special characters in your password.`);
  confirm('Your response has been recorded.');

  var stringContainer = ''

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
  // 
  for (var i = 0; i < passLength; i++) {
    var randomNumber = Math.floor(Math.random()*stringContainer.length)
    newPass += stringContainer.charAt(randomNumber)
  }

  if (!passLowerCase && !passUpperCase && !passNumeric && !passSpecChar) {
    return alert(`Error: Please select at least 1 of the previous criteria.`)
  }

  return newPass;
}


