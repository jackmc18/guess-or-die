import { checkGuess, words } from './check-guess.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');

let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
let emptyWord = Array(randomWord.length);
console.log(randomWord);
console.log(emptyWord);

submitButton.addEventListener('click', () => {
  const indices = checkGuess(randomWord, userGuess.value);
  console.log(indices);
  for(let i = 0; i < indices.length; i++) {
    emptyWord[indices[i]] = userGuess.value;
  }
  console.log(emptyWord);
});

