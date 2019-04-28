import { checkGuess, words } from './check-guess.js';
import createBlanks from './create-blanks.js';

const submitButton = document.getElementById('submit');
const userGuess = document.getElementById('guess');
const blanksParent = document.getElementById('blanks');
const personParent = document.getElementById('person');
const wrongCharParent = document.getElementById('wrong-char-letters');
const wrongCharScore = document.getElementById('wrong-char-score');
const resultParent = document.getElementById('results');
const resetButton = document.getElementById('reset');
const winsScore = document.getElementById('wins');
const lossesScore = document.getElementById('losses');

let randomWord = getRandomWord(words);
console.log(randomWord);
let emptyWordArray = Array(randomWord.length);
let answerWordArray = randomWord.split('');

let wrongScore = 0;
let winsCount = 0;
let lossesCount = 0;

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
    addWrongChar(wrongCharParent, userGuess.value);
    for(let i = 0; i < personParent.children.length; i++) {
      if(i === wrongScore) {
        personParent.children[i].classList.remove('hidden');
      }
    }
    wrongScore++;
    wrongCharScore.textContent = 'Wrong Characters: ' + wrongScore;
    if(wrongScore === 6) {
      const loseSpan = document.createElement('span');
      loseSpan.textContent = ' YOU LOSE!';
      resultParent.appendChild(loseSpan);
      lossesCount++;
      lossesScore.textContent = 'Losses: ' + lossesCount;
      submitButton.disabled = true;
      resetButton.classList.remove('hidden');
    }
  }

  if(emptyWordArray.toString('') === answerWordArray.toString('')) {
    const winSpan = document.createElement('span');
    winSpan.textContent = ' YOU WIN!';
    resultParent.appendChild(winSpan);
    winsCount++;
    winsScore.textContent = 'Wins: ' + winsCount;
    submitButton.disabled = true;
    resetButton.classList.remove('hidden');
  }
});

resetButton.addEventListener('click', () => {
  for(let i = 0; i < personParent.children.length; i++) {
    personParent.children[i].classList.add('hidden');
  }
  let wrongChars = wrongCharParent.children.length;
  for(let i = 0; i < wrongChars; i++) {
    wrongCharParent.removeChild(wrongCharParent.firstChild);
  }
  for(let i = 0; i < randomWord.length; i++) {
    blanksParent.removeChild(blanksParent.firstChild);
  }
  randomWord = getRandomWord(words);
  emptyWordArray = Array(randomWord.length);
  answerWordArray = randomWord.split('');
  wrongScore = 0;
  wrongCharScore.textContent = 'Wrong Characters: ' + wrongScore;
  console.log(randomWord);
  createBlanks(blanksParent, randomWord);
  resetButton.classList.add('hidden');
  submitButton.disabled = false;
});

function addWrongChar(parent, character) {
  const span = document.createElement('span');
  span.textContent = character + ' ';
  parent.appendChild(span);
}

function getRandomWord(words) {
  let random = Math.floor(Math.random() * words.length);
  let randomWord = words[random];
  return randomWord;
}