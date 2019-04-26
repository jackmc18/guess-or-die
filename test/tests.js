import { checkGuess } from '../src/check-guess.js';
const test = QUnit.test;

test('Guess a letter which exists in the word expect [0] back', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const word = 'javascript';
  const guess = 'j';
  const expected = [0];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = checkGuess(word, guess);
  //Assert
  assert.deepEqual(result, expected);
});

test('Guess a letter which exists twice in the word expect [1, 3] back', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const word = 'javascript';
  const guess = 'a';
  const expected = [1, 3];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = checkGuess(word, guess);
  //Assert
  assert.deepEqual(result, expected);
});


test('Guess a letter which doesn`t exist in the word expect [] back', function(assert) {
  //Arrange
  // Set up your parameters and expectations
  const word = 'javascript';
  const guess = 'u';
  const expected = [];
  //Act 
  // Call the function you're testing and set the result to a const
  const result = checkGuess(word, guess);
  //Assert
  assert.deepEqual(result, expected);
});