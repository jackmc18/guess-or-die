function checkGuess(word, letter) {
  let indices = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i] === letter.toLowerCase()) {
      indices.push(i);
    }
  }
  return indices;
}

export default checkGuess;