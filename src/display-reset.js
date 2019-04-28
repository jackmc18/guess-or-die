function displayReset(submit, reset) {
  submit.disabled = true;
  reset.classList.remove('hidden');
}

export default displayReset;