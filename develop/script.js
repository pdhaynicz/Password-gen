// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  
   
  var resultArray = [];
  var userArray = [];
  
  uppercaseLetters [1]
    var numCharacter = prompt ("How many characters between 8 and 128 do you want?");
    var numbers = confirm ("Do you want numbers?");
    var uppercases = confirm ("Do you want uppercases?");
    var lowercases = confirm ("Do you want lowercases?");
    var characters = confirm ("Do you want special characters?");
  
  
  if (numbers){
    resultArray = resultArray.concat(numbers);
    
  }
  
  if (uppercases){
    resultArray = resultArray.concat(uppercaseLetters);
  
  }
  
  if (lowercases){
    resultArray = resultArray.concat(lowercaseLetters);
  
  }
  
  if (characters){
    resultArray = resultArray.concat(specialcharacters);
  }
  console.log(resultArray)
  
  
  for (var i = 0; i < numCharacter; i++) {
        
    userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
    }
  
    return userArray.join("") ;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
