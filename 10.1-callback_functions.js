//1
function printString(str1) {
  console.log(str1);
}

function isString(str, printString) {
  if (typeof str === "string") {
    printString(str);
  }
}

isString("Naama", printString);
isString(23, printString);

//2
function createDashes(str2) {
  const myArray = str2.split(" ");
  const joined = myArray.join("-");
  return joined;
}

function firstWordUpperCase(str, callbackFunc1) {
  let indexOfSpace = str.indexOf(" ");
  let firstWord = str.substr(0, indexOfSpace);
  let sentenceWithFirstAsUpperCase = str.replace(
    firstWord,
    firstWord.toUpperCase()
  );
  let returnedFromCallback = callbackFunc1(sentenceWithFirstAsUpperCase);
  console.log(returnedFromCallback);
}

firstWordUpperCase("Hi! My name is", createDashes);

//3
function addName(sentence) {
  const joined = sentence.concat(" ", "Slim Shady");
  return joined;
}

firstWordUpperCase("Hi! My name is", addName);

//4
function addWordsToLowerCase(arr, callbackFunc2) {
  let joinedWords = arr.join(" ");
  let returnedFromCallback = callbackFunc2(joinedWords);
  console.log(returnedFromCallback);
}

function toLower(sentence) {
  const sentenceToLower = sentence.toLowerCase();
  return sentenceToLower;
}

const quote = [
  "Be",
  "The",
  "Change",
  "that",
  "You",
  "Wish",
  "to",
  "See",
  "in",
  "the",
  "World",
];

addWordsToLowerCase(quote, toLower);
