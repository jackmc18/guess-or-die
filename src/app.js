import { checkGuess } from './check-guess.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');

const word = 'javascript';

submitButton.addEventListener('click', () => {
  console.log(checkGuess(word, 'j'));
});

