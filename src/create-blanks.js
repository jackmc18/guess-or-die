function createBlanks(parent, word) {
  for(let i = 0; i < word.length; i++) {
    let blankDiv = document.createElement('div');
    blankDiv.classList.add('blank');
    parent.appendChild(blankDiv);
  }
}

export default createBlanks;