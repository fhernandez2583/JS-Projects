let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
//console.log(input.length);
for (let indexInput = 0; indexInput <= input.length; indexInput++) {
  //console.log(indexInput);
  if (input[indexInput] === "e") {
    resultArray.push(input[indexInput]);
  }
  if (input[indexInput] === "u") {
    resultArray.push(input[indexInput]);
  }
  for (let indexVowels = 0; indexVowels < vowels.length; indexVowels++) {
    //console.log(indexVowels);
    if (input[indexInput] === vowels[indexVowels]) {
      //console.log(input[indexInput])
      resultArray.push(input[indexInput]);
    }
  }
}
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
