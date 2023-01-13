// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterLower = `abcdefghijklmnopqrstuvwxyz`
var characterUpper = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var characterNumber = `0123456789`
var characterAll = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-?[]"`
var characterNoSpecialChar = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`
var characterNoNumber = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-?[]"`
var characterNoCaps = `abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-?[]"`
var characterNoLower = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-?[]"`

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

  while (passLength < 8 || passLength > 128) {
    passLength = prompt(`Error. Please enter a valid number. It must be between 8 and 128 characters long.`);
  } 
  confirm('Your response has been recorded.');
  
  var passLowerCase = confirm(`Would you like your password to contain lowercase letters?`);
  confirm('Your response has been recorded.');
  
  var passUpperCase = confirm(`Would you like your password to contain uppcase letters?`);
  confirm('Your response has been recorded.');
  
  var passNumeric = confirm(`Would you like to have numeric values in your password?`);

  var passSpecChar = confirm(`Would you like special characters in your password.`);

  if (passLowerCase && passUpperCase && passNumeric && passSpecChar) {
    for (var i = 0; i < passLength; i++) {
      var randomNumber = Math.floor(Math.random()*passLength+1)
      newPass += characterAll.charAt(randomNumber)
    }

    return newPass;
  }

  if (passLowerCase && passUpperCase && passNumeric && !passSpecChar) {
    for (var i = 0; i < passLength; i++) {
      var randomNumber = Math.floor(Math.random()*passLength+1)
      newPass += characterNoSpecialChar.charAt(randomNumber)
    }
  }


  // console.log(newPass)
}


