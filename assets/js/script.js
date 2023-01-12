// Assignment Code
var generateBtn = document.querySelector("#generate");
var symbols = [];

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
 
  if (passLength < 8 || passLength > 128) {
    var passLength = prompt(`Error. Please enter a valid number. It must be between 8 and 128 characters long.`);
    confirm('Your response has been recorded.');
  } else {
    confirm('Your response has been recorded.');
  }
  
  // var criteriaCharacterTypes = prompt(`What character types would you like included in your password? Available options are: !, ", #, $, %, &, ', (, ), *, @, ^, [, ].`);
  var passLowerCase = confirm(`Would you like your password to contain lowercase letters?`);
  confirm('Your response has been recorded.');
  
  var passUpperCase = confirm(`Would you like your password to contain uppcase letters?`);
  confirm('Your response has been recorded.');
  
  var passNumeric = confirm(`Would you like to have numeric values in your password?`);
  if (passNumeric) {
    var passNumericValue = prompt(`How many numeric values would you like in your passoword?`);
    confirm('Your response has been recorded.');
  } else {
    confirm('Your response has been recorded.');
  }

  var passSpecChar  = prompt(`Please select a special character to use in your password. Available options are: !, ", #, $, %, &, ', (, ), *, @, ^, [, ], ?, -.`);
  if (passSpecChar != `!` || passSpecChar != `"` || passSpecChar != `#` || passSpecChar != `$` 
                          || passSpecChar != `%` || passSpecChar != `&` || passSpecChar != "'" 
                          || passSpecChar != `(` || passSpecChar != `)` || passSpecChar != `*`
                          || passSpecChar != `@` || passSpecChar != `^` || passSpecChar != `[`
                          || passSpecChar != `]` || passSpecChar != `?` || passSpecChar != `-`) {
    var passSpecChar  = prompt(`Error. Please select a valid response. Available options are: !, ", #, $, %, &, ', (, ), *, @, ^, [, ], ?, -.`);
  } 

  function generateChars() {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var randomLetters = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(randomLetters)

  }

  return newPass;
}