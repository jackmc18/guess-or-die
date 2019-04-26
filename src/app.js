import { checkGuess, words } from './check-guess.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');

let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
console.log(randomWord);
let emptyWordArray = Array(randomWord.length);
let answerWordArray = randomWord.split('');

submitButton.addEventListener('click', () => {
  const indices = checkGuess(randomWord, userGuess.value);
  for(let i = 0; i < indices.length; i++) {
    emptyWordArray[indices[i]] = userGuess.value;
  }
  console.log(emptyWordArray);
  if(emptyWordArray.toString('') === answerWordArray.toString('')) {
    console.log('you won');
  }
});

