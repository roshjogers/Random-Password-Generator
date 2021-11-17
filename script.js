// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables

var numbers = "01223456789";
var numbersArray =numbers.split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray =lowercase.split("");
var uppercase = lowercase.toUpperCase();
var uppercaseArray = uppercase.split("");
var specChar = "~`!@#$%^&*()_-+={[}]|:;\\'<,>.\",?/";
var specCharArray = specChar.split("");
var passwordArray = []



// Password Generator Function

function generatePassword() {

// Password Length
  var passwordLength = prompt("Password Length (Must choose number between 8-128)");

// Returns error if password is too short
    if (passwordLength < 8 || passwordLength > 128) {

      alert("Must enter number betwen 8 and 128")
  
        if (confirm("Would you like to restart?") ) {
  
          generatePassword();
        }
        
    } else {
 
// Lowercase Letter Option      
  var lowercaseOption = confirm("Do you want lowercase letters in the password?");

    if (lowercaseOption === true ) {
      passwordArray.concat(lowercaseArray)
    }

// Uppercase Letter Option
  var uppercaseOption = confirm("Do you want uppercase letters in the password?");

    if (uppercaseOption === true ) {
      passwordArray.concat(uppercaseArray)
    }

// Special Character Option        
  var specialCharactersOption = confirm("Do you want special characters in the password?");

    if (specialCharactersOption === true ) {
      passwordArray.concat(specCharArray)
    }
  }

// For Loop
  
  for (var i = 0; i < passwordLength; i++) {
    password += passwordArray[i]
  }

  return password;

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
