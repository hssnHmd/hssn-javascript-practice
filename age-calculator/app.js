const btn = document.querySelector('button'),
  result = document.querySelector('.result'),
  inputEl = document.querySelector('input');
let age = null;
function calculateAge() {
  const birthDate = inputEl.value;
  if (birthDate === '') {
    return alert('Please select date ');
  }
  const age = getAge(birthDate);
  result.innerText = `Your age is:  ${age} ${age > 1 ? 'years' : 'year'} old`;
}

function getAge(birthValue) {
  const currentDate = new Date();
  const birthDayDate = new Date(birthValue);
  age = currentDate.getFullYear() - birthDayDate.getFullYear();
  const month = currentDate.getMonth() - birthDayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthDayDate.getDate())
  ) {
    age--;
  }

  return age;
}
btn.addEventListener('click', calculateAge);
