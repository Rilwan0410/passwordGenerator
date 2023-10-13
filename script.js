// Assignment Code
let generateBtn = document.querySelector("#generate");

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

//  function to generate password
function generatePassword() {
  const pw = [];
  for (let i = 0; i < 20; i++) {
    pw.push(characterArray[Math.floor(characterArray.length * Math.random())]);
  }
  return pw.join("");
}



console.log(generatePassword());

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
