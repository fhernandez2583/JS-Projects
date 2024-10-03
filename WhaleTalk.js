//My phase to be translated
let input = "Hello Water World!";
//Setup for output
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];
//console.log(input.length);
for (let indexInput = 0; indexInput <= input.length; indexInput++) {
    //console.log(indexInput);
    for (let indexVowels = 0; indexVowels < vowels.length; indexVowels++) {
      //console.log(indexVowels);
      if (input[indexInput] === vowels[indexVowels]){
        //console.log(input[indexInput])
      }
    }
  }