// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Generator Function

function generatePassword() {

// Variables

  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specCharArray = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?"];
  var passwordArray = [];
  
  console.log(numbersArray);
  console.log(lowercaseArray);
  console.log(uppercaseArray);
  console.log(specCharArray);

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
      lowercaseArray.concat(passwordArray);
    }

// Uppercase Letter Option
  var uppercaseOption = confirm("Do you want uppercase letters in the password?");

    if (uppercaseOption === true ) {
      uppercaseArray.concat(passwordArray);
    }

// Special Character Option        
  var specialCharactersOption = confirm("Do you want special characters in the password?");

    if (specialCharactersOption === true ) {
      specCharArray.concat(passwordArray);
    }
  }

  console.log(passwordArray);

  var password = "";

// For Loop
  
  for (var i = 0; i < passwordLength; i++) {
  
    password += passwordArray[Math.floor(Math.random() * passwordArray.length)];

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
