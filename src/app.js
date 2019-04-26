import { checkGuess, words } from './check-guess.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');

let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
let word = 'javascript';

submitButton.addEventListener('click', () => {
  console.log(randomWord);
  console.log(checkGuess(word, 'j'));
});

