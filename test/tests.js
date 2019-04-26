const test = QUnit.test;

// const words = ['javascript', 'language', 'scripting', 'interpreted', 'dynamic',
//   'programming', 'array', 'integer', 'string', 'method', 'property', 'argument'];

function guessChecker(word, letter) {
  let indices = [];
  for(let i = 0; i < word.length; i++) {
    if(word[i] === letter) {
      indices.push(i);
    }
  }
  return indices;
}

test('Guess a letter which exists in the word expect [0] back', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const word = 'javascript';
  const guess = 'j';
  const expected = [0];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = guessChecker(word, guess);
  //Assert
  assert.deepEqual(result, expected);
});