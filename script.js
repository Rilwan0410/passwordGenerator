// Assignment Code
let generateBtn = document.querySelector("#generate");

// Criteria Variables
const pwLength = document.getElementById("password-length");
const hasSpecialCharacters = document.getElementById("password-special");
const hasUppercase = document.getElementById("password-uppercase");
const hasLowercase = document.getElementById("password-lowercase");
const hasNumeric = document.getElementById("password-numbers");

const characterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//--------------------------------------------------------------------------------------------------------------------------------------
console.log(hasUppercase.checked);

//  function to generate password
function generatePassword(num) {
  const pw = [];
  for (let i = 0; i < num; i++) {
    pw.push(characterArray[Math.floor(characterArray.length * Math.random())]);
  }
  return pw.join("");
}

function addNumeric(word) {
  word = word.split("");
  word[Math.floor(Math.random() * word.length)] =
    numericArray[Math.floor(Math.random() * numericArray.length)];

  return word.join("");
}

addNumeric(generatePassword(10));

console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  let password = generatePassword(pwLength.value);
  let passwordText = document.querySelector("#password");

  if (!pwLength.value) {
    alert("Please enter a value");
    return;
  }

  if (pwLength.value > 128) {
    alert("Password cannot exceed 128 characters");
    return;
  }

  if (pwLength.value < 8) {
    alert("Password cannot be less than 8 characters");
    return;
  }

  if (hasNumeric.checked) {
    password = addNumeric(password);
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
