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
  var passwordLength = prompt("Password Length (Must choose number between 8-128)");



    if ( passwordLength.length >= 8 && passwordLength.length <= 128 ) {

      alert("Must enter number betwen 8 and 128")
  
        if ( confirm("Would you like to restart?") ) {
  
          generatePassword();
        }
        
    } else {
    
      var lowercaseOption = prompt("Do you want lowercase letters in the password? (Must type Yes or No)");

        if (lowercaseOption === true ) {
          passwordArray.concat(lowercaseArray)
        }

      var uppercaseOption = prompt("Do you want uppercase letters in the password? (Must type Yes or No)");

        if (uppercaseOption === true ) {
          passwordArray.concat(uppercaseArray)
        }

      var specialCharactersOption = prompt("Do you want special characters in the password? (Must type Yes or No)");

        if (specialCharactersOption === true ) {
          passwordArray.concat(specCharArray)
        }
    }
    var password = "";
  
    

// Insert For Loop
  
// for (var i = 0; i < passwordLength.length; i++) {
// password += [i] 
// }

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
