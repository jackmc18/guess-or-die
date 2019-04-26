// const words = ['javascript', 'language', 'scripting', 'interpreted', 'dynamic',
//   'programming', 'array', 'integer', 'string', 'method', 'property', 'argument'];

function checkGuess(word, letter) {
  let indices = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
      indices.push(i);
    }
  }
  return indices;
}

export { checkGuess };