const inputEl = document.querySelector('#input'),
  totalCharacter = document.querySelector('.total-charachter'),
  reamaingChar = document.querySelector('#remaining-char');

inputEl.addEventListener('keyup', () => {
  updateCoun();
});

updateCoun();
function updateCoun() {
  totalCharacter.innerText = inputEl.value.length;
  reamaingChar.innerText =
    inputEl.getAttribute('maxlength') - inputEl.value.length;
}
