import { checkGuess, words } from './check-guess.js';
import createBlanks from './create-blanks.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');
const blanksParent = document.getElementById('blanks');
const personParent = document.getElementById('person');
const wrongCharParent = document.getElementById('wrong-char');
const resultParent = document.getElementById('results');

let random = Math.floor(Math.random() * words.length);
let randomWord = words[random];
console.log(randomWord);
let emptyWordArray = Array(randomWord.length);
let answerWordArray = randomWord.split('');
let wrongScore = 0;

createBlanks(blanksParent, randomWord);

submitButton.addEventListener('click', () => {
  const indices = checkGuess(randomWord, userGuess.value);
  if(indices.length) {
    for(let i = 0; i < indices.length; i++) {
      emptyWordArray[indices[i]] = userGuess.value;
    }
    for(let i = 0; i < blanksParent.children.length; i++) {
      if(emptyWordArray[i] !== undefined) {
        blanksParent.children[i].classList.remove('blank');
        blanksParent.children[i].textContent = emptyWordArray[i];
      }
    }
  }
  else {
    handleAddWrongChar(wrongCharParent, userGuess.value);
    for(let i = 0; i < personParent.children.length; i++) {
      if(i === wrongScore) {
        personParent.children[i].classList.remove('hidden');
      }
    }
    wrongScore++;
    if(wrongScore === 6) {
      const loseSpan = document.createElement('span');
      loseSpan.textContent = ' YOU LOSE!';
      resultParent.appendChild(loseSpan);
      submitButton.disabled = true;
    }
  }

  if(emptyWordArray.toString('') === answerWordArray.toString('')) {
    const winSpan = document.createElement('span');
    winSpan.textContent = ' YOU WIN!';
    resultParent.appendChild(winSpan);
    submitButton.disabled = true;
  }
});

function handleAddWrongChar(parent, character) {
  const span = document.createElement('span');
  span.textContent = character + ' ';
  parent.appendChild(span);
}

