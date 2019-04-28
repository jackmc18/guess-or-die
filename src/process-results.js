function processResults(winFlag, resultParent, score, scoreCount) {
  scoreCount++;
  if(winFlag) {
    resultParent.textContent = 'Results: YOU WIN!';
    score.textContent = 'Wins: ' + scoreCount;
  } else {
    resultParent.textContent = 'Results: YOU LOSE!';
    score.textContent = 'Losses: ' + scoreCount;
  }
}

export default processResults;