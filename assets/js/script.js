// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialSymbols = [`!`, `"`, `#`, `$`, `%`, `&`, `'`,
                      `(`, `)`, `*`, `@`, `^`, `[`, `]`,
                      `?`, `-`];

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
    var passLength = prompt(`Error. Please enter a valid number. It must be between 8 and 128 characters long.`);
  } 
  confirm('Your response has been recorded.');
  
  var passLowerCase = confirm(`Would you like your password to contain lowercase letters?`);
  confirm('Your response has been recorded.');
  
  var passUpperCase = confirm(`Would you like your password to contain uppcase letters?`);
  confirm('Your response has been recorded.');
  
  var passNumeric = confirm(`Would you like to have numeric values in your password?`);

  var passSpecChar = confirm(`Would you like special characters in your password. Available options are: !, ", #, $, %, &, ', (, ), *, @, ^, [, ], ?, -.`);
}
