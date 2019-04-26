import { checkGuess, words } from './check-guess.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');
const blanks = document.getElementById('blanks');

let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
console.log(randomWord);
let emptyWordArray = Array(randomWord.length);
let answerWordArray = randomWord.split('');


for(let i = 0; i < randomWord.length; i++) {
  let blankDiv = document.createElement('div');
  blankDiv.classList.add('blank');
  blanks.appendChild(blankDiv);
  console.log('add div');
}

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

