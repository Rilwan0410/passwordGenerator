// Assignment Code
let generateBtn = document.querySelector("#generate");

// Criteria Variables
const pwLength = document.getElementById("password-length");
const hasSpecialCharacters = document.getElementById("password-special");
const hasUppercase = document.getElementById("password-uppercase");
const hasLowercase = document.getElementById("password-lowercase");
const hasNumeric = document.getElementById("password-numbers");
const criteriaList = document.querySelector(".password-criteria");

//Showing criteria list
let showCriteria = false;

function showListCriteria() {
  showCriteria = true;

  if (showCriteria) {
    criteriaList.classList.remove("hidden");
  }
}

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
const specialCharacters = [
  "!",
  "*",
  "&",
  "$",
  "%",
  "#",
  "@",
  "?",
  "~",
  "-",
  "_",
];

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

  for (i = 0; i < word.length; i += 3) {
    word[Math.floor(Math.random() * i + 1)] =
      numericArray[Math.floor(Math.random() * numericArray.length)];
  }

  console.log(word.join(""));
  return word.join("");
}
function addSpecial(word) {
  word = word.split("");

  if (word.length < 15) {
    word[Math.floor(Math.random() * word.length)] =
      specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    console.log(word.join(""));
  } else {
    for (i = 0; i < word.length; i += 5) {
      word[Math.floor(Math.random() * i + 4)] =
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  }

  console.log(word.join(""));
  return word.join("");
}
function addUppercase(word) {
  word = word.split("");

  for (i = 0; i < word.length; i++) {
    word[Math.floor(Math.random() * i)] =
      word[Math.floor(Math.random() * i)].toUpperCase();
  }

  console.log(word.join(""));
  return word.join("");
}
function addLowercase(word) {
  word = word.split("");

  for (i = 0; i < word.length; i++) {
    word[Math.floor(Math.random() * i)] =
      numericArray[Math.floor(Math.random() * numericArray.length)];
  }

  console.log(word.join(""));
  return word.join("");
}

addSpecial(generatePassword(20));

// Write password to the #password input
function writePassword() {
  let password = generatePassword(pwLength.value);
  let passwordText = document.querySelector("#password");

  if (showCriteria) {
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

    if (hasUppercase.checked) {
      password = addUppercase(password);
    }

    if (hasNumeric.checked) {
      password = addNumeric(password);
    }

    if (hasSpecialCharacters.checked) {
      password = addSpecial(password);
    }
  }

  showListCriteria();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
