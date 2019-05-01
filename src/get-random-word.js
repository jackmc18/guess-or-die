function getRandomWord(words) {
  let random = Math.floor(Math.random() * words.length);
  let randomWord = words[random];
  return randomWord;
}

export default getRandomWord;