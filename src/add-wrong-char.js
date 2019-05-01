function addWrongChar(parent, character) {
  const span = document.createElement('span');
  span.textContent = character + ' ';
  parent.appendChild(span);
}

export default addWrongChar;