//Declaring the variables.
var characterLength = 8;
var choiceArr = [];
var specialCharArr = ["!", "@", "%", "$", "{", "&", "£", "*", "^", "#", "/", ")"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// This function prompts for the declared variables and generates the password
function writePassword() {
  var correctPromts = getPrompts(); // calling and assigning the getPrompts function
  var passwordText = document.querySelector("#password");
 // This condition checks if the promts are true
  if(correctPromts){
  var newPassword = generatePassword(); //calling and assigning generatePassword function 
       passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
// This function asks for the user inputs.
 function getPrompts(){
   choiceArr = [];
    characterLength = parseInt(prompt("How long do you want your password to be?"));
    
      if(isNaN(characterLength) || characterLength < 8 || characterLength > 128 ){
          alert("Password length must be a number, and between 8 and 128 characters");
       return false;
       }
       if (confirm("Would you like to include lowercase letters in your password?")){
        choiceArr = choiceArr.concat(lowerCaseArr);
       }
       if(confirm("Would you like to include uppercase letters in your password?")){
        choiceArr = choiceArr.concat(upperCaseArr);
       }
       if(confirm("Would you like to include special characters in your password?")){
        choiceArr = choiceArr.concat(specialCharArr);
       }
       if(confirm("Would you like to include numbers in your password?")){
        choiceArr = choiceArr.concat(numberArr);
       }
      return true;
    } 
    // This function executes the logic and returns the generated password. 
    function generatePassword(){
      var password = "";
      for (var i = 0; i < characterLength; i++){
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
      }
      return password;
      }
