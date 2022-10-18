// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Password Characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getRandomInt(max) {
  return Math.ceil(Math.random() * max)
}

// Password Generator
function generatePassword() {
  var passwordLength = prompt('How long would you like your password? (8-128)', '12')//get this string to be recognized as numbers
  var length = parseInt(passwordLength)
  if (length <= 7) {
    confirm('The password must be within 8-128 characters')
    return
  }
  if (length > 128) {
    confirm('The password must be within 8-128 characters')
    return
  }

  var useUppercase = confirm('Would you like to use uppercase leeters?')
  var useLowercase = confirm('Would you like to use lowercase leeters?')
  var useNumbers = confirm('Would you like to use numbers?')
  var useSpecialChars = confirm('Would you like to use special characters?')


  // If statements to add what the user wants to the password
  var potentialChars = []
  if (useLowercase) {
    potentialChars = potentialChars.concat(lowerCase)
  }

  if (useUppercase) {
    potentialChars = potentialChars.concat(upperCase)
  }

  if (useNumbers) {
    potentialChars = potentialChars.concat(numbers)
  }

  if (useSpecialChars) {
    potentialChars = potentialChars.concat(special)
  }

  //Code to require at least one character type

  if (useLowercase, useUppercase, useNumbers, useSpecialChars == false) {
    confirm('You must selcet at least one type of character')
    return
  }

  //Password length

  var password = ''
  for (var i = 0; i < passwordLength; i++) {
    password = password + potentialChars[getRandomInt(potentialChars.length)]
  }


  return password

}

